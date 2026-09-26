// GoHighLevel, service page content.
const link = (href, text) => `<a href="${href}" class="text-primary-600 underline underline-offset-4">${text}</a>`;

const GHL_STACK = ['GoHighLevel', 'LeadConnector', 'Stripe', 'Twilio / LC Phone', 'Mailgun / LC Email', 'Google Calendar', 'Outlook', 'Facebook', 'Instagram', 'WhatsApp', 'Google Business Profile', 'QuickBooks', 'Zapier', 'Make.com', 'n8n', 'Vapi', 'Retell AI'];

export default {
  'ghl-expert': {
    title: 'GoHighLevel Expert for Hire | GHL Builds, Fixes & Automation | Voxil AI',
    description:
      'Hire a GoHighLevel expert to build pipelines, workflows, funnels, calendars and AI automations, or fix a messy GHL account. Fast turnaround, clean builds, full documentation.',
    h1: 'The GoHighLevel expert your account <span class="text-gradient-sky">has been waiting for</span>',
    lead: 'Pipelines that reflect reality, workflows that don’t double-fire, funnels that convert and AI that books, built cleanly and documented so your team can run it.',
    answer:
      'A <strong>GoHighLevel expert</strong> is a specialist in the GoHighLevel (GHL) all-in-one CRM and marketing platform. They design and build pipelines, workflows, funnels, websites, calendars, forms, reputation management and AI features, integrate GHL with other tools, and troubleshoot issues like broken automations, deliverability and phone setup.',
    facts: [
      { label: 'Turnaround', value: 'Days, not months' },
      { label: 'Scope', value: 'Build · Fix · Automate' },
      { label: 'Docs', value: 'Every build' },
      { label: 'Agency-friendly', value: 'White-label' },
    ],
    pills: ['Workflows', 'Pipelines', 'Funnels', 'AI & Voice'],
    whatIs: {
      title: 'GoHighLevel can do almost anything. That’s the problem.',
      paras: [
        'GHL’s flexibility means there are ten ways to build every automation, and nine of them create problems later: duplicate messages, contacts stuck in stages, workflows nobody understands. An expert builds it the tenth way.',
        'We’ve built and repaired enough GoHighLevel accounts to know the patterns that scale: naming conventions, trigger hygiene, custom-field design, pipeline logic and AI configuration that your team can maintain after we leave.',
      ],
    },
    included: [
      'Account audit and fix list',
      'Pipelines, stages and opportunity rules',
      'Workflows with clean triggers and goals',
      'Funnels, forms, surveys and calendars',
      'Conversation AI and Voice AI setup',
      'Loom walkthroughs and written docs',
    ],
    features: [
      { icon: 'sliders', title: 'Workflow architecture', desc: 'Clean triggers, goals and branching, no duplicate or runaway automations.' },
      { icon: 'funnel', title: 'Funnels & sites', desc: 'Conversion-focused funnels and sites built natively in GHL.' },
      { icon: 'calendar', title: 'Calendars', desc: 'Round-robin, class, service and collective calendars configured correctly.' },
      { icon: 'sparkles', title: 'AI features', desc: 'Conversation AI, Voice AI and AI workflow steps trained on your offer.' },
      { icon: 'star', title: 'Reputation', desc: 'Automated review requests and responses to grow your rating.' },
      { icon: 'wrench', title: 'Troubleshooting', desc: 'Deliverability, LC Phone, A2P, integrations and broken workflows fixed.' },
    ],
    steps: [
      { title: 'Audit or brief', desc: 'We review your account or map your requirements.' },
      { title: 'Plan', desc: 'A clear build list with fixed price and timeline.' },
      { title: 'Build', desc: 'Built in your account with testing at every step.' },
      { title: 'Hand over', desc: 'Walkthrough videos, documentation and support window.' },
    ],
    fit: [
      'Businesses with a GHL account that grew messy',
      'Agencies needing an expert build partner for client accounts',
      'Owners who bought GHL but never finished setting it up',
      'Teams adding AI to an existing GHL setup',
    ],
    industries: ['med-spas', 'roofing', 'fitness-gyms', 'real-estate', 'chiropractic', 'solar'],
    integrations: GHL_STACK,
    faqs: [
      { q: 'What does a GoHighLevel expert do?', a: 'Designs and builds your GHL system, pipelines, workflows, funnels, calendars, AI and integrations, and fixes problems in existing accounts, such as broken automations, deliverability and phone issues.' },
      { q: 'How much does it cost to hire a GHL expert?', a: 'We work on fixed-price projects for defined builds, or a monthly retainer for ongoing work. You get a quote after a short call and, for existing accounts, a quick audit.' },
      { q: 'Can you fix workflows someone else built?', a: 'Yes. We audit existing workflows, document what they do, and rebuild or consolidate them where needed, carefully, so live leads aren’t affected.' },
      { q: 'Do you work with agencies?', a: `Yes, often white-label. See ${link('/services/ghl-white-label-saas/', 'GHL White Label SaaS')} and ${link('/services/ghl-snapshot/', 'GHL Snapshots')}.` },
      { q: 'Can you set up A2P 10DLC in GHL?', a: 'We guide and prepare your A2P brand and campaign registration in GoHighLevel so your texts deliver reliably.' },
    ],
    related: ['ghl-consultant', 'ghl-setup', 'gohighlevel-automation', 'gohighlevel-ai'],
  },

  'ghl-consultant': {
    title: 'GoHighLevel Consultant | GHL Strategy for Agencies & Businesses | Voxil AI',
    description:
      'A GoHighLevel consultant for strategy and architecture: plan your GHL setup, agency offer, SaaS pricing, sub-account structure, automations and AI, before you build.',
    h1: 'A GoHighLevel consultant for <span class="text-gradient-sky">decisions that matter</span>',
    lead: 'Get the architecture right before you build: account structure, pipelines, SaaS plans, snapshots, integrations and AI, planned by people who build GHL every week.',
    answer:
      'A <strong>GoHighLevel consultant</strong> advises businesses and agencies on how to use GoHighLevel effectively, planning account and sub-account structure, pipelines and automations, SaaS-mode pricing and packaging, integrations, AI features and migration, so the platform supports the business model rather than complicating it.',
    facts: [
      { label: 'Format', value: 'Sessions or project' },
      { label: 'Deliverable', value: 'Blueprint' },
      { label: 'For', value: 'Agencies & SMBs' },
      { label: 'Build option', value: 'Available' },
    ],
    pills: ['Architecture', 'SaaS strategy', 'Automation design', 'Migration planning'],
    whatIs: {
      title: 'An hour of planning saves a month of rebuilding',
      paras: [
        'Most GHL problems are design problems: one pipeline doing the job of three, custom fields created ad hoc, snapshots that break on import, SaaS plans priced without cost modelling.',
        'Consulting sessions give you a blueprint, structure, naming, workflows, integrations, AI, pricing, that your team or ours can build from with confidence.',
      ],
    },
    included: [
      'Business and funnel review',
      'Account / sub-account architecture',
      'Pipeline and automation blueprint',
      'SaaS plans, pricing and rebilling model',
      'Integration and AI recommendations',
      'Written blueprint and recorded sessions',
    ],
    features: [
      { icon: 'layers', title: 'Architecture', desc: 'Agency, sub-account, pipeline and custom-field structure that scales.' },
      { icon: 'tag', title: 'SaaS strategy', desc: 'Plans, pricing, rebilling and onboarding for SaaS-mode agencies.' },
      { icon: 'sliders', title: 'Automation design', desc: 'Workflow maps before build, triggers, goals, exits and edge cases.' },
      { icon: 'sparkles', title: 'AI planning', desc: 'Where native AI fits and where external voice/chat agents are better.' },
      { icon: 'swap', title: 'Migration planning', desc: 'Data mapping and cut-over plans from your current tools.' },
      { icon: 'academic', title: 'Team coaching', desc: 'Sessions that level up your team’s GHL skills.' },
    ],
    steps: [
      { title: 'Intake', desc: 'Goals, current setup and constraints.' },
      { title: 'Working sessions', desc: 'Live sessions to design the system together.' },
      { title: 'Blueprint', desc: 'Written architecture and build plan.' },
      { title: 'Build support', desc: 'Your team builds with our review, or we build it.' },
    ],
    fit: [
      'Agencies launching or restructuring on GoHighLevel',
      'Businesses about to migrate to GHL',
      'Teams with in-house builders who want expert review',
      'SaaS-mode agencies working on pricing and retention',
    ],
    industries: ['real-estate', 'fitness-gyms', 'med-spas', 'home-services'],
    integrations: GHL_STACK,
    faqs: [
      { q: 'Consultant or expert, what’s the difference?', a: `A consultant focuses on strategy and design; an expert focuses on building. We do both, use consulting for planning, then build yourself or hire us as your ${link('/services/ghl-expert/', 'GHL expert')}.` },
      { q: 'Do you help with GoHighLevel SaaS pricing?', a: 'Yes. We model your costs (plan, phone, email, AI usage) and help design plans and rebilling that protect margins.' },
      { q: 'Can you review our existing account?', a: 'Yes, a consulting engagement often starts with an audit and prioritised recommendations.' },
      { q: 'Are sessions recorded?', a: 'Yes, and you receive written notes and the blueprint.' },
      { q: 'Do you consult outside GHL?', a: `Yes, see ${link('/services/ai-automation-consultant/', 'AI automation consulting')}.` },
    ],
    related: ['ghl-expert', 'ghl-white-label-saas', 'ghl-migration', 'ai-automation-consultant'],
  },

  'ghl-setup': {
    title: 'GoHighLevel Setup Service | Complete GHL Account Setup | Voxil AI',
    description:
      'Done-for-you GoHighLevel setup: domains, email and phone, A2P, pipelines, calendars, forms, workflows, funnels, reputation and AI, launched correctly the first time.',
    h1: 'GoHighLevel setup, <span class="text-gradient-sky">done right the first time</span>',
    lead: 'A complete, launch-ready GoHighLevel account, technical foundations, pipelines, automations, funnels and AI, configured around how your business actually sells.',
    answer:
      '<strong>GoHighLevel setup</strong> is the process of configuring a new GHL account for a business: connecting domains, email sending and phone numbers, registering for A2P messaging, building pipelines, calendars, forms and workflows, setting up funnels or websites, reputation management and AI features, and importing existing contacts.',
    facts: [
      { label: 'Timeline', value: '1-3 weeks' },
      { label: 'Checklist', value: '60+ items' },
      { label: 'Training', value: 'Included' },
      { label: 'Support', value: '30 days' },
    ],
    pills: ['Technical setup', 'Pipelines', 'Automations', 'Training'],
    whatIs: {
      title: 'Skip the six months of trial and error',
      paras: [
        'A new GoHighLevel account has dozens of settings that affect deliverability, compliance and reporting before you build a single workflow. Get them wrong and texts don’t deliver, emails land in spam, and reports don’t add up.',
        `We follow a tested launch checklist, the same one we publish as our free ${link('/resources/ghl-setup-checklist/', 'GHL setup checklist')}, then build the pipelines, automations and funnels your business needs, and train your team to use them.`,
      ],
    },
    included: [
      'Business profile, users and permissions',
      'Domain, dedicated email sending and phone numbers',
      'A2P 10DLC registration support',
      'Pipelines, calendars, forms and surveys',
      'Core workflows: lead response, reminders, reviews',
      'Contact import, training and 30-day support',
    ],
    features: [
      { icon: 'shield', title: 'Technical foundations', desc: 'Domains, email authentication, phone and A2P configured correctly.' },
      { icon: 'trending', title: 'Pipelines', desc: 'Stages that match your sales process and feed accurate reports.' },
      { icon: 'calendar', title: 'Calendars & booking', desc: 'Booking pages, reminders and staff availability set up.' },
      { icon: 'bolt', title: 'Core automations', desc: 'Speed-to-lead, missed-call text-back, reminders and review requests.' },
      { icon: 'funnel', title: 'Funnels & forms', desc: 'Lead capture pages and forms wired to pipelines.' },
      { icon: 'academic', title: 'Training', desc: 'Recorded training so your team knows how to use every part.' },
    ],
    steps: [
      { title: 'Onboarding call', desc: 'Your offer, sales process, tools and brand assets.' },
      { title: 'Foundations', desc: 'Technical setup and compliance registrations.' },
      { title: 'Build', desc: 'Pipelines, automations, funnels and AI.' },
      { title: 'Launch & train', desc: 'Go live, train the team and support for 30 days.' },
    ],
    fit: [
      'New GoHighLevel users who want to launch fast',
      'Businesses switching to GHL from another CRM',
      'Agencies onboarding new client sub-accounts',
      'Owners who started setup and got stuck',
    ],
    industries: ['med-spas', 'roofing', 'chiropractic', 'fitness-gyms', 'hvac', 'salons-beauty'],
    integrations: GHL_STACK,
    faqs: [
      { q: 'How long does GoHighLevel setup take?', a: 'Typically one to three weeks, depending on scope and how quickly A2P registration and domain changes are approved.' },
      { q: 'Do you import our contacts?', a: 'Yes. We clean, map and import contacts, tags and opportunities from spreadsheets or your old CRM.' },
      { q: 'Do I need a GoHighLevel account first?', a: 'You can create one yourself or through an agency. If you’re unsure which plan you need, we’ll advise before you sign up.' },
      { q: 'Is training included?', a: 'Yes, live walkthroughs plus recorded videos your team can revisit.' },
      { q: 'What happens after setup?', a: `You get 30 days of support. After that, many clients choose ongoing ${link('/services/ghl-support/', 'GHL support')}.` },
    ],
    related: ['ghl-expert', 'ghl-migration', 'ghl-support', 'gohighlevel-automation'],
  },

  'ghl-support': {
    title: 'GoHighLevel Support & Maintenance | Monthly GHL Help | Voxil AI',
    description:
      'Ongoing GoHighLevel support: fixes, new workflows, funnel edits, A2P and deliverability issues, reporting and monthly improvements, from a team that knows GHL inside out.',
    h1: 'GoHighLevel support that <span class="text-gradient-sky">actually fixes things</span>',
    lead: 'A dedicated GHL team on call for fixes, changes and improvements, with clear response times, a monthly hours allowance and proactive health checks.',
    answer:
      '<strong>GoHighLevel support</strong> is an ongoing service that maintains and improves a GHL account: fixing broken workflows, resolving messaging and deliverability issues, making funnel and website edits, building new automations, updating AI settings and monitoring account health, usually on a monthly retainer.',
    facts: [
      { label: 'Model', value: 'Monthly' },
      { label: 'Requests', value: 'Ticketed' },
      { label: 'Health checks', value: 'Monthly' },
      { label: 'Contract', value: 'Month-to-month' },
    ],
    pills: ['Fixes', 'Changes', 'Health checks', 'Improvements'],
    whatIs: {
      title: 'Because GHL changes every week, and so does your business',
      paras: [
        'GoHighLevel ships updates constantly, carriers change messaging rules, and your offers and team evolve. Without someone watching, small issues become lost leads.',
        'Support gives you a team that already knows your account. Submit a request, get it done, and receive a monthly health check covering workflows, deliverability, phone and AI performance.',
      ],
    },
    included: [
      'Monthly hours allowance',
      'Ticketed requests with response targets',
      'Workflow, funnel and calendar changes',
      'Deliverability, A2P and phone troubleshooting',
      'Monthly account health report',
      'Quarterly optimisation review',
    ],
    features: [
      { icon: 'wrench', title: 'Fast fixes', desc: 'Broken workflows, forms and integrations diagnosed and repaired.' },
      { icon: 'sliders', title: 'Changes', desc: 'New automations, edits and campaigns as your business evolves.' },
      { icon: 'shield', title: 'Health checks', desc: 'Monthly review of errors, deliverability and automation health.' },
      { icon: 'mail', title: 'Deliverability', desc: 'Email reputation and SMS filtering issues investigated.' },
      { icon: 'sparkles', title: 'AI tuning', desc: 'Conversation and Voice AI updated as offers and FAQs change.' },
      { icon: 'chart', title: 'Reporting', desc: 'Dashboards maintained so your numbers stay trustworthy.' },
    ],
    steps: [
      { title: 'Onboard', desc: 'We audit and document your account.' },
      { title: 'Request', desc: 'Send requests via email, Slack or portal.' },
      { title: 'Deliver', desc: 'Work completed and confirmed with you.' },
      { title: 'Improve', desc: 'Monthly health check and recommendations.' },
    ],
    fit: [
      'Businesses running on GHL without an in-house admin',
      'Agencies needing overflow GHL help',
      'Teams whose last GHL freelancer disappeared',
      'Accounts with frequent changes to offers and campaigns',
    ],
    industries: ['med-spas', 'fitness-gyms', 'home-services', 'real-estate'],
    integrations: GHL_STACK,
    faqs: [
      { q: 'How fast do you respond?', a: 'Response targets depend on your plan; urgent issues affecting lead flow are prioritised.' },
      { q: 'What if I need more hours one month?', a: 'Additional work can be quoted as a fixed project or added hours.' },
      { q: 'Can you support an account someone else built?', a: 'Yes. Onboarding includes an audit and documentation so we understand what exists.' },
      { q: 'Do you support agencies’ client accounts?', a: 'Yes, white-label, with your agency as the point of contact.' },
      { q: 'Is there a long contract?', a: 'No, month-to-month.' },
    ],
    related: ['ghl-virtual-assistant', 'ghl-expert', 'ghl-setup', 'crm-automation'],
  },

  'ghl-migration': {
    title: 'GoHighLevel Migration Service | Move to GHL Without Losing Data | Voxil AI',
    description:
      'Migrate to GoHighLevel from HubSpot, ClickFunnels, Kajabi, Keap, ActiveCampaign, Mailchimp, Pipedrive and more, contacts, pipelines, funnels, automations and courses moved safely.',
    h1: 'Migrate to GoHighLevel <span class="text-gradient-sky">without losing a thing</span>',
    lead: 'Contacts, deals, tags, funnels, automations, courses and phone numbers moved into GHL with a tested cut-over plan, so your business never stops taking leads.',
    answer:
      '<strong>GoHighLevel migration</strong> is moving a business from other tools, such as HubSpot, ClickFunnels, Kajabi, Keap, ActiveCampaign or Pipedrive, into GoHighLevel. It includes exporting and mapping data, rebuilding funnels and automations, porting phone numbers and domains, and switching over with minimal downtime.',
    facts: [
      { label: 'Timeline', value: '2-6 weeks' },
      { label: 'Data loss', value: 'Zero tolerance' },
      { label: 'Cut-over', value: 'Planned' },
      { label: 'Tool consolidation', value: 'Often several' },
    ],
    pills: ['Data mapping', 'Funnel rebuilds', 'Automation rebuilds', 'Number porting'],
    whatIs: {
      title: 'Consolidate your stack, carefully',
      paras: [
        'Many businesses move to GoHighLevel to replace several subscriptions, CRM, email, funnels, courses, scheduling and texting, with one platform. The savings are real, but a rushed migration can break campaigns and lose history.',
        'We inventory everything you use today, map each piece to its GHL equivalent, rebuild what needs rebuilding (often better), and switch over on a planned date with a rollback plan.',
      ],
    },
    included: [
      'Tool and data inventory',
      'Field, tag and pipeline mapping',
      'Contact, deal and note import',
      'Funnel, form and email template rebuilds',
      'Automation and course migration',
      'Domain, email and phone number cut-over',
    ],
    features: [
      { icon: 'database', title: 'Clean data', desc: 'Deduplicated, mapped and validated before import.' },
      { icon: 'funnel', title: 'Funnel rebuilds', desc: 'Pages and funnels rebuilt in GHL, faster and on-brand.' },
      { icon: 'sliders', title: 'Automation rebuilds', desc: 'Sequences re-created with GHL workflows, improved along the way.' },
      { icon: 'academic', title: 'Courses & memberships', desc: 'Course content and member access moved from Kajabi, Teachable and others.' },
      { icon: 'phone', title: 'Number porting', desc: 'Keep your phone numbers with a coordinated port.' },
      { icon: 'shield', title: 'Rollback plan', desc: 'Old systems stay read-only until we confirm everything works.' },
    ],
    steps: [
      { title: 'Inventory', desc: 'Everything you use, and what depends on it.' },
      { title: 'Map & rebuild', desc: 'Data mapping and GHL build in parallel.' },
      { title: 'Test', desc: 'Test imports, flows and forms end-to-end.' },
      { title: 'Cut over', desc: 'Switch on a planned date; monitor closely.' },
    ],
    compare: {
      title: 'What we migrate <span class="text-gradient-sky">from</span>',
      lead: 'Common source platforms and what moves into GoHighLevel.',
      head: ['Source', 'Contacts & deals', 'Funnels / pages', 'Automations', 'Courses'],
      rows: [
        ['HubSpot', 'Yes', 'Rebuilt', 'Rebuilt', ', '],
        ['ClickFunnels', 'Yes', 'Rebuilt', 'Rebuilt', 'Yes'],
        ['Kajabi', 'Yes', 'Rebuilt', 'Rebuilt', 'Yes'],
        ['Keap / Infusionsoft', 'Yes', 'Rebuilt', 'Rebuilt', ', '],
        ['ActiveCampaign / Mailchimp', 'Yes', 'Rebuilt', 'Rebuilt', ', '],
        ['Pipedrive / Salesforce', 'Yes', ', ', 'Rebuilt', ', '],
      ],
    },
    fit: [
      'Businesses paying for five tools that GHL can replace',
      'Agencies moving clients onto their GHL SaaS',
      'Course creators leaving Kajabi or Teachable',
      'Teams outgrowing simple CRMs',
    ],
    industries: ['fitness-gyms', 'med-spas', 'real-estate', 'home-services'],
    integrations: ['HubSpot', 'ClickFunnels', 'Kajabi', 'Keap', 'ActiveCampaign', 'Mailchimp', 'Pipedrive', 'Salesforce', 'Calendly', 'Teachable', 'Thinkific', 'Twilio', 'GoHighLevel'],
    faqs: [
      { q: 'Will I lose data moving to GoHighLevel?', a: 'Not with a planned migration. We map every field, run test imports, and keep your old system read-only until you sign off.' },
      { q: 'Can automations be migrated automatically?', a: 'No tool translates automations directly between platforms; we rebuild them in GHL workflows, and usually simplify them.' },
      { q: 'Can I keep my phone numbers?', a: 'Usually yes, via a number port coordinated with your current carrier.' },
      { q: 'How long does migration take?', a: 'Two to six weeks depending on volume and complexity.' },
      { q: 'Will my funnels look the same?', a: 'We rebuild them to match your brand, often improving speed and conversion along the way.' },
    ],
    related: ['crm-migration', 'ghl-setup', 'ghl-courses-onboarding', 'ghl-expert'],
  },

  'ghl-integration': {
    title: 'GoHighLevel Integrations | Connect GHL to Any Tool via API | Voxil AI',
    description:
      'GoHighLevel integration services: connect GHL to accounting, scheduling, ecommerce, field-service, AI voice agents and custom apps using the GHL API, webhooks, Zapier, Make.com or n8n.',
    h1: 'GoHighLevel integrations that <span class="text-gradient-sky">keep data flowing</span>',
    lead: 'Connect GoHighLevel to the rest of your business, accounting, job management, ecommerce, voice AI and custom apps, with reliable, monitored integrations.',
    answer:
      '<strong>GoHighLevel integration</strong> means connecting GHL to other software so data moves automatically. It is done through native integrations, the GoHighLevel API and webhooks, or middleware such as Zapier, Make.com and n8n, syncing contacts, opportunities, appointments, payments and custom data between systems.',
    facts: [
      { label: 'Methods', value: 'API · Webhooks' },
      { label: 'Middleware', value: 'Zapier · Make · n8n' },
      { label: 'Build time', value: '1-3 weeks' },
      { label: 'Monitoring', value: 'Included' },
    ],
    pills: ['GHL API', 'Webhooks', 'Custom fields', 'Two-way sync'],
    whatIs: {
      title: 'GoHighLevel shouldn’t be an island',
      paras: [
        'GHL handles marketing and sales well, but jobs get scheduled in Jobber or ServiceTitan, invoices live in QuickBooks, and orders sit in Shopify. Without integrations, someone re-types data and reports never match.',
        'We build integrations using the best method for each connection, native where it’s reliable, middleware where it’s fast, and the GHL API with custom code where you need control, with logging and alerts on every sync.',
      ],
    },
    included: [
      'Integration architecture and data mapping',
      'GHL API / webhook development',
      'Middleware scenarios (Zapier, Make, n8n)',
      'Two-way sync with conflict rules',
      'Voice AI agent integrations',
      'Error alerts and documentation',
    ],
    features: [
      { icon: 'code', title: 'GHL API', desc: 'Custom integrations using the GoHighLevel API for full control.' },
      { icon: 'bolt', title: 'Webhooks', desc: 'Real-time triggers in and out of GHL workflows.' },
      { icon: 'swap', title: 'Two-way sync', desc: 'Keep contacts, jobs and payments consistent across systems.' },
      { icon: 'mic', title: 'Voice AI', desc: 'Vapi and Retell agents that read and write GHL data during calls.' },
      { icon: 'currency', title: 'Accounting', desc: 'Invoices and payments synced with QuickBooks or Xero.' },
      { icon: 'shield', title: 'Monitoring', desc: 'Logs and alerts so failed syncs never go unnoticed.' },
    ],
    steps: [
      { title: 'Map data', desc: 'Which system owns which data, and what syncs where.' },
      { title: 'Choose method', desc: 'Native, middleware or API per connection.' },
      { title: 'Build & test', desc: 'Built with test records and failure scenarios.' },
      { title: 'Monitor', desc: 'Go live with alerts and documentation.' },
    ],
    fit: [
      'Service businesses using GHL plus a job-management tool',
      'Ecommerce brands using GHL for marketing',
      'Agencies building custom features for GHL clients',
      'Anyone re-typing data between GHL and other apps',
    ],
    industries: ['home-services', 'hvac', 'roofing', 'solar', 'real-estate'],
    integrations: ['GoHighLevel API', 'Webhooks', 'Zapier', 'Make.com', 'n8n', 'QuickBooks', 'Xero', 'Jobber', 'ServiceTitan', 'Housecall Pro', 'Shopify', 'WooCommerce', 'Stripe', 'Google Sheets', 'Slack', 'Vapi', 'Retell AI'],
    faqs: [
      { q: 'Does GoHighLevel have an API?', a: 'Yes. GoHighLevel provides a REST API and webhooks (with OAuth-based apps for marketplace-style integrations) covering contacts, opportunities, calendars, conversations and more.' },
      { q: 'Zapier or custom API integration?', a: 'Zapier or Make is faster and cheaper for simple syncs; custom API integrations are better for high volume, complex logic or when you need full control.' },
      { q: 'Can you integrate GHL with ServiceTitan or Jobber?', a: 'Yes, typically syncing leads and appointments into the job system and job status or invoices back into GHL for follow-up and reviews.' },
      { q: 'Can AI voice agents update GHL?', a: 'Yes. Our Vapi and Retell agents create contacts, book GHL appointments and write call summaries to custom fields.' },
      { q: 'What if an integration breaks?', a: 'We build alerts so failures are reported immediately, and document how to fix common issues.' },
    ],
    related: ['api-integration', 'gohighlevel-automation', 'make-automation', 'vapi-ai-integration'],
  },

  'ghl-snapshot': {
    title: 'Custom GoHighLevel Snapshots | GHL Snapshot Builder | Voxil AI',
    description:
      'Custom GoHighLevel snapshots for agencies and niches, pipelines, workflows, funnels, calendars, templates and AI packaged for one-click deployment to new sub-accounts.',
    h1: 'Custom GoHighLevel snapshots that <span class="text-gradient-sky">deploy in one click</span>',
    lead: 'Package your best build, pipelines, workflows, funnels, templates and AI, into a snapshot you can deploy to every new client in minutes, with a setup guide that makes onboarding painless.',
    answer:
      'A <strong>GoHighLevel snapshot</strong> is a template of a GHL account that can be loaded into another sub-account. It packages assets like pipelines, workflows, funnels, websites, forms, calendars, email and SMS templates, custom fields and AI settings, so agencies can deploy a proven system to new clients quickly.',
    facts: [
      { label: 'Build', value: '1-3 weeks' },
      { label: 'Deploys', value: 'Unlimited' },
      { label: 'Setup guide', value: 'Included' },
      { label: 'Niche-ready', value: 'Yes' },
    ],
    pills: ['Niche snapshots', 'Onboarding guide', 'Custom values', 'Versioning'],
    whatIs: {
      title: 'Build it once. Launch it for every client.',
      paras: [
        'Agencies lose margin rebuilding the same system for each new client. A well-built snapshot turns your best setup into a product: load it, fill in the client’s custom values, and they’re live.',
        'The key is building snapshot-friendly from the start, custom values instead of hard-coded text, workflows that don’t fire on import, and a clear post-install checklist.',
      ],
    },
    included: [
      'Niche-specific pipelines and stages',
      'Workflows built for safe import',
      'Funnels, websites and forms',
      'Email and SMS template library',
      'Custom values for fast personalisation',
      'Install guide and onboarding checklist',
    ],
    features: [
      { icon: 'copy', title: 'Snapshot-safe builds', desc: 'Custom values and triggers designed so imports don’t break or misfire.' },
      { icon: 'funnel', title: 'Niche funnels', desc: 'Offer-specific funnels and pages for your chosen vertical.' },
      { icon: 'sliders', title: 'Proven workflows', desc: 'Speed-to-lead, nurture, reminders, reviews and reactivation.' },
      { icon: 'sparkles', title: 'AI included', desc: 'Conversation AI prompts and settings packaged for each niche.' },
      { icon: 'clipboard', title: 'Install checklist', desc: 'Step-by-step guide so any team member can deploy it.' },
      { icon: 'refresh', title: 'Versioning', desc: 'Update the master and push improvements to clients.' },
    ],
    steps: [
      { title: 'Define the niche', desc: 'Offer, customer journey and must-have assets.' },
      { title: 'Build master', desc: 'Built in a master sub-account with custom values.' },
      { title: 'Test import', desc: 'Loaded into fresh accounts to verify everything works.' },
      { title: 'Package', desc: 'Snapshot link, install guide and training delivered.' },
    ],
    fit: [
      'Agencies serving a specific niche on GoHighLevel',
      'SaaS-mode agencies that need fast onboarding',
      'Consultants productising their GHL builds',
      'Franchises deploying one system across locations',
    ],
    industries: ['roofing', 'med-spas', 'fitness-gyms', 'chiropractic', 'real-estate', 'hvac'],
    integrations: GHL_STACK,
    faqs: [
      { q: 'What is included in a GHL snapshot?', a: 'Snapshots can include pipelines, workflows, funnels, websites, forms, surveys, calendars, templates, custom fields and values, tags and AI settings. They don’t include contacts, conversations or connected integrations.' },
      { q: 'Can I sell the snapshot?', a: 'Yes, custom snapshots we build for you are yours to use and resell.' },
      { q: 'Will workflows fire when the snapshot is loaded?', a: 'Not if built correctly. We design triggers and publishing states to avoid misfires on import.' },
      { q: 'Can you update my existing snapshot?', a: 'Yes. We audit, fix and modernise existing snapshots.' },
      { q: 'Do you build snapshots for any niche?', a: 'Yes, we’ve built for home services, med spas, gyms, real estate, clinics and more.' },
    ],
    related: ['ghl-white-label-saas', 'ghl-expert', 'gohighlevel-automation', 'ghl-courses-onboarding'],
  },

  'ghl-white-label-saas': {
    title: 'GoHighLevel White Label SaaS Setup | Launch Your Own SaaS | Voxil AI',
    description:
      'Launch your own branded SaaS on GoHighLevel SaaS mode: white-label domain and app, plans and pricing, Stripe rebilling, snapshots, onboarding automation and support workflows.',
    h1: 'Launch your own SaaS on <span class="text-gradient-sky">GoHighLevel white label</span>',
    lead: 'Your brand, your pricing, your recurring revenue. We set up GoHighLevel SaaS mode end-to-end, branding, plans, rebilling, snapshots and onboarding, so you can sell software, not just services.',
    answer:
      '<strong>GoHighLevel White Label SaaS</strong> lets agencies resell GoHighLevel as their own branded software. Using SaaS mode (on the Agency Pro plan), agencies set their own plans and prices, automatically provision sub-accounts when customers pay through Stripe, rebill usage like phone and email, and deliver a white-labelled web and mobile app.',
    facts: [
      { label: 'Plan needed', value: 'Agency Pro' },
      { label: 'Setup', value: '2-4 weeks' },
      { label: 'Billing', value: 'Stripe' },
      { label: 'Branding', value: 'Fully white-label' },
    ],
    pills: ['SaaS mode', 'Stripe rebilling', 'Branded app', 'Automated onboarding'],
    whatIs: {
      title: 'From agency retainers to recurring software revenue',
      paras: [
        'Service retainers scale with headcount. Software scales with customers. GoHighLevel’s SaaS mode lets agencies package the platform, plus their own snapshots and expertise, into subscription plans under their own brand.',
        'We handle the parts that decide whether a SaaS launch succeeds: plan design and margin modelling, white-label setup, Stripe configuration, niche snapshots, self-serve signup and automated onboarding that reduces churn in the first 30 days.',
      ],
    },
    included: [
      'White-label domain, branding and login',
      'SaaS plans, features and pricing',
      'Stripe connection and usage rebilling',
      'Snapshot per plan or niche',
      'Self-serve signup funnel',
      'Onboarding and support automations',
    ],
    features: [
      { icon: 'tag', title: 'White-label branding', desc: 'Your domain, logo, colours and (optionally) branded mobile app.' },
      { icon: 'currency', title: 'Pricing & rebilling', desc: 'Plans designed with cost modelling; phone, email and AI usage rebilled.' },
      { icon: 'rocket', title: 'Automated provisioning', desc: 'New subscribers get an account with the right snapshot instantly.' },
      { icon: 'funnel', title: 'Signup funnel', desc: 'Sales page, checkout and trial flow for self-serve growth.' },
      { icon: 'academic', title: 'Onboarding', desc: 'Emails, tasks and training that get new users to value fast.' },
      { icon: 'chart', title: 'SaaS metrics', desc: 'MRR, churn and activation tracking from day one.' },
    ],
    steps: [
      { title: 'Model the business', desc: 'Niche, plans, pricing and unit economics.' },
      { title: 'Brand & configure', desc: 'White-label, SaaS mode and Stripe set up.' },
      { title: 'Build the product', desc: 'Snapshots, signup funnel and onboarding.' },
      { title: 'Launch', desc: 'Test purchases end-to-end, then go live.' },
    ],
    fit: [
      'Agencies ready to productise their niche expertise',
      'Consultants who want recurring software revenue',
      'Communities and coaches selling tools to members',
      'Existing SaaS-mode agencies with low activation or high churn',
    ],
    industries: ['fitness-gyms', 'med-spas', 'roofing', 'real-estate', 'home-services'],
    integrations: ['GoHighLevel SaaS Mode', 'Stripe', 'LeadConnector', 'Custom domain / white-label', 'Branded mobile app', 'Mailgun', 'Twilio', 'Zapier', 'Make.com'],
    faqs: [
      { q: 'Which GoHighLevel plan do I need for SaaS mode?', a: 'SaaS mode is part of GoHighLevel’s Agency Pro plan. Plan names and prices change from time to time, so we confirm the current requirements with you during planning.' },
      { q: 'How should I price my SaaS?', a: 'Price around the outcome for your niche, not GHL’s cost. We model platform, phone, email and AI costs per plan so every tier stays profitable.' },
      { q: 'Can customers sign up without talking to me?', a: 'Yes. We build a self-serve checkout that provisions the account and triggers onboarding automatically.' },
      { q: 'Can I rebill phone and email usage?', a: 'Yes. GoHighLevel supports rebilling usage such as calls, SMS, email and some AI features with a markup you set.' },
      { q: 'Do you provide the snapshot too?', a: `Yes, see ${link('/services/ghl-snapshot/', 'custom GHL snapshots')}.` },
    ],
    related: ['ghl-snapshot', 'ghl-consultant', 'ghl-courses-onboarding', 'ai-saas-development'],
  },

  'ghl-courses-onboarding': {
    title: 'GoHighLevel Courses, Memberships & Client Onboarding | Voxil AI',
    description:
      'Build courses, memberships and communities in GoHighLevel, plus automated client onboarding, payment, contracts, forms, tasks and welcome sequences, that turns new buyers into active users.',
    h1: 'GoHighLevel courses and onboarding that <span class="text-gradient-sky">get people started</span>',
    lead: 'Sell and deliver courses, memberships and communities inside GoHighLevel, and automate client onboarding from payment to kickoff, so every new customer starts strong.',
    answer:
      '<strong>GoHighLevel courses and onboarding</strong> covers two things: building online courses, memberships and communities with GHL’s built-in membership features, and automating client onboarding, payment, contract signature, intake forms, account setup, tasks and welcome messages, using GHL workflows.',
    facts: [
      { label: 'Setup', value: '1-4 weeks' },
      { label: 'Hosting', value: 'Inside GHL' },
      { label: 'Payments', value: 'Stripe' },
      { label: 'Onboarding', value: 'Automated' },
    ],
    pills: ['Courses', 'Memberships', 'Communities', 'Client onboarding'],
    whatIs: {
      title: 'The first week decides whether customers stay',
      paras: [
        'Whether you sell a course, a membership or a service, customers who get a quick win early are far more likely to stay. Manual onboarding makes that inconsistent; automation makes it reliable.',
        'We build your courses and memberships in GoHighLevel, connect checkout and access, and design onboarding flows that collect what you need, schedule the kickoff, and nudge people through their first milestones.',
      ],
    },
    included: [
      'Course and membership structure',
      'Content upload and drip schedules',
      'Checkout, offers and access rules',
      'Community groups setup',
      'Client onboarding workflow',
      'Progress-based nudges and certificates',
    ],
    features: [
      { icon: 'academic', title: 'Courses', desc: 'Modules, lessons, quizzes and drip schedules built in GHL.' },
      { icon: 'users', title: 'Communities', desc: 'Member groups and channels to keep customers engaged.' },
      { icon: 'currency', title: 'Checkout & access', desc: 'Offers, upsells, payment plans and automatic access.' },
      { icon: 'clipboard', title: 'Client onboarding', desc: 'Contracts, intake forms, tasks and kickoff booking automated.' },
      { icon: 'trending', title: 'Progress nudges', desc: 'Reminders when members stall; celebrations when they progress.' },
      { icon: 'swap', title: 'Migration', desc: 'Move courses from Kajabi, Teachable, Thinkific or Skool.' },
    ],
    steps: [
      { title: 'Plan', desc: 'Offer structure, content map and onboarding journey.' },
      { title: 'Build', desc: 'Courses, checkout and communities built.' },
      { title: 'Automate', desc: 'Onboarding and engagement workflows created.' },
      { title: 'Launch', desc: 'Test purchases and go live.' },
    ],
    fit: [
      'Coaches and creators consolidating onto GoHighLevel',
      'Agencies onboarding many new clients each month',
      'Businesses selling training alongside services',
      'SaaS-mode agencies onboarding subscribers',
    ],
    industries: ['fitness-gyms', 'med-spas', 'real-estate'],
    integrations: ['GoHighLevel Memberships', 'Communities', 'Stripe', 'PayPal', 'Vimeo', 'Wistia', 'YouTube', 'DocuSign', 'PandaDoc', 'Google Drive', 'Zapier'],
    faqs: [
      { q: 'Can GoHighLevel host courses?', a: 'Yes. GHL includes membership and course features, plus communities, so you can sell and deliver content without separate platforms.' },
      { q: 'Can you move my Kajabi course?', a: 'Yes, we migrate content, members and access. See our GHL migration service.' },
      { q: 'What does automated onboarding include?', a: 'Typically payment confirmation, contract signing, intake forms, account creation, kickoff booking, internal tasks and a welcome sequence.' },
      { q: 'Can members get certificates?', a: 'Yes, GHL supports course completion certificates.' },
      { q: 'Can you write the onboarding emails?', a: 'Yes, in your voice.' },
    ],
    related: ['ghl-migration', 'ghl-white-label-saas', 'ghl-setup', 'gohighlevel-automation'],
  },

  'ghl-virtual-assistant': {
    title: 'GoHighLevel Virtual Assistant | Dedicated GHL VA | Voxil AI',
    description:
      'Hire a dedicated GoHighLevel virtual assistant for daily builds, funnel edits, workflow tweaks, contact management, campaign scheduling and reporting, trained and supervised by GHL experts.',
    h1: 'A GoHighLevel virtual assistant, <span class="text-gradient-sky">backed by experts</span>',
    lead: 'A trained GHL assistant for the daily work, funnel edits, workflow tweaks, campaigns, imports, reporting, with senior GoHighLevel engineers reviewing anything complex.',
    answer:
      'A <strong>GoHighLevel virtual assistant</strong> is a remote team member trained in GHL who handles day-to-day platform tasks: building and editing funnels and pages, updating workflows, scheduling campaigns, managing contacts and pipelines, importing lists, preparing reports and supporting clients’ sub-accounts.',
    facts: [
      { label: 'Engagement', value: 'Part or full-time' },
      { label: 'Oversight', value: 'Senior review' },
      { label: 'Time zones', value: 'US · UK · UAE · AU' },
      { label: 'Tools', value: 'Your workspace' },
    ],
    pills: ['Daily builds', 'Campaigns', 'Imports', 'Reporting'],
    whatIs: {
      title: 'The execution help your GHL account needs',
      paras: [
        'Many GHL tasks aren’t hard, they’re just constant: a new landing page, a tweaked email, an imported list, a weekly report. They pile up on the owner or the most expensive person on the team.',
        'Our virtual assistants are trained on GoHighLevel and our build standards, work in your tools and hours, and escalate complex automation or AI work to senior engineers, so quality stays high.',
      ],
    },
    included: [
      'Dedicated, GHL-trained assistant',
      'Senior engineer oversight',
      'Your task board, Slack and hours',
      'Standard operating procedures',
      'Weekly progress summary',
      'Flexible monthly hours',
    ],
    features: [
      { icon: 'funnel', title: 'Funnels & pages', desc: 'New pages, edits and A/B variants built to your brand.' },
      { icon: 'megaphone', title: 'Campaigns', desc: 'Emails, SMS and social posts scheduled and checked.' },
      { icon: 'database', title: 'Contacts & imports', desc: 'List cleaning, imports, tags and pipeline hygiene.' },
      { icon: 'sliders', title: 'Workflow edits', desc: 'Routine updates, with complex changes reviewed by seniors.' },
      { icon: 'chart', title: 'Reporting', desc: 'Weekly dashboards and client reports prepared.' },
      { icon: 'users', title: 'Client support', desc: 'Help for your agency’s sub-account users.' },
    ],
    steps: [
      { title: 'Define tasks', desc: 'Scope, tools, hours and communication rhythm.' },
      { title: 'Match & train', desc: 'Assistant trained on your account and SOPs.' },
      { title: 'Start work', desc: 'Tasks via your board with senior review.' },
      { title: 'Scale', desc: 'Adjust hours as your needs grow.' },
    ],
    fit: [
      'Agency owners doing GHL admin themselves',
      'Businesses with a steady stream of small GHL tasks',
      'Teams that need help across US, UK or Gulf hours',
      'Agencies scaling client accounts without hiring locally',
    ],
    industries: ['real-estate', 'med-spas', 'fitness-gyms', 'home-services'],
    integrations: ['GoHighLevel', 'Slack', 'ClickUp', 'Asana', 'Trello', 'Notion', 'Google Workspace', 'Loom', 'Canva'],
    faqs: [
      { q: 'What can a GHL virtual assistant do?', a: 'Funnel and page builds, workflow edits, campaign scheduling, contact imports, pipeline management, reporting and first-line support for sub-account users.' },
      { q: 'What if a task is too complex?', a: 'It’s escalated to a senior GoHighLevel engineer on our team, so you never get a half-working automation.' },
      { q: 'Can the VA work in my time zone?', a: 'Yes. We schedule overlap with US, UK, Middle East and Australian hours.' },
      { q: 'How do we communicate?', a: 'Through your Slack, task board and email, whatever your team already uses.' },
      { q: 'Is there a minimum commitment?', a: 'Engagements are monthly; you can adjust hours as needed.' },
    ],
    related: ['ghl-support', 'ghl-expert', 'ghl-setup', 'crm-automation'],
  },

  'gohighlevel-automation': {
    title: 'GoHighLevel Automation Services | GHL Workflow Experts | Voxil AI',
    description:
      'GoHighLevel automation services: speed-to-lead, missed-call text-back, nurture, reminders, reviews, reactivation and AI workflows built in GHL to convert more leads with less manual work.',
    h1: 'GoHighLevel automation that <span class="text-gradient-sky">runs your pipeline</span>',
    lead: 'The workflows that turn GoHighLevel from a CRM into a revenue machine, instant lead response, missed-call text-back, nurture, reminders, reviews and reactivation, all built and tested for you.',
    answer:
      '<strong>GoHighLevel automation</strong> uses GHL workflows to handle marketing and sales tasks automatically: replying to new leads instantly, texting back missed calls, nurturing and reminding contacts, moving opportunities through pipeline stages, requesting reviews and reactivating old leads, often enhanced with GHL’s built-in AI.',
    facts: [
      { label: 'Setup', value: '1-3 weeks' },
      { label: 'Core workflows', value: '10+' },
      { label: 'AI', value: 'Built in' },
      { label: 'Testing', value: 'Every path' },
    ],
    pills: ['Speed-to-lead', 'Missed-call text-back', 'Nurture', 'Reactivation'],
    whatIs: {
      title: 'The automations every GoHighLevel account should have',
      paras: [
        'Most of GHL’s value lives in a handful of workflows: respond instantly, never miss a call, remind before appointments, follow up after quotes, ask for reviews, and wake up old leads. Built well, they quietly recover revenue every day.',
        'We build these core workflows around your pipeline and offer, add AI where it improves conversion, and test every path, including the edge cases that cause duplicate texts or stuck contacts.',
      ],
    },
    included: [
      'Speed-to-lead response workflows',
      'Missed-call text-back',
      'Appointment confirmations and reminders',
      'Quote and no-show follow-up',
      'Review request and reputation flows',
      'Database reactivation campaign',
    ],
    features: [
      { icon: 'bolt', title: 'Instant response', desc: 'New leads get an SMS, email and task within seconds.' },
      { icon: 'phone', title: 'Missed-call text-back', desc: 'Every missed call triggers a friendly text that restarts the conversation.' },
      { icon: 'calendar', title: 'Reminders', desc: 'Confirmations and reminders that cut no-shows.' },
      { icon: 'refresh', title: 'Follow-up', desc: 'Quote and no-show sequences that run until a reply.' },
      { icon: 'star', title: 'Reviews', desc: 'Review requests timed after great experiences.' },
      { icon: 'trending', title: 'Reactivation', desc: 'Campaigns that turn old leads into new bookings.' },
    ],
    steps: [
      { title: 'Audit pipeline', desc: 'Stages, triggers and existing workflows reviewed.' },
      { title: 'Design', desc: 'Workflow maps with messages and exit rules.' },
      { title: 'Build & test', desc: 'Built and tested with test contacts on every path.' },
      { title: 'Launch & monitor', desc: 'Go live and review results after 30 days.' },
    ],
    fit: [
      'GoHighLevel users with few or broken workflows',
      'Service businesses losing leads to slow follow-up',
      'Agencies standardising automation across clients',
      'Teams wanting AI replies inside GHL',
    ],
    industries: ['roofing', 'hvac', 'med-spas', 'chiropractic', 'solar', 'home-services'],
    integrations: GHL_STACK,
    faqs: [
      { q: 'What is missed-call text-back?', a: 'An automation that sends an SMS to anyone whose call you miss, "Sorry we missed you, how can we help?", so the lead continues by text instead of calling a competitor.' },
      { q: 'Can you add AI to my existing workflows?', a: `Yes, AI replies, intent detection and AI voice answering. See ${link('/services/gohighlevel-ai/', 'GoHighLevel AI')}.` },
      { q: 'How do you avoid duplicate messages?', a: 'Careful trigger design, re-entry settings, goals and testing with real scenarios before launch.' },
      { q: 'Can you package this for my agency?', a: 'Yes, as a snapshot for deployment to all clients.' },
      { q: 'How long does it take?', a: 'Most core automation packages are live within one to three weeks.' },
    ],
    related: ['gohighlevel-ai', 'ghl-expert', 'ai-follow-up-system', 'ghl-snapshot'],
  },
};
