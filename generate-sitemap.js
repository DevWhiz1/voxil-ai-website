import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.voxilai.tech';

// Pages deliberately kept out of the sitemap.
//   404       - error page
//   index     - already covered by the root "/" entry
//   login/signup - auth screens, no search value
//   service-details    - orphaned template stub, duplicate <title> of ai-saas-development
//   integration-circle - orphaned demo page; its component is embedded in other pages
const EXCLUDED = new Set([
  '404.html',
  'index.html',
  'login.html',
  'signup.html',
  'service-details.html',
  'integration-circle.html',
]);

// Folders written by scripts/build-pages.js; each page is <dir>/index.html.
const GENERATED_DIRS = ['services', 'locations', 'industries', 'blog', 'resources', 'for-agencies', 'case-studies', 'portfolio'];

const today = new Date().toISOString().slice(0, 10);

// Last git commit date for a path, or null when untracked/uncommitted.
function gitDate(target) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', target], {
      cwd: __dirname,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

// A page's real content lives in its <Component> partials, so date it from those
// too. Shared partials (header/footer/cta) are skipped on purpose - a chrome tweak
// touches all 58 pages and would otherwise reset every lastmod to the same day.
function lastmodFor(page) {
  const html = fs.readFileSync(path.join(__dirname, page), 'utf8');
  const partials = [...html.matchAll(/<Component\s+src="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !src.includes('/shared/'));

  const dates = [page, ...new Set(partials)].map(gitDate).filter(Boolean);
  return dates.length ? dates.sort().at(-1) : today;
}

const rootPages = fs
  .readdirSync(__dirname)
  .filter((f) => f.endsWith('.html') && !EXCLUDED.has(f))
  .sort();

const generatedPages = [];
const walk = (dir) => {
  for (const item of fs.readdirSync(path.join(__dirname, dir), { withFileTypes: true })) {
    const rel = `${dir}/${item.name}`;
    if (item.isDirectory()) walk(rel);
    // Pages marked noindex (the portfolio demo funnels) stay out of the sitemap.
    else if (item.name === 'index.html' && !/<meta name="robots" content="noindex/.test(fs.readFileSync(path.join(__dirname, rel), 'utf8'))) generatedPages.push(rel);
  }
};
GENERATED_DIRS.filter((d) => fs.existsSync(path.join(__dirname, d))).forEach(walk);

// Uncommitted edits are dated today.
function isDirty(target) {
  try {
    return execFileSync('git', ['status', '--porcelain', '--', target], { cwd: __dirname, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() !== '';
  } catch {
    return false;
  }
}

// Fallback when git history is unavailable (e.g. a shallow clone on the build
// server): keep the date already recorded in the committed sitemap.
const previous = new Map();
const previousPath = path.join(__dirname, 'public', 'sitemap.xml');
if (fs.existsSync(previousPath)) {
  for (const m of fs.readFileSync(previousPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) previous.set(m[1], m[2]);
}

// Generated pages are dated by their own committed HTML file. The page HTML
// only changes when that page's content changes (shared header and footer are
// included at build time), so each page gets its real last-modified date.
const generatedLastmod = (file, loc) => (isDirty(file) ? today : gitDate(file) ?? previous.get(loc) ?? today);

const entries = [
  { loc: `${SITE_URL}/`, lastmod: lastmodFor('index.html') },
  ...rootPages.map((page) => ({ loc: `${SITE_URL}/${page}`, lastmod: lastmodFor(page) })),
  ...generatedPages.map((file) => {
    const loc = `${SITE_URL}/${file.replace(/index\.html$/, '')}`;
    return { loc, lastmod: generatedLastmod(file, loc) };
  }),
];

// Home page first, then alphabetical. Search engines ignore <priority> and
// <changefreq>, so the sitemap only carries <loc> and a real <lastmod>.
entries.sort((a, b) => (a.loc === `${SITE_URL}/` ? -1 : b.loc === `${SITE_URL}/` ? 1 : a.loc.localeCompare(b.loc)));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map((e) =>
    [
      '  <url>',
      `    <loc>${e.loc}</loc>`,
      `    <lastmod>${e.lastmod}</lastmod>`,
      '  </url>',
    ].join('\n')
  ),
  '</urlset>',
  '',
].join('\n');

const outPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');

console.log(
  `Wrote ${entries.length} URLs to public/sitemap.xml ` +
    `(${rootPages.length} root pages, ${generatedPages.length} generated pages, "/" standing in for index.html)`
);
