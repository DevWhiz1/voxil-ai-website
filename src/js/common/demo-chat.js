/* =========================
Live chat widget (portfolio page and demo funnels)

Markup comes from scripts/templates/portfolio.js:
  <div data-chat data-bot="voxil" data-greeting="…">
    <div data-chat-log></div>
    <div data-chat-suggest><button class="chat-chip">…</button></div>
    <form data-chat-form><input name="message" /></form>
  </div>

Messages go to /api/chat (Vercel function, Claude). When the API is not
reachable (local dev, missing key, rate limit) the widget answers from a small
set of scripted replies so the demo never looks broken.
=========================== */

const MAX_HISTORY = 12;
const SITE = 'https://www.voxilai.tech';

const VOXIL_REPLIES = [
  [/price|cost|pricing|how much|budget|quote/i, `Every project is fixed-price and scoped on a free strategy call, because the cost depends on your channels and integrations. You can book one here: ${SITE}/book-meeting.html`],
  [/ghl|gohighlevel|high level|highlevel/i, `Yes, GoHighLevel is one of our core platforms: setup, automation, Conversation AI, snapshots and migrations. More here: ${SITE}/services/gohighlevel-automation/`],
  [/voice|call|receptionist|phone|vapi|retell/i, `We build AI voice agents and receptionists on Retell AI and Vapi that answer every call, qualify and book into your calendar. See ${SITE}/services/ai-voice-agents/`],
  [/chat|whatsapp|instagram|dm|bot/i, `We build chatbots for your website, WhatsApp Business and Instagram DMs, trained on your business and connected to your CRM. See ${SITE}/services/ai-chatbots/`],
  [/automat|make|n8n|zapier|workflow|crm/i, `We automate lead follow-up, CRM updates and back-office work with Make.com, n8n and Zapier. See ${SITE}/services/workflow-automation/`],
  [/agency|white.?label|resell/i, `We work as a white label fulfillment partner for agencies, building under your brand. Details: ${SITE}/for-agencies/`],
  [/seo|ads|google|rank|marketing/i, `We handle technical SEO, answer-engine optimization and paid ads that feed an automated funnel. See ${SITE}/services/seo-paid-ads/`],
  [/funnel|website|landing/i, `We design funnels and websites with the automation behind them. Try the demos on our portfolio: ${SITE}/portfolio/`],
  [/^(hi|hello|hey|salam|yo)\b/i, 'Hi! What would you like to automate: calls, chat, follow-up or your CRM?'],
];
const VOXIL_DEFAULT = `Good question. The quickest way to get a precise answer is a free 30-minute strategy call: ${SITE}/book-meeting.html. You can also email info@voxilai.tech.`;

// Funnel bots fall back to the FAQ on their own page.
const faqReply = (text) => {
  const words = text.toLowerCase().match(/[a-z]{4,}/g) || [];
  let best = null;
  let score = 0;
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-trigger span')?.textContent || '';
    const a = item.querySelector('.faq-panel-inner')?.textContent || '';
    const hay = `${q} ${a}`.toLowerCase();
    const s = words.filter((w) => hay.includes(w)).length;
    if (s > score) {
      score = s;
      best = a.trim();
    }
  });
  return best || 'Happy to help! The quickest way to get started is the short form at the top of this page, it takes about 30 seconds.';
};

const scripted = (bot, text) => {
  if (bot !== 'voxil') return faqReply(text);
  const hit = VOXIL_REPLIES.find(([re]) => re.test(text));
  return hit ? hit[1] : VOXIL_DEFAULT;
};

// Renders text with bare URLs turned into links; never injects HTML.
const renderText = (el, text) => {
  text.split(/(https?:\/\/[^\s]+)/g).forEach((part, i) => {
    if (i % 2 === 0) {
      if (part) el.appendChild(document.createTextNode(part));
      return;
    }
    const trail = part.match(/[.,!?)]+$/)?.[0] || '';
    const url = trail ? part.slice(0, -trail.length) : part;
    const a = document.createElement('a');
    a.href = url;
    a.textContent = url.replace(/^https?:\/\/(www\.)?/, '');
    a.className = 'underline underline-offset-2';
    if (!url.startsWith(SITE)) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
    el.appendChild(a);
    if (trail) el.appendChild(document.createTextNode(trail));
  });
};

const initChat = (root) => {
  const log = root.querySelector('[data-chat-log]');
  const form = root.querySelector('[data-chat-form]');
  const input = form.querySelector('input');
  const send = form.querySelector('button');
  const suggest = root.querySelector('[data-chat-suggest]');
  const bot = root.dataset.bot || 'voxil';
  const history = [];
  let busy = false;
  let offline = false;

  const bubble = (role, text) => {
    const p = document.createElement('p');
    p.className = role === 'user' ? 'bubble-out' : 'bubble-in';
    renderText(p, text);
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
    return p;
  };

  const typing = () => {
    const p = document.createElement('p');
    p.className = 'bubble-in';
    p.innerHTML = '<span class="typing" aria-label="Assistant is typing"><span></span><span></span><span></span></span>';
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
    return p;
  };

  const ask = async (messages) => {
    if (offline) throw new Error('offline');
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25000);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bot, messages }),
        signal: ctrl.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error(data.error || `HTTP ${res.status}`);
      return data.reply;
    } finally {
      clearTimeout(timer);
    }
  };

  const submit = async (text) => {
    text = text.trim().slice(0, 600);
    if (!text || busy) return;
    busy = true;
    send.disabled = true;
    if (suggest) suggest.hidden = true;
    bubble('user', text);
    history.push({ role: 'user', content: text });
    const dots = typing();

    let reply;
    try {
      reply = await ask(history.slice(-MAX_HISTORY));
    } catch {
      // Keep the conversation going with scripted answers from here on.
      offline = true;
      await new Promise((r) => setTimeout(r, 600));
      reply = scripted(bot, text);
    }
    dots.remove();
    bubble('assistant', reply);
    history.push({ role: 'assistant', content: reply });
    busy = false;
    send.disabled = false;
  };

  if (root.dataset.greeting) bubble('assistant', root.dataset.greeting);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    submit(text);
  });

  suggest?.querySelectorAll('.chat-chip').forEach((chip) => chip.addEventListener('click', () => submit(chip.textContent)));
};

// Floating launcher used on the demo funnels.
const initFloat = (wrap) => {
  const toggle = wrap.querySelector('[data-chat-toggle]');
  const panel = wrap.querySelector('[data-chat-panel]');
  toggle.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) panel.querySelector('input')?.focus();
  });
};

const init = () => {
  document.querySelectorAll('[data-chat]').forEach(initChat);
  document.querySelectorAll('[data-chat-float]').forEach(initFloat);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
