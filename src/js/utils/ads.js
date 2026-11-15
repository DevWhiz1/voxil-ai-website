/* =========================
Google AdSense, loaded on demand after consent

Ads load only when:
1. The page is indexable (no noindex robots meta), and
2. The visitor has accepted advertising cookies (see cookie-consent.js), and
3. The visitor has interacted once (scroll, touch, key, pointer).

This keeps thin / demo pages out of the ad inventory and matches the
privacy policy disclosure for Google AdSense.
=========================== */

import { firstInteraction } from './interaction';

const ADSENSE_CLIENT = 'ca-pub-1553070913460255';
const CONSENT_KEY = 'voxil-cookie-consent';

const isNoindex = () => {
  const robots = document.querySelector('meta[name="robots"]');
  return robots && /noindex/i.test(robots.getAttribute('content') || '');
};

const hasAdsConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return parsed?.ads === true;
  } catch {
    return false;
  }
};

let loaded = false;

export const loadAdsense = () => {
  if (loaded || isNoindex() || !hasAdsConsent()) return;
  loaded = true;
  firstInteraction.then(() => {
    if (document.querySelector(`script[src*="adsbygoogle.js"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    document.head.appendChild(script);
  });
};

// Try on boot (returning visitors who already consented).
loadAdsense();

// Cookie banner can call this after Accept.
window.__voxilLoadAds = loadAdsense;
