// AI Voice & Calls, service page content.
// Each entry follows the shape documented in scripts/templates/service.js.

const VOICE_STACK = ['Vapi', 'Retell AI', 'Twilio', 'Telnyx', 'ElevenLabs', 'Deepgram', 'OpenAI', 'Anthropic Claude', 'GoHighLevel', 'HubSpot', 'Salesforce', 'Google Calendar', 'Calendly', 'Cal.com', 'Zapier', 'Make.com', 'n8n'];

export default {
  'ai-calling-bots': {
    title: 'AI Calling Bots Built on Vapi & Retell AI | Voxil AI',
    description:
      'Custom AI calling bots for inbound and outbound calls, lead qualification, reminders, reactivation and booking. Built on Vapi & Retell AI, integrated with your CRM.',
    h1: 'AI calling bots that <span class="text-gradient-warm">pick up, qualify and book</span>',
    lead: 'We build inbound and outbound AI calling bots on Vapi and Retell AI that sound natural, follow your script, update your CRM and hand hot leads to a human in real time.',
    answer:
      'An <strong>AI calling bot</strong> is software that places and answers phone calls using speech recognition, a large language model and a synthetic voice. It can qualify leads, book appointments, send reminders and reactivate old contacts, then logs every call, transcript and outcome in your CRM automatically.',
    facts: [
      { label: 'Go-live', value: '2-4 weeks' },
      { label: 'Availability', value: '24/7/365' },
      { label: 'Platforms', value: 'Vapi · Retell' },
      { label: 'Ownership', value: '100% yours' },
    ],
    pills: ['Inbound + outbound', 'Live transfer', 'CRM logging', 'Call recordings'],
    whatIs: {
      title: 'Your phone line, staffed by an agent that never takes a break',
      paras: [
        'Most businesses lose revenue on the phone in two places: inbound calls nobody answers, and outbound calls nobody has time to make. An AI calling bot closes both gaps. It answers on the first ring, and it works through call lists, new web leads, no-shows, old quotes, at whatever pace you set.',
        'We design the conversation like a sales script, not a demo: the questions that qualify, the objections your team hears every week, and the exact moment a human should take over. The bot books into your real calendar and writes structured notes back to your CRM, so your team only spends time on calls worth taking.',
      ],
    },
    included: [
      'Call-flow and script design with your team',
      'Voice selection, latency tuning and interruption handling',
      'Inbound number setup or port-in, plus outbound dialer',
      'CRM, calendar and SMS integrations',
      'Live transfer and voicemail-drop rules',
      'Analytics dashboard with transcripts and recordings',
    ],
    features: [
      { icon: 'signal', title: 'Speed-to-lead dialing', desc: 'New form fills get a call within seconds, while intent is highest, not the next morning.' },
      { icon: 'funnel', title: 'Qualification scripts', desc: 'Budget, timeline, location and need captured as structured fields, not free-text notes.' },
      { icon: 'calendar', title: 'Real-time booking', desc: 'Checks live availability and books the slot during the call, with SMS confirmation.' },
      { icon: 'refresh', title: 'Database reactivation', desc: 'Works through old leads and past customers with a relevant, compliant reason to talk.' },
      { icon: 'users', title: 'Warm live transfer', desc: 'Hands qualified callers to an available rep with a whispered summary of the call so far.' },
      { icon: 'chart', title: 'Call analytics', desc: 'Every call recorded, transcribed, tagged by outcome and pushed to your reporting.' },
    ],
    steps: [
      { title: 'Scope the calls', desc: 'We pick the one call type costing you the most, inbound overflow, speed-to-lead or reactivation, and map the script.' },
      { title: 'Build & integrate', desc: 'Agent built on Vapi or Retell, wired to your CRM, calendar, phone numbers and SMS.' },
      { title: 'Test on real calls', desc: 'Hundreds of test calls, then a supervised pilot on live traffic with daily transcript reviews.' },
      { title: 'Scale & tune', desc: 'Roll out to all traffic, add call types, and tune monthly against conversion data.' },
    ],
    compare: {
      title: 'AI calling bot vs. <span class="text-gradient-warm">the alternatives</span>',
      lead: 'How an AI calling bot compares with the usual ways businesses cover the phones.',
      head: ['', 'AI calling bot', 'In-house SDR', 'Answering service', 'Voicemail'],
      rows: [
        ['Answers 24/7', 'Yes', 'Business hours', 'Yes', 'No'],
        ['Calls new leads in seconds', 'Yes', 'Sometimes', 'No', 'No'],
        ['Books into your calendar', 'Yes', 'Yes', 'Rarely', 'No'],
        ['Updates your CRM automatically', 'Yes', 'Manual', 'No', 'No'],
        ['Handles call spikes', 'Unlimited concurrency', 'One call at a time', 'Queue-based', 'N/A'],
        ['Cost profile', 'Build fee + per-minute usage', 'Salary + benefits', 'Per-minute / per-call', 'Free, but leads are lost'],
      ],
    },
    fit: [
      'Businesses that get more calls or leads than their team can return quickly',
      'Sales teams that want reps closing, not dialing and qualifying',
      'Service businesses losing after-hours and weekend calls to voicemail',
      'Companies with a large database of old leads that never converted',
    ],
    industries: ['real-estate', 'insurance', 'home-services', 'solar', 'roofing', 'med-spas'],
    integrations: VOICE_STACK,
    faqs: [
      { q: 'Are AI calling bots legal?', a: 'Yes, when used correctly. Inbound calls are straightforward. For outbound calls in the US, the TCPA and FCC rules apply, the FCC confirmed in 2024 that AI-generated voices count as "artificial" voices, so you need prior express consent for automated outbound calls and must honor opt-outs. We build consent checks, calling-hour windows and DNC handling into every outbound bot, and we recommend you confirm your specific use case with counsel.' },
      { q: 'Do AI calling bots sound robotic?', a: 'Modern stacks sound close to human. We tune voice choice, speaking rate, filler handling and interruption ("barge-in") behavior, and keep response latency low so the pauses feel natural. Many callers never ask, and when they do, the bot is configured to answer honestly that it is an AI assistant.' },
      { q: 'Vapi or Retell AI, which do you use?', a: 'Both. Vapi gives us deep control for custom tool-calling and complex integrations; Retell AI is excellent for fast, stable deployments with strong built-in call handling. We recommend one after scoping your call volume, integrations and budget, see our <a href="/blog/vapi-vs-retell-ai/" class="text-primary-600 underline underline-offset-4">Vapi vs Retell comparison</a>.' },
      { q: 'How much does an AI calling bot cost?', a: 'You pay a one-time, fixed-price build fee, then usage, per-minute charges from the voice platform, telephony and AI model providers, passed through at cost. We give you an exact quote and a per-minute estimate after a 30-minute scoping call. Our <a href="/blog/how-much-does-an-ai-voice-agent-cost/" class="text-primary-600 underline underline-offset-4">voice agent cost guide</a> breaks down every line item.' },
      { q: 'Can the bot transfer calls to my team?', a: 'Yes. We set rules for when to transfer, a qualified lead, an upset caller, or a question outside scope, and pass a summary to the rep so the caller never repeats themselves. If nobody is available, it books a callback instead.' },
    ],
    related: ['ai-voice-agents', 'ai-sdr-system', 'vapi-ai-integration', 'retell-ai-setup'],
  },

  'ai-voice-agents': {
    title: 'AI Voice Agent Development Services | Custom Phone Agents | Voxil AI',
    description:
      'Custom AI voice agents that answer calls, qualify leads, book appointments and resolve support requests 24/7. Built on Vapi & Retell, integrated with your CRM.',
    h1: 'AI voice agents that <span class="text-gradient-warm">sound human</span> and do real work',
    lead: 'Natural-sounding phone agents for inbound support, booking and outbound follow-up, latency-tuned, integrated with your systems, and designed with a human escape hatch at every step.',
    answer:
      'An <strong>AI voice agent</strong> is a conversational AI that speaks with callers in real time. It listens with speech-to-text, reasons with a large language model, replies with a lifelike synthetic voice, and takes actions, booking appointments, looking up orders, or updating a CRM, during the call.',
    facts: [
      { label: 'Go-live', value: '2-4 weeks' },
      { label: 'Concurrency', value: 'Unlimited' },
      { label: 'Languages', value: 'Multilingual' },
      { label: 'Pilot', value: 'Supervised' },
    ],
    pills: ['Inbound support', 'Appointment booking', 'Outbound follow-up', 'Multilingual'],
    whatIs: {
      title: 'Not an IVR menu. A conversation that gets things done.',
      paras: [
        'Traditional phone trees make callers press buttons and wait. A voice agent simply asks how it can help, understands the answer in plain language, and acts on it, checking your calendar, pulling an order status or capturing a new lead.',
        'We build voice agents as production systems: grounded in your approved knowledge, restricted to the actions you allow, monitored with full transcripts, and tuned against real calls for thirty days after launch. You own the configuration, prompts and documentation.',
      ],
    },
    included: [
      'Conversation design and knowledge-base setup',
      'Voice, speed and personality tuning to your brand',
      'Tool integrations: CRM, calendar, helpdesk, SMS',
      'Escalation, transfer and fallback rules',
      'Supervised pilot with daily transcript review',
      '30 days of post-launch tuning',
    ],
    features: [
      { icon: 'phone', title: 'Inbound call handling', desc: 'Answers FAQs, triages, and routes, with context, to the right person or department.' },
      { icon: 'calendar', title: 'Booking & rescheduling', desc: 'Books, moves and cancels appointments against your live calendar and sends confirmations.' },
      { icon: 'signal', title: 'Outbound campaigns', desc: 'Reminders, confirmations, surveys and follow-ups at scale, within consent rules you control.' },
      { icon: 'globe', title: 'Multilingual callers', desc: 'Detects the caller’s language and switches, English, Spanish, Arabic, Urdu and more.' },
      { icon: 'shield', title: 'Guardrails', desc: 'Restricted to approved knowledge and actions; says "let me get a person" when unsure.' },
      { icon: 'chart', title: 'Transcripts & QA', desc: 'Searchable recordings, summaries, sentiment and outcome tags for every call.' },
    ],
    steps: [
      { title: 'Discovery call', desc: 'We identify the call types worth automating and the ones that should stay human.' },
      { title: 'Design & build', desc: 'Scripts, knowledge, voice and integrations assembled on Vapi or Retell AI.' },
      { title: 'Supervised pilot', desc: 'Live on a slice of calls with a human reviewing transcripts every day.' },
      { title: 'Launch & tune', desc: 'Full rollout, dashboard handover and monthly improvements if you want them.' },
    ],
    fit: [
      'Teams whose phones ring more than staff can answer',
      'Businesses that book appointments by phone',
      'Support teams answering the same ten questions all day',
      'Multi-location companies that need consistent call handling',
    ],
    industries: ['medical-clinics', 'home-services', 'real-estate', 'law-firms', 'hvac', 'chiropractic'],
    integrations: VOICE_STACK,
    faqs: [
      { q: 'How is a voice agent different from an IVR?', a: 'An IVR routes callers through fixed menus ("press 1 for sales"). A voice agent understands natural speech, answers questions directly and completes tasks during the call, so most callers never need a menu or a hold queue.' },
      { q: 'What happens if the AI doesn’t know the answer?', a: 'It says so and hands off. We constrain every agent to your approved content and define exactly when it must transfer to a person or take a message. It never guesses about pricing, medical, legal or account-specific matters unless you explicitly allow it.' },
      { q: 'Can it use my existing phone number?', a: 'Yes. We can forward your existing number (for overflow or after-hours only, if you prefer), or port it to a provider such as Twilio or Telnyx. Your callers dial the same number they always have.' },
      { q: 'How long does it take to build?', a: 'Most single-purpose voice agents go live in two to four weeks. More integrations or several call types add time; we give you a fixed timeline in the proposal.' },
      { q: 'Is call data secure?', a: 'We scope data handling at the start: what is recorded, where it is stored, retention periods and which providers process it. For healthcare we design HIPAA-aware architectures using vendors that sign BAAs, and we tell you plainly what we can and cannot commit to.' },
    ],
    related: ['ai-receptionist', 'ai-calling-bots', 'ai-appointment-booking', 'ai-customer-support'],
  },

  'ai-receptionist': {
    title: 'AI Receptionist for Small Business | 24/7 Virtual Receptionist | Voxil AI',
    description:
      'An AI receptionist that answers every call, books appointments, answers FAQs and routes urgent calls 24/7. Custom-built for your business and integrated with your calendar and CRM.',
    h1: 'An AI receptionist that <span class="text-gradient-warm">never misses a call</span>',
    lead: 'Greets every caller in your business’s name, answers common questions, books appointments and forwards the urgent ones, day, night and weekend, for a fraction of the cost of another hire.',
    answer:
      'An <strong>AI receptionist</strong> is a virtual front-desk agent that answers your business phone 24/7. It greets callers, answers questions about hours, pricing and services, books or reschedules appointments, takes messages and transfers urgent calls, then texts or emails your team a summary of every conversation.',
    facts: [
      { label: 'Answers', value: 'First ring' },
      { label: 'Hours', value: '24/7/365' },
      { label: 'Setup', value: '2-3 weeks' },
      { label: 'Summaries', value: 'SMS + email' },
    ],
    pills: ['After-hours cover', 'Appointment booking', 'Call routing', 'Message taking'],
    whatIs: {
      title: 'Your front desk, without the hold music',
      paras: [
        'Small businesses miss a large share of inbound calls, during lunch, after hours, or while staff are with customers, and many callers who reach voicemail simply call the next business on the list. An AI receptionist answers every one of those calls on the first ring.',
        'It is trained on your services, pricing guidance, service area and policies. It books into your scheduling tool, sends confirmations, and escalates emergencies to an on-call number. Your team gets a clean summary instead of a voicemail to decode.',
      ],
    },
    included: [
      'Custom greeting, voice and call script',
      'FAQ knowledge base from your website and policies',
      'Calendar booking with SMS confirmations',
      'Urgent-call routing and on-call escalation',
      'Call summaries by SMS, email or Slack',
      'Monthly call report and tuning',
    ],
    features: [
      { icon: 'phone', title: 'Answers instantly', desc: 'No rings to voicemail, no hold queues, even when five people call at once.' },
      { icon: 'question', title: 'Handles FAQs', desc: 'Hours, location, services, insurance accepted, pricing ranges, answered consistently.' },
      { icon: 'calendar', title: 'Books appointments', desc: 'Offers real open slots and books them in Google, Outlook, Calendly, GHL or your practice software.' },
      { icon: 'bolt', title: 'Routes urgent calls', desc: 'Recognizes emergencies and warm-transfers to the right person or on-call line.' },
      { icon: 'mail', title: 'Takes perfect messages', desc: 'Name, number, reason and urgency captured and delivered in seconds.' },
      { icon: 'globe', title: 'Speaks your callers’ language', desc: 'Bilingual reception (e.g. English and Spanish) without hiring bilingual staff.' },
    ],
    steps: [
      { title: 'Map your calls', desc: 'We review what callers ask and which calls must reach a human.' },
      { title: 'Train & connect', desc: 'We load your knowledge, connect your calendar and set routing rules.' },
      { title: 'Soft launch', desc: 'Start with after-hours and overflow calls while you review summaries.' },
      { title: 'Go full-time', desc: 'Expand to all calls once you’re happy, with monthly tuning.' },
    ],
    compare: {
      title: 'AI receptionist vs. <span class="text-gradient-warm">human receptionist</span>',
      lead: 'Most clients use both: the AI handles volume and after-hours; people handle the moments that need a human.',
      head: ['', 'AI receptionist', 'Human receptionist', 'Answering service'],
      rows: [
        ['Hours covered', '24/7/365', 'Business hours', '24/7'],
        ['Simultaneous calls', 'Unlimited', 'One', 'Several'],
        ['Books into your calendar', 'Yes, automatically', 'Yes', 'Usually messages only'],
        ['Knows your business in depth', 'Yes (trained on your content)', 'Yes', 'Scripted'],
        ['Sick days / turnover', 'None', 'Yes', 'Varies'],
        ['Best at', 'Volume, consistency, after-hours', 'Empathy, complex judgment', 'Basic overflow'],
      ],
    },
    fit: [
      'Clinics, law firms and agencies that book by phone',
      'Home-service businesses that get calls while on job sites',
      'Offices where the front desk is overwhelmed at peak times',
      'Owners who want after-hours coverage without an answering service',
    ],
    industries: ['medical-clinics', 'law-firms', 'chiropractic', 'med-spas', 'hvac', 'salons-beauty'],
    integrations: ['Google Calendar', 'Outlook', 'Calendly', 'Cal.com', 'GoHighLevel', 'Jobber', 'Housecall Pro', 'ServiceTitan', 'Clio', 'HubSpot', 'Twilio', 'Vapi', 'Retell AI', 'Slack'],
    faqs: [
      { q: 'How much does an AI receptionist cost?', a: 'There is a one-time setup fee for design, training and integrations, plus monthly usage based on call minutes. For most small businesses the monthly running cost is a small fraction of a part-time receptionist’s wage. We quote a fixed setup price after a short call.' },
      { q: 'Will callers know it’s an AI?', a: 'The voice is natural enough that many won’t notice, but we recommend, and configure, honest disclosure if asked. Transparency builds trust, and in some jurisdictions disclosure is required.' },
      { q: 'Can it book directly into my scheduling software?', a: 'Yes, if your software has an API or integration, Google Calendar, Outlook, Calendly, Cal.com, GoHighLevel, Jobber, Housecall Pro and many practice-management tools. If yours doesn’t, we can send booking requests for one-click approval.' },
      { q: 'What if a caller has an emergency?', a: 'We define emergency keywords and scenarios with you. The receptionist transfers those calls immediately to a live number, or dispatches your on-call contact by SMS and call, and tells the caller what happens next.' },
      { q: 'Can I keep my current number?', a: 'Yes. Most clients simply forward calls, all the time, after hours only, or when the line is busy, so nothing changes for callers.' },
    ],
    related: ['ai-phone-answering', 'ai-appointment-booking', 'ai-voice-agents', 'ai-customer-support'],
  },

  'ai-phone-answering': {
    title: 'AI Phone Answering Service | Answer Every Call 24/7 | Voxil AI',
    description:
      'AI phone answering that picks up every call in one ring, 24/7. Captures leads, answers FAQs, books jobs and texts you summaries. Stop losing customers to voicemail.',
    h1: 'AI phone answering: <span class="text-gradient-warm">every call, first ring</span>',
    lead: 'Missed calls are missed revenue. Our AI phone answering service picks up instantly, captures the caller’s details and intent, books what can be booked and alerts you to what can’t.',
    answer:
      '<strong>AI phone answering</strong> replaces voicemail and traditional answering services with a conversational AI that picks up every call 24/7. It captures caller details, answers common questions, books appointments or jobs, and sends your team an instant text or email summary, so no lead is lost to an unanswered phone.',
    facts: [
      { label: 'Pickup', value: 'Under 1 ring' },
      { label: 'Coverage', value: 'Overflow or 24/7' },
      { label: 'Setup', value: '1-3 weeks' },
      { label: 'Alerts', value: 'Instant SMS' },
    ],
    pills: ['Overflow answering', 'After-hours', 'Lead capture', 'Instant alerts'],
    whatIs: {
      title: 'Voicemail is where leads go to die',
      paras: [
        'Research on small-business phone traffic has repeatedly found that a large share of calls go unanswered, and most callers who reach voicemail don’t leave a message. They call a competitor instead. See our <a href="/blog/missed-call-statistics/" class="text-primary-600 underline underline-offset-4">missed-call statistics</a> for the data.',
        'AI phone answering fixes the gap without changing how you work. Forward your line when you’re busy, closed or on a job; the AI handles the conversation and your phone lights up with a summary you can act on, or a booked appointment you don’t need to touch.',
      ],
    },
    included: [
      'Call forwarding setup (busy, no-answer or after-hours)',
      'Custom answering script and business knowledge',
      'Lead capture into CRM or spreadsheet',
      'Job or appointment booking',
      'Instant SMS / email / Slack notifications',
      'Spam and robocall filtering',
    ],
    features: [
      { icon: 'phone', title: 'Answers in one ring', desc: 'Every call is picked up immediately, no voicemail greeting, no hold.' },
      { icon: 'funnel', title: 'Captures the lead', desc: 'Name, number, address, job type and urgency collected every time.' },
      { icon: 'calendar', title: 'Books the job', desc: 'Offers available windows and books, or requests approval if you prefer.' },
      { icon: 'shield', title: 'Filters spam', desc: 'Screens robocalls and sales pitches so your team only hears real inquiries.' },
      { icon: 'bolt', title: 'Instant alerts', desc: 'A text with the caller’s details lands on your phone seconds after the call.' },
      { icon: 'chart', title: 'Missed-call reporting', desc: 'See how many calls you would have missed, and what they were worth.' },
    ],
    steps: [
      { title: 'Choose coverage', desc: 'Overflow, after-hours, weekends or all calls, you decide.' },
      { title: 'Set the script', desc: 'We write the greeting, questions and booking rules with you.' },
      { title: 'Forward & test', desc: 'Turn on call forwarding and run test calls together.' },
      { title: 'Review & improve', desc: 'Weekly summaries for the first month, then monthly tuning.' },
    ],
    fit: [
      'Owner-operators who can’t answer while working',
      'Businesses paying for an answering service that only takes messages',
      'Teams that get call spikes after ads or seasonal demand',
      'Anyone whose voicemail box is full of leads that went cold',
    ],
    industries: ['home-services', 'roofing', 'hvac', 'law-firms', 'solar', 'fitness-gyms'],
    integrations: ['Twilio', 'Telnyx', 'RingCentral', 'Google Voice (forwarding)', 'GoHighLevel', 'Jobber', 'Housecall Pro', 'ServiceTitan', 'HubSpot', 'Google Sheets', 'Slack', 'Vapi', 'Retell AI'],
    faqs: [
      { q: 'How is this different from an answering service?', a: 'Traditional answering services take a message and pass it on. AI phone answering understands the request, answers questions, books appointments into your calendar and writes to your CRM, at any volume, with no per-agent queue.' },
      { q: 'Do I need a new phone number?', a: 'No. We set up conditional forwarding from your existing number, for example only when you don’t pick up within three rings, or only after 6pm.' },
      { q: 'Can it handle calls in Spanish?', a: 'Yes. The AI can detect the caller’s language and respond in it, and we can script bilingual greetings.' },
      { q: 'What does it cost per month?', a: 'Running costs are usage-based: you pay for the minutes the AI is actually on calls, plus telephony. We estimate this from your call volume during scoping so there are no surprises.' },
      { q: 'What if I want to pick up myself?', a: 'You still can. With overflow forwarding, your phone rings first; the AI only answers the calls you don’t.' },
    ],
    related: ['ai-receptionist', 'ai-voice-agents', 'ai-follow-up-system', 'lead-capture-system'],
  },

  'ai-appointment-booking': {
    title: 'AI Appointment Booking & Scheduling Agent | Voice + Chat | Voxil AI',
    description:
      'AI appointment booking agents that schedule, reschedule and confirm appointments by phone, SMS, WhatsApp and web chat, synced with your calendar and CRM to cut no-shows.',
    h1: 'AI appointment booking that <span class="text-gradient-warm">fills your calendar</span>',
    lead: 'Let customers book, reschedule and confirm by phone, text, WhatsApp or chat, any hour, while automated reminders cut no-shows and your team stops playing phone tag.',
    answer:
      'An <strong>AI appointment booking agent</strong> schedules appointments through natural conversation on phone, SMS, WhatsApp or web chat. It checks real-time availability, books the right service with the right staff member, sends confirmations and reminders, and handles reschedules and cancellations automatically.',
    facts: [
      { label: 'Channels', value: 'Voice · SMS · Chat' },
      { label: 'Availability', value: '24/7' },
      { label: 'Setup', value: '2-3 weeks' },
      { label: 'Reminders', value: 'Automatic' },
    ],
    pills: ['Real-time availability', 'Reschedules', 'No-show reminders', 'Multi-staff'],
    whatIs: {
      title: 'Booking should take one conversation, not four',
      paras: [
        'Manual scheduling is a cycle of missed calls, voicemails and back-and-forth texts. Every round trip is a chance for the customer to book elsewhere. An AI booking agent collapses it into one conversation, at the moment the customer wants to book.',
        'We connect the agent to your calendar or practice software, encode your booking rules, service durations, buffers, staff skills, locations, and layer reminder and confirmation flows on top to protect the slots once they’re booked.',
      ],
    },
    included: [
      'Booking rules: services, durations, buffers, staff',
      'Voice, SMS, WhatsApp and web chat booking',
      'Confirmation and reminder sequences',
      'Reschedule and cancellation handling',
      'Waitlist and last-minute gap filling',
      'Calendar and CRM sync',
    ],
    features: [
      { icon: 'calendar', title: 'Live availability', desc: 'Reads your calendar in real time, never double-books, respects buffers and breaks.' },
      { icon: 'users', title: 'Multi-staff routing', desc: 'Matches the service to the right practitioner, location and room.' },
      { icon: 'refresh', title: 'Self-serve reschedules', desc: 'Customers move their appointment by replying to a text, no call needed.' },
      { icon: 'bolt', title: 'No-show reduction', desc: 'Confirmation and reminder flows with one-tap confirm or reschedule.' },
      { icon: 'clock', title: 'Gap filling', desc: 'Offers freshly canceled slots to your waitlist automatically.' },
      { icon: 'currency', title: 'Deposits', desc: 'Optional payment links for deposits or cancellation protection.' },
    ],
    steps: [
      { title: 'Map booking rules', desc: 'Services, staff, hours, buffers and exceptions documented together.' },
      { title: 'Connect calendars', desc: 'Integrate your scheduling tool and CRM; set up channels.' },
      { title: 'Test edge cases', desc: 'Double-bookings, time zones, holidays and cancellations tested before launch.' },
      { title: 'Launch & measure', desc: 'Track bookings, reschedules and no-show rate from week one.' },
    ],
    fit: [
      'Clinics, spas, salons and studios with busy calendars',
      'Service businesses booking estimates or site visits',
      'Teams losing bookings to phone tag',
      'Anyone whose no-show rate is quietly eating revenue',
    ],
    industries: ['med-spas', 'salons-beauty', 'chiropractic', 'medical-clinics', 'fitness-gyms', 'real-estate'],
    integrations: ['Google Calendar', 'Outlook', 'Calendly', 'Cal.com', 'Acuity', 'GoHighLevel', 'Mindbody', 'Vagaro', 'Jane App', 'Boulevard', 'Jobber', 'Housecall Pro', 'Stripe', 'Twilio', 'WhatsApp Business API'],
    faqs: [
      { q: 'Which calendars and booking tools does it work with?', a: 'Google Calendar, Outlook/Microsoft 365, Calendly, Cal.com, Acuity, GoHighLevel and many industry tools with an API (e.g. Jobber, Housecall Pro, Jane App, Mindbody, Vagaro, Boulevard). We confirm your exact tool during scoping.' },
      { q: 'Can it handle multiple staff and locations?', a: 'Yes. We encode which staff perform which services at which locations, along with their hours, so the agent only offers valid slots.' },
      { q: 'Does it reduce no-shows?', a: 'Automated confirmations and reminders with easy reschedule links are one of the most reliable ways to reduce no-shows, because they turn silent no-shows into reschedules. We track your no-show rate before and after launch.' },
      { q: 'Can customers book by text or WhatsApp?', a: 'Yes, the same booking logic runs across voice, SMS, WhatsApp, Instagram DMs and web chat.' },
      { q: 'Can it take deposits?', a: 'Yes. We can send a Stripe or Square payment link during booking and only confirm the appointment once paid, if you want that rule.' },
    ],
    related: ['ai-receptionist', 'ai-voice-agents', 'whatsapp-automation', 'ai-follow-up-system'],
  },

  'ai-sdr-system': {
    title: 'AI SDR System | AI Sales Development Rep that Books Meetings | Voxil AI',
    description:
      'An AI SDR system that responds to inbound leads in seconds, qualifies them over voice, SMS and email, follows up persistently and books meetings on your closers’ calendars.',
    h1: 'An AI SDR that <span class="text-gradient-warm">books meetings</span> while you sleep',
    lead: 'Your AI sales development rep responds to every inbound lead in seconds, qualifies against your criteria, follows up for weeks without fatigue, and hands booked meetings to your closers.',
    answer:
      'An <strong>AI SDR system</strong> is an automated sales development rep that engages leads across phone, SMS and email. It responds to new inquiries within seconds, asks qualifying questions, handles common objections, follows up persistently and books qualified meetings directly onto your sales team’s calendars.',
    facts: [
      { label: 'Response time', value: 'Seconds' },
      { label: 'Channels', value: 'Voice · SMS · Email' },
      { label: 'Setup', value: '3-5 weeks' },
      { label: 'Hand-off', value: 'Booked meetings' },
    ],
    pills: ['Speed-to-lead', 'Qualification', 'Objection handling', 'Meeting booking'],
    whatIs: {
      title: 'Speed-to-lead is a system problem, not an effort problem',
      paras: [
        'The research on lead response is consistent: contacting a lead within minutes massively outperforms contacting them an hour later. Human SDR teams can’t sustain that at 11pm on a Sunday. An AI SDR can. See the numbers in our <a href="/blog/speed-to-lead-statistics/" class="text-primary-600 underline underline-offset-4">speed-to-lead statistics</a>.',
        'We build the SDR around your ideal customer profile and qualification framework (BANT, MEDDIC-lite or your own), connect it to your lead sources and CRM, and set clear rules for when a lead goes to a human. Your reps start their day with booked, qualified meetings instead of a call list.',
      ],
    },
    included: [
      'ICP and qualification framework design',
      'Multi-channel sequences: voice, SMS, email',
      'Objection-handling library from your best reps',
      'CRM pipeline stages and lead scoring',
      'Round-robin booking to closers’ calendars',
      'Weekly performance reporting',
    ],
    features: [
      { icon: 'bolt', title: 'Instant first touch', desc: 'Calls or texts new leads within seconds of opt-in, day or night.' },
      { icon: 'funnel', title: 'Structured qualification', desc: 'Captures budget, authority, need and timing as CRM fields your team can filter.' },
      { icon: 'chat', title: 'Objection handling', desc: 'Answers the questions your prospects always ask using approved talk tracks.' },
      { icon: 'refresh', title: 'Persistent follow-up', desc: 'Multi-week, multi-channel sequences that stop the moment a lead replies.' },
      { icon: 'calendar', title: 'Meeting booking', desc: 'Round-robin or owner-based booking with reminders to cut no-shows.' },
      { icon: 'chart', title: 'Pipeline visibility', desc: 'Reports on response time, contact rate, qualification rate and meetings booked.' },
    ],
    steps: [
      { title: 'Define the ICP', desc: 'Who is a good lead, what disqualifies them, and what a booked meeting requires.' },
      { title: 'Build sequences', desc: 'Voice scripts, SMS and email copy, objection library, booking rules.' },
      { title: 'Connect sources', desc: 'Forms, ads, CRM and calendars wired in; test end-to-end.' },
      { title: 'Launch & optimize', desc: 'A/B test openers and cadences against meetings booked.' },
    ],
    fit: [
      'Inbound-heavy sales teams where leads go cold before contact',
      'Companies spending on ads but converting too few leads',
      'Founders doing their own qualification calls',
      'Sales teams that want closers closing, not prospecting',
    ],
    industries: ['insurance', 'solar', 'real-estate', 'roofing', 'law-firms', 'home-services'],
    integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'GoHighLevel', 'Close', 'Calendly', 'Cal.com', 'Google Calendar', 'Facebook Lead Ads', 'Google Ads', 'Typeform', 'Twilio', 'Vapi', 'Retell AI', 'Instantly', 'Smartlead'],
    faqs: [
      { q: 'Does an AI SDR replace my sales team?', a: 'No, it replaces the repetitive part of the job. The AI handles first touch, qualification and follow-up; your people handle discovery, demos and closing, which is where they add the most value.' },
      { q: 'Can the AI SDR do cold outreach?', a: 'We focus on inbound and warm leads, where consent and intent are clear. For outbound, we build compliant email sequences and can support calling only where you have the appropriate consent. We will not build systems that ignore TCPA, CAN-SPAM, GDPR or PECR rules.' },
      { q: 'How does it qualify leads?', a: 'Using your qualification framework. We turn it into specific questions and scoring rules, store answers as CRM fields and only book meetings for leads that meet your threshold, others go into nurture.' },
      { q: 'What results should I expect?', a: 'Results depend on lead volume, quality and your offer. The most immediate change is usually response time, from hours to seconds, which improves contact rates. We benchmark your current numbers before launch so you can see the real difference.' },
      { q: 'Which CRM do you support?', a: 'HubSpot, Salesforce, Pipedrive, GoHighLevel, Close and most CRMs with an API.' },
    ],
    related: ['ai-calling-bots', 'ai-lead-generation', 'ai-follow-up-system', 'crm-automation'],
  },

  'vapi-ai-integration': {
    title: 'Vapi AI Integration & Development Agency | Vapi Experts | Voxil AI',
    description:
      'Vapi AI developers who build production voice assistants: custom tools, function calling, squads, CRM and calendar integrations, telephony and monitoring. Fixed-price builds.',
    h1: 'Vapi AI integration by <span class="text-gradient-warm">production voice engineers</span>',
    lead: 'We design, build and harden Vapi voice assistants, custom tool calls, multi-assistant squads, telephony, CRM and calendar integrations, so your demo becomes a system you can trust with real customers.',
    answer:
      '<strong>Vapi AI integration</strong> means connecting Vapi, a developer platform for building voice AI agents, to your phone numbers, business tools and data. A Vapi integration typically includes assistant configuration, custom function/tool calls to your APIs, webhooks, CRM and calendar sync, call transfer logic and monitoring.',
    facts: [
      { label: 'Platform', value: 'Vapi' },
      { label: 'Build time', value: '2-4 weeks' },
      { label: 'Tooling', value: 'Custom APIs' },
      { label: 'Handover', value: 'Full docs' },
    ],
    pills: ['Function calling', 'Squads', 'Webhooks', 'Telephony'],
    whatIs: {
      title: 'Vapi is powerful. Production is the hard part.',
      paras: [
        'Vapi makes it fast to get an assistant talking. Getting it to behave reliably on thousands of real calls, with low latency, clean interruptions, correct tool calls, sensible fallbacks and clean data in your CRM, is where most projects stall.',
        'We’ve built enough Vapi assistants to know where they break. We choose the model, transcriber and voice for your latency and cost targets, write server-side tools with proper error handling, and put monitoring in place so you know when something changes.',
      ],
    },
    included: [
      'Assistant and squad architecture',
      'Model, transcriber and voice selection',
      'Custom tools / function calling to your APIs',
      'Server webhooks with retries and logging',
      'Phone numbers: Vapi, Twilio, Telnyx or SIP',
      'Monitoring, evals and runbook documentation',
    ],
    features: [
      { icon: 'code', title: 'Custom tool calls', desc: 'Look up orders, check availability, create tickets, secure server-side functions with validation.' },
      { icon: 'users', title: 'Squads & transfers', desc: 'Specialist assistants for booking, support and billing with seamless hand-offs.' },
      { icon: 'clock', title: 'Latency tuning', desc: 'Model, voice and endpointing choices tuned so replies feel conversational.' },
      { icon: 'link', title: 'CRM & calendar sync', desc: 'Structured call outcomes written to GoHighLevel, HubSpot, Salesforce and more.' },
      { icon: 'shield', title: 'Guardrails & fallbacks', desc: 'Timeouts, retries and graceful "let me connect you" paths when tools fail.' },
      { icon: 'chart', title: 'Evals & monitoring', desc: 'Test-call suites and dashboards that catch regressions before customers do.' },
    ],
    steps: [
      { title: 'Architecture', desc: 'We design assistants, tools, data flow and telephony for your use case.' },
      { title: 'Build tools', desc: 'Server functions and webhooks built, secured and unit-tested.' },
      { title: 'Test at volume', desc: 'Scripted test calls across accents, noise and edge cases.' },
      { title: 'Deploy & document', desc: 'Go live with monitoring, a runbook and a handover session.' },
    ],
    fit: [
      'Teams with a Vapi prototype that isn’t reliable enough to launch',
      'Agencies reselling voice AI that need a white-label build partner',
      'SaaS products adding voice features on Vapi',
      'Businesses that need custom integrations beyond no-code options',
    ],
    industries: ['medical-clinics', 'real-estate', 'insurance', 'home-services'],
    integrations: ['Vapi', 'Twilio', 'Telnyx', 'SIP trunks', 'OpenAI', 'Anthropic Claude', 'Deepgram', 'ElevenLabs', 'Cartesia', 'GoHighLevel', 'HubSpot', 'Salesforce', 'Google Calendar', 'Supabase', 'n8n', 'Make.com'],
    faqs: [
      { q: 'What is Vapi?', a: 'Vapi is a developer platform for building voice AI agents. It orchestrates speech-to-text, a language model and text-to-speech in real time, and lets developers add tools, telephony and webhooks. Businesses use it to build phone agents without assembling the voice pipeline from scratch.' },
      { q: 'Can you fix an existing Vapi assistant?', a: 'Yes. We often start with an audit: prompts, tool definitions, latency settings, webhook reliability and call logs. You get a prioritized fix list and, if you want, we implement it.' },
      { q: 'Vapi or Retell AI, which is better?', a: 'Neither is universally better. Vapi offers deep flexibility for custom tooling and multi-assistant flows; Retell AI is very strong for fast, stable deployments. We compare them honestly in our <a href="/blog/vapi-vs-retell-ai/" class="text-primary-600 underline underline-offset-4">Vapi vs Retell AI guide</a>.' },
      { q: 'Do I own the Vapi account?', a: 'Yes. We build in your Vapi organization (or transfer it to you), and all server code lives in your repository.' },
      { q: 'Can you white-label Vapi agents for my agency?', a: 'Yes. We build and maintain Vapi agents under your brand for your clients, with documentation your team can support.' },
    ],
    related: ['retell-ai-setup', 'ai-voice-agents', 'ai-calling-bots', 'api-integration'],
  },

  'retell-ai-setup': {
    title: 'Retell AI Setup & Integration Experts | Retell AI Agency | Voxil AI',
    description:
      'Retell AI setup by specialists: agent design, conversation flows, knowledge bases, custom functions, phone numbers and CRM integrations. Launch reliable Retell voice agents fast.',
    h1: 'Retell AI setup that’s <span class="text-gradient-warm">ready for real callers</span>',
    lead: 'We configure Retell AI agents end-to-end, conversation flows, knowledge bases, custom functions, phone numbers and CRM integrations, and test them properly before your customers ever hear them.',
    answer:
      '<strong>Retell AI setup</strong> is the process of building a production voice agent on Retell AI: designing the prompt or conversation flow, connecting a knowledge base, adding custom functions for booking or data lookup, assigning phone numbers, configuring call transfer and post-call analysis, and integrating results with your CRM.',
    facts: [
      { label: 'Platform', value: 'Retell AI' },
      { label: 'Setup', value: '1-3 weeks' },
      { label: 'Flows', value: 'Prompt or graph' },
      { label: 'Handover', value: 'Full access' },
    ],
    pills: ['Conversation flows', 'Knowledge base', 'Custom functions', 'Post-call analysis'],
    whatIs: {
      title: 'Fast to start. Worth doing properly.',
      paras: [
        'Retell AI is one of the quickest ways to get a stable, natural-sounding phone agent live. But a good setup still depends on the details: a flow that handles off-script callers, functions that fail gracefully, and post-call data your team actually uses.',
        'We build Retell agents with structured conversation flows where reliability matters and single-prompt agents where flexibility matters, connect them to your stack with webhooks or middleware, and configure post-call analysis so every call produces clean, searchable data.',
      ],
    },
    included: [
      'Agent design: single-prompt or conversation flow',
      'Knowledge base from your site and documents',
      'Custom functions: booking, lookup, CRM writes',
      'Phone numbers, transfer and voicemail rules',
      'Post-call analysis fields and webhooks',
      'Test suite and launch checklist',
    ],
    features: [
      { icon: 'sliders', title: 'Conversation flows', desc: 'Node-based flows for predictable paths like booking, intake and verification.' },
      { icon: 'book', title: 'Knowledge bases', desc: 'Grounded answers from your approved content, kept in sync as it changes.' },
      { icon: 'code', title: 'Custom functions', desc: 'Real-time calls to your calendar, CRM or database during the conversation.' },
      { icon: 'phone', title: 'Telephony', desc: 'Retell numbers or your own via Twilio/Telnyx, with warm and cold transfers.' },
      { icon: 'chart', title: 'Post-call analysis', desc: 'Extract outcome, sentiment and custom fields from every call automatically.' },
      { icon: 'link', title: 'CRM integration', desc: 'Push call data into GoHighLevel, HubSpot, Salesforce or a spreadsheet.' },
    ],
    steps: [
      { title: 'Scope & script', desc: 'Define goals, call paths, data to capture and transfer rules.' },
      { title: 'Configure Retell', desc: 'Agent, flow, knowledge base, voice and functions set up.' },
      { title: 'Integrate', desc: 'Webhooks and middleware connect call data to your tools.' },
      { title: 'Test & launch', desc: 'Structured test calls, a pilot, and a documented handover.' },
    ],
    fit: [
      'Businesses that want a reliable voice agent live quickly',
      'Teams that tried Retell AI but got stuck on flows or integrations',
      'Agencies deploying voice agents for multiple clients',
      'Operations that need structured data from every call',
    ],
    industries: ['home-services', 'medical-clinics', 'insurance', 'real-estate'],
    integrations: ['Retell AI', 'Twilio', 'Telnyx', 'GoHighLevel', 'HubSpot', 'Salesforce', 'Cal.com', 'Calendly', 'Google Calendar', 'Make.com', 'Zapier', 'n8n', 'Google Sheets', 'Slack'],
    faqs: [
      { q: 'What is Retell AI?', a: 'Retell AI is a platform for building, testing and deploying AI phone agents. It provides the real-time voice pipeline, telephony, conversation-flow tooling, knowledge bases and post-call analytics, so teams can launch voice agents without building infrastructure.' },
      { q: 'Single prompt or conversation flow, which should I use?', a: 'Use conversation flows when the path matters (intake, booking, verification) and single prompts when the call is open-ended (general FAQs). Many of our builds combine both.' },
      { q: 'Can Retell AI book appointments?', a: 'Yes. With custom functions or native integrations it can check availability and book into tools like Cal.com, Calendly, Google Calendar or GoHighLevel during the call.' },
      { q: 'How long does Retell AI setup take?', a: 'A focused agent can be live in one to three weeks, depending on integrations and how many call types you need.' },
      { q: 'Can you migrate my agent from Vapi or Bland to Retell?', a: 'Yes. We port prompts, tools and integrations, then re-test on the new platform so behavior matches or improves.' },
    ],
    related: ['vapi-ai-integration', 'ai-voice-agents', 'ai-receptionist', 'gohighlevel-ai'],
  },

  'ai-customer-support': {
    title: 'AI Customer Support Automation | Voice & Chat Support Agents | Voxil AI',
    description:
      'AI customer support agents that resolve routine tickets over chat, email and phone, integrate with Zendesk, Intercom and Gorgias, and escalate to humans with full context.',
    h1: 'AI customer support that <span class="text-gradient-warm">resolves, not deflects</span>',
    lead: 'AI agents that actually resolve routine requests, order status, bookings, account questions, how-tos, across chat, email and phone, and escalate the rest to your team with full context.',
    answer:
      '<strong>AI customer support</strong> uses conversational AI agents to answer customer questions and complete routine tasks across chat, email, messaging and phone. Grounded in your help content and connected to your systems, they resolve common requests instantly and hand complex issues to human agents with the conversation history attached.',
    facts: [
      { label: 'Channels', value: 'Chat · Email · Voice' },
      { label: 'Hours', value: '24/7' },
      { label: 'Setup', value: '3-6 weeks' },
      { label: 'Escalation', value: 'With context' },
    ],
    pills: ['Ticket resolution', 'Order lookups', 'Helpdesk integration', 'Human hand-off'],
    whatIs: {
      title: 'Resolution rate is the only metric that matters',
      paras: [
        'Old support bots measured "deflection": how many customers gave up before reaching a person. We build for resolution, the customer got what they needed. That means connecting the agent to your order system, booking tool or account data, not just your FAQ page.',
        'Analysts expect AI to handle a growing share of service interactions over the next few years (see our <a href="/blog/ai-customer-service-statistics/" class="text-primary-600 underline underline-offset-4">AI customer service statistics</a>). The businesses that benefit are the ones that pair automation with a clean, fast path to a human.',
      ],
    },
    included: [
      'Support content audit and knowledge base build',
      'Chat, email and voice agents',
      'Helpdesk integration and ticket tagging',
      'Order, booking and account lookups',
      'Escalation rules with full context hand-off',
      'Resolution and CSAT reporting',
    ],
    features: [
      { icon: 'book', title: 'Grounded answers', desc: 'Answers only from your approved help content and policies, with sources.' },
      { icon: 'database', title: 'Account-aware', desc: 'Looks up orders, bookings and subscriptions securely to answer specific questions.' },
      { icon: 'bolt', title: 'Takes action', desc: 'Reschedules, updates addresses, issues return labels, within rules you set.' },
      { icon: 'users', title: 'Clean escalation', desc: 'Hands over to a human with a summary, so customers never repeat themselves.' },
      { icon: 'globe', title: 'Multilingual', desc: 'Supports customers in their own language across every channel.' },
      { icon: 'chart', title: 'Insight reports', desc: 'Surfaces top contact reasons so you can fix root causes, not just answer them.' },
    ],
    steps: [
      { title: 'Ticket analysis', desc: 'We analyze recent tickets to find the high-volume, automatable requests.' },
      { title: 'Knowledge & tools', desc: 'Build the knowledge base and connect the systems needed to resolve them.' },
      { title: 'Shadow mode', desc: 'The agent drafts answers for your team to approve before going live.' },
      { title: 'Go live & tune', desc: 'Launch per channel, review weekly, and expand scope as resolution climbs.' },
    ],
    fit: [
      'Support teams where a few request types dominate volume',
      'Ecommerce and subscription businesses with order and account questions',
      'Companies needing 24/7 or multilingual support without night shifts',
      'Teams whose first-response times are slipping as they grow',
    ],
    industries: ['medical-clinics', 'insurance', 'home-services', 'fitness-gyms'],
    integrations: ['Zendesk', 'Intercom', 'Gorgias', 'Freshdesk', 'HubSpot Service Hub', 'Help Scout', 'Shopify', 'Stripe', 'WhatsApp Business API', 'Slack', 'Twilio', 'OpenAI', 'Anthropic Claude'],
    faqs: [
      { q: 'Will AI support frustrate my customers?', a: 'Bad bots do. We avoid that by keeping the agent focused on requests it can fully resolve, making "talk to a person" available at any time, and escalating automatically on frustration signals.' },
      { q: 'Does it work with Zendesk / Intercom / Gorgias?', a: 'Yes. We integrate with your helpdesk so AI conversations become tickets, tags and internal notes your team already uses.' },
      { q: 'How do you stop it from making things up?', a: 'Retrieval from approved content only, strict instructions to say "I don’t know", action permissions scoped per request type, and a shadow-mode period where humans review drafts before anything goes live.' },
      { q: 'Can it handle phone support too?', a: 'Yes. The same knowledge and tools can power a voice agent, so customers get consistent answers on chat and phone.' },
      { q: 'How long until it’s live?', a: 'Typically three to six weeks, depending on how many systems it needs to access. We usually launch on one channel first.' },
    ],
    related: ['ai-chatbots', 'ai-voice-agents', 'whatsapp-automation', 'workflow-automation'],
  },
};
