/* Simple mobile sidebar open/close, no animation libs */

const mobileNav = {
  init() {
    const openBtn = document.querySelector('.nav-hamburger');
    const closeBtn = document.querySelector('.nav-hamburger-close');
    const sidebar = document.querySelector('.sidebar');

    if (!sidebar) return;

    const open = () => {
      sidebar.classList.add('show-sidebar');
      document.body.classList.add('overflow-hidden');
    };

    const close = () => {
      sidebar.classList.remove('show-sidebar');
      document.body.classList.remove('overflow-hidden');
    };

    openBtn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);

    sidebar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', close);
    });
  },
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => mobileNav.init());
  } else {
    mobileNav.init();
  }
}
