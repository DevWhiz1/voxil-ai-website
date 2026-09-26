// Helpers imported by blog posts and resource pages to render sourced stats,
// callouts and tables consistently.
import { getStat } from '../../content/stats.js';
import { dataTable, esc } from './ui.js';

export const link = (href, text) => `<a href="${href}">${text}</a>`;

const sourceLabel = (src) => `${src.name}, ${src.year}`;

// `data-stat` lets the page template collect every cited source automatically.
const sourceLink = (src, cls = '', id = '') =>
  src.url
    ? `<a href="${src.url}" target="_blank" rel="noopener" class="${cls}" data-stat="${id}">${esc(sourceLabel(src))}</a>`
    : `<span class="${cls}" data-stat="${id}">${esc(sourceLabel(src))}</span>`;

// Inline citation for prose: "(McKinsey, The State of AI, 2025)"
export const cite = (id) => `(${sourceLink(getStat(id).src, '', id)})`;

export const statTile = (id, accent = '#2fc4b6') => {
  const s = getStat(id);
  return `
            <figure class="stat-tile" style="--accent: ${accent}">
              <div class="stat-tile__value" style="color: color-mix(in srgb, ${accent} 80%, #0c1220)">${s.value}</div>
              <figcaption>
                <div class="stat-tile__label">${s.label}</div>
                ${sourceLink(s.src, 'stat-tile__source', id)}
              </figcaption>
            </figure>`;
};

export const statGrid = (ids, accent) =>
  `<div class="grid gap-3 sm:grid-cols-2">${ids.map((id) => statTile(id, accent)).join('')}</div>`;

export const callout = (title, body, accent = '#2fc4b6') =>
  `<div class="callout" style="--accent: ${accent}"><div class="callout-title">${title}</div><div class="text-tagline-2 text-secondary/75">${body}</div></div>`;

export const table = (head, rows, caption) => dataTable({ head, rows, caption });

// Unique sources for every stat cited in a rendered body.
export const sourcesIn = (html) => sourcesFor([...html.matchAll(/data-stat="([^"]+)"/g)].map((m) => m[1]));

export const sourcesFor = (ids) => {
  const seen = new Map();
  ids.forEach((id) => {
    const src = getStat(id).src;
    seen.set(sourceLabel(src), src);
  });
  return [...seen.values()];
};
