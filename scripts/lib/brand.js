// Brand artwork shared by every hero: the 3D Voxil "V" mark and the thin line
// art along the bottom of hero sections. Both are inline SVG, so they cost no
// requests and stay sharp at any size.

// The two strokes of the V, from public/favicon.svg (viewBox 48 70 122 122).
const V_BLUE =
  'M133.118866,141.178101 C131.297379,144.340332 129.644760,147.176712 127.734177,150.455856 C114.256027,126.964241 101.129776,104.085960 87.567520,80.447762 C92.328445,80.447762 96.447250,80.160576 100.484062,80.609962 C101.822426,80.758942 103.294785,82.600792 104.120110,84.011391 C111.931557,97.362228 119.616501,110.787086 127.729935,124.871193 C133.904221,114.308838 139.820587,104.187698 146.254623,93.180969 C140.516861,93.180969 135.461395,92.863396 130.467651,93.282127 C126.520439,93.613106 124.333366,92.209259 122.784164,88.732384 C121.598587,86.071617 119.881714,83.647591 118.125130,80.646690 C134.935333,80.646690 150.996017,80.646690 167.955002,80.646690 C156.248367,100.977264 144.768066,120.914764 133.118866,141.178101 z';
const V_NAVY =
  'M86.889160,118.043579 C94.493431,131.153244 101.929710,143.938156 109.475739,156.911758 C111.833138,152.828415 114.072433,148.949646 116.773575,144.270905 C119.171608,148.514206 121.418320,152.258636 123.372932,156.149811 C123.748940,156.898361 123.212852,158.355164 122.700455,159.260498 C118.445007,166.779129 114.096291,174.244995 109.418861,182.344849 C89.844925,148.408737 70.488174,114.849159 50.653042,80.460190 C60.355152,80.460190 69.260216,80.392014 78.161125,80.553215 C79.183693,80.571739 80.522018,81.654877 81.131210,82.614380 C83.157265,85.805489 84.917503,89.165375 87.113548,93.051392 C82.166245,93.051392 77.800270,93.051392 72.442543,93.051392 C77.494354,101.778786 82.107765,109.748810 86.889160,118.043579 z';

const hex = (n) => n.toString(16).padStart(2, '0');
const lerp = (a, b, t) => {
  const c = (s, i) => parseInt(s.slice(i, i + 2), 16);
  return `#${[1, 3, 5].map((i) => hex(Math.round(c(a, i) + (c(b, i) - c(a, i)) * t))).join('')}`;
};

/**
 * The V mark with an extruded 3D edge. Depth is drawn as many thin stacked
 * copies (back to front) so the side faces look solid rather than stepped.
 * `id` keeps <defs> ids unique when more than one mark is on a page.
 */
export const brandMark = (id = 'vx', cls = 'hero-mark__svg') => {
  const layers = 40;
  const ext = [];
  for (let i = layers; i > 0; i--) {
    const t = (layers - i) / (layers - 1);
    const dx = (i * 0.25).toFixed(2);
    const dy = (i * 0.33).toFixed(2);
    ext.push(`<use href="#${id}-b" transform="translate(${dx} ${dy})" fill="${lerp('#06264f', '#0a3f7a', t)}"/>`);
    ext.push(`<use href="#${id}-n" transform="translate(${dx} ${dy})" fill="${lerp('#031a3a', '#06305f', t)}"/>`);
  }
  return `<svg class="${cls}" viewBox="40 66 150 136" aria-hidden="true" focusable="false"><defs><path id="${id}-b" d="${V_BLUE}"/><path id="${id}-n" d="${V_NAVY}"/><linearGradient id="${id}-gb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3aa0f0"/><stop offset=".55" stop-color="#0b74c4"/><stop offset="1" stop-color="#075c9e"/></linearGradient><linearGradient id="${id}-gn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d63b8"/><stop offset=".6" stop-color="#074386"/><stop offset="1" stop-color="#05346b"/></linearGradient></defs>${ext.join('')}<use href="#${id}-b" fill="url(#${id}-gb)"/><use href="#${id}-n" fill="url(#${id}-gn)"/></svg>`;
};

// Single-colour V for watermarks on dark panels; takes the text colour.
export const brandMarkFlat = () =>
  `<svg viewBox="48 70 122 122" fill="currentColor" aria-hidden="true" focusable="false"><path d="${V_BLUE}"/><path d="${V_NAVY}"/></svg>`;

// Thin teal, blue and coral strokes along the bottom edge of a hero.
export const heroLines = () => `
  <svg class="hero-lines" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path d="M-20 210 C 40 210 40 120 100 120 S 160 210 220 210" />
    <path class="hero-lines__b" d="M300 40 C 380 40 400 70 500 70" />
    <path d="M330 220 C 360 160 420 150 520 150 S 640 120 650 60" />
    <path class="hero-lines__c" d="M760 220 L 760 110 A 60 60 0 0 1 880 110 L 880 220" />
    <path class="hero-lines__b" d="M960 220 L 960 140" />
    <path d="M1100 220 C 1100 170 1060 150 1100 120 S 1200 90 1210 40" />
    <path class="hero-lines__b" d="M1290 150 L 1440 150" />
    <path class="hero-lines__c" d="M1400 220 C 1400 150 1440 130 1460 130" />
  </svg>`;

// Decoration for inner-page heroes: the line art, plus a smaller 3D mark on
// wide screens where there is room beside the content.
export const heroDecor = () => `
      ${heroLines()}
      <span class="hero-corner-mark" aria-hidden="true">${brandMark('vxc', 'hero-corner-mark__svg')}</span>`;
