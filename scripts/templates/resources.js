import { RESOURCES, SITE, TEAM, resourceUrl } from '../../content/site.js';
import { STATS, STAT_CATEGORIES } from '../../content/stats.js';
import { sourcesIn, statTile } from '../lib/content-helpers.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  crumbsNav,
  esc,
  eyebrow,
  faqBlock,
  faqSchema,
  hero,
  icon,
  linkCard,
  page,
  sectionHead,
  updatedLine,
  webPageSchema,
} from '../lib/ui.js';

export const crumbsFor = (name, slug) => [
  { name: 'Home', url: '/' },
  { name: 'Free Resources', url: '/resources/' },
  ...(slug ? [{ name, url: resourceUrl(slug) }] : []),
];

export const simpleHero = ({ crumbs, eyebrowText, accent, h1, lead }) => `
    <section class="page-hero">
      <span class="grid-field" aria-hidden="true"></span>
      <span class="orb -top-28 left-[12%] size-[400px] animate-drift" style="--orb: ${accent}; --orb-opacity: 0.28" aria-hidden="true"></span>
      <span class="orb top-1/4 -right-20 size-[360px] animate-drift-slow" style="--orb: #ff6b35; --orb-opacity: 0.18" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${crumbsNav(crumbs)}
        <div class="mx-auto mt-8 max-w-3xl text-center">
          ${eyebrow(eyebrowText, accent)}
          <h1 data-reveal class="text-heading-4 sm:text-heading-3 lg:text-heading-2 font-semibold tracking-tight text-secondary">${h1}</h1>
          <p data-reveal class="text-tagline-1 mx-auto mt-5 max-w-2xl text-secondary/60 md:text-lg">${lead}</p>
        </div>
      </div>
    </section>`;

const NEW_RESOURCES = ['ai-roi-calculator', 'ai-readiness-assessment', 'ai-voice-agent-scripts', 'follow-up-templates', 'ai-automation-glossary'];

// ---------------------------------------------------------------------------
// Hub
// ---------------------------------------------------------------------------
export const renderResourcesHub = (posts) => {
  const path = '/resources/';
  const crumbs = crumbsFor();
  const title = 'Free AI Automation Tools & Resources | Voxil AI';
  const description = 'Free AI automation tools: Lead Loss and ROI calculators, AI readiness assessment, voice agent scripts, follow-up templates, GHL checklist and glossary.';
  const body = `
    ${simpleHero({ crumbs, eyebrowText: 'Free resources', accent: '#2fc4b6', h1: 'Free tools to find your <span class="text-gradient-teal">biggest automation wins</span>', lead: 'Calculators, checklists and research we use with clients, free, no sign-up required.' })}
    <section class="section-soft section-pad">
      <div class="main-container relative z-10">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${RESOURCES.map((r) => linkCard({ href: resourceUrl(r.slug), title: r.name, desc: r.short, icon: r.icon, accent: r.accent, cta: 'Open', badge: r.slug === 'lead-loss-calculator' ? 'Most used' : NEW_RESOURCES.includes(r.slug) ? 'New' : undefined })).join('')}
          ${linkCard({ href: '/book-meeting.html', title: 'Free AI Automation Audit', desc: 'A 30-minute call where we review your lead flow and tell you what to automate first. No obligation.', icon: 'calendar', accent: '#ff6b35', cta: 'Book a call' })}
        </div>
      </div>
    </section>
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Guides & research', title: 'Latest from the <span class="text-gradient-teal">blog</span>', lead: 'Sourced statistics, honest comparisons and practical guides.' })}
        <div class="grid gap-4 md:grid-cols-3">
          ${posts.slice(0, 6).map((p) => linkCard({ href: `/blog/${p.slug}/`, title: p.title, desc: p.excerpt, icon: 'book', accent: '#38bdf8', cta: 'Read' })).join('')}
        </div>
        <div data-reveal class="mt-8 text-center"><a href="/blog/" class="cta cta-md cta-ghost">All articles${arrow()}</a></div>
      </div>
    </section>`;
  return page({
    path,
    title,
    description,
    body,
    schema: [
      webPageSchema({ path, title, description }),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Free AI automation resources',
        itemListElement: RESOURCES.map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: r.name, url: `${SITE.url}${resourceUrl(r.slug)}` })),
      },
      breadcrumbSchema(crumbs),
    ],
  });
};

// ---------------------------------------------------------------------------
// Lead Loss Calculator (behavior in src/js/common/lead-loss-calculator.js)
// ---------------------------------------------------------------------------
export const calcField = ({ id, label, hint, min, max, step, value, prefix = '', suffix = '' }) => `
              <div>
                <div class="flex items-baseline justify-between gap-3">
                  <label for="${id}" class="field-label mb-0">${label}</label>
                  <span class="text-tagline-2 font-semibold text-secondary">${prefix}<output data-out="${id}">${value}</output>${suffix}</span>
                </div>
                <input id="${id}" name="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" class="range-input mt-3" data-calc-input />
                <p class="text-tagline-3 mt-1.5 text-secondary/40">${hint}</p>
              </div>`;

export const renderCalculator = () => {
  const r = RESOURCES.find((x) => x.slug === 'lead-loss-calculator');
  const path = resourceUrl(r.slug);
  const crumbs = crumbsFor(r.name, r.slug);
  const title = 'Lead Loss Calculator: Cost of Missed Calls | Voxil AI';
  const description = 'Free lead loss calculator: estimate how much revenue your business loses each month to missed calls and unworked leads, and how much AI answering and follow-up could recover.';
  const faqs = [
    { q: 'How is lost revenue calculated?', a: 'Missed calls × share that are genuine new opportunities × your close rate × average customer value gives monthly revenue at risk. The recoverable figure applies the recovery rate you choose.' },
    { q: 'What recovery rate should I use?', a: 'Be conservative. Not every missed caller can be won back even with instant answering. We default to 60% for calls answered by AI instead of voicemail; adjust to your own experience.' },
    { q: 'Where do I find my missed-call numbers?', a: 'Most phone systems and VoIP providers report answered versus missed calls. If you use GoHighLevel, CallRail or RingCentral, check the call reporting dashboard.' },
    { q: 'Is my data stored?', a: 'No. The calculator runs entirely in your browser; nothing you enter is sent or saved.' },
  ];

  const body = `
    ${simpleHero({ crumbs, eyebrowText: 'Free tool', accent: r.accent, h1: 'Lead Loss <span class="text-gradient-warm">Calculator</span>', lead: 'Estimate how much revenue missed calls and unanswered leads cost you each month, and how much AI answering and follow-up could win back. Runs in your browser; nothing is saved.' })}

    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <form class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" data-lead-calc onsubmit="return false">
          <div class="glass-card space-y-7" style="--accent: ${r.accent}">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Your numbers</p>
            ${calcField({ id: 'calls', label: 'Inbound calls & leads per month', hint: 'All calls and web/ad leads combined.', min: 20, max: 3000, step: 10, value: 400 })}
            ${calcField({ id: 'missed', label: 'Share missed or answered too late', hint: 'Unanswered calls, voicemails and leads not contacted within an hour.', min: 0, max: 80, step: 1, value: 25, suffix: '%' })}
            ${calcField({ id: 'opportunity', label: 'Share that are real new-business opportunities', hint: 'Exclude spam, existing customers and wrong numbers.', min: 5, max: 100, step: 1, value: 45, suffix: '%' })}
            ${calcField({ id: 'close', label: 'Close rate on opportunities you do reach', hint: 'Share of answered opportunities that become customers.', min: 1, max: 90, step: 1, value: 30, suffix: '%' })}
            ${calcField({ id: 'value', label: 'Average customer or job value', hint: 'Average first-purchase value (or lifetime value if you prefer).', min: 50, max: 20000, step: 50, value: 450, prefix: '$' })}
            ${calcField({ id: 'recovery', label: 'Share you could recover with AI', hint: 'Conservative default. Not every lost lead can be won back.', min: 10, max: 100, step: 5, value: 60, suffix: '%' })}
          </div>

          <div class="space-y-4 lg:sticky lg:top-28 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Revenue at risk</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-warm" data-result="monthly">$0</p>
                <p class="text-tagline-2 text-secondary/55">per month · <span class="font-semibold text-secondary" data-result="yearly">$0</span> per year</p>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Recoverable with AI answering &amp; follow-up</p>
                <p class="stat-num text-heading-4 mt-3 text-gradient-teal" data-result="recoverable">$0</p>
                <p class="text-tagline-2 text-secondary/55">per month · <span class="font-semibold text-secondary" data-result="recoverableYearly">$0</span> per year</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="stat-card-ink"><p class="stat-num text-heading-5 text-secondary" data-result="lostLeads">0</p><p class="text-tagline-3 mt-1 text-secondary/50">missed opportunities / mo</p></div>
              <div class="stat-card-ink"><p class="stat-num text-heading-5 text-secondary" data-result="lostCustomers">0</p><p class="text-tagline-3 mt-1 text-secondary/50">lost customers / mo</p></div>
            </div>
            <div class="glass-card" style="--accent: #ff7a3d">
              <p class="text-tagline-2 font-semibold text-secondary">Want to recover it?</p>
              <p class="text-tagline-3 mt-1 text-secondary/55">We’ll map the fastest fix, usually AI answering, missed-call text-back or instant lead follow-up, on a free 30-minute call.</p>
              <a href="/book-meeting.html" class="cta cta-md cta-coral mt-4 w-full">Book a free strategy call${arrow()}</a>
            </div>
          </div>
        </form>
        <p class="text-tagline-3 mx-auto mt-8 max-w-3xl text-center text-secondary/35">Estimates only, based on the numbers you enter. Formula: calls × missed share × opportunity share × close rate × average value. Recoverable = revenue at risk × recovery share.</p>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Why it matters', title: 'Speed and coverage <span class="text-gradient-warm">decide who wins the job</span>', lead: 'Research on lead response shows how steeply the odds fall with delay.' })}
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">${['hbr-7x', 'lrm-100x', 'locals-62', 'hbr-23'].map((id) => statTile(id, '#ff7a3d')).join('')}</div>
        <div data-reveal class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/services/ai-phone-answering/" class="chip-link">${icon('phone', 'size-4 text-primary-600')}<span>AI Phone Answering</span></a>
          <a href="/services/ai-follow-up-system/" class="chip-link">${icon('refresh', 'size-4 text-primary-600')}<span>AI Follow-Up System</span></a>
          <a href="/blog/missed-call-statistics/" class="chip-link">${icon('book', 'size-4 text-primary-600')}<span>Missed call statistics</span></a>
        </div>
      </div>
    </section>

    ${faqBlock({ faqs, title: 'Calculator <span class="text-gradient-teal">FAQ</span>' })}`;

  return page({
    path,
    title,
    description,
    body,
    schema: [
      webPageSchema({ path, title, description }),
      breadcrumbSchema(crumbs),
      faqSchema(faqs),
    ],
  });
};

// ---------------------------------------------------------------------------
// AI Statistics 2026 hub
// ---------------------------------------------------------------------------
export const renderStatsHub = () => {
  const r = RESOURCES.find((x) => x.slug === 'ai-statistics-2026');
  const path = resourceUrl(r.slug);
  const crumbs = crumbsFor(r.name, r.slug);
  const title = 'AI Statistics 2026: Adoption, Agents & Service | Voxil AI';
  const description = 'A sourced collection of the most important AI statistics for 2026, adoption, investment, jobs, customer service, AI agents, speed-to-lead and small business, updated regularly.';
  const top = ['adoption-78', 'chatgpt-800m', 'us-invest-109', 'gartner-80-2029', 'gartner-33-agentic', 'hbr-7x', 'uscc-40', 'wef-net-78m', 'nber-14', 'gartner-40-cancel'];
  const count = Object.keys(STATS).length;

  const faqs = [
    { q: 'What percentage of companies use AI in 2026?', a: 'The most recent McKinsey State of AI survey found 78% of organizations use AI in at least one business function, and 71% regularly use generative AI.' },
    { q: 'How big is the AI market?', a: 'Estimates vary by definition. Grand View Research estimated the global AI market at about $279 billion in 2024, growing roughly 36% a year to 2030. Stanford’s AI Index reported $109.1 billion of U.S. private AI investment in 2024.' },
    { q: 'Will AI replace customer-service jobs?', a: 'AI is changing service work. Gartner predicts agentic AI will resolve 80% of common service issues autonomously by 2029, while research shows AI assistance raises agent productivity. The WEF expects net job growth globally by 2030, with significant role shifts.' },
    { q: 'How often is this page updated?', a: `We review it regularly and note the last update date at the top. Last updated ${SITE.updated}.` },
    { q: 'Can I cite these statistics?', a: 'Yes, please cite the original source listed under each statistic, and feel free to link to this page as a collection.' },
  ];

  const categorySections = STAT_CATEGORIES.map((c) => {
    const ids = Object.entries(STATS).filter(([, s]) => s.cat === c.key).map(([id]) => id);
    return `
        <div class="scroll-mt-28" id="${c.key}">
          <div data-reveal class="mb-5 flex items-center gap-3">
            <span class="icon-tile" style="--accent: ${c.accent}">${icon(c.icon)}</span>
            <h2 class="text-heading-6 sm:text-heading-5 font-semibold text-secondary">${c.title}</h2>
            <span class="pill">${ids.length}</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${ids.map((id) => statTile(id, c.accent)).join('')}</div>
        </div>`;
  }).join('');

  const citeText = `Voxil AI. “AI Statistics 2026.” ${SITE.url}${path} (updated ${SITE.updated}).`;
  const allSources = sourcesIn(Object.keys(STATS).map((id) => `data-stat="${id}"`).join(' '));

  const body = `
    ${hero({
      crumbs,
      eyebrowText: `Research · Updated ${SITE.updated}`,
      accent: r.accent,
      h1: 'AI statistics 2026: <span class="text-gradient-teal">the numbers that matter</span>',
      lead: `${count} sourced statistics on AI adoption, investment, jobs, customer service, AI agents, speed-to-lead and small business, each with its original source and year.`,
      answer: 'In 2026, AI is mainstream: <strong>78% of organizations use AI</strong> in at least one function (McKinsey), <strong>ChatGPT reached ~800M weekly users</strong> (OpenAI), and Gartner predicts agentic AI will resolve <strong>80% of common customer-service issues by 2029</strong>. Yet many pilots still fail to show ROI, focused, integrated deployments win.',
      answerLabel: 'Summary',
      facts: [
        { label: 'Statistics', value: String(count) },
        { label: 'Sources', value: String(allSources.length) },
        { label: 'Categories', value: String(STAT_CATEGORIES.length) },
        { label: 'Last updated', value: updatedLine() },
      ],
      primary: 'Talk to us about AI',
      secondary: { label: 'Jump to top 10', href: '#top-10' },
    })}

    <section class="section-soft section-pad" id="top-10">
      <span class="top-glow" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Top 10', title: 'The 10 AI statistics <span class="text-gradient-teal">to know in 2026</span>' })}
        <ol class="grid gap-3 md:grid-cols-2">
          ${top
            .map((id, i) => {
              const s = STATS[id];
              return `<li data-reveal class="flex gap-4 rounded-2xl border border-secondary/[0.09] bg-secondary/[0.03] p-5"><span class="step-num size-10 shrink-0 text-tagline-2">${i + 1}</span><div><p class="text-tagline-1 text-secondary/80"><strong class="text-secondary">${s.value}</strong> ${s.label}</p><p class="text-tagline-3 mt-1.5 text-secondary/40">${esc(s.src.name)}, ${s.src.year}</p></div></li>`;
            })
            .join('')}
        </ol>
      </div>
    </section>

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        <div data-reveal class="mb-12 flex flex-wrap gap-2">
          ${STAT_CATEGORIES.map((c) => `<a href="#${c.key}" class="chip-link">${icon(c.icon, 'size-4 text-primary-600')}<span>${c.title}</span></a>`).join('')}
        </div>
        <div class="space-y-14">${categorySections}</div>
      </div>
    </section>

    <section class="section-soft section-pad-sm section-seam">
      <div class="main-container relative z-10 grid gap-6 lg:grid-cols-2">
        <div data-reveal class="glass-card">
          <h2 class="text-heading-6 font-semibold text-secondary">Methodology</h2>
          <p class="text-tagline-2 mt-3 text-secondary/60">We include only figures published by the named organization, quote them in the source’s own framing, and label forecasts as predictions. Where definitions differ between sources (e.g. market size), we say so. Figures are reviewed on a regular schedule; older but still widely referenced studies are marked with their year so you can judge recency.</p>
        </div>
        <div data-reveal class="glass-card">
          <h2 class="text-heading-6 font-semibold text-secondary">Cite this page</h2>
          <p class="text-tagline-3 mt-3 rounded-xl border border-secondary/[0.08] bg-white/60 p-4 font-mono text-secondary/70">${esc(citeText)}</p>
          <p class="text-tagline-3 mt-3 text-secondary/45">Please also cite the original source for any individual statistic.</p>
        </div>
      </div>
    </section>

    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Deep dives', title: 'Statistics by <span class="text-gradient-teal">topic</span>' })}
        <div class="grid gap-4 md:grid-cols-3">
          ${[
            ['/blog/ai-voice-agent-statistics/', 'AI voice agent statistics', 'mic'],
            ['/blog/ai-chatbot-statistics/', 'AI chatbot statistics', 'chat'],
            ['/blog/ai-customer-service-statistics/', 'AI customer service statistics', 'bubble'],
            ['/blog/speed-to-lead-statistics/', 'Speed-to-lead statistics', 'bolt'],
            ['/blog/missed-call-statistics/', 'Missed call statistics', 'phone'],
            ['/blog/ai-small-business-statistics/', 'AI small business statistics', 'building'],
          ]
            .map(([href, t, ic]) => linkCard({ href, title: t, desc: 'Sourced figures with context on what they mean for your business.', icon: ic, accent: '#2fc4b6', cta: 'Read' }))
            .join('')}
        </div>
      </div>
    </section>

    ${faqBlock({ faqs, title: 'AI statistics <span class="text-gradient-teal">FAQ</span>' })}`;

  return page({
    path,
    title,
    description,
    body,
    schema: [
      webPageSchema({ path, title, description }),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${SITE.url}${path}#article`,
        headline: 'AI Statistics 2026: The Numbers That Matter',
        description,
        image: SITE.ogImage,
        datePublished: '2026-01-06',
        dateModified: SITE.updated,
        author: { '@type': 'Person', name: TEAM['abdul-moeez'].name, jobTitle: TEAM['abdul-moeez'].role, worksFor: { '@id': ORG_ID } },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: `${SITE.url}${path}`,
        citation: allSources.map((s) => ({ '@type': 'CreativeWork', name: s.name, ...(s.url ? { url: s.url } : {}) })),
      },
      breadcrumbSchema(crumbs),
      faqSchema(faqs),
    ],
  });
};

// ---------------------------------------------------------------------------
// GHL Setup Checklist (behavior in src/js/common/checklist.js)
// ---------------------------------------------------------------------------
const CHECKLIST = [
  { title: 'Account foundations', items: ['Business profile: legal name, address, time zone, logo', 'Users added with correct roles and permissions', 'Two-factor authentication enabled for all users', 'Custom domain / white-label domain connected', 'Business hours and holidays configured'] },
  { title: 'Email deliverability', items: ['Dedicated sending domain (subdomain) set up', 'SPF, DKIM and DMARC records verified', 'Reply-to and from addresses configured', 'Unsubscribe link and physical address in templates', 'Old or purchased lists removed before first send'] },
  { title: 'Phone & SMS', items: ['Phone numbers purchased or ported', 'A2P 10DLC brand and campaign registered (US)', 'Call forwarding and voicemail configured', 'Missed-call text-back workflow enabled', 'Call recording disclosure configured where required', 'Opt-out (STOP) handling tested'] },
  { title: 'Pipelines & data', items: ['Pipelines match your real sales stages', 'Stage entry/exit criteria documented', 'Custom fields created with clear naming', 'Tags naming convention agreed', 'Contacts imported, deduplicated and tagged'] },
  { title: 'Calendars & booking', items: ['Calendars per service or team created', 'Availability, buffers and minimum notice set', 'Confirmation and reminder messages configured', 'Round-robin or assignment rules tested', 'Calendar connected to Google/Outlook'] },
  { title: 'Forms, funnels & sites', items: ['Lead forms mapped to fields and pipelines', 'Thank-you pages and conversion tracking', 'Tracking pixels / GA4 installed', 'Mobile layout checked', 'Privacy policy and consent checkboxes added'] },
  { title: 'Core automations', items: ['Speed-to-lead: instant SMS + email + task', 'New lead internal notification', 'Appointment confirmation and reminders', 'No-show follow-up', 'Quote / proposal follow-up sequence', 'Review request after completed job or visit', 'Database reactivation campaign drafted'] },
  { title: 'AI features', items: ['Conversation AI trained on services, FAQs and policies', 'Single clear booking goal configured', 'Hand-off to human rules defined', 'Voice AI greeting, knowledge and transfer set up', 'Test conversations on every channel'] },
  { title: 'Reputation & reporting', items: ['Google Business Profile connected', 'Review response process defined', 'Dashboard with leads, bookings and revenue', 'Attribution sources set on forms and calls', 'Weekly report scheduled'] },
  { title: 'Launch & training', items: ['End-to-end test: form → pipeline → automation → booking', 'Team trained on conversations inbox and mobile app', 'Documentation / SOPs saved', 'Backup snapshot created', '30-day review booked'] },
];

export const renderChecklist = () => {
  const r = RESOURCES.find((x) => x.slug === 'ghl-setup-checklist');
  const path = resourceUrl(r.slug);
  const crumbs = crumbsFor(r.name, r.slug);
  const total = CHECKLIST.reduce((n, s) => n + s.items.length, 0);
  const title = `GoHighLevel Setup Checklist: ${total} Steps | Voxil AI`;
  const description = `The interactive ${total}-step GoHighLevel setup checklist we use for every client launch, deliverability, A2P, pipelines, calendars, automations, AI and reporting.`;
  const faqs = [
    { q: 'How long does it take to set up GoHighLevel properly?', a: 'Typically one to three weeks for a complete setup, depending on A2P registration approval times, domain changes and the number of automations.' },
    { q: 'What is the most commonly missed GHL setup step?', a: 'Email and SMS compliance: authenticated sending domains and A2P 10DLC registration. Skipping them leads to spam-foldered emails and filtered texts.' },
    { q: 'Is my checklist progress saved?', a: 'Your ticks are saved in your own browser only, so you can come back later on the same device. Nothing is sent to us.' },
  ];
  const body = `
    ${simpleHero({ crumbs, eyebrowText: 'Free checklist', accent: r.accent, h1: `GoHighLevel setup <span class="text-gradient-sky">checklist</span>`, lead: `The ${total}-step checklist we use to launch every GoHighLevel account. Tick items as you go, progress is saved in your browser.` })}
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10" data-checklist="ghl-setup-v1">
        <div class="sticky top-20 z-20 mb-8 rounded-2xl border border-secondary/[0.09] bg-white/90 p-5 backdrop-blur-xl md:top-24">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <p class="text-tagline-2 font-semibold text-secondary"><span data-checklist-count>0</span> of ${total} complete</p>
            <div class="flex gap-2">
              <button type="button" class="cta cta-sm cta-ghost" data-checklist-print>Print</button>
              <button type="button" class="cta cta-sm cta-ghost" data-checklist-reset>Reset</button>
            </div>
          </div>
          <div class="progress-track mt-3"><div class="progress-bar" style="width: 0%" data-checklist-bar></div></div>
        </div>
        <div class="grid gap-5 lg:grid-cols-2">
          ${CHECKLIST.map(
            (s, si) => `
          <fieldset data-reveal class="glass-card" style="--accent: ${r.accent}">
            <legend class="sr-only">${s.title}</legend>
            <div class="mb-3 flex items-center gap-3">
              <span class="step-num size-10 text-tagline-2">${String(si + 1).padStart(2, '0')}</span>
              <h2 class="text-heading-6 font-semibold text-secondary">${s.title}</h2>
            </div>
            ${s.items.map((it, ii) => `<label class="check-row"><input type="checkbox" data-check-id="${si}-${ii}" /><span class="text-tagline-2 text-secondary/75">${it}</span></label>`).join('')}
          </fieldset>`
          ).join('')}
        </div>
        <div data-reveal class="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-secondary/[0.09] bg-secondary/[0.03] p-6 text-center sm:flex-row sm:text-left md:p-8">
          <div>
            <p class="text-heading-6 font-semibold text-secondary">Rather have it done for you?</p>
            <p class="text-tagline-2 mt-1 text-secondary/55">Our GHL experts complete every item on this list in one to three weeks.</p>
          </div>
          <a href="/services/ghl-setup/" class="cta cta-md cta-teal shrink-0">See GHL setup service${arrow()}</a>
        </div>
      </div>
    </section>
    ${faqBlock({ faqs, title: 'Checklist <span class="text-gradient-teal">FAQ</span>' })}`;

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to set up a GoHighLevel account',
    description,
    step: CHECKLIST.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.items.join('; ') })),
  };
  return page({ path, title, description, body, schema: [webPageSchema({ path, title, description }), howTo, breadcrumbSchema(crumbs), faqSchema(faqs)] });
};

// ---------------------------------------------------------------------------
// Media kit
// ---------------------------------------------------------------------------
export const renderMediaKit = () => {
  const r = RESOURCES.find((x) => x.slug === 'media-kit');
  const path = resourceUrl(r.slug);
  const crumbs = crumbsFor(r.name, r.slug);
  const title = 'Voxil AI Media Kit: Logos, Colors & Boilerplate';
  const description = 'Voxil AI media kit for press and partners: company boilerplate, logo files, brand colors, typography and press contact.';
  const colors = [
    ['Teal 500', '#0f9f93'],
    ['Teal 400', '#2fc4b6'],
    ['Coral 500', '#ff6b35'],
    ['Sky 400', '#38bdf8'],
    ['Ink 950', '#05080f'],
    ['Ink 850', '#0c1220'],
  ];
  const body = `
    ${simpleHero({ crumbs, eyebrowText: 'Press & partners', accent: r.accent, h1: 'Voxil AI <span class="text-gradient-teal">media kit</span>', lead: 'Everything you need to write about or partner with Voxil AI: boilerplate, logos, colors and contacts.' })}
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10 grid gap-5 lg:grid-cols-2">
        <div data-reveal class="glass-card">
          <h2 class="text-heading-6 font-semibold text-secondary">Boilerplate, short</h2>
          <p class="text-tagline-2 mt-3 text-secondary/70">Voxil AI is an AI automation agency that builds custom AI voice agents, chatbots and workflow automation for service businesses.</p>
          <h2 class="text-heading-6 mt-7 font-semibold text-secondary">Boilerplate, long</h2>
          <p class="text-tagline-2 mt-3 text-secondary/70">Voxil AI designs and builds production AI systems for service businesses and agencies, AI receptionists and voice agents, website and WhatsApp chatbots, GoHighLevel and CRM automation, and custom AI software. The remote-first team works with clients across the United States, United Kingdom, Europe, Canada, Australia, the UAE and Pakistan, delivering fixed-scope projects that integrate with the tools clients already use. Clients own the code, prompts and configuration.</p>
        </div>
        <div class="space-y-5">
          <div data-reveal class="glass-card">
            <h2 class="text-heading-6 font-semibold text-secondary">Logo</h2>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <div class="flex h-28 items-center justify-center rounded-2xl border border-stroke-2 bg-white px-6"><img src="/images/shared/main-logo.svg" alt="Voxil AI logo" class="h-20 w-auto" /></div>
              <div class="flex h-28 items-center justify-center rounded-2xl border border-stroke-2 bg-background-1 px-6"><img src="/images/shared/main-logo.svg" alt="Voxil AI logo on light gray" class="h-20 w-auto" /></div>
            </div>
            <div class="mt-5 flex flex-wrap gap-2">
              <a href="/images/shared/main-logo.svg" download class="cta cta-sm cta-ghost">${icon('photo', 'size-4')}Logo (SVG)</a>
            </div>
            <p class="text-tagline-3 mt-4 text-secondary/45">Use the logo on white or light backgrounds. Please don’t recolor, stretch or add effects to it.</p>
          </div>
          <div data-reveal class="glass-card">
            <h2 class="text-heading-6 font-semibold text-secondary">Brand colors</h2>
            <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              ${colors.map(([n, hex]) => `<div class="overflow-hidden rounded-xl border border-secondary/10"><div class="h-14" style="background:${hex}"></div><div class="bg-secondary/[0.03] px-3 py-2"><p class="text-tagline-3 font-semibold text-secondary">${n}</p><p class="text-tagline-3 font-mono text-secondary/50">${hex}</p></div></div>`).join('')}
            </div>
            <p class="text-tagline-3 mt-4 text-secondary/45">Typeface: <span class="text-secondary/75">Sora</span> (Google Fonts).</p>
          </div>
          <div data-reveal class="glass-card">
            <h2 class="text-heading-6 font-semibold text-secondary">Press &amp; partnership contact</h2>
            <a href="mailto:${SITE.email}" class="link-arrow mt-3 text-primary-600">${SITE.email}${arrow()}</a>
            <div class="mt-4 flex flex-wrap gap-2">${SITE.sameAs.map((u) => `<a href="${u}" target="_blank" rel="noopener" class="chip-link"><span>${new URL(u).hostname.replace('www.', '')}</span></a>`).join('')}</div>
          </div>
        </div>
      </div>
    </section>`;
  return page({ path, title, description, body, schema: [webPageSchema({ path, title, description }), breadcrumbSchema(crumbs)] });
};
