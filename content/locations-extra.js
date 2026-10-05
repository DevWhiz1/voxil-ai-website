// Local use cases and an extra FAQ for each location page, merged in by
// scripts/templates/location.js. These replace sections that used to be
// identical on every location page. Use cases describe typical setups for
// businesses in that market; they are not client claims.
export default {
  'new-york': {
    useCases: [
      { icon: 'home', title: 'Listing inquiries after 6pm', desc: 'Renters browsing StreetEasy at night get an instant text, answers on fees, pets and move-in dates, and a viewing slot booked into the right agent’s calendar.' },
      { icon: 'scale', title: 'Intake for Manhattan law firms', desc: 'An intake agent screens new matters by practice area and conflicts questions, then books consultations, so partners only see cases worth a call.' },
      { icon: 'heart', title: 'Same-week appointments for clinics', desc: 'Multi-location practices in Brooklyn and Queens route callers to the nearest location with availability, in English or Spanish, without hold music.' },
    ],
    faq: { q: 'Can AI agents handle calls in English and Spanish across the five boroughs?', a: 'Yes. Agents detect the caller’s language and switch automatically, then route to the right location or team. Bilingual coverage is standard on our New York builds.' },
  },
  philadelphia: {
    useCases: [
      { icon: 'heart', title: 'Patient scheduling around University City', desc: 'Specialty practices answer appointment, referral and directions questions automatically, and send prep instructions by text before each visit.' },
      { icon: 'wrench', title: 'Crews on site in the suburbs', desc: 'Main Line and South Jersey contractors get every missed call texted back within seconds, with the job type and address captured before the callback.' },
      { icon: 'scale', title: 'Personal-injury intake', desc: 'An intake agent collects accident date, location and injury basics around the clock, then books a consultation with the right attorney.' },
    ],
    faq: { q: 'Do you serve businesses in South Jersey and Delaware too?', a: 'Yes. Most Greater Philadelphia projects include Cherry Hill, Camden County and Wilmington locations, all in Eastern Time.' },
  },
  charlotte: {
    useCases: [
      { icon: 'shield', title: 'Insurance quote response', desc: 'Quote requests get a call and text within a minute, coverage basics are collected, and a licensed agent receives a ready-to-quote record.' },
      { icon: 'home', title: 'New-construction buyer leads', desc: 'Builders and agents in Union and Cabarrus counties qualify buyers on timeline and financing before booking model-home tours.' },
      { icon: 'trending', title: 'Mortgage and advisory follow-up', desc: 'Compliant, consent-based follow-up keeps applicants moving through the pipeline without loan officers chasing every document.' },
    ],
    faq: { q: 'Can automations keep a record for compliance reviews?', a: 'Yes. Every call, text and email is logged on the contact record with timestamps, consent source and transcripts, which makes supervisory review straightforward.' },
  },
  atlanta: {
    useCases: [
      { icon: 'wrench', title: 'Technicians on the Perimeter', desc: 'HVAC and plumbing companies answer every call while techs drive between jobs; emergencies are flagged to on-call staff, routine work is booked.' },
      { icon: 'home', title: 'Suburban real-estate leads', desc: 'Leads from Alpharetta to Peachtree City get an instant reply and a showing offer, with nurture for buyers who are months out.' },
      { icon: 'trending', title: 'B2B outbound for fintech teams', desc: 'AI SDRs qualify inbound demo requests and route enterprise leads to the right account executive in Salesforce or HubSpot.' },
    ],
    faq: { q: 'Can you cover businesses across the whole metro area?', a: 'Yes. Service areas are set per business, so the AI books only within your territory and routes jobs to the right crew or location.' },
  },
  miami: {
    useCases: [
      { icon: 'home', title: 'International property buyers', desc: 'Buyers from Latin America and Europe message on WhatsApp at all hours; the agent answers in their language and books video tours with the listing agent.' },
      { icon: 'sparkles', title: 'Med spa consultations', desc: 'Instagram DMs about injectables and body treatments get instant, compliant answers and a consultation booking with deposit.' },
      { icon: 'shield', title: 'Hurricane-season insurance spikes', desc: 'Agencies handle surges in policy questions and claims calls with an AI first responder that triages and routes to staff.' },
    ],
    faq: { q: 'Can the AI handle Portuguese-speaking customers?', a: 'Yes. Agents can respond in English, Spanish and Portuguese, which suits Miami’s Brazilian and Latin American customers.' },
  },
  nashville: {
    useCases: [
      { icon: 'heart', title: 'Front desks that can’t hire fast enough', desc: 'Practices let AI handle scheduling, reminders and routine questions so a smaller front-desk team can focus on patients in the room.' },
      { icon: 'building', title: 'Roofing and construction growth', desc: 'Contractors in Williamson and Rutherford counties capture estimate requests 24/7 and book them by territory.' },
      { icon: 'fire', title: 'Fitness studio trials', desc: 'Boutique studios turn ad leads into booked intro classes with instant replies and trial reminders.' },
    ],
    faq: { q: 'Do you work with healthcare management companies?', a: 'Yes. We build patient-access automation across multiple practices, with HIPAA-eligible tools and BAAs where protected health information is involved.' },
  },
  chicago: {
    useCases: [
      { icon: 'scale', title: 'Law firm intake around the Loop', desc: 'Personal-injury and family-law firms run 24/7 intake that captures case details and books consultations, with transcripts in the case management system.' },
      { icon: 'fire', title: 'No-heat calls in January', desc: 'HVAC companies triage winter emergencies instantly, dispatch on-call techs and keep routine tune-ups for the next day.' },
      { icon: 'database', title: 'Back-office automation', desc: 'Logistics and professional-services firms automate document handling, data entry and reporting between their CRM, accounting and email.' },
    ],
    faq: { q: 'Can the AI speak Polish?', a: 'Yes. Agents can respond in Polish as well as English and Spanish, which helps businesses serving Chicago’s large Polish-speaking community.' },
  },
  dallas: {
    useCases: [
      { icon: 'building', title: 'Hail-storm lead surges', desc: 'Roofing and restoration companies answer hundreds of calls after a storm, capture address and damage details and book inspections by zone.' },
      { icon: 'trending', title: 'Corporate sales teams', desc: 'AI SDRs follow up on inbound leads within seconds and book meetings for account executives across DFW headquarters.' },
      { icon: 'sun', title: 'Solar qualification', desc: 'Solar installers screen homeownership, electric bill and roof condition before sending closers to the door.' },
    ],
    faq: { q: 'Do you work with businesses in Fort Worth and the suburbs?', a: 'Yes. We serve the whole DFW metroplex, including Fort Worth, Plano, Frisco, Arlington and McKinney, all in Central Time.' },
  },
  houston: {
    useCases: [
      { icon: 'heart', title: 'Clinics around the Medical Center', desc: 'Practices automate appointment booking, reminders and referral intake, with Spanish and Vietnamese support for patients who prefer it.' },
      { icon: 'bolt', title: 'Heat-wave and hurricane call spikes', desc: 'HVAC and restoration companies answer every overnight call, prioritize emergencies and keep customers updated by text.' },
      { icon: 'scale', title: 'Bilingual legal intake', desc: 'Injury and immigration firms take intake calls in English and Spanish at any hour and book consultations immediately.' },
    ],
    faq: { q: 'Can the AI support Vietnamese-speaking customers?', a: 'Yes. Agents can respond in Vietnamese as well as English and Spanish, reflecting Houston’s large Vietnamese-American community.' },
  },
  'san-antonio': {
    useCases: [
      { icon: 'globe', title: 'Spanish-first phone lines', desc: 'Clinics and service companies offer natural Spanish conversations on every shift without hiring bilingual staff for nights and weekends.' },
      { icon: 'scale', title: 'Personal-injury intake', desc: 'Firms capture accident details and book consultations around the clock, with clean hand-off to attorneys.' },
      { icon: 'users', title: 'Military-connected families', desc: 'Businesses near Joint Base San Antonio handle relocation-driven inquiries quickly, including scheduling around move dates.' },
    ],
    faq: { q: 'Can the AI switch languages mid-conversation?', a: 'Yes. Many callers mix English and Spanish, and agents follow the caller’s lead naturally.' },
  },
  austin: {
    useCases: [
      { icon: 'code', title: 'AI features for startups', desc: 'We build retrieval, tool-calling agents and evaluation pipelines inside your product, working in your repo and sprint cadence.' },
      { icon: 'server', title: 'Self-hosted n8n agents', desc: 'Teams that want data control run AI workflows on their own infrastructure, with monitoring and version control.' },
      { icon: 'home', title: 'Fast-growing service businesses', desc: 'Home-service and real-estate teams in Round Rock, Cedar Park and Pflugerville answer every lead instantly as demand outpaces hiring.' },
    ],
    faq: { q: 'Do you sign NDAs and work under our security policies?', a: 'Yes. We routinely work under NDAs, use least-privilege access and follow client security requirements for code and data.' },
  },
  'los-angeles': {
    useCases: [
      { icon: 'sparkles', title: 'Late-night aesthetics inquiries', desc: 'Med spas and clinics answer Instagram DMs and website chats instantly, quote honest price ranges and book consultations with deposits.' },
      { icon: 'home', title: 'Luxury real-estate follow-up', desc: 'Agents qualify buyers on budget and timeline and book private showings, with long-term nurture for high-value prospects.' },
      { icon: 'globe', title: 'Multilingual customer service', desc: 'Businesses serving Koreatown and Spanish-speaking customers answer in English, Spanish or Korean automatically.' },
    ],
    faq: { q: 'Can the AI speak Korean?', a: 'Yes. Agents can respond in Korean alongside English and Spanish, which suits LA’s Koreatown businesses and customers.' },
  },
  'san-francisco': {
    useCases: [
      { icon: 'code', title: 'Shipping LLM features', desc: 'Senior engineers join your team to build agents, retrieval over large document sets and cost controls for production AI.' },
      { icon: 'chart', title: 'Evaluation and monitoring', desc: 'We set up test sets, automated evals and dashboards so you can change prompts and models without regressions.' },
      { icon: 'trending', title: 'Lean go-to-market teams', desc: 'Startups use AI SDRs and CRM automation to respond to every inbound lead without hiring a full sales development team.' },
    ],
    faq: { q: 'Can you work with our preferred model providers?', a: 'Yes. We build on the provider that fits your requirements and keep the architecture flexible enough to switch models later.' },
  },
  'san-jose': {
    useCases: [
      { icon: 'document', title: 'Internal knowledge assistants', desc: 'Engineering and support teams search specs, tickets and documentation with an assistant that cites its sources.' },
      { icon: 'heart', title: 'South Bay clinics and dental offices', desc: 'Practices automate booking and reminders in English, Spanish and Vietnamese.' },
      { icon: 'wrench', title: 'Home-service dispatch', desc: 'Contractors answer every call, book by territory and send arrival updates without a full-time dispatcher.' },
    ],
    faq: { q: 'Can internal assistants respect our access permissions?', a: 'Yes. Assistants can be built to retrieve only documents the user is allowed to see, with audit logs for every answer.' },
  },
  'san-diego': {
    useCases: [
      { icon: 'heart', title: 'Patient intake for life-science and healthcare', desc: 'Clinics automate scheduling, reminders and pre-visit forms with healthcare-aware data handling.' },
      { icon: 'sun', title: 'Solar follow-up', desc: 'Installers follow up on estimates for months with relevant, consent-based messages and book site assessments.' },
      { icon: 'globe', title: 'Cross-border customers', desc: 'Businesses serving customers from Tijuana and the South Bay answer in Spanish and English instantly.' },
    ],
    faq: { q: 'Do you work with military-connected businesses?', a: 'Yes. Many San Diego service businesses serve military families, and automation helps them handle relocation-driven demand quickly.' },
  },
  seattle: {
    useCases: [
      { icon: 'server', title: 'Cloud-native builds', desc: 'We deploy agents and workflows on AWS or Azure with infrastructure as code, logging and least-privilege access.' },
      { icon: 'heart', title: 'Health-data-aware chatbots', desc: 'Clinics and wellness businesses use chat and booking flows designed around Washington’s My Health My Data Act.' },
      { icon: 'fire', title: 'Seasonal HVAC demand', desc: 'Heating companies handle cold-weather call spikes with AI triage and automated scheduling.' },
    ],
    faq: { q: 'Can you integrate with Microsoft 365 and Teams?', a: 'Yes. Agents can read calendars, post summaries to Teams channels and use Microsoft 365 data where permissions allow.' },
  },
  phoenix: {
    useCases: [
      { icon: 'bolt', title: 'AC emergencies in July', desc: 'HVAC companies answer every call during heat waves, flag no-cooling emergencies and dispatch on-call techs immediately.' },
      { icon: 'sun', title: 'Solar and pool leads', desc: 'Businesses qualify homeowners and book estimates automatically during peak season.' },
      { icon: 'home', title: 'Relocation buyers', desc: 'Real-estate teams respond to out-of-state buyers instantly and schedule virtual or in-person tours.' },
    ],
    faq: { q: 'Do you serve Scottsdale, Mesa and Chandler?', a: 'Yes. We serve the whole Valley, and agents can be configured with your exact service area and travel rules.' },
  },
  denver: {
    useCases: [
      { icon: 'building', title: 'Hail-season roofing', desc: 'Roofers capture every inspection request after Front Range storms and book them by neighborhood.' },
      { icon: 'fire', title: 'Fitness and wellness memberships', desc: 'Studios automate trial booking, onboarding check-ins and win-back for members who stop visiting.' },
      { icon: 'heart', title: 'Clinic scheduling', desc: 'Practices automate booking, reminders and waitlists as the metro population grows.' },
    ],
    faq: { q: 'Do you serve Boulder and the rest of the Front Range?', a: 'Yes. We work with businesses from Fort Collins to Colorado Springs, all in Mountain Time.' },
  },
  'united-kingdom': {
    useCases: [
      { icon: 'wrench', title: 'Trades on the tools', desc: 'Plumbers, electricians and builders capture every call while on site, with WhatsApp follow-up and booked visits.' },
      { icon: 'home', title: 'Estate and lettings agents', desc: 'Viewing requests from Rightmove and Zoopla get an instant reply and a booked viewing, day or night.' },
      { icon: 'sparkles', title: 'Private clinics and aesthetics', desc: 'Clinics book consultations and send reminders, with data handling designed around UK GDPR.' },
    ],
    faq: { q: 'Do you invoice in GBP?', a: 'Yes. UK clients can be quoted and invoiced in pounds sterling.' },
  },
  'dubai-uae': {
    useCases: [
      { icon: 'home', title: 'Off-plan property inquiries', desc: 'Brokerages answer WhatsApp leads in Arabic, English, Hindi or Urdu instantly, share project details and book calls with agents.' },
      { icon: 'heart', title: 'Clinic appointment booking', desc: 'Clinics book appointments and send reminders in the patient’s preferred language.' },
      { icon: 'scissors', title: 'Salons and spas', desc: 'Beauty businesses fill their calendars from Instagram and WhatsApp messages around the clock.' },
    ],
    faq: { q: 'Do you serve Abu Dhabi and the other emirates?', a: 'Yes. We work with businesses across the UAE and the wider GCC, in Gulf Standard Time.' },
  },
  canada: {
    useCases: [
      { icon: 'globe', title: 'English and French service', desc: 'Businesses serving Quebec and bilingual regions answer every customer in their language, around the clock.' },
      { icon: 'mail', title: 'CASL-compliant follow-up', desc: 'Lead nurture records express consent, identifies the sender and honors unsubscribes automatically.' },
      { icon: 'clock', title: 'Coast-to-coast coverage', desc: 'Agents follow each location’s time zone for booking windows and callback hours.' },
    ],
    faq: { q: 'Do you invoice in Canadian dollars?', a: 'Yes. Canadian clients can be quoted and invoiced in CAD.' },
  },
  australia: {
    useCases: [
      { icon: 'wrench', title: 'Tradies on the job', desc: 'Missed calls get an instant text and AI answering books the job, so owner-operators don’t lose work while on the tools.' },
      { icon: 'heart', title: 'Allied-health clinics', desc: 'Physio, chiro and psychology practices automate bookings, reminders and cancellations.' },
      { icon: 'sun', title: 'Solar and battery leads', desc: 'Installers qualify homeowners and book assessments with follow-up that respects the Spam Act.' },
    ],
    faq: { q: 'Do you invoice in AUD?', a: 'Yes. Australian clients can be quoted and invoiced in Australian dollars.' },
  },
  pakistan: {
    useCases: [
      { icon: 'home', title: 'Real-estate project launches', desc: 'Developers answer thousands of WhatsApp inquiries in Urdu, Roman Urdu and English, share payment plans and book site visits.' },
      { icon: 'academic', title: 'Schools and academies', desc: 'Admissions questions about fees, timings and documents are answered instantly, with follow-up during admission season.' },
      { icon: 'heart', title: 'Clinics and diagnostic centers', desc: 'Patients book appointments and receive reminders on WhatsApp without waiting on the phone.' },
    ],
    faq: { q: 'Can you integrate local payment methods?', a: 'Yes. Payment links and confirmations can connect to local gateways and bank transfer workflows, depending on what your business uses.' },
  },
  london: {
    useCases: [
      { icon: 'scale', title: 'Law firm inquiries', desc: 'Firms capture new-matter inquiries out of hours, screen by practice area and book consultations with the right solicitor.' },
      { icon: 'home', title: 'Lettings viewings', desc: 'Tenants inquiring on portals get instant answers on availability and requirements, and a booked viewing.' },
      { icon: 'heart', title: 'Private healthcare', desc: 'Clinics on Harley Street and across London automate consultation booking, reminders and pre-visit forms.' },
    ],
    faq: { q: 'Can the AI handle multiple London offices?', a: 'Yes. Agents route callers to the nearest office or the right team, and book into each office’s calendar.' },
  },
  manchester: {
    useCases: [
      { icon: 'wrench', title: 'Trades across Greater Manchester', desc: 'Calls from Stockport to Bolton are answered or texted back instantly, and jobs are booked into the diary.' },
      { icon: 'building', title: 'Roofing repairs after storms', desc: 'Roofers handle bursts of repair requests after bad weather without missing callers.' },
      { icon: 'layers', title: 'Digital agencies in Salford', desc: 'Agencies use white label AI agents and GoHighLevel builds to deliver more for clients without hiring.' },
    ],
    faq: { q: 'Do you work with businesses across the North West?', a: 'Yes. We work with businesses throughout the North West, including Liverpool, Leeds and Cheshire.' },
  },
  europe: {
    useCases: [
      { icon: 'globe', title: 'One agent, many languages', desc: 'Businesses answer customers in German, French, Dutch, Spanish and English without staffing each language on every shift.' },
      { icon: 'shield', title: 'GDPR by design', desc: 'EU data hosting options, data minimization and clear retention policies are built into every system.' },
      { icon: 'bubble', title: 'WhatsApp-first service', desc: 'Customers who prefer WhatsApp get instant answers and bookings through the official Business API.' },
    ],
    faq: { q: 'Can data be hosted in the EU?', a: 'Yes. Where clients require it, we choose providers and configurations that keep data within the EU.' },
  },
  ireland: {
    useCases: [
      { icon: 'heart', title: 'GP and dental practices', desc: 'Practices automate appointment booking and reminders so reception isn’t tied to the phone all morning.' },
      { icon: 'wrench', title: 'Trades and home services', desc: 'Every call is answered or followed up by text, protecting the word-of-mouth reputation local businesses depend on.' },
      { icon: 'briefcase', title: 'Teams serving EU headquarters', desc: 'Professional-services firms automate intake and workflows with GDPR-ready data handling.' },
    ],
    faq: { q: 'Do you invoice in euro?', a: 'Yes. Irish clients can be quoted and invoiced in euro.' },
  },
  netherlands: {
    useCases: [
      { icon: 'bubble', title: 'WhatsApp customer service', desc: 'Dutch customers message businesses on WhatsApp; agents answer in Dutch or English and book appointments.' },
      { icon: 'home', title: 'Rental and real-estate inquiries', desc: 'Agencies in Amsterdam, Rotterdam and Utrecht respond to rental inquiries instantly and schedule viewings.' },
      { icon: 'fire', title: 'Gyms and studios', desc: 'Fitness businesses automate trial booking and member communication in both languages.' },
    ],
    faq: { q: 'Do you work with international companies based in the Netherlands?', a: 'Yes. Many clients serve customers across Europe from the Netherlands, so agents can handle several languages.' },
  },
  germany: {
    useCases: [
      { icon: 'heart', title: 'Arztpraxis appointment booking', desc: 'Medical practices automate appointment requests and reminders in German, easing pressure on reception.' },
      { icon: 'wrench', title: 'Handwerk businesses', desc: 'Trades capture inquiries while on site and book appointments without losing callers to voicemail.' },
      { icon: 'shield', title: 'Data protection first', desc: 'Systems are designed with GDPR, EU hosting options and clear consent handling from the start.' },
    ],
    faq: { q: 'Can documentation be provided in German?', a: 'Yes. We can provide handover documentation and agent scripts in German.' },
  },
  toronto: {
    useCases: [
      { icon: 'home', title: 'GTA real-estate brokerages', desc: 'Agents respond to buyer and seller leads instantly and book showings across the Greater Toronto Area.' },
      { icon: 'globe', title: 'Multicultural customers', desc: 'Clinics and service businesses answer callers in their preferred language, not just English and French.' },
      { icon: 'shield', title: 'Insurance and financial services', desc: 'Firms follow up on quote requests quickly while respecting CASL and the National DNCL.' },
    ],
    faq: { q: 'Do you serve Mississauga, Brampton and the wider GTA?', a: 'Yes. We work with businesses across the GTA and the rest of Ontario, in Eastern Time.' },
  },
  vancouver: {
    useCases: [
      { icon: 'globe', title: 'Mandarin, Cantonese and Punjabi', desc: 'Real-estate teams and clinics answer customers in their language automatically, day and night.' },
      { icon: 'sparkles', title: 'Med spa and wellness booking', desc: 'Clinics turn Instagram and website inquiries into booked consultations.' },
      { icon: 'wrench', title: 'Rainy-season home services', desc: 'Roofing, drainage and HVAC businesses capture every call during busy wet months.' },
    ],
    faq: { q: 'Do you serve Surrey, Burnaby and Richmond?', a: 'Yes. We work with businesses across Metro Vancouver and the Fraser Valley.' },
  },
  sydney: {
    useCases: [
      { icon: 'wrench', title: 'Tradies across Greater Sydney', desc: 'Calls from the Northern Beaches to Western Sydney are answered or texted back and jobs booked straight into the calendar.' },
      { icon: 'home', title: 'Real-estate agencies', desc: 'Agencies respond to buyer and rental inquiries instantly and book inspections.' },
      { icon: 'heart', title: 'Allied-health clinics', desc: 'Physio and dental clinics automate bookings, reminders and cancellations.' },
    ],
    faq: { q: 'Can AI handle inspection bookings for rentals?', a: 'Yes. Agents answer questions about the property and book renters into open inspections or private viewings.' },
  },
  melbourne: {
    useCases: [
      { icon: 'calendar', title: 'Filling last-minute gaps', desc: 'Clinics and salons text waitlisted clients when a cancellation opens a slot, so it’s filled within minutes.' },
      { icon: 'fire', title: 'Fitness studios', desc: 'Studios automate trial booking, class reminders and member check-ins.' },
      { icon: 'wrench', title: 'Trades and HVAC', desc: 'Businesses handle heating and cooling peaks with AI answering and automated scheduling.' },
    ],
    faq: { q: 'Do you serve regional Victoria?', a: 'Yes. We work with businesses across Melbourne and regional Victoria, including Geelong and Ballarat.' },
  },
};
