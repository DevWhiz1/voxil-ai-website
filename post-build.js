import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { minify as minifyHtml } from 'html-minifier-terser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all .html files
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Function to rename JavaScript file and update HTML references
function fixJavaScriptFile() {
  const distDir = path.join(__dirname, 'dist');
  const assetsDir = path.join(distDir, 'assets');

  // Find the JavaScript file with hash
  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find((file) => file.startsWith('main') && file.endsWith('.js'));

  if (jsFile && jsFile !== 'main.js') {
    const oldPath = path.join(assetsDir, jsFile);
    const newPath = path.join(assetsDir, 'main.js');

    // Rename the file
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${jsFile} to main.js`);

    // Update all HTML files to reference main.js and inject script tag
    const htmlFiles = findHtmlFiles(distDir);

    htmlFiles.forEach((filePath) => {
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace the old filename with main.js
      content = content.replace(new RegExp(jsFile, 'g'), 'main.js');

      // Inject the main.js script tag if it's missing. Root-absolute so pages in
      // nested folders (/services/…/) resolve it too. The stylesheet needs no help:
      // Vite already links the hashed CSS bundle from every page.
      if (content.includes('<!-- SCRIPT -->') && !content.includes('/assets/main.js"')) {
        content = content.replace('<!-- SCRIPT -->', '<script src="/assets/main.js"></script>');
      }

      fs.writeFileSync(filePath, content, 'utf8');
    });
  } else {
    console.log('No JavaScript file found to rename or already named main.js');
  }
}

// ---------------------------------------------------------------------------
// SVG sprite: inline icons repeated on a page (arrows, chevrons, checkmarks)
// are defined once as <symbol>s and referenced with <use>, which keeps pages
// light without changing how they look. Icons used once stay inline.
function spriteSvgs(html) {
  const re = /<svg\b([^>]*)>([\s\S]*?)<\/svg>/g;
  // Attributes that define how the icon is drawn move into the <symbol>;
  // attributes that place it on the page (class, aria-*, role) stay outside.
  const DRAW = ['viewBox', 'fill', 'stroke', 'stroke-width'];
  const attr = (attrs, name) => (attrs.match(new RegExp(`\\s${name}="([^"]*)"`)) || [])[1];
  const keyOf = (attrs, inner) => {
    const draw = DRAW.map((a) => attr(attrs, a) ?? '').join('|');
    return attr(attrs, 'viewBox') && !inner.includes('<use') ? `${draw}|${inner.trim()}` : null;
  };
  const counts = new Map();
  for (const m of html.matchAll(re)) {
    const key = keyOf(m[1], m[2]);
    if (key) counts.set(key, (counts.get(key) || 0) + 1);
  }
  const ids = new Map();
  let symbols = '';
  for (const [key, n] of counts) {
    if (n < 2) continue;
    const id = `i${ids.size}`;
    const parts = key.split('|');
    const drawAttrs = DRAW.map((a, i) => (parts[i] ? ` ${a}="${parts[i]}"` : '')).join('');
    ids.set(key, id);
    symbols += `<symbol id="${id}"${drawAttrs}>${parts.slice(DRAW.length).join('|')}</symbol>`;
  }
  if (!ids.size) return html;
  html = html.replace(re, (whole, attrs, inner) => {
    const id = ids.get(keyOf(attrs, inner));
    if (!id) return whole;
    const keep = attrs.replace(/\s(xmlns|viewBox|fill|stroke|stroke-width)="[^"]*"/g, '');
    return `<svg${keep}><use href="#${id}"/></svg>`;
  });
  const sprite = `<svg style="display:none" aria-hidden="true">${symbols}</svg>`;
  // xmlns is redundant for SVG inlined in HTML5 documents.
  return html.replace(/<body([^>]*)>/, `<body$1>${sprite}`).replace(/<svg([^>]*?) xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '<svg$1');
}

// HTML minification. JSON-LD and other scripts are left untouched.
async function optimizeHtml() {
  const files = findHtmlFiles(path.join(__dirname, 'dist'));
  let before = 0;
  let after = 0;
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    let html = spriteSvgs(original);
    // Pages that opt out of indexing (e.g. 404) keep only their noindex tag.
    if (/<meta name="robots" content="noindex/.test(html)) {
      html = html.replace(/<meta name="robots" content="index[^"]*"\s*\/?>/, '');
    }
    const out = await minifyHtml(html, {
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeComments: true,
      minifyCSS: false,
      minifyJS: false,
    });
    before += original.length;
    after += out.length;
    fs.writeFileSync(file, out, 'utf8');
  }
  console.log(`Optimized ${files.length} HTML files: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
}

// Run the script
fixJavaScriptFile();
await optimizeHtml();
