/* =========================
Calendly loader (/book-meeting.html)

Hides the [data-calendly-loader] overlay once Calendly's scheduler is ready:
- Calendly posts a "calendly.*" message (e.g. calendly.event_type_viewed) when
  the booking page has rendered inside the iframe, or
- the iframe fires its load event (with a short delay for rendering).
A fallback timer removes the overlay after 15 seconds so it can never get stuck.
=========================== */

const initCalendlyLoader = () => {
  const loader = document.querySelector('[data-calendly-loader]');
  const widget = document.querySelector('.calendly-inline-widget');
  if (!loader || !widget) return;

  let done = false;
  const hide = () => {
    if (done) return;
    done = true;
    loader.classList.add('is-done');
    loader.setAttribute('aria-hidden', 'true');
    setTimeout(() => loader.remove(), 600);
  };

  window.addEventListener('message', (e) => {
    if (typeof e.origin === 'string' && e.origin.includes('calendly.com') && typeof e.data?.event === 'string' && e.data.event.startsWith('calendly.')) hide();
  });

  const watchIframe = (iframe) => iframe.addEventListener('load', () => setTimeout(hide, 400), { once: true });
  const existing = widget.querySelector('iframe');
  if (existing) watchIframe(existing);
  else {
    const observer = new MutationObserver(() => {
      const iframe = widget.querySelector('iframe');
      if (iframe) {
        observer.disconnect();
        watchIframe(iframe);
      }
    });
    observer.observe(widget, { childList: true, subtree: true });
  }

  setTimeout(hide, 15000);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCalendlyLoader);
} else {
  initCalendlyLoader();
}
