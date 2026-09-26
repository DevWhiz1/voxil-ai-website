// Site registry, the single source of truth for every generated URL.
// Navigation, footer, hub pages, breadcrumbs, internal links and the sitemap
// all read from here, so a page added here is linked everywhere at once.

export const SITE = {
  url: 'https://voxilai.tech',
  name: 'Voxil AI',
  email: 'info@voxilai.tech',
  logo: 'https://voxilai.tech/images/shared/main-logo.svg',
  ogImage: 'https://res.cloudinary.com/dxrr3gb42/image/upload/v1783155174/voxil_zwnian.png',
  sameAs: [
    'https://www.facebook.com/share/1Ec6E4n7f7/',
    'https://www.instagram.com/voxilai/',
    'https://www.linkedin.com/company/voxilai/',
  ],
  // Shown as "Last updated" on generated pages and used as dateModified.
  updated: '2026-09-26',
};

// ---------------------------------------------------------------------------
// Team. Shown on the home and about pages and credited as blog authors.
// ---------------------------------------------------------------------------
export const TEAM = {
  'abdul-moeez': {
    name: 'Abdul Moeez',
    role: 'AI Automation Expert',
    photo: '/abdulmoeez.jpeg',
    bio: 'Abdul designs and builds the AI voice agents, chatbots and automation systems Voxil AI ships: from conversation design and integrations to testing on real calls.',
    knowsAbout: ['AI voice agents', 'AI chatbots', 'Vapi', 'Retell AI', 'Workflow automation', 'n8n', 'LLM integrations'],
  },
  'ahmad-ali': {
    name: 'Ahmad Ali',
    role: 'GoHighLevel Specialist',
    photo: '/ahmadali.jpeg',
    bio: 'Ahmad builds and fixes GoHighLevel accounts: pipelines, workflows, funnels, snapshots and GHL AI, set up so teams can actually run them.',
    knowsAbout: ['GoHighLevel', 'GHL workflows', 'GHL snapshots', 'CRM automation', 'Funnels'],
  },
};

// ---------------------------------------------------------------------------
// Services, grouped exactly as they appear in the navbar mega menu.
// `short` is the one-line card description used on hubs and related links.
// ---------------------------------------------------------------------------
export const SERVICE_GROUPS = [
  {
    key: 'voice',
    title: 'AI Voice & Calls',
    accent: '#ff7a3d',
    icon: 'phone',
    services: [
      { slug: 'ai-calling-bots', name: 'AI Calling Bots', icon: 'signal', short: 'Outbound and inbound calling bots built on Vapi and Retell AI.' },
      { slug: 'ai-voice-agents', name: 'AI Voice Agents', icon: 'mic', short: 'Natural phone agents that answer, qualify and book around the clock.' },
      { slug: 'ai-receptionist', name: 'AI Receptionist', icon: 'user', short: 'A front desk that never misses a call, books and routes like your best hire.' },
      { slug: 'ai-phone-answering', name: 'AI Phone Answering', icon: 'phone', short: 'Every call answered in one ring, after hours, weekends and peaks.' },
      { slug: 'ai-appointment-booking', name: 'AI Appointment Booking', icon: 'calendar', short: 'Voice and chat agents that book straight into your live calendar.' },
      { slug: 'ai-sdr-system', name: 'AI SDR System', icon: 'trending', short: 'An AI sales development rep that qualifies and books meetings for closers.' },
      { slug: 'vapi-ai-integration', name: 'Vapi AI Integration', icon: 'code', short: 'Production Vapi assistants wired to your CRM, calendar and tools.' },
      { slug: 'retell-ai-setup', name: 'Retell AI Setup', icon: 'sliders', short: 'Retell AI agents configured, tested and connected to your stack.' },
      { slug: 'ai-customer-support', name: 'AI Customer Support', icon: 'question', short: 'Voice and chat support that resolves routine tickets and escalates cleanly.' },
    ],
  },
  {
    key: 'automation',
    title: 'AI & Automation',
    accent: '#2fc4b6',
    icon: 'sparkles',
    services: [
      { slug: 'ai-chatbots', name: 'AI Chatbots', icon: 'chat', short: 'Website, WhatsApp and in-app chatbots trained on your business.' },
      { slug: 'ai-chatbot-developer', name: 'AI Chatbot Developer', icon: 'code', short: 'Hire a dedicated chatbot developer for custom LLM builds.' },
      { slug: 'whatsapp-automation', name: 'WhatsApp Automation', icon: 'bubble', short: 'WhatsApp Business API bots for leads, bookings and support.' },
      { slug: 'gohighlevel-ai', name: 'GoHighLevel AI', icon: 'sparkles', short: 'Conversation AI, Voice AI and AI workflows inside GoHighLevel.' },
      { slug: 'ai-lead-generation', name: 'AI Lead Generation', icon: 'funnel', short: 'AI systems that find, enrich, contact and qualify new leads.' },
      { slug: 'ai-follow-up-system', name: 'AI Follow-Up System', icon: 'refresh', short: 'Multi-channel follow-up that never forgets a lead or a quote.' },
      { slug: 'ai-automation-consultant', name: 'AI Automation Consultant', icon: 'briefcase', short: 'Strategy, audits and a roadmap for automating your operations.' },
      { slug: 'workflow-automation', name: 'Workflow Automation', icon: 'sliders', short: 'Remove repetitive work across sales, ops, finance and support.' },
      { slug: 'marketing-automation', name: 'Marketing Automation', icon: 'megaphone', short: 'Campaigns, nurture and attribution that run themselves.' },
      { slug: 'email-sms-marketing', name: 'Email & SMS Marketing', icon: 'mail', short: 'Compliant email and SMS sequences that convert and re-engage.' },
    ],
  },
  {
    key: 'ghl',
    title: 'GoHighLevel',
    accent: '#38bdf8',
    icon: 'layers',
    services: [
      { slug: 'ghl-expert', name: 'GHL Expert', icon: 'star', short: 'Certified-level GoHighLevel builds, fixes and automation.' },
      { slug: 'ghl-consultant', name: 'GHL Consultant', icon: 'briefcase', short: 'Strategy and architecture for agencies and businesses on GHL.' },
      { slug: 'ghl-setup', name: 'GHL Setup', icon: 'rocket', short: 'Complete GoHighLevel account setup, done right the first time.' },
      { slug: 'ghl-support', name: 'GHL Support', icon: 'question', short: 'Ongoing GoHighLevel support, fixes and monthly improvements.' },
      { slug: 'ghl-migration', name: 'GHL Migration', icon: 'swap', short: 'Move from HubSpot, ClickFunnels, Kajabi and more into GHL.' },
      { slug: 'ghl-integration', name: 'GHL Integration', icon: 'link', short: 'Connect GoHighLevel to any tool via API, webhooks or middleware.' },
      { slug: 'ghl-snapshot', name: 'GHL Snapshot', icon: 'copy', short: 'Custom, reusable GoHighLevel snapshots for any niche.' },
      { slug: 'ghl-white-label-saas', name: 'GHL White Label SaaS', icon: 'tag', short: 'Launch your own branded SaaS on GoHighLevel SaaS mode.' },
      { slug: 'ghl-courses-onboarding', name: 'GHL Courses & Onboarding', icon: 'academic', short: 'Memberships, courses and client onboarding built in GHL.' },
      { slug: 'ghl-virtual-assistant', name: 'GHL Virtual Assistant', icon: 'user', short: 'A dedicated GHL assistant for daily builds and admin.' },
    ],
  },
  {
    key: 'crm',
    title: 'CRM, Funnels & Web',
    accent: '#6adfd3',
    icon: 'database',
    services: [
      { slug: 'crm-setup', name: 'CRM Setup', icon: 'database', short: 'A CRM configured around how your team actually sells.' },
      { slug: 'crm-automation', name: 'CRM Automation', icon: 'bolt', short: 'Pipelines that update, assign and follow up on their own.' },
      { slug: 'crm-migration', name: 'CRM Migration', icon: 'swap', short: 'Clean, zero-loss migration between CRMs.' },
      { slug: 'make-automation', name: 'Make.com Automation', icon: 'puzzle', short: 'Robust Make.com scenarios with error handling built in.' },
      { slug: 'zapier-automation', name: 'Zapier Automation', icon: 'bolt', short: 'Zapier workflows that are documented, monitored and cheap to run.' },
      { slug: 'n8n-automation', name: 'N8N Automation', icon: 'server', short: 'Self-hosted n8n workflows and AI agents you fully own.' },
      { slug: 'api-integration', name: 'API Integration', icon: 'code', short: 'Custom API integrations where no-code tools stop.' },
      { slug: 'sales-funnel-builder', name: 'Sales Funnel Builder', icon: 'funnel', short: 'High-converting sales funnels with automation behind them.' },
      { slug: 'lead-generation-funnel', name: 'Lead Generation Funnel', icon: 'trending', short: 'Lead magnets, quizzes and booking funnels that fill pipelines.' },
      { slug: 'website-design', name: 'Website Design', icon: 'desktop', short: 'Fast, SEO-ready websites designed to convert visitors.' },
    ],
  },
];

// Services that exist as pages but sit outside the four nav columns.
export const EXTRA_SERVICES = [
  { slug: 'gohighlevel-automation', name: 'GoHighLevel Automation', icon: 'layers', accent: '#38bdf8', group: 'ghl', short: 'End-to-end automation of your pipeline inside GoHighLevel.' },
  { slug: 'seo-paid-ads', name: 'SEO & Paid Ads', icon: 'search', accent: '#2fc4b6', group: 'automation', short: 'SEO, AEO and paid campaigns that feed your automated funnel.' },
  { slug: 'ai-saas-development', name: 'AI SaaS Development', icon: 'layers', accent: '#38bdf8', group: 'crm', short: 'Full AI product builds, UI, LLM, auth, billing and infra.' },
  { slug: 'lead-capture-system', name: 'Lead Capture Systems', icon: 'bolt', accent: '#6adfd3', group: 'automation', short: 'Intake, scoring and routing so no enquiry slips through.' },
];

export const ALL_SERVICES = [
  ...SERVICE_GROUPS.flatMap((g) => g.services.map((s) => ({ ...s, group: g.key, accent: g.accent, groupTitle: g.title }))),
  ...EXTRA_SERVICES.map((s) => ({ ...s, groupTitle: SERVICE_GROUPS.find((g) => g.key === s.group).title })),
];

export const serviceUrl = (slug) => `/services/${slug}/`;
export const findService = (slug) => {
  const s = ALL_SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
};

// ---------------------------------------------------------------------------
// Locations
// ---------------------------------------------------------------------------
export const LOCATION_GROUPS = [
  {
    key: 'us-east',
    title: 'US East',
    locations: [
      { slug: 'new-york', name: 'New York' },
      { slug: 'philadelphia', name: 'Philadelphia' },
      { slug: 'charlotte', name: 'Charlotte' },
      { slug: 'atlanta', name: 'Atlanta' },
      { slug: 'miami', name: 'Miami' },
      { slug: 'nashville', name: 'Nashville' },
    ],
  },
  {
    key: 'us-central',
    title: 'US Central',
    locations: [
      { slug: 'chicago', name: 'Chicago' },
      { slug: 'dallas', name: 'Dallas' },
      { slug: 'houston', name: 'Houston' },
      { slug: 'san-antonio', name: 'San Antonio' },
      { slug: 'austin', name: 'Austin' },
    ],
  },
  {
    key: 'us-west',
    title: 'US West',
    locations: [
      { slug: 'los-angeles', name: 'Los Angeles' },
      { slug: 'san-francisco', name: 'San Francisco' },
      { slug: 'san-jose', name: 'San Jose' },
      { slug: 'san-diego', name: 'San Diego' },
      { slug: 'seattle', name: 'Seattle' },
      { slug: 'phoenix', name: 'Phoenix' },
      { slug: 'denver', name: 'Denver' },
    ],
  },
  {
    key: 'international',
    title: 'International',
    locations: [
      { slug: 'united-kingdom', name: 'United Kingdom' },
      { slug: 'dubai-uae', name: 'Dubai / UAE' },
      { slug: 'canada', name: 'Canada' },
      { slug: 'australia', name: 'Australia' },
      { slug: 'pakistan', name: 'Pakistan' },
    ],
  },
];

export const ALL_LOCATIONS = LOCATION_GROUPS.flatMap((g) =>
  g.locations.map((l) => ({ ...l, group: g.key, groupTitle: g.title }))
);
export const locationUrl = (slug) => `/locations/${slug}/`;

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------
export const INDUSTRIES = [
  { slug: 'real-estate', name: 'Real Estate', icon: 'home', accent: '#2fc4b6' },
  { slug: 'fitness-gyms', name: 'Fitness & Gym', icon: 'fire', accent: '#ff7a3d' },
  { slug: 'insurance', name: 'Insurance', icon: 'shield', accent: '#38bdf8' },
  { slug: 'law-firms', name: 'Legal / Law Firm', icon: 'scale', accent: '#6adfd3' },
  { slug: 'home-services', name: 'Home Services', icon: 'wrench', accent: '#ff7a3d' },
  { slug: 'medical-clinics', name: 'Medical / Clinics', icon: 'heart', accent: '#2fc4b6' },
  { slug: 'med-spas', name: 'Med Spa', icon: 'sparkles', accent: '#38bdf8' },
  { slug: 'roofing', name: 'Roofing', icon: 'building', accent: '#6adfd3' },
  { slug: 'solar', name: 'Solar', icon: 'sun', accent: '#ff7a3d' },
  { slug: 'salons-beauty', name: 'Salon & Beauty', icon: 'scissors', accent: '#2fc4b6' },
  { slug: 'hvac', name: 'HVAC', icon: 'bolt', accent: '#38bdf8' },
  { slug: 'chiropractic', name: 'Chiropractic', icon: 'user', accent: '#6adfd3' },
];
export const industryUrl = (slug) => `/industries/${slug}/`;

// ---------------------------------------------------------------------------
// Free resources
// ---------------------------------------------------------------------------
export const RESOURCES = [
  { slug: 'lead-loss-calculator', name: 'Lead Loss Calculator', icon: 'calculator', accent: '#ff7a3d', short: 'See how much revenue missed calls and slow follow-up cost you each month.' },
  { slug: 'ai-statistics-2026', name: 'AI Statistics 2026', icon: 'chart', accent: '#2fc4b6', short: 'Sourced AI adoption, customer-service, agent and speed-to-lead statistics.' },
  { slug: 'ghl-setup-checklist', name: 'GHL Setup Checklist', icon: 'clipboard', accent: '#38bdf8', short: 'The interactive checklist we use to launch every GoHighLevel account.' },
  { slug: 'media-kit', name: 'Media Kit', icon: 'photo', accent: '#6adfd3', short: 'Brand assets, boilerplate and facts for press and partners.' },
];
export const resourceUrl = (slug) => `/resources/${slug}/`;

// ---------------------------------------------------------------------------
// For Agencies: the white label partner hub and one page per partner model.
// ---------------------------------------------------------------------------
export const AGENCY_PAGES = [
  { slug: 'white-label-fulfillment', name: 'Done-for-you fulfillment', icon: 'rocket', accent: '#0f9f93', short: 'You sell it, we build it under your brand, inside your client’s account.' },
  { slug: 'dedicated-ghl-va', name: 'Dedicated GHL assistant', icon: 'user', accent: '#0284c7', short: 'A GoHighLevel-trained assistant working only your accounts, on your schedule.' },
  { slug: 'white-label-support-desk', name: 'White label support desk', icon: 'question', accent: '#ff6b35', short: 'We handle your clients’ CRM, funnel and automation tickets in your name.' },
  { slug: 'per-project-overflow', name: 'Per-project overflow', icon: 'layers', accent: '#6adfd3', short: 'One build, one fixed price, no retainer. For the month you sold too much.' },
  { slug: 'white-label-ai-agents', name: 'White label AI agents', icon: 'mic', accent: '#2fc4b6', short: 'Custom AI voice and chat agents your agency resells as its own.' },
];
export const agencyUrl = (slug) => (slug ? `/for-agencies/${slug}/` : '/for-agencies/');
