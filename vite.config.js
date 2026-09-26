import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

import { minify } from 'terser';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

import { seoData } from './src/seo-data.js';

// Every .html file is a Vite entry: the hand-written pages at the root plus the
// generated sections (services/, locations/, …) written by scripts/build-pages.js.
const PAGE_DIRS = ['', 'services', 'locations', 'industries', 'blog', 'resources', 'for-agencies'];

const collectHtml = (dir, out) => {
  const abs = path.resolve(__dirname, dir);
  if (!fs.existsSync(abs)) return;
  for (const item of fs.readdirSync(abs, { withFileTypes: true })) {
    const rel = dir ? `${dir}/${item.name}` : item.name;
    if (item.isFile() && item.name.endsWith('.html')) {
      out[rel.replace(/\.html$/, '').replace(/\//g, '__')] = path.resolve(__dirname, rel);
    } else if (item.isDirectory() && dir) {
      collectHtml(rel, out);
    }
  }
};

const getHtmlEntries = () => {
  const entries = {};
  PAGE_DIRS.forEach((dir) => collectHtml(dir, entries));
  return entries;
};
const jsToBottomNoModule = () => {
  return {
    name: 'no-attribute',
    transformIndexHtml(html) {
      html = html.replace(`type="module" crossorigin`, '');
      // Only move the bundled entry script — JSON-LD blocks must stay in <head>.
      const match = html.match(/<script[^>]*src="[^"]*\/assets\/[^"]*"[^>]*><\/script>/);
      if (!match) return html;
      html = html.replace(match[0], '');
      html = html.replace('<!-- SCRIPT -->', match[0]);
      return html;
    },
  };
};
const cssCrossOriginRemove = () => {
  return {
    name: 'css-cross-origin-remove',
    transformIndexHtml(html) {
      return html.replace(
        /(<link[^>]*rel=["']stylesheet["'][^>]*?)\s+crossorigin(?:=["'][^"']*["'])?/g,
        '$1'
      );
    },
  };
};
const vendorMinifier = () => {
  return {
    name: 'vendor-minifier',
    async generateBundle(options, bundle) {
      // Minify vendor scripts after build
      const vendorDir = path.resolve(__dirname, 'dist/vendor');

      if (fs.existsSync(vendorDir)) {
        const vendorFiles = fs.readdirSync(vendorDir);

        for (const file of vendorFiles) {
          if (file.endsWith('.js')) {
            const filePath = path.join(vendorDir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            try {
              // Use Terser for advanced minification
              const minified = await minify(content, {
                compress: {
                  drop_console: false, // Keep console logs for debugging
                  drop_debugger: true,
                  pure_funcs: ['console.log'], // Remove console.log calls
                  passes: 2,
                },
                mangle: {
                  toplevel: false, // Don't mangle top-level names to avoid breaking
                },
                format: {
                  comments: /@license|@preserve|@format|@version/i, // Preserve license comments
                },
                sourceMap: false,
              });

              // Write minified content back
              fs.writeFileSync(filePath, minified.code);

              // Calculate size reduction
              const originalSize = content.length;
              const minifiedSize = minified.code.length;
              const reduction = (((originalSize - minifiedSize) / originalSize) * 100).toFixed(1);

              console.log(`✅ Minified vendor script: ${file} (${reduction}% smaller)`);
            } catch (error) {
              console.warn(`⚠️ Failed to minify ${file}:`, error.message);
              // Fallback to basic minification
              const basicMinified = content
                .replace(/\/\/(?!.*@license|.*@preserve|.*@format|.*@version).*$/gm, '')
                .replace(/\/\*[\s\S]*?\*\/(?!.*@license|.*@preserve|.*@format|.*@version)/g, '')
                .replace(/\s+/g, ' ')
                .replace(/\s*([{}();,=+\-*/<>!&|])\s*/g, '$1')
                .replace(/\s+$/gm, '')
                .replace(/^\s*[\r\n]/gm, '')
                .trim();

              fs.writeFileSync(filePath, basicMinified);
              console.log(`✅ Basic minified vendor script: ${file}`);
            }
          }
        }
      }
    },
  };
};


const SITE_URL = 'https://voxilai.tech';

const escapeAttr = (value) => String(value).replace(/"/g, '&quot;');

// Upserts one <meta>/<link> tag, matched on its identifying attribute.
const upsertTag = (html, attr, key, tag) => {
  const regex = new RegExp(`<(meta|link)\\s+${attr}="${key}"[^>]*>`, 'i');
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `  ${tag}\n</head>`);
};

const readTag = (html, regex) => html.match(regex)?.[1];

// "/services/ai-receptionist/index.html" -> "/services/ai-receptionist/"
const publicPath = (ctxPath = '/') => ctxPath.replace(/index\.html$/, '');

const seoOptimizer = () => {
  return {
    name: 'seo-optimizer',
    transformIndexHtml(html, ctx) {
      let pageName = path.basename(ctx.path || '', '.html');
      if (!pageName || pageName === '/' || pageName === 'index') pageName = 'index';
      const isRootPage = !ctx.path || ctx.path.split('/').filter(Boolean).length <= 1;

      // Root pages take their copy from seo-data.js; generated pages carry their
      // own <title>/description/canonical, which are kept as written.
      const data = (isRootPage && seoData[pageName]) || {
        title: readTag(html, /<title>([\s\S]*?)<\/title>/i) || 'Voxil AI',
        description: readTag(html, /<meta\s+name="description"\s+content="([^"]*)"/i) || '',
      };
      const title = data.title;
      const description = escapeAttr(data.description);
      const canonicalUrl =
        readTag(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
        `${SITE_URL}${ctx.path === '/index.html' ? '/' : publicPath(ctx.path)}`;

      html = /<title>/i.test(html)
        ? html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
        : html.replace('</head>', `  <title>${title}</title>\n</head>`);

      html = upsertTag(html, 'name', 'description', `<meta name="description" content="${description}" />`);
      html = upsertTag(html, 'rel', 'canonical', `<link rel="canonical" href="${canonicalUrl}" />`);

      const og = {
        'og:url': canonicalUrl,
        'og:title': escapeAttr(title),
        'og:description': description,
      };
      Object.entries(og).forEach(([key, value]) => {
        html = upsertTag(html, 'property', key, `<meta property="${key}" content="${value}" />`);
      });

      const twitter = {
        'twitter:url': canonicalUrl,
        'twitter:title': escapeAttr(title),
        'twitter:description': description,
      };
      Object.entries(twitter).forEach(([key, value]) => {
        html = upsertTag(html, 'name', key, `<meta name="${key}" content="${value}" />`);
      });

      return html;
    },
  };
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML({
      tagName: 'Component',
    }),
    jsToBottomNoModule(),
    cssCrossOriginRemove(),
    vendorMinifier(),
    seoOptimizer(),
  ],
  server: {
    open: true,
  },
  base: '/',
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
    },
    minify: false,
    modulePreload: false,
    cssMinify: false,
    assetsDir: 'assets',
  },
});
