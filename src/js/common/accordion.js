/* =========================
FAQ accordion

Markup:
  <div data-accordion>                      <!-- add data-accordion-multi to allow many open -->
    <div class="faq-item">
      <button class="faq-trigger" aria-expanded="false">…<span class="faq-icon">+</span></button>
      <div class="faq-panel"><div class="faq-panel-inner">…</div></div>
    </div>
  </div>

Panels animate on max-height, so the height is measured from scrollHeight
rather than hard-coded.
=========================== */

const closeItem = (item) => {
  const panel = item.querySelector('.faq-panel');
  const trigger = item.querySelector('.faq-trigger, .faq-trigger-light');
  item.classList.remove('is-open');
  trigger?.setAttribute('aria-expanded', 'false');
  if (!panel) return;
  // An open panel rests at `none`; pin it to a pixel height first so the
  // collapse has a starting point to animate from.
  if (panel.style.maxHeight === 'none') {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    void panel.offsetHeight;
  }
  panel.style.maxHeight = '';
};

const openItem = (item) => {
  const panel = item.querySelector('.faq-panel');
  const trigger = item.querySelector('.faq-trigger, .faq-trigger-light');
  item.classList.add('is-open');
  trigger?.setAttribute('aria-expanded', 'true');
  if (!panel) return;
  panel.style.maxHeight = `${panel.scrollHeight}px`;
  // Release the cap once expanded so late-loading fonts or a resize can't
  // clip the answer text.
  const release = (e) => {
    if (e.propertyName !== 'max-height' || !item.classList.contains('is-open')) return;
    panel.style.maxHeight = 'none';
    panel.removeEventListener('transitionend', release);
  };
  panel.addEventListener('transitionend', release);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) panel.style.maxHeight = 'none';
};

const initAccordions = () => {
  const groups = document.querySelectorAll('[data-accordion]');
  if (!groups.length) return;

  groups.forEach((group) => {
    const allowMultiple = group.hasAttribute('data-accordion-multi');
    const items = Array.from(group.querySelectorAll('.faq-item, .faq-item-light'));

    items.forEach((item) => {
      const trigger = item.querySelector('.faq-trigger, .faq-trigger-light');
      if (!trigger) return;

      // Honour a server-rendered open state.
      if (item.classList.contains('is-open')) openItem(item);

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        if (!allowMultiple) {
          items.forEach((other) => other !== item && closeItem(other));
        }

        if (isOpen) closeItem(item);
        else openItem(item);
      });
    });
  });

  // Re-measure open panels when the text reflows at a new width.
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelectorAll('.is-open > .faq-panel').forEach((panel) => {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      });
    }, 150);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccordions);
} else {
  initAccordions();
}
