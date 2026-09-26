import { ALL_LOCATIONS, INDUSTRIES, SITE, findService, industryUrl, serviceUrl } from '../../content/site.js';
import { ORG_ID, arrow, breadcrumbSchema, checkList, crumbsNav, eyebrow, hero, icon, linkCard, page, sectionHead, updatedLine, webPageSchema } from '../lib/ui.js';

const ACCENTS = ['#0f9f93', '#ff6b35', '#0284c7', '#2fc4b6'];
export const caseStudyUrl = (slug) => (slug ? `/case-studies/${slug}/` : '/case-studies/');

const card = (cs, i) =>
  linkCard({
    href: caseStudyUrl(cs.slug),
    title: cs.title,
    desc: cs.results.length ? `${cs.summary} <strong class="text-secondary">${cs.results[0].value}</strong> ${cs.results[0].label}.` : cs.summary,
    icon: INDUSTRIES.find((x) => x.slug === cs.industry)?.icon ?? 'briefcase',
    accent: ACCENTS[i % ACCENTS.length],
    cta: 'Read the case study',
    badge: cs.industryLabel,
  });

// ---------------------------------------------------------------------------
export const renderCaseStudy = (cs, all) => {
  const i = all.indexOf(cs);
  const accent = ACCENTS[i % ACCENTS.length];
  const path = caseStudyUrl(cs.slug);
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: caseStudyUrl() },
    { name: cs.title, url: path },
  ];
  const industry = INDUSTRIES.find((x) => x.slug === cs.industry);
  const location = ALL_LOCATIONS.find((x) => x.slug === cs.location);

  const facts = [
    { label: 'Client', value: cs.client },
    { label: 'Industry', value: cs.industryLabel },
    ...(cs.timeline ? [{ label: 'Timeline', value: cs.timeline }] : []),
    ...(location ? [{ label: 'Location', value: location.name }] : []),
    { label: 'Services', value: String(cs.services.length) },
  ].slice(0, 4);

  const body = [
    hero({ crumbs, eyebrowText: `Case study · ${cs.industryLabel}`, accent, h1: cs.title, lead: cs.summary, answer: `<strong>The result:</strong> ${cs.outcome}`, answerLabel: 'At a glance', facts, primary: 'Get a similar result', secondary: { label: 'All case studies', href: caseStudyUrl() } }),

    cs.results.length
      ? `
    <section class="section-base section-pad-sm section-seam">
      <div class="main-container relative z-10">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-${Math.min(cs.results.length, 4)}">
          ${cs.results.map((r, j) => `<div data-reveal class="stat-card-ink"><p class="stat-num text-heading-3 ${['text-gradient-teal', 'text-gradient-warm', 'text-gradient-sky'][j % 3]}">${r.value}</p><p class="text-tagline-2 mt-2 font-medium text-secondary">${r.label}</p></div>`).join('')}
        </div>
      </div>
    </section>`
      : '',

    `
    <section class="section-soft section-pad section-seam">
      <div class="main-container relative z-10">
        <div class="grid gap-5 lg:grid-cols-3">
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #ff6b35">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-coral-600 uppercase">The challenge</p>
            <p class="text-tagline-1 mt-3 text-secondary/75">${cs.challenge}</p>
          </div>
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #0f9f93">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-primary-700 uppercase">What we built</p>
            <div class="mt-4">${checkList(cs.solution, '#0f9f93')}</div>
          </div>
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #0284c7">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-sky-700 uppercase">The result</p>
            <p class="text-tagline-1 mt-3 text-secondary/75">${cs.outcome}</p>
          </div>
        </div>
        ${
          cs.quote
            ? `<figure data-reveal class="quote-card mt-8 md:p-10" style="--accent: ${accent}">
          <blockquote class="text-heading-6 font-medium text-secondary">“${cs.quote.text}”</blockquote>
          <figcaption class="text-tagline-2 mt-5 text-secondary/60"><strong class="text-secondary">${cs.quote.name}</strong>, ${cs.quote.role}</figcaption>
        </figure>`
            : ''
        }
      </div>
    </section>`,

    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Built with', dot: accent, title: 'Services and <span class="text-gradient-teal">stack</span>' })}
        <div data-reveal class="mb-8 flex flex-wrap gap-2">${cs.stack.map((t) => `<span class="pill">${t}</span>`).join('')}${industry ? `<a href="${industryUrl(industry.slug)}" class="chip-link chip-link--accent">${icon(industry.icon, 'size-4')}<span>More on ${industry.name}</span></a>` : ''}</div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${cs.services.map((s) => { const r = findService(s); return linkCard({ href: serviceUrl(s), title: r.name, desc: r.short, icon: r.icon, accent: r.accent }); }).join('')}
        </div>
      </div>
    </section>`,

    `
    <section class="section-soft section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'More work', title: 'Other <span class="text-gradient-warm">case studies</span>' })}
        <div class="grid gap-4 md:grid-cols-3">${all.filter((x) => x !== cs).slice(0, 3).map((x) => card(x, all.indexOf(x))).join('')}</div>
      </div>
    </section>`,
  ].join('\n');

  const title = `${cs.title} | Case Study | Voxil AI`;
  const description = `${cs.summary} ${cs.outcome}`.slice(0, 300);
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.url}${path}#article`,
    headline: cs.title,
    description,
    image: SITE.ogImage,
    datePublished: cs.date,
    dateModified: SITE.updated,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${SITE.url}${path}`,
    articleSection: 'Case study',
    about: cs.services.map((s) => ({ '@type': 'Service', name: findService(s).name, url: `${SITE.url}${serviceUrl(s)}` })),
  };
  return page({ path, title, description, body, schema: [webPageSchema({ path, title, description }), article, breadcrumbSchema(crumbs)] });
};

// ---------------------------------------------------------------------------
export const renderCaseStudiesHub = (all) => {
  const path = caseStudyUrl();
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: path },
  ];
  const title = 'AI Automation Case Studies | Voice Agents, Chatbots & CRM | Voxil AI';
  const description = 'Case studies of AI voice agents, chatbots, lead qualification and CRM automation Voxil AI has built for clinics, ecommerce, finance and real-estate teams.';
  const body = `
    <section class="page-hero">
      <span class="grid-field" aria-hidden="true"></span>
      <span class="orb -top-28 left-[12%] size-[400px] animate-drift" style="--orb: #0f9f93; --orb-opacity: 0.3" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${crumbsNav(crumbs)}
        <div class="mx-auto mt-8 max-w-3xl text-center">
          ${eyebrow('Case studies')}
          <h1 data-reveal class="text-heading-4 sm:text-heading-3 lg:text-heading-2 font-semibold tracking-tight text-secondary">Work that <span class="text-gradient-teal">moved the numbers</span></h1>
          <p data-reveal class="text-tagline-1 mx-auto mt-5 max-w-2xl text-secondary/65 md:text-lg">What we built, why, and what changed for the business. Updated ${updatedLine()}.</p>
        </div>
      </div>
    </section>
    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-5 md:grid-cols-2">${all.map(card).join('')}</div>
        <div data-reveal class="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-stroke-2 bg-white p-6 shadow-1 sm:flex-row sm:items-center md:p-8">
          <div>
            <p class="text-heading-6 font-semibold text-secondary">Want to be our next case study?</p>
            <p class="text-tagline-2 mt-1 text-secondary/60">Tell us what you want to automate. We’ll scope it on a free 30-minute call.</p>
          </div>
          <a href="/book-meeting.html" class="cta cta-md cta-coral shrink-0">Book a free call${arrow()}</a>
        </div>
      </div>
    </section>`;
  return page({
    path,
    title,
    description,
    body,
    schema: [
      webPageSchema({ path, title, description }),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Voxil AI case studies', itemListElement: all.map((c, n) => ({ '@type': 'ListItem', position: n + 1, name: c.title, url: `${SITE.url}${caseStudyUrl(c.slug)}` })) },
      breadcrumbSchema(crumbs),
    ],
  });
};

