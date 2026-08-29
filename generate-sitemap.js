import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://voxilai.tech';

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
const TIERS = [
  {
    changefreq: 'weekly',
    priority: '0.9',
    pages: [
      'services.html',
      'pricing.html',
      'ai-voice-agents.html',
      'ai-chatbot-development.html',
      'ai-saas-development.html',
      'contact.html',
      'book-meeting.html',
    ],
  },
  {
    changefreq: 'monthly',
    priority: '0.8',
    pages: [
      'about.html',
      'process.html',
      'why-choose-us.html',
      'features.html',
      'use-case.html',
      'integration.html',
      'lead-capture-system.html',
      'case-study.html',
      'case-study-ecommerce.html',
      'case-study-finance.html',
      'case-study-healthcare.html',
      'case-study-real-estate.html',
      'success-stories.html',
      'testimonial.html',
      'customers.html',
    ],
  },
  {
    changefreq: 'weekly',
    priority: '0.7',
    pages: [
      'blog.html',
      'glossary.html',
      'whitepaper.html',
      'documentation.html',
      'tutorial.html',
      'faq.html',
      'changelog.html',
    ],
  },
  {
    changefreq: 'yearly',
    priority: '0.3',
    pages: [
      'privacy-policy.html',
      'terms-conditions.html',
      'gdpr.html',
      'legal.html',
      'refund-policy.html',
      'affiliate-policy.html',
      'security.html',
    ],
  },
];

const DEFAULT_TIER = { changefreq: 'monthly', priority: '0.6' };
const ROOT_TIER = { changefreq: 'daily', priority: '1.0' };

const tierFor = (page) => TIERS.find((t) => t.pages.includes(page)) ?? DEFAULT_TIER;

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

const pages = fs
  .readdirSync(__dirname)
  .filter((f) => f.endsWith('.html') && !EXCLUDED.has(f))
  .sort();

const entries = [
  { loc: `${SITE_URL}/`, lastmod: lastmodFor('index.html'), ...ROOT_TIER },
  ...pages.map((page) => ({
    loc: `${SITE_URL}/${page}`,
    lastmod: lastmodFor(page),
    ...tierFor(page),
  })),
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
    `(${pages.length + EXCLUDED.size} pages on disk, ${EXCLUDED.size} excluded, ` +
    `"/" standing in for index.html)`
);
