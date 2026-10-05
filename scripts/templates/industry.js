import EXTRA from '../../content/industries-extra.js';
import portfolio from '../../content/portfolio.js';
import { ALL_LOCATIONS, INDUSTRIES, SITE, findService, industryUrl, locationUrl, serviceUrl } from '../../content/site.js';
import { calcField } from './resources.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  chipLink,
  dataTable,
  esc,
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

// Compact revenue-at-risk estimate. Reuses src/js/common/lead-loss-calculator.js;
// the opportunity and recovery shares are fixed, conservative assumptions.
const revenueCalc = ({ noun, calc, accent }) => `
    <section class="section-soft section-pad section-seam" id="estimate">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Revenue estimate', dot: '#ff7a3d', title: 'What slow response may be <span class="text-gradient-warm">costing you</span>', lead: `Adjust the numbers to match your business. Starting values are examples for ${noun}, not benchmarks.` })}
        <form class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-lead-calc onsubmit="return false">
          <div class="glass-card space-y-7" style="--accent: ${accent}">
            ${calcField({ id: 'calls', label: 'Calls and leads per month', hint: 'Phone calls plus web, ad and social inquiries.', min: 20, max: 3000, step: 10, value: calc.calls })}
            ${calcField({ id: 'missed', label: 'Share missed or answered late', hint: 'Voicemails and leads not contacted within an hour.', min: 0, max: 80, step: 1, value: 25, suffix: '%' })}
            ${calcField({ id: 'close', label: 'Close rate when you do reach them', hint: 'Share of real opportunities that become customers.', min: 1, max: 90, step: 1, value: 30, suffix: '%' })}
            ${calcField({ id: 'value', label: 'Average customer value', hint: 'Average job, case, policy or membership value.', min: 50, max: 20000, step: 50, value: calc.value, prefix: '$' })}
            <input type="hidden" id="opportunity" value="50" />
            <input type="hidden" id="recovery" value="60" />
          </div>
          <div class="space-y-4 lg:self-start" aria-live="polite">
            <div class="edge-card">
              <div class="p-7 md:p-8">
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Revenue at risk</p>
                <p class="stat-num text-heading-3 mt-3 text-gradient-warm" data-result="monthly">$0</p>
                <p class="text-tagline-2 text-secondary/55">per month · <span class="font-semibold text-secondary" data-result="yearly">$0</span> per year</p>
                <div class="hairline my-6"></div>
                <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/45 uppercase">Recoverable with AI answering and follow-up</p>
                <p class="stat-num text-heading-4 mt-3 text-gradient-teal" data-result="recoverable">$0</p>
                <p class="text-tagline-2 text-secondary/55">per month, assuming 60% recovery</p>
              </div>
            </div>
            <p class="text-tagline-3 text-secondary/45">Assumes half of missed contacts are genuine new opportunities. Estimates only; nothing you enter is saved. For every input, use the full <a href="/resources/lead-loss-calculator/" class="text-primary-600 underline underline-offset-4">Lead Loss Calculator</a>.</p>
          </div>
        </form>
      </div>
    </section>`;

export const renderIndustry = (slug, base, posts = []) => {
  const c = { ...base, ...(EXTRA[slug] ?? {}) };
  const meta = INDUSTRIES.find((i) => i.slug === slug);
  const demo = portfolio.find((f) => f.industry === slug);
  const guide = c.guide && posts.find((p) => p.slug === c.guide);
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

    // --- Before / after and segments ----------------------------------
    c.beforeAfter
      ? `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Before and after', dot: accent, title: `What changes for <span class="text-gradient-teal">${c.noun}</span>`, lead: 'The same team and the same leads, with response, follow-up and booking automated.' })}
        ${dataTable({ head: ['Area', 'Before automation', 'After automation'], rows: c.beforeAfter, caption: `Before and after AI automation for ${c.noun}` })}
        ${
          c.segments
            ? `<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${c.segments.map((x) => featureCard({ ...x, accent })).join('')}
        </div>`
            : ''
        }
      </div>
    </section>`
      : '',

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

    c.calc ? revenueCalc({ noun: c.noun, calc: c.calc, accent }) : '',

    // --- Demo funnel and in-depth guide ----------------------------------
    demo || guide
      ? `
    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10 grid gap-4 md:grid-cols-2">
        ${demo ? linkCard({ href: `/portfolio/${demo.slug}/`, title: `Try our ${esc(demo.label)} demo funnel`, desc: `${esc(demo.card.desc)} Click through it, fill in the form and chat with its AI assistant.`, icon: 'desktop', accent, cta: 'Open the demo', badge: 'Live demo' }) : ''}
        ${guide ? linkCard({ href: `/blog/${guide.slug}/`, title: guide.title, desc: guide.excerpt, icon: 'book', accent: '#0284c7', cta: 'Read the guide', badge: 'Guide' }) : linkCard({ href: '/blog/', title: 'GoHighLevel and AI automation guides', desc: 'Step-by-step guides on follow-up, missed-call text-back, AI calling bots and booking automation.', icon: 'book', accent: '#0284c7', cta: 'Browse the blog' })}
      </div>
    </section>`
      : '',

    // --- Objections ------------------------------------------------------
    c.objections
      ? `
    <section class="section-soft section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Real talk', dot: '#ff7a3d', title: 'What owners ask us <span class="text-gradient-warm">before they start</span>', lead: 'Honest answers to the pushback we hear most.' })}
        <div class="grid gap-4 md:grid-cols-3">
          ${c.objections
            .map(
              (o) => `
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #ff7a3d">
            <h3 class="text-heading-6 font-semibold text-secondary">${o.q}</h3>
            <p class="text-tagline-2 mt-2.5 text-secondary/60">${o.a}</p>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>`
      : '',

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
