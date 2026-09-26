import { AGENCY_PAGES, SITE, agencyUrl, findService, serviceUrl } from '../../content/site.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  checkList,
  dataTable,
  eyebrow,
  faqBlock,
  faqSchema,
  hero,
  icon,
  linkCard,
  page,
  plain,
  sectionHead,
  stepsBlock,
  webPageSchema,
} from '../lib/ui.js';

const MODEL_SLUGS = ['white-label-fulfillment', 'dedicated-ghl-va', 'white-label-support-desk', 'per-project-overflow'];
const metaFor = (slug) => AGENCY_PAGES.find((p) => p.slug === slug);

const fitBlock = (fit, notFit, title = 'Who this fits, <span class="text-gradient-teal">and who it doesn’t</span>', lead = 'A partnership that isn’t a fit wastes both our time. This is the honest version.') => `
    <section class="section-soft section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Fit check', title, lead })}
        <div class="grid gap-5 md:grid-cols-2">
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #0f9f93">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-primary-700 uppercase">A good fit if…</p>
            <div class="mt-5">${checkList(fit, '#0f9f93')}</div>
          </div>
          <div data-reveal class="glass-card glass-card-topline" style="--accent: #ff6b35">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-coral-600 uppercase">Not a fit if…</p>
            <ul class="mt-5 space-y-3">
              ${notFit.map((n) => `<li class="flex gap-3 text-tagline-1 text-secondary/75"><span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /></svg></span>${n}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>`;

const otherModels = (current) => `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Other ways to work with us', title: 'Explore the <span class="text-gradient-teal">partner models</span>' })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${AGENCY_PAGES.filter((p) => p.slug !== current)
            .slice(0, 4)
            .map((p) => linkCard({ href: agencyUrl(p.slug), title: p.name, desc: p.short, icon: p.icon, accent: p.accent, cta: 'See how it works' }))
            .join('')}
        </div>
        <div data-reveal class="mt-8 text-center"><a href="${agencyUrl()}" class="cta cta-md cta-ghost">Back to For Agencies${arrow()}</a></div>
      </div>
    </section>`;

const serviceSchema = ({ path, name, description, offers }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}${path}#service`,
  name,
  serviceType: 'White label fulfillment for marketing agencies',
  description,
  url: `${SITE.url}${path}`,
  provider: { '@id': ORG_ID },
  audience: { '@type': 'BusinessAudience', audienceType: 'Marketing agencies and GoHighLevel agencies' },
  areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Pakistan'].map((n) => ({ '@type': 'Country', name: n })),
  ...(offers ? { hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Agency partner models', itemListElement: offers } } : {}),
});

// ---------------------------------------------------------------------------
export const renderAgencyHub = (c) => {
  const path = agencyUrl();
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'For Agencies', url: path },
  ];

  const body = [
    hero({ crumbs, eyebrowText: 'For Agencies', accent: '#0f9f93', h1: c.h1, lead: c.lead, answer: c.answer, answerLabel: 'Partner snapshot', facts: c.facts, pills: c.pills, primary: 'Book a free partner call', secondary: { label: 'See the partner models', href: '#models' } }),

    `
    <section class="section-soft section-pad" id="models">
      <span class="top-glow" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Partner models', title: 'Four ways agencies <span class="text-gradient-teal">work with us</span>', lead: c.modelsIntro })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${MODEL_SLUGS.map((s) => {
            const m = metaFor(s);
            return linkCard({ href: agencyUrl(s), title: m.name, desc: m.short, icon: m.icon, accent: m.accent, cta: 'See how it works' });
          }).join('')}
        </div>
        <div data-reveal class="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary-500/25 p-6 sm:flex-row sm:items-center md:p-7" style="background: linear-gradient(150deg, #ecfdfb 0%, #ffffff 60%, #fff4ef 100%)">
          <div class="flex items-center gap-4">
            <span class="icon-tile" style="--accent: #2fc4b6">${icon('mic')}</span>
            <div>
              <p class="text-heading-6 font-semibold text-secondary">Sell AI voice agents and chatbots as your own</p>
              <p class="text-tagline-2 mt-1 text-secondary/65">Custom Vapi and Retell agents connected to your clients’ GoHighLevel accounts.</p>
            </div>
          </div>
          <a href="${agencyUrl('white-label-ai-agents')}" class="cta cta-md cta-teal shrink-0">White label AI agents${arrow()}</a>
        </div>
      </div>
    </section>`,

    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'In detail', title: 'The four models, <span class="text-gradient-warm">in detail</span>', lead: 'Same team behind all four. What changes is who holds the brief and how you pay for it.' })}
        <div class="space-y-4">
          ${c.details
            .map((d, i) => {
              const m = metaFor(d.slug);
              return `
          <article data-reveal class="glass-card grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start" style="--accent: ${m.accent}">
            <span class="step-num" style="--accent: ${m.accent}">${String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 class="text-heading-6 font-semibold text-secondary">${m.name}</h3>
              <p class="text-tagline-1 mt-2 text-secondary/70">${d.body}</p>
              <p class="text-tagline-2 mt-3 text-secondary/75"><strong class="text-secondary">Best when:</strong> ${d.best}</p>
            </div>
            <a href="${agencyUrl(d.slug)}" class="link-arrow shrink-0 self-center" style="color: color-mix(in srgb, ${m.accent} 70%, #0c1220)">Full detail${arrow()}</a>
          </article>`;
            })
            .join('')}
        </div>
      </div>
    </section>`,

    fitBlock(c.fit, c.notFit),

    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Scope', title: 'What we take <span class="text-gradient-teal">off your plate</span>', lead: 'The work agencies hand us most, all delivered under your brand.' })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${c.scope.map((s, i) => linkCard({ href: s.href, title: s.title, desc: s.desc, icon: s.icon, accent: ['#0f9f93', '#2fc4b6', '#ff6b35', '#0284c7', '#6adfd3', '#0f9f93'][i], cta: 'See the service' })).join('')}
        </div>
      </div>
    </section>`,

    `
    <section class="section-soft section-pad section-seam">
      <span class="grid-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Getting started', title: 'How a partnership <span class="text-gradient-warm">starts</span>', lead: 'Low risk by design: judge us on one real project first.', center: true })}
        ${stepsBlock({ steps: c.steps, accent: '#0f9f93' })}
      </div>
    </section>`,

    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Compare', title: c.compare.title, lead: c.compare.lead })}
        ${dataTable(c.compare)}
      </div>
    </section>`,

    `
    <section class="section-soft section-pad section-seam">
      <div class="main-container relative z-10">
        <div data-reveal class="glass-card grid items-center gap-6 md:grid-cols-[auto_1fr_auto] md:p-8">
          <div class="flex -space-x-4">
            <img src="/abdulmoeez.jpeg" alt="Abdul Moeez" width="64" height="64" loading="lazy" class="size-16 rounded-2xl object-cover object-top ring-4 ring-white" />
            <img src="/ahmadali.jpeg" alt="Ahmad Ali" width="64" height="64" loading="lazy" class="size-16 rounded-2xl object-cover object-top ring-4 ring-white" />
          </div>
          <div>
            <p class="text-heading-6 font-semibold text-secondary">Talk to the people who’ll build it</p>
            <p class="text-tagline-2 mt-1 text-secondary/65">Abdul Moeez (AI automation) and Ahmad Ali (GoHighLevel) run every agency partnership personally. Email <a href="mailto:${SITE.email}" class="font-semibold text-primary-700 underline underline-offset-4">${SITE.email}</a> or book a call.</p>
          </div>
          <a href="/book-meeting.html" class="cta cta-md cta-coral shrink-0">Book a partner call${arrow()}</a>
        </div>
      </div>
    </section>`,

    faqBlock({ faqs: c.faqs, title: 'White label partner <span class="text-gradient-teal">FAQ</span>', lead: 'What agencies ask before handing us their first project.' }),
  ].join('\n');

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to start a white label fulfillment partnership with Voxil AI',
    step: c.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })),
  };
  const offers = AGENCY_PAGES.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.name, description: p.short, url: `${SITE.url}${agencyUrl(p.slug)}` } }));

  return page({
    path,
    title: c.title,
    description: c.description,
    body,
    schema: [webPageSchema({ path, title: c.title, description: c.description }), serviceSchema({ path, name: 'White label fulfillment for agencies', description: plain(c.answer), offers }), breadcrumbSchema(crumbs), faqSchema(c.faqs), howTo],
  });
};

// ---------------------------------------------------------------------------
export const renderAgencyModel = (slug, c) => {
  const meta = metaFor(slug);
  const path = agencyUrl(slug);
  const accent = meta.accent;
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'For Agencies', url: agencyUrl() },
    { name: meta.name, url: path },
  ];

  const body = [
    hero({ crumbs, eyebrowText: 'For Agencies', accent, h1: c.h1, lead: c.lead, answer: c.answer, facts: c.facts, pills: c.pills, primary: 'Book a free partner call', secondary: { label: 'All partner models', href: agencyUrl() } }),

    `
    <section class="section-soft section-pad">
      <span class="top-glow" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            ${eyebrow('Why agencies choose this', accent)}
            <h2 data-reveal class="text-heading-5 sm:text-heading-4 font-semibold tracking-tight text-secondary">${c.whatIs.title}</h2>
            <div class="mt-6 space-y-4">${c.whatIs.paras.map((p) => `<p data-reveal class="text-tagline-1 text-secondary/70">${p}</p>`).join('')}</div>
          </div>
          <div data-reveal class="glass-card glass-card-topline self-start" style="--accent: ${accent}">
            <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/50 uppercase">What’s included</p>
            <div class="mt-5">${checkList(c.included, accent)}</div>
            <a href="/book-meeting.html" class="cta cta-md cta-teal mt-7 w-full">Get a fixed quote${arrow()}</a>
          </div>
        </div>
      </div>
    </section>`,

    `
    <section class="section-base section-pad section-seam">
      <span class="grid-field" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'How it works', dot: accent, title: 'Simple for you, <span class="text-gradient-warm">invisible to your client</span>', center: true })}
        ${stepsBlock({ steps: c.steps, accent })}
      </div>
    </section>`,

    fitBlock(c.fit, c.notFit, 'Is this model <span class="text-gradient-teal">right for you?</span>', 'Honest guidance so you pick the model that fits the gap you actually have.'),

    `
    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Delivered with', dot: accent, title: 'Services behind <span class="text-gradient-teal">this model</span>' })}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${c.related
            .map((s) => {
              const r = findService(s);
              return linkCard({ href: serviceUrl(s), title: r.name, desc: r.short, icon: r.icon, accent: r.accent });
            })
            .join('')}
        </div>
      </div>
    </section>`,

    faqBlock({ faqs: c.faqs, title: `${meta.name}: <span class="text-gradient-teal">FAQ</span>` }),
    otherModels(slug),
  ].join('\n');

  return page({
    path,
    title: c.title,
    description: c.description,
    body,
    schema: [webPageSchema({ path, title: c.title, description: c.description }), serviceSchema({ path, name: meta.name, description: plain(c.answer) }), breadcrumbSchema(crumbs), faqSchema(c.faqs)],
  });
};
