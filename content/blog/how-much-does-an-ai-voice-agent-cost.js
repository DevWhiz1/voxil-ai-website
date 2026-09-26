import { callout, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'how-much-does-an-ai-voice-agent-cost',
  title: 'How Much Does an AI Voice Agent Cost? Build Fees, Per-Minute Costs & ROI (2026)',
  metaTitle: 'How Much Does an AI Voice Agent Cost in 2026? | Voxil AI',
  description: 'AI voice agent pricing explained: one-time build costs, per-minute usage (platform, LLM, voice, telephony), monthly running costs by call volume, and how to calculate ROI.',
  category: 'Pricing',
  date: '2026-02-24',
  updated: '2026-09-26',
  featured: true,
  keywords: ['AI voice agent cost', 'AI receptionist cost', 'voice AI pricing', 'cost per minute AI calls'],
  excerpt: 'A transparent breakdown of what AI voice agents cost, the one-time build, the per-minute usage stack, worked monthly examples and a simple ROI formula.',
  takeaways: [
    'Voice agents have two costs: a one-time build and ongoing per-minute usage.',
    'Usage stacks the voice platform, speech-to-text, the language model, text-to-speech and telephony.',
    'All-in usage commonly lands in the range of roughly $0.10-$0.30+ per minute, depending on choices.',
    'Focused builds typically cost a few thousand dollars; complex multi-system agents run into five figures.',
    'ROI comes from recovered calls and leads, calculate it from your own missed-call and close-rate data.',
  ],
  services: ['ai-voice-agents', 'ai-receptionist', 'vapi-ai-integration', 'retell-ai-setup'],
  related: ['vapi-vs-retell-ai', 'what-is-an-ai-receptionist', 'ai-automation-roi-small-business'],
  body: `
<p>"How much does it cost?" is the first question every client asks about AI voice agents, and most answers online are either a vendor’s per-minute headline or a vague "it depends". Here’s the full picture: what you pay once, what you pay every month, and how to decide whether it’s worth it.</p>

<h2>The two parts of voice-agent cost</h2>
<ol>
  <li><strong>Build (one-time):</strong> conversation design, knowledge setup, integrations with your CRM and calendar, telephony, testing and a supervised pilot.</li>
  <li><strong>Usage (ongoing):</strong> per-minute charges from the providers that make each call work, plus phone numbers.</li>
</ol>

<h2>What goes into per-minute usage</h2>
${table(
  ['Layer', 'What it does', 'What changes the cost'],
  [
    ['Voice platform', 'Orchestrates the real-time call (e.g. Vapi, Retell AI)', 'Platform plan and fees'],
    ['Speech-to-text', 'Transcribes the caller', 'Provider and model'],
    ['Language model', 'Decides what to say and do', 'Model size, prompt length, call length'],
    ['Text-to-speech', 'Generates the agent’s voice', 'Standard vs premium voices'],
    ['Telephony', 'Connects to the phone network', 'Country, inbound vs outbound, carrier'],
  ],
  'Voice agent usage cost layers'
)}
<p>Add them together and the <strong>all-in usage cost commonly lands somewhere around $0.10 to $0.30+ per minute</strong>. Premium voices, larger models, long prompts and international calls push it up; efficient configurations bring it down. Vendor pricing changes frequently, so always price your exact configuration.</p>

<h2>Monthly running cost examples</h2>
${table(
  ['Scenario', 'Calls / month', 'Avg length', 'Minutes', 'At $0.15/min', 'At $0.25/min'],
  [
    ['Small office after-hours cover', '300', '2 min', '600', '$90', '$150'],
    ['Busy clinic front desk', '1,500', '3 min', '4,500', '$675', '$1,125'],
    ['Home-service company, all calls', '2,500', '3.5 min', '8,750', '$1,313', '$2,188'],
    ['Outbound speed-to-lead', '4,000', '1.5 min', '6,000', '$900', '$1,500'],
  ],
  'Voice agent monthly cost examples'
)}
<p>These are illustrative usage costs only, excluding phone-number fees, any platform subscription and optional support retainers.</p>

<h2>What a build costs</h2>
<p>Build cost depends on scope: how many call types, how many systems the agent must read from and write to, and how much testing and compliance work is needed.</p>
${table(
  ['Build scope', 'Typical range', 'Examples'],
  [
    ['Focused agent', 'A few thousand dollars', 'After-hours receptionist, FAQ + booking into one calendar'],
    ['Integrated agent', 'Mid four to low five figures', 'Qualification + CRM + calendar + SMS + transfers'],
    ['Multi-agent system', 'Five figures+', 'Several call types, custom APIs, squads, analytics'],
  ],
  'Voice agent build cost ranges'
)}
${callout('How we price', 'Every Voxil AI build is a fixed price agreed before work starts, with usage passed through at cost. You own the configuration, prompts and documentation, no per-seat licence or lock-in.')}

<h2>Hidden costs to watch for</h2>
<ul>
  <li><strong>Per-seat or per-agent licences</strong> on some SaaS "AI receptionist" products.</li>
  <li><strong>Premium voice upcharges</strong> that double usage cost for marginal quality gains.</li>
  <li><strong>Long system prompts</strong> that inflate model costs on every turn.</li>
  <li><strong>Compliance add-ons</strong> (e.g. HIPAA options) on certain plans.</li>
  <li><strong>Tuning time</strong>, the first 30 days always surface edge cases; make sure it’s included.</li>
</ul>

<h2>How to calculate ROI</h2>
<p>Voice agents pay back by recovering calls and leads you currently lose, and by freeing staff time.</p>
${callout('ROI formula', '<strong>Monthly value ≈ (recovered calls × opportunity rate × close rate × average job value) + staff hours saved × hourly cost</strong><br/>Compare against monthly usage plus the build cost spread over 12 months.', '#ff7a3d')}
<p>Our ${link('/resources/lead-loss-calculator/', 'Lead Loss Calculator')} estimates the first half of that formula in under a minute. For the broader method, see ${link('/blog/ai-automation-roi-small-business/', 'How to Calculate AI Automation ROI')}.</p>

<h2>Buy vs build</h2>
<p>Off-the-shelf AI receptionist apps are cheaper to start but limited to their templates and integrations. A custom build costs more upfront, integrates with exactly your stack and has no per-seat licence. If your needs are standard, start with a product; if calls touch your CRM, scheduling rules and multiple systems, a custom agent usually wins on total cost within a year.</p>
`,
  faqs: [
    { q: 'How much does an AI voice agent cost per minute?', a: 'All-in usage, platform, speech-to-text, language model, voice and telephony, commonly lands around $0.10 to $0.30+ per minute, depending on the providers and settings you choose.' },
    { q: 'How much does it cost to build an AI voice agent?', a: 'A focused agent typically costs a few thousand dollars to build; integrated agents with CRM, calendar and transfer logic cost more, and complex multi-agent systems run into five figures.' },
    { q: 'Is an AI receptionist cheaper than a human receptionist?', a: 'For most call volumes, monthly usage is a fraction of a salary, and it covers 24/7 with unlimited simultaneous calls. Many businesses use both: AI for volume and after-hours, people for complex conversations.' },
    { q: 'Are there monthly fees besides usage?', a: 'Possibly: phone numbers, platform subscriptions on some plans, and optional support or tuning retainers. We list every line item in the proposal.' },
  ],
};
