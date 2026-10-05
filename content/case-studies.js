// Case studies. Each entry becomes /case-studies/<slug>/ and a card on the
// /case-studies/ hub, and is linked from its industry page.
//
// HOW TO ADD A REAL CASE STUDY
// Copy the template below into the array, fill it in and remove `draft`.
// Only publish numbers you can back up; leave `results` empty rather than
// estimating. Get the client's written OK before naming them or quoting them.
//
// {
//   slug: 'dental-clinic-ai-receptionist',          // URL: /case-studies/<slug>/
//   title: 'AI receptionist for a 3-location dental group',
//   seoTitle: 'Dental AI Receptionist | Case Study | Voxil AI', // max 60 chars
//   client: 'Bright Smile Dental',                  // or a description: 'A 3-location dental group'
//   industry: 'medical-clinics',                    // slug from INDUSTRIES in site.js, or null
//   industryLabel: 'Healthcare',                    // label shown on the card
//   location: 'london',                             // slug from LOCATION_GROUPS in site.js, or null
//   summary: 'One-sentence overview shown on cards and in search results.',
//   challenge: 'What was going wrong, in the client’s words where possible.',
//   solution: ['What we built, one bullet per system or integration', '...'],
//   results: [                                      // headline metrics (value + label)
//     { value: '38%', label: 'more appointments booked after hours' },
//     { value: '11s', label: 'median time to answer' },
//   ],
//   outcome: 'Short paragraph describing the result in plain words.',
//   quote: { text: 'What the client said.', name: 'Jane Smith', role: 'Practice Manager' },
//   services: ['ai-receptionist', 'ai-appointment-booking'], // service slugs
//   stack: ['Retell AI', 'GoHighLevel', 'Google Calendar'],
//   timeline: '3 weeks',
//   date: '2026-09-01',
//   process: [{ title, desc }, …],                 // four steps describing how this project ran
//   fit: 'Who else this approach suits.',
//   draft: true,                                    // drafts are not built
// },

export default [
  {
    slug: 'healthcare-patient-intake',
    seoTitle: 'Clinic Patient Intake Automation | Case Study | Voxil AI',
    title: 'Patient intake automation for a multi-location clinic',
    client: 'A multi-location clinic group',
    industry: 'medical-clinics',
    industryLabel: 'Healthcare',
    location: null,
    summary: 'A multi-location clinic needed after-hours coverage without hiring a night desk.',
    challenge: 'Calls outside business hours went to voicemail, and staff spent much of the day triaging the same routine questions by phone.',
    solution: [
      'Chat and voice agents that answer common patient questions around the clock',
      'Structured intake that collects the details staff need before a visit',
      'Appointment booking directly into the clinic’s calendar stack',
      'Clear hand-off to staff for anything clinical or urgent',
    ],
    results: [],
    outcome: 'After-hours bookings increased and staff spent less time on repetitive phone work.',
    quote: null,
    services: ['ai-receptionist', 'ai-appointment-booking', 'ai-voice-agents'],
    stack: ['Voice agent', 'Web chat', 'Calendar integration'],
    timeline: null,
    date: '2026-03-01',
    process: [
      { title: 'Map the patient calls', desc: 'We reviewed which after-hours calls went to voicemail and sorted them into booking, rescheduling, routine questions and anything clinical or urgent.' },
      { title: 'Build intake and booking', desc: 'Chat and voice agents were given approved answers for routine questions, structured intake fields and access to each location’s calendar.' },
      { title: 'Pilot on overflow calls', desc: 'The agents first handled overflow and after-hours traffic only, while staff reviewed transcripts and tightened the rules for clinical hand-offs.' },
      { title: 'Roll out across locations', desc: 'Every location went live with the same rules, and staff received a short guide to reviewing intake summaries each morning.' },
    ],
    fit: 'This approach suits any practice where the phones are busiest when the front desk is busiest, or where callers hit voicemail after hours. The key is clear routing for anything clinical, which we design with your team.',
    oldUrl: '/case-study-healthcare.html',
  },
  {
    slug: 'ecommerce-support-chatbot',
    seoTitle: 'DTC Ecommerce Support Chatbot | Case Study | Voxil AI',
    title: 'Support deflection chatbot for a DTC ecommerce brand',
    client: 'A growing direct-to-consumer brand',
    industry: null,
    industryLabel: 'Ecommerce',
    location: null,
    summary: 'A growing DTC brand was drowning in shipping and returns questions.',
    challenge: 'Support volume scaled with ad spend, but support headcount could not keep up, and customers waited too long for simple answers.',
    solution: [
      'A branded chatbot connected to live order data',
      'Answers for shipping, returns and order-status questions',
      'A clear hand-off path to a human agent with the conversation attached',
    ],
    results: [],
    outcome: 'A large share of tickets were resolved automatically while customer satisfaction stayed stable.',
    quote: null,
    services: ['ai-chatbots', 'ai-customer-support'],
    stack: ['Chatbot', 'Order system integration', 'Helpdesk'],
    timeline: null,
    date: '2026-03-01',
    process: [
      { title: 'Sort the ticket backlog', desc: 'We grouped recent support tickets by topic and found that shipping, returns and order-status questions made up most of the volume.' },
      { title: 'Connect live order data', desc: 'The chatbot was connected to the order system so it could look up real orders, instead of reciting help-center articles.' },
      { title: 'Launch on one channel', desc: 'It went live on the website chat first, with every conversation logged and a one-click hand-off to an agent with the history attached.' },
      { title: 'Expand and refine', desc: 'Answers and hand-off rules were refined from real transcripts before the bot was added to more entry points.' },
    ],
    fit: 'If your support volume rises with every ad campaign and most tickets are “where is my order?” or “how do I return this?”, a chatbot connected to live order data usually pays for itself quickly.',
    oldUrl: '/case-study-ecommerce.html',
  },
  {
    slug: 'finance-lead-qualification',
    seoTitle: 'Lending Lead Qualification | Case Study | Voxil AI',
    title: 'Automated lead qualification for a lending team',
    client: 'A lending sales team',
    industry: 'insurance',
    industryLabel: 'Finance',
    location: null,
    summary: 'A lending team needed faster first response on high-intent applicants.',
    challenge: 'Leads sat in web forms overnight, and the sales team wasted time on inquiries that were never going to qualify.',
    solution: [
      'An intake agent that asks the team’s qualifying questions',
      'Lead scoring against the team’s criteria',
      'Priority-tagged leads pushed straight into the CRM',
    ],
    results: [],
    outcome: 'Response time dropped and the sales team focused on applicants who were ready to talk.',
    quote: null,
    services: ['lead-capture-system', 'ai-sdr-system', 'crm-automation'],
    stack: ['Intake agent', 'Lead scoring', 'CRM integration'],
    timeline: null,
    date: '2026-03-01',
    process: [
      { title: 'Define a qualified applicant', desc: 'We worked with the sales team to write down the questions and answers that separate ready-to-talk applicants from long shots.' },
      { title: 'Build the intake agent', desc: 'An intake agent was set up to ask those questions the moment a form arrived, at any hour, and record the answers as CRM fields.' },
      { title: 'Score and route', desc: 'Scoring rules tagged each applicant by priority and pushed the best ones to the top of the team’s queue with an alert.' },
      { title: 'Tune against outcomes', desc: 'Scores were compared with which applicants actually progressed, and the questions and weights were adjusted.' },
    ],
    fit: 'This works well for any sales team that receives more form leads than it can call quickly, especially when a few simple answers predict who is worth an immediate call.',
    oldUrl: '/case-study-finance.html',
  },
  {
    slug: 'real-estate-listing-agent',
    seoTitle: 'Real Estate Listing AI Agent | Case Study | Voxil AI',
    title: '24/7 listing inquiry agent for a real-estate brokerage',
    client: 'A residential brokerage',
    industry: 'real-estate',
    industryLabel: 'Real Estate',
    location: null,
    summary: 'A brokerage wanted 24/7 answers on listings without burning its agents out.',
    challenge: 'Night and weekend inquiries went cold before an agent could reply, and agents spent evenings answering the same listing questions.',
    solution: [
      'A property Q&A agent that answers listing questions at any hour',
      'Showing requests captured and booked into agents’ calendars',
      'Every conversation logged in the CRM',
    ],
    results: [],
    outcome: 'More inquiries converted to booked showings with less manual follow-up.',
    quote: null,
    services: ['ai-chatbots', 'ai-appointment-booking', 'ai-follow-up-system'],
    stack: ['Listing Q&A agent', 'Calendar booking', 'CRM integration'],
    timeline: null,
    date: '2026-03-01',
    process: [
      { title: 'Collect listing knowledge', desc: 'We gathered the questions buyers and renters ask most, from price and parking to pets and viewing times, and connected the listing data.' },
      { title: 'Connect agent calendars', desc: 'Showing requests were linked to each agent’s calendar so the assistant could offer real times instead of promising a callback.' },
      { title: 'Pilot on nights and weekends', desc: 'The assistant first covered evenings and weekends, when agents were least available, with every conversation logged in the CRM.' },
      { title: 'Extend to all hours', desc: 'After reviewing transcripts with the agents, it was extended to answer inquiries at any hour, handing serious buyers to agents.' },
    ],
    fit: 'Any brokerage whose agents spend evenings answering the same listing questions, or whose weekend inquiries go cold by Monday, can use the same setup.',
    oldUrl: '/case-study-real-estate.html',
  },
];
