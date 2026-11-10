// Sourced statistics registry. Every figure quoted on the site, blog posts and
// the AI Statistics hub, comes from here, so numbers stay consistent.
//
// Rules for adding a stat:
//   - Only figures published by the named source; quote the source's framing.
//   - Include the publication year so readers can judge recency.
//   - Link to the publisher's report or landing page (prefer stable URLs);
//     use `url: null` rather than guessing when no stable page exists.
//   - Forecasts must read as forecasts ("by 2029…", "could…").

const SRC = {
  mckinsey2025: { name: 'McKinsey, The State of AI', year: 2025, url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  mckinsey2024: { name: 'McKinsey, The State of AI (early 2024)', year: 2024, url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  mckinseyGenAI: { name: 'McKinsey, The Economic Potential of Generative AI', year: 2023, url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier' },
  stanford2025: { name: 'Stanford HAI, AI Index Report', year: 2025, url: 'https://hai.stanford.edu/ai-index' },
  ibm2023: { name: 'IBM Global AI Adoption Index', year: 2023, url: 'https://newsroom.ibm.com/' },
  msWti2024: { name: 'Microsoft & LinkedIn, Work Trend Index', year: 2024, url: 'https://www.microsoft.com/en-us/worklab/work-trend-index' },
  pwc: { name: 'PwC, Sizing the Prize', year: 2017, url: 'https://www.pwc.com/gx/en/issues/artificial-intelligence/publications/artificial-intelligence-study.html' },
  goldman2023: { name: 'Goldman Sachs Research', year: 2023, url: null }, // site returns 403 to crawlers
  wef2025: { name: 'World Economic Forum, Future of Jobs Report', year: 2025, url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
  gartnerCs2025: { name: 'Gartner press release', year: 2025, url: 'https://www.gartner.com/en/newsroom' },
  gartnerCs2022: { name: 'Gartner press release', year: 2022, url: 'https://www.gartner.com/en/newsroom' },
  gartnerCs2024: { name: 'Gartner customer survey', year: 2024, url: 'https://www.gartner.com/en/newsroom' },
  gartnerAgentic2024: { name: 'Gartner, Top Strategic Technology Trends', year: 2024, url: 'https://www.gartner.com/en/newsroom' },
  gartnerAgentic2025: { name: 'Gartner press release', year: 2025, url: 'https://www.gartner.com/en/newsroom' },
  nber2023: { name: 'Brynjolfsson, Li & Raymond, “Generative AI at Work” (NBER)', year: 2023, url: 'https://www.nber.org/papers/w31161' },
  klarna2024: { name: 'Klarna press release', year: 2024, url: 'https://www.klarna.com/international/press/' },
  hbr2011: { name: 'Harvard Business Review, “The Short Life of Online Sales Leads”', year: 2011, url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads' },
  lrm2007: { name: 'Lead Response Management Study (Oldroyd / InsideSales)', year: 2007, url: null },
  salesforceSales: { name: 'Salesforce, State of Sales', year: 2022, url: 'https://www.salesforce.com/resources/research-reports/state-of-sales/' },
  salesforceSmb: { name: 'Salesforce, Small & Medium Business Trends', year: 2025, url: 'https://www.salesforce.com/resources/research-reports/smb-trends/' },
  velocify: { name: 'Velocify lead-response analysis', year: 2014, url: null },
  locals411: { name: '411 Locals small-business phone study', year: 2016, url: 'https://www.411locals.com/' },
  openai2025: { name: 'OpenAI (DevDay keynote)', year: 2025, url: 'https://openai.com/' },
  pew2025: { name: 'Pew Research Center', year: 2025, url: null }, // site returns 403 to crawlers
  uscc2024: { name: 'U.S. Chamber of Commerce, Empowering Small Business', year: 2024, url: 'https://www.uschamber.com/' },
  stlfed2025: { name: 'Federal Reserve Bank of St. Louis', year: 2025, url: 'https://www.stlouisfed.org/on-the-economy' },
  mit2025: { name: 'MIT NANDA, The GenAI Divide', year: 2025, url: 'https://nanda.media.mit.edu/' },
  grandview: { name: 'Grand View Research, AI Market Report', year: 2024, url: 'https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-market' },
  mnmConvAI: { name: 'MarketsandMarkets, Conversational AI Market', year: 2024, url: 'https://www.marketsandmarkets.com/Market-Reports/conversational-ai-market-49043506.html' },
  fcc2024: { name: 'FCC Declaratory Ruling (CG Docket 23-362)', year: 2024, url: 'https://www.fcc.gov/' },
  litmus: { name: 'Litmus, email marketing ROI research', year: 2021, url: 'https://www.litmus.com/' },
  pew2026: { name: 'Pew Research Center, Americans and AI 2026', year: 2026, url: 'https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/' },
  alphabetQ32026: { name: 'Alphabet Q3 2026 earnings, CEO remarks', year: 2026, url: 'https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/' },
  metaQ32025: { name: 'Meta Q3 2025 earnings call', year: 2025, url: 'https://s21.q4cdn.com/399680738/files/doc_financials/2025/q3/META-Q3-2025-Earnings-Call-Transcript.pdf' },
  hai2026: { name: 'Stanford HAI, AI Index Report', year: 2026, url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report' },
  sfService2025: { name: 'Salesforce, State of Service (7th edition)', year: 2025, url: 'https://www.salesforce.com/news/stories/state-of-service-report-announcement-2025/ai-expected-to-resolve-half-of-service-cases-by-2027-data-shows/' },
  sfAgents2026: { name: 'Salesforce, State of Service: AI Agents Edition', year: 2026, url: 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/' },
  sfConnected2024: { name: 'Salesforce, State of the Connected Customer', year: 2024, url: 'https://www.salesforce.com/news/stories/ai-customer-research/' },
  gartnerCs2026: { name: 'Gartner press release', year: 2026, url: 'https://www.gartner.com/en/newsroom/press-releases/2026-02-18-gartner-survey-finds-ninety-one-percent-of-customer-service-leaders-under-pressure-to-implement-ai-in-2026' },
  zendesk2026: { name: 'Zendesk, CX Trends 2026', year: 2025, url: 'https://www.zendesk.com/newsroom/press-releases/contextual-intelligence-becomes-the-new-standard-for-exceptional-customer-experience-in-2026/' },
  zendesk2025: { name: 'Zendesk, CX Trends 2025', year: 2024, url: 'https://www.zendesk.com/newsroom/articles/2025-cx-trends-report/' },
  msWti2025: { name: 'Microsoft, Work Trend Index', year: 2025, url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born' },
  intercomFin: { name: 'Intercom, Fin (vendor-reported)', year: 2026, url: 'https://fin.ai/' },
  mnmAgents2025: { name: 'MarketsandMarkets, AI Agents Market (press release)', year: 2025, url: 'https://www.prnewswire.com/news-releases/ai-agents-market-worth-52-62-billion-by-2030---exclusive-report-by-marketsandmarkets-302435486.html' },
  qualtrics2025: { name: 'Qualtrics XM Institute, Consumer Experience Trends 2026', year: 2025, url: 'https://www.qualtrics.com/news/ai-powered-customer-service-fails-at-four-times-the-rate-of-other-tasks/' },
  forrester2026: { name: 'Forrester, Predictions 2026', year: 2025, url: 'https://www.forrester.com/press-newsroom/forrester-b2c-marketing-cx-digital-2026-predictions/' },
};

export const STATS = {
  // --- Adoption -----------------------------------------------------------
  'adoption-78': { value: '78%', label: 'of organizations use AI in at least one business function, up from 55% a year earlier.', src: SRC.mckinsey2025, cat: 'adoption' },
  'genai-71': { value: '71%', label: 'of organizations say they regularly use generative AI in at least one business function.', src: SRC.mckinsey2025, cat: 'adoption' },
  'genai-65-2024': { value: '65%', label: 'of organizations were regularly using gen AI in early 2024, nearly double the share ten months earlier.', src: SRC.mckinsey2024, cat: 'adoption' },
  'ibm-42': { value: '42%', label: 'of enterprise-scale companies reported having actively deployed AI; another 40% were exploring or experimenting.', src: SRC.ibm2023, cat: 'adoption' },
  'wti-75': { value: '75%', label: 'of knowledge workers say they use generative AI at work.', src: SRC.msWti2024, cat: 'adoption' },
  'wti-byoai': { value: '78%', label: 'of AI users at work bring their own AI tools rather than company-provided ones.', src: SRC.msWti2024, cat: 'adoption' },
  'chatgpt-800m': { value: '800M', label: 'weekly ChatGPT users, according to OpenAI in October 2025.', src: SRC.openai2025, cat: 'adoption' },
  'pew-34': { value: '34%', label: 'of U.S. adults say they have used ChatGPT, roughly double the share in 2023.', src: SRC.pew2025, cat: 'adoption' },

  // --- Investment & economics --------------------------------------------
  'us-invest-109': { value: '$109.1B', label: 'U.S. private investment in AI in 2024, far ahead of any other country.', src: SRC.stanford2025, cat: 'economy' },
  'genai-invest-33': { value: '$33.9B', label: 'global private investment in generative AI in 2024.', src: SRC.stanford2025, cat: 'economy' },
  'genai-value-4t': { value: '$2.6-4.4T', label: 'in annual value generative AI could add to the global economy across the use cases analyzed.', src: SRC.mckinseyGenAI, cat: 'economy' },
  'automation-60-70': { value: '60-70%', label: 'of employees’ time is spent on activities that current gen AI and other technologies could potentially automate.', src: SRC.mckinseyGenAI, cat: 'economy' },
  'pwc-15t': { value: '$15.7T', label: 'potential contribution of AI to the global economy by 2030.', src: SRC.pwc, cat: 'economy' },
  'gs-gdp-7': { value: '7%', label: 'potential lift to global GDP from generative AI over a ten-year period.', src: SRC.goldman2023, cat: 'economy' },
  'gs-300m': { value: '300M', label: 'full-time jobs’ worth of work globally could be exposed to automation by generative AI.', src: SRC.goldman2023, cat: 'economy' },
  'ai-market': { value: '$279B', label: 'estimated size of the global AI market in 2024, projected to grow ~36% a year to 2030.', src: SRC.grandview, cat: 'economy' },
  'wef-net-78m': { value: '+78M', label: 'net new jobs expected by 2030 globally: 170M created and 92M displaced, driven partly by AI.', src: SRC.wef2025, cat: 'economy' },
  'wef-skills-39': { value: '39%', label: 'of workers’ core skills are expected to change by 2030.', src: SRC.wef2025, cat: 'economy' },
  'stlfed-5-4': { value: '5.4%', label: 'of work hours saved in the previous week by workers who used generative AI.', src: SRC.stlfed2025, cat: 'economy' },

  // --- Customer service ---------------------------------------------------
  'gartner-80-2029': { value: '80%', label: 'of common customer-service issues will be resolved autonomously by agentic AI by 2029, Gartner predicts, cutting operational costs by 30%.', src: SRC.gartnerCs2025, cat: 'service' },
  'gartner-80b': { value: '$80B', label: 'reduction in contact-center agent labor costs from conversational AI in 2026, forecast by Gartner.', src: SRC.gartnerCs2022, cat: 'service' },
  'gartner-25-chatbots': { value: '25%', label: 'of organizations will use chatbots as their primary customer-service channel by 2027, Gartner predicted.', src: SRC.gartnerCs2022, cat: 'service' },
  'gartner-64-prefer': { value: '64%', label: 'of customers said they would prefer companies didn’t use AI for customer service, a reminder that design and escalation matter.', src: SRC.gartnerCs2024, cat: 'service' },
  'nber-14': { value: '14%', label: 'average productivity gain for customer-support agents given an AI assistant, and 34% for novice and lower-skilled agents.', src: SRC.nber2023, cat: 'service' },
  'klarna-2-3': { value: '2/3', label: 'of Klarna’s customer-service chats were handled by its AI assistant in its first month, 2.3 million conversations.', src: SRC.klarna2024, cat: 'service' },

  // --- Agents -------------------------------------------------------------
  'gartner-33-agentic': { value: '33%', label: 'of enterprise software applications will include agentic AI by 2028, up from less than 1% in 2024, Gartner predicts.', src: SRC.gartnerAgentic2024, cat: 'agents' },
  'gartner-15-decisions': { value: '15%', label: 'of day-to-day work decisions will be made autonomously through agentic AI by 2028, Gartner predicts.', src: SRC.gartnerAgentic2024, cat: 'agents' },
  'gartner-40-cancel': { value: '40%+', label: 'of agentic AI projects will be canceled by the end of 2027 due to cost, unclear value or weak risk controls, Gartner predicts.', src: SRC.gartnerAgentic2025, cat: 'agents' },
  'mit-95': { value: '95%', label: 'of organizations studied reported no measurable P&L return from their generative-AI pilots, most value came from focused, integrated deployments.', src: SRC.mit2025, cat: 'agents' },
  'conv-ai-market': { value: '$49.9B', label: 'projected conversational AI market by 2030, up from about $13.2B in 2024 (one analyst estimate).', src: SRC.mnmConvAI, cat: 'agents' },

  // --- Sales & leads ------------------------------------------------------
  'hbr-7x': { value: '7×', label: 'more likely to qualify a lead when firms tried to contact it within an hour, versus an hour or later.', src: SRC.hbr2011, cat: 'sales' },
  'hbr-60x': { value: '60×', label: 'more likely to qualify a lead when contacting within an hour versus waiting 24 hours or longer.', src: SRC.hbr2011, cat: 'sales' },
  'hbr-42h': { value: '42 hrs', label: 'average first-response time to web leads among companies that responded at all.', src: SRC.hbr2011, cat: 'sales' },
  'hbr-23': { value: '23%', label: 'of companies studied never responded to the web lead at all.', src: SRC.hbr2011, cat: 'sales' },
  'lrm-100x': { value: '100×', label: 'drop in the odds of contacting a lead when calling after 30 minutes instead of within 5 minutes.', src: SRC.lrm2007, cat: 'sales' },
  'lrm-21x': { value: '21×', label: 'drop in the odds of qualifying a lead when calling after 30 minutes instead of within 5 minutes.', src: SRC.lrm2007, cat: 'sales' },
  'velocify-391': { value: '391%', label: 'higher conversion when a lead was called within the first minute, in Velocify’s analysis.', src: SRC.velocify, cat: 'sales' },
  'sf-28': { value: '28%', label: 'of a sales rep’s week is spent actually selling; the rest goes to admin, data entry and other tasks.', src: SRC.salesforceSales, cat: 'sales' },
  'locals-62': { value: '62%', label: 'of calls to small businesses went unanswered in a widely cited 411 Locals study.', src: SRC.locals411, cat: 'sales' },

  // --- Small business -----------------------------------------------------
  'uscc-40': { value: '40%', label: 'of U.S. small businesses reported using generative AI in 2024, nearly doubling from 23% the year before.', src: SRC.uscc2024, cat: 'smb' },
  'sf-smb-75': { value: '75%', label: 'of small and medium businesses say they are at least experimenting with AI.', src: SRC.salesforceSmb, cat: 'smb' },
  'litmus-36': { value: '$36', label: 'average return for every $1 spent on email marketing.', src: SRC.litmus, cat: 'smb' },

  // --- Chatbots & AI customer service (added November 2026) ---------------
  'pew-chatbot-49': { value: '49%', label: 'of U.S. adults now use AI chatbots, up from about a third in 2024.', src: SRC.pew2026, cat: 'adoption' },
  'pew-daily-24': { value: '24%', label: 'of U.S. adults use AI chatbots daily.', src: SRC.pew2026, cat: 'adoption' },
  'pew-chatgpt-44': { value: '44%', label: 'of U.S. adults have used ChatGPT, up from 34% in 2025.', src: SRC.pew2026, cat: 'adoption' },
  'pew-gemini-24': { value: '24%', label: 'of U.S. adults use Google Gemini; 17% use Copilot, 14% Meta AI and 6% Claude.', src: SRC.pew2026, cat: 'adoption' },
  'gemini-1b': { value: '1B+', label: 'monthly active users on the Gemini app, according to Alphabet in October 2026.', src: SRC.alphabetQ32026, cat: 'adoption' },
  'meta-ai-1b': { value: '1B+', label: 'monthly active users of Meta AI, according to Meta in October 2025.', src: SRC.metaQ32025, cat: 'adoption' },
  'meta-threads-1b': { value: '1B+', label: 'active conversation threads with business accounts every day across Meta’s messaging apps.', src: SRC.metaQ32025, cat: 'adoption' },
  'hai-genai-53': { value: '53%', label: 'population adoption reached by generative AI within three years, faster than the PC or the internet.', src: SRC.hai2026, cat: 'adoption' },
  'sf-cases-50': { value: '50%', label: 'of customer service cases are expected to be handled by AI by 2027, up from 30% today, service professionals estimate.', src: SRC.sfService2025, cat: 'service' },
  'sf-routine-20': { value: '20%', label: 'less time spent on routine cases by service reps who use AI, about four hours a week.', src: SRC.sfService2025, cat: 'service' },
  'sf-security-51': { value: '51%', label: 'of service leaders say security concerns have delayed or limited their AI initiatives.', src: SRC.sfService2025, cat: 'service' },
  'sf-agentic-66': { value: '66%', label: 'of customer service organizations now use agentic AI, up from 39% in 2025.', src: SRC.sfAgents2026, cat: 'service' },
  'sf-any-ai-85': { value: '85%', label: 'of service organizations use at least one form of AI.', src: SRC.sfAgents2026, cat: 'service' },
  'sf-value-70': { value: '70%', label: 'of organizations with AI service agents see measurable value within 60 days of deployment.', src: SRC.sfAgents2026, cat: 'service' },
  'sf-know-ai-75': { value: '~75%', label: 'of consumers want to know whether they are communicating with an AI agent.', src: SRC.sfConnected2024, cat: 'service' },
  'sf-escalation-45': { value: '45%', label: 'of consumers are more likely to use an AI agent if there is a clear path to a human.', src: SRC.sfConnected2024, cat: 'service' },
  'gartner-pressure-91': { value: '91%', label: 'of customer service leaders report pressure from executives to implement AI in 2026.', src: SRC.gartnerCs2026, cat: 'service' },
  'zd-24-7-74': { value: '74%', label: 'of consumers now expect 24/7 customer service because of AI.', src: SRC.zendesk2026, cat: 'service' },
  'zd-repeat-74': { value: '74%', label: 'of consumers are frustrated when they have to repeat information.', src: SRC.zendesk2026, cat: 'service' },
  'zd-explain-95': { value: '95%', label: 'of consumers expect an explanation for decisions made by AI.', src: SRC.zendesk2026, cat: 'service' },
  'zd-80-75': { value: '75%', label: 'of CX leaders expect 80% of customer interactions to be resolved without a human in the next few years.', src: SRC.zendesk2025, cat: 'service' },
  'zd-copilot-73': { value: '73%', label: 'of support agents believe an AI copilot would help them do their job better.', src: SRC.zendesk2025, cat: 'service' },
  'qualtrics-1in5': { value: '~1 in 5', label: 'consumers who used AI for customer service saw no benefit, a failure rate almost four times higher than AI use in general.', src: SRC.qualtrics2025, cat: 'service' },
  'qualtrics-human-50': { value: '50%', label: 'of consumers worry companies’ use of AI will stop them reaching a human.', src: SRC.qualtrics2025, cat: 'service' },
  'forrester-third': { value: '1 in 3', label: 'companies will harm customer experiences with frustrating AI self-service in 2026, Forrester predicts.', src: SRC.forrester2026, cat: 'service' },
  'ms-agents-46': { value: '46%', label: 'of business leaders say their companies use AI agents to fully automate workflows or processes.', src: SRC.msWti2025, cat: 'agents' },
  'fin-76': { value: '76%', label: 'average resolution rate Intercom reports for its Fin AI agent across 12,000+ customers (vendor-reported).', src: SRC.intercomFin, cat: 'agents' },
  'fin-2m': { value: '2M', label: 'customer conversations resolved each week by Intercom’s Fin AI agent (vendor-reported).', src: SRC.intercomFin, cat: 'agents' },
  'mm-agents-52b': { value: '$52.6B', label: 'projected AI agents market by 2030, up from $7.84B in 2025 (one analyst estimate).', src: SRC.mnmAgents2025, cat: 'agents' },

  // --- Regulation ---------------------------------------------------------
  'fcc-ai-voice': { value: '2024', label: 'the FCC ruled that AI-generated voices are “artificial” voices under the TCPA, so robocall consent rules apply to AI voice calls.', src: SRC.fcc2024, cat: 'regulation' },
};

export const STAT_CATEGORIES = [
  { key: 'adoption', title: 'AI adoption', icon: 'trending', accent: '#1d8fe1' },
  { key: 'economy', title: 'Investment, economy & jobs', icon: 'currency', accent: '#38bdf8' },
  { key: 'service', title: 'AI in customer service', icon: 'bubble', accent: '#1d8fe1' },
  { key: 'agents', title: 'AI agents & conversational AI', icon: 'sparkles', accent: '#6bb3ec' },
  { key: 'sales', title: 'Sales, leads & speed-to-lead', icon: 'bolt', accent: '#1d8fe1' },
  { key: 'smb', title: 'Small business & marketing', icon: 'building', accent: '#1d8fe1' },
  { key: 'regulation', title: 'Regulation', icon: 'shield', accent: '#38bdf8' },
];

export const getStat = (id) => {
  const s = STATS[id];
  if (!s) throw new Error(`Unknown stat id: ${id}`);
  return s;
};
