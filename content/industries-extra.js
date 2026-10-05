// Extra industry page sections, merged into content/industries.js entries by
// scripts/templates/industry.js:
//   segments     - the kinds of businesses in the industry we build for
//   beforeAfter  - [area, before automation, after automation]
//   objections   - honest answers to the pushback owners raise most
//   calc         - starting values for the embedded revenue-at-risk estimate
//                  (monthly calls and leads, average customer value). Visitors adjust them.
//   guide        - an in-depth blog guide for the industry, if one exists
export default {
  'real-estate': {
    segments: [
      { icon: 'user', title: 'Solo agents', desc: 'Instant response and nurture so no portal lead waits while you’re at a showing.' },
      { icon: 'users', title: 'Teams and brokerages', desc: 'Lead routing, AI ISA qualification and agent accountability dashboards.' },
      { icon: 'home', title: 'Property managers', desc: 'Tenant FAQs, maintenance intake and renewal reminders handled around the clock.' },
      { icon: 'building', title: 'New-build and developers', desc: 'Registration of interest, viewing booking and launch-day follow-up at scale.' },
    ],
    beforeAfter: [
      ['First response to portal leads', 'Hours, when an agent is free', 'Seconds, by text and call, 24/7'],
      ['Lead qualification', 'Agents call every lead themselves', 'AI ISA qualifies timeline, financing and area first'],
      ['Showing scheduling', 'Back-and-forth texts and calls', 'Booked directly into the agent’s calendar'],
      ['Long-term leads', 'Forgotten after a few attempts', 'Months of relevant, personal nurture'],
      ['Past clients', 'Occasional newsletter', 'Anniversaries and check-ins that drive referrals'],
    ],
    objections: [
      { q: '“My leads want to talk to a real agent.”', a: 'They do, eventually. The AI’s job is the first reply and the basic questions, so when the agent calls, they already know the buyer’s timeline and budget and the conversation starts warm.' },
      { q: '“Portal leads are junk anyway.”', a: 'Many are early, not junk. Fast response catches the serious ones, and long-term nurture keeps the early ones until they’re ready, without agent time.' },
      { q: '“I already have Follow Up Boss.”', a: 'Keep it. We connect AI calling, texting and nurture to your existing CRM rather than forcing a switch.' },
    ],
    calc: { calls: 250, value: 6000 },
    guide: 'gohighlevel-real-estate',
  },
  'fitness-gyms': {
    segments: [
      { icon: 'fire', title: 'Boutique studios', desc: 'Class-pack and intro-offer funnels with fast DM and text follow-up.' },
      { icon: 'users', title: 'Big-box and franchise gyms', desc: 'Lead routing across locations and consistent follow-up at scale.' },
      { icon: 'user', title: 'Personal trainers', desc: 'Consult booking, reminders and check-ins without admin evenings.' },
      { icon: 'heart', title: 'Martial arts, yoga and Pilates', desc: 'Trial booking, onboarding and retention messages that build the habit.' },
    ],
    beforeAfter: [
      ['Ad lead response', 'Front desk replies when it can', 'Instant text and DM reply, 24/7'],
      ['Trial bookings', 'Phone tag and DMs', 'Booked in the conversation with reminders'],
      ['Trial no-shows', 'Rarely followed up', 'Friendly rebooking text within the hour'],
      ['New members', 'Left to figure it out', '30-day onboarding with coach check-ins'],
      ['Dropping attendance', 'Noticed at cancellation', 'Win-back message after two quiet weeks'],
    ],
    objections: [
      { q: '“Our community is personal; automation feels cold.”', a: 'Automation handles timing and reminders; messages are written in your coaches’ voice and real replies go to real people. Members feel more looked after, not less.' },
      { q: '“We already use Mindbody (or Glofox).”', a: 'Keep your gym software for scheduling and billing. We connect it so follow-up, reminders and win-back run automatically.' },
      { q: '“Our leads are cheap; we just need more.”', a: 'More leads don’t help if half are never answered. Fixing follow-up usually lowers your real cost per member faster than raising ad spend.' },
    ],
    calc: { calls: 300, value: 700 },
    guide: 'gohighlevel-fitness-studio',
  },
  insurance: {
    segments: [
      { icon: 'home', title: 'P&C agencies', desc: 'Auto and home quote response, renewal reviews and bundle campaigns.' },
      { icon: 'heart', title: 'Life and health', desc: 'Lead qualification, appointment setting and annual review reminders.' },
      { icon: 'briefcase', title: 'Commercial lines', desc: 'Intake for business owners and renewal timelines tracked automatically.' },
      { icon: 'users', title: 'Captive and independent agents', desc: 'Consistent follow-up whichever carriers you write with.' },
    ],
    beforeAfter: [
      ['Quote request response', 'Next business day', 'Text and call within a minute'],
      ['Information gathering', 'Agent collects details by phone', 'AI collects basics before the quote review'],
      ['Renewals', 'Clients only hear about price changes', 'Review offers at 60, 30 and 7 days'],
      ['Cross-sell', 'Ad hoc, when someone remembers', 'Targeted bundle reviews by policy type'],
      ['Lost policies', 'Gone for good', 'Win-back check-in a few months later'],
    ],
    objections: [
      { q: '“Insurance is regulated; we can’t let AI give advice.”', a: 'Agreed. The AI collects information, answers logistics and books licensed agents. Advice, recommendations and binding stay with your licensed staff.' },
      { q: '“Our AMS already sends renewal notices.”', a: 'Notices aren’t conversations. We add personal outreach and easy booking around renewal dates, synced from your AMS.' },
      { q: '“Lead vendors sell the same lead to five agencies.”', a: 'Exactly why speed matters. The agency that responds first and best usually gets the conversation.' },
    ],
    calc: { calls: 400, value: 1200 },
    guide: 'gohighlevel-insurance-agency',
  },
  'law-firms': {
    segments: [
      { icon: 'scale', title: 'Personal injury', desc: '24/7 intake, case-type screening and fast consultation booking.' },
      { icon: 'users', title: 'Family law', desc: 'Sensitive, empathetic intake with clear hand-off to staff.' },
      { icon: 'shield', title: 'Criminal defense', desc: 'Urgent after-hours call handling and immediate attorney alerts.' },
      { icon: 'briefcase', title: 'Immigration and business law', desc: 'Multilingual intake, document checklists and consultation scheduling.' },
    ],
    beforeAfter: [
      ['After-hours calls', 'Voicemail or a generic answering service', 'AI intake that captures the case and books'],
      ['Intake consistency', 'Depends on who answers', 'The same screening questions every time'],
      ['Conflict and fit screening', 'Manual, after the fact', 'Captured up front for attorney review'],
      ['Consultation no-shows', 'Missed slots', 'Reminders and easy rescheduling'],
      ['Unconverted inquiries', 'Never followed up', 'Polite follow-up until a decision'],
    ],
    objections: [
      { q: '“Clients need a human for sensitive matters.”', a: 'Yes, and they get one. The AI handles the first contact and logistics with care, then hands to your team with the details already captured.' },
      { q: '“What about confidentiality?”', a: 'We minimize data collected in chat and SMS, restrict access and configure retention to your policies. Advice and case discussion stay with attorneys.' },
      { q: '“We already use an answering service.”', a: 'An AI intake agent can screen, book and update your case management system in real time, rather than just taking messages.' },
    ],
    calc: { calls: 200, value: 4000 },
  },
  'home-services': {
    segments: [
      { icon: 'wrench', title: 'Plumbing', desc: 'Emergency call capture, job booking and “on the way” texts.' },
      { icon: 'bolt', title: 'Electrical', desc: 'Quote requests qualified and booked into dispatch.' },
      { icon: 'home', title: 'Cleaning and maid services', desc: 'Recurring booking, reminders and review requests.' },
      { icon: 'sun', title: 'Landscaping and pest control', desc: 'Seasonal campaigns and maintenance plan renewals.' },
    ],
    beforeAfter: [
      ['Calls while on a job', 'Voicemail', 'Answered by AI or texted back instantly'],
      ['Quote follow-up', 'One call, then forgotten', 'A sequence until the customer decides'],
      ['Booking', 'Phone tag', 'Booked into your schedule in one conversation'],
      ['Reviews', 'Asked occasionally', 'Requested after every completed job'],
      ['Repeat business', 'Hope they remember you', 'Seasonal reminders and maintenance plans'],
    ],
    objections: [
      { q: '“My customers want to talk to me, not a robot.”', a: 'Most want a fast answer and a time slot. The AI covers calls you can’t take on a job and passes anything complex to you with the details.' },
      { q: '“We already use Jobber or Housecall Pro.”', a: 'Keep it. We connect to your field-service software so bookings, job updates and reviews flow automatically.' },
      { q: '“I don’t have time to set this up.”', a: 'That’s why it’s done for you. Most systems go live in two to three weeks with very little of your time.' },
    ],
    calc: { calls: 300, value: 450 },
  },
  'medical-clinics': {
    segments: [
      { icon: 'heart', title: 'Primary and family care', desc: 'New-patient booking, reminders and annual checkup recalls.' },
      { icon: 'sparkles', title: 'Dental practices', desc: 'Hygiene recalls, treatment follow-up and same-day openings.' },
      { icon: 'user', title: 'Specialists', desc: 'Referral intake, pre-visit forms and appointment logistics.' },
      { icon: 'building', title: 'Multi-location groups', desc: 'Central call handling and routing across locations.' },
    ],
    beforeAfter: [
      ['Phone coverage', 'Busy lines and voicemail at peak times', 'Overflow and after-hours calls answered'],
      ['New-patient booking', 'Only during office hours', 'Booked by phone, text or chat, 24/7'],
      ['Reminders', 'Manual calls the day before', 'Automated, with confirm and reschedule by text'],
      ['Recalls', 'Lists that never get called', 'Recall campaigns by text and email'],
      ['Front desk workload', 'Repetitive questions all day', 'Routine questions handled automatically'],
    ],
    objections: [
      { q: '“What about HIPAA?”', a: 'We use HIPAA-eligible configurations with BAAs where PHI is involved, keep clinical details out of messages and limit access. Your compliance officer stays in the loop.' },
      { q: '“Patients won’t like talking to AI.”', a: 'Patients dislike waiting on hold more. The AI handles logistics quickly and transfers to staff for anything clinical or sensitive.' },
      { q: '“Our practice software is complicated.”', a: 'We integrate where APIs or integration partners exist, and otherwise book into a synced calendar your staff confirms.' },
    ],
    calc: { calls: 600, value: 350 },
    guide: 'gohighlevel-dental-medical-clinic',
  },
  'med-spas': {
    segments: [
      { icon: 'sparkles', title: 'Injectables', desc: 'Consultation booking from DMs and ads with deposit collection.' },
      { icon: 'sun', title: 'Laser and skin', desc: 'Treatment-series reminders and rebooking at the right interval.' },
      { icon: 'heart', title: 'Wellness and IV therapy', desc: 'Membership sign-ups, reminders and reactivation.' },
      { icon: 'users', title: 'Multi-provider clinics', desc: 'Provider routing and schedule optimization across rooms.' },
    ],
    beforeAfter: [
      ['Instagram DMs', 'Answered hours later', 'Instant replies that book consultations'],
      ['Price questions', 'Left unanswered or vague', 'Honest ranges and a consultation offer'],
      ['No-shows', 'Lost revenue and empty rooms', 'Deposits, reminders and rebooking'],
      ['Treatment intervals', 'Clients forget to rebook', 'Reminders timed to each treatment'],
      ['Reviews', 'Sporadic', 'Requested after every visit'],
    ],
    objections: [
      { q: '“Our clients expect a luxury experience.”', a: 'Instant, polished replies are part of a luxury experience. Messages are written in your brand voice, and real conversations go to your team.' },
      { q: '“We can’t discuss treatments over chat.”', a: 'The AI shares general information and booking details only; medical questions are directed to a consultation with a licensed provider.' },
      { q: '“We already have booking software.”', a: 'We connect to it, so DMs, ads and texts flow into the same calendar and client record.' },
    ],
    calc: { calls: 250, value: 600 },
  },
  roofing: {
    segments: [
      { icon: 'home', title: 'Residential roofing', desc: 'Inspection booking, estimates and financing follow-up.' },
      { icon: 'building', title: 'Commercial roofing', desc: 'Bid tracking, maintenance contracts and property manager outreach.' },
      { icon: 'bolt', title: 'Storm restoration', desc: 'Surge-ready call handling and insurance claim intake after storms.' },
      { icon: 'wrench', title: 'Repairs and gutters', desc: 'Quick-quote requests booked into the schedule.' },
    ],
    beforeAfter: [
      ['Storm surge calls', 'Overwhelmed phones and voicemail', 'Every call answered and triaged'],
      ['Inspection booking', 'Phone tag', 'Booked by territory in one conversation'],
      ['Estimate follow-up', 'One attempt', 'Follow-up until a decision'],
      ['Insurance claim questions', 'Handled one call at a time', 'Standard intake captured up front'],
      ['Past customers', 'No contact after the job', 'Annual inspection reminders and referrals'],
    ],
    objections: [
      { q: '“Roofing is a trust sale; AI can’t close it.”', a: 'It doesn’t need to. It answers fast and books the inspection, where your team builds trust in person.' },
      { q: '“We only get busy after storms.”', a: 'That’s exactly when missed calls cost the most. AI scales instantly for surges, and reactivation fills quieter months.' },
      { q: '“Our CRM is JobNimbus (or AccuLynx).”', a: 'We integrate with your roofing CRM so leads, appointments and statuses stay in sync.' },
    ],
    calc: { calls: 200, value: 9000 },
  },
  solar: {
    segments: [
      { icon: 'sun', title: 'Residential installers', desc: 'Savings estimate funnels, qualification and appointment setting.' },
      { icon: 'building', title: 'Commercial solar', desc: 'Lead qualification for business owners and site-assessment booking.' },
      { icon: 'bolt', title: 'Battery and EV chargers', desc: 'Upsell campaigns to existing solar customers.' },
      { icon: 'users', title: 'Solar sales organizations', desc: 'Lead routing and appointment setting for closers at scale.' },
    ],
    beforeAfter: [
      ['Lead qualification', 'Closers waste time on renters and shaded roofs', 'Homeownership, bill and roof checked first'],
      ['Response time', 'Hours, while competitors call first', 'Seconds, by call and text'],
      ['Appointment setting', 'Manual setters', 'AI books closers’ calendars'],
      ['Long sales cycles', 'Leads go cold', 'Education and check-ins over months'],
      ['Referrals', 'Ad hoc', 'Automated referral asks after installation'],
    ],
    objections: [
      { q: '“Solar leads are shared and low quality.”', a: 'Fast, consistent qualification filters out poor fits before they reach closers, so your team spends time on real opportunities.' },
      { q: '“Homeowners hate pushy calls.”', a: 'So do we. The AI asks a few useful questions and offers a consultation, with clear opt-outs and consent-based calling.' },
      { q: '“Our process is complex.”', a: 'The AI handles the first stage only: qualify and book. Design, financing and closing stay with your team.' },
    ],
    calc: { calls: 300, value: 2500 },
  },
  'salons-beauty': {
    segments: [
      { icon: 'scissors', title: 'Hair salons', desc: 'Online booking, stylist matching and rebooking reminders.' },
      { icon: 'sparkles', title: 'Nail and lash studios', desc: 'Fill rates up with waitlists and last-minute openings.' },
      { icon: 'heart', title: 'Spas and wellness', desc: 'Package sales, gift card follow-up and memberships.' },
      { icon: 'users', title: 'Barbershops', desc: 'Quick booking by text and regular rebooking prompts.' },
    ],
    beforeAfter: [
      ['Booking requests', 'DMs and calls answered between clients', 'Instant booking by text, DM or chat'],
      ['Empty slots', 'Lost revenue', 'Waitlist texts fill cancellations'],
      ['Rebooking', 'Depends on the client remembering', 'Reminders timed to each service'],
      ['No-shows', 'Common, rarely followed up', 'Reminders and deposit policies'],
      ['Reviews', 'Rarely requested', 'Asked after every visit'],
    ],
    objections: [
      { q: '“Our clients like booking with a person.”', a: 'Many prefer booking at 10pm without calling. Those who want a person still get one, while staff stay focused on the client in the chair.' },
      { q: '“We already use Vagaro (or Fresha).”', a: 'Keep it. We connect messaging and follow-up to your booking platform.' },
      { q: '“We’re too small for automation.”', a: 'Small teams benefit most, because every unanswered DM or empty slot hurts more.' },
    ],
    calc: { calls: 350, value: 90 },
  },
  hvac: {
    segments: [
      { icon: 'home', title: 'Residential HVAC', desc: 'Emergency calls, tune-up booking and maintenance plans.' },
      { icon: 'building', title: 'Commercial HVAC', desc: 'Service requests, contract renewals and preventive maintenance scheduling.' },
      { icon: 'fire', title: 'Heating specialists', desc: 'Winter surge handling and pre-season tune-up campaigns.' },
      { icon: 'sun', title: 'Cooling specialists', desc: 'Summer surge handling and system replacement follow-up.' },
    ],
    beforeAfter: [
      ['Emergency calls after hours', 'Voicemail or an expensive answering service', 'Answered, triaged and routed to on-call'],
      ['Tune-up booking', 'Seasonal scramble', 'Campaigns that fill the shoulder seasons'],
      ['Maintenance plans', 'Mentioned inconsistently', 'Offered and renewed automatically'],
      ['Replacement estimates', 'Single follow-up', 'Follow-up until a decision'],
      ['Customer updates', 'Customers call to ask', '“Technician on the way” texts'],
    ],
    objections: [
      { q: '“Emergencies need a human.”', a: 'The AI answers instantly, gathers the details and connects the on-call technician, instead of the customer waiting for a callback.' },
      { q: '“We already use ServiceTitan.”', a: 'We connect to ServiceTitan or your field-service software so bookings and job statuses stay in sync.' },
      { q: '“Our dispatchers handle this fine.”', a: 'During peaks they can’t. AI covers overflow and after-hours calls so dispatchers focus on scheduling.' },
    ],
    calc: { calls: 450, value: 650 },
  },
  chiropractic: {
    segments: [
      { icon: 'user', title: 'Single-practitioner clinics', desc: 'New-patient booking and reminders without extra staff.' },
      { icon: 'users', title: 'Multi-provider practices', desc: 'Provider routing, recalls and care-plan follow-up.' },
      { icon: 'heart', title: 'Sports and rehab', desc: 'Program check-ins and progress-based reminders.' },
      { icon: 'building', title: 'Wellness centers', desc: 'Membership plans, packages and reactivation campaigns.' },
    ],
    beforeAfter: [
      ['New-patient inquiries', 'Callbacks during breaks', 'Instant booking by phone, text or chat'],
      ['Care-plan adherence', 'Patients drop off', 'Reminders and check-ins between visits'],
      ['Missed appointments', 'Empty slots', 'Rebooking text within minutes'],
      ['Inactive patients', 'Forgotten', 'Reactivation campaigns'],
      ['Reviews', 'Sporadic', 'Requested after positive visits'],
    ],
    objections: [
      { q: '“Our patients value personal care.”', a: 'They do, and automation protects it. Staff spend less time on scheduling and more with patients.' },
      { q: '“We can’t discuss treatment by text.”', a: 'The AI handles scheduling and logistics only; clinical questions go to your team.' },
      { q: '“Our EHR handles reminders.”', a: 'We add the parts it doesn’t: instant new-patient response, reactivation and review requests.' },
    ],
    calc: { calls: 250, value: 800 },
  },
};
