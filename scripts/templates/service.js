import { ALL_LOCATIONS, INDUSTRIES, SITE, findService, industryUrl, locationUrl, serviceUrl } from '../../content/site.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  checkList,
  chipLink,
  dataTable,
  eyebrow,
  faqBlock,
  faqSchema,
  featureCard,
  hero,
  icon,
  linkCard,
  page,
  plain,
  sectionHead,
  stepsBlock,
  webPageSchema,
} from '../lib/ui.js';

// Cities featured in the "available in" strip on every service page.
const FEATURED_LOCATIONS = ['new-york', 'los-angeles', 'chicago', 'houston', 'dallas', 'miami', 'atlanta', 'united-kingdom', 'dubai-uae', 'canada', 'australia'];

export const renderService = (slug, c) => {
  const meta = findService(slug);
  const accent = meta.accent;
  const path = serviceUrl(slug);
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
    { name: meta.name, url: path },
  ];

  const industries = (c.industries ?? []).map((s) => INDUSTRIES.find((i) => i.slug === s)).filter(Boolean);

  const body = [
    hero({
      crumbs,
      eyebrowText: meta.groupTitle,
      accent,
      h1: c.h1,
      lead: c.lead,
      answer: c.answer,
      facts: c.facts,
      pills: c.pills,
    }),

    // --- What it is + what's included ---------------------------------
    `
    <section class="section-soft section-pad">
      <span class="top-glow" aria-hidden="true"></span>
      <span class="dot-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            ${eyebrow(c.whatIs.eyebrow ?? 'The short version', accent)}
            <h2 data-reveal class="text-heading-5 sm:text-heading-4 font-semibold tracking-tight text-secondary">${c.whatIs.title}</h2>
            <div class="mt-6 space-y-4">
              ${c.whatIs.paras.map((p) => `<p data-reveal class="text-tagline-1 text-secondary/65">${p}</p>`).join('\n              ')}
            </div>
          </div>
          <div data-reveal class="glass-card glass-card-topline self-start" style="--accent: ${accent}">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">What's included</p>
            <div class="mt-5">${checkList(c.included, accent)}</div>
            <a href="/book-meeting.html" class="cta cta-md cta-teal mt-7 w-full">Get a fixed-price scope${arrow()}</a>
          </div>
        </div>
      </div>
    </section>`,

    // --- Capabilities ---------------------------------------------------
    `
    <section class="section-base section-pad section-seam">
      <span class="orb top-1/4 -right-24 size-[380px]" style="--orb: ${accent}; --orb-opacity: 0.16" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Capabilities', dot: accent, title: c.featuresTitle ?? `What you get with <span class="text-gradient-teal">${meta.name}</span>`, lead: c.featuresLead })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${c.features.map((f) => featureCard({ ...f, accent })).join('')}
        </div>
      </div>
    </section>`,

    // --- Process --------------------------------------------------------
    `
    <section class="section-soft section-pad section-seam">
      <span class="grid-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'How it works', dot: accent, title: c.stepsTitle ?? 'From first call to <span class="text-gradient-warm">live in weeks</span>', lead: c.stepsLead, center: true })}
        ${stepsBlock({ steps: c.steps, accent })}
      </div>
    </section>`,

    // --- Optional comparison table -------------------------------------
    c.compare
      ? `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Compare', dot: accent, title: c.compare.title, lead: c.compare.lead })}
        ${dataTable(c.compare)}
      </div>
    </section>`
      : '',

    // --- Who it's for + stack ------------------------------------------
    `
    <section class="section-tint section-pad section-seam">
      <span class="dot-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            ${eyebrow('Best fit', accent)}
            <h2 data-reveal class="text-heading-5 sm:text-heading-4 font-semibold tracking-tight text-secondary">Who this is <span class="text-gradient-teal">built for</span></h2>
            <div class="mt-6">${checkList(c.fit, accent)}</div>
            ${
              industries.length
                ? `<p data-reveal class="text-tagline-3 mt-8 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Popular in</p>
            <div data-reveal class="mt-3 flex flex-wrap gap-2">${industries.map((i) => chipLink(industryUrl(i.slug), i.name, i.icon)).join('')}</div>`
                : ''
            }
          </div>
          <div data-reveal class="glass-card self-start" style="--accent: ${accent}">
            <div class="flex items-center gap-3">
              <span class="icon-tile" style="--accent: ${accent}">${icon('puzzle')}</span>
              <div>
                <h3 class="text-heading-6 font-semibold text-secondary">Works with your stack</h3>
                <p class="text-tagline-3 text-secondary/50">No rip-and-replace. We integrate with what you already run.</p>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-2">${c.integrations.map((t) => `<span class="pill">${t}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    </section>`,

    // GoHighLevel pages get a white label banner for agencies (internal link to the hub).
    meta.group === 'ghl'
      ? `
    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10">
        <div data-reveal class="flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary-500/25 p-6 sm:flex-row sm:items-center md:p-8" style="background: linear-gradient(150deg, #ecfdfb 0%, #ffffff 60%, #fff4ef 100%)">
          <div class="flex items-center gap-4">
            <span class="icon-tile" style="--accent: #0f9f93">${icon('briefcase')}</span>
            <div>
              <p class="text-heading-6 font-semibold text-secondary">Running an agency? We deliver ${meta.name} white label.</p>
              <p class="text-tagline-2 mt-1 text-secondary/65">Built under your brand, inside your accounts. Your client never hears our name.</p>
            </div>
          </div>
          <a href="/for-agencies/" class="cta cta-md cta-teal shrink-0">White label for agencies${arrow()}</a>
        </div>
      </div>
    </section>`
      : '',

    faqBlock({ faqs: c.faqs, title: `${meta.name} <span class="text-gradient-teal">FAQ</span>` }),

    // --- Related + locations -------------------------------------------
    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Keep exploring', dot: accent, title: 'Related <span class="text-gradient-teal">services</span>', lead: 'Most clients combine two or three of these into one connected system.' })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${c.related
            .map((s) => {
              const r = findService(s);
              return linkCard({ href: serviceUrl(s), title: r.name, desc: r.short, icon: r.icon, accent: r.accent });
            })
            .join('')}
        </div>
        <div data-reveal class="mt-12 rounded-2xl border border-secondary/[0.08] bg-secondary/[0.03] p-6 md:p-7">
          <p class="text-tagline-2 font-semibold text-secondary">${meta.name} for businesses in</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${FEATURED_LOCATIONS.map((l) => ALL_LOCATIONS.find((x) => x.slug === l)).map((l) => chipLink(locationUrl(l.slug), l.name, 'pin')).join('')}
            <a href="/locations/" class="chip-link chip-link--accent"><span>All locations</span>${arrow('size-3.5')}</a>
          </div>
        </div>
      </div>
    </section>`,
  ].join('\n');

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${path}#service`,
    name: meta.name,
    serviceType: c.serviceType ?? meta.name,
    description: plain(c.answer),
    url: `${SITE.url}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Pakistan'].map((name) => ({ '@type': 'Country', name })),
    audience: { '@type': 'BusinessAudience', audienceType: plain(c.fit[0]) },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${meta.name} deliverables`,
      itemListElement: c.included.map((i) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: plain(i) } })),
    },
  };

  return page({
    path,
    title: c.title,
    description: c.description,
    body,
    schema: [webPageSchema({ path, title: c.title, description: c.description }), serviceSchema, breadcrumbSchema(crumbs), faqSchema(c.faqs)],
  });
};
