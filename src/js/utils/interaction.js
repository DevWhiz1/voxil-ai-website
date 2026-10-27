/* =========================
First interaction

Resolves on the visitor's first scroll, touch, key press or pointer move, and
adds `.motion-ready` to <html>. Decorative motion on the first screen waits for
it (see motion.css), so the page is visually settled while it loads.
=========================== */

const EVENTS = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'pointermove', 'keydown'];

export const firstInteraction = new Promise((resolve) => {
  const fire = () => {
    EVENTS.forEach((type) => window.removeEventListener(type, fire));
    resolve();
  };
  EVENTS.forEach((type) => window.addEventListener(type, fire, { passive: true }));
});

firstInteraction.then(() => document.documentElement.classList.add('motion-ready'));
