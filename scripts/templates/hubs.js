import baseLocations from '../../content/locations.js';
import moreIntlLocations from '../../content/locations-more-intl.js';
import moreLocations from '../../content/locations-more.js';
import { ALL_SERVICES, EXTRA_SERVICES, INDUSTRIES, LOCATION_GROUPS, SERVICE_GROUPS, SITE, industryUrl, locationUrl, serviceUrl } from '../../content/site.js';
import { arrow, breadcrumbSchema, checkList, crumbsNav, eyebrow, faqBlock, faqSchema, icon, linkCard, page, sectionHead, webPageSchema } from '../lib/ui.js';

const hubHero = ({ crumbs, eyebrowText, h1, lead, chips = '' }) => `
    <section class="page-hero">
      <span class="grid-field" aria-hidden="true"></span>
      <span class="orb -top-28 left-[12%] size-[400px] animate-drift" style="--orb: #0f9f93; --orb-opacity: 0.3" aria-hidden="true"></span>
      <span class="orb top-1/4 -right-20 size-[360px] animate-drift-slow" style="--orb: #ff6b35; --orb-opacity: 0.2" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${crumbsNav(crumbs)}
        <div class="mx-auto mt-8 max-w-3xl text-center">
          ${eyebrow(eyebrowText)}
          <h1 data-reveal class="text-heading-4 sm:text-heading-3 lg:text-heading-2 font-semibold tracking-tight text-secondary">${h1}</h1>
          <p data-reveal class="text-tagline-1 mx-auto mt-5 max-w-2xl text-secondary/60 md:text-lg">${lead}</p>
          ${chips ? `<div data-reveal class="mt-8 flex flex-wrap justify-center gap-2">${chips}</div>` : ''}
        </div>
      </div>
    </section>`;


// Short explanatory copy for hub pages, so each hub says what it covers
// instead of being a grid of links only.
const hubIntro = (title, paras, points) => `
    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <h2 data-reveal class="text-heading-5 sm:text-heading-4 font-semibold tracking-tight text-secondary">${title}</h2>
          ${paras.map((p) => `<p data-reveal class="text-tagline-1 mt-4 text-secondary/70">${p}</p>`).join('')}
        </div>
        <div data-reveal class="glass-card glass-card-topline self-start" style="--accent: #0f9f93">${checkList(points, '#0f9f93')}</div>
      </div>
    </section>`;

const itemList = (name, items) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: `${SITE.url}${it.url}` })),
});

// ---------------------------------------------------------------------------
export const renderServicesHub = () => {
  const path = '/services/';
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: path },
  ];
  const title = 'AI Automation Services: Voice, Chat & GHL | Voxil AI';
  const description = `Explore ${ALL_SERVICES.length} AI automation services, AI voice agents and receptionists, chatbots and WhatsApp bots, GoHighLevel setup and automation, CRM, funnels, websites and custom integrations.`;
  const faqs = [
    { q: 'Which service should I start with?', a: 'Start where revenue leaks most. For most service businesses that’s answering calls (AI receptionist) or responding to leads instantly (AI follow-up or SDR). We’ll recommend one on a free 30-minute call.' },
    { q: 'Can you combine several services?', a: 'Yes, most clients connect two or three: for example, an AI receptionist that books into GoHighLevel, with automated follow-up and review requests.' },
    { q: 'How is pricing structured?', a: 'Fixed-price projects scoped upfront, plus any usage costs (AI, telephony, messaging) passed through at cost. Optional monthly support is available.' },
  ];
  const body = `
    ${hubHero({
      crumbs,
      eyebrowText: `${ALL_SERVICES.length} services`,
      h1: 'AI automation services that <span class="text-gradient-teal">do real work</span>',
      lead: 'Voice agents, chatbots, GoHighLevel, CRM, funnels and integrations, built as one connected system around the tools you already use.',
      chips: SERVICE_GROUPS.map((g) => `<a href="#${g.key}" class="chip-link">${icon(g.icon, 'size-4 text-primary-600')}<span>${g.title}</span></a>`).join(''),
    })}
    ${SERVICE_GROUPS.map(
      (g, gi) => `
    <section class="${gi % 2 ? 'section-base' : 'section-soft'} section-pad-sm section-seam scroll-mt-20" id="${g.key}">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: g.title, dot: g.accent, title: g.title, lead: { voice: 'Phone agents that answer, qualify, book and call back, built on Vapi and Retell AI.', automation: 'Chatbots, WhatsApp, lead generation and the automation that keeps every lead moving.', ghl: 'Everything GoHighLevel, from first setup to white-label SaaS.', crm: 'The systems underneath: CRM, integrations, funnels and websites.' }[g.key] })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${[...g.services, ...EXTRA_SERVICES.filter((e) => e.group === g.key)].map((s) => linkCard({ href: serviceUrl(s.slug), title: s.name, desc: s.short, icon: s.icon, accent: g.accent })).join('')}
        </div>
      </div>
    </section>`
    ).join('')}
    ${hubIntro('How our AI automation services <span class="text-gradient-teal">fit together</span>', [
      'Every service on this page solves one part of the same problem: customers reach out, and the business needs to answer, qualify, book and follow up without losing anyone along the way. Voice agents and AI receptionists cover the phone. Chatbots and WhatsApp automation cover messaging. GoHighLevel and CRM automation keep every lead and appointment in one pipeline, and funnels and websites bring new leads in.',
      'Most clients start with the service that fixes their biggest leak, usually missed calls or slow lead response, then connect the rest over time. Everything is built inside the tools you already use, priced as a fixed project, and owned by you when it goes live.',
    ], ['Fixed-price projects with a written scope', 'Built on your existing CRM, calendar and phone system', 'Supervised pilot before full launch', 'You own the code, prompts and configuration'])}
    ${faqBlock({ faqs, title: 'Services <span class="text-gradient-teal">FAQ</span>' })}`;
  return page({
    path,
    title,
    description,
    body,
    schema: [webPageSchema({ path, title, description }), itemList('AI automation services', ALL_SERVICES.map((s) => ({ name: s.name, url: serviceUrl(s.slug) }))), breadcrumbSchema(crumbs), faqSchema(faqs)],
  });
};

// ---------------------------------------------------------------------------
const locationContent = { ...baseLocations, ...moreLocations, ...moreIntlLocations };

export const renderLocationsHub = () => {
  const path = '/locations/';
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: path },
  ];
  const all = LOCATION_GROUPS.flatMap((g) => g.locations);
  const title = 'AI Automation Agency Locations: US, UK, EU & AU | Voxil AI';
  const description = `Voxil AI serves businesses in ${all.length} markets across the US, UK, Europe, Canada, Australia, New Zealand, the UAE and Pakistan, with local languages and compliance.`;
  const faqs = [
    { q: 'Do you work with businesses outside these locations?', a: 'Yes. We’re remote-first and work with businesses anywhere; these pages cover markets where we have the most clients and local context.' },
    { q: 'Do you have local offices?', a: 'No. Voxil AI is remote-first. We schedule working sessions in your time zone and deliver through video calls, shared workspaces and async updates.' },
    { q: 'Can your AI agents speak local languages?', a: 'Yes, including Spanish, French, Arabic, Urdu and many more, with local voices and spellings where relevant.' },
  ];
  const body = `
    ${hubHero({ crumbs, eyebrowText: `${all.length} markets`, h1: 'AI automation for businesses <span class="text-gradient-teal">wherever you are</span>', lead: 'Remote-first, working in your time zone, with local context on markets, languages and compliance rules for every region we serve.' })}
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        ${LOCATION_GROUPS.map(
          (g) => `
        <div data-reveal class="glass-card glass-card-topline" style="--accent: ${!g.key.startsWith('us-') ? '#38bdf8' : '#2fc4b6'}">
          <div class="flex items-center gap-3">
            <span class="icon-tile" style="--accent: ${!g.key.startsWith('us-') ? '#38bdf8' : '#2fc4b6'}">${icon(!g.key.startsWith('us-') ? 'globe' : 'pin')}</span>
            <h2 class="text-heading-6 font-semibold text-secondary">${g.title}</h2>
          </div>
          <p class="text-tagline-2 mt-3 text-secondary/65">${{
            'us-east': 'New York and Boston to Miami and Tampa: finance, healthcare, legal and real-estate teams in Eastern Time.',
            'us-central': 'Chicago, the Twin Cities, Detroit, Kansas City and Texas: operations-heavy businesses and fast-growing metros.',
            'us-west': 'California, the Pacific Northwest, Nevada, Utah and Colorado: tech, aesthetics, clinics and service businesses.',
            'uk-europe': 'UK GDPR, PECR, the EU GDPR and the EU AI Act built in, with agents in English, German, French, Spanish, Dutch and more.',
            canada: 'English and French service across Canada, designed around PIPEDA, provincial privacy laws, Quebec’s Law 25 and CASL.',
            'australia-nz': 'Australian and Kiwi voices, with the Privacy Act, Spam Act, Do Not Call Register and New Zealand’s Privacy Act 2020.',
            international: 'The Gulf and Pakistan, with WhatsApp-first agents in Arabic, Urdu, Hindi and English.',
          }[g.key] ?? ''}</p>
          <ul class="mt-5 grid grid-cols-2 gap-2">
            ${g.locations.map((l) => `<li><a href="${locationUrl(l.slug)}" class="group block rounded-xl border border-secondary/[0.07] bg-secondary/[0.03] px-4 py-3 transition hover:border-secondary/20 hover:bg-secondary/[0.07]"><span class="block text-tagline-2 font-medium text-secondary/85 group-hover:text-secondary">${l.name}</span><span class="block text-tagline-3 text-secondary/50">${locationContent[l.slug].tzShort} · ${locationContent[l.slug].languages}</span></a></li>`).join('')}
          </ul>
        </div>`
        ).join('')}
      </div>
    </section>
    ${hubIntro('One remote team, <span class="text-gradient-teal">local knowledge for every market</span>', [
      'Voxil AI is a remote-first agency, so we can serve businesses in the United States, the United Kingdom, Europe, Canada, Australia, the UAE and Pakistan with the same senior team. Each location page explains the local market, the industries we work with most there, the languages our AI agents speak for that audience, and the privacy and calling rules that shape how we build.',
      'Compliance differs by region. US outbound calling follows the TCPA, the UK uses UK GDPR and PECR, the EU adds GDPR and the AI Act, Canada has PIPEDA and CASL, and Australia has the Privacy Act and Spam Act. We design consent, disclosures and data handling for your market before anything goes live.',
    ], ['Working sessions scheduled in your time zone', 'Voice agents in English, Spanish, French, German, Dutch, Arabic, Urdu and more', 'Consent and disclosure rules built in per region', 'Live in two to four weeks for most builds'])}
    ${faqBlock({ faqs, title: 'Locations <span class="text-gradient-teal">FAQ</span>' })}`;
  return page({
    path,
    title,
    description,
    body,
    schema: [webPageSchema({ path, title, description }), itemList('Locations served', all.map((l) => ({ name: l.name, url: locationUrl(l.slug) }))), breadcrumbSchema(crumbs), faqSchema(faqs)],
  });
};

// ---------------------------------------------------------------------------
export const renderIndustriesHub = () => {
  const path = '/industries/';
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Industries', url: path },
  ];
  const title = 'AI Automation by Industry | Voxil AI';
  const description = 'AI automation built for real estate, gyms, insurance, law firms, home services, clinics, med spas, roofing, solar, salons, HVAC and chiropractic businesses.';
  const blurbs = {
    'real-estate': 'Instant lead response, AI ISA calls and showing booking.',
    'fitness-gyms': 'Trial booking, no-show recovery and member retention.',
    insurance: 'Quote intake, follow-up and renewal automation.',
    'law-firms': '24/7 AI intake, screening and consultation booking.',
    'home-services': 'Answer every call, book jobs, chase every quote.',
    'medical-clinics': 'AI reception, scheduling and reminders, HIPAA-aware.',
    'med-spas': 'DM replies, consult booking with deposits, rebooking.',
    roofing: 'Storm-lead response, inspection booking and follow-up.',
    solar: 'AI appointment setting and long-cycle nurture.',
    'salons-beauty': 'Phone and DM booking, reminders and gap filling.',
    hvac: '24/7 answering, emergency triage and maintenance plans.',
    chiropractic: 'New-patient booking and care-plan follow-up.',
  };
  const body = `
    ${hubHero({ crumbs, eyebrowText: `${INDUSTRIES.length} industries`, h1: 'AI automation built for <span class="text-gradient-teal">your industry</span>', lead: 'Every industry loses revenue in different places. These pages show where, and the systems we build to fix it.' })}
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <h2 class="text-heading-6 sm:text-heading-5 mb-6 font-semibold tracking-tight text-secondary">Choose your industry</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${INDUSTRIES.map((i) => linkCard({ href: industryUrl(i.slug), title: i.name, desc: blurbs[i.slug], icon: i.icon, accent: i.accent, cta: 'Explore' })).join('')}
        </div>
      </div>
    </section>
    ${hubIntro('Why industry matters in <span class="text-gradient-teal">AI automation</span>', [
      'A med spa loses revenue to slow Instagram replies. A roofing company loses it when storm-season calls go unanswered. A law firm loses it when a prospect calls three firms and reaches voicemail twice. The technology is similar, but the leak, the conversation and the systems it connects to are different in every industry.',
      'Each industry page shows where businesses in that field typically lose leads and time, the AI systems we build to fix it, an example workflow, and the tools we integrate with, from Jobber and ServiceTitan to Clio and practice management systems.',
    ], ['Conversation design based on real call and chat patterns', 'Integrations with industry software where an API exists', 'Guardrails for regulated topics like medical or legal advice', 'Proven workflows adapted to your business'])}`;
  return page({
    path,
    title,
    description,
    body,
    schema: [webPageSchema({ path, title, description }), itemList('Industries served', INDUSTRIES.map((i) => ({ name: i.name, url: industryUrl(i.slug) }))), breadcrumbSchema(crumbs)],
  });
};

