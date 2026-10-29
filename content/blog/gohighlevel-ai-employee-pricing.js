import { callout, link, table } from '../../scripts/lib/content-helpers.js';

const GHL_PRICING = 'https://help.gohighlevel.com/support/solutions/articles/155000006652';

export default {
  slug: 'gohighlevel-ai-employee-pricing',
  title: 'GoHighLevel AI Employee Pricing and Review (2026): $20, $50 or $97?',
  metaTitle: 'GoHighLevel AI Employee Pricing & Review 2026 | Voxil AI',
  description: 'GoHighLevel AI Employee pricing explained: Starter $20, Growth $50 and Unlimited $97 per sub-account, what each includes, pay-per-use rates and which plan pays off.',
  category: 'GoHighLevel',
  date: '2026-10-29',
  keywords: ['GoHighLevel AI Employee', 'GoHighLevel AI Employee pricing', 'GoHighLevel AI Employee review', 'GoHighLevel Voice AI pricing', 'GoHighLevel AI cost'],
  excerpt: 'Three AI Employee plans, a long pay-per-use rate card and a few costs that sit outside every plan. Here’s what you actually pay, and the break-even maths for choosing a plan.',
  takeaways: [
    'AI Employee is billed per sub-account, on top of your GoHighLevel plan: Starter $20, Growth $50 or Unlimited $97 a month.',
    'Starter is only available on the $497 agency plan and leaves Conversation AI and Voice AI on pay-per-use.',
    'On the default voice stack, Voice AI costs about $0.06 a minute pay-per-use, so Unlimited only pays off around 1,600+ minutes a month.',
    'Phone charges, Workflow AI actions and Agent Studio flow agents are billed separately on every plan.',
    'When an allowance runs out, usage pauses by default unless you turn on Extra Usage.',
  ],
  services: ['gohighlevel-ai', 'gohighlevel-automation', 'ghl-setup', 'ghl-expert'],
  related: ['gohighlevel-ai-guide', 'gohighlevel-pricing', 'gohighlevel-conversation-ai-setup'],
  body: `
<p>"AI Employee" is HighLevel’s name for the bundle of AI tools inside GoHighLevel: the chat bot that replies to texts and DMs, the voice agent that answers calls, AI review replies, content generation and the in-app assistants. The pricing has changed several times, and most write-ups are already out of date. This guide uses <a href="${GHL_PRICING}" target="_blank" rel="noopener">HighLevel’s own AI pricing article</a> as of 29 October 2026, and adds the maths you need to pick a plan.</p>

${callout('Prices change often', 'HighLevel updates AI pricing regularly. Treat the figures below as a snapshot and check the AI Suite billing page in your agency account before you quote clients.', '#ff7a3d')}

<h2>What the AI Employee includes</h2>
<ul>
  <li><strong>Conversation AI:</strong> replies to SMS, web chat, Facebook, Instagram and WhatsApp messages, qualifies leads and books appointments.</li>
  <li><strong>Voice AI:</strong> answers inbound calls (and can make outbound calls), books appointments and transfers to your team.</li>
  <li><strong>Reviews AI:</strong> drafts and sends replies to Google and Facebook reviews.</li>
  <li><strong>Content AI:</strong> writes copy and generates images for emails, posts and funnels.</li>
  <li><strong>Assistants:</strong> Ask AI, AI Studio and Creator Studio inside the app.</li>
  <li><strong>Managed Agents and Prompt Optimizers</strong> on the higher plans.</li>
</ul>
<p>Several AI tools are free on every account, subject to fair use: Funnel and Website AI, Email AI, Calendar AI, Layout AI, the Knowledge Base and the Workflow AI Builder.</p>

<h2>AI Employee plans and prices</h2>
${table(
  ['', 'Starter', 'Growth', 'Unlimited'],
  [
    ['Price per sub-account', '$20/month', '$50/month', '$97/month'],
    ['Who can buy it', 'Agencies on the $497 plan only', 'All agencies', 'All agencies'],
    ['Conversation AI', 'Pay-per-use', '1,000 responses/month', 'Unlimited (fair use)'],
    ['Voice AI', 'Pay-per-use', '100 minutes/month', 'Unlimited (fair use)'],
    ['Reviews AI', 'Pay-per-use', 'Unlimited', 'Unlimited'],
    ['Content AI', 'Unlimited', 'Unlimited', 'Unlimited'],
    ['Ask AI, AI Studio, Creator Studio', 'Standard usage', 'High usage', 'Unlimited'],
    ['Managed Agent runs', 'Pay-per-use', '100/month', '1,000/month'],
    ['Prompt Optimizers', 'Pay-per-use', '500 chat messages + 100 voice minutes', 'Unlimited'],
  ],
  'GoHighLevel AI Employee plans, per sub-account (HighLevel, October 2026)'
)}
<p>Every plan covers all users in that sub-account. Prices are per sub-account, so ten client accounts on Unlimited cost $970 a month on top of your GoHighLevel subscription (see our ${link('/blog/gohighlevel-pricing/', 'GoHighLevel pricing guide')} for the base plans).</p>

<h2>What no plan includes</h2>
<ul>
  <li><strong>Phone charges:</strong> call minutes and numbers through the phone system are billed on every plan, including Unlimited.</li>
  <li><strong>Workflow AI actions:</strong> Decision Maker, Intent Detection, Summarize and Translate steps cost $0.01 per execution.</li>
  <li><strong>Agent Studio flow agents:</strong> always pay-per-use, with no allowance on any plan.</li>
  <li><strong>Usage over your allowance:</strong> on Growth, usage <em>pauses by default</em> when you hit 1,000 responses or 100 minutes. You have to turn on Extra Usage in AI Suite, then overage is billed at pay-per-use rates.</li>
</ul>
${callout('Easy to miss', 'If a Growth sub-account runs out of Voice AI minutes mid-month and Extra Usage is off, the AI stops answering. Decide up front whether you want a hard cap or uninterrupted service.')}

<h2>Pay-per-use rates</h2>
${table(
  ['Product', 'Rate'],
  [
    ['Voice AI engine', '$0.045/min'],
    ['Voice AI text-to-speech', 'OpenAI or Cartesia $0.015/min · ElevenLabs V2.5 $0.035/min · ElevenLabs V3 $0.17/min'],
    ['Voice AI speech-to-speech', 'Gemini Flash Live $0.10/min · GPT-Realtime $0.20/min'],
    ['Conversation AI', 'Per 1M tokens by model, e.g. GPT-5 Mini $0.25 in / $2.00 out, Claude Sonnet 5.5 $2.20 in / $11.00 out'],
    ['Reviews AI', '$0.01 per AI reply sent (suggestions are free)'],
    ['Workflow AI actions', '$0.01 per execution'],
  ],
  'Selected AI Employee pay-per-use rates (HighLevel, October 2026)'
)}

<h2>Which plan pays off? The break-even maths</h2>
<p>For most businesses, <strong>Voice AI minutes decide the plan</strong>. Chat replies are cheap on pay-per-use, while voice minutes add up.</p>
${table(
  ['Voice setup (pay-per-use)', 'Cost per minute', 'Minutes where Unlimited ($97) becomes cheaper'],
  [
    ['Engine + OpenAI or Cartesia voice', '$0.06', '~1,600/month'],
    ['Engine + ElevenLabs V2.5', '$0.08', '~1,200/month'],
    ['Engine + ElevenLabs V3', '$0.215', '~450/month'],
  ],
  'Voice AI break-even against the Unlimited plan (excludes phone charges, which apply on every plan)'
)}
<p><strong>Chat is a different story.</strong> As a rough guide, a Conversation AI reply that sends about 3,000 tokens of prompt, knowledge and history and returns 150 tokens costs around $0.001 on GPT-5 Mini, or about $0.008 on Claude Sonnet 5.5. That puts 1,000 replies at roughly $1 to $8 a month. These are our assumptions, not HighLevel’s, and long prompts or big knowledge bases cost more. Even so, chat volume alone rarely justifies a monthly plan.</p>
<h3>How we’d choose</h3>
<ul>
  <li><strong>Mostly chat, light voice (under ~500 minutes):</strong> pay-per-use usually wins. Set spend alerts.</li>
  <li><strong>Busy phone line or premium voices:</strong> Unlimited is predictable and removes the risk of the AI pausing mid-month.</li>
  <li><strong>Agency reselling AI:</strong> you need the $497 plan to rebill AI usage. Starter ($20) then covers the assistants and Content AI cheaply, with chat and voice rebilled at cost plus your markup.</li>
  <li><strong>Growth ($50):</strong> makes sense mainly if your team uses Ask AI, AI Studio and Managed Agents heavily, because the included 100 minutes and 1,000 replies are worth only a few dollars at pay-per-use rates.</li>
</ul>

<h2>Our review: is the AI Employee worth it?</h2>
<p><strong>Where it’s strong:</strong> it lives inside the CRM. The AI sees the contact, the pipeline and the calendar, books straight into GoHighLevel calendars and triggers your existing workflows, with no extra integrations to maintain. For a service business already on GoHighLevel, that’s hard to beat.</p>
<p><strong>Where it falls short:</strong> complex call flows, deep integrations with outside systems and fine control over latency and voice behaviour are easier on dedicated voice platforms such as ${link('/blog/vapi-vs-retell-ai/', 'Vapi or Retell AI')}. Billing is also genuinely complicated once several sub-accounts, models and voices are involved.</p>
${table(
  ['Pros', 'Cons'],
  [
    ['Native access to contacts, pipelines, calendars and workflows', 'Pricing is per sub-account and changes often'],
    ['Flat Unlimited plan makes heavy voice use predictable', 'Usage pauses at the allowance unless Extra Usage is on'],
    ['Wide model and voice choice, including Claude, GPT and ElevenLabs', 'Advanced call logic is more limited than dedicated voice platforms'],
    ['Agencies on the $497 plan can rebill AI with a markup', 'Phone charges and flow agents are always extra'],
  ],
  'GoHighLevel AI Employee pros and cons'
)}

<h2>How to set it up well</h2>
<ol>
  <li><strong>Write the knowledge base first:</strong> services, prices, hours, service area, policies, and what the AI must never say.</li>
  <li><strong>Start Conversation AI in suggestive mode</strong> so your team approves replies for a week or two. Our ${link('/blog/gohighlevel-conversation-ai-setup/', 'Conversation AI setup walkthrough')} covers this step by step.</li>
  <li><strong>Turn on Voice AI for after-hours calls first</strong>, then daytime overflow once you trust it.</li>
  <li><strong>Define escalation:</strong> which topics and keywords transfer to a person, and who gets notified.</li>
  <li><strong>Connect workflows</strong> for booking confirmations, reminders and ${link('/blog/automate-lead-follow-up-gohighlevel/', 'lead follow-up')}.</li>
  <li><strong>Watch usage weekly</strong> for the first month, then pick the plan your real numbers support.</li>
</ol>
<p>Want it configured properly the first time? Our ${link('/services/gohighlevel-ai/', 'GoHighLevel AI setup service')} handles the knowledge base, voice agent, workflows and billing settings for you.</p>
`,
  faqs: [
    { q: 'How much does the GoHighLevel AI Employee cost?', a: 'As of October 2026, HighLevel lists three AI Employee plans per sub-account: Starter at $20/month (only for agencies on the $497 plan), Growth at $50/month and Unlimited at $97/month. You can also skip a plan and pay per use. Phone charges are billed separately on every plan.' },
    { q: 'Is GoHighLevel AI Employee Unlimited really unlimited?', a: 'It includes unlimited Conversation AI, Voice AI, Reviews AI, Content AI and assistants, subject to HighLevel’s fair use terms. Phone charges, Workflow AI actions and Agent Studio flow agents are still billed separately.' },
    { q: 'How much does GoHighLevel Voice AI cost per minute?', a: 'On pay-per-use, the Voice AI engine is $0.045 per minute plus text-to-speech, which is $0.015 per minute for OpenAI or Cartesia voices and more for ElevenLabs. Phone call charges are added on top.' },
    { q: 'What happens when I run out of AI Employee allowance?', a: 'By default, usage pauses when a plan’s included allowance is reached. To keep the AI running, turn on Extra Usage in AI Suite, and the overage is billed at pay-per-use rates.' },
    { q: 'Is the GoHighLevel AI Employee worth it?', a: 'For businesses already running on GoHighLevel, usually yes, because the AI works directly with contacts, calendars and workflows. Choose pay-per-use for chat-heavy, low-call accounts, and Unlimited when call volume is high or you use premium voices.' },
  ],
};
