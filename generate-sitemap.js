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

// changefreq + priority by tier. Anything unlisted falls back to DEFAULT_TIER.
// Root pages are keyed by filename; generated sections by URL prefix.
const TIERS = [
  {
    changefreq: 'weekly',
    priority: '0.9',
    match: (url) => url.startsWith('/services/') || url.startsWith('/for-agencies/') || ['/contact.html', '/book-meeting.html'].includes(url),
  },
  {
    changefreq: 'weekly',
    priority: '0.8',
    match: (url) => url.startsWith('/locations/') || url.startsWith('/industries/') || url.startsWith('/resources/'),
  },
  {
    changefreq: 'monthly',
    priority: '0.7',
    match: (url) =>
      url.startsWith('/blog/') ||
      url.startsWith('/case-studies/') ||
      url.startsWith('/portfolio/') ||
      ['/about.html', '/testimonial.html', '/faq.html'].includes(url),
  },
  {
    changefreq: 'yearly',
    priority: '0.3',
    match: (url) => ['/privacy-policy.html', '/terms-conditions.html'].includes(url),
  },
];

const DEFAULT_TIER = { changefreq: 'monthly', priority: '0.6' };
const ROOT_TIER = { changefreq: 'daily', priority: '1.0' };

const tierFor = (url) => {
  const { changefreq, priority } = TIERS.find((t) => t.match(url)) ?? DEFAULT_TIER;
  return { changefreq, priority };
};

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

// Generated pages are dated by their content source (content/ + templates),
// which git tracks; the HTML itself is build output.
const generatedLastmod = (file) => {
  const section = file.split('/')[0];
  const sources = ['content/site.js', `scripts/templates/${{ blog: 'blog', resources: 'resources', 'for-agencies': 'agencies', 'case-studies': 'case-studies', portfolio: 'portfolio' }[section] ?? 'service'}.js`];
  if (section === 'blog') {
    const slug = file.split('/')[1];
    if (slug !== 'index.html') sources.push(`content/blog/${slug}.js`);
  }
  const dates = sources.map(gitDate).filter(Boolean);
  return dates.length ? dates.sort().at(-1) : today;
};

const entries = [
  { loc: `${SITE_URL}/`, lastmod: lastmodFor('index.html'), ...ROOT_TIER },
  ...rootPages.map((page) => ({ loc: `${SITE_URL}/${page}`, lastmod: lastmodFor(page), ...tierFor(`/${page}`) })),
  ...generatedPages.map((file) => {
    const url = `/${file.replace(/index\.html$/, '')}`;
    return { loc: `${SITE_URL}${url}`, lastmod: generatedLastmod(file), ...tierFor(url) };
  }),
];

// Highest priority first so the important URLs lead the file.
entries.sort((a, b) => Number(b.priority) - Number(a.priority) || a.loc.localeCompare(b.loc));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map((e) =>
    [
      '  <url>',
      `    <loc>${e.loc}</loc>`,
      `    <lastmod>${e.lastmod}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
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
