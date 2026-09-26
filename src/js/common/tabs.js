/* =========================
Tab panels

Markup:
  <div data-tabs>
    <button data-tab="chat" class="tab-btn is-active">Chat</button>
    <button data-tab="voice" class="tab-btn">Voice</button>
    <div data-tab-panel="chat" class="tab-panel">…</div>
    <div data-tab-panel="voice" class="tab-panel" hidden>…</div>
  </div>
=========================== */

const initTabs = () => {
  const groups = document.querySelectorAll('[data-tabs]');
  if (!groups.length) return;

  groups.forEach((group) => {
    const buttons = Array.from(group.querySelectorAll('[data-tab]'));
    const panels = Array.from(group.querySelectorAll('[data-tab-panel]'));
    if (!buttons.length) return;

    const select = (key) => {
      buttons.forEach((btn) => {
        const active = btn.dataset.tab === key;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.tabPanel !== key;
      });
    };

    buttons.forEach((btn) => {
      btn.setAttribute('role', 'tab');
      btn.addEventListener('click', () => select(btn.dataset.tab));
    });

    const initial = buttons.find((b) => b.classList.contains('is-active')) || buttons[0];
    select(initial.dataset.tab);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTabs);
} else {
  initTabs();
}
