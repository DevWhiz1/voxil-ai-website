/* =========================
Google AdSense, loaded on demand

The AdSense script is large and auto ads can push the page down when they
fill, so it is injected only after the visitor's first scroll, touch, key
press or pointer move. The page paints at full speed, and any ad movement
happens after the visitor is already interacting.
=========================== */

import { firstInteraction } from './interaction';

const ADSENSE_CLIENT = 'ca-pub-1553070913460255';

firstInteraction.then(() => {
  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  document.head.appendChild(script);
});
