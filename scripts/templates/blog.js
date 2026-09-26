import { SITE, TEAM, findService, serviceUrl } from '../../content/site.js';
import { sourcesIn } from '../lib/content-helpers.js';
import {
  ORG_ID,
  arrow,
  breadcrumbSchema,
  crumbsNav,
  esc,
  eyebrow,
  faqBlock,
  faqSchema,
  icon,

  page,
  plain,
  sectionHead,
  updatedLine,
} from '../lib/ui.js';

export const CATEGORY_STYLE = {
  Statistics: { accent: '#2fc4b6', icon: 'chart' },
  Guides: { accent: '#ff7a3d', icon: 'book' },
  Comparisons: { accent: '#38bdf8', icon: 'swap' },
  Pricing: { accent: '#6adfd3', icon: 'currency' },
};

const slugify = (s) =>
  plain(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Adds ids to every <h2> and returns the table of contents.
const withToc = (html) => {
  const toc = [];
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner) => {
    const id = slugify(inner);
    toc.push({ id, text: plain(inner) });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
};

export const readMinutes = (post) => Math.max(3, Math.round(plain(post.body).split(' ').length / 220));

export const postCard = (post) => {
  const style = CATEGORY_STYLE[post.category];
  return `
          <a href="/blog/${post.slug}/" data-reveal class="group glass-card glass-card-rail glass-card-bloom flex flex-col" style="--accent: ${style.accent}">
            <div class="flex items-center justify-between gap-3">
              <span class="pill-accent" style="--accent: ${style.accent}">${icon(style.icon, 'size-3.5')}${post.category}</span>
              <span class="text-tagline-3 text-secondary/40">${readMinutes(post)} min read</span>
            </div>
            <h3 class="text-heading-6 mt-5 font-semibold text-secondary">${post.title}</h3>
            <p class="text-tagline-2 mt-2.5 flex-1 text-secondary/60">${post.excerpt}</p>
            <div class="mt-5 flex items-center justify-between">
              <span class="text-tagline-3 text-secondary/40">${updatedLine(post.updated ?? post.date)}</span>
              <span class="link-arrow" style="color: color-mix(in srgb, ${style.accent} 75%, #0c1220)">Read${arrow()}</span>
            </div>
          </a>`;
};

export const renderPost = (post, allPosts) => {
  const path = `/blog/${post.slug}/`;
  const style = CATEGORY_STYLE[post.category];
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: post.title, url: path },
  ];
  const { html, toc } = withToc(post.body);
  const sources = sourcesIn(post.body);
  const extraSources = post.extraSources ?? [];
  const related = post.related.map((s) => allPosts.find((p) => p.slug === s)).filter(Boolean);
  const mins = readMinutes(post);
  const author = TEAM[post.author ?? 'abdul-moeez'];

  const body = `
    <section class="page-hero !pb-12 md:!pb-16">
      <span class="grid-field" aria-hidden="true"></span>
      <span class="orb -top-28 left-[10%] size-[420px] animate-drift" style="--orb: ${style.accent}; --orb-opacity: 0.26" aria-hidden="true"></span>
      <span class="orb top-1/3 -right-24 size-[360px] animate-drift-slow" style="--orb: #ff6b35; --orb-opacity: 0.16" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${crumbsNav(crumbs)}
        <div class="mt-8 max-w-4xl">
          ${eyebrow(post.category, style.accent)}
          <h1 data-reveal class="text-heading-4 sm:text-heading-3 lg:text-heading-2 font-semibold tracking-tight text-secondary">${post.title}</h1>
          <p data-reveal class="text-tagline-1 mt-5 max-w-3xl text-secondary/65 md:text-lg">${post.excerpt}</p>
          <div data-reveal class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-tagline-3 text-secondary/50">
            <span class="inline-flex items-center gap-2.5"><img src="${author.photo}" alt="${author.name}" width="28" height="28" class="size-7 rounded-full object-cover object-top ring-2 ring-white" /><span><span class="font-semibold text-secondary">${author.name}</span> · ${author.role}</span></span>
            <span>Published ${updatedLine(post.date)}</span>
            ${post.updated && post.updated !== post.date ? `<span>Updated ${updatedLine(post.updated)}</span>` : ''}
            <span>${mins} min read</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-12 lg:grid-cols-[230px_1fr] xl:grid-cols-[250px_1fr_220px]">
          <aside class="hidden lg:block">
            <nav class="sticky top-28" aria-label="Table of contents">
              <p class="mb-3 text-tagline-3 font-semibold tracking-[0.14em] text-secondary/40 uppercase">On this page</p>
              ${toc.map((t) => `<a href="#${t.id}" class="toc-link" data-toc-link>${esc(t.text)}</a>`).join('\n              ')}
            </nav>
          </aside>

          <article class="min-w-0 max-w-3xl">
            <div class="callout mb-10" style="--accent: ${style.accent}">
              <div class="callout-title">Key takeaways</div>
              <ul class="check-list mt-3" style="--accent: ${style.accent}">${post.takeaways.map((t) => `<li class="text-tagline-2">${t}</li>`).join('')}</ul>
            </div>

            <div class="prose-ink" data-article>
${html}
            </div>

            ${
              sources.length || extraSources.length
                ? `<div class="mt-14 rounded-2xl border border-secondary/[0.08] bg-secondary/[0.025] p-6">
              <h2 class="text-tagline-2 font-semibold text-secondary">Sources</h2>
              <ol class="mt-4 list-decimal space-y-2 pl-5 text-tagline-3 text-secondary/55 marker:text-secondary/30">
                ${[...sources, ...extraSources]
                  .map((s) => `<li>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener" class="underline decoration-white/20 underline-offset-4 hover:text-primary-600">${esc(s.name)}</a>` : esc(s.name)}${s.year ? `, ${s.year}` : ''}</li>`)
                  .join('\n                ')}
              </ol>
              <p class="mt-4 text-tagline-3 text-secondary/35">Figures are reported as published by each source. Forecasts are the source’s predictions, not guarantees. We review this article regularly; spot something outdated? <a href="mailto:${SITE.email}" class="underline underline-offset-4 hover:text-primary-600">Tell us</a>.</p>
            </div>`
                : ''
            }

            <div class="mt-8 flex flex-col gap-5 rounded-2xl border border-secondary/[0.08] bg-secondary/[0.03] p-6 sm:flex-row sm:items-center">
              <img src="${author.photo}" alt="${author.name}" width="64" height="64" class="size-16 shrink-0 rounded-2xl object-cover object-top" />
              <div class="flex-1">
                <p class="text-tagline-2 font-semibold text-secondary">Written by ${author.name}, ${author.role}</p>
                <p class="text-tagline-3 mt-1 text-secondary/60">${author.bio}</p>
              </div>
              <a href="/book-meeting.html" class="cta cta-md cta-coral shrink-0">Book a free call${arrow()}</a>
            </div>
          </article>

          <aside class="hidden xl:block">
            <div class="sticky top-28 space-y-3">
              <p class="text-tagline-3 font-semibold tracking-[0.14em] text-secondary/40 uppercase">Related services</p>
              ${post.services
                .map((s) => {
                  const r = findService(s);
                  return `<a href="${serviceUrl(s)}" class="group flex items-start gap-3 rounded-xl border border-secondary/[0.08] bg-secondary/[0.03] p-3 transition hover:border-secondary/20 hover:bg-secondary/[0.06]"><span class="icon-tile size-9 rounded-lg" style="--accent: ${r.accent}">${icon(r.icon, 'size-4')}</span><span class="text-tagline-3 font-medium text-secondary/80 group-hover:text-secondary">${r.name}</span></a>`;
                })
                .join('\n              ')}
            </div>
          </aside>
        </div>
      </div>
    </section>

    ${post.faqs?.length ? faqBlock({ faqs: post.faqs, title: 'Frequently asked <span class="text-gradient-teal">questions</span>', lead: 'Quick answers to the questions this topic raises most often.' }) : ''}

    <section class="section-base section-pad section-seam">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: 'Keep reading', title: 'Related <span class="text-gradient-teal">articles</span>' })}
        <div class="grid gap-4 md:grid-cols-3">${related.map(postCard).join('')}</div>
      </div>
    </section>`;

  const title = post.metaTitle ?? `${post.title} | Voxil AI`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE.url}${path}#article`,
    headline: plain(post.title),
    description: post.description,
    image: SITE.ogImage,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role, image: `${SITE.url}${author.photo}`, knowsAbout: author.knowsAbout, worksFor: { '@id': ORG_ID }, url: `${SITE.url}/about.html` },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${path}` },
    articleSection: post.category,
    keywords: post.keywords?.join(', '),
    wordCount: plain(post.body).split(' ').length,
    inLanguage: 'en',
    ...(sources.length ? { citation: sources.map((s) => ({ '@type': 'CreativeWork', name: s.name, ...(s.url ? { url: s.url } : {}) })) } : {}),
  };

  return page({
    path,
    title,
    description: post.description,
    body,
    schema: [article, breadcrumbSchema(crumbs), ...(post.faqs?.length ? [faqSchema(post.faqs)] : [])],
  });
};

export const renderBlogHub = (posts) => {
  const path = '/blog/';
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: path },
  ];
  const sorted = [...posts].sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date));
  const featured = sorted.filter((p) => p.featured).slice(0, 2);
  const categories = Object.keys(CATEGORY_STYLE);

  const body = `
    <section class="page-hero">
      <span class="grid-field" aria-hidden="true"></span>
      <span class="orb -top-28 left-[12%] size-[400px] animate-drift" style="--orb: #0f9f93; --orb-opacity: 0.3" aria-hidden="true"></span>
      <span class="orb top-1/4 -right-20 size-[360px] animate-drift-slow" style="--orb: #ff6b35; --orb-opacity: 0.2" aria-hidden="true"></span>
      <div class="main-container relative z-10">
        ${crumbsNav(crumbs)}
        <div class="mx-auto mt-8 max-w-3xl text-center">
          ${eyebrow('Voxil AI Blog')}
          <h1 data-reveal class="text-heading-4 sm:text-heading-3 lg:text-heading-2 font-semibold tracking-tight text-secondary">AI statistics, guides & <span class="text-gradient-teal">honest comparisons</span></h1>
          <p data-reveal class="text-tagline-1 mx-auto mt-5 max-w-2xl text-secondary/60 md:text-lg">Research-backed articles on AI voice agents, chatbots, automation and GoHighLevel, written by the team that builds them, with every statistic sourced.</p>
          <div data-reveal class="mt-8 flex flex-wrap justify-center gap-2">
            ${categories.map((c) => `<a href="#${slugify(c)}" class="chip-link">${icon(CATEGORY_STYLE[c].icon, 'size-4 text-primary-600')}<span>${c}</span></a>`).join('')}
            <a href="/resources/ai-statistics-2026/" class="chip-link chip-link--accent"><span>AI Statistics 2026 hub</span>${arrow('size-3.5')}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad-sm">
      <div class="main-container relative z-10">
        <div class="grid gap-4 md:grid-cols-2">${featured.map(postCard).join('')}</div>
      </div>
    </section>

    ${categories
      .map((c) => {
        const list = sorted.filter((p) => p.category === c);
        if (!list.length) return '';
        return `
    <section class="section-base section-pad-sm section-seam" id="${slugify(c)}">
      <div class="main-container relative z-10">
        ${sectionHead({ eyebrowText: c, dot: CATEGORY_STYLE[c].accent, title: c === 'Statistics' ? 'AI <span class="text-gradient-teal">statistics</span>' : c === 'Guides' ? 'Practical <span class="text-gradient-warm">guides</span>' : c === 'Comparisons' ? 'Honest <span class="text-gradient-sky">comparisons</span>' : 'Pricing <span class="text-gradient-teal">breakdowns</span>' })}
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">${list.map(postCard).join('')}</div>
      </div>
    </section>`;
      })
      .join('')}`;

  const title = 'AI Automation Blog: Statistics, Guides & Comparisons | Voxil AI';
  const description = 'Research-backed articles on AI voice agents, chatbots, automation, GoHighLevel and AI statistics for 2026, every figure sourced.';
  return page({
    path,
    title,
    description,
    body,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${SITE.url}${path}#blog`,
        name: 'Voxil AI Blog',
        url: `${SITE.url}${path}`,
        description,
        publisher: { '@id': ORG_ID },
        blogPost: sorted.map((p) => ({ '@type': 'BlogPosting', headline: plain(p.title), url: `${SITE.url}/blog/${p.slug}/`, datePublished: p.date, dateModified: p.updated ?? p.date })),
      },
      breadcrumbSchema(crumbs),
    ],
  });
};


