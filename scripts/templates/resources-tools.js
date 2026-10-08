// Interactive free tools (third wave): voice agent cost calculator, AI agent
// prompt generator, SMS segment counter and voice AI platform picker.
// Behavior lives in src/js/common/resource-tools-2.js; everything runs in the browser.
import { RESOURCES } from '../../content/site.js';
import { icon, linkCard, sectionHead } from '../lib/ui.js';
import { ctaCard, shell } from './resources-extra.js';
import { calcField } from './resources.js';

const meta = (slug) => RESOURCES.find((r) => r.slug === slug);

const infoCards = (cards) => `
        <div class="grid gap-4 md:grid-cols-3">
          ${cards.map(([t, d]) => `<div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">${t}</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">${d}</p></div>`).join('')}
        </div>`;

// ---------------------------------------------------------------------------
// AI Voice Agent Cost Calculator
// ---------------------------------------------------------------------------
export const renderVoiceCostCalculator = () => {
  const slug = 'ai-voice-agent-cost-calculator';
  const r = meta(slug);
  const faqs = [
    { q: 'How much does an AI voice agent cost per minute?', a: 'All-in costs usually combine a platform fee, the language model, the voice (text-to-speech), transcription and telephony. Depending on your choices, the total commonly lands somewhere between a few cents and a few tens of cents per minute. Enter your provider’s current rates for an accurate figure.' },
    { q: 'Why compare with a human receptionist?', a: 'Most businesses weigh an AI agent against hiring or extending staff hours. The comparison uses the hours of phone coverage you want, an hourly wage and an overhead percentage for taxes, benefits and management.' },
    { q: 'What is not included in the estimate?', a: 'One-time build and integration work, CRM or scheduling subscriptions you already pay for, and the time spent reviewing calls. Add any extra monthly software to the fixed-cost field.' },
    { q: 'Is my data stored?', a: 'No. The calculator runs in your browser and nothing you enter is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <form class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" data-voice-cost onsubmit="return false">
          <div class="glass-card space-y-7" style="--accent: ${r.accent}">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Call volume</p>
            ${calcField({ id: 'vc-calls', label: 'Calls handled per month', hint: 'Inbound and outbound calls the AI will take.', min: 50, max: 20000, step: 50, value: 800 })}
            ${calcField({ id: 'vc-length', label: 'Average call length (minutes)', hint: 'Booking and FAQ calls are often 2 to 4 minutes.', min: 1, max: 20, step: 0.5, value: 3 })}
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">AI cost per minute (example rates, use your provider’s)</p>
            ${calcField({ id: 'vc-platform', label: 'Platform fee per minute', hint: 'Orchestration fee charged by the voice AI platform.', min: 0, max: 0.3, step: 0.005, value: 0.05, prefix: '$' })}
            ${calcField({ id: 'vc-model', label: 'Language model and transcription per minute', hint: 'Varies widely by model; larger models cost more.', min: 0, max: 0.3, step: 0.005, value: 0.03, prefix: '$' })}
            ${calcField({ id: 'vc-voice', label: 'Voice (text-to-speech) per minute', hint: 'Premium voices cost more than standard ones.', min: 0, max: 0.3, step: 0.005, value: 0.04, prefix: '$' })}
            ${calcField({ id: 'vc-phone', label: 'Telephony per minute', hint: 'Carrier cost for the call itself.', min: 0, max: 0.1, step: 0.001, value: 0.015, prefix: '$' })}
            ${calcField({ id: 'vc-fixed', label: 'Fixed monthly costs', hint: 'Phone numbers, monitoring and support.', min: 0, max: 3000, step: 25, value: 150, prefix: '$' })}
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Human comparison</p>
            ${calcField({ id: 'vc-hours', label: 'Hours of phone coverage per week', hint: 'Business hours only, or more for evenings and weekends.', min: 10, max: 168, step: 1, value: 50 })}
            ${calcField({ id: 'vc-wage', label: 'Hourly wage', hint: 'Receptionist or answering staff wage.', min: 10, max: 60, step: 1, value: 18, prefix: '$' })}
            ${calcField({ id: 'vc-overhead', label: 'Overhead on top of wage', hint: 'Taxes, benefits, training and management.', min: 0, max: 60, step: 1, value: 25, suffix: '%' })}
          </div>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Estimated AI cost per month</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-teal" data-result="ai">$0</p>
                <p class="text-tagline-2 text-secondary/55"><span class="font-semibold text-secondary" data-result="perCall">$0</span> per call · <span class="font-semibold text-secondary" data-result="perMin">$0</span> per minute all-in</p>
                <div class="hairline my-6"></div>
                <div class="grid grid-cols-2 gap-4">
                  <div><p class="text-tagline-3 text-secondary/45">Human coverage cost</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-result="human">$0</p></div>
                  <div><p class="text-tagline-3 text-secondary/45">Monthly difference</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-result="diff">$0</p></div>
                </div>
              </div>
            </div>
            <div class="stat-card-ink"><p class="stat-num text-heading-5 text-secondary" data-result="minutes">0</p><p class="text-tagline-3 mt-1 text-secondary/50">AI minutes per month</p></div>
            ${ctaCard(r.accent, 'Want exact numbers?', 'We’ll price the platform, model, voice and telephony for your call types and give you a fixed build quote.')}
          </div>
        </form>
        <p class="text-tagline-3 mx-auto mt-8 max-w-3xl text-center text-secondary/35">Estimates only. AI cost = calls × minutes × (platform + model + voice + telephony) + fixed costs. Human cost = hours per week × 4.33 × wage × (1 + overhead). Default rates are examples, not quotes; providers change pricing often.</p>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Reading the result', title: 'What drives the <span class="text-gradient-teal">cost per minute</span>', lead: 'Four choices decide most of your bill. Small changes add up at volume.' })}
        ${infoCards([
          ['Model choice', 'Larger language models give better judgment but cost more per minute. Many receptionist calls work well on smaller, faster models.'],
          ['Voice quality', 'Premium, highly natural voices cost more. Test whether callers notice the difference for your use case.'],
          ['Call length', 'Short, focused scripts reduce minutes. Long greetings and repeated confirmations quietly raise costs.'],
        ])}
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/blog/how-much-does-an-ai-voice-agent-cost/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>AI voice agent cost guide</span></a>
          <a href="/resources/voice-ai-platform-picker/" class="chip-link">${icon('sliders', 'size-4 text-primary-600')}<span>Voice AI platform picker</span></a>
          <a href="/services/ai-receptionist/" class="chip-link">${icon('user', 'size-4 text-primary-600')}<span>AI receptionist service</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'AI Voice Agent Cost Calculator (Free) | Voxil AI',
    description: 'Free AI voice agent cost calculator: estimate monthly cost, cost per call and per minute from your call volume and provider rates, and compare it with a human receptionist.',
    h1: 'AI Voice Agent <span class="text-gradient-teal">Cost Calculator</span>',
    lead: 'Estimate what an AI receptionist or calling agent costs to run each month, from your call volume and per-minute rates, and compare it with staffing the same hours.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// AI Agent Prompt Generator
// ---------------------------------------------------------------------------
const field = (id, label, input, hint = '') => `
              <div>
                <label for="${id}" class="field-label">${label}</label>
                ${input}
                ${hint ? `<p class="text-tagline-3 mt-1.5 text-secondary/40">${hint}</p>` : ''}
              </div>`;

export const renderPromptGenerator = () => {
  const slug = 'ai-agent-prompt-generator';
  const r = meta(slug);
  const faqs = [
    { q: 'What is a system prompt?', a: 'The system prompt is the set of instructions that defines an AI agent’s role, goals, rules, tone and knowledge. It is the most important part of any chatbot or voice agent setup.' },
    { q: 'Which platforms can I use the prompt with?', a: 'Any platform that accepts a system prompt or agent instructions, including Vapi, Retell AI, GoHighLevel Conversation AI and Voice AI, and custom builds on major model providers.' },
    { q: 'Is the generated prompt ready for production?', a: 'It is a strong starting point. Before going live, connect real tools for booking, add your full knowledge base and test with at least twenty realistic conversations, including difficult ones.' },
    { q: 'Is anything I type sent anywhere?', a: 'No. The prompt is generated in your browser and nothing is sent or saved.' },
  ];
  const input = (id, ph, val = '') => `<input id="${id}" class="field-input mt-2" type="text" placeholder="${ph}" value="${val}" data-pg />`;
  const area = (id, ph, val = '') => `<textarea id="${id}" class="field-input mt-2 min-h-24" placeholder="${ph}" data-pg>${val}</textarea>`;
  const select = (id, opts) => `<select id="${id}" class="field-input mt-2" data-pg>${opts.map((o) => `<option>${o}</option>`).join('')}</select>`;
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-6 lg:grid-cols-2" data-prompt-gen>
          <form class="glass-card space-y-5" style="--accent: ${r.accent}" onsubmit="return false">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your business</p>
            ${field('pg-name', 'Business name', input('pg-name', 'e.g. BrightSpark Plumbing', 'BrightSpark Plumbing'))}
            ${field('pg-type', 'What kind of business?', input('pg-type', 'e.g. plumbing company in Austin, TX', 'plumbing company in Austin, TX'))}
            ${field('pg-channel', 'Channel', select('pg-channel', ['Phone (voice agent)', 'Website chat', 'SMS / WhatsApp']))}
            ${field('pg-goal', 'Main goal', select('pg-goal', ['Book appointments', 'Qualify leads for the sales team', 'Answer questions and take messages', 'Handle customer support']))}
            ${field('pg-services', 'Services and key facts', area('pg-services', 'One per line: services, price ranges, service area, hours', 'Leak repair, drain cleaning, water heaters\nService area: Austin and surrounding suburbs\nHours: Mon-Fri 8am-6pm, emergencies 24/7\nService call fee is quoted on booking'), 'The agent will only use facts you list here or in a knowledge base.')}
            ${field('pg-questions', 'Questions to ask every caller', area('pg-questions', 'One per line', 'What is the problem?\nWhat is the address?\nIs it urgent?'))}
            ${field('pg-handoff', 'When should it hand off to a person?', input('pg-handoff', 'e.g. emergencies, complaints, pricing exceptions', 'flooding or no water, complaints, requests for a manager'))}
            ${field('pg-contact', 'Hand-off number or email', input('pg-contact', 'e.g. +1 512 555 0100', '+1 512 555 0100'))}
            ${field('pg-tone', 'Tone', select('pg-tone', ['Warm and friendly', 'Professional and concise', 'Upbeat and energetic', 'Calm and reassuring']))}
            ${field('pg-lang', 'Languages', input('pg-lang', 'e.g. English and Spanish', 'English and Spanish'))}
          </form>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div class="glass-card flex flex-col" style="--accent: ${r.accent}">
              <div class="flex items-center justify-between gap-3">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your system prompt</p>
                <button type="button" class="cta cta-sm cta-ghost shrink-0" data-copy="pg-output">${icon('copy', 'size-4')}<span data-copy-label>Copy</span></button>
              </div>
              <pre id="pg-output" class="template-text mt-4 max-h-[640px] overflow-y-auto" aria-live="polite"></pre>
            </div>
            ${ctaCard(r.accent, 'Want it built and tested?', 'We connect the prompt to your calendar and CRM, add your knowledge base and test it on real conversations.')}
          </div>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Prompt design', title: 'What makes an agent prompt <span class="text-gradient-teal">work</span>', lead: 'The generator follows the structure we use for production agents.' })}
        ${infoCards([
          ['Role and goal first', 'The agent should know who it represents and the one outcome it is working toward on every conversation.'],
          ['Facts, not guesses', 'Prices, hours and policies come from what you provide. The prompt tells the agent to say when it doesn’t know.'],
          ['Clear escape hatches', 'Hand-off rules for emergencies, complaints and requests for a person keep customers safe and satisfied.'],
        ])}
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/blog/voice-agent-prompt-engineering/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>Voice agent prompt guide</span></a>
          <a href="/resources/ai-voice-agent-scripts/" class="chip-link">${icon('mic', 'size-4 text-primary-600')}<span>Voice agent script templates</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Free AI Agent Prompt Generator (Voice & Chat) | Voxil AI',
    description: 'Free AI agent prompt generator: enter your business details and get a structured system prompt for a voice agent or chatbot, ready for Vapi, Retell AI or GoHighLevel.',
    h1: 'AI Agent <span class="text-gradient-teal">Prompt Generator</span>',
    lead: 'Answer a few questions about your business and get a structured system prompt for an AI receptionist, voice agent or chatbot. Copy it into Vapi, Retell AI or GoHighLevel.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// SMS Character & Segment Counter
// ---------------------------------------------------------------------------
export const renderSmsCounter = () => {
  const slug = 'sms-character-counter';
  const r = meta(slug);
  const faqs = [
    { q: 'How many characters fit in one SMS?', a: 'Up to 160 characters using the standard GSM-7 character set. Longer messages are split into segments of 153 characters each. If the message contains a character outside GSM-7, such as most emoji or curly quotes, it switches to UCS-2 encoding, which allows 70 characters, or 67 per segment when split.' },
    { q: 'Why does one emoji make my message cost more?', a: 'A single character outside the GSM-7 set forces the whole message into UCS-2 encoding, more than halving the characters per segment. Providers usually bill per segment, so cost can double or triple.' },
    { q: 'Which characters count as two?', a: 'In GSM-7, some characters use an escape code and count as two: ^ { } \\ [ ] ~ | and the euro sign.' },
    { q: 'Is my message stored?', a: 'No. Counting happens in your browser; nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-sms-counter>
          <div class="glass-card" style="--accent: ${r.accent}">
            <label for="sms-text" class="field-label">Your message</label>
            <textarea id="sms-text" class="field-input mt-2 min-h-48" placeholder="Type or paste your SMS here">Hi Sam, it's BrightSpark Plumbing. Thanks for asking about a repair! Is the leak inside or outside? Reply STOP to opt out.</textarea>
            <div class="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label for="sms-recipients" class="field-label">Recipients</label>
                <input id="sms-recipients" class="field-input mt-2" type="number" min="1" value="1000" />
              </div>
              <div>
                <label for="sms-rate" class="field-label">Your price per segment ($)</label>
                <input id="sms-rate" class="field-input mt-2" type="number" min="0" step="0.0001" value="0.0083" />
              </div>
            </div>
            <p class="text-tagline-3 mt-2 text-secondary/40">Use your provider’s current per-segment rate; carrier fees may be added separately.</p>
          </div>
          <div class="space-y-4" aria-live="polite">
            <div class="edge-card">
              <div class="grid grid-cols-2 gap-5 p-7 md:p-8">
                <div><p class="text-tagline-3 text-secondary/45">Characters</p><p class="stat-num text-heading-4 mt-1 text-secondary" data-sms="chars">0</p></div>
                <div><p class="text-tagline-3 text-secondary/45">Segments</p><p class="stat-num text-heading-4 mt-1 text-gradient-teal" data-sms="segments">0</p></div>
                <div><p class="text-tagline-3 text-secondary/45">Encoding</p><p class="text-tagline-1 mt-1 font-semibold text-secondary" data-sms="encoding">GSM-7</p></div>
                <div><p class="text-tagline-3 text-secondary/45">Left in segment</p><p class="text-tagline-1 mt-1 font-semibold text-secondary" data-sms="left">0</p></div>
                <div class="col-span-2"><p class="text-tagline-3 text-secondary/45">Estimated campaign cost</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-sms="cost">$0</p></div>
              </div>
            </div>
            <div class="glass-card hidden" data-sms="warning-box" style="--accent: #ff6b35">
              <p class="text-tagline-2 font-semibold text-secondary">Characters forcing UCS-2 encoding</p>
              <p class="text-tagline-2 mt-2 text-secondary/65">Replace these to fit more text per segment: <span class="font-semibold text-coral-600" data-sms="offenders"></span></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'SMS limits', title: 'How SMS <span class="text-gradient-teal">segments work</span>', lead: 'The character set decides how much fits in each billed segment.' })}
        <div data-reveal class="data-table-wrap">
          <table class="data-table">
            <caption class="sr-only">SMS segment limits by encoding</caption>
            <thead><tr><th scope="col">Encoding</th><th scope="col">Single SMS</th><th scope="col">Per segment when split</th><th scope="col">Triggered by</th></tr></thead>
            <tbody>
              <tr><th scope="row">GSM-7</th><td>160 characters</td><td>153 characters</td><td>Standard letters, numbers and common punctuation</td></tr>
              <tr><th scope="row">UCS-2</th><td>70 characters</td><td>67 characters</td><td>Any character outside GSM-7, such as most emoji or curly quotes</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mt-8">
        ${infoCards([
          ['Watch for curly quotes', 'Text pasted from documents often contains curly apostrophes and quotes, which silently switch a message to UCS-2.'],
          ['Keep the opt-out', 'Opt-out wording costs a few characters but protects your sender reputation and keeps you compliant.'],
          ['Shorten links', 'Use a branded short domain rather than long tracking URLs to save characters and look trustworthy.'],
        ])}
        </div>
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/resources/follow-up-templates/" class="chip-link">${icon('mail', 'size-4 text-primary-600')}<span>Follow-up message templates</span></a>
          <a href="/blog/a2p-10dlc-registration-guide/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>A2P 10DLC registration guide</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'SMS Character Counter & Segment Calculator | Voxil AI',
    description: 'Free SMS character counter: see characters, GSM-7 or UCS-2 encoding, segments and campaign cost instantly, and find the characters that make your texts cost more.',
    h1: 'SMS Character <span class="text-gradient-teal">&amp; Segment Counter</span>',
    lead: 'Paste a text message to see its length, encoding and number of billed segments, plus an estimated campaign cost. Spot the hidden characters that double your SMS bill.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// Voice AI Platform Picker
// ---------------------------------------------------------------------------
const PICKER = [
  { q: 'Who will build and maintain the agent?', options: [['A developer or technical partner', { vapi: 2, custom: 2 }], ['An operations or agency team, little code', { retell: 2, ghl: 2 }], ['Me, inside GoHighLevel', { ghl: 3 }]] },
  { q: 'Do you already run your business or agency on GoHighLevel?', options: [['Yes, everything is in GHL', { ghl: 2, retell: 1 }], ['No, we use another CRM', { vapi: 1, retell: 1, custom: 1 }]] },
  { q: 'How predictable are the calls?', options: [['Very: booking, intake, reminders', { retell: 2, ghl: 1 }], ['Mixed: some open-ended questions', { retell: 1, vapi: 1 }], ['Open-ended, lots of edge cases', { vapi: 2, custom: 1 }]] },
  { q: 'How much does the agent need to do in other systems?', options: [['Just book and log the call', { ghl: 2, retell: 1 }], ['Check a few systems via API', { retell: 1, vapi: 2 }], ['Complex logic across many systems', { vapi: 2, custom: 2 }]] },
  { q: 'How important is choosing your own model and voice providers?', options: [['Not important, I want it simple', { ghl: 1, retell: 2 }], ['Somewhat important', { retell: 1, vapi: 1 }], ['Very important (cost, quality or data rules)', { vapi: 2, custom: 2 }]] },
  { q: 'Is voice part of your own product or app?', options: [['No, it answers our business phone', { ghl: 1, retell: 1 }], ['Yes, voice inside our app or SaaS', { vapi: 2, custom: 2 }]] },
];

const PLATFORMS = {
  ghl: { name: 'GoHighLevel Voice AI', href: '/services/gohighlevel-ai/', why: 'Simplest option if your business already runs on GoHighLevel: the agent lives next to your calendars, pipelines and workflows, with no extra platform to manage.' },
  retell: { name: 'Retell AI', href: '/blog/retell-ai-review/', why: 'A strong fit for reliable phone agents with predictable call flows, built-in post-call analysis and fast deployment, especially for agencies and operations teams.' },
  vapi: { name: 'Vapi', href: '/blog/vapi-ai-review/', why: 'Best for developer-led builds that need deep integrations, custom tool logic, multi-assistant flows or full control over model and voice providers.' },
  custom: { name: 'A custom build', href: '/services/ai-agent-development/', why: 'Worth considering when voice is part of your own product, or when data, cost or architecture requirements rule out off-the-shelf platforms.' },
};

export const renderPlatformPicker = () => {
  const slug = 'voice-ai-platform-picker';
  const r = meta(slug);
  const faqs = [
    { q: 'Is the recommendation sponsored?', a: 'No. We build on all of these options and have no paid relationship that affects the result. The scoring reflects which platform fits each answer in our experience.' },
    { q: 'Can I switch platforms later?', a: 'Yes. Prompts, knowledge and integrations can be moved, though conversation logic usually needs adjusting and re-testing on a new platform.' },
    { q: 'Which is cheapest?', a: 'It depends on your configuration and volume. Compare all-in cost per minute for the same model, voice and telephony; our voice agent cost calculator helps.' },
    { q: 'Is my answer stored?', a: 'No. The picker runs in your browser and nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-picker>
          <div class="space-y-4">
            ${PICKER.map(
              (q, i) => `
            <fieldset class="glass-card" style="--accent: ${r.accent}">
              <legend class="sr-only">${q.q}</legend>
              <p class="text-tagline-1 font-semibold text-secondary" aria-hidden="true">${i + 1}. ${q.q}</p>
              <div class="mt-4 grid gap-2.5">
                ${q.options.map(([label, score], j) => `<label class="quiz-item"><input type="radio" name="pk${i}" value="${j}" data-score='${JSON.stringify(score)}'${j === 0 ? ' checked' : ''} /><span>${label}</span></label>`).join('')}
              </div>
            </fieldset>`
            ).join('')}
          </div>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Best fit for you</p>
                <p class="text-heading-4 mt-3 font-semibold text-gradient-teal" data-picker-name></p>
                <p class="text-tagline-2 mt-2 text-secondary/65" data-picker-why></p>
                <a href="#" class="link-arrow mt-4 text-primary-600" data-picker-link>Learn more</a>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">All options, ranked</p>
                <ol class="mt-3 space-y-2" data-picker-rank></ol>
              </div>
            </div>
            ${ctaCard(r.accent, 'Still unsure?', 'We build on every one of these. Tell us about your calls and we’ll recommend one honestly.')}
          </div>
        </div>
        <script type="application/json" id="picker-data">${JSON.stringify(PLATFORMS)}</script>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'The options', title: 'Four ways to <span class="text-gradient-teal">build a voice agent</span>', lead: 'Each is the right answer for someone. Here is who.' })}
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          ${Object.values(PLATFORMS).map((p) => linkCard({ href: p.href, title: p.name, desc: p.why, icon: 'mic', accent: r.accent, cta: 'Learn more' })).join('')}
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Voice AI Platform Picker: Vapi, Retell or GHL? | Voxil AI',
    description: 'Free voice AI platform picker: answer six questions to see whether Vapi, Retell AI, GoHighLevel Voice AI or a custom build fits your AI receptionist or calling agent best.',
    h1: 'Voice AI <span class="text-gradient-teal">Platform Picker</span>',
    lead: 'Vapi, Retell AI, GoHighLevel Voice AI or a custom build? Answer six quick questions and get an honest recommendation, with the reasons behind it.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// Automation Savings Calculator
// ---------------------------------------------------------------------------
const TASKS = [
  ['Lead follow-up and CRM data entry', 6, 70],
  ['Appointment scheduling and reminders', 5, 80],
  ['Answering routine calls and emails', 8, 60],
  ['Invoicing and payment reminders', 3, 80],
  ['Weekly reporting and dashboards', 2, 70],
  ['Copying data from forms and documents', 4, 70],
];

export const renderSavingsCalculator = () => {
  const slug = 'automation-savings-calculator';
  const r = meta(slug);
  const faqs = [
    { q: 'How is time saved calculated?', a: 'For each task, hours per week × the share you expect to automate × 52 weeks gives annual hours saved. Multiplying by the loaded hourly cost gives the annual value. The full-time equivalent divides total hours by 2,080, a standard full-time year.' },
    { q: 'What automation percentage should I use?', a: 'Be conservative. Repetitive, rule-based tasks like reminders and data entry often automate well; tasks needing judgment automate partially. If unsure, start at 50% and adjust after a pilot.' },
    { q: 'Does saving time mean cutting staff?', a: 'Rarely, for small businesses. Most use the time for higher-value work: selling, serving customers and growing without hiring as quickly.' },
    { q: 'Is my data stored?', a: 'No. The calculator runs in your browser and nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <form class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" data-savings onsubmit="return false">
          <div class="glass-card" style="--accent: ${r.accent}">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your repetitive tasks</p>
            <div class="mt-4 space-y-4">
              ${TASKS.map(
                ([name, hours, pct], i) => `
              <div class="grid gap-3 rounded-xl border border-secondary/[0.08] bg-white p-4 sm:grid-cols-[1fr_auto_auto] sm:items-end">
                <label class="block"><span class="field-label">Task</span><input class="field-input mt-2" type="text" value="${name}" data-sv-name="${i}" /></label>
                <label class="block sm:w-28"><span class="field-label">Hours / week</span><input class="field-input mt-2" type="number" min="0" max="80" step="0.5" value="${hours}" data-sv-hours="${i}" /></label>
                <label class="block sm:w-32"><span class="field-label">Automatable</span><select class="field-input mt-2" data-sv-pct="${i}">${[25, 50, 60, 70, 80, 90].map((p) => `<option value="${p}"${p === pct ? ' selected' : ''}>${p}%</option>`).join('')}</select></label>
              </div>`
              ).join('')}
            </div>
            <label class="mt-5 block"><span class="field-label">Loaded hourly cost of the people doing this work ($)</span><input id="sv-rate" class="field-input mt-2" type="number" min="5" max="300" value="30" /></label>
            <p class="text-tagline-3 mt-1.5 text-secondary/40">Wage plus taxes, benefits and overhead.</p>
          </div>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Hours you could save per year</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-teal" data-sv="hours">0</p>
                <p class="text-tagline-2 text-secondary/55">worth <span class="font-semibold text-secondary" data-sv="value">$0</span> per year · <span class="font-semibold text-secondary" data-sv="fte">0</span> full-time equivalent</p>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Automate these first</p>
                <ol class="mt-3 space-y-2" data-sv="top"></ol>
              </div>
            </div>
            ${ctaCard(r.accent, 'Turn hours into a plan', 'We’ll map your top tasks to specific automations and give you a fixed-price proposal.')}
          </div>
        </form>
        <p class="text-tagline-3 mx-auto mt-8 max-w-3xl text-center text-secondary/35">Estimates only. Annual hours saved = hours per week × automatable share × 52. Value = hours × hourly cost. Full-time equivalent = hours ÷ 2,080.</p>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'What automates well', title: 'Where the hours <span class="text-gradient-teal">usually hide</span>', lead: 'The best automation candidates share three traits.' })}
        ${infoCards([
          ['Frequent', 'Tasks done daily or weekly add up fastest. A five-minute task done 30 times a week is over 100 hours a year.'],
          ['Rule-based', 'If you can write the steps down, software can usually follow them. Judgment-heavy steps stay with people.'],
          ['Cross-system', 'Copying data between tools is slow and error-prone, and it’s exactly what integrations remove.'],
        ])}
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/resources/automation-platform-picker/" class="chip-link">${icon('sliders', 'size-4 text-primary-600')}<span>Automation platform picker</span></a>
          <a href="/blog/ai-automation-small-business-guide/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>AI automation starter guide</span></a>
          <a href="/services/workflow-automation/" class="chip-link">${icon('bolt', 'size-4 text-primary-600')}<span>Workflow automation service</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Automation Time Savings Calculator (Free) | Voxil AI',
    description: 'Free automation savings calculator: estimate the hours and money your business could save each year by automating follow-up, scheduling, data entry, invoicing and reporting.',
    h1: 'Automation <span class="text-gradient-teal">Savings Calculator</span>',
    lead: 'List your repetitive tasks and see how many hours and dollars automation could give back each year, and which tasks to automate first.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// AI Chatbot Cost Calculator
// ---------------------------------------------------------------------------
export const renderChatbotCostCalculator = () => {
  const slug = 'ai-chatbot-cost-calculator';
  const r = meta(slug);
  const faqs = [
    { q: 'How is AI chatbot cost calculated?', a: 'Language models charge per token, roughly a short word or part of a word. Each message sends input tokens (instructions, knowledge and conversation so far) and receives output tokens (the reply). Monthly cost = conversations × messages × tokens × price per token, plus any platform fees.' },
    { q: 'Why do input tokens matter so much?', a: 'Every message usually resends the system prompt, retrieved knowledge and conversation history, so input tokens per message are often ten times the output. Shorter prompts, focused retrieval and prompt caching reduce them.' },
    { q: 'What prices should I enter?', a: 'Use the current per-million-token prices from your model provider’s pricing page. Prices differ widely between small and large models and change over time.' },
    { q: 'Is my data stored?', a: 'No. The calculator runs in your browser and nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <form class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" data-chat-cost onsubmit="return false">
          <div class="glass-card space-y-7" style="--accent: ${r.accent}">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Usage</p>
            ${calcField({ id: 'cc-convos', label: 'Conversations per month', hint: 'Chats started on your website, WhatsApp or other channels.', min: 50, max: 50000, step: 50, value: 1000 })}
            ${calcField({ id: 'cc-msgs', label: 'Bot replies per conversation', hint: 'Booking and FAQ chats are often 4 to 8 replies.', min: 1, max: 30, step: 1, value: 6 })}
            ${calcField({ id: 'cc-in', label: 'Input tokens per reply', hint: 'Instructions + retrieved knowledge + history. Often 1,000 to 4,000.', min: 200, max: 20000, step: 100, value: 2000 })}
            ${calcField({ id: 'cc-out', label: 'Output tokens per reply', hint: 'A short reply is roughly 50 to 200 tokens.', min: 20, max: 1500, step: 10, value: 150 })}
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Prices (example rates, use your provider’s)</p>
            ${calcField({ id: 'cc-pin', label: 'Input price per 1M tokens', hint: 'Small models cost far less than large ones.', min: 0, max: 30, step: 0.05, value: 3, prefix: '$' })}
            ${calcField({ id: 'cc-pout', label: 'Output price per 1M tokens', hint: 'Output usually costs several times more than input.', min: 0, max: 100, step: 0.5, value: 15, prefix: '$' })}
            ${calcField({ id: 'cc-cache', label: 'Share of input served from cache', hint: 'Prompt caching can cut the cost of repeated instructions.', min: 0, max: 90, step: 5, value: 0, suffix: '%' })}
            ${calcField({ id: 'cc-fixed', label: 'Platform and hosting per month', hint: 'Chat widget, hosting, vector database, monitoring.', min: 0, max: 2000, step: 10, value: 50, prefix: '$' })}
          </div>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Estimated monthly cost</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-teal" data-result="total">$0</p>
                <p class="text-tagline-2 text-secondary/55"><span class="font-semibold text-secondary" data-result="perConvo">$0</span> per conversation</p>
                <div class="hairline my-6"></div>
                <div class="grid grid-cols-2 gap-4">
                  <div><p class="text-tagline-3 text-secondary/45">Model usage</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-result="model">$0</p></div>
                  <div><p class="text-tagline-3 text-secondary/45">Tokens per month</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-result="tokens">0</p></div>
                </div>
              </div>
            </div>
            ${ctaCard(r.accent, 'Want a chatbot that pays for itself?', 'We design prompts and retrieval to keep token costs low without hurting answer quality.')}
          </div>
        </form>
        <p class="text-tagline-3 mx-auto mt-8 max-w-3xl text-center text-secondary/35">Estimates only. Cost = conversations × replies × (input tokens × input price × (1 − cache share × 0.9) + output tokens × output price) ÷ 1,000,000 + platform costs. Cached input is assumed to cost 10% of the normal rate; check your provider’s caching prices. Default prices are examples, not quotes.</p>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Lowering the cost', title: 'Three levers for <span class="text-gradient-teal">cheaper chatbots</span>', lead: 'Most chatbot bills are driven by input tokens, not replies.' })}
        ${infoCards([
          ['Right-size the model', 'Routine FAQ and booking chats often work well on smaller, cheaper models. Reserve larger models for complex questions.'],
          ['Trim the context', 'Retrieve only the most relevant knowledge, summarize long histories and keep the system prompt focused.'],
          ['Cache what repeats', 'Instructions and policies that don’t change between messages are ideal for prompt caching where your provider supports it.'],
        ])}
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/blog/website-ai-chatbot-guide/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>Website chatbot guide</span></a>
          <a href="/resources/ai-voice-agent-cost-calculator/" class="chip-link">${icon('calculator', 'size-4 text-primary-600')}<span>Voice agent cost calculator</span></a>
          <a href="/services/ai-chatbots/" class="chip-link">${icon('chat', 'size-4 text-primary-600')}<span>AI chatbot service</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'AI Chatbot Cost Calculator: Token Costs | Voxil AI',
    description: 'Free AI chatbot cost calculator: estimate monthly language model costs from conversations, tokens and per-token prices, including prompt caching and platform fees.',
    h1: 'AI Chatbot <span class="text-gradient-teal">Cost Calculator</span>',
    lead: 'Estimate what an AI chatbot costs to run each month from your conversation volume, token usage and model prices, and see how caching and smaller models change the bill.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// Automation Platform Picker
// ---------------------------------------------------------------------------
const AUTO_PICKER = [
  { q: 'Who will build and maintain the automations?', options: [['Non-technical team members', { zapier: 3, ghl: 1 }], ['Someone comfortable with logic and data', { make: 3, n8n: 1 }], ['A developer or technical partner', { n8n: 3, make: 1 }]] },
  { q: 'Where do your leads, calendar and messaging live?', options: [['Mostly in GoHighLevel', { ghl: 3 }], ['In different apps (HubSpot, Google, etc.)', { zapier: 1, make: 2, n8n: 1 }], ['In our own systems and databases', { n8n: 2, make: 1 }]] },
  { q: 'How complex are your workflows?', options: [['Simple: when X happens, do Y', { zapier: 2, ghl: 1 }], ['Branching, filters, loops and data mapping', { make: 2, n8n: 2 }], ['AI agents and custom code', { n8n: 3 }]] },
  { q: 'How much volume will you run?', options: [['Low: hundreds of runs a month', { zapier: 2, ghl: 1 }], ['Medium: thousands', { make: 2, ghl: 1 }], ['High, or cost needs to stay predictable', { n8n: 3 }]] },
  { q: 'Do you need to keep data on your own servers?', options: [['No, cloud is fine', { zapier: 1, make: 1, ghl: 1 }], ['Yes, or we prefer it', { n8n: 3 }]] },
  { q: 'What matters most?', options: [['Speed to set up', { zapier: 2, ghl: 1 }], ['Flexibility at a fair price', { make: 2 }], ['Full control and ownership', { n8n: 2 }], ['Everything in one CRM', { ghl: 3 }]] },
];

const AUTO_PLATFORMS = {
  zapier: { name: 'Zapier', href: '/services/zapier-automation/', why: 'The fastest way for non-technical teams to connect popular apps, with thousands of integrations and simple trigger-action workflows.' },
  make: { name: 'Make.com', href: '/services/make-automation/', why: 'A visual builder for branching, data-heavy scenarios, usually more cost-effective than Zapier as workflows grow more complex.' },
  n8n: { name: 'n8n', href: '/services/n8n-automation/', why: 'Best for developer-led teams that want self-hosting, AI agents, custom code and predictable costs at high volume.' },
  ghl: { name: 'GoHighLevel workflows', href: '/services/gohighlevel-automation/', why: 'The natural choice when your CRM, calendars and messaging already live in GoHighLevel; no extra tool to maintain.' },
};

export const renderAutomationPicker = () => {
  const slug = 'automation-platform-picker';
  const r = meta(slug);
  const faqs = [
    { q: 'Can I use more than one automation platform?', a: 'Yes, and many businesses do. A common setup is GoHighLevel workflows for marketing and follow-up, with Make.com or n8n for integrations GoHighLevel doesn’t handle natively.' },
    { q: 'Is the recommendation sponsored?', a: 'No. We build on all four and have no paid relationship that affects the result.' },
    { q: 'Which is cheapest?', a: 'It depends on volume and complexity. Zapier is often simplest at low volume, Make is usually more economical for complex scenarios, and self-hosted n8n can be the most predictable at high volume.' },
    { q: 'Is my answer stored?', a: 'No. The picker runs in your browser and nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-picker>
          <div class="space-y-4">
            ${AUTO_PICKER.map(
              (q, i) => `
            <fieldset class="glass-card" style="--accent: ${r.accent}">
              <legend class="sr-only">${q.q}</legend>
              <p class="text-tagline-1 font-semibold text-secondary" aria-hidden="true">${i + 1}. ${q.q}</p>
              <div class="mt-4 grid gap-2.5">
                ${q.options.map(([label, score], j) => `<label class="quiz-item"><input type="radio" name="ap${i}" value="${j}" data-score='${JSON.stringify(score)}'${j === 0 ? ' checked' : ''} /><span>${label}</span></label>`).join('')}
              </div>
            </fieldset>`
            ).join('')}
          </div>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Best fit for you</p>
                <p class="text-heading-4 mt-3 font-semibold text-gradient-teal" data-picker-name></p>
                <p class="text-tagline-2 mt-2 text-secondary/65" data-picker-why></p>
                <a href="#" class="link-arrow mt-4 text-primary-600" data-picker-link>Learn more</a>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">All options, ranked</p>
                <ol class="mt-3 space-y-2" data-picker-rank></ol>
              </div>
            </div>
            ${ctaCard(r.accent, 'Want a second opinion?', 'We build on all four platforms. Tell us your workflows and we’ll recommend the right mix.')}
          </div>
          <script type="application/json" data-picker-data>${JSON.stringify(AUTO_PLATFORMS)}</script>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'The options', title: 'Four automation platforms, <span class="text-gradient-teal">four sweet spots</span>', lead: 'Each is the right choice for a different team. Our full comparison covers pricing models and limits.' })}
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          ${Object.values(AUTO_PLATFORMS).map((p) => linkCard({ href: p.href, title: p.name, desc: p.why, icon: 'puzzle', accent: r.accent, cta: 'Learn more' })).join('')}
        </div>
        <div data-reveal class="mt-8 text-center"><a href="/blog/n8n-vs-make-vs-zapier/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>n8n vs Make vs Zapier comparison</span></a></div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Automation Platform Picker: Zapier, Make or n8n? | Voxil AI',
    description: 'Free automation platform picker: answer six questions to see whether Zapier, Make.com, n8n or GoHighLevel workflows fit your team, workflows, volume and data needs.',
    h1: 'Automation <span class="text-gradient-teal">Platform Picker</span>',
    lead: 'Zapier, Make.com, n8n or GoHighLevel workflows? Answer six quick questions about your team and workflows and get an honest recommendation.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// Speed-to-Lead Scorecard
// ---------------------------------------------------------------------------
const SCORE_QS = [
  { id: 'response', q: 'How fast do new web and ad leads usually get a first response?', options: [['Under 1 minute', 30], ['1 to 5 minutes', 24], ['5 to 30 minutes', 14], ['30 to 60 minutes', 8], ['A few hours', 3], ['Next day or later', 0]], fix: 'Send an instant SMS and email and place a call within a minute. See <a href="/services/speed-to-lead-automation/">speed-to-lead automation</a>.' },
  { id: 'afterhours', q: 'What happens to calls after hours and on weekends?', options: [['An AI agent or live person answers', 20], ['Missed calls get an automatic text back', 12], ['They go to voicemail', 3], ['Nothing; the phone just rings', 0]], fix: 'Cover nights and weekends with an <a href="/services/ai-receptionist/">AI receptionist</a> or at least <a href="/blog/gohighlevel-missed-call-text-back/">missed-call text-back</a>.' },
  { id: 'attempts', q: 'How many follow-up attempts does a lead get if they don’t reply?', options: [['7 or more over two weeks', 20], ['4 to 6', 14], ['2 or 3', 6], ['Usually just one', 0]], fix: 'Build a multi-channel <a href="/blog/automate-lead-follow-up-gohighlevel/">follow-up sequence</a> with stop conditions.' },
  { id: 'channels', q: 'Which channels do you use to follow up?', options: [['Phone, SMS and email', 15], ['Two of the three', 9], ['Just one', 3]], fix: 'Combine calls, texts and email; different leads respond on different channels.' },
  { id: 'measure', q: 'Do you track response time and booked rate by lead source?', options: [['Yes, on a dashboard', 15], ['Roughly, in spreadsheets', 7], ['No', 0]], fix: 'Track speed to lead and booked rate per source so you can see what is working.' },
];

export const renderSpeedScorecard = () => {
  const slug = 'speed-to-lead-scorecard';
  const r = meta(slug);
  const faqs = [
    { q: 'What is a good speed-to-lead time?', a: 'Under five minutes is a strong target, and under one minute is better. Research on lead response has found the odds of reaching and qualifying a lead fall sharply as response time grows.' },
    { q: 'How is the score calculated?', a: 'Each answer earns points, weighted toward first-response speed and after-hours coverage, which have the biggest effect on conversion. The maximum is 100.' },
    { q: 'How can I improve my score quickly?', a: 'The fastest wins are usually an instant automated reply to every new lead and missed-call text-back, both of which can be set up in days.' },
    { q: 'Is my answer stored?', a: 'No. The scorecard runs in your browser and nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-scorecard>
          <div class="space-y-4">
            ${SCORE_QS.map(
              (q, i) => `
            <fieldset class="glass-card" style="--accent: ${r.accent}">
              <legend class="sr-only">${q.q}</legend>
              <p class="text-tagline-1 font-semibold text-secondary" aria-hidden="true">${i + 1}. ${q.q}</p>
              <div class="mt-4 grid gap-2.5 sm:grid-cols-2">
                ${q.options.map(([label, pts], j) => `<label class="quiz-item"><input type="radio" name="sc-${q.id}" value="${pts}" data-max="${q.options[0][1]}"${j === Math.floor(q.options.length / 2) ? ' checked' : ''} /><span>${label}</span></label>`).join('')}
              </div>
            </fieldset>`
            ).join('')}
          </div>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your speed-to-lead score</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-warm"><span data-sc-score>0</span>/100</p>
                <p class="text-tagline-1 mt-2 font-semibold text-secondary" data-sc-grade></p>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Biggest improvements</p>
                <ol class="quiz-fixes mt-3 space-y-2.5">
                  ${SCORE_QS.map((q) => `<li data-sc-fix="${q.id}">${q.fix}</li>`).join('\n                  ')}
                </ol>
              </div>
            </div>
            ${ctaCard(r.accent, 'Want a perfect score?', 'We set up instant response, after-hours answering and follow-up, usually in under two weeks.')}
          </div>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Why it matters', title: 'Minutes decide <span class="text-gradient-warm">who wins the lead</span>', lead: 'The scorecard weights the factors that most affect whether a lead becomes a customer.' })}
        ${infoCards([
          ['First response speed', 'Leads often contact several businesses. The first useful reply usually sets the terms of the conversation.'],
          ['Coverage', 'Evenings and weekends are when many people search and call. Voicemail is where many of those leads end.'],
          ['Persistence', 'Most leads need several touches across channels before they reply. Many businesses stop after one.'],
        ])}
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/blog/speed-to-lead-statistics/" class="chip-link">${icon('chart', 'size-4 text-primary-600')}<span>Speed-to-lead statistics</span></a>
          <a href="/resources/lead-loss-calculator/" class="chip-link">${icon('calculator', 'size-4 text-primary-600')}<span>Lead Loss Calculator</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Speed-to-Lead Scorecard: Grade Your Response | Voxil AI',
    description: 'Free speed-to-lead scorecard: grade how fast and how persistently your business responds to new leads, and get prioritized fixes for response time, coverage and follow-up.',
    h1: 'Speed-to-Lead <span class="text-gradient-warm">Scorecard</span>',
    lead: 'Five quick questions grade how fast and how persistently you respond to new leads, with a score out of 100 and the specific fixes that would raise it most.',
    body,
    faqs,
  });
};
