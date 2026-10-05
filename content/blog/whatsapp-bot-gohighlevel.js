import { callout, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'whatsapp-bot-gohighlevel',
  title: 'How to Set Up a WhatsApp Business Bot with GoHighLevel (2026 Guide)',
  metaTitle: 'WhatsApp Business Bot with GoHighLevel (2026) | Voxil AI',
  description: 'Step-by-step guide to a WhatsApp bot in GoHighLevel: connecting the WhatsApp Business API, message templates, the 24-hour window, AI replies, booking flows and CRM automation.',
  category: 'Chatbots & Automation',
  author: 'abdul-moeez',
  date: '2026-10-06',
  keywords: ['WhatsApp bot GoHighLevel', 'GoHighLevel WhatsApp', 'WhatsApp Business API', 'WhatsApp automation', 'WhatsApp chatbot for business'],
  excerpt: 'WhatsApp is where customers in the UK, Europe, the Middle East and much of the world prefer to talk. Here’s how to run a WhatsApp bot from GoHighLevel, from setup to AI replies.',
  takeaways: [
    'GoHighLevel connects to the official WhatsApp Business API through a paid add-on, plus Meta’s messaging fees.',
    'You can reply freely within 24 hours of a customer’s message; outside that window you need approved templates.',
    'Use WhatsApp for conversations customers start: ads, website buttons and QR codes.',
    'AI replies answer questions and book appointments inside the same thread.',
    'Opt-in, clear identity and easy opt-out keep your number in good standing.',
  ],
  services: ['whatsapp-automation', 'ai-chatbots', 'gohighlevel-ai', 'gohighlevel-automation'],
  related: ['instagram-dm-automation-gohighlevel', 'closebot-review', 'ai-agents-vs-chatbots'],
  body: `
<p>In many markets, WhatsApp isn’t just another channel; it’s how customers expect to reach a business. Running WhatsApp from GoHighLevel puts those conversations in the same inbox, pipeline and automation as your SMS, email and calls. This guide covers setup, the rules Meta enforces and how to add AI.</p>

<h2>How WhatsApp works in GoHighLevel</h2>
<p>GoHighLevel connects to the official <strong>WhatsApp Business API</strong> (not the free WhatsApp Business app). Messages appear in the conversations inbox alongside other channels, and workflows can send WhatsApp messages or react to incoming ones. Costs include GoHighLevel’s WhatsApp add-on subscription per sub-account and Meta’s conversation-based or per-message fees, which vary by country and message category.</p>

<h2>Setup steps</h2>
<ol>
  <li><strong>Prepare a number</strong> that isn’t registered on a personal or WhatsApp Business app account, or migrate it first.</li>
  <li><strong>Verify your business</strong> in Meta Business Manager; verification raises messaging limits.</li>
  <li><strong>Enable the WhatsApp add-on</strong> in the GoHighLevel sub-account and follow the embedded signup to connect your number.</li>
  <li><strong>Set your display name and profile</strong> with logo, description, hours and website.</li>
  <li><strong>Create message templates</strong> for reminders, confirmations and follow-ups, and submit them for Meta approval.</li>
  <li><strong>Build workflows</strong> for new conversations, booking and follow-up, then test end to end.</li>
</ol>

<h2>The 24-hour rule</h2>
${table(
  ['Situation', 'What you can send'],
  [
    ['Customer messaged you in the last 24 hours', 'Any free-form reply, including AI responses, media and links'],
    ['More than 24 hours since their last message', 'Only a pre-approved template message'],
    ['Customer replies to your template', 'A new 24-hour window opens for free-form replies'],
  ],
  'WhatsApp Business API messaging windows'
)}
${callout('Design tip', 'Build your WhatsApp flows around conversations the customer starts: click-to-WhatsApp ads, a website button or a QR code in your shop. Templates are for reminders and re-engagement, not cold outreach.', '#2fc4b6')}

<h2>Flows worth building</h2>
<ul>
  <li><strong>Lead capture:</strong> a click-to-WhatsApp ad opens a chat; the bot asks two qualifying questions and creates an opportunity.</li>
  <li><strong>Booking:</strong> the bot offers available times from your GoHighLevel calendar and confirms in the thread.</li>
  <li><strong>Reminders:</strong> approved templates remind customers a day before and let them confirm or reschedule.</li>
  <li><strong>Order or job updates:</strong> status messages triggered from your CRM or job-management tool.</li>
  <li><strong>Hand-off:</strong> the bot passes complex questions to a team member, who replies in the same thread.</li>
</ul>

<h2>Adding AI replies</h2>
<p>GoHighLevel’s Conversation AI can reply on WhatsApp using your knowledge base and book appointments. For deeper integrations, such as checking order status or inventory, a custom AI agent connected through the API or Make.com handles more complex requests. Read ${link('/blog/gohighlevel-ai-guide/', 'our GoHighLevel AI guide')} for the trade-offs, or see a sample WhatsApp conversation in our ${link('/portfolio/', 'portfolio')}.</p>

<h2>Rules that protect your number</h2>
<ul>
  <li>Message only people who opted in to hear from you on WhatsApp.</li>
  <li>Identify your business clearly and make it easy to opt out.</li>
  <li>Keep templates useful; low-quality ratings reduce your messaging limits.</li>
  <li>Respond quickly; slow or unanswered chats hurt the experience and your quality rating.</li>
</ul>

<h2>WhatsApp and data protection</h2>
<p>If you serve the UK or EU, include WhatsApp in your privacy policy, collect consent where required and avoid sending sensitive data over chat. Healthcare businesses should be especially careful about what patient information is shared.</p>
<p>Want it built for you? Our ${link('/services/whatsapp-automation/', 'WhatsApp automation service')} covers setup, templates, AI replies and CRM integration.</p>
`,
  faqs: [
    { q: 'Does GoHighLevel support WhatsApp?', a: 'Yes. GoHighLevel connects to the official WhatsApp Business API through a paid add-on, so WhatsApp messages appear in the conversations inbox and can be used in workflows.' },
    { q: 'How much does WhatsApp in GoHighLevel cost?', a: 'You pay GoHighLevel’s WhatsApp add-on fee per sub-account plus Meta’s messaging fees, which vary by country and message type. Check both providers’ current pricing.' },
    { q: 'Can I use my existing WhatsApp number?', a: 'Usually yes, but a number registered on the WhatsApp app must be migrated or removed from the app before connecting it to the Business API.' },
    { q: 'Can a bot reply on WhatsApp automatically?', a: 'Yes. Within 24 hours of a customer’s last message, AI and workflow replies can be sent freely. After that, you need an approved template to restart the conversation.' },
  ],
};
