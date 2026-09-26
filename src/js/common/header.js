/* =========================
Header behaviour

- Adds `.is-scrolled` to the header past a small scroll offset, which swaps the
  transparent-over-hero treatment for the solid blurred bar.
- Marks the nav link matching the current page with `.is-current`.
- Drives the reading-progress bar (`[data-scroll-progress]`).
=========================== */

const SCROLL_OFFSET = 24;

const initScrollState = (header) => {
  const apply = () => {
    header.classList.toggle('is-scrolled', window.scrollY > SCROLL_OFFSET);
  };
  apply();
  window.addEventListener('scroll', apply, { passive: true });
};

const initProgress = () => {
  const bar = document.querySelector('[data-scroll-progress]');
  if (!bar) return;

  const apply = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };
  apply();
  window.addEventListener('scroll', apply, { passive: true });
  window.addEventListener('resize', apply);
};

// Normalises "/", "/index.html", "/about.html" and "/services/ai-receptionist/"
// to comparable paths. A nav link is current when the page is that URL or
// lives inside that section (e.g. /services/x/ lights up "Services").
const normalise = (p) => {
  const clean = p.replace(/index\.html$/, '').replace(/\.html$/, '');
  return clean.endsWith('/') ? clean : `${clean}/`;
};

const initCurrentLink = () => {
  const current = normalise(window.location.pathname);

  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const target = normalise(new URL(link.getAttribute('href') || '/', window.location.origin).pathname);
    if (target !== '/' && (current === target || current.startsWith(target))) {
      link.classList.add('is-current');
      if (current === target) link.setAttribute('aria-current', 'page');
    }
  });
};

const init = () => {
  const header = document.querySelector('.site-header');
  if (header) initScrollState(header);
  initProgress();
  initCurrentLink();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
