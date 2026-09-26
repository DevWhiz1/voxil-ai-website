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
  goldman2023: { name: 'Goldman Sachs Research', year: 2023, url: 'https://www.goldmansachs.com/insights' },
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
  pew2025: { name: 'Pew Research Center', year: 2025, url: 'https://www.pewresearch.org/' },
  uscc2024: { name: 'U.S. Chamber of Commerce, Empowering Small Business', year: 2024, url: 'https://www.uschamber.com/' },
  stlfed2025: { name: 'Federal Reserve Bank of St. Louis', year: 2025, url: 'https://www.stlouisfed.org/on-the-economy' },
  mit2025: { name: 'MIT NANDA, The GenAI Divide', year: 2025, url: 'https://nanda.media.mit.edu/' },
  grandview: { name: 'Grand View Research, AI Market Report', year: 2024, url: 'https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-market' },
  mnmConvAI: { name: 'MarketsandMarkets, Conversational AI Market', year: 2024, url: 'https://www.marketsandmarkets.com/Market-Reports/conversational-ai-market-49043506.html' },
  fcc2024: { name: 'FCC Declaratory Ruling (CG Docket 23-362)', year: 2024, url: 'https://www.fcc.gov/' },
  litmus: { name: 'Litmus, email marketing ROI research', year: 2021, url: 'https://www.litmus.com/' },
};

export const STATS = {
  // --- Adoption -----------------------------------------------------------
  'adoption-78': { value: '78%', label: 'of organisations use AI in at least one business function, up from 55% a year earlier.', src: SRC.mckinsey2025, cat: 'adoption' },
  'genai-71': { value: '71%', label: 'of organisations say they regularly use generative AI in at least one business function.', src: SRC.mckinsey2025, cat: 'adoption' },
  'genai-65-2024': { value: '65%', label: 'of organisations were regularly using gen AI in early 2024, nearly double the share ten months earlier.', src: SRC.mckinsey2024, cat: 'adoption' },
  'ibm-42': { value: '42%', label: 'of enterprise-scale companies reported having actively deployed AI; another 40% were exploring or experimenting.', src: SRC.ibm2023, cat: 'adoption' },
  'wti-75': { value: '75%', label: 'of knowledge workers say they use generative AI at work.', src: SRC.msWti2024, cat: 'adoption' },
  'wti-byoai': { value: '78%', label: 'of AI users at work bring their own AI tools rather than company-provided ones.', src: SRC.msWti2024, cat: 'adoption' },
  'chatgpt-800m': { value: '800M', label: 'weekly ChatGPT users, according to OpenAI in October 2025.', src: SRC.openai2025, cat: 'adoption' },
  'pew-34': { value: '34%', label: 'of U.S. adults say they have used ChatGPT, roughly double the share in 2023.', src: SRC.pew2025, cat: 'adoption' },

  // --- Investment & economics --------------------------------------------
  'us-invest-109': { value: '$109.1B', label: 'U.S. private investment in AI in 2024, far ahead of any other country.', src: SRC.stanford2025, cat: 'economy' },
  'genai-invest-33': { value: '$33.9B', label: 'global private investment in generative AI in 2024.', src: SRC.stanford2025, cat: 'economy' },
  'genai-value-4t': { value: '$2.6-4.4T', label: 'in annual value generative AI could add to the global economy across the use cases analysed.', src: SRC.mckinseyGenAI, cat: 'economy' },
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
  'gartner-80b': { value: '$80B', label: 'reduction in contact-centre agent labour costs from conversational AI in 2026, forecast by Gartner.', src: SRC.gartnerCs2022, cat: 'service' },
  'gartner-25-chatbots': { value: '25%', label: 'of organisations will use chatbots as their primary customer-service channel by 2027, Gartner predicted.', src: SRC.gartnerCs2022, cat: 'service' },
  'gartner-64-prefer': { value: '64%', label: 'of customers said they would prefer companies didn’t use AI for customer service, a reminder that design and escalation matter.', src: SRC.gartnerCs2024, cat: 'service' },
  'nber-14': { value: '14%', label: 'average productivity gain for customer-support agents given an AI assistant, and 34% for novice and lower-skilled agents.', src: SRC.nber2023, cat: 'service' },
  'klarna-2-3': { value: '2/3', label: 'of Klarna’s customer-service chats were handled by its AI assistant in its first month, 2.3 million conversations.', src: SRC.klarna2024, cat: 'service' },

  // --- Agents -------------------------------------------------------------
  'gartner-33-agentic': { value: '33%', label: 'of enterprise software applications will include agentic AI by 2028, up from less than 1% in 2024, Gartner predicts.', src: SRC.gartnerAgentic2024, cat: 'agents' },
  'gartner-15-decisions': { value: '15%', label: 'of day-to-day work decisions will be made autonomously through agentic AI by 2028, Gartner predicts.', src: SRC.gartnerAgentic2024, cat: 'agents' },
  'gartner-40-cancel': { value: '40%+', label: 'of agentic AI projects will be cancelled by the end of 2027 due to cost, unclear value or weak risk controls, Gartner predicts.', src: SRC.gartnerAgentic2025, cat: 'agents' },
  'mit-95': { value: '95%', label: 'of organisations studied reported no measurable P&L return from their generative-AI pilots, most value came from focused, integrated deployments.', src: SRC.mit2025, cat: 'agents' },
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

  // --- Regulation ---------------------------------------------------------
  'fcc-ai-voice': { value: '2024', label: 'the FCC ruled that AI-generated voices are “artificial” voices under the TCPA, so robocall consent rules apply to AI voice calls.', src: SRC.fcc2024, cat: 'regulation' },
};

export const STAT_CATEGORIES = [
  { key: 'adoption', title: 'AI adoption', icon: 'trending', accent: '#2fc4b6' },
  { key: 'economy', title: 'Investment, economy & jobs', icon: 'currency', accent: '#38bdf8' },
  { key: 'service', title: 'AI in customer service', icon: 'bubble', accent: '#ff7a3d' },
  { key: 'agents', title: 'AI agents & conversational AI', icon: 'sparkles', accent: '#6adfd3' },
  { key: 'sales', title: 'Sales, leads & speed-to-lead', icon: 'bolt', accent: '#ff7a3d' },
  { key: 'smb', title: 'Small business & marketing', icon: 'building', accent: '#2fc4b6' },
  { key: 'regulation', title: 'Regulation', icon: 'shield', accent: '#38bdf8' },
];

export const getStat = (id) => {
  const s = STATS[id];
  if (!s) throw new Error(`Unknown stat id: ${id}`);
  return s;
};
