// Additional free resources: ROI calculator, readiness assessment, voice agent
// scripts, follow-up templates and glossary. Interactive behavior lives in
// src/js/common/roi-calculator.js, readiness-quiz.js and copy-button.js.
import { RESOURCES, SITE, resourceUrl } from '../../content/site.js';
import { arrow, breadcrumbSchema, esc, faqBlock, faqSchema, icon, linkCard, page, sectionHead, webPageSchema } from '../lib/ui.js';
import { calcField, crumbsFor, simpleHero } from './resources.js';

const meta = (slug) => RESOURCES.find((r) => r.slug === slug);

const relatedTools = (exclude) => `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'More free tools', title: 'Keep <span class="text-gradient-teal">exploring</span>' })}
        <div class="grid gap-4 md:grid-cols-3">
          ${RESOURCES.filter((r) => r.slug !== exclude && r.slug !== 'media-kit')
            .slice(0, 6)
            .map((r) => linkCard({ href: resourceUrl(r.slug), title: r.name, desc: r.short, icon: r.icon, accent: r.accent, cta: 'Open' }))
            .join('')}
        </div>
      </div>
    </section>`;

export const ctaCard = (accent, title, text) => `
            <div class="glass-card" style="--accent: ${accent}">
              <p class="text-tagline-2 font-semibold text-secondary">${title}</p>
              <p class="text-tagline-3 mt-1 text-secondary/55">${text}</p>
              <a href="/book-meeting.html" class="cta cta-md cta-coral mt-4 w-full">Book a free strategy call${arrow()}</a>
            </div>`;

export const shell = ({ slug, title, description, h1, lead, eyebrowText = 'Free tool', body, faqs, extraSchema = [] }) => {
  const r = meta(slug);
  const path = resourceUrl(slug);
  const crumbs = crumbsFor(r.name, slug);
  return page({
    path,
    title,
    description,
    body: `
    ${simpleHero({ crumbs, eyebrowText, accent: r.accent, h1, lead })}
${body}
    ${faqBlock({ faqs, title: `${esc(r.name)} <span class="text-gradient-teal">FAQ</span>` })}
${relatedTools(slug)}`,
    schema: [webPageSchema({ path, title, description }), breadcrumbSchema(crumbs), faqSchema(faqs), ...extraSchema],
  });
};

// ---------------------------------------------------------------------------
// AI Automation ROI Calculator
// ---------------------------------------------------------------------------
// Example starting values per industry. Visitors adjust every number.
const ROI_PRESETS = [
  { key: 'custom', label: 'Custom (general service business)', v: { appointments: 10, close: 40, value: 600, hours: 10, hourly: 25, monthly: 500, setup: 3000 } },
  { key: 'home-services', label: 'Home services / HVAC / roofing', v: { appointments: 12, close: 45, value: 900, hours: 12, hourly: 25, monthly: 500, setup: 3500 } },
  { key: 'medical', label: 'Medical or dental clinic', v: { appointments: 20, close: 80, value: 350, hours: 15, hourly: 22, monthly: 600, setup: 4000 } },
  { key: 'real-estate', label: 'Real estate team', v: { appointments: 3, close: 15, value: 8000, hours: 10, hourly: 35, monthly: 600, setup: 4000 } },
  { key: 'fitness', label: 'Gym or fitness studio', v: { appointments: 25, close: 40, value: 700, hours: 8, hourly: 20, monthly: 400, setup: 2500 } },
  { key: 'legal', label: 'Law firm', v: { appointments: 6, close: 30, value: 4000, hours: 10, hourly: 40, monthly: 700, setup: 4500 } },
  { key: 'insurance', label: 'Insurance agency', v: { appointments: 15, close: 35, value: 1200, hours: 12, hourly: 25, monthly: 500, setup: 3500 } },
];

export const renderRoiCalculator = () => {
  const slug = 'ai-roi-calculator';
  const r = meta(slug);
  const d = ROI_PRESETS[0].v;
  const faqs = [
    { q: 'How is AI automation ROI calculated?', a: 'Monthly gain is extra revenue from additional appointments (appointments × close rate × average value) plus the value of staff hours saved. ROI compares 12 months of gain with the setup fee plus 12 months of running costs.' },
    { q: 'Are the industry presets real benchmarks?', a: 'No. They are example starting values so the calculator isn’t empty. Replace every number with your own figures for a meaningful estimate.' },
    { q: 'What should I count as running costs?', a: 'Platform subscriptions such as GoHighLevel, AI usage per minute or message, SMS and telephony, and any monthly support or maintenance fee.' },
    { q: 'Is my data stored?', a: 'No. The calculator runs in your browser and nothing you enter is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <form class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" data-roi-calc onsubmit="return false">
          <div class="glass-card space-y-7" style="--accent: ${r.accent}">
            <div>
              <label for="roi-preset" class="field-label">Start from an example</label>
              <select id="roi-preset" class="field-input mt-2" data-roi-preset>
                ${ROI_PRESETS.map((p) => `<option value="${p.key}" data-values='${JSON.stringify(p.v)}'>${p.label}</option>`).join('')}
              </select>
              <p class="text-tagline-3 mt-1.5 text-secondary/40">Example starting values only. Adjust each number to match your business.</p>
            </div>
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Extra revenue</p>
            ${calcField({ id: 'appointments', label: 'Extra appointments per month', hint: 'From faster response, after-hours answering and follow-up.', min: 0, max: 200, step: 1, value: d.appointments })}
            ${calcField({ id: 'close', label: 'Close rate on appointments', hint: 'Share of appointments that become paying customers.', min: 1, max: 100, step: 1, value: d.close, suffix: '%' })}
            ${calcField({ id: 'value', label: 'Average customer value', hint: 'First purchase, or lifetime value if you prefer.', min: 50, max: 20000, step: 50, value: d.value, prefix: '$' })}
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Time saved</p>
            ${calcField({ id: 'hours', label: 'Staff hours saved per week', hint: 'Calls, follow-up, data entry and scheduling handled by automation.', min: 0, max: 80, step: 1, value: d.hours })}
            ${calcField({ id: 'hourly', label: 'Loaded hourly cost of that time', hint: 'Wage plus overhead.', min: 10, max: 150, step: 1, value: d.hourly, prefix: '$' })}
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Costs</p>
            ${calcField({ id: 'monthly', label: 'Monthly running cost', hint: 'Software, AI usage, SMS and support.', min: 0, max: 5000, step: 50, value: d.monthly, prefix: '$' })}
            ${calcField({ id: 'setup', label: 'One-time setup cost', hint: 'Build and integration fee.', min: 0, max: 30000, step: 250, value: d.setup, prefix: '$' })}
          </div>

          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Estimated monthly gain</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-teal" data-result="gain">$0</p>
                <p class="text-tagline-2 text-secondary/55">net of running costs: <span class="font-semibold text-secondary" data-result="net">$0</span> per month</p>
                <div class="hairline my-6"></div>
                <div class="grid grid-cols-2 gap-4">
                  <div><p class="text-tagline-3 text-secondary/45">Payback period</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-result="payback">0</p></div>
                  <div><p class="text-tagline-3 text-secondary/45">12-month ROI</p><p class="stat-num text-heading-5 mt-1 text-secondary" data-result="roi">0%</p></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="stat-card-ink"><p class="stat-num text-heading-5 text-secondary" data-result="revenue">$0</p><p class="text-tagline-3 mt-1 text-secondary/50">extra revenue / mo</p></div>
              <div class="stat-card-ink"><p class="stat-num text-heading-5 text-secondary" data-result="time">$0</p><p class="text-tagline-3 mt-1 text-secondary/50">time value / mo</p></div>
            </div>
            ${ctaCard(r.accent, 'Want a real estimate?', 'We’ll check your lead volume, response times and costs on a free call and give you an honest projection.')}
          </div>
        </form>
        <p class="text-tagline-3 mx-auto mt-8 max-w-3xl text-center text-secondary/35">Estimates only, based on the numbers you enter. Monthly gain = appointments × close rate × value + hours × 4.33 × hourly cost. ROI = (12 × gain − setup − 12 × running cost) ÷ (setup + 12 × running cost).</p>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'How to use it', title: 'Getting an <span class="text-gradient-teal">honest number</span>', lead: 'An ROI estimate is only as good as its inputs. These tips keep it realistic.' })}
        <div class="grid gap-4 md:grid-cols-3">
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Start from your baseline</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Count last month’s inquiries, appointments and missed calls. Extra appointments should come from leads you currently lose, not wishful growth.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Be conservative on lift</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">If you miss 30 calls a month, assume you win back only some of them. Our <a class="text-primary-600 underline underline-offset-4" href="/resources/lead-loss-calculator/">Lead Loss Calculator</a> helps estimate this.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Include every cost</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Software, AI minutes, SMS, phone numbers and support all count. See <a class="text-primary-600 underline underline-offset-4" href="/blog/how-much-does-an-ai-voice-agent-cost/">what an AI voice agent costs</a>.</p></div>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'AI Automation ROI Calculator (Free) | Voxil AI',
    description: 'Free AI automation ROI calculator: estimate monthly gain, payback period and 12-month ROI from extra appointments and staff time saved, with industry examples.',
    h1: 'AI Automation <span class="text-gradient-teal">ROI Calculator</span>',
    lead: 'Estimate what AI answering, follow-up and booking could return for your business: monthly gain, payback period and 12-month ROI. Runs in your browser; nothing is saved.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// AI Readiness Assessment
// ---------------------------------------------------------------------------
const READINESS = [
  { q: 'Every inbound call is answered live, including after hours and weekends.', fix: 'Add an <a href="/services/ai-receptionist/">AI receptionist</a> or <a href="/blog/gohighlevel-missed-call-text-back/">missed-call text-back</a> so no caller hits voicemail.' },
  { q: 'New web and ad leads get a reply within five minutes, day or night.', fix: 'Set up <a href="/blog/automate-lead-follow-up-gohighlevel/">instant lead response</a> by SMS, email and call.' },
  { q: 'Leads who don’t reply get at least six follow-ups across two weeks.', fix: 'Build a multi-channel <a href="/services/ai-follow-up-system/">follow-up sequence</a> with stop conditions.' },
  { q: 'Customers can book appointments without talking to staff.', fix: 'Add <a href="/services/ai-appointment-booking/">AI appointment booking</a> by phone, text and chat.' },
  { q: 'Appointments get automatic reminders with easy rescheduling.', fix: 'Automate reminders and no-show recovery in your CRM.' },
  { q: 'All leads live in one CRM with clear pipeline stages.', fix: 'Start with a <a href="/services/crm-setup/">CRM setup</a> or <a href="/services/ghl-setup/">GoHighLevel setup</a> before adding AI.' },
  { q: 'You know your response time, booked rate and lead source performance.', fix: 'Add pipeline reporting and source tracking so you can measure every change.' },
  { q: 'Happy customers are asked for a review automatically.', fix: 'Trigger review requests when a job or visit is marked complete.' },
  { q: 'Past customers and old leads receive regular reactivation campaigns.', fix: 'Run <a href="/services/email-sms-marketing/">reactivation campaigns</a> to your existing database.' },
  { q: 'Your FAQs, pricing rules and policies are written down in one place.', fix: 'Document your top questions and answers; it becomes the knowledge base for any AI agent.' },
];

export const renderReadiness = () => {
  const slug = 'ai-readiness-assessment';
  const r = meta(slug);
  const faqs = [
    { q: 'What does the AI readiness score mean?', a: 'It counts how many core lead-handling and automation practices you already have. A low score usually means the biggest wins are basic systems like call answering and instant follow-up, not advanced AI.' },
    { q: 'Do I need a CRM before using AI?', a: 'Ideally yes. AI agents work best when they can read and write to one CRM with clear pipeline stages; otherwise conversations and data end up scattered.' },
    { q: 'What should I automate first?', a: 'Usually whatever leaks the most revenue today: unanswered calls, slow response to new leads or missing follow-up. The assessment highlights the gaps in priority order.' },
    { q: 'Is my answer stored?', a: 'No. The assessment runs in your browser and nothing is sent or saved.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-quiz>
          <fieldset class="glass-card space-y-3" style="--accent: ${r.accent}">
            <legend class="text-tagline-3 mb-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Tick everything that’s true today</legend>
            ${READINESS.map(
              (x, i) => `<label class="quiz-item"><input type="checkbox" data-quiz-item="${i}" /><span>${x.q}</span></label>`
            ).join('\n            ')}
          </fieldset>
          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your readiness score</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-warm"><span data-quiz-score>0</span>/10</p>
                <p class="text-tagline-1 mt-2 font-semibold text-secondary" data-quiz-tier>Start with the foundations</p>
                <p class="text-tagline-2 mt-1 text-secondary/60" data-quiz-tier-text>Your biggest wins are basic: answering every call and replying to every lead fast.</p>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your next steps</p>
                <ol class="quiz-fixes mt-3 space-y-2.5" data-quiz-fixes>
                  ${READINESS.map((x, i) => `<li data-quiz-fix="${i}">${x.fix}</li>`).join('\n                  ')}
                </ol>
                <p class="text-tagline-2 mt-3 hidden text-secondary/60" data-quiz-done>You have the core systems in place. The next step is scaling with AI voice and chat agents across every channel.</p>
              </div>
            </div>
            ${ctaCard(r.accent, 'Want a second opinion?', 'Bring your score to a free 30-minute call and we’ll turn it into a prioritized automation plan.')}
          </div>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Why these ten', title: 'Foundations before <span class="text-gradient-warm">fancy AI</span>', lead: 'AI agents amplify the systems underneath them. These ten practices are what separate businesses that get a return from AI from those that only run pilots.' })}
        <div class="grid gap-4 md:grid-cols-3">
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Coverage</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Answering every call and replying to every lead fast is the cheapest revenue most businesses can recover.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Persistence</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Follow-up, reminders and reactivation turn the leads you already paid for into customers.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Visibility</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">One CRM and simple reporting let you prove which automation is working and fix what isn’t.</p></div>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'AI Readiness Assessment for Small Business | Voxil AI',
    description: 'Free 10-question AI readiness assessment for service businesses: score your call answering, lead response, follow-up, booking and CRM, and get a prioritized automation plan.',
    h1: 'AI Readiness <span class="text-gradient-warm">Assessment</span>',
    lead: 'Ten quick yes-or-no questions to find out how ready your business is for AI automation, and which system to build first. Takes about a minute; nothing is saved.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// Copyable template blocks (scripts and messages)
// ---------------------------------------------------------------------------
const copyBlock = (id, title, desc, text) => `
          <article data-reveal class="glass-card flex flex-col">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-heading-6 font-semibold text-secondary">${title}</h3>
                <p class="text-tagline-3 mt-1 text-secondary/55">${desc}</p>
              </div>
              <button type="button" class="cta cta-sm cta-ghost shrink-0" data-copy="${id}">${icon('copy', 'size-4')}<span data-copy-label>Copy</span></button>
            </div>
            <pre id="${id}" class="template-text mt-4">${esc(text.trim())}</pre>
          </article>`;

const VOICE_SCRIPTS = [
  {
    id: 'script-receptionist',
    title: 'Inbound AI receptionist',
    desc: 'Answers calls, handles FAQs, books appointments and routes urgent calls.',
    text: `ROLE
You are the receptionist for {{business_name}}, a {{business_type}} in {{city}}. You answer calls warmly, help callers book appointments and answer common questions.

OPENING
"Thanks for calling {{business_name}}, this is {{agent_name}}. How can I help you today?"

GOALS (in order)
1. Understand why they're calling.
2. If they want an appointment: collect name, phone, reason for visit and preferred day, then offer two available times.
3. If they have a question: answer from the knowledge base. If you don't know, say so and offer to take a message.
4. Confirm details back before ending the call.

RULES
- Keep answers short: one or two sentences, then a question.
- Never guess prices, policies or availability. Use the knowledge base and calendar tool.
- If the caller asks for a person, is upset, or mentions an emergency, transfer to {{transfer_number}} or take an urgent message.
- Do not give medical, legal or financial advice.

CLOSING
"You're all set for {{day}} at {{time}}. You'll get a text confirmation shortly. Anything else I can help with?"`,
  },
  {
    id: 'script-speed-to-lead',
    title: 'Outbound speed-to-lead call',
    desc: 'Calls new form or ad leads within a minute to qualify and book.',
    text: `ROLE
You call people who just requested information from {{business_name}} about {{service}}. They submitted a form a few minutes ago and agreed to be contacted.

OPENING
"Hi, is this {{first_name}}? This is {{agent_name}} from {{business_name}}. You just asked about {{service}} on our website. Is now a good time for a quick minute?"

IF NOT A GOOD TIME
"No problem. When's better, later today or tomorrow morning?" Book a callback and end politely.

QUALIFY (ask one at a time)
1. "What's prompting you to look into {{service}} right now?"
2. "{{qualifying_question_2}}" (e.g. location, homeowner, timeline)
3. "{{qualifying_question_3}}" (e.g. budget range, insurance, decision maker)

BOOK
If qualified: "The next step is a short {{appointment_type}} with {{team_member}}. I have {{slot_1}} or {{slot_2}}. Which works better?"
If not a fit: thank them, explain why briefly and offer a helpful resource.

RULES
- If they ask whether you're an AI, answer honestly.
- If they ask not to be called again, apologize, confirm, and mark them do-not-call.
- Keep the call under four minutes.`,
  },
  {
    id: 'script-reminder',
    title: 'Appointment confirmation call',
    desc: 'Confirms or reschedules tomorrow’s appointments.',
    text: `OPENING
"Hi {{first_name}}, this is {{agent_name}} calling from {{business_name}} about your appointment tomorrow, {{day}} at {{time}}. Are you still able to make it?"

IF YES
"Great, we'll see you then. {{arrival_instructions}}. Have a good day!"

IF NO
"No problem at all. Would you like to move it? I have {{slot_1}} or {{slot_2}}."
Reschedule, confirm the new time and say they'll get a text confirmation.

IF VOICEMAIL
"Hi {{first_name}}, it's {{business_name}} confirming your appointment {{day}} at {{time}}. Reply to our text to confirm or reschedule. Thanks!"`,
  },
  {
    id: 'script-reactivation',
    title: 'Past-customer reactivation call',
    desc: 'Re-engages customers or leads who opted in but went quiet.',
    text: `OPENING
"Hi {{first_name}}, this is {{agent_name}} from {{business_name}}. We worked with you on {{last_service}} back in {{last_date}}, and I'm calling with a quick check-in. Do you have a minute?"

REASON FOR CALLING
"{{reason}}" (e.g. "It's been about a year, so your system is due for its annual service" or "We have openings next week for {{service}}.")

ASK
"Would it be helpful to get that booked while I have you?"

IF INTERESTED
Offer two times, book and confirm.

IF NOT NOW
"Totally understand. Would you like a reminder in a few months, or would you prefer we don't call about this?"
Respect their choice and update the CRM.`,
  },
];

export const renderVoiceScripts = () => {
  const slug = 'ai-voice-agent-scripts';
  const r = meta(slug);
  const faqs = [
    { q: 'Can I use these scripts with Vapi, Retell AI or GoHighLevel Voice AI?', a: 'Yes. They are written as prompts with clear roles, goals and rules, which works on any modern voice AI platform. Replace the {{placeholders}} and connect calendar and CRM tools for booking.' },
    { q: 'What are the {{placeholders}}?', a: 'Variables for your business details or call data, such as business name, first name and available slots. Most platforms fill them automatically from your CRM or tools.' },
    { q: 'Should an AI agent say it is an AI?', a: 'We recommend answering honestly when asked, and some places require disclosure. Being transparent builds trust and avoids complaints.' },
    { q: 'Are outbound AI calls legal?', a: 'In the US, AI voices are treated as artificial voices under the TCPA, so calls to consumers generally need prior consent. Rules differ by country; get legal advice for your market.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="mx-auto mb-8 max-w-3xl rounded-2xl border border-secondary/[0.08] bg-white p-5 text-tagline-2 text-secondary/65">
          <strong class="text-secondary">How to use these:</strong> copy a script into your voice platform’s system prompt, replace the <code>{{placeholders}}</code>, connect your calendar and CRM tools, then test with at least twenty realistic calls before going live.
        </div>
        <h2 class="text-heading-6 sm:text-heading-5 mb-6 font-semibold tracking-tight text-secondary text-center">Four copy-ready voice agent scripts</h2>
        <div class="grid gap-5 lg:grid-cols-2">
          ${VOICE_SCRIPTS.map((s) => copyBlock(s.id, s.title, s.desc, s.text)).join('')}
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Script design', title: 'What makes a voice script <span class="text-gradient-warm">work</span>', lead: 'Voice agents fail for predictable reasons. These principles are built into every script above.' })}
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Short turns</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">One or two sentences, then a question. Long monologues are where callers hang up.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">One goal per call</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Book, confirm or qualify. Agents that try to do everything do nothing well.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Clear escape hatches</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Transfer or message rules for upset callers, emergencies and requests for a person.</p></div>
          <div data-reveal class="glass-card"><h3 class="text-heading-6 font-semibold text-secondary">Tools, not guesses</h3><p class="text-tagline-2 mt-2.5 text-secondary/60">Prices, policies and availability come from the knowledge base and calendar, never invention.</p></div>
        </div>
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/blog/vapi-ai-review/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>Vapi AI review</span></a>
          <a href="/blog/retell-ai-review/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>Retell AI review</span></a>
          <a href="/services/ai-voice-agents/" class="chip-link">${icon('mic', 'size-4 text-primary-600')}<span>AI voice agent service</span></a>
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Free AI Voice Agent Script Templates | Voxil AI',
    description: 'Free, copy-ready AI voice agent scripts: inbound AI receptionist, outbound speed-to-lead, appointment confirmation and reactivation, for Vapi, Retell AI and GoHighLevel Voice AI.',
    eyebrowText: 'Free templates',
    h1: 'AI Voice Agent <span class="text-gradient-warm">Script Templates</span>',
    lead: 'Copy-ready prompts for the four calls service businesses automate most. Built for Vapi, Retell AI and GoHighLevel Voice AI, with the rules that keep agents on track.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// Follow-up message templates
// ---------------------------------------------------------------------------
const FOLLOW_UPS = [
  { id: 'tpl-instant-sms', title: 'Instant reply (SMS)', desc: 'Sent within a minute of a form or ad lead.', text: `Hi {{first_name}}, it's {{agent_name}} at {{business_name}}. Thanks for asking about {{service}}! Quick question so we can help: {{qualifying_question}}` },
  { id: 'tpl-instant-email', title: 'Instant reply (email)', desc: 'Pairs with the SMS above.', text: `Subject: Your {{service}} request, {{first_name}}

Hi {{first_name}},

Thanks for reaching out to {{business_name}} about {{service}}. Here's what happens next:

1. We'll call or text you shortly to understand what you need.
2. If it's a good fit, we'll book a {{appointment_type}} at a time that suits you.

Prefer to pick a time now? Book here: {{booking_link}}

Talk soon,
{{agent_name}}
{{business_name}} · {{phone}}` },
  { id: 'tpl-nudge', title: 'Day 1 nudge (SMS)', desc: 'For leads who haven’t replied.', text: `Hi {{first_name}}, just checking you saw my message about {{service}}. Would {{slot_1}} or {{slot_2}} work for a quick chat?` },
  { id: 'tpl-yes-no', title: 'Day 10 yes/no (SMS)', desc: 'A simple question that revives quiet leads.', text: `Hi {{first_name}}, are you still looking for help with {{service}}? A quick yes or no is perfect.` },
  { id: 'tpl-no-show', title: 'No-show recovery (SMS)', desc: 'Sent 15 minutes after a missed appointment.', text: `Hi {{first_name}}, we missed you today at {{time}}. No worries! Would you like to rebook? Here are the next openings: {{booking_link}}` },
  { id: 'tpl-reminder', title: 'Appointment reminder (SMS)', desc: 'Sent the day before.', text: `Reminder: your appointment with {{business_name}} is tomorrow at {{time}}. Reply C to confirm or R to reschedule.` },
  { id: 'tpl-review', title: 'Review request (SMS)', desc: 'Sent after a completed job or visit.', text: `Thanks for choosing {{business_name}}, {{first_name}}! If we did a good job, would you mind leaving a quick review? It really helps: {{review_link}}` },
  { id: 'tpl-reactivation', title: 'Reactivation (SMS)', desc: 'For past customers or old leads who opted in.', text: `Hi {{first_name}}, it's {{business_name}}. It's been a while since your {{last_service}}. {{reason}}. Want me to send a few times this week?` },
];

export const renderFollowUpTemplates = () => {
  const slug = 'follow-up-templates';
  const r = meta(slug);
  const faqs = [
    { q: 'Can I use these templates in GoHighLevel?', a: 'Yes. Paste them into workflow SMS and email actions and replace the {{placeholders}} with GoHighLevel custom values or contact fields, such as {{contact.first_name}}.' },
    { q: 'How many follow-up messages should I send?', a: 'Plan six to ten touches over about two weeks across SMS, email and calls, then move unresponsive leads to slower nurture. Stop as soon as the lead replies or books.' },
    { q: 'Do I need consent to text leads?', a: 'Yes. Collect clear consent on your forms, identify your business in messages and honor STOP replies. In the US, business texting also requires A2P 10DLC registration.' },
    { q: 'Should follow-up messages be personalized?', a: 'Always use the lead’s name and the service they asked about. Specific, short messages get far more replies than generic templates.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="mx-auto mb-8 max-w-3xl rounded-2xl border border-secondary/[0.08] bg-white p-5 text-tagline-2 text-secondary/65">
          <strong class="text-secondary">Tip:</strong> keep SMS under about 160 characters where you can, include your business name, and add opt-out wording such as “Reply STOP to opt out” to your first message.
        </div>
        <h2 class="text-heading-6 sm:text-heading-5 mb-6 font-semibold tracking-tight text-secondary text-center">Eight copy-ready follow-up templates</h2>
        <div class="grid gap-5 lg:grid-cols-2">
          ${FOLLOW_UPS.map((s) => copyBlock(s.id, s.title, s.desc, s.text)).join('')}
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Put them to work', title: 'Where each template <span class="text-gradient-teal">fits</span>', lead: 'These templates map to the follow-up cadence in our GoHighLevel guide.' })}
        <div class="grid gap-4 md:grid-cols-3">
          ${linkCard({ href: '/blog/automate-lead-follow-up-gohighlevel/', title: 'The 14-day follow-up cadence', desc: 'When to send each message, on which channel, and the stop conditions you need.', icon: 'refresh', accent: '#0284c7', cta: 'Read the guide' })}
          ${linkCard({ href: '/blog/gohighlevel-missed-call-text-back/', title: 'Missed-call text-back', desc: 'The ten-minute GoHighLevel workflow that texts every missed caller.', icon: 'phone', accent: '#ff7a3d', cta: 'Read the guide' })}
          ${linkCard({ href: '/services/ai-follow-up-system/', title: 'Done-for-you follow-up', desc: 'We build, test and monitor the full system, with AI replies.', icon: 'bolt', accent: '#0f9f93', cta: 'See the service' })}
        </div>
      </div>
    </section>`;
  return shell({
    slug,
    title: 'Free Lead Follow-Up SMS & Email Templates | Voxil AI',
    description: 'Free follow-up message templates for service businesses: instant replies, nurture nudges, no-show recovery, reminders, review requests and reactivation, ready for GoHighLevel.',
    eyebrowText: 'Free templates',
    h1: 'Follow-Up Message <span class="text-gradient-teal">Templates</span>',
    lead: 'Copy-ready SMS and email templates for every stage of lead follow-up, from the first reply to the review request. Works in GoHighLevel or any CRM.',
    body,
    faqs,
  });
};

// ---------------------------------------------------------------------------
// AI Automation Glossary
// ---------------------------------------------------------------------------
const GLOSSARY = [
  ['A2P 10DLC', 'The US registration system for business text messages sent from standard 10-digit local numbers. Brands and messaging campaigns must be registered with carriers, or texts may be filtered or blocked.'],
  ['AEO (answer engine optimization)', 'Structuring content so AI assistants and search features can quote it as a direct answer, typically with clear question-and-answer sections, concise definitions and structured data.'],
  ['AI agent', 'Software that uses a language model to pursue a goal by taking actions, such as looking up records, booking appointments or updating a CRM, rather than only replying with text.'],
  ['AI calling bot', 'An AI voice agent that places or answers phone calls to qualify leads, book appointments, confirm visits or follow up, usually built on platforms like Vapi or Retell AI.'],
  ['AI receptionist', 'An AI voice agent that answers a business’s phone line, handles common questions, books appointments and routes urgent calls to staff, around the clock.'],
  ['AI SDR', 'An AI sales development representative: an agent that contacts and qualifies new leads and books meetings for human closers.'],
  ['BAA (Business Associate Agreement)', 'A contract required under HIPAA when a vendor handles protected health information on behalf of a US healthcare provider.'],
  ['Chatbot', 'Software that holds text conversations with customers on a website, SMS, WhatsApp or social media. Modern chatbots use language models and can connect to business systems.'],
  ['Conversation AI', 'GoHighLevel’s built-in AI for replying to messages across SMS, web chat, social DMs and WhatsApp, using a knowledge base and optional appointment booking.'],
  ['CRM (customer relationship management)', 'The system that stores contacts, conversations, deals and tasks, and tracks where each lead is in the sales process.'],
  ['GEO (generative engine optimization)', 'Improving how often and how accurately a brand is mentioned and cited in AI-generated answers from tools like ChatGPT, Perplexity and Google AI Overviews.'],
  ['GoHighLevel (GHL)', 'An all-in-one CRM and marketing platform with pipelines, two-way texting, calendars, funnels, email, reviews, workflows and AI, widely used by agencies and service businesses.'],
  ['Knowledge base', 'The documents, FAQs and policies an AI agent uses to answer questions accurately instead of guessing.'],
  ['Latency', 'The delay between a caller finishing speaking and a voice agent responding. Lower latency makes AI calls feel natural.'],
  ['Lead scoring', 'Assigning a score or tier to leads based on their answers and behavior so sales teams focus on the best opportunities first.'],
  ['LLM (large language model)', 'The AI model that understands and generates language, powering chatbots, voice agents and writing tools.'],
  ['Missed-call text-back', 'An automation that sends an SMS to a caller as soon as their call goes unanswered, so the conversation continues by text.'],
  ['n8n', 'A workflow automation platform that can be self-hosted, popular for complex integrations and AI agent workflows.'],
  ['Make.com', 'A visual automation platform for connecting apps and building multi-step scenarios with branching, data transformation and error handling.'],
  ['Pipeline', 'The ordered stages a lead or deal moves through, such as New, Contacted, Qualified, Booked and Won.'],
  ['Prompt', 'The instructions given to a language model that define an AI agent’s role, goals, rules and tone.'],
  ['Retell AI', 'A platform for building and deploying AI phone agents, known for conversation flows, natural turn-taking and post-call analysis.'],
  ['Snapshot', 'A reusable GoHighLevel template of a sub-account’s funnels, workflows, pipelines, calendars and settings.'],
  ['Speed to lead', 'The time between a lead’s inquiry and a business’s first meaningful response. Faster response sharply increases the chance of reaching and converting the lead.'],
  ['Sub-account', 'A separate client or location account inside a GoHighLevel agency account.'],
  ['TCPA', 'The US Telephone Consumer Protection Act, which regulates automated calls and texts. The FCC has ruled that AI-generated voices count as artificial voices under the TCPA.'],
  ['Tool calling', 'The ability of an AI agent to call external functions, such as checking a calendar or creating a CRM record, during a conversation.'],
  ['Vapi', 'A developer-focused platform for building AI voice agents with flexible choice of speech, language and voice providers.'],
  ['Webhook', 'An automatic message one system sends to another when something happens, such as a call ending or a form being submitted.'],
  ['Workflow', 'An automated sequence triggered by an event, such as a new lead, that performs actions like sending messages, updating records or waiting.'],
  ['Zapier', 'A no-code automation tool that connects thousands of apps with simple trigger-and-action workflows.'],
].sort((a, b) => a[0].localeCompare(b[0]));

const termId = (t) => t.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const renderGlossary = () => {
  const slug = 'ai-automation-glossary';
  const r = meta(slug);
  const path = resourceUrl(slug);
  const letters = [...new Set(GLOSSARY.map(([t]) => t[0].toUpperCase()))];
  const faqs = [
    { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot mainly holds conversations. An AI agent can also take actions, such as booking appointments or updating a CRM, to complete a goal. Many modern chatbots are built as agents.' },
    { q: 'What is an AI receptionist?', a: 'An AI voice agent that answers your business phone, handles common questions, books appointments and routes urgent calls to staff, 24 hours a day.' },
    { q: 'What does GHL stand for?', a: 'GHL is short for GoHighLevel, an all-in-one CRM and marketing automation platform used by agencies and service businesses.' },
    { q: 'What is speed to lead?', a: 'The time it takes a business to respond to a new inquiry. Research shows the chance of reaching and qualifying a lead drops sharply as response time grows.' },
  ];
  const body = `
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <nav aria-label="Glossary letters" class="mb-8 flex flex-wrap justify-center gap-2">
          ${letters.map((l) => `<a href="#letter-${l.toLowerCase()}" class="chip-link"><span>${l}</span></a>`).join('')}
        </nav>
        <div class="mx-auto max-w-4xl space-y-10">
          ${letters
            .map(
              (l) => `
          <section id="letter-${l.toLowerCase()}" class="scroll-mt-28">
            <h2 class="text-heading-5 font-semibold text-secondary">${l}</h2>
            <dl class="mt-4 divide-y divide-secondary/[0.08] rounded-2xl border border-secondary/[0.08] bg-white">
              ${GLOSSARY.filter(([t]) => t[0].toUpperCase() === l)
                .map(([t, def]) => `<div id="${termId(t)}" class="scroll-mt-28 p-5 md:p-6"><dt class="text-tagline-1 font-semibold text-secondary">${esc(t)}</dt><dd class="text-tagline-2 mt-1.5 text-secondary/65">${esc(def)}</dd></div>`)
                .join('\n              ')}
            </dl>
          </section>`
            )
            .join('')}
        </div>
      </div>
    </section>`;
  const definedTerms = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE.url}${path}#glossary`,
    name: 'AI Automation Glossary',
    url: `${SITE.url}${path}`,
    hasDefinedTerm: GLOSSARY.map(([t, def]) => ({ '@type': 'DefinedTerm', name: t, description: def, url: `${SITE.url}${path}#${termId(t)}` })),
  };
  return shell({
    slug,
    title: 'AI Automation Glossary: Key Terms Explained | Voxil AI',
    description: 'Plain-English glossary of AI automation terms: AI agents, voice agents, AI receptionists, GoHighLevel, CRM, A2P 10DLC, TCPA, AEO, GEO, Vapi, Retell AI, n8n and more.',
    eyebrowText: 'Free resource',
    h1: 'AI Automation <span class="text-gradient-teal">Glossary</span>',
    lead: `${GLOSSARY.length} terms you’ll meet when automating a service business with AI, explained in plain English by the team that builds these systems.`,
    body,
    faqs,
    extraSchema: [definedTerms],
  });
};
