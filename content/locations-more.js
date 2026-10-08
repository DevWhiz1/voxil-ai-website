// Additional location pages (second wave). Same shape as content/locations.js,
// plus `useCases` and `faq`, which location.js reads directly from the entry.
// Voxil AI is remote-first: never claim a local office or street address here.

const city = (name, state) => ({ '@type': 'City', name, containedInPlace: { '@type': 'State', name: state } });
const country = (name) => ({ '@type': 'Country', name });

const TCPA_SHORT = 'For outbound work, the TCPA applies to US numbers, and the FCC treats AI-generated voices as “artificial” voices, so automated calls need prior express consent.';

export default {
  // ------------------------------------------------------------- US EAST
  boston: {
    description: 'AI automation agency serving Boston: AI receptionists, voice agents, chatbots and CRM automation for healthcare, biotech, higher education, legal and home-service businesses.',
    lead: 'AI receptionists, voice agents and workflow automation for Boston’s clinics, life-science companies, universities, law firms and home-service businesses.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and automation for Boston businesses</strong>, from Back Bay practices and Cambridge life-science teams to South Shore contractors. Systems connect to your calendar and CRM, follow Massachusetts consent and data-security rules, and go live in weeks.',
    tzShort: 'Eastern Time',
    languages: 'EN · ES · PT',
    pills: ['Back Bay', 'Cambridge', 'Seaport', 'North Shore'],
    marketTitle: 'Healthcare, research and the businesses around them',
    market: [
      'Greater Boston runs on hospitals, research institutions, universities and the professional firms that serve them. Practices, specialty clinics and patient-facing teams handle constant scheduling demand, while research organizations want secure internal AI tools for documents and knowledge.',
      'Outside the city core, home-service, real-estate and property-management businesses across the suburbs face long winters, heating emergencies and seasonal surges. AI answering, triage and follow-up make sure those calls are captured even when crews are out.',
    ],
    industries: ['medical-clinics', 'law-firms', 'real-estate', 'home-services', 'hvac', 'chiropractic'],
    areas: ['Back Bay', 'Cambridge', 'Somerville', 'Seaport', 'Quincy', 'Newton', 'North Shore', 'MetroWest'],
    services: ['ai-receptionist', 'ai-appointment-booking', 'rag-chatbot-development', 'ai-voice-agents', 'workflow-automation', 'ai-follow-up-system'],
    servicesLead: 'Scheduling-heavy practices and knowledge-heavy organizations see the quickest returns.',
    compliance: {
      title: 'Massachusetts recording consent and data security',
      text: `Massachusetts requires the consent of all parties to record a conversation, so our voice agents announce recording at the start of every call. The state’s data-security regulation (201 CMR 17.00) also sets expectations for protecting residents’ personal information, which we reflect in access controls and retention settings. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI agents record calls in Massachusetts?', a: 'Yes, with consent from everyone on the call. The agent discloses recording at the start, and callers who object can continue without recording or ask for a person.' },
      { q: 'Do you build internal AI tools for research teams?', a: 'Yes. Knowledge base assistants can search protocols, papers and internal documentation with source citations and permission controls.' },
    ],
    useCases: [
      { icon: 'heart', title: 'Specialty practice scheduling', desc: 'Referral calls, new-patient booking and appointment changes are handled automatically, with prep instructions sent by text.' },
      { icon: 'document', title: 'Research knowledge assistants', desc: 'Teams in Cambridge and Kendall Square search protocols and internal documents with an assistant that cites its sources.' },
      { icon: 'fire', title: 'No-heat emergencies in winter', desc: 'HVAC and plumbing companies triage overnight emergency calls and dispatch on-call technicians instantly.' },
    ],
    faq: { q: 'Can the AI speak Portuguese?', a: 'Yes. Agents can respond in Portuguese and Spanish as well as English, which suits businesses serving Greater Boston’s Brazilian and Cape Verdean communities.' },
    schemaPlace: city('Boston', 'Massachusetts'),
    nearby: ['new-york', 'philadelphia'],
  },

  'washington-dc': {
    description: 'AI automation for Washington DC businesses: AI receptionists, voice agents, chatbots and workflow automation for law firms, associations, contractors and healthcare across DC, Maryland and Virginia.',
    lead: 'AI voice agents, chatbots and workflow automation for DC-area law firms, associations, government contractors, clinics and service businesses.',
    answer: 'Voxil AI builds <strong>AI receptionists, voice agents and automation for Washington DC businesses</strong> and organizations across Maryland and Northern Virginia. We design for each jurisdiction’s recording rules and the security expectations common in the region.',
    tzShort: 'Eastern Time',
    languages: 'EN · ES · AM',
    pills: ['Downtown DC', 'Arlington', 'Bethesda', 'Tysons'],
    marketTitle: 'Three jurisdictions, one metro',
    market: [
      'The DC metro is built around government, associations, nonprofits, law and the contractors that support them. These organizations handle heavy inquiry volumes, membership questions and document-intensive workflows where accuracy and security matter.',
      'The region’s households keep clinics, home-service companies and real-estate teams busy across Maryland and Northern Virginia. AI answering and follow-up help those businesses respond instantly across a large, commuter-heavy area.',
    ],
    industries: ['law-firms', 'medical-clinics', 'real-estate', 'home-services', 'insurance', 'hvac'],
    areas: ['Downtown DC', 'Capitol Hill', 'Arlington', 'Alexandria', 'Bethesda', 'Silver Spring', 'Tysons', 'Reston'],
    services: ['ai-receptionist', 'conversational-ivr', 'rag-chatbot-development', 'ai-document-processing', 'ai-voice-agents', 'crm-automation'],
    servicesLead: 'Organizations with heavy inquiry and document volumes benefit most from these systems.',
    compliance: {
      title: 'Different recording rules across DC, Maryland and Virginia',
      text: `DC and Virginia allow one-party consent to record calls, while Maryland requires all parties to consent. Because callers come from all three, our agents disclose recording on every call. We also scope data handling carefully for organizations with contractual security requirements. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can you work with associations and nonprofits?', a: 'Yes. Member-service agents answer membership, event and renewal questions, and knowledge base chatbots help members find resources.' },
      { q: 'Do you handle Maryland’s all-party consent rule?', a: 'Yes. Every call starts with a recording disclosure, which satisfies the strictest of the three jurisdictions callers may be in.' },
    ],
    useCases: [
      { icon: 'users', title: 'Association member services', desc: 'Membership renewals, event registration and benefits questions are answered by phone and chat, with complex requests routed to staff.' },
      { icon: 'document', title: 'Document-heavy workflows', desc: 'Contractors and firms extract data from forms and correspondence into their systems, with human review for exceptions.' },
      { icon: 'scale', title: 'Law firm intake', desc: 'Firms capture new matters around the clock and route them by practice area for conflict checks.' },
    ],
    faq: { q: 'Do you serve Northern Virginia and suburban Maryland?', a: 'Yes. We work across the whole DMV, including Arlington, Fairfax, Loudoun, Montgomery and Prince George’s counties.' },
    schemaPlace: city('Washington', 'District of Columbia'),
    nearby: ['philadelphia', 'new-york', 'raleigh'],
  },

  tampa: {
    description: 'AI automation agency serving Tampa Bay: AI receptionists, voice agents, speed-to-lead and CRM automation for roofing, home services, real estate, insurance and healthcare.',
    lead: 'AI answering, speed-to-lead and follow-up automation for Tampa Bay contractors, insurance agencies, real-estate teams and clinics, built for storm-season surges.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and automation for Tampa Bay businesses</strong>, from St. Petersburg real-estate teams to Brandon roofers and Clearwater clinics. Agents answer every call, qualify leads and book appointments, designed around Florida’s calling and recording rules.',
    tzShort: 'Eastern Time',
    languages: 'EN · ES',
    pills: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon'],
    marketTitle: 'Growth, storms and a lot of phone calls',
    market: [
      'Tampa Bay has been one of Florida’s fastest-growing regions, bringing steady demand for real estate, healthcare and home services. New residents search, call and compare quickly, and the first business to respond usually wins.',
      'Hurricane season changes everything for roofers, restoration companies and insurance agencies. Call volumes spike overnight, and every unanswered call is a customer who calls the next company on the list. AI agents scale instantly for those surges.',
    ],
    industries: ['roofing', 'home-services', 'real-estate', 'insurance', 'medical-clinics', 'hvac'],
    areas: ['Downtown Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Wesley Chapel', 'Riverview', 'Lakeland', 'New Port Richey'],
    services: ['speed-to-lead-automation', 'ai-phone-answering', 'ai-calling-bots', 'ai-follow-up-system', 'ai-lead-reactivation', 'gohighlevel-automation'],
    servicesLead: 'Speed and surge capacity matter most in Tampa Bay’s storm-driven markets.',
    compliance: {
      title: 'Florida’s telemarketing and recording rules',
      text: `Florida requires all-party consent to record calls, and the Florida Telephone Solicitation Act adds state-level rules for automated sales calls and texts on top of federal law. We configure recording disclosures, consent capture and calling windows for Florida numbers. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI handle storm-season call surges?', a: 'Yes. AI agents answer unlimited simultaneous calls, capture address and damage details, prioritize urgent cases and book inspections by area.' },
      { q: 'Do you follow the Florida Telephone Solicitation Act?', a: 'Yes. Automated sales outreach only goes to contacts with appropriate consent, within permitted calling hours, with clear opt-out handling.' },
    ],
    useCases: [
      { icon: 'building', title: 'Post-storm roofing inspections', desc: 'Roofers capture every inspection request after a storm and book them by zone, without voicemail backlogs.' },
      { icon: 'shield', title: 'Insurance claim and quote calls', desc: 'Agencies triage policy questions and new quotes during peak periods and route claims to the right staff.' },
      { icon: 'home', title: 'Relocation buyer leads', desc: 'Real-estate teams respond instantly to out-of-state buyers and schedule tours, in person or by video.' },
    ],
    faq: { q: 'Do you serve Pinellas, Pasco and Polk counties?', a: 'Yes. We work with businesses across Tampa Bay, including Pinellas, Pasco, Hillsborough and Polk counties.' },
    schemaPlace: city('Tampa', 'Florida'),
    nearby: ['miami', 'orlando', 'atlanta'],
  },

  orlando: {
    description: 'AI automation for Orlando businesses: bilingual AI receptionists, voice agents, chatbots and CRM automation for hospitality, vacation rentals, real estate, med spas and home services.',
    lead: 'Bilingual AI receptionists, chatbots and booking automation for Central Florida’s hospitality, vacation-rental, real-estate, aesthetics and home-service businesses.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and automation for Orlando and Central Florida businesses</strong>. Agents answer guests and customers in English, Spanish or Portuguese, book reservations and appointments, and log every conversation in your CRM.',
    tzShort: 'Eastern Time',
    languages: 'EN · ES · PT',
    pills: ['Orlando', 'Kissimmee', 'Winter Park', 'Lake Nona'],
    marketTitle: 'Visitors, newcomers and a bilingual customer base',
    market: [
      'Orlando’s tourism economy means a constant flow of visitors with questions about bookings, availability and directions, often outside business hours and from different countries. Vacation-rental managers, attractions-adjacent businesses and hospitality operators need around-the-clock answers.',
      'Central Florida also has large Spanish- and Portuguese-speaking communities and steady population growth. Clinics, med spas, real-estate teams and home-service companies serve customers who prefer to talk in their own language, which multilingual AI agents make easy.',
    ],
    industries: ['real-estate', 'med-spas', 'home-services', 'medical-clinics', 'salons-beauty', 'hvac'],
    areas: ['Downtown Orlando', 'Kissimmee', 'Winter Park', 'Lake Nona', 'Sanford', 'Altamonte Springs', 'Clermont', 'Celebration'],
    services: ['multilingual-voice-agents', 'ai-receptionist', 'ai-chatbots', 'whatsapp-automation', 'ai-appointment-booking', 'ai-follow-up-system'],
    servicesLead: 'Multilingual, always-on service is what sets Orlando businesses apart.',
    compliance: {
      title: 'Florida rules for recording and outreach',
      text: `Calls involving Florida residents need every party’s consent to be recorded, so agents disclose recording up front. Sales texts and calls also fall under the Florida Telephone Solicitation Act. Guest and customer data is kept to what bookings require, with retention limits. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI answer vacation-rental guest questions?', a: 'Yes. Agents answer check-in, amenity and booking questions by phone, SMS or WhatsApp, and escalate maintenance or urgent issues to your team.' },
      { q: 'Does the AI speak Portuguese?', a: 'Yes. Agents respond in English, Spanish and Portuguese, which suits Central Florida’s Puerto Rican, Latin American and Brazilian communities.' },
    ],
    useCases: [
      { icon: 'home', title: 'Vacation-rental guest support', desc: 'Guests get instant answers on check-in, Wi-Fi and amenities at any hour, with maintenance issues routed to staff.' },
      { icon: 'sparkles', title: 'Med spa bookings in two languages', desc: 'Clinics book consultations from Instagram and phone inquiries in English or Spanish.' },
      { icon: 'wrench', title: 'Summer AC calls', desc: 'HVAC companies answer every no-cooling call during heat waves and dispatch technicians by priority.' },
    ],
    faq: { q: 'Do you work with hospitality businesses outside Orlando?', a: 'Yes. We work with hospitality and rental businesses across Florida and beyond, including multi-property operators.' },
    schemaPlace: city('Orlando', 'Florida'),
    nearby: ['tampa', 'miami', 'atlanta'],
  },

  raleigh: {
    description: 'AI automation agency serving Raleigh and the Research Triangle: AI voice agents, chatbots and workflow automation for tech, life sciences, healthcare, real estate and home services.',
    lead: 'AI agents and automation for Research Triangle businesses, from Durham life-science teams and Cary tech firms to fast-growing home-service and real-estate companies.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and workflow automation for Raleigh, Durham and Chapel Hill businesses</strong>. We help tech and life-science teams ship internal AI tools, and help service businesses answer every lead as the region grows.',
    tzShort: 'Eastern Time',
    languages: 'EN · ES',
    pills: ['Raleigh', 'Durham', 'Cary', 'Chapel Hill'],
    marketTitle: 'A research hub with booming local demand',
    market: [
      'The Research Triangle combines universities, research parks, life-science companies and a strong technology sector. Teams here often want custom AI agents, internal knowledge assistants and well-engineered automation rather than off-the-shelf tools.',
      'Rapid population growth across Wake and Durham counties has also stretched home-service, real-estate and healthcare businesses. AI answering and speed-to-lead systems help them keep up with demand without hiring ahead of it.',
    ],
    industries: ['home-services', 'real-estate', 'medical-clinics', 'hvac', 'roofing', 'fitness-gyms'],
    areas: ['Downtown Raleigh', 'Durham', 'Chapel Hill', 'Cary', 'Apex', 'Morrisville', 'Wake Forest', 'Holly Springs'],
    services: ['ai-agent-development', 'rag-chatbot-development', 'ai-receptionist', 'speed-to-lead-automation', 'ai-follow-up-system', 'n8n-automation'],
    servicesLead: 'Tech teams start with agents and knowledge tools; service businesses start with lead response.',
    compliance: {
      title: 'North Carolina recording and outreach rules',
      text: `North Carolina allows one-party consent for recording calls, but we still disclose recording at the start of each call because callers may be in stricter states. North Carolina also has its own telephone solicitation rules, which we follow alongside federal requirements. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Do you build custom AI agents for tech companies?', a: 'Yes. We design agents with tool calling, evaluations and monitoring, working in your repository and processes.' },
      { q: 'Can AI help home-service companies keep up with growth?', a: 'Yes. AI answering, instant lead response and automated scheduling let crews focus on jobs while every new inquiry is handled.' },
    ],
    useCases: [
      { icon: 'puzzle', title: 'Internal AI agents for tech teams', desc: 'Agents that triage tickets, research accounts or prepare reports using your internal tools, with human approval steps.' },
      { icon: 'document', title: 'Life-science knowledge search', desc: 'Teams query SOPs and documentation with an assistant that cites sources and respects access rights.' },
      { icon: 'home', title: 'New-construction buyer leads', desc: 'Builders and agents respond to buyer inquiries in seconds and book model-home tours.' },
    ],
    faq: { q: 'Do you work with startups in the Triangle?', a: 'Yes. We work with startups and scale-ups as an extension of their engineering team, on fixed-scope projects.' },
    schemaPlace: city('Raleigh', 'North Carolina'),
    nearby: ['charlotte', 'washington-dc', 'atlanta'],
  },

  // ---------------------------------------------------------- US CENTRAL
  minneapolis: {
    description: 'AI automation for Minneapolis and St. Paul businesses: AI receptionists, voice agents, chatbots and CRM automation for healthcare, medtech, HVAC, home services and professional firms.',
    lead: 'AI receptionists, voice agents and automation for Twin Cities clinics, medtech companies, HVAC and home-service businesses and professional firms.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and workflow automation for Minneapolis and St. Paul businesses</strong>. Agents answer every call, triage winter emergencies, book appointments and log everything in your CRM, with data handling designed for Minnesota’s privacy law.',
    tzShort: 'Central Time',
    languages: 'EN · ES · SO',
    pills: ['Minneapolis', 'St. Paul', 'Bloomington', 'Edina'],
    marketTitle: 'Healthcare leaders and hard winters',
    market: [
      'The Twin Cities are home to major healthcare, medical-device and corporate headquarters, plus a deep base of professional-services firms. Process-heavy teams benefit from document automation, internal knowledge assistants and AI customer support.',
      'Minnesota winters make heating a matter of safety. HVAC, plumbing and home-service companies field urgent calls at all hours from November to March. AI answering triages those calls, flags emergencies and books routine work so nothing waits until morning.',
    ],
    industries: ['medical-clinics', 'hvac', 'home-services', 'insurance', 'law-firms', 'real-estate'],
    areas: ['Minneapolis', 'St. Paul', 'Bloomington', 'Edina', 'Eden Prairie', 'Plymouth', 'Maple Grove', 'Woodbury'],
    services: ['ai-receptionist', 'ai-phone-answering', 'ai-call-center', 'ai-document-processing', 'crm-automation', 'multilingual-voice-agents'],
    servicesLead: 'Emergency call coverage and process automation lead the way in the Twin Cities.',
    compliance: {
      title: 'Minnesota privacy and recording rules',
      text: `The Minnesota Consumer Data Privacy Act took effect in 2025, giving residents rights over their personal data and requiring clear privacy practices. Minnesota allows one-party consent for recording, but our agents disclose recording on every call as best practice. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'How does Minnesota’s privacy law affect AI agents?', a: 'It means collecting only the data you need, explaining how it’s used and honoring rights requests. We configure data minimization, retention and access controls accordingly.' },
      { q: 'Can AI triage heating emergencies?', a: 'Yes. The agent asks a few safety questions, flags no-heat emergencies and connects your on-call technician immediately.' },
    ],
    useCases: [
      { icon: 'fire', title: 'No-heat calls at 2am', desc: 'HVAC companies triage winter emergencies instantly and dispatch on-call technicians, keeping routine tune-ups for business hours.' },
      { icon: 'heart', title: 'Clinic scheduling and reminders', desc: 'Practices automate booking, reminders and waitlists, with Somali and Spanish support for patients who prefer it.' },
      { icon: 'document', title: 'Back-office document flows', desc: 'Professional firms extract data from forms and correspondence directly into their systems.' },
    ],
    faq: { q: 'Can the AI speak Somali?', a: 'Agents can respond in Somali for common requests, with quality tested by native speakers, alongside English and Spanish.' },
    schemaPlace: city('Minneapolis', 'Minnesota'),
    nearby: ['chicago', 'kansas-city', 'detroit'],
  },

  detroit: {
    description: 'AI automation agency serving Metro Detroit: AI receptionists, voice agents and workflow automation for manufacturing suppliers, law firms, healthcare, HVAC and home services.',
    lead: 'AI voice agents, chatbots and workflow automation for Metro Detroit’s manufacturing suppliers, law firms, clinics and home-service companies.',
    answer: 'Voxil AI builds <strong>AI receptionists, voice agents and automation for Detroit-area businesses</strong>, from Troy and Southfield professional firms to Dearborn clinics and suburban HVAC companies. Systems answer every call, automate back-office work and connect to your existing tools.',
    tzShort: 'Eastern Time',
    languages: 'EN · AR · ES',
    pills: ['Detroit', 'Troy', 'Dearborn', 'Ann Arbor'],
    marketTitle: 'Industrial know-how and busy service businesses',
    market: [
      'Metro Detroit’s automotive and manufacturing supply chain runs on quotes, orders, documents and email. Suppliers and distributors use AI document processing and inbox automation to stop retyping purchase orders and to answer customers faster.',
      'The region’s law firms, especially personal-injury practices, depend on fast intake, while clinics and HVAC companies face heavy call volumes through long winters. AI answering and intake agents capture every one of those opportunities.',
    ],
    industries: ['law-firms', 'hvac', 'home-services', 'medical-clinics', 'insurance', 'roofing'],
    areas: ['Downtown Detroit', 'Troy', 'Southfield', 'Dearborn', 'Ann Arbor', 'Novi', 'Royal Oak', 'Sterling Heights'],
    services: ['ai-document-processing', 'ai-email-automation', 'ai-receptionist', 'ai-voice-agents', 'workflow-automation', 'ai-follow-up-system'],
    servicesLead: 'Document-heavy operations and call-heavy service businesses see the fastest wins.',
    compliance: {
      title: 'Michigan recording and outreach',
      text: `Michigan’s eavesdropping law has been interpreted differently by different courts, so we take the cautious approach: our agents disclose recording at the start of every call. Outreach follows federal consent rules and do-not-call requirements. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI process purchase orders and quotes?', a: 'Yes. AI reads emailed POs, RFQs and invoices, extracts line items and writes them into your ERP, CRM or spreadsheets, with exceptions sent for review.' },
      { q: 'Can personal-injury firms use AI intake?', a: 'Yes. Intake agents capture accident details and contact information around the clock and book consultations with the right attorney.' },
    ],
    useCases: [
      { icon: 'document', title: 'Supplier order processing', desc: 'Emailed purchase orders and RFQs are read and entered automatically, with mismatches flagged for review.' },
      { icon: 'scale', title: '24/7 injury intake', desc: 'Law firms answer every after-hours call, collect case details and schedule consultations immediately.' },
      { icon: 'globe', title: 'Arabic-speaking customers', desc: 'Dearborn-area clinics and businesses answer callers in Arabic or English automatically.' },
    ],
    faq: { q: 'Do you serve Ann Arbor and Oakland County?', a: 'Yes. We work with businesses across Metro Detroit, including Oakland, Macomb, Wayne and Washtenaw counties.' },
    schemaPlace: city('Detroit', 'Michigan'),
    nearby: ['chicago', 'minneapolis'],
  },

  'kansas-city': {
    description: 'AI automation for Kansas City businesses in Missouri and Kansas: AI call center automation, voice agents, chatbots and CRM automation for insurance, healthcare, home services and real estate.',
    lead: 'AI call center automation, voice agents and CRM workflows for Kansas City insurance and financial firms, clinics, home-service companies and real-estate teams.',
    answer: 'Voxil AI builds <strong>AI voice agents, call center automation and workflow systems for Kansas City businesses</strong> on both sides of the state line. Agents handle routine and overflow calls, qualify leads and book appointments, with every call logged.',
    tzShort: 'Central Time',
    languages: 'EN · ES',
    pills: ['Kansas City, MO', 'Overland Park', 'Olathe', 'Lee’s Summit'],
    marketTitle: 'Service centers and a two-state metro',
    market: [
      'Kansas City is home to large insurance, financial-services, engineering and logistics operations, many with customer-service teams handling high call volumes. AI call center automation takes routine calls off those teams and shortens queues.',
      'Across the metro, home-service, roofing and real-estate businesses compete for customers in fast-growing suburbs on both the Missouri and Kansas sides. Speed-to-lead and AI answering make sure every inquiry is answered first.',
    ],
    industries: ['insurance', 'home-services', 'roofing', 'real-estate', 'medical-clinics', 'hvac'],
    areas: ['Downtown KC', 'Overland Park', 'Olathe', 'Lee’s Summit', 'Independence', 'Kansas City, KS', 'Lenexa', 'Liberty'],
    services: ['ai-call-center', 'ai-call-analytics', 'ai-voice-agents', 'speed-to-lead-automation', 'crm-automation', 'ai-follow-up-system'],
    servicesLead: 'Contact-center automation and lead response are the biggest opportunities in Kansas City.',
    compliance: {
      title: 'Missouri and Kansas rules',
      text: `Both Missouri and Kansas allow one-party consent for recording calls, and both have their own do-not-call lists in addition to the federal registry. We disclose recording as best practice and check state and federal lists before outbound campaigns. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI agents work alongside our customer service team?', a: 'Yes. AI agents take routine and overflow calls and transfer complex ones to your team with a summary, using your existing phone system.' },
      { q: 'Do you check Missouri and Kansas do-not-call lists?', a: 'Yes. Outbound campaigns are checked against the federal registry and applicable state lists before any calls are made.' },
    ],
    useCases: [
      { icon: 'users', title: 'Insurance service centers', desc: 'Policy questions, ID card requests and payment calls are handled automatically, freeing staff for claims and sales.' },
      { icon: 'chart', title: 'Call quality across teams', desc: 'Every call is transcribed and scored, so managers coach from real data instead of spot-checks.' },
      { icon: 'building', title: 'Hail-season roofing leads', desc: 'Roofers capture and book every inspection request after Midwest storms.' },
    ],
    faq: { q: 'Do you serve both the Missouri and Kansas sides?', a: 'Yes. We serve the whole metro, including Johnson County, Jackson County, Clay County and Wyandotte County.' },
    schemaPlace: city('Kansas City', 'Missouri'),
    nearby: ['dallas', 'chicago', 'minneapolis'],
  },

  // ------------------------------------------------------------- US WEST
  'las-vegas': {
    description: 'AI automation agency serving Las Vegas: AI receptionists, voice agents and chatbots for hospitality, personal-injury law, med spas, real estate and HVAC, built for 24/7 demand.',
    lead: 'AI receptionists, intake agents and booking automation for Las Vegas hospitality, law firms, aesthetics clinics, real-estate teams and HVAC companies, a city that never closes.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and automation for Las Vegas businesses</strong>, from Strip-adjacent hospitality operators to Henderson clinics and Summerlin real-estate teams. Agents answer every call and message 24/7, qualify and book, with Nevada’s recording rules built in.',
    tzShort: 'Pacific Time',
    languages: 'EN · ES · TL',
    pills: ['The Strip', 'Henderson', 'Summerlin', 'North Las Vegas'],
    marketTitle: 'A 24-hour city needs 24-hour answers',
    market: [
      'Las Vegas businesses serve visitors and residents around the clock. Hospitality, entertainment and service businesses receive inquiries at every hour, and personal-injury law firms compete intensely for every intake call.',
      'Desert summers make air conditioning essential, so HVAC companies handle urgent calls through the night. Med spas, aesthetics clinics and real-estate teams round out a market where instant response is the norm, not a bonus.',
    ],
    industries: ['law-firms', 'hvac', 'med-spas', 'real-estate', 'home-services', 'salons-beauty'],
    areas: ['The Strip', 'Henderson', 'Summerlin', 'North Las Vegas', 'Spring Valley', 'Enterprise', 'Paradise', 'Boulder City'],
    services: ['ai-receptionist', 'ai-voice-agents', 'speed-to-lead-automation', 'ai-chatbots', 'ai-appointment-booking', 'ai-call-analytics'],
    servicesLead: 'Always-on answering and instant lead response matter most in Las Vegas.',
    compliance: {
      title: 'Nevada recording and health-data rules',
      text: `Nevada is generally treated as requiring all-party consent to record phone calls, so our agents disclose recording at the start of every call. Nevada also has a consumer health data law, relevant to clinics and wellness businesses, which shapes what our booking agents collect. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI handle personal-injury intake in Las Vegas?', a: 'Yes. Intake agents answer instantly at any hour, capture accident and injury details, screen for case type and book consultations.' },
      { q: 'Does the AI work through the night?', a: 'Yes. Agents answer calls, texts and chats 24/7 with the same quality at 3am as at noon.' },
    ],
    useCases: [
      { icon: 'scale', title: 'Competitive injury intake', desc: 'Firms answer every accident call first, collect the facts and book consultations before callers try another firm.' },
      { icon: 'bolt', title: 'AC failures in July', desc: 'HVAC companies answer and prioritize no-cooling emergencies overnight and dispatch technicians immediately.' },
      { icon: 'sparkles', title: 'Aesthetics consultations', desc: 'Med spas convert late-night Instagram and phone inquiries into booked consultations.' },
    ],
    faq: { q: 'Can the AI speak Tagalog?', a: 'Agents can respond in Tagalog for common requests, alongside English and Spanish, tested with native speakers before launch.' },
    schemaPlace: city('Las Vegas', 'Nevada'),
    nearby: ['los-angeles', 'phoenix', 'salt-lake-city'],
  },

  portland: {
    description: 'AI automation for Portland, Oregon businesses: AI receptionists, chatbots, voice agents and workflow automation for home services, healthcare, real estate and consumer brands.',
    lead: 'AI answering, chatbots and workflow automation for Portland-area home-service companies, clinics, real-estate teams and consumer brands.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and automation for Portland businesses</strong>, from Beaverton and Hillsboro companies to Lake Oswego clinics and Gresham contractors. Systems are designed around Oregon’s privacy law and integrate with the tools you use.',
    tzShort: 'Pacific Time',
    languages: 'EN · ES · VI',
    pills: ['Portland', 'Beaverton', 'Hillsboro', 'Lake Oswego'],
    marketTitle: 'Independent businesses and rainy-season demand',
    market: [
      'Portland’s economy mixes technology and manufacturing in the western suburbs with a large community of independent and consumer brands. Many of these businesses want automation that feels personal: friendly chat, accurate answers and clean hand-offs to people.',
      'Wet winters drive demand for roofing, gutters, drainage and HVAC, while healthcare and real estate stay busy year-round. AI answering and follow-up capture the calls that come in while teams are on site.',
    ],
    industries: ['home-services', 'roofing', 'medical-clinics', 'real-estate', 'hvac', 'fitness-gyms'],
    areas: ['Downtown Portland', 'Beaverton', 'Hillsboro', 'Lake Oswego', 'Gresham', 'Tigard', 'Vancouver, WA', 'Happy Valley'],
    services: ['ai-chatbots', 'ai-phone-answering', 'ai-email-automation', 'ai-follow-up-system', 'workflow-automation', 'ai-receptionist'],
    servicesLead: 'Friendly, accurate customer communication is the priority for Portland businesses.',
    compliance: {
      title: 'Oregon privacy and recording rules',
      text: `The Oregon Consumer Privacy Act took effect in 2024, giving residents rights over their personal data. Oregon allows one-party consent for phone recordings but requires all-party consent for in-person conversations, and our agents disclose recording on every call regardless. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'How does the Oregon Consumer Privacy Act affect chatbots?', a: 'Chatbots should collect only necessary data, explain its use and support rights requests. We build privacy notices, retention limits and data-access processes into each system.' },
      { q: 'Do you serve Vancouver, Washington too?', a: 'Yes. We work with businesses on both sides of the Columbia River.' },
    ],
    useCases: [
      { icon: 'building', title: 'Rainy-season roofing and gutters', desc: 'Contractors capture leak and repair calls during storms and book them into the schedule automatically.' },
      { icon: 'chat', title: 'Brand customer service', desc: 'Consumer brands answer order, shipping and product questions with a chatbot that sounds like them.' },
      { icon: 'mail', title: 'Inbox automation', desc: 'Small teams triage and draft replies to shared inboxes, approving each response in one click.' },
    ],
    faq: { q: 'Can the chatbot match our brand voice?', a: 'Yes. We write the assistant’s tone and style guide with you and test responses until they sound like your team.' },
    schemaPlace: city('Portland', 'Oregon'),
    nearby: ['seattle', 'sacramento', 'san-francisco'],
  },

  'salt-lake-city': {
    description: 'AI automation agency serving Salt Lake City and Utah: AI voice agents, chatbots and automation for tech, solar, home services, med spas and real estate, with Utah AI disclosure built in.',
    lead: 'AI voice agents, chatbots and automation for Utah’s tech companies, solar installers, home-service businesses, med spas and real-estate teams.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and workflow automation for Salt Lake City and Utah businesses</strong>, from Silicon Slopes startups to Provo home-service companies. Systems include the AI disclosure Utah law expects, and connect to your CRM and calendar.',
    tzShort: 'Mountain Time',
    languages: 'EN · ES · PT',
    pills: ['Salt Lake City', 'Lehi', 'Provo', 'Draper'],
    marketTitle: 'Silicon Slopes and sales-driven businesses',
    market: [
      'Utah’s Silicon Slopes corridor is home to software companies and a strong culture of direct sales, from solar and pest control to home security. Sales-driven teams benefit from AI SDRs, speed-to-lead automation and call analytics.',
      'Rapid population growth along the Wasatch Front keeps home-service, real-estate and aesthetics businesses busy. AI answering and booking agents help them keep up without hiring ahead of demand.',
    ],
    industries: ['solar', 'home-services', 'med-spas', 'real-estate', 'hvac', 'roofing'],
    areas: ['Salt Lake City', 'Lehi', 'Provo', 'Orem', 'Draper', 'Sandy', 'Ogden', 'Park City'],
    services: ['ai-sdr-system', 'speed-to-lead-automation', 'ai-call-analytics', 'ai-agent-development', 'ai-voice-agents', 'ai-appointment-booking'],
    servicesLead: 'Sales-heavy Utah businesses see the biggest gains from fast response and call insight.',
    compliance: {
      title: 'Utah’s AI disclosure law and privacy act',
      text: `Utah’s Artificial Intelligence Policy Act requires businesses to disclose that a consumer is interacting with generative AI when asked, and some regulated professions must disclose it up front. Our agents are configured to answer honestly and disclose where required. The Utah Consumer Privacy Act also applies to larger data processors. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Does Utah require AI chatbots to disclose they are AI?', a: 'Utah law requires disclosure when a consumer asks whether they are talking to AI, and up-front disclosure for certain regulated occupations. We configure agents to disclose clearly in both cases.' },
      { q: 'Can AI help door-to-door and direct-sales companies?', a: 'Yes. AI agents follow up on leads instantly, book appointments for reps and score calls to improve sales coaching.' },
    ],
    useCases: [
      { icon: 'sun', title: 'Solar appointment setting', desc: 'Installers qualify homeowners on ownership, roof and bill, and book consultations for closers.' },
      { icon: 'chart', title: 'Sales call coaching', desc: 'Every sales call is transcribed and scored, so managers coach reps from real conversations.' },
      { icon: 'code', title: 'Agents for software companies', desc: 'Startups add AI agents to their products and internal workflows with evaluations and monitoring.' },
    ],
    faq: { q: 'Do you serve Utah County and Park City?', a: 'Yes. We work with businesses along the Wasatch Front, including Utah County, Davis County and Park City.' },
    schemaPlace: city('Salt Lake City', 'Utah'),
    nearby: ['denver', 'las-vegas', 'phoenix'],
  },

  sacramento: {
    description: 'AI automation for Sacramento businesses: AI receptionists, voice agents, chatbots and CRM automation for healthcare, HVAC, solar, real estate and professional services, California-compliant.',
    lead: 'AI answering, voice agents and automation for Sacramento-area clinics, HVAC and solar companies, real-estate teams and professional firms.',
    answer: 'Voxil AI builds <strong>AI voice agents, chatbots and workflow automation for Sacramento and the Capital Region</strong>. Agents answer every call, qualify and book, with California’s bot disclosure, recording and privacy requirements built in.',
    tzShort: 'Pacific Time',
    languages: 'EN · ES · HM',
    pills: ['Sacramento', 'Roseville', 'Elk Grove', 'Folsom'],
    marketTitle: 'The Capital Region’s steady, growing demand',
    market: [
      'Sacramento’s economy is anchored by state government, healthcare systems and the professional firms around them, with steady growth as residents move from the Bay Area. That growth keeps clinics, real-estate teams and service businesses busy.',
      'Hot Central Valley summers make HVAC and solar major industries, with heavy call volumes from June to September. AI answering and speed-to-lead systems make sure every inquiry is captured during peak season.',
    ],
    industries: ['hvac', 'solar', 'medical-clinics', 'real-estate', 'home-services', 'law-firms'],
    areas: ['Downtown Sacramento', 'Roseville', 'Elk Grove', 'Folsom', 'Rocklin', 'Davis', 'Citrus Heights', 'Natomas'],
    services: ['ai-phone-answering', 'speed-to-lead-automation', 'ai-receptionist', 'ai-appointment-booking', 'ai-follow-up-system', 'multilingual-voice-agents'],
    servicesLead: 'Peak-season call coverage and fast lead response deliver the quickest returns.',
    compliance: {
      title: 'California rules, applied in the Capital Region',
      text: `California requires every party’s consent to record a call, and its bot disclosure law requires bots used to sell or influence to disclose that they are bots. The CCPA, as amended by the CPRA, governs how personal information is collected and used. We build all three into Sacramento deployments. ${TCPA_SHORT}`,
    },
    faqs: [
      { q: 'Can AI handle summer HVAC call volumes?', a: 'Yes. Agents answer unlimited calls during heat waves, prioritize no-cooling emergencies and book routine work.' },
      { q: 'Can the AI speak Hmong?', a: 'Agents can handle common requests in Hmong as well as English and Spanish; we test quality with native speakers before launch.' },
    ],
    useCases: [
      { icon: 'bolt', title: 'Heat-wave HVAC coverage', desc: 'Every no-cooling call is answered and prioritized, even when hundreds arrive in an afternoon.' },
      { icon: 'sun', title: 'Solar lead follow-up', desc: 'Installers respond to quote requests in seconds and nurture longer-cycle leads with consent-based follow-up.' },
      { icon: 'heart', title: 'Clinic booking for growing suburbs', desc: 'Practices in Roseville and Elk Grove automate booking and reminders as patient numbers grow.' },
    ],
    faq: { q: 'Do you serve Placer and El Dorado counties?', a: 'Yes. We work across the Capital Region, including Placer, El Dorado, Yolo and Sacramento counties.' },
    schemaPlace: city('Sacramento', 'California'),
    nearby: ['san-francisco', 'san-jose', 'portland'],
  },
};
