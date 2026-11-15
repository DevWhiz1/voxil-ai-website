/* =========================
Google AdSense, loaded on demand

The AdSense script is large and auto ads can push the page down when they
fill, so it is injected only after the visitor's first scroll, touch, key
press or pointer move. Ads are skipped on noindex pages (demo funnels and
secondary location pages) so thin inventory is not monetized.
=========================== */

import { firstInteraction } from './interaction';

const ADSENSE_CLIENT = 'ca-pub-1553070913460255';

const isNoindex = () => {
  const robots = document.querySelector('meta[name="robots"]');
  return robots && /noindex/i.test(robots.getAttribute('content') || '');
};

if (!isNoindex()) {
  firstInteraction.then(() => {
    if (document.querySelector(`script[src*="adsbygoogle.js"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    document.head.appendChild(script);
  });
}
