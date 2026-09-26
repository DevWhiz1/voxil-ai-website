import { ALL_LOCATIONS, INDUSTRIES, SITE, findService, industryUrl, locationUrl, serviceUrl } from '../../content/site.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  chipLink,
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

const FEATURED_LOCATIONS = ['new-york', 'los-angeles', 'chicago', 'houston', 'dallas', 'phoenix', 'miami', 'atlanta', 'united-kingdom', 'dubai-uae', 'canada', 'australia'];

export const renderIndustry = (slug, c) => {
  const meta = INDUSTRIES.find((i) => i.slug === slug);
  const accent = meta.accent;
  const path = industryUrl(slug);
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries/' },
    { name: meta.name, url: path },
  ];
  const others = INDUSTRIES.filter((i) => i.slug !== slug);

  const body = [
    hero({
      crumbs,
      eyebrowText: `Industry · ${meta.name}`,
      accent,
      h1: c.h1,
      lead: c.lead,
      answer: c.answer,
      facts: c.facts,
      pills: c.pills,
    }),

    // --- Pain points ------------------------------------------------------
    `
    <section class="section-soft section-pad">
      <span class="top-glow" aria-hidden="true"></span>
      <span class="dot-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'The problem', dot: '#ff7a3d', title: c.painTitle, lead: c.painLead })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${c.pains
            .map(
              (p) => `
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #ff7a3d">
            <p class="text-heading-6 font-semibold text-secondary">${p.title}</p>
            <p class="text-tagline-2 mt-2.5 text-secondary/60">${p.desc}</p>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>`,

    // --- Use cases ------------------------------------------------------
    `
    <section class="section-base section-pad section-seam">
      <span class="orb top-1/4 -left-24 size-[380px]" style="--orb: ${accent}; --orb-opacity: 0.16" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'What we automate', dot: accent, title: `AI systems built for <span class="text-gradient-teal">${c.noun}</span>`, lead: c.useLead })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${c.uses.map((u) => featureCard({ ...u, accent })).join('')}
        </div>
      </div>
    </section>`,

    // --- Example workflow -----------------------------------------------
    `
    <section class="section-soft section-pad section-seam">
      <span class="grid-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Example workflow', dot: accent, title: c.flowTitle, lead: c.flowLead, center: true })}
        ${stepsBlock({ steps: c.flow, accent })}
        ${
          c.caseStudy
            ? `<div data-reveal class="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-secondary/[0.09] bg-secondary/[0.03] p-6 sm:flex-row sm:items-center md:p-7">
          <div class="flex items-center gap-4">
            <span class="icon-tile" style="--accent: ${accent}">${icon('document')}</span>
            <div>
              <p class="text-tagline-2 font-semibold text-secondary">See it in practice</p>
              <p class="text-tagline-3 text-secondary/55">${c.caseStudy.label}</p>
            </div>
          </div>
          <a href="${c.caseStudy.href}" class="cta cta-md cta-ghost">Read the case study${arrow()}</a>
        </div>`
            : ''
        }
      </div>
    </section>`,

    // --- Recommended services ------------------------------------------
    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Recommended', dot: accent, title: `Where ${c.noun} <span class="text-gradient-teal">start</span>`, lead: 'Most clients begin with one of these, then connect the rest.' })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${c.services
            .map((s) => {
              const r = findService(s);
              return linkCard({ href: serviceUrl(s), title: r.name, desc: r.short, icon: r.icon, accent: r.accent });
            })
            .join('')}
        </div>
      </div>
    </section>`,

    faqBlock({ faqs: c.faqs, title: `AI for ${c.noun}: <span class="text-gradient-teal">FAQ</span>` }),

    `
    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10 space-y-6">
        <div data-reveal class="rounded-2xl border border-secondary/[0.08] bg-secondary/[0.03] p-6 md:p-8">
          <p class="text-tagline-2 font-semibold text-secondary">AI automation for ${c.noun} in</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${FEATURED_LOCATIONS.map((l) => ALL_LOCATIONS.find((x) => x.slug === l)).map((l) => chipLink(locationUrl(l.slug), l.name, 'pin')).join('')}
          </div>
        </div>
        <div data-reveal class="rounded-2xl border border-secondary/[0.08] bg-secondary/[0.03] p-6 md:p-8">
          <p class="text-tagline-2 font-semibold text-secondary">Other industries we serve</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${others.map((i) => chipLink(industryUrl(i.slug), i.name, i.icon)).join('')}
          </div>
        </div>
      </div>
    </section>`,
  ].join('\n');

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${path}#service`,
    name: `AI automation for ${meta.name}`,
    serviceType: `AI automation for ${c.noun}`,
    description: plain(c.answer),
    provider: { '@id': ORG_ID },
    audience: { '@type': 'BusinessAudience', audienceType: `${meta.name} businesses` },
    url: `${SITE.url}${path}`,
  };

  return page({
    path,
    title: c.title,
    description: c.description,
    body,
    schema: [webPageSchema({ path, title: c.title, description: c.description }), serviceSchema, breadcrumbSchema(crumbs), faqSchema(c.faqs)],
  });
};
