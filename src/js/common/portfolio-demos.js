/* =========================
Portfolio demos
- [data-call-demo]: plays the sample call transcript line by line when it
  scrolls into view (or its tab opens); [data-call-replay] restarts it.
- [data-funnel-form]: multi-step lead form on the demo funnels. Runs entirely
  in the browser; nothing is sent anywhere.
=========================== */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const initCall = (box) => {
  const lines = Array.from(box.querySelectorAll('.call-line'));
  let timers = [];

  const play = () => {
    timers.forEach(clearTimeout);
    timers = [];
    if (reduced) return;
    box.classList.add('is-playing');
    lines.forEach((l) => l.classList.remove('is-shown'));
    lines.forEach((l, i) => timers.push(setTimeout(() => l.classList.add('is-shown'), 400 + i * 1500)));
    timers.push(setTimeout(() => box.classList.remove('is-playing'), 400 + lines.length * 1500));
  };

  let played = false;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting) && !played) {
      played = true;
      play();
    }
  });
  io.observe(box);
  box.querySelector('[data-call-replay]')?.addEventListener('click', play);
};

const initFunnel = (form) => {
  const steps = Array.from(form.querySelectorAll('[data-step]'));
  const label = form.querySelector('[data-step-label]');
  const bar = form.querySelector('[data-progress]');
  const back = form.querySelector('[data-back]');
  const next = form.querySelector('[data-next]');
  const error = form.querySelector('[data-error]');
  const done = form.parentElement.querySelector('[data-funnel-done]');
  const nextHtml = next.innerHTML;
  let current = 0;

  const show = (i) => {
    current = i;
    steps.forEach((s, k) => (s.hidden = k !== i));
    label.textContent = `Step ${i + 1} of ${steps.length}`;
    bar.style.width = `${Math.round(((i + 1) / steps.length) * 100)}%`;
    back.hidden = i === 0;
    next.innerHTML = i === steps.length - 1 ? 'See my results' : nextHtml;
    error.hidden = true;
  };

  const valid = () => {
    const step = steps[current];
    const radios = step.querySelectorAll('input[type="radio"]');
    if (radios.length) return Array.from(radios).some((r) => r.checked) || ((error.textContent = 'Please choose an option to continue.'), false);
    const bad = Array.from(step.querySelectorAll('input')).find((f) => !f.checkValidity());
    if (bad) {
      error.textContent = bad.type === 'email' ? 'Please enter a valid email address.' : 'Please fill in your name and email.';
      bad.focus();
      return false;
    }
    return true;
  };

  // Picking an option moves straight to the next step, like most quiz funnels.
  form.addEventListener('change', (e) => {
    if (e.target.type === 'radio' && current < steps.length - 1) setTimeout(() => show(current + 1), 220);
  });

  back.addEventListener('click', () => show(Math.max(0, current - 1)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!valid()) {
      error.hidden = false;
      return;
    }
    if (current < steps.length - 1) return show(current + 1);
    const name = (form.elements.name.value || '').trim().split(/\s+/)[0];
    done.querySelector('[data-done-name]').textContent = name ? `, ${name}` : '';
    form.hidden = true;
    done.hidden = false;
  });

  show(0);
};

const init = () => {
  document.querySelectorAll('[data-call-demo]').forEach(initCall);
  document.querySelectorAll('[data-funnel-form]').forEach(initFunnel);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
