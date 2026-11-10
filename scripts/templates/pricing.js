// /pricing/: Voxil AI's published AI receptionist plans (USD). Order follows the
// offer chain: problem, consequences, output, plans (service + offer), proof of
// value, guarantee, process, fit, comparison, agencies, FAQ, call to action.
// Copy rules: plain language (no "CRM", "workflows", "AI agents"), every price
// as HTML text, no partner prices, no compliance claims.
import { arrow, breadcrumbSchema, checkList, dataTable, faqBlock, faqSchema, hero, page, sectionHead, webPageSchema } from '../lib/ui.js';

const link = (href, text) => `<a href="${href}">${text}</a>`;
const AUDIT_URL = '/book-meeting.html?source=pricing';
const PARTNER_URL = '/book-meeting.html?source=pricing-agency';

const auditButton = (cta) => `<a href="${AUDIT_URL}" class="cta cta-lg cta-coral" data-cta="${cta}">Get a free missed-lead audit${arrow()}</a>`;

// Plans table: plans as columns so they compare side by side.
const PLANS = {
  head: ['', 'Starter', 'Never-Miss-A-Job <span class="pricing-badge">Most popular</span>', 'AI Voice Receptionist'],
  rows: [
    ['Best for', 'Solo operators', 'Trades and dental clinics', 'Businesses that want every call answered'],
    ['Setup (one time)', '$200', 'Trades: $497<br />Dental clinics: $697', '$697'],
    ['Monthly', '$97 per month', 'Trades: $197 per month<br />Dental clinics: $297 per month', '$297 per month'],
    ['Voice calls', 'Not included', 'Not included', '$0.40 per minute of calls the AI answers'],
    [
      'What’s included',
      'Missed-call text-back, booking link, appointment reminders',
      'Everything in Starter, plus quote follow-ups (day 1, 3 and 7), review requests, Facebook and Instagram message replies, and a weekly report',
      'Everything in Never-Miss-A-Job, plus an AI that answers calls, asks the key questions and books the job',
    ],
    ['Live in', '7 days', '7 days', '10 days'],
  ],
};

export const renderPricing = () => {
  const path = '/pricing/';
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: path },
  ];
  const title = 'AI Receptionist Pricing: Setup, Monthly & Per-Minute Costs';
  const description = 'See exactly what an AI receptionist costs: setup fee, monthly fee and per-minute voice pricing. Live in 7 days with a 30-day guarantee.';

  const faqs = [
    { q: 'How much does an AI receptionist cost?', a: 'Plans start at a $200 setup fee and $97 per month. Never-Miss-A-Job is $497 setup and $197 per month for trades, or $697 setup and $297 per month for dental clinics. The AI Voice Receptionist is $697 setup, $297 per month, plus $0.40 per minute of calls the AI answers. All prices are in USD.' },
    { q: 'Are there setup fees or contracts?', a: 'Yes, there is a one-time setup fee: $200, $497, or $697 depending on the plan. Ask us about terms on the audit call.' },
    { q: 'How much per minute for voice calls?', a: 'Voice calls cost $0.40 per minute, only while the AI is on a call. For example, 150 calls of 2 minutes each is 300 minutes, or $120 a month. Missed-call texts and booking links do not use call minutes.' },
    { q: 'AI receptionist vs answering service: which costs less?', a: 'For most small businesses an AI receptionist costs less, because you pay a flat monthly price plus only the minutes the AI is on a call, with no monthly minimums. It also books jobs straight into your calendar instead of just taking a message.' },
    { q: 'Is an AI receptionist worth it for a small business?', a: 'Usually yes, if you get calls or messages every day and one job or patient is worth hundreds of dollars. One recovered job usually covers the month. It is not a fit if you get almost no enquiries.' },
    { q: 'What if I want to cancel?', a: 'Ask us about terms on the audit call. If we don’t capture extra leads in your first 30 days, you don’t pay for month two.' },
  ];

  const body = `
    ${hero({
      crumbs,
      eyebrowText: 'Pricing',
      h1: 'Simple pricing for an AI receptionist that <span class="text-gradient-teal">never misses a lead</span>.',
      lead: 'One setup fee and one monthly price. Live in 7 days. If it isn’t, we keep working free until it is.<span class="mt-3 block text-tagline-2 font-semibold text-secondary">No missed call. No lost job.</span>',
      answer: '<strong>AI receptionist pricing</strong> starts at a <strong>$200 setup fee and $97 per month</strong>. Our most popular plan is $497 setup and $197 per month for trades. The AI Voice Receptionist is $697 setup, $297 per month, plus $0.40 per minute of calls the AI answers.',
      answerLabel: 'Quick answer',
      facts: [
        { label: 'From', value: '$97 per month' },
        { label: 'Setup', value: 'From $200' },
        { label: 'Live in', value: '7 days' },
        { label: 'Guarantee', value: '30 days' },
      ],
      primary: 'Get a free missed-lead audit',
      primaryHref: AUDIT_URL,
      primaryCta: 'pricing_hero',
      secondary: { label: 'See the plans', href: '#plans' },
    })}

    <section class="section-base section-pad section-seam" id="problem">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl">
          ${sectionHead({ eyebrowText: 'The problem', title: 'Every missed call is a job for someone else' })}
          <div class="prose-ink">
            <p>You’re busy on the job. The phone rings, it goes to voicemail, and the customer doesn’t leave a message. They call the next business on Google, and that business gets the job.</p>
            <p>It adds up fast. <strong>Miss 8 calls a month at $400 a job and $3,200 goes to a competitor.</strong></p>
            <p>Want your own number? Try the ${link('/resources/lead-loss-calculator/', 'Missed Call Calculator')}.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad section-seam" id="what-you-get">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl">
          ${sectionHead({ eyebrowText: 'What you get', title: 'More jobs booked, less time on the phone' })}
          <div data-reveal>${checkList([
            'More booked jobs, because every caller gets an answer',
            'Faster replies to calls and messages, day and night',
            'Fewer no-shows, with automatic reminders',
            'More reviews, with automatic review requests after each job',
            'Your time back, because you’re not chasing calls and messages',
          ])}</div>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam" id="plans">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-5xl">
          ${sectionHead({ eyebrowText: 'Plans', title: 'Pick the plan that fits your business', lead: 'All prices are in USD. Quotes in AUD and GBP are available on request.' })}
          <div class="pricing-table">${dataTable({ caption: 'AI receptionist plans and prices in USD', ...PLANS })}</div>
          <p data-reveal class="text-tagline-2 mt-6 text-secondary/75">Missed-call texts and booking links do not use call minutes. You only pay per minute while the AI is on a call. Customised voices, cloned voices and extra languages are quoted per project.</p>
          <p data-reveal class="text-tagline-2 mt-3 text-secondary/75">For dental clinics, the system handles booking, reminders and enquiry follow-up only. The AI Voice Receptionist is not available with HIPAA compliance.</p>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad section-seam" id="per-minute">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl">
          ${sectionHead({ eyebrowText: 'Voice calls', title: 'What voice calls cost per month', lead: 'AI Voice Receptionist only. $0.40 per minute of calls the AI answers.' })}
          ${dataTable({
            caption: 'Example monthly voice call costs at $0.40 per minute',
            head: ['Call minutes per month', 'Cost per month'],
            rows: [
              ['100 minutes', '$40'],
              ['300 minutes', '$120'],
              ['1,200 minutes', '$480'],
            ],
          })}
          <p data-reveal class="text-tagline-2 mt-4 text-secondary/75">Example: 150 calls of 2 minutes each is 300 minutes, or $120 a month.</p>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam" id="value">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl text-center">
          <p data-reveal class="text-heading-5 sm:text-heading-4 font-bold tracking-tight text-secondary">One recovered job usually covers the month.</p>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad section-seam" id="guarantee">
      <div class="main-container relative z-10">
        <div data-reveal class="pricing-guarantee mx-auto max-w-3xl">
          <p class="text-tagline-3 font-semibold tracking-[0.12em] text-primary-700 uppercase">Our guarantee</p>
          <p class="text-heading-6 mt-3 font-semibold text-secondary">Live in 7 days from receiving your onboarding form, or we keep working free until it is. If we don’t capture extra leads in your first 30 days, you don’t pay for month two.</p>
          <p class="text-tagline-2 mt-4 text-secondary/75"><strong>What counts as a captured lead:</strong> a missed caller or message that replied and moved toward a booking.</p>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam" id="how-it-works">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl">
          ${sectionHead({ eyebrowText: 'How it works', title: 'From sign-up to live in 7 days' })}
          <ol class="pricing-timeline">
            <li><span>Day 1</span>You fill in a short onboarding form (10 minutes of your time).</li>
            <li><span>Days 2 to 4</span>We build and brand everything.</li>
            <li><span>Day 5</span>Full test and demo.</li>
            <li><span>Day 7</span>You’re live.</li>
            <li><span>Days 8 to 30</span>We monitor, adjust and send you a weekly report.</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad section-seam" id="fit">
      <div class="main-container relative z-10">
        <div class="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            ${sectionHead({ eyebrowText: 'Who it’s for', title: 'Best for' })}
            <div data-reveal>${checkList(['Owner-run businesses that get calls or messages every day', 'Businesses where one job or patient is worth hundreds of dollars or more'])}</div>
          </div>
          <div>
            ${sectionHead({ eyebrowText: 'Not a fit', title: 'Not a fit for' })}
            <div data-reveal>${checkList(['Businesses with almost no enquiries', 'Anyone who only wants a one-off website'])}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-base section-pad section-seam" id="compare">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl">
          ${sectionHead({ eyebrowText: 'Compare', title: 'AI receptionist vs part-time receptionist vs answering service', lead: 'How each option charges you, and what you get for it.' })}
          ${dataTable({
            caption: 'How an AI receptionist, a part-time receptionist and an answering service compare',
            head: ['', 'AI receptionist', 'Part-time receptionist', 'Answering service'],
            rows: [
              ['How you pay', 'Setup fee + monthly price (+ per minute for voice calls)', 'Hourly wage, taxes, benefits', 'Per minute or per call, often with a monthly minimum'],
              ['Hours covered', '24/7', 'Their shift only', '24/7'],
              ['Busy periods', 'Many calls at once', 'One call at a time', 'Depends on staffing'],
              ['Books appointments', 'Yes, into your calendar', 'Yes', 'Usually takes a message'],
              ['Cost when it’s quiet', 'Monthly price; voice minutes only when used', 'Paid for the shift', 'Monthly minimums'],
            ],
          })}
          <p data-reveal class="text-tagline-2 mt-6 text-secondary/75">Read the full ${link('/blog/ai-receptionist-vs-answering-service/', 'AI receptionist vs answering service comparison')}.</p>
        </div>
      </div>
    </section>

    <section class="section-soft section-pad section-seam" id="agencies">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-3xl">
          ${sectionHead({ eyebrowText: 'For agencies', title: 'For agencies' })}
          <p data-reveal class="text-tagline-1 text-secondary/75">Run an agency? We build and run this whole system under your brand, for your clients, and stay behind the scenes. Partner pricing is shared on a call.</p>
          <div data-reveal class="mt-6"><a href="${PARTNER_URL}" class="cta cta-lg cta-ghost" data-cta="pricing_agency">Book a partner call${arrow()}</a></div>
        </div>
      </div>
    </section>

    ${faqBlock({ faqs, title: 'Pricing <span class="text-gradient-teal">FAQ</span>', lead: 'Straight answers before you book your audit.' })}

    <section class="section-base section-pad" id="get-started">
      <div class="main-container relative z-10">
        <div class="mx-auto max-w-2xl text-center">
          <h2 data-reveal class="text-heading-5 sm:text-heading-4 lg:text-heading-3 font-bold tracking-tight text-secondary">See how many leads you’re missing</h2>
          <p data-reveal class="text-tagline-1 mt-4 text-secondary/75">Book a free missed-lead audit. We’ll look at your calls and messages and show you where jobs are slipping away.</p>
          <div data-reveal class="mt-8 flex justify-center">${auditButton('pricing_bottom')}</div>
        </div>
      </div>
    </section>`;

  return page({
    path,
    title,
    description,
    body,
    sharedCta: false,
    schema: [webPageSchema({ path, title, description }), breadcrumbSchema(crumbs), faqSchema(faqs)],
  });
};
