/* =========================
Article table of contents, highlights the section currently in view.
Links: [data-toc-link] pointing at #id headings inside [data-article].
=========================== */

const initToc = () => {
  const links = [...document.querySelectorAll('[data-toc-link]')];
  if (!links.length || !('IntersectionObserver' in window)) return;

  const byId = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));
  const setActive = (id) => links.forEach((l) => l.classList.toggle('is-active', l === byId.get(id)));

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: '-96px 0px -65% 0px' }
  );

  byId.forEach((_, id) => {
    const heading = document.getElementById(id);
    if (heading) observer.observe(heading);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToc);
} else {
  initToc();
}
