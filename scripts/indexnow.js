// IndexNow: tells Bing, Yandex, Seznam and other participating search engines
// which URLs changed, so they recrawl them right away instead of waiting.
// (Google does not use IndexNow; it relies on the sitemap and Search Console.)
//
// Usage:
//   node scripts/indexnow.js --from <git sha> --to <git sha>   submit pages changed between two commits
//   node scripts/indexnow.js --all                              submit every URL in public/sitemap.xml
//   add --dry-run to print the URLs without submitting
//   add --wait to poll /build-info.json until the live site serves the --to commit
//
// Normally run by .github/workflows/indexnow.yml after each push to main.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.voxilai.tech';
const HOST = 'www.voxilai.tech';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const value = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

// The key is the name of the <32 hex>.txt file in public/.
const keyFile = fs.readdirSync(path.join(ROOT, 'public')).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('IndexNow key file (public/<32 hex chars>.txt) not found');
const KEY = keyFile.replace('.txt', '');

// Only indexable pages are submitted: the sitemap already excludes noindex
// pages, redirects and drafts.
const sitemapUrls = new Set(
  [...fs.readFileSync(path.join(ROOT, 'public/sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
);

// Root pages built from src/components/pages/<folder>/.
const COMPONENT_PAGES = { home: '/', 'contact-us': '/contact.html' };

const urlForFile = (file) => {
  if (file.endsWith('/index.html')) return `${SITE}/${file.replace(/index\.html$/, '')}`;
  if (file === 'index.html') return `${SITE}/`;
  if (/^[^/]+\.html$/.test(file)) return `${SITE}/${file}`;
  const m = file.match(/^src\/components\/pages\/([^/]+)\//);
  if (m) return `${SITE}${COMPONENT_PAGES[m[1]] ?? `/${m[1]}.html`}`;
  return null;
};

const changedUrls = (from, to) => {
  const out = execFileSync('git', ['diff', '--name-only', '--diff-filter=AMR', `${from}..${to}`], { cwd: ROOT, encoding: 'utf8' });
  const files = out.split('\n').filter(Boolean);
  const urls = new Set(files.map(urlForFile).filter((u) => u && sitemapUrls.has(u)));
  // The sitemap itself changing means pages were added or re-dated.
  if (files.includes('public/sitemap.xml')) urls.add(`${SITE}/`);
  return [...urls];
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Wait until the deploy for `sha` is live, so crawlers fetch the new content.
const waitForDeploy = async (sha, timeoutMs = 20 * 60 * 1000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${SITE}/build-info.json?t=${Date.now()}`, { headers: { 'cache-control': 'no-cache' } });
      if (res.ok) {
        const info = await res.json();
        if (info.sha === sha) return true;
      }
    } catch {
      // network hiccup; try again
    }
    await sleep(30 * 1000);
  }
  console.warn(`Deploy for ${sha} not detected after ${timeoutMs / 60000} minutes; submitting anyway.`);
  return false;
};

const submit = async (urls) => {
  // IndexNow accepts up to 10,000 URLs per request.
  for (let i = 0; i < urls.length; i += 10000) {
    const batch = urls.slice(i, i + 10000);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: batch }),
    });
    // 200 = received, 202 = accepted (key validation pending); anything else is an error.
    if (res.status !== 200 && res.status !== 202) {
      throw new Error(`IndexNow returned ${res.status}: ${await res.text()}`);
    }
    console.log(`IndexNow accepted ${batch.length} URL(s) (HTTP ${res.status}).`);
  }
};

const urls = flag('all') ? [...sitemapUrls] : changedUrls(value('from'), value('to') ?? 'HEAD');

if (!urls.length) {
  console.log('No indexable pages changed; nothing to submit.');
  process.exit(0);
}

console.log(`${urls.length} URL(s) to submit:\n  ${urls.slice(0, 50).join('\n  ')}${urls.length > 50 ? `\n  …and ${urls.length - 50} more` : ''}`);

if (flag('dry-run')) process.exit(0);
if (flag('wait') && value('to')) await waitForDeploy(value('to'));
await submit(urls);
