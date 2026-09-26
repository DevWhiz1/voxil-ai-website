/* =========================
Animated number counters

Markup:
  <span data-count="98" data-suffix="%" data-prefix="" data-decimals="0">98%</span>

The element's text is replaced as it counts up. The pre-rendered text is the
fallback, so the correct value is on screen even if JS never runs.
=========================== */

const DURATION = 1600;

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const format = (value, decimals) =>
  decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString('en-US');

const run = (el) => {
  const target = parseFloat(el.dataset.count);
  if (Number.isNaN(target)) return;

  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / DURATION, 1);
    el.textContent = prefix + format(target * easeOutExpo(progress), decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const initCounters = () => {
  const nodes = document.querySelectorAll('[data-count]');
  if (!nodes.length) return;

  // Reduced motion: leave the pre-rendered final value alone.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  nodes.forEach((el) => observer.observe(el));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}
