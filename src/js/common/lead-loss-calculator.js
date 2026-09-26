/* =========================
Lead Loss Calculator, /resources/lead-loss-calculator/

Markup: a <form data-lead-calc> with range inputs [data-calc-input], value
readouts [data-out="<input id>"] and results [data-result="<key>"].
Everything runs locally; nothing is sent or stored.
=========================== */

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const count = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

const initCalculator = (form) => {
  const inputs = form.querySelectorAll('[data-calc-input]');
  const val = (id) => Number(form.querySelector(`#${id}`)?.value ?? 0);
  const setResult = (key, text) => {
    const el = form.querySelector(`[data-result="${key}"]`);
    if (el) el.textContent = text;
  };

  const update = () => {
    inputs.forEach((input) => {
      const out = form.querySelector(`[data-out="${input.id}"]`);
      if (out) out.textContent = count.format(Number(input.value));
    });

    const lostLeads = val('calls') * (val('missed') / 100) * (val('opportunity') / 100);
    const lostCustomers = lostLeads * (val('close') / 100);
    const monthly = lostCustomers * val('value');
    const recoverable = monthly * (val('recovery') / 100);

    setResult('lostLeads', count.format(lostLeads));
    setResult('lostCustomers', count.format(lostCustomers));
    setResult('monthly', money.format(monthly));
    setResult('yearly', money.format(monthly * 12));
    setResult('recoverable', money.format(recoverable));
    setResult('recoverableYearly', money.format(recoverable * 12));
  };

  inputs.forEach((input) => input.addEventListener('input', update));
  update();
};

const init = () => document.querySelectorAll('[data-lead-calc]').forEach(initCalculator);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
