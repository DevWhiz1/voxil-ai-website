/* =========================
Interactive checklist, /resources/ghl-setup-checklist/

Markup: [data-checklist="<storage key>"] wrapping checkboxes [data-check-id],
a counter [data-checklist-count], a bar [data-checklist-bar] and optional
[data-checklist-reset] / [data-checklist-print] buttons.

Progress is a per-visitor convenience kept in localStorage. Storage can be
unavailable (private mode, blocked site data), so every access is guarded and
the checklist still works without it.
=========================== */

const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const save = (key, ids) => {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    /* storage unavailable, progress just won't persist */
  }
};

const initChecklist = (root) => {
  const key = `voxil-checklist:${root.dataset.checklist}`;
  const boxes = [...root.querySelectorAll('[data-check-id]')];
  const countEl = root.querySelector('[data-checklist-count]');
  const bar = root.querySelector('[data-checklist-bar]');

  const saved = new Set(load(key));
  boxes.forEach((box) => (box.checked = saved.has(box.dataset.checkId)));

  const render = () => {
    const done = boxes.filter((b) => b.checked);
    if (countEl) countEl.textContent = String(done.length);
    if (bar) bar.style.width = `${boxes.length ? (done.length / boxes.length) * 100 : 0}%`;
    save(
      key,
      done.map((b) => b.dataset.checkId)
    );
  };

  boxes.forEach((box) => box.addEventListener('change', render));

  root.querySelector('[data-checklist-reset]')?.addEventListener('click', () => {
    boxes.forEach((b) => (b.checked = false));
    render();
  });
  root.querySelector('[data-checklist-print]')?.addEventListener('click', () => window.print());

  render();
};

const init = () => document.querySelectorAll('[data-checklist]').forEach(initChecklist);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
