/* =========================
Free tools, third wave (/resources/…)
- [data-voice-cost]: AI Voice Agent Cost Calculator
- [data-prompt-gen]: AI Agent Prompt Generator (output via textContent only)
- [data-sms-counter]: SMS character, encoding and segment counter
- [data-picker]: Voice AI platform picker
Everything runs locally; nothing is sent or stored.
=========================== */

const money = (v, digits = 0) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);
const num = new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 });

// ---------------------------------------------------------------------------
const initVoiceCost = (form) => {
  const inputs = form.querySelectorAll('[data-calc-input]');
  const val = (id) => Number(form.querySelector(`#${id}`)?.value ?? 0);
  const set = (k, t) => {
    const el = form.querySelector(`[data-result="${k}"]`);
    if (el) el.textContent = t;
  };
  const update = () => {
    inputs.forEach((i) => {
      const out = form.querySelector(`[data-out="${i.id}"]`);
      if (out) out.textContent = num.format(Number(i.value));
    });
    const minutes = val('vc-calls') * val('vc-length');
    const perMin = val('vc-platform') + val('vc-model') + val('vc-voice') + val('vc-phone');
    const ai = minutes * perMin + val('vc-fixed');
    const human = val('vc-hours') * 4.33 * val('vc-wage') * (1 + val('vc-overhead') / 100);
    const diff = human - ai;
    set('minutes', num.format(Math.round(minutes)));
    set('ai', money(ai));
    set('perCall', money(val('vc-calls') ? ai / val('vc-calls') : 0, 2));
    set('perMin', money(minutes ? ai / minutes : 0, 3));
    set('human', money(human));
    set('diff', `${diff >= 0 ? '' : '-'}${money(Math.abs(diff))}${diff >= 0 ? ' saved' : ' more'}`);
  };
  inputs.forEach((i) => i.addEventListener('input', update));
  update();
};

// ---------------------------------------------------------------------------
const lines = (s) => s.split('\n').map((l) => l.trim()).filter(Boolean);

const initPromptGen = (root) => {
  const out = root.querySelector('#pg-output');
  const v = (id) => (root.querySelector(`#${id}`)?.value || '').trim();
  const build = () => {
    const name = v('pg-name') || 'our business';
    const voice = v('pg-channel').startsWith('Phone');
    const goal = v('pg-goal');
    const facts = lines(v('pg-services'));
    const questions = lines(v('pg-questions'));
    const goalText = {
      'Book appointments': 'help each person book the right appointment',
      'Qualify leads for the sales team': 'qualify each inquiry and pass good leads to the sales team',
      'Answer questions and take messages': 'answer questions accurately and take clear messages',
      'Handle customer support': 'resolve customer support requests or route them correctly',
    }[goal] || 'help each person';

    const parts = [
      '# ROLE',
      `You are the ${voice ? 'phone receptionist' : 'virtual assistant'} for ${name}, a ${v('pg-type') || 'local business'}. Your goal is to ${goalText}.`,
      '',
      '# TONE',
      `${v('pg-tone') || 'Warm and friendly'}. ${voice ? 'Speak in short, natural sentences: one or two at a time, then pause for the caller.' : 'Keep replies short and easy to read on a phone screen.'} Respond in the language the person uses${v('pg-lang') ? ` (supported: ${v('pg-lang')})` : ''}.`,
      '',
      '# WHAT YOU KNOW',
      ...(facts.length ? facts.map((f) => `- ${f}`) : ['- (Add services, prices, hours and service area here.)']),
      'Only use the facts above and the knowledge base. If you do not know something, say so and offer to take a message. Never invent prices, availability or policies.',
      '',
      '# CONVERSATION FLOW',
      `1. ${voice ? `Greet the caller: "Thanks for calling ${name}, how can I help today?"` : `Greet the person and ask how you can help.`}`,
      '2. Understand what they need before offering a solution.',
      ...(questions.length ? [`3. Ask these questions one at a time, skipping any already answered:`, ...questions.map((q) => `   - ${q}`)] : ['3. Ask only the questions needed to help.']),
      goal === 'Book appointments'
        ? '4. Offer two specific available times using the calendar tool, confirm the choice, then repeat the details back.'
        : goal === 'Qualify leads for the sales team'
          ? '4. If they are a good fit, offer to book a call with the team; if not, thank them and suggest a helpful next step.'
          : '4. Resolve the request if you can; otherwise take a message with name, contact details and the reason.',
      `5. Confirm next steps and ${voice ? 'tell them they will receive a text confirmation' : 'confirm how and when they will hear back'}.`,
      '',
      '# HAND-OFF RULES',
      `Transfer to a person${v('pg-contact') ? ` (${v('pg-contact')})` : ''} or take an urgent message when: ${v('pg-handoff') || 'the person asks for a human, is upset, or has an emergency'}. Also hand off whenever someone asks for a person.`,
      '',
      '# RULES',
      '- If asked whether you are an AI, answer honestly.',
      '- Do not give medical, legal or financial advice.',
      '- Do not collect payment card numbers or sensitive personal data unless a secure tool is provided.',
      '- If the person wants to stop being contacted, confirm politely and note it.',
      voice ? '- Never read out long lists, URLs or more than two options at once.' : '- Use at most one question per message.',
    ];
    out.textContent = parts.join('\n');
  };
  root.querySelectorAll('[data-pg]').forEach((el) => el.addEventListener('input', build));
  build();
};

// ---------------------------------------------------------------------------
const GSM = '@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !"#¤%&\'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà';
const GSM_EXT = '^{}\\[~]|€\f';

const initSms = (root) => {
  const text = root.querySelector('#sms-text');
  const recipients = root.querySelector('#sms-recipients');
  const rate = root.querySelector('#sms-rate');
  const set = (k, t) => {
    root.querySelector(`[data-sms="${k}"]`).textContent = t;
  };
  const update = () => {
    const chars = Array.from(text.value);
    const offenders = [...new Set(chars.filter((c) => !GSM.includes(c) && !GSM_EXT.includes(c)))];
    const gsm = offenders.length === 0;
    const units = gsm ? chars.reduce((n, c) => n + (GSM_EXT.includes(c) ? 2 : 1), 0) : chars.reduce((n, c) => n + (c.codePointAt(0) > 0xffff ? 2 : 1), 0);
    const single = gsm ? 160 : 70;
    const multi = gsm ? 153 : 67;
    const segments = units === 0 ? 0 : units <= single ? 1 : Math.ceil(units / multi);
    const capacity = segments <= 1 ? single : segments * multi;
    set('chars', num.format(chars.length));
    set('segments', String(segments));
    set('encoding', gsm ? 'GSM-7' : 'UCS-2 (Unicode)');
    set('left', String(Math.max(0, capacity - units)));
    set('cost', money(segments * Number(recipients.value || 0) * Number(rate.value || 0), 2));
    const box = root.querySelector('[data-sms="warning-box"]');
    box.classList.toggle('hidden', gsm);
    set('offenders', offenders.map((c) => (c === ' ' ? 'non-breaking space' : c)).join('  '));
  };
  [text, recipients, rate].forEach((el) => el.addEventListener('input', update));
  update();
};

// ---------------------------------------------------------------------------
const initPicker = (root) => {
  const source = root.querySelector('[data-picker-data]') ?? document.getElementById('picker-data');
  const data = JSON.parse(source?.textContent || '{}');
  const update = () => {
    const totals = Object.fromEntries(Object.keys(data).map((k) => [k, 0]));
    root.querySelectorAll('input[type="radio"]:checked').forEach((r) => {
      Object.entries(JSON.parse(r.dataset.score)).forEach(([k, n]) => (totals[k] += n));
    });
    const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    const [bestKey] = ranked[0];
    root.querySelector('[data-picker-name]').textContent = data[bestKey].name;
    root.querySelector('[data-picker-why]').textContent = data[bestKey].why;
    const link = root.querySelector('[data-picker-link]');
    link.href = data[bestKey].href;
    link.textContent = `Learn more about ${data[bestKey].name}`;
    const list = root.querySelector('[data-picker-rank]');
    list.replaceChildren(
      ...ranked.map(([k, n], i) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between gap-3 rounded-xl border border-secondary/[0.08] bg-secondary/[0.03] px-4 py-2.5 text-tagline-2';
        const name = document.createElement('span');
        name.textContent = `${i + 1}. ${data[k].name}`;
        const score = document.createElement('span');
        score.className = 'text-secondary/45';
        score.textContent = `${n} pts`;
        li.append(name, score);
        return li;
      })
    );
  };
  root.addEventListener('change', update);
  update();
};

const init = () => {
  document.querySelectorAll('[data-voice-cost]').forEach(initVoiceCost);
  document.querySelectorAll('[data-prompt-gen]').forEach(initPromptGen);
  document.querySelectorAll('[data-sms-counter]').forEach(initSms);
  document.querySelectorAll('[data-picker]').forEach(initPicker);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ---------------------------------------------------------------------------
const initSavings = (form) => {
  const rate = form.querySelector('#sv-rate');
  const rows = Array.from(form.querySelectorAll('[data-sv-hours]')).map((h) => h.dataset.svHours);
  const set = (k, t) => {
    form.querySelector(`[data-sv="${k}"]`).textContent = t;
  };
  const update = () => {
    const items = rows.map((i) => {
      const hours = Number(form.querySelector(`[data-sv-hours="${i}"]`).value || 0);
      const pct = Number(form.querySelector(`[data-sv-pct="${i}"]`).value || 0) / 100;
      return { name: form.querySelector(`[data-sv-name="${i}"]`).value || 'Task', saved: hours * pct * 52 };
    });
    const total = items.reduce((n, x) => n + x.saved, 0);
    set('hours', num.format(Math.round(total)));
    set('value', money(total * Number(rate.value || 0)));
    set('fte', (total / 2080).toFixed(2));
    const list = form.querySelector('[data-sv="top"]');
    list.replaceChildren(
      ...items
        .filter((x) => x.saved > 0)
        .sort((a, b) => b.saved - a.saved)
        .slice(0, 3)
        .map((x, i) => {
          const li = document.createElement('li');
          li.className = 'flex items-center justify-between gap-3 rounded-xl border border-secondary/[0.08] bg-secondary/[0.03] px-4 py-2.5 text-tagline-2';
          const a = document.createElement('span');
          a.textContent = `${i + 1}. ${x.name}`;
          const b = document.createElement('span');
          b.className = 'shrink-0 text-secondary/50';
          b.textContent = `${num.format(Math.round(x.saved))} h/yr`;
          li.append(a, b);
          return li;
        })
    );
  };
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  update();
};

// ---------------------------------------------------------------------------
const initChatCost = (form) => {
  const inputs = form.querySelectorAll('[data-calc-input]');
  const val = (id) => Number(form.querySelector(`#${id}`)?.value ?? 0);
  const set = (k, t) => {
    form.querySelector(`[data-result="${k}"]`).textContent = t;
  };
  const update = () => {
    inputs.forEach((i) => {
      const out = form.querySelector(`[data-out="${i.id}"]`);
      if (out) out.textContent = num.format(Number(i.value));
    });
    const replies = val('cc-convos') * val('cc-msgs');
    const inTok = replies * val('cc-in');
    const outTok = replies * val('cc-out');
    const cacheFactor = 1 - (val('cc-cache') / 100) * 0.9;
    const model = (inTok * val('cc-pin') * cacheFactor + outTok * val('cc-pout')) / 1e6;
    const total = model + val('cc-fixed');
    set('model', money(model, model < 100 ? 2 : 0));
    set('total', money(total, total < 100 ? 2 : 0));
    set('perConvo', money(val('cc-convos') ? total / val('cc-convos') : 0, 3));
    set('tokens', new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(inTok + outTok));
  };
  inputs.forEach((i) => i.addEventListener('input', update));
  update();
};

// ---------------------------------------------------------------------------
const GRADES = [
  [85, 'Excellent: you respond faster than most competitors.'],
  [65, 'Good, with a few gaps leaking leads.'],
  [40, 'Fair: slow or limited response is costing you customers.'],
  [0, 'Needs work: many leads likely go to faster competitors.'],
];

const initScorecard = (root) => {
  const update = () => {
    let score = 0;
    root.querySelectorAll('input[type="radio"]:checked').forEach((r) => {
      score += Number(r.value);
      const id = r.name.replace('sc-', '');
      const fix = root.querySelector(`[data-sc-fix="${id}"]`);
      if (fix) fix.hidden = Number(r.value) >= Number(r.dataset.max);
    });
    root.querySelector('[data-sc-score]').textContent = score;
    root.querySelector('[data-sc-grade]').textContent = GRADES.find(([min]) => score >= min)[1];
  };
  root.addEventListener('change', update);
  update();
};

const init2 = () => {
  document.querySelectorAll('[data-savings]').forEach(initSavings);
  document.querySelectorAll('[data-chat-cost]').forEach(initChatCost);
  document.querySelectorAll('[data-scorecard]').forEach(initScorecard);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init2);
} else {
  init2();
}
