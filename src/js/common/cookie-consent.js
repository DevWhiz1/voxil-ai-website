/* =========================
Cookie / advertising consent banner

Stores a small preference in localStorage. Analytics (Vercel) stay cookieless;
Google AdSense only loads after the visitor accepts advertising cookies.
=========================== */

const CONSENT_KEY = 'voxil-cookie-consent';
const BANNER_ID = 'cookie-consent';

const readConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const writeConsent = (ads) => {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ ads: !!ads, updated: new Date().toISOString() })
  );
};

const hide = (el) => {
  el.classList.add('cookie-consent--hide');
  window.setTimeout(() => el.remove(), 320);
};

const mount = () => {
  if (readConsent() || document.getElementById(BANNER_ID)) return;

  const el = document.createElement('div');
  el.id = BANNER_ID;
  el.className = 'cookie-consent';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-live', 'polite');
  el.setAttribute('aria-label', 'Cookie preferences');
  el.innerHTML = `
    <div class="cookie-consent__inner">
      <p class="cookie-consent__text">
        We use essential cookies to run this site. With your permission we also load
        Google AdSense to show ads.
        <a href="/privacy-policy.html">Privacy policy</a>
        ·
        <a href="/advertising.html">Advertising</a>
      </p>
      <div class="cookie-consent__actions">
        <button type="button" class="cookie-consent__btn cookie-consent__btn--ghost" data-consent="essential">Essential only</button>
        <button type="button" class="cookie-consent__btn cookie-consent__btn--solid" data-consent="all">Accept ads</button>
      </div>
    </div>
  `;

  document.body.appendChild(el);

  el.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-consent]');
    if (!btn) return;
    const allowAds = btn.getAttribute('data-consent') === 'all';
    writeConsent(allowAds);
    hide(el);
    if (allowAds && typeof window.__voxilLoadAds === 'function') {
      window.__voxilLoadAds();
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
