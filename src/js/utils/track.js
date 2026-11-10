/* =========================
GA4 event tracking

Sends events through window.gtag, so nothing is sent until the GA4 tag is
installed on the site.
- cta_click:   any link with data-cta="<label>" (e.g. pricing_hero)
- form_submit: sent by the contact form after a successful submission
- call_booked: Calendly's "event scheduled" message on the booking page
The ?source= parameter on the current page is attached so bookings can be
traced back to the button that sent the visitor (e.g. source=pricing).
=========================== */

const source = () => new URLSearchParams(window.location.search).get('source') || undefined;

export const track = (name, params = {}) => {
  if (typeof window.gtag === 'function') window.gtag('event', name, { ...params, source: params.source ?? source() });
};

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-cta]');
  if (el) track('cta_click', { label: el.dataset.cta });
});

window.addEventListener('message', (e) => {
  if (typeof e.origin === 'string' && e.origin.includes('calendly.com') && e.data?.event === 'calendly.event_scheduled') {
    track('call_booked');
  }
});
