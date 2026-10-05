/* =========================
Blog topic filter (/blog/)

Markup from scripts/templates/blog.js:
  <div data-blog-filters>
    <button data-blog-filter="all">…</button>
    <button data-blog-filter="gohighlevel">…</button>
    <a data-cats="gohighlevel lead-generation">…</a>
  </div>

Every card stays in the HTML for crawlers; filtering only toggles `hidden`.
A hash such as /blog/#gohighlevel opens that topic directly.
=========================== */

const initFilter = (root) => {
  const buttons = Array.from(root.querySelectorAll('[data-blog-filter]'));
  const cards = Array.from(root.querySelectorAll('[data-cats]'));
  const keys = buttons.map((b) => b.dataset.blogFilter);

  const select = (key, updateHash) => {
    if (!keys.includes(key)) key = 'all';
    buttons.forEach((b) => {
      const on = b.dataset.blogFilter === key;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    cards.forEach((c) => {
      c.hidden = key !== 'all' && !c.dataset.cats.split(' ').includes(key);
    });
    if (updateHash) history.replaceState(null, '', key === 'all' ? location.pathname : `#${key}`);
  };

  buttons.forEach((b) => b.addEventListener('click', () => select(b.dataset.blogFilter, true)));
  const fromHash = () => {
    const key = location.hash.slice(1);
    if (keys.includes(key)) {
      select(key, false);
      root.scrollIntoView({ block: 'start' });
    }
  };
  window.addEventListener('hashchange', fromHash);
  select('all', false);
  fromHash();
};

const init = () => document.querySelectorAll('[data-blog-filters]').forEach(initFilter);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
