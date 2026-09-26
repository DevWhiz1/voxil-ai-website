// CRM, Funnels & Web, service page content.
const link = (href, text) => `<a href="${href}" class="text-primary-600 underline underline-offset-4">${text}</a>`;

const CRM_STACK = ['HubSpot', 'Salesforce', 'GoHighLevel', 'Pipedrive', 'Zoho CRM', 'Close', 'Monday CRM', 'Attio', 'Google Workspace', 'Microsoft 365', 'Slack', 'Zapier', 'Make.com', 'n8n'];

export default {
  'crm-setup': {
    title: 'CRM Setup Services | HubSpot, Salesforce, GHL & Pipedrive Setup | Voxil AI',
    description:
      'CRM setup services that fit how your team sells: pipelines, fields, lead routing, email and calendar sync, dashboards and training, in HubSpot, Salesforce, GoHighLevel, Pipedrive or Zoho.',
    h1: 'CRM setup built around <span class="text-gradient-teal">how you actually sell</span>',
    lead: 'A CRM your team will use: clear pipelines, only the fields that matter, automatic data capture and dashboards leadership trusts, configured in the platform that fits your business.',
    answer:
      '<strong>CRM setup</strong> is configuring customer relationship management software for a business: defining pipelines and deal stages, custom fields and properties, user roles, lead capture and routing, email and calendar sync, automations, dashboards and data import, then training the team so the CRM becomes the single source of truth.',
    facts: [
      { label: 'Timeline', value: '1-4 weeks' },
      { label: 'Platforms', value: '6+' },
      { label: 'Data import', value: 'Included' },
      { label: 'Training', value: 'Included' },
    ],
    pills: ['Pipelines', 'Fields & properties', 'Dashboards', 'Training'],
    whatIs: {
      title: 'A CRM only works if it’s easier than a spreadsheet',
      paras: [
        'CRMs fail when they add work: too many required fields, stages that don’t match reality, and no automation to capture activity. Sales reps go back to notes apps and leadership loses visibility.',
        'We start with your sales process, then configure the CRM to match, automatically logging emails, calls and meetings, capturing leads from every source, and producing reports your team didn’t have to build by hand.',
      ],
    },
    included: [
      'Platform recommendation (if needed)',
      'Pipeline, stages and deal properties',
      'Lead capture and routing',
      'Email, calendar and phone sync',
      'Dashboards and reports',
      'Data import and team training',
    ],
    features: [
      { icon: 'trending', title: 'Pipelines that fit', desc: 'Stages with clear entry and exit criteria for each sales motion.' },
      { icon: 'database', title: 'Clean data model', desc: 'Only the fields you need, with validation and sensible defaults.' },
      { icon: 'funnel', title: 'Lead capture', desc: 'Forms, calls, chat and ads flow straight into the CRM.' },
      { icon: 'mail', title: 'Activity sync', desc: 'Emails, meetings and calls logged automatically.' },
      { icon: 'chart', title: 'Dashboards', desc: 'Pipeline, forecast and activity reports leadership trusts.' },
      { icon: 'academic', title: 'Adoption', desc: 'Training and simple playbooks so the team actually uses it.' },
    ],
    steps: [
      { title: 'Process mapping', desc: 'How leads arrive, get worked and close.' },
      { title: 'Configure', desc: 'Pipelines, fields, permissions and integrations.' },
      { title: 'Import', desc: 'Clean and import existing contacts and deals.' },
      { title: 'Train & launch', desc: 'Team training and first-month support.' },
    ],
    compare: {
      title: 'Which CRM is <span class="text-gradient-teal">right for you?</span>',
      lead: 'A quick guide to the platforms we set up most often.',
      head: ['', 'Best for', 'Strength', 'Watch out for'],
      rows: [
        ['GoHighLevel', 'Local & service businesses, agencies', 'All-in-one marketing + CRM + AI', 'Needs expert setup to stay clean'],
        ['HubSpot', 'B2B and inbound-led companies', 'Ease of use, marketing tools', 'Costs scale with seats and tiers'],
        ['Salesforce', 'Complex, larger sales teams', 'Customisation, ecosystem', 'Admin overhead'],
        ['Pipedrive', 'Small sales teams', 'Simple visual pipeline', 'Lighter marketing features'],
        ['Zoho CRM', 'Budget-conscious teams', 'Value, Zoho suite', 'UI and integrations vary'],
      ],
    },
    fit: [
      'Businesses tracking leads in spreadsheets or inboxes',
      'Teams with a CRM nobody updates',
      'Growing companies adding their first sales hires',
      'Leaders who can’t get a reliable pipeline report',
    ],
    industries: ['real-estate', 'insurance', 'law-firms', 'solar', 'home-services'],
    integrations: CRM_STACK,
    faqs: [
      { q: 'Which CRM should I choose?', a: 'It depends on your sales motion, team size and marketing needs. GoHighLevel suits service businesses and agencies; HubSpot suits B2B inbound; Salesforce suits complex, larger teams; Pipedrive suits small sales teams. We recommend after mapping your process.' },
      { q: 'How long does CRM setup take?', a: 'One to four weeks, depending on integrations, data volume and the number of pipelines.' },
      { q: 'Can you import our existing data?', a: 'Yes, cleaned, deduplicated and mapped to the new structure.' },
      { q: 'Will my team actually use it?', a: 'Adoption is designed in: fewer fields, automatic logging, and training built around daily tasks.' },
      { q: 'Do you automate the CRM too?', a: `Yes, see ${link('/services/crm-automation/', 'CRM automation')}.` },
    ],
    related: ['crm-automation', 'crm-migration', 'ghl-setup', 'lead-capture-system'],
  },

  'crm-automation': {
    title: 'CRM Automation Services | Automate Your Sales Pipeline | Voxil AI',
    description:
      'CRM automation that assigns leads, creates tasks, sends follow-ups, updates deal stages and reports automatically, in HubSpot, Salesforce, GoHighLevel, Pipedrive and Zoho, with AI where it helps.',
    h1: 'CRM automation that <span class="text-gradient-teal">keeps deals moving</span>',
    lead: 'Stop relying on reps to remember. Automate assignment, follow-up, stage changes, handoffs and reporting, so every deal gets the right next step at the right time.',
    answer:
      '<strong>CRM automation</strong> uses workflows inside a CRM to perform sales and service tasks automatically, assigning leads, creating follow-up tasks, sending emails and texts, updating deal stages, notifying teams, enriching records and generating reports, reducing manual admin and making sure no opportunity is neglected.',
    facts: [
      { label: 'Timeline', value: '1-4 weeks' },
      { label: 'AI steps', value: 'Optional' },
      { label: 'Platforms', value: 'All major CRMs' },
      { label: 'Docs', value: 'Included' },
    ],
    pills: ['Lead assignment', 'Task automation', 'Stage automation', 'AI summaries'],
    whatIs: {
      title: 'Your CRM should do the chasing',
      paras: [
        'Sales teams lose a large share of their week to admin, updating records, logging activity, chasing internal handoffs. CRM automation takes that work away and makes the pipeline self-updating.',
        'We automate the repeatable steps and use AI where judgement helps: summarising calls into notes, extracting next steps, flagging stalled deals and drafting follow-ups for reps to approve.',
      ],
    },
    included: [
      'Lead assignment and routing rules',
      'Follow-up task and sequence automation',
      'Stage-based automations and handoffs',
      'AI call and email summaries',
      'Stalled-deal alerts',
      'Automated reports and digests',
    ],
    features: [
      { icon: 'users', title: 'Smart assignment', desc: 'Round-robin, territory or capacity-based lead routing.' },
      { icon: 'clipboard', title: 'Auto tasks', desc: 'The next step is always created, no deal left without an owner or date.' },
      { icon: 'trending', title: 'Stage automation', desc: 'Deals move and trigger actions when criteria are met.' },
      { icon: 'sparkles', title: 'AI notes', desc: 'Calls and emails summarised into the record automatically.' },
      { icon: 'clock', title: 'Stall alerts', desc: 'Managers alerted when deals sit too long in a stage.' },
      { icon: 'chart', title: 'Auto reporting', desc: 'Weekly pipeline digests delivered to Slack or email.' },
    ],
    steps: [
      { title: 'Audit', desc: 'Current process, bottlenecks and CRM configuration.' },
      { title: 'Design', desc: 'Automation map agreed with sales leadership.' },
      { title: 'Build', desc: 'Workflows built and tested with sample records.' },
      { title: 'Measure', desc: 'Track response time, velocity and win rate.' },
    ],
    fit: [
      'Sales teams spending hours on CRM admin',
      'Managers without visibility into stalled deals',
      'Companies with inconsistent follow-up',
      'Teams scaling from a few reps to many',
    ],
    industries: ['insurance', 'real-estate', 'solar', 'law-firms', 'roofing'],
    integrations: CRM_STACK,
    faqs: [
      { q: 'What CRM tasks can be automated?', a: 'Lead routing, follow-up tasks, emails and texts, deal-stage changes, internal notifications, data enrichment, activity logging and reporting.' },
      { q: 'Will automation make our outreach feel robotic?', a: 'Not if designed well. We automate admin and reminders; customer-facing messages stay personal, often drafted by AI and approved by reps.' },
      { q: 'Can you automate Salesforce?', a: 'Yes, with Flow, plus middleware or code where needed.' },
      { q: 'Do you work with HubSpot workflows?', a: 'Yes, including sequences, workflows and custom-coded actions on eligible tiers.' },
      { q: 'How do we measure success?', a: 'Before-and-after metrics: speed-to-lead, activity per rep, stage velocity and win rate.' },
    ],
    related: ['crm-setup', 'workflow-automation', 'ai-follow-up-system', 'gohighlevel-automation'],
  },

  'crm-migration': {
    title: 'CRM Migration Services | Zero-Loss CRM Data Migration | Voxil AI',
    description:
      'CRM migration between HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho and more, data mapping, cleaning, history, attachments, automations and cut-over with zero data loss.',
    h1: 'CRM migration with <span class="text-gradient-teal">zero data loss</span>',
    lead: 'Move contacts, companies, deals, history and automations to your new CRM with a tested plan, cleaned on the way, verified on arrival, and switched over without disrupting sales.',
    answer:
      '<strong>CRM migration</strong> is transferring customer data and processes from one CRM to another. It involves auditing and cleaning source data, mapping objects and fields, migrating records with their relationships, activity history and attachments, rebuilding automations, validating results and cutting over with minimal disruption.',
    facts: [
      { label: 'Timeline', value: '2-6 weeks' },
      { label: 'Validation', value: 'Record-level' },
      { label: 'History', value: 'Preserved' },
      { label: 'Downtime', value: 'Minimal' },
    ],
    pills: ['Data mapping', 'Cleaning', 'History & files', 'Automation rebuild'],
    whatIs: {
      title: 'A migration is a chance to clean house',
      paras: [
        'CRM migrations go wrong when data is exported and imported without thought: duplicates multiply, relationships break and history disappears. Teams lose trust in the new system on day one.',
        'We treat migration as a project: audit, clean, map, test-import, validate, cut over. We preserve associations and activity history where the platforms allow, rebuild automations natively, and verify counts before sign-off.',
      ],
    },
    included: [
      'Source audit and data-quality report',
      'Object and field mapping',
      'Deduplication and normalisation',
      'Records, associations, notes and files',
      'Automation and report rebuilds',
      'Validation and cut-over plan',
    ],
    features: [
      { icon: 'search', title: 'Data audit', desc: 'Duplicates, gaps and junk found before they move.' },
      { icon: 'swap', title: 'Field mapping', desc: 'Every field mapped, transformed or intentionally retired.' },
      { icon: 'link', title: 'Relationships kept', desc: 'Contacts, companies, deals and activities stay linked.' },
      { icon: 'document', title: 'History & files', desc: 'Notes, emails and attachments migrated where supported.' },
      { icon: 'sliders', title: 'Automation rebuild', desc: 'Workflows recreated natively in the new CRM.' },
      { icon: 'shield', title: 'Validation', desc: 'Record counts and spot checks signed off before cut-over.' },
    ],
    steps: [
      { title: 'Audit & map', desc: 'Understand the source and design the target.' },
      { title: 'Clean & test', desc: 'Clean data and run test migrations.' },
      { title: 'Migrate', desc: 'Full migration with validation.' },
      { title: 'Cut over', desc: 'Switch the team, monitor and support.' },
    ],
    fit: [
      'Teams outgrowing Pipedrive, Zoho or spreadsheets',
      'Companies consolidating onto GoHighLevel or HubSpot',
      'Businesses leaving Salesforce for something simpler',
      'Mergers combining two CRMs',
    ],
    industries: ['insurance', 'real-estate', 'law-firms', 'home-services'],
    integrations: [...CRM_STACK, 'Keap', 'ActiveCampaign', 'Excel / CSV'],
    faqs: [
      { q: 'Can email history be migrated?', a: 'Often, yes, depending on what the source exports and the target accepts. We confirm what’s possible during the audit.' },
      { q: 'How long does a CRM migration take?', a: 'Two to six weeks depending on data volume, objects and automations.' },
      { q: 'Will our team lose access during migration?', a: 'No. The old CRM stays live until cut-over, then read-only for reference.' },
      { q: 'Do you migrate automations?', a: 'Automations can’t be transferred directly between CRMs; we rebuild them natively in the new platform.' },
      { q: 'Can you migrate to GoHighLevel?', a: `Yes, see ${link('/services/ghl-migration/', 'GHL migration')}.` },
    ],
    related: ['crm-setup', 'ghl-migration', 'crm-automation', 'api-integration'],
  },

  'make-automation': {
    title: 'Make.com Automation Experts | Make Scenario Development | Voxil AI',
    description:
      'Make.com (formerly Integromat) experts: robust multi-step scenarios with error handling, data stores, AI modules and custom API calls, documented, monitored and cost-efficient.',
    h1: 'Make.com automation that’s <span class="text-gradient-teal">built to last</span>',
    lead: 'Visual, powerful and affordable, Make.com is ideal for multi-step business automation. We build scenarios with proper error handling, AI modules and documentation so they keep working.',
    answer:
      '<strong>Make.com automation</strong> uses Make (formerly Integromat), a visual no-code platform, to connect apps and automate multi-step processes through "scenarios". Scenarios can transform data, branch with routers and filters, call any API, use AI modules and handle errors, making Make well suited to complex business workflows.',
    facts: [
      { label: 'Platform', value: 'Make.com' },
      { label: 'Build time', value: 'Days to weeks' },
      { label: 'Error handling', value: 'Always' },
      { label: 'Docs', value: 'Included' },
    ],
    pills: ['Scenarios', 'Routers & filters', 'AI modules', 'Custom APIs'],
    whatIs: {
      title: 'Great tool. Better with engineering discipline.',
      paras: [
        'Make is excellent for complex automations at a sensible price. But scenarios built without error handling fail silently, and inefficient designs burn through operations and budget.',
        'We design scenarios like software: modular, with error routes, retries and alerts, efficient operation usage, and documentation. When Make isn’t the right tool for part of a job, we say so.',
      ],
    },
    included: [
      'Scenario architecture and build',
      'Error handlers, retries and alerts',
      'AI modules (OpenAI, Claude)',
      'Custom HTTP/API connections',
      'Operation-usage optimisation',
      'Documentation and handover',
    ],
    features: [
      { icon: 'puzzle', title: 'Multi-step scenarios', desc: 'Routers, filters, iterators and aggregators for real business logic.' },
      { icon: 'shield', title: 'Error handling', desc: 'Break, resume and rollback directives with alerts on failure.' },
      { icon: 'sparkles', title: 'AI steps', desc: 'Classify, extract and draft with AI inside your scenarios.' },
      { icon: 'code', title: 'Any API', desc: 'HTTP modules and custom apps for tools without native modules.' },
      { icon: 'currency', title: 'Cost optimisation', desc: 'Designs that minimise operations and keep plans affordable.' },
      { icon: 'document', title: 'Documentation', desc: 'Every scenario explained so your team can maintain it.' },
    ],
    steps: [
      { title: 'Map process', desc: 'Inputs, outputs, rules and exceptions.' },
      { title: 'Build', desc: 'Modular scenarios with error routes.' },
      { title: 'Test', desc: 'Test data and failure scenarios.' },
      { title: 'Hand over', desc: 'Docs and optional monitoring.' },
    ],
    fit: [
      'Teams automating complex, multi-app processes',
      'Businesses outgrowing Zapier costs or limits',
      'Operations needing branching logic and data transformation',
      'Anyone with fragile Make scenarios that keep breaking',
    ],
    industries: ['real-estate', 'home-services', 'insurance', 'law-firms'],
    integrations: ['Make.com', 'Google Workspace', 'Microsoft 365', 'Airtable', 'Notion', 'Slack', 'HubSpot', 'GoHighLevel', 'Shopify', 'Stripe', 'QuickBooks', 'Xero', 'OpenAI', 'Anthropic Claude', 'Webhooks'],
    faqs: [
      { q: 'Is Make.com better than Zapier?', a: `For complex, multi-step logic at volume, Make is often more capable and cost-effective. Zapier is simpler and has the largest app library. Compare them in our ${link('/blog/n8n-vs-make-vs-zapier/', 'n8n vs Make vs Zapier guide')}.` },
      { q: 'Can you fix my existing Make scenarios?', a: 'Yes, audits, error handling, performance and cost optimisation.' },
      { q: 'Can Make.com use AI?', a: 'Yes, through modules for OpenAI, Anthropic and others, or via HTTP calls to any AI API.' },
      { q: 'Who owns the scenarios?', a: 'You do, built in your Make organisation.' },
      { q: 'Can you migrate from Zapier to Make?', a: 'Yes, we rebuild Zaps as Make scenarios and often reduce costs in the process.' },
    ],
    related: ['zapier-automation', 'n8n-automation', 'workflow-automation', 'api-integration'],
  },

  'zapier-automation': {
    title: 'Zapier Automation Experts | Zapier Consultant & Zap Builder | Voxil AI',
    description:
      'Zapier experts who build reliable, documented Zaps, multi-step workflows, paths, filters, formatter, AI steps and webhooks, plus audits to cut task usage and fix broken automations.',
    h1: 'Zapier automation that’s <span class="text-gradient-teal">reliable and lean</span>',
    lead: 'Zapier connects more apps than anything else. We build Zaps that are documented, monitored and task-efficient, and audit existing accounts to fix failures and cut costs.',
    answer:
      '<strong>Zapier automation</strong> connects web apps through "Zaps", trigger-and-action workflows that move data and complete tasks automatically. Zapier supports thousands of apps, multi-step Zaps, paths, filters, formatters, webhooks and AI steps, making it the fastest way to automate simple and moderately complex processes.',
    facts: [
      { label: 'Platform', value: 'Zapier' },
      { label: 'Build time', value: 'Days' },
      { label: 'Audit', value: 'Available' },
      { label: 'Docs', value: 'Included' },
    ],
    pills: ['Multi-step Zaps', 'Paths', 'Webhooks', 'AI steps'],
    whatIs: {
      title: 'The quickest route from idea to automation',
      paras: [
        'Zapier’s strength is speed and breadth: if two apps exist, they probably connect. The risk is sprawl, dozens of Zaps nobody documented, burning tasks and failing quietly.',
        'We build Zaps with naming conventions, filters that prevent waste, error notifications and documentation, and audit existing accounts to consolidate, fix and reduce spend.',
      ],
    },
    included: [
      'Zap design and build',
      'Paths, filters and formatter logic',
      'Webhooks and custom requests',
      'AI steps where useful',
      'Error notifications',
      'Account audit and cleanup',
    ],
    features: [
      { icon: 'bolt', title: 'Fast builds', desc: 'Most automations live within days.' },
      { icon: 'sliders', title: 'Paths & filters', desc: 'Conditional logic without wasted tasks.' },
      { icon: 'code', title: 'Webhooks', desc: 'Connect tools without native Zapier apps.' },
      { icon: 'sparkles', title: 'AI steps', desc: 'Summaries, classification and drafting inside Zaps.' },
      { icon: 'currency', title: 'Task optimisation', desc: 'Audits that reduce task usage and plan costs.' },
      { icon: 'document', title: 'Documentation', desc: 'A register of every Zap and what it does.' },
    ],
    steps: [
      { title: 'Scope', desc: 'Define triggers, actions and conditions.' },
      { title: 'Build', desc: 'Zaps built with filters and error alerts.' },
      { title: 'Test', desc: 'End-to-end testing with real scenarios.' },
      { title: 'Document', desc: 'Zap register and handover.' },
    ],
    fit: [
      'Small teams that want quick automation wins',
      'Businesses with many SaaS tools',
      'Accounts with sprawling, undocumented Zaps',
      'Teams facing rising Zapier bills',
    ],
    industries: ['real-estate', 'law-firms', 'fitness-gyms', 'home-services'],
    integrations: ['Zapier', 'Google Workspace', 'Microsoft 365', 'Slack', 'HubSpot', 'GoHighLevel', 'Pipedrive', 'Calendly', 'Typeform', 'Airtable', 'Notion', 'Stripe', 'QuickBooks', 'OpenAI', 'Webhooks'],
    faqs: [
      { q: 'When should I use Zapier instead of Make or n8n?', a: 'For simpler workflows, fast setup, or when you need an app only Zapier supports. For heavy volume or complex logic, Make or n8n may be cheaper and more flexible.' },
      { q: 'Can you reduce my Zapier costs?', a: 'Often. Filters, consolidation and moving high-volume workflows to other tools can significantly lower task usage.' },
      { q: 'Can Zapier use AI?', a: 'Yes, Zapier offers AI steps and integrations with OpenAI, Anthropic and others.' },
      { q: 'What if a Zap fails?', a: 'We configure error notifications and, where possible, automatic replay so failures are caught quickly.' },
      { q: 'Do you offer Zapier training?', a: 'Yes, practical sessions for your team.' },
    ],
    related: ['make-automation', 'n8n-automation', 'workflow-automation', 'crm-automation'],
  },

  'n8n-automation': {
    title: 'n8n Automation Experts | Self-Hosted n8n Workflows & AI Agents | Voxil AI',
    description:
      'n8n automation experts: self-hosted or cloud n8n workflows, AI agents with tool calling, custom code nodes, queue mode scaling and secure deployment, automation you fully own.',
    h1: 'n8n automation and AI agents <span class="text-gradient-teal">you fully own</span>',
    lead: 'Self-hosted, flexible and cost-efficient at scale, n8n is our go-to for complex automations and AI agents. We deploy, secure and build on it so your workflows run on your infrastructure.',
    answer:
      '<strong>n8n automation</strong> uses n8n, a fair-code workflow automation platform that can be self-hosted or used in the cloud. It connects apps and APIs through node-based workflows, supports custom JavaScript and Python code, and includes AI agent nodes for building LLM-powered agents with tools and memory, with no per-task pricing when self-hosted.',
    facts: [
      { label: 'Hosting', value: 'Self-hosted or cloud' },
      { label: 'AI agents', value: 'Native' },
      { label: 'Code', value: 'JS & Python' },
      { label: 'Data control', value: 'Full' },
    ],
    pills: ['Self-hosting', 'AI agents', 'Custom code', 'Queue mode'],
    whatIs: {
      title: 'Automation without per-task pricing, or lock-in',
      paras: [
        'n8n gives engineers the speed of a visual builder with the escape hatch of real code. Self-hosted, it keeps sensitive data on your infrastructure and avoids per-task pricing that punishes high volume.',
        'We deploy n8n securely (Docker, managed cloud or your VPC), build workflows and AI agents with proper credentials management, error workflows and monitoring, and scale with queue mode when volume grows.',
      ],
    },
    included: [
      'n8n deployment: cloud, Docker or Kubernetes',
      'Security: SSO, credentials, backups',
      'Workflow development',
      'AI agents with tools and memory',
      'Error workflows and monitoring',
      'Scaling with queue mode and workers',
    ],
    features: [
      { icon: 'server', title: 'Self-hosting', desc: 'Deployed on your infrastructure with backups and updates.' },
      { icon: 'sparkles', title: 'AI agents', desc: 'LLM agents that use tools, memory and your data.' },
      { icon: 'code', title: 'Custom code', desc: 'JavaScript and Python nodes where no-code isn’t enough.' },
      { icon: 'shield', title: 'Security', desc: 'Credentials encrypted, access controlled, audit-friendly.' },
      { icon: 'layers', title: 'Scale', desc: 'Queue mode with workers for high-volume execution.' },
      { icon: 'chart', title: 'Monitoring', desc: 'Error workflows and alerts on failed executions.' },
    ],
    steps: [
      { title: 'Plan', desc: 'Hosting, security and workflow requirements.' },
      { title: 'Deploy', desc: 'n8n installed, secured and backed up.' },
      { title: 'Build', desc: 'Workflows and AI agents developed and tested.' },
      { title: 'Operate', desc: 'Monitoring, updates and optional support.' },
    ],
    fit: [
      'Teams with high-volume automations and rising SaaS costs',
      'Companies with data-residency or privacy requirements',
      'Engineering-led teams wanting code flexibility',
      'Businesses building internal AI agents',
    ],
    industries: ['medical-clinics', 'law-firms', 'insurance', 'real-estate'],
    integrations: ['n8n', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Hetzner', 'Postgres', 'Redis', 'OpenAI', 'Anthropic Claude', 'Ollama', 'Pinecone', 'Supabase', 'Slack', 'HubSpot', 'GoHighLevel', 'Webhooks'],
    faqs: [
      { q: 'Is n8n free?', a: 'n8n offers a self-hosted Community Edition under its fair-code licence, plus paid cloud and enterprise plans. Self-hosting has infrastructure and maintenance costs but no per-execution pricing.' },
      { q: 'Is n8n good for AI agents?', a: 'Yes. n8n has native AI agent nodes with tools, memory and vector-store integrations, making it one of the most flexible platforms for building LLM agents.' },
      { q: 'Should I self-host or use n8n Cloud?', a: 'Self-host for data control and high volume; use Cloud to avoid maintenance. We help you decide.' },
      { q: 'Can you migrate from Zapier or Make to n8n?', a: 'Yes, we rebuild workflows in n8n, typically reducing running costs at volume.' },
      { q: 'Do you maintain the n8n server?', a: 'Optionally, updates, backups, monitoring and scaling on a monthly plan.' },
    ],
    related: ['make-automation', 'zapier-automation', 'ai-chatbot-developer', 'api-integration'],
  },

  'api-integration': {
    title: 'Custom API Integration Services | Connect Any System | Voxil AI',
    description:
      'Custom API integration services: connect CRMs, ERPs, payment, scheduling and AI systems with secure, monitored integrations, REST, GraphQL, webhooks and middleware built by engineers.',
    h1: 'Custom API integrations for <span class="text-gradient-teal">when no-code stops</span>',
    lead: 'When off-the-shelf connectors can’t handle the volume, logic or security you need, we engineer integrations that are secure, observable and maintainable.',
    answer:
      '<strong>API integration</strong> is connecting software systems through their application programming interfaces so they exchange data and trigger actions automatically. Custom integrations handle authentication, data mapping and transformation, rate limits, retries, webhooks and error monitoring, enabling reliable, real-time connections between CRMs, ERPs, payment platforms and AI services.',
    facts: [
      { label: 'Protocols', value: 'REST · GraphQL · Webhooks' },
      { label: 'Languages', value: 'TypeScript · Python' },
      { label: 'Monitoring', value: 'Built-in' },
      { label: 'Code', value: 'Yours' },
    ],
    pills: ['REST & GraphQL', 'Webhooks', 'OAuth', 'Serverless'],
    whatIs: {
      title: 'Integrations are infrastructure. Build them like it.',
      paras: [
        'No-code tools are perfect until you hit rate limits, need complex transformations, handle sensitive data, or process thousands of records an hour. Then you need an engineered integration.',
        'We build integrations as small, well-tested services, with authentication, idempotency, retries, queueing and logs, deployed on serverless or your cloud, and documented so your team can own them.',
      ],
    },
    included: [
      'Integration architecture and data contracts',
      'Authentication: OAuth, API keys, JWT',
      'Data mapping, transformation and validation',
      'Rate-limit handling, retries and queues',
      'Deployment (serverless or your cloud)',
      'Logging, alerts and documentation',
    ],
    features: [
      { icon: 'code', title: 'Any API', desc: 'REST, GraphQL, SOAP and webhooks, documented or not.' },
      { icon: 'shield', title: 'Secure', desc: 'Secrets management, least-privilege access and encrypted transport.' },
      { icon: 'refresh', title: 'Resilient', desc: 'Idempotent operations, retries and dead-letter queues.' },
      { icon: 'server', title: 'Scalable', desc: 'Serverless or containerised services that scale with volume.' },
      { icon: 'sparkles', title: 'AI integrations', desc: 'Connect LLMs, voice agents and vector stores to your systems.' },
      { icon: 'chart', title: 'Observable', desc: 'Structured logs, metrics and alerts for every sync.' },
    ],
    steps: [
      { title: 'Discovery', desc: 'Systems, APIs, data ownership and volumes.' },
      { title: 'Design', desc: 'Data contracts, error strategy and architecture.' },
      { title: 'Build & test', desc: 'Automated tests against sandbox environments.' },
      { title: 'Deploy', desc: 'Production launch with monitoring and docs.' },
    ],
    fit: [
      'Businesses with systems that have no native connector',
      'High-volume data syncs beyond no-code limits',
      'Companies with security or compliance requirements',
      'SaaS products needing partner integrations',
    ],
    industries: ['insurance', 'medical-clinics', 'real-estate', 'solar'],
    integrations: ['REST', 'GraphQL', 'Webhooks', 'OAuth 2.0', 'Node.js', 'TypeScript', 'Python', 'AWS Lambda', 'Google Cloud Functions', 'Vercel', 'Cloudflare Workers', 'Postgres', 'Redis', 'Salesforce API', 'HubSpot API', 'GoHighLevel API', 'Stripe API'],
    faqs: [
      { q: 'When do I need a custom API integration?', a: 'When no native or no-code connector exists, when volume or logic exceeds no-code limits, or when security and reliability requirements demand engineered code.' },
      { q: 'Where will the integration run?', a: 'Serverless platforms (AWS Lambda, Vercel, Cloudflare), your cloud account, or a small container, chosen for cost and reliability.' },
      { q: 'What if the API has no documentation?', a: 'We work with vendors, inspect responses and build defensively with tests and monitoring.' },
      { q: 'Who maintains it?', a: 'You own the code; we document it and can provide ongoing support.' },
      { q: 'Can you integrate AI into our systems?', a: `Yes, LLMs, voice agents and RAG pipelines. See ${link('/services/ai-chatbot-developer/', 'AI chatbot development')}.` },
    ],
    related: ['ghl-integration', 'n8n-automation', 'ai-saas-development', 'vapi-ai-integration'],
  },

  'sales-funnel-builder': {
    title: 'Sales Funnel Builder Services | High-Converting Funnels | Voxil AI',
    description:
      'Done-for-you sales funnels: landing pages, offers, checkout, upsells, booking and automated follow-up, built in GoHighLevel, ClickFunnels, WordPress or custom, and optimised for conversion.',
    h1: 'Sales funnels that <span class="text-gradient-teal">convert and follow up</span>',
    lead: 'Offer, page, checkout, booking and follow-up, designed as one system. We build sales funnels that turn traffic into customers and keep working on the ones who don’t buy yet.',
    answer:
      'A <strong>sales funnel</strong> is the sequence of pages and messages that takes a prospect from first visit to purchase, typically a landing page, offer, order form or booking step, upsells, and automated follow-up. A sales funnel builder designs, writes, builds and optimises that sequence to maximise conversion.',
    facts: [
      { label: 'Build time', value: '2-4 weeks' },
      { label: 'Copywriting', value: 'Included' },
      { label: 'Platforms', value: 'GHL · ClickFunnels · WP' },
      { label: 'Follow-up', value: 'Automated' },
    ],
    pills: ['Landing pages', 'Checkout & upsells', 'Booking funnels', 'Follow-up'],
    whatIs: {
      title: 'Pages don’t sell. Systems do.',
      paras: [
        'A beautiful landing page without a clear offer, fast load time and follow-up converts a small fraction of visitors and forgets the rest. A funnel is the whole system.',
        'We start with the offer and audience, write conversion-focused copy, design fast mobile-first pages, set up checkout or booking, and connect automated follow-up, email, SMS and AI, for everyone who doesn’t convert on the first visit.',
      ],
    },
    included: [
      'Offer and funnel strategy',
      'Conversion copywriting',
      'Landing, sales and thank-you pages',
      'Checkout, order bumps and upsells',
      'Follow-up automation',
      'Analytics and A/B testing setup',
    ],
    features: [
      { icon: 'document', title: 'Copy that converts', desc: 'Headlines, offers and proof written for your audience.' },
      { icon: 'desktop', title: 'Mobile-first design', desc: 'Fast, clean pages built for how people actually browse.' },
      { icon: 'currency', title: 'Checkout & upsells', desc: 'Order bumps, one-click upsells and payment plans.' },
      { icon: 'calendar', title: 'Booking funnels', desc: 'Qualify and book calls for high-ticket offers.' },
      { icon: 'refresh', title: 'Follow-up', desc: 'Abandoned-checkout and nurture sequences built in.' },
      { icon: 'chart', title: 'Testing', desc: 'Analytics and A/B tests to keep improving conversion.' },
    ],
    steps: [
      { title: 'Strategy', desc: 'Audience, offer and funnel map.' },
      { title: 'Copy & design', desc: 'Pages written and designed.' },
      { title: 'Build & connect', desc: 'Checkout, CRM and automations wired.' },
      { title: 'Launch & optimise', desc: 'Go live, measure and test.' },
    ],
    fit: [
      'Coaches, consultants and course creators',
      'Service businesses selling packages or consultations',
      'Brands launching a new offer',
      'Advertisers whose landing pages underperform',
    ],
    industries: ['fitness-gyms', 'med-spas', 'real-estate', 'solar', 'home-services'],
    integrations: ['GoHighLevel', 'ClickFunnels', 'WordPress', 'Webflow', 'Stripe', 'PayPal', 'Calendly', 'Google Analytics 4', 'Meta Pixel', 'Google Tag Manager', 'Hotjar'],
    faqs: [
      { q: 'Which platform should my funnel be on?', a: 'Usually the one your CRM lives in, GoHighLevel for most service businesses, ClickFunnels or WordPress in some cases. Fewer tools mean fewer failure points.' },
      { q: 'Do you write the copy?', a: 'Yes, conversion copywriting is included.' },
      { q: 'How long does a funnel take?', a: 'Two to four weeks from strategy to launch.' },
      { q: 'Can you improve my existing funnel?', a: 'Yes, we audit conversion, speed and follow-up and fix the biggest leaks first.' },
      { q: 'Do you run the ads too?', a: `Yes, see ${link('/services/seo-paid-ads/', 'SEO & paid ads')}.` },
    ],
    related: ['lead-generation-funnel', 'website-design', 'seo-paid-ads', 'email-sms-marketing'],
  },

  'lead-generation-funnel': {
    title: 'Lead Generation Funnel Services | Lead Magnets, Quizzes & Booking | Voxil AI',
    description:
      'Lead generation funnels that fill your pipeline: lead magnets, quizzes, calculators and booking funnels connected to instant AI follow-up and your CRM.',
    h1: 'Lead generation funnels that <span class="text-gradient-teal">fill the calendar</span>',
    lead: 'Lead magnets, quizzes, calculators and booking funnels that turn visitors and ad clicks into qualified leads, with instant AI follow-up so they book while they’re interested.',
    answer:
      'A <strong>lead generation funnel</strong> captures contact details from potential customers in exchange for something valuable, a guide, quiz result, estimate, calculator or consultation, and then nurtures and qualifies them automatically until they book a call or buy.',
    facts: [
      { label: 'Build time', value: '1-3 weeks' },
      { label: 'Formats', value: 'Magnets · Quizzes · Calculators' },
      { label: 'Response', value: 'Instant' },
      { label: 'CRM', value: 'Connected' },
    ],
    pills: ['Lead magnets', 'Quizzes', 'Calculators', 'Booking'],
    whatIs: {
      title: 'Give value first. Capture intent. Follow up fast.',
      paras: [
        'Most visitors aren’t ready to "book a call". A good lead generation funnel meets them where they are, with a useful resource, a personalised quiz or an instant estimate, and earns their contact details.',
        `Then speed matters. We connect every funnel to instant follow-up by SMS, email, chat or AI voice, so leads hear from you in seconds. Try our own ${link('/resources/lead-loss-calculator/', 'lead loss calculator')} to see this in action.`,
      ],
    },
    included: [
      'Offer and lead-magnet strategy',
      'Landing pages and forms',
      'Quiz or calculator builds',
      'Instant multi-channel follow-up',
      'Lead scoring and CRM routing',
      'Ad and analytics tracking',
    ],
    features: [
      { icon: 'document', title: 'Lead magnets', desc: 'Guides, checklists and templates your audience actually wants.' },
      { icon: 'question', title: 'Quiz funnels', desc: 'Personalised results that segment and qualify leads.' },
      { icon: 'calculator', title: 'Calculators', desc: 'Instant estimates and ROI tools that capture high-intent leads.' },
      { icon: 'calendar', title: 'Booking funnels', desc: 'Qualify and book consultations in one flow.' },
      { icon: 'bolt', title: 'Speed-to-lead', desc: 'Automated SMS, email or AI call within seconds.' },
      { icon: 'chart', title: 'Tracking', desc: 'Cost per lead and per booking by source.' },
    ],
    steps: [
      { title: 'Offer', desc: 'Pick the magnet or tool your audience values.' },
      { title: 'Build', desc: 'Pages, forms, quiz or calculator.' },
      { title: 'Automate', desc: 'Follow-up, scoring and routing.' },
      { title: 'Drive traffic', desc: 'Ads, SEO or email, then optimise.' },
    ],
    fit: [
      'Service businesses needing more qualified enquiries',
      'Advertisers with high cost per lead',
      'B2B companies with long sales cycles',
      'Brands with traffic but few conversions',
    ],
    industries: ['solar', 'roofing', 'insurance', 'real-estate', 'med-spas', 'hvac'],
    integrations: ['GoHighLevel', 'HubSpot', 'Typeform', 'Tally', 'ScoreApp', 'Outgrow', 'WordPress', 'Webflow', 'Meta Ads', 'Google Ads', 'Twilio', 'Zapier', 'Make.com'],
    faqs: [
      { q: 'What’s the best lead magnet for my business?', a: 'One that solves a specific, urgent problem for your ideal customer, for service businesses, instant estimates and calculators often outperform generic guides.' },
      { q: 'Do quizzes really work?', a: 'Well-designed quizzes can convert well because they’re interactive and personalised, and they segment leads automatically.' },
      { q: 'How fast should leads be followed up?', a: `As fast as possible, ideally within minutes. See our ${link('/blog/speed-to-lead-statistics/', 'speed-to-lead statistics')}.` },
      { q: 'Can the funnel connect to my CRM?', a: 'Yes, GoHighLevel, HubSpot, Salesforce and others.' },
      { q: 'Do you drive traffic?', a: 'We can run ads and SEO, or connect the funnel to your existing traffic.' },
    ],
    related: ['sales-funnel-builder', 'ai-lead-generation', 'seo-paid-ads', 'ai-follow-up-system'],
  },

  'website-design': {
    title: 'Website Design & Development for Service Businesses | Voxil AI',
    description:
      'Fast, SEO-ready website design for service businesses, conversion-focused pages, AI chat, booking, schema markup and CRM integration. Built to rank in Google and AI search.',
    h1: 'Websites designed to <span class="text-gradient-teal">rank, convert and automate</span>',
    lead: 'Fast, beautiful, SEO- and AI-search-ready websites with booking, chat and CRM built in, so your site is your best salesperson, not just a brochure.',
    answer:
      'Professional <strong>website design</strong> for service businesses combines conversion-focused design, fast performance, mobile-first layouts and technical SEO, including structured data for search and AI answer engines, with built-in lead capture, booking, chat and CRM integration so visitors become enquiries automatically.',
    facts: [
      { label: 'Timeline', value: '3-6 weeks' },
      { label: 'Performance', value: 'Core Web Vitals' },
      { label: 'SEO', value: 'Schema-ready' },
      { label: 'Automation', value: 'Built in' },
    ],
    pills: ['Conversion design', 'Technical SEO', 'AI chat', 'Booking'],
    whatIs: {
      title: 'Your website is the first salesperson every lead meets',
      paras: [
        'Most small-business sites are slow, generic and disconnected from the tools that follow up. Visitors leave without enquiring, and those who do fill a form wait hours for a reply.',
        'We design sites around conversion and search: clear service pages, local and location pages, answer-first content, structured data, fast load times, plus AI chat, booking and CRM integration so every enquiry is captured and answered instantly.',
      ],
    },
    included: [
      'Strategy, sitemap and wireframes',
      'Custom design and copywriting',
      'Mobile-first, fast development',
      'Technical SEO and schema markup',
      'Chat, booking and CRM integration',
      'Analytics and launch support',
    ],
    features: [
      { icon: 'desktop', title: 'Custom design', desc: 'On-brand, modern design, not a recycled template.' },
      { icon: 'bolt', title: 'Fast by default', desc: 'Optimised for Core Web Vitals and mobile performance.' },
      { icon: 'search', title: 'SEO & AEO ready', desc: 'Semantic structure, schema and answer-first content.' },
      { icon: 'chat', title: 'AI chat', desc: 'A chatbot trained on your services captures leads 24/7.' },
      { icon: 'calendar', title: 'Online booking', desc: 'Visitors book directly into your calendar.' },
      { icon: 'database', title: 'CRM connected', desc: 'Every form, chat and booking lands in your CRM.' },
    ],
    steps: [
      { title: 'Discover', desc: 'Goals, audience, competitors and sitemap.' },
      { title: 'Design', desc: 'Wireframes and visual design for approval.' },
      { title: 'Build', desc: 'Development, content, SEO and integrations.' },
      { title: 'Launch', desc: 'QA, launch, analytics and training.' },
    ],
    fit: [
      'Service businesses with outdated or slow websites',
      'Companies expanding into new locations or services',
      'Brands not showing up in Google or AI answers',
      'Teams wanting their site connected to automation',
    ],
    industries: ['law-firms', 'med-spas', 'roofing', 'hvac', 'chiropractic', 'real-estate'],
    integrations: ['WordPress', 'Webflow', 'GoHighLevel Sites', 'Next.js', 'Vite', 'Tailwind CSS', 'Vercel', 'Netlify', 'Google Analytics 4', 'Google Search Console', 'Google Tag Manager', 'Calendly', 'HubSpot'],
    faqs: [
      { q: 'How long does a website take?', a: 'Three to six weeks for most service-business sites, depending on page count and content readiness.' },
      { q: 'Which platform do you build on?', a: 'WordPress, Webflow, GoHighLevel or custom code, chosen for your needs, budget and who will maintain it.' },
      { q: 'Will my site be optimised for AI search?', a: 'Yes, clean semantic HTML, structured data, answer-first content and entity consistency help AI Overviews and assistants understand and cite your business.' },
      { q: 'Do you write the content?', a: 'Yes, copywriting is included, with your input on services and differentiators.' },
      { q: 'Can you redesign without losing rankings?', a: 'Yes, we map redirects, preserve URLs where possible and protect existing SEO value.' },
    ],
    related: ['seo-paid-ads', 'sales-funnel-builder', 'ai-chatbots', 'lead-generation-funnel'],
  },

  'ai-saas-development': {
    title: 'AI SaaS Development Agency | Build Your AI Product | Voxil AI',
    description:
      'AI SaaS development from MVP to production: product design, LLM features, RAG, auth, billing, multi-tenancy and cloud infrastructure, built by engineers, owned by you.',
    h1: 'AI SaaS development, <span class="text-gradient-sky">MVP to production</span>',
    lead: 'When the AI is the product. We build full AI SaaS platforms, interface, model layer, auth, billing, multi-tenancy and infrastructure, and ship them to real users fast.',
    answer:
      '<strong>AI SaaS development</strong> is building a subscription software product whose core value comes from AI, such as LLM-powered generation, analysis, agents or voice. It covers product design, the AI and retrieval layer, user accounts and multi-tenancy, billing, security, evaluation and scalable cloud infrastructure.',
    facts: [
      { label: 'MVP', value: '6-12 weeks' },
      { label: 'Stack', value: 'TypeScript · Python' },
      { label: 'Billing', value: 'Stripe' },
      { label: 'IP', value: '100% yours' },
    ],
    pills: ['MVP builds', 'LLM features', 'Auth & billing', 'Scalable infra'],
    whatIs: {
      title: 'Demos are easy. Products are hard.',
      paras: [
        'Turning an AI prototype into a product customers pay for means solving everything around the model: accounts and teams, usage limits, billing, data isolation, latency, cost control, evaluation and support.',
        'We build AI SaaS with a small senior team, ship an MVP in weeks, and put the foundations in place, evals, observability, cost tracking, that let you iterate quickly without breaking trust.',
      ],
    },
    included: [
      'Product scoping and UX design',
      'LLM, RAG and agent features',
      'Auth, teams and multi-tenancy',
      'Stripe subscriptions and usage billing',
      'Cloud infrastructure and CI/CD',
      'Evals, observability and cost tracking',
    ],
    features: [
      { icon: 'rocket', title: 'Fast MVPs', desc: 'Working product in users’ hands in weeks, not quarters.' },
      { icon: 'sparkles', title: 'AI features', desc: 'Generation, search, agents and voice built on leading models.' },
      { icon: 'users', title: 'Multi-tenancy', desc: 'Teams, roles and data isolation from day one.' },
      { icon: 'currency', title: 'Billing', desc: 'Subscriptions, trials, usage metering and invoicing.' },
      { icon: 'shield', title: 'Security', desc: 'Auth, encryption, audit logs and prompt-injection defences.' },
      { icon: 'chart', title: 'Unit economics', desc: 'Per-customer AI cost tracking to protect margins.' },
    ],
    steps: [
      { title: 'Scope', desc: 'Users, core workflow and MVP boundaries.' },
      { title: 'Design', desc: 'UX, architecture and AI approach.' },
      { title: 'Build', desc: 'Weekly releases with demos you can click.' },
      { title: 'Launch & scale', desc: 'Production launch, monitoring and iteration.' },
    ],
    fit: [
      'Founders validating an AI product idea',
      'Businesses turning internal AI tools into products',
      'Agencies productising services as SaaS',
      'Startups needing senior engineering without hiring a team',
    ],
    industries: ['real-estate', 'insurance', 'law-firms', 'medical-clinics'],
    integrations: ['Next.js', 'React', 'Node.js', 'Python', 'Postgres', 'Supabase', 'Prisma', 'Stripe', 'Clerk', 'Auth.js', 'OpenAI', 'Anthropic Claude', 'Vercel', 'AWS', 'Cloudflare', 'Sentry', 'PostHog'],
    faqs: [
      { q: 'How long does it take to build an AI SaaS MVP?', a: 'Typically six to twelve weeks to a first production release, depending on scope.' },
      { q: 'Who owns the IP?', a: 'You do, code, designs, prompts and infrastructure.' },
      { q: 'How do you control AI costs?', a: 'Model routing, caching, prompt optimisation, usage limits and per-customer cost tracking.' },
      { q: 'Can you work with our in-house team?', a: 'Yes, we can lead the build or augment your engineers.' },
      { q: 'Do you support after launch?', a: 'Yes, through ongoing development retainers or a structured handover to your team.' },
    ],
    related: ['ai-chatbot-developer', 'api-integration', 'ghl-white-label-saas', 'ai-automation-consultant'],
  },
};
