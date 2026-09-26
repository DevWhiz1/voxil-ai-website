import { ALL_SERVICES, EXTRA_SERVICES, INDUSTRIES, LOCATION_GROUPS, SERVICE_GROUPS, SITE, industryUrl, locationUrl, serviceUrl } from '../../content/site.js';
import { arrow, breadcrumbSchema, crumbsNav, eyebrow, faqBlock, faqSchema, icon, linkCard, page, sectionHead, webPageSchema } from '../lib/ui.js';

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
  const title = 'AI Automation Services: Voice Agents, Chatbots, GoHighLevel & CRM | Voxil AI';
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
export const renderLocationsHub = () => {
  const path = '/locations/';
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: path },
  ];
  const all = LOCATION_GROUPS.flatMap((g) => g.locations);
  const title = 'Locations We Serve: AI Automation Agency for the US, UK, UAE, Canada & Australia | Voxil AI';
  const description = `Voxil AI serves businesses in ${all.length} markets, New York, Los Angeles, Chicago, Houston, Dallas, Miami and more across the US, plus the UK, Dubai/UAE, Canada, Australia and Pakistan.`;
  const faqs = [
    { q: 'Do you work with businesses outside these locations?', a: 'Yes. We’re remote-first and work with businesses anywhere; these pages cover markets where we have the most clients and local context.' },
    { q: 'Do you have local offices?', a: 'No | Voxil AI is remote-first. We schedule working sessions in your time zone and deliver through video calls, shared workspaces and async updates.' },
    { q: 'Can your AI agents speak local languages?', a: 'Yes, including Spanish, French, Arabic, Urdu and many more, with local voices and spellings where relevant.' },
  ];
  const body = `
    ${hubHero({ crumbs, eyebrowText: `${all.length} markets`, h1: 'AI automation for businesses <span class="text-gradient-teal">wherever you are</span>', lead: 'Remote-first, working in your time zone, with local context on markets, languages and compliance rules for every region we serve.' })}
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10 grid gap-5 md:grid-cols-2">
        ${LOCATION_GROUPS.map(
          (g) => `
        <div data-reveal class="glass-card glass-card-topline" style="--accent: ${g.key === 'international' ? '#38bdf8' : '#2fc4b6'}">
          <div class="flex items-center gap-3">
            <span class="icon-tile" style="--accent: ${g.key === 'international' ? '#38bdf8' : '#2fc4b6'}">${icon(g.key === 'international' ? 'globe' : 'pin')}</span>
            <h2 class="text-heading-6 font-semibold text-secondary">${g.title}</h2>
          </div>
          <ul class="mt-5 grid grid-cols-2 gap-2">
            ${g.locations.map((l) => `<li><a href="${locationUrl(l.slug)}" class="group flex items-center justify-between rounded-xl border border-secondary/[0.07] bg-secondary/[0.03] px-4 py-3 text-tagline-2 text-secondary/75 transition hover:border-secondary/20 hover:bg-secondary/[0.07] hover:text-secondary">${l.name}${arrow('size-3.5 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-80')}</a></li>`).join('')}
          </ul>
        </div>`
        ).join('')}
      </div>
    </section>
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
  const title = 'Industries We Serve: AI Automation for Service Businesses | Voxil AI';
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
      <div class="main-container relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${INDUSTRIES.map((i) => linkCard({ href: industryUrl(i.slug), title: i.name, desc: blurbs[i.slug], icon: i.icon, accent: i.accent, cta: 'Explore' })).join('')}
      </div>
    </section>`;
  return page({
    path,
    title,
    description,
    body,
    schema: [webPageSchema({ path, title, description }), itemList('Industries served', INDUSTRIES.map((i) => ({ name: i.name, url: industryUrl(i.slug) }))), breadcrumbSchema(crumbs)],
  });
};

