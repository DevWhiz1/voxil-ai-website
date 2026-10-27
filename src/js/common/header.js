/* =========================
Header behaviour

- Adds `.is-scrolled` to the header past a small scroll offset, which swaps the
  transparent-over-hero treatment for the solid blurred bar.
- Marks the nav link matching the current page with `.is-current`.
- Drives the reading-progress bar (`[data-scroll-progress]`).
=========================== */

const SCROLL_OFFSET = 24;

// Watches a SCROLL_OFFSET-tall sentinel at the top of the page instead of
// reading window.scrollY, which forced a layout on load.
const initScrollState = (header) => {
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = `position:absolute;top:0;left:0;width:1px;height:${SCROLL_OFFSET}px;pointer-events:none;`;
  document.body.prepend(sentinel);

  new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-scrolled', !entry.isIntersecting);
  }).observe(sentinel);
};

const initProgress = () => {
  const bar = document.querySelector('[data-scroll-progress]');
  if (!bar) return;

  const apply = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };
  // First measure waits for the frame so it doesn't force a layout mid-load.
  requestAnimationFrame(apply);
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
