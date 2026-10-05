/* =========================
Free resource tools (/resources/…)
- [data-roi-calc]: AI Automation ROI Calculator. Range inputs [data-calc-input],
  readouts [data-out], results [data-result], presets in [data-roi-preset].
- [data-quiz]: AI Readiness Assessment checklist with score and next steps.
- [data-copy="<id>"]: copies the text of the element with that id.
Everything runs locally; nothing is sent or stored.
=========================== */

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const count = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

const initRoi = (form) => {
  const inputs = form.querySelectorAll('[data-calc-input]');
  const val = (id) => Number(form.querySelector(`#${id}`)?.value ?? 0);
  const set = (key, text) => {
    const el = form.querySelector(`[data-result="${key}"]`);
    if (el) el.textContent = text;
  };

  const update = () => {
    inputs.forEach((input) => {
      const out = form.querySelector(`[data-out="${input.id}"]`);
      if (out) out.textContent = count.format(Number(input.value));
    });
    const revenue = val('appointments') * (val('close') / 100) * val('value');
    const time = val('hours') * 4.33 * val('hourly');
    const gain = revenue + time;
    const net = gain - val('monthly');
    const yearCost = val('setup') + 12 * val('monthly');
    const roi = yearCost > 0 ? ((12 * gain - yearCost) / yearCost) * 100 : 0;

    set('revenue', money.format(revenue));
    set('time', money.format(time));
    set('gain', money.format(gain));
    set('net', money.format(net));
    set('roi', `${count.format(roi)}%`);
    if (net <= 0) set('payback', 'Not yet');
    else if (val('setup') === 0) set('payback', 'Immediate');
    else {
      const months = val('setup') / net;
      set('payback', months < 1 ? `${Math.max(1, Math.round(months * 30))} days` : `${months.toFixed(1)} months`);
    }
  };

  form.querySelector('[data-roi-preset]')?.addEventListener('change', (e) => {
    const values = JSON.parse(e.target.selectedOptions[0].dataset.values || '{}');
    Object.entries(values).forEach(([id, v]) => {
      const input = form.querySelector(`#${id}`);
      if (input) input.value = v;
    });
    update();
  });
  inputs.forEach((input) => input.addEventListener('input', update));
  update();
};

const TIERS = [
  [0, 'Start with the foundations', 'Your biggest wins are basic: answering every call and replying to every lead fast.'],
  [4, 'Ready for quick wins', 'You have some systems in place. Automating the gaps below should pay off quickly.'],
  [8, 'Ready to scale with AI', 'Your foundations are strong. AI voice and chat agents can now multiply what you have.'],
];

const initQuiz = (root) => {
  const items = Array.from(root.querySelectorAll('[data-quiz-item]'));
  const update = () => {
    const score = items.filter((i) => i.checked).length;
    const [, tier, text] = [...TIERS].reverse().find(([min]) => score >= min);
    root.querySelector('[data-quiz-score]').textContent = score;
    root.querySelector('[data-quiz-tier]').textContent = tier;
    root.querySelector('[data-quiz-tier-text]').textContent = text;
    items.forEach((i) => {
      root.querySelector(`[data-quiz-fix="${i.dataset.quizItem}"]`).hidden = i.checked;
    });
    root.querySelector('[data-quiz-done]').classList.toggle('hidden', score < items.length);
  };
  items.forEach((i) => i.addEventListener('change', update));
  update();
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
};

const initCopy = (btn) => {
  const label = btn.querySelector('[data-copy-label]');
  btn.addEventListener('click', async () => {
    const target = document.getElementById(btn.dataset.copy);
    if (!target) return;
    const ok = await copyText(target.textContent);
    if (label) {
      label.textContent = ok ? 'Copied' : 'Select and copy';
      setTimeout(() => (label.textContent = 'Copy'), 1800);
    }
  });
};

const init = () => {
  document.querySelectorAll('[data-roi-calc]').forEach(initRoi);
  document.querySelectorAll('[data-quiz]').forEach(initQuiz);
  document.querySelectorAll('[data-copy]').forEach(initCopy);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
