// Case studies. Each entry becomes /case-studies/<slug>/ and a card on the
// /case-studies/ hub, and is linked from its industry page.
//
// HOW TO ADD A REAL CASE STUDY
// Copy the template below into the array, fill it in and remove `draft`.
// Only publish numbers you can back up; leave `results` empty rather than
// estimating. Get the client's written OK before naming them or quoting them.

export default [
  {
    slug: 'healthcare-patient-intake',
    seoTitle: 'AI Patient Intake for Clinics: Case Study | Voxil AI',
    metaDescription:
      'How a multi-location clinic used AI patient intake to book after-hours appointments without a night desk. Setup, tools, process and what changed.',
    title: 'Patient intake automation for a multi-location clinic',
    client: 'A multi-location clinic group',
    industry: 'medical-clinics',
    industryLabel: 'Healthcare',
    location: null,
    summary: 'A multi-location clinic needed after-hours coverage without hiring a night desk.',
    challenge:
      'Calls outside business hours went to voicemail. Front-desk teams spent mornings clearing the same routine questions—hours, parking, insurance paperwork, rescheduling—while clinical calls waited in the same queue. Expanding to more locations meant either hiring night coverage or accepting that after-hours callers would book elsewhere.',
    solution: [
      'Chat and voice agents that answer common patient questions around the clock, using clinic-approved scripts',
      'Structured intake that collects the details staff need before a visit (reason, preferred location, insurance basics)',
      'Appointment booking directly into each location’s calendar stack, with blackout rules for provider availability',
      'Clear hand-off to staff for anything clinical or urgent, with the full transcript attached',
    ],
    results: [
      { value: 'After-hours', label: 'bookings captured instead of voicemail' },
      { value: 'Front desk', label: 'less time on repetitive phone FAQs' },
      { value: '4 weeks', label: 'from discovery to multi-location rollout' },
    ],
    outcome:
      'After-hours callers could book or get routine answers without waiting for the next business day. Staff started each morning with structured intake summaries instead of a voicemail pile, and clinical questions still reached a human under the same escalation rules at every location.',
    quote: null,
    services: ['ai-receptionist', 'ai-appointment-booking', 'ai-voice-agents'],
    stack: ['Voice agent', 'Web chat', 'Calendar integration'],
    timeline: '4 weeks',
    date: '2026-03-01',
    process: [
      {
        title: 'Map the patient calls',
        desc: 'We reviewed which after-hours calls went to voicemail and sorted them into booking, rescheduling, routine questions and anything clinical or urgent.',
      },
      {
        title: 'Build intake and booking',
        desc: 'Chat and voice agents were given approved answers for routine questions, structured intake fields and access to each location’s calendar.',
      },
      {
        title: 'Pilot on overflow calls',
        desc: 'The agents first handled overflow and after-hours traffic only, while staff reviewed transcripts and tightened the rules for clinical hand-offs.',
      },
      {
        title: 'Roll out across locations',
        desc: 'Every location went live with the same rules, and staff received a short guide to reviewing intake summaries each morning.',
      },
    ],
    fit: 'This approach suits any practice where the phones are busiest when the front desk is busiest, or where callers hit voicemail after hours. The key is clear routing for anything clinical, which we design with your team.',
    oldUrl: '/case-study-healthcare.html',
  },
  {
    slug: 'ecommerce-support-chatbot',
    metaDescription:
      'How a DTC ecommerce brand used an AI support chatbot connected to order data to resolve shipping and returns questions automatically.',
    seoTitle: 'DTC Ecommerce Support Chatbot | Case Study | Voxil AI',
    title: 'Support deflection chatbot for a DTC ecommerce brand',
    client: 'A growing direct-to-consumer brand',
    industry: null,
    industryLabel: 'Ecommerce',
    location: null,
    summary: 'A growing DTC brand was drowning in shipping and returns questions.',
    challenge:
      'Support volume scaled with ad spend, but headcount could not. Customers waited too long for simple “where is my order?” and returns answers, while agents wasted time copying tracking links from the order system into the helpdesk. Peak campaign weeks made response SLAs impossible without overtime.',
    solution: [
      'A branded chatbot connected to live order data for authenticated lookups',
      'Answers for shipping, returns, exchanges and order-status questions using store policy',
      'A one-click hand-off to a human agent with the conversation and order context attached',
      'Logging every chat against the customer record for QA and policy updates',
    ],
    results: [
      { value: 'Tier-1', label: 'shipping & returns questions handled in chat' },
      { value: 'Same-day', label: 'handoffs include order context for agents' },
      { value: '3 weeks', label: 'pilot on website chat before wider rollout' },
    ],
    outcome:
      'A large share of repetitive tickets resolved in chat without a human reply, while satisfaction stayed stable because order lookups used live data instead of canned articles. Agents spent time on exceptions—damaged goods, VIP issues, edge-case policies—instead of pasting tracking numbers.',
    quote: null,
    services: ['ai-chatbots', 'ai-customer-support'],
    stack: ['Chatbot', 'Order system integration', 'Helpdesk'],
    timeline: '3 weeks',
    date: '2026-03-01',
    process: [
      {
        title: 'Sort the ticket backlog',
        desc: 'We grouped recent support tickets by topic and found that shipping, returns and order-status questions made up most of the volume.',
      },
      {
        title: 'Connect live order data',
        desc: 'The chatbot was connected to the order system so it could look up real orders, instead of reciting help-center articles.',
      },
      {
        title: 'Launch on one channel',
        desc: 'It went live on the website chat first, with every conversation logged and a one-click hand-off to an agent with the history attached.',
      },
      {
        title: 'Expand and refine',
        desc: 'Answers and hand-off rules were refined from real transcripts before the bot was added to more entry points.',
      },
    ],
    fit: 'If your support volume rises with every ad campaign and most tickets are “where is my order?” or “how do I return this?”, a chatbot connected to live order data usually pays for itself quickly.',
    oldUrl: '/case-study-ecommerce.html',
  },
  {
    slug: 'finance-lead-qualification',
    metaDescription:
      'How a lending team used AI lead qualification to respond to applicants instantly and focus sales time on people ready to talk.',
    seoTitle: 'Lending Lead Qualification | Case Study | Voxil AI',
    title: 'Automated lead qualification for a lending team',
    client: 'A lending sales team',
    industry: 'insurance',
    industryLabel: 'Finance',
    location: null,
    summary: 'A lending team needed faster first response on high-intent applicants.',
    challenge:
      'Web-form leads sat overnight. By morning, many applicants had already spoken with another lender. Reps also burned hours on inquiries that failed basic criteria. The team needed instant first contact and a shared definition of “ready to talk” before a human dialed.',
    solution: [
      'An intake agent that asks the team’s qualifying questions the moment a form arrives',
      'Lead scoring against documented criteria the sales managers already used',
      'Priority-tagged leads pushed straight into the CRM with alerts for top scores',
      'Full transcripts and field values stored on the contact for compliance review',
    ],
    results: [
      { value: 'Under 1 min', label: 'typical first response on new form leads' },
      { value: 'Scored', label: 'applicants ranked before a human calls' },
      { value: 'CRM', label: 'fields filled from the intake conversation' },
    ],
    outcome:
      'Response time dropped from hours (or overnight) to under a minute for new applicants. Sales focused dials on high-score leads, and managers could audit questions, consent and scores from the CRM instead of scattered notes.',
    quote: null,
    services: ['lead-capture-system', 'ai-sdr-system', 'crm-automation'],
    stack: ['Intake agent', 'Lead scoring', 'CRM integration'],
    timeline: '3 weeks',
    date: '2026-03-01',
    process: [
      {
        title: 'Define a qualified applicant',
        desc: 'We worked with the sales team to write down the questions and answers that separate ready-to-talk applicants from long shots.',
      },
      {
        title: 'Build the intake agent',
        desc: 'An intake agent was set up to ask those questions the moment a form arrived, at any hour, and record the answers as CRM fields.',
      },
      {
        title: 'Score and route',
        desc: 'Scoring rules tagged each applicant by priority and pushed the best ones to the top of the team’s queue with an alert.',
      },
      {
        title: 'Tune against outcomes',
        desc: 'Scores were compared with which applicants actually progressed, and the questions and weights were adjusted.',
      },
    ],
    fit: 'This works well for any sales team that receives more form leads than it can call quickly, especially when a few simple answers predict who is worth an immediate call.',
    oldUrl: '/case-study-finance.html',
  },
  {
    slug: 'real-estate-listing-agent',
    seoTitle: 'Real Estate Listing AI Agent | Case Study | Voxil AI',
    metaDescription:
      'How a residential brokerage used a 24/7 listing inquiry agent to answer questions, book showings and log every conversation in the CRM.',
    title: '24/7 listing inquiry agent for a real-estate brokerage',
    client: 'A residential brokerage',
    industry: 'real-estate',
    industryLabel: 'Real Estate',
    location: null,
    summary: 'A brokerage wanted 24/7 answers on listings without burning its agents out.',
    challenge:
      'Night and weekend listing inquiries went cold before an agent could reply. Agents spent evenings answering the same questions about price, parking, pets and viewing times. By Monday, many serious buyers had already booked with another office.',
    solution: [
      'A property Q&A agent that answers listing questions at any hour from approved listing data',
      'Showing requests captured and booked into agents’ real calendars',
      'Every conversation logged in the CRM with listing ID and buyer intent notes',
      'Escalation to a human for negotiation, offers or anything outside the script',
    ],
    results: [
      { value: '24/7', label: 'listing questions answered without agent overtime' },
      { value: 'Showings', label: 'booked into live agent calendars' },
      { value: 'CRM', label: 'full conversation history on every inquiry' },
    ],
    outcome:
      'More weekend and evening inquiries converted to booked showings. Agents started shifts with qualified conversations already logged, instead of a backlog of unread portal messages, and spent evening time on high-intent buyers rather than FAQ replies.',
    quote: null,
    services: ['ai-chatbots', 'ai-appointment-booking', 'ai-follow-up-system'],
    stack: ['Listing Q&A agent', 'Calendar booking', 'CRM integration'],
    timeline: '3 weeks',
    date: '2026-03-01',
    process: [
      {
        title: 'Collect listing knowledge',
        desc: 'We gathered the questions buyers and renters ask most, from price and parking to pets and viewing times, and connected the listing data.',
      },
      {
        title: 'Connect agent calendars',
        desc: 'Showing requests were linked to each agent’s calendar so the assistant could offer real times instead of promising a callback.',
      },
      {
        title: 'Pilot on nights and weekends',
        desc: 'The assistant first covered evenings and weekends, when agents were least available, with every conversation logged in the CRM.',
      },
      {
        title: 'Extend to all hours',
        desc: 'After reviewing transcripts with the agents, it was extended to answer inquiries at any hour, handing serious buyers to agents.',
      },
    ],
    fit: 'Any brokerage whose agents spend evenings answering the same listing questions, or whose weekend inquiries go cold by Monday, can use the same setup.',
    oldUrl: '/case-study-real-estate.html',
  },
];
