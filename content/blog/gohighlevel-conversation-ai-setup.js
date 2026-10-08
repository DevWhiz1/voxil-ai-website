import { callout, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'gohighlevel-conversation-ai-setup',
  title: 'How to Set Up GoHighLevel Conversation AI: A Step-by-Step Walkthrough',
  metaTitle: 'GoHighLevel Conversation AI Setup Guide | Voxil AI',
  description: 'Step-by-step GoHighLevel Conversation AI setup: choosing channels and mode, writing bot instructions, building the knowledge base, appointment booking, hand-off rules, testing and launch.',
  category: 'GoHighLevel',
  tags: ['Chatbots & Automation'],
  author: 'ahmad-ali',
  date: '2026-10-09',
  keywords: ['GoHighLevel Conversation AI', 'GHL Conversation AI setup', 'GoHighLevel AI bot', 'GHL AI chatbot', 'Conversation AI booking'],
  excerpt: 'Conversation AI can answer SMS, chat and social messages and book appointments inside GoHighLevel. Here’s how to set it up so it helps customers instead of confusing them.',
  takeaways: [
    'Start in suggestive mode, where the AI drafts replies for staff, before switching to auto-pilot.',
    'Write clear instructions: who the bot is, its goal, tone and when to hand off.',
    'A focused knowledge base with your top questions beats dumping your whole website in.',
    'Connect a calendar so the bot can book, and set hand-off rules for anything sensitive.',
    'Test on internal contacts and review conversations weekly after launch.',
  ],
  services: ['gohighlevel-ai', 'ai-chatbots', 'ghl-setup', 'gohighlevel-automation'],
  related: ['gohighlevel-ai-guide', 'closebot-review', 'website-ai-chatbot-guide'],
  body: `
<p>GoHighLevel’s Conversation AI lets you add an AI assistant to the channels in your conversations inbox, such as SMS, web chat, Facebook, Instagram and WhatsApp. It can answer questions from a knowledge base, collect details and book appointments in your GoHighLevel calendars. Set up well, it responds instantly at any hour. Set up poorly, it frustrates leads. This walkthrough covers the setup we use in client accounts. HighLevel updates its AI features often, so menu names may differ slightly in your account.</p>

<h2>Before you start</h2>
<ul>
  <li><strong>Check billing:</strong> Conversation AI is billed on usage or through an AI add-on plan per sub-account; confirm current pricing in your account.</li>
  <li><strong>Check channels:</strong> SMS needs A2P 10DLC approval in the US (see our ${link('/blog/a2p-10dlc-registration-guide/', 'registration guide')}), and social and WhatsApp channels must be connected.</li>
  <li><strong>Gather knowledge:</strong> your services, prices or price ranges, service area, hours, policies and the twenty questions customers ask most.</li>
</ul>

<h2>Step 1: Choose the mode</h2>
${table(
  ['Mode', 'What it does', 'When to use it'],
  [
    ['Off', 'No AI replies', 'Channels you want humans to handle'],
    ['Suggestive', 'AI drafts replies; staff review and send', 'First weeks, or sensitive businesses'],
    ['Auto-pilot', 'AI replies automatically within your rules', 'Once drafts are consistently good'],
  ],
  'GoHighLevel Conversation AI modes'
)}
<p>Start in suggestive mode. Your team sees what the AI would say and edits it, which shows you exactly where instructions and knowledge need work, without customers seeing the mistakes.</p>

<h2>Step 2: Write the bot instructions</h2>
<p>Define the bot’s name, role, goal and tone. Keep instructions specific:</p>
${callout('Example instructions', '“You are Mia, the assistant for Riverside Family Clinic. Your goal is to answer questions about our services and help patients book appointments. Be warm and brief, one or two sentences per message. Only answer from the knowledge base. Never give medical advice. If someone describes an emergency, tell them to call 911 or go to the nearest emergency room.”', '#0284c7')}
<p>Our ${link('/resources/ai-agent-prompt-generator/', 'AI agent prompt generator')} creates a structured draft you can adapt.</p>

<h2>Step 3: Build the knowledge base</h2>
<p>Add your FAQs, key web pages and documents. Quality matters more than volume:</p>
<ul>
  <li>Write your top questions and answers in plain language.</li>
  <li>Include prices or ranges you’re comfortable sharing, and what affects price.</li>
  <li>Remove outdated pages and contradictory information.</li>
  <li>Add a clear answer for “Can I speak to a person?”</li>
</ul>

<h2>Step 4: Enable appointment booking</h2>
<p>Connect the calendar the bot should book into and define which appointment types it may offer. Make sure calendar availability, buffers and minimum notice are correct, because the bot will offer whatever the calendar allows. After booking, your normal confirmation and reminder workflows should take over.</p>

<h2>Step 5: Set hand-off and stop rules</h2>
<ul>
  <li>Hand off when a contact asks for a person, is upset or raises a complaint.</li>
  <li>Hand off on topics you define, such as refunds, medical questions or custom quotes.</li>
  <li>Stop AI replies when a team member joins the conversation.</li>
  <li>Use workflows to notify the assigned user when a hand-off happens.</li>
</ul>

<h2>Step 6: Connect it to your workflows</h2>
<p>Conversation AI works best inside your automation. For example, a new form lead receives an instant SMS from a workflow, the reply is handled by the AI, a booking moves the opportunity to “Booked,” and a hand-off creates a task. See our ${link('/blog/gohighlevel-workflow-examples/', 'GoHighLevel workflow examples')} for the surrounding workflows.</p>

<h2>Step 7: Test before going live</h2>
<p>Create test contacts and message the bot as different customer types: someone ready to book, someone price shopping, someone confused, someone upset and someone asking something off-topic. Check every answer against your knowledge base, confirm bookings land correctly and confirm hand-offs notify the right person.</p>

<h2>Step 8: Launch and review</h2>
<p>Switch one channel to auto-pilot first, often web chat or after-hours SMS. Review conversations weekly: add missing answers, tighten instructions and adjust hand-off rules. Move other channels to auto-pilot once results are consistently good.</p>

<h2>Conversation AI vs alternatives</h2>
<p>Conversation AI is the simplest choice when you live in GoHighLevel and need FAQs and booking. For structured sales qualification by SMS, some teams prefer ${link('/blog/closebot-review/', 'Closebot')}. For complex integrations, such as order lookups in other systems, or one AI across voice and chat, a custom agent is usually better. Our ${link('/blog/gohighlevel-ai-guide/', 'GoHighLevel AI guide')} compares the options.</p>
`,
  faqs: [
    { q: 'What is GoHighLevel Conversation AI?', a: 'It’s GoHighLevel’s built-in AI for replying to messages across channels such as SMS, web chat, Facebook, Instagram and WhatsApp, using your knowledge base and optionally booking appointments.' },
    { q: 'Should I use suggestive or auto-pilot mode?', a: 'Start with suggestive mode so staff review AI drafts, then switch channels to auto-pilot once the drafts are consistently accurate.' },
    { q: 'Can Conversation AI book appointments?', a: 'Yes. Connect a GoHighLevel calendar and the bot can offer available times and book appointments directly.' },
    { q: 'How do I stop the AI from replying when my team takes over?', a: 'Configure hand-off rules and stop conditions so AI replies pause when a team member responds or a hand-off is triggered.' },
  ],
};
