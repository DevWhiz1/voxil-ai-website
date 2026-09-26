import { ALL_LOCATIONS, INDUSTRIES, LOCATION_GROUPS, SITE, findService, industryUrl, locationUrl, serviceUrl } from '../../content/site.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  chipLink,
  eyebrow,
  faqBlock,
  faqSchema,
  hero,
  icon,
  linkCard,
  page,
  sectionHead,
  stepsBlock,
  webPageSchema,
} from '../lib/ui.js';

// Questions every location answers; `unique` FAQs in the content file come first.
const sharedFaqs = (l) => [
  {
    q: `Do you have an office in ${l.name}?`,
    a: `Voxil AI is a remote-first agency. We serve ${l.name} businesses through video calls, shared workspaces and async updates, and schedule working sessions inside ${l.tzShort} business hours. Remote delivery keeps costs lower than a local agency while giving you the same senior team.`,
  },
  {
    q: `How much does AI automation cost for businesses in ${l.name}?`,
    a: 'Every build is a fixed-price project scoped on a free 30-minute call, plus any usage costs (AI model, telephony or messaging) passed through at cost. A single chatbot or voice agent is typically a few weeks of work; multi-system automation takes longer. You get the exact price in writing before any work starts.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most single-purpose systems, an AI receptionist, a chatbot or a follow-up system, go live in two to four weeks, including a supervised pilot on real traffic.',
  },
];

export const renderLocation = (slug, l) => {
  const meta = ALL_LOCATIONS.find((x) => x.slug === slug);
  const path = locationUrl(slug);
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations/' },
    { name: meta.name, url: path },
  ];
  const faqs = [...l.faqs, ...sharedFaqs({ name: l.shortName ?? meta.name, tzShort: l.tzShort })];
  const industries = l.industries.map((s) => INDUSTRIES.find((i) => i.slug === s));
  const group = LOCATION_GROUPS.find((g) => g.key === meta.group);
  const nearby = ALL_LOCATIONS.filter((x) => x.slug !== slug && (x.group === meta.group || l.nearby?.includes(x.slug))).slice(0, 8);
  const accent = meta.group.startsWith('us-') ? '#2fc4b6' : '#38bdf8';
  const place = l.shortName ?? meta.name;

  const body = [
    hero({
      crumbs,
      eyebrowText: `${meta.name} · ${group.title}`,
      accent,
      h1: l.h1 ?? `AI automation agency serving <span class="text-gradient-teal">${place}</span>`,
      lead: l.lead,
      answer: l.answer,
      answerLabel: 'At a glance',
      facts: [
        { label: 'Time zone', value: l.tzShort },
        { label: 'Delivery', value: 'Remote-first' },
        { label: 'Go-live', value: '2-4 weeks' },
        { label: 'Languages', value: l.languages },
      ],
      pills: l.pills,
    }),

    // --- Local market ---------------------------------------------------
    `
    <section class="section-soft section-pad">
      <span class="top-glow" aria-hidden="true"></span>
      <span class="dot-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            ${eyebrow(`The ${place} market`, accent)}
            <h2 data-reveal class="text-heading-5 sm:text-heading-4 font-semibold tracking-tight text-secondary">${l.marketTitle}</h2>
            <div class="mt-6 space-y-4">
              ${l.market.map((p) => `<p data-reveal class="text-tagline-1 text-secondary/65">${p}</p>`).join('\n              ')}
            </div>
          </div>
          <div class="space-y-4 self-start">
            <div data-reveal class="glass-card glass-card-topline" style="--accent: ${accent}">
              <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Industries we automate in ${place}</p>
              <div class="mt-4 flex flex-wrap gap-2">${industries.map((i) => chipLink(industryUrl(i.slug), i.name, i.icon)).join('')}</div>
            </div>
            <div data-reveal class="glass-card" style="--accent: ${accent}">
              <p class="text-tagline-3 flex items-center gap-2 font-semibold tracking-[0.14em] text-secondary/45 uppercase">${icon('pin', 'size-4 text-primary-600')} Areas we serve</p>
              <p class="text-tagline-2 mt-3 text-secondary/70">${l.areas.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,

    // --- Services -------------------------------------------------------
    `
    <section class="section-base section-pad section-seam">
      <span class="orb top-1/4 -right-24 size-[380px]" style="--orb: ${accent}; --orb-opacity: 0.14" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Most requested', dot: accent, title: `What ${place} businesses <span class="text-gradient-teal">automate first</span>`, lead: l.servicesLead })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${l.services
            .map((s) => {
              const r = findService(s);
              return linkCard({ href: serviceUrl(s), title: r.name, desc: r.short, icon: r.icon, accent: r.accent });
            })
            .join('')}
        </div>
        <div data-reveal class="mt-8 text-center">
          <a href="/services/" class="cta cta-md cta-ghost">See all 40+ services${arrow()}</a>
        </div>
      </div>
    </section>`,

    // --- How we work + compliance --------------------------------------
    `
    <section class="section-soft section-pad section-seam">
      <span class="grid-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'How we work', dot: accent, title: `Working with ${place} teams, <span class="text-gradient-warm">remotely and fast</span>`, center: true })}
        ${stepsBlock({
          accent,
          steps: [
            { title: 'Free scope call', desc: `A 30-minute call scheduled in ${l.tzShort} business hours to find your highest-ROI workflow.` },
            { title: 'Fixed proposal', desc: 'A written scope, price and timeline within two business days, no hourly meter.' },
            { title: 'Build & pilot', desc: 'Weekly demos, then a supervised pilot on real calls, chats or leads.' },
            { title: 'Launch & tune', desc: '30 days of tuning included; optional monthly support after that.' },
          ],
        })}
        <div data-reveal class="mt-10 grid gap-6 rounded-2xl border border-secondary/[0.09] bg-secondary/[0.03] p-6 md:grid-cols-[auto_1fr] md:items-start md:p-8">
          <span class="icon-tile" style="--accent: ${accent}">${icon('shield')}</span>
          <div>
            <h3 class="text-heading-6 font-semibold text-secondary">${l.compliance.title}</h3>
            <p class="text-tagline-2 mt-2 text-secondary/60">${l.compliance.text}</p>
            <p class="text-tagline-3 mt-3 text-secondary/35">General information, not legal advice, confirm specifics with your counsel.</p>
          </div>
        </div>
      </div>
    </section>`,

    faqBlock({ faqs, title: `AI automation in ${place}: <span class="text-gradient-teal">FAQ</span>` }),

    // --- Nearby ---------------------------------------------------------
    `
    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10">
        <div data-reveal class="rounded-2xl border border-secondary/[0.08] bg-secondary/[0.03] p-6 md:p-8">
          <p class="text-tagline-2 font-semibold text-secondary">We also serve</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${nearby.map((n) => chipLink(locationUrl(n.slug), n.name, 'pin')).join('')}
            <a href="/locations/" class="chip-link chip-link--accent"><span>All locations</span>${arrow('size-3.5')}</a>
          </div>
        </div>
      </div>
    </section>`,
  ].join('\n');

  const title = l.title ?? `AI Automation Agency in ${meta.name} | AI Voice Agents & Chatbots | Voxil AI`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${path}#service`,
    name: `AI automation services in ${meta.name}`,
    serviceType: 'AI automation, AI voice agents, AI chatbots and CRM automation',
    provider: { '@id': ORG_ID },
    areaServed: l.schemaPlace,
    url: `${SITE.url}${path}`,
    description: l.description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `AI automation services for ${meta.name}`,
      itemListElement: l.services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: findService(s).name, url: `${SITE.url}${serviceUrl(s)}` } })),
    },
  };

  return page({
    path,
    title,
    description: l.description,
    body,
    schema: [webPageSchema({ path, title, description: l.description }), serviceSchema, breadcrumbSchema(crumbs), faqSchema(faqs)],
  });
};

