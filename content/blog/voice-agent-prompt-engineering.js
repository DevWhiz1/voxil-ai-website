import { callout, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'voice-agent-prompt-engineering',
  title: 'Voice Agent Prompt Engineering: How to Write Prompts for AI Phone Agents',
  metaTitle: 'Voice Agent Prompt Engineering: A Practical Guide | Voxil AI',
  description: 'How to write system prompts for AI voice agents: structure, tone for speech, conversation flow, tool instructions, guardrails, hand-offs and testing, with a template and common mistakes.',
  category: 'AI Calling Bots',
  author: 'abdul-moeez',
  date: '2026-10-08',
  keywords: ['voice agent prompt', 'AI phone agent prompt', 'Vapi prompt', 'Retell AI prompt', 'system prompt for voice AI'],
  excerpt: 'Prompts for phone agents are different from chatbot prompts. Callers can’t scroll back, interrupt mid-sentence and expect short answers. Here’s how to write prompts that work out loud.',
  takeaways: [
    'Structure every prompt the same way: role, goal, tone, knowledge, flow, tools, hand-offs and rules.',
    'Write for the ear: one or two short sentences per turn, no lists, no URLs, no long numbers read in one go.',
    'Tell the agent exactly when and how to use each tool, and what to do when a tool fails.',
    'Guardrails and hand-off rules are as important as the happy path.',
    'Test with realistic, messy calls and change one thing at a time.',
  ],
  services: ['ai-voice-agents', 'vapi-ai-integration', 'retell-ai-setup', 'ai-receptionist'],
  related: ['how-to-build-an-ai-voice-agent', 'vapi-ai-review', 'retell-ai-review'],
  body: `
<p>The system prompt is the instruction manual for your AI voice agent. It decides how the agent greets callers, what it asks, what it knows, when it books and when it hands off. Most voice agents that sound robotic, ramble or make things up have a prompt problem, not a technology problem. This guide covers how to write prompts that work on real phone calls.</p>

<h2>Why voice prompts are different from chat prompts</h2>
${table(
  ['', 'Chat', 'Voice'],
  [
    ['Reply length', 'A paragraph is fine', 'One or two short sentences'],
    ['Lists and links', 'Easy to read', 'Impossible to follow by ear'],
    ['Interruptions', 'Rare', 'Constant; the agent must stop and listen'],
    ['Numbers and spellings', 'Shown exactly', 'Must be read slowly and confirmed'],
    ['Silence', 'Normal', 'Feels broken after a second or two'],
  ],
  'Chat vs voice prompt differences'
)}
<p>Everything in a voice prompt should push the agent toward short, conversational turns that end with a clear question or confirmation.</p>

<h2>The structure we use</h2>
<p>We write every production prompt in the same eight sections. Consistent structure makes prompts easier to debug and update.</p>
<ol>
  <li><strong>Role:</strong> who the agent is and which business it represents.</li>
  <li><strong>Goal:</strong> the single outcome it works toward on every call.</li>
  <li><strong>Tone and speech style:</strong> personality and rules for speaking.</li>
  <li><strong>Knowledge:</strong> the facts it may use, and what to do when it doesn’t know.</li>
  <li><strong>Conversation flow:</strong> the steps of a typical call.</li>
  <li><strong>Tools:</strong> when and how to use each one.</li>
  <li><strong>Hand-off rules:</strong> when to transfer or take a message.</li>
  <li><strong>Guardrails:</strong> what it must never do.</li>
</ol>
<p>Our free ${link('/resources/ai-agent-prompt-generator/', 'AI agent prompt generator')} produces a draft in exactly this structure from a few details about your business.</p>

<h2>1. Role and goal</h2>
<p>Be specific. “You are a helpful assistant” gives the model nothing to work with. Compare:</p>
${callout('Better', '“You are Ava, the phone receptionist for BrightSpark Plumbing in Austin, Texas. Your goal is to book the caller into the right service appointment, or take an urgent message if it is an emergency.”', '#ff7a3d')}

<h2>2. Tone and speech style</h2>
<p>Describe the personality, then add concrete speaking rules:</p>
<ul>
  <li>Speak in short sentences; never more than two before pausing.</li>
  <li>Ask one question at a time.</li>
  <li>Never read lists of more than two options; offer two times, not five.</li>
  <li>Don’t read URLs or email addresses aloud; offer to text them instead.</li>
  <li>Read phone numbers in groups and confirm them back.</li>
  <li>Use the caller’s name once you know it, but not in every sentence.</li>
</ul>

<h2>3. Knowledge and honesty</h2>
<p>List the facts the agent may use, such as services, hours, service area and price ranges, or point it to a knowledge base. Then add the most important rule in any business prompt: <strong>if the answer isn’t in your knowledge, say you don’t know and offer to take a message.</strong> Agents that guess prices or policies create real problems.</p>

<h2>4. Conversation flow</h2>
<p>Write the typical call as numbered steps, but tell the agent to adapt: skip questions already answered, and follow the caller if they jump ahead. For example: greet, understand the need, collect address and urgency, offer two available times, confirm details, explain what happens next.</p>

<h2>5. Tool instructions</h2>
<p>Tools are where agents most often go wrong. For each tool, state:</p>
<ul>
  <li><strong>When to call it:</strong> “Call check_availability only after you know the service type and the caller’s preferred day.”</li>
  <li><strong>What to say while waiting:</strong> “Say ‘Let me check that for you’ before calling the tool.”</li>
  <li><strong>How to use the result:</strong> “Offer the two earliest times returned.”</li>
  <li><strong>What to do on failure:</strong> “If the tool returns an error or no slots, apologize and offer to take a message for a callback.”</li>
</ul>

<h2>6. Hand-off rules</h2>
<p>Be explicit about when a human takes over: emergencies, safety issues, complaints, legal or medical questions, pricing exceptions and any direct request for a person. Specify the transfer number and what to say before transferring, and what to do if nobody answers.</p>

<h2>7. Guardrails</h2>
<ul>
  <li>Answer honestly if asked whether you’re an AI.</li>
  <li>Never give medical, legal or financial advice.</li>
  <li>Never collect card numbers or sensitive data without a secure process.</li>
  <li>Never promise discounts, refunds or exceptions.</li>
  <li>Stay on topic; politely redirect unrelated requests.</li>
</ul>

<h2>Common prompt mistakes</h2>
${table(
  ['Mistake', 'What happens', 'Fix'],
  [
    ['Prompt is a wall of text', 'The agent ignores important rules', 'Use clear sections and short bullet rules'],
    ['No “I don’t know” rule', 'The agent invents prices or policies', 'Explicitly require it to admit gaps'],
    ['Lists read aloud', 'Callers get lost', 'Limit options to two per turn'],
    ['Vague tool instructions', 'Tools are called too early or not at all', 'Define timing, inputs and failure handling'],
    ['Long greeting', 'Callers interrupt or hang up', 'Keep it under about ten words'],
    ['Changing many things at once', 'Impossible to know what helped', 'Change one section per test round'],
  ],
  'Common voice agent prompt mistakes'
)}

<h2>Testing your prompt</h2>
<p>Run scripted calls covering the happy path, interruptions, mumbled answers, off-topic questions, angry callers and tool failures. Score each call against your goal and note exactly where it went wrong. Change one thing, re-run the same calls and compare. For more on the full build process, see ${link('/blog/how-to-build-an-ai-voice-agent/', 'how to build an AI voice agent')}, and for ready-made examples, our ${link('/resources/ai-voice-agent-scripts/', 'voice agent script templates')}.</p>

<h2>Platform notes</h2>
<p>The principles apply on every platform, but details differ. On ${link('/blog/retell-ai-review/', 'Retell AI')}, conversation-flow agents let you split long prompts into nodes, which helps with predictable calls. On ${link('/blog/vapi-ai-review/', 'Vapi')}, tools and multi-assistant setups let you keep each prompt focused on one job. In GoHighLevel, keep prompts concise and lean on your knowledge base for facts.</p>
`,
  faqs: [
    { q: 'How long should a voice agent prompt be?', a: 'Long enough to cover role, flow, tools, hand-offs and rules, usually a few hundred to a thousand words. Move detailed facts into a knowledge base rather than the prompt.' },
    { q: 'Should I write the prompt in first or second person?', a: 'Second person (“You are…”) is the most common and works well. Consistency matters more than the choice.' },
    { q: 'How do I stop my voice agent from talking too much?', a: 'Add explicit rules: maximum two sentences per turn, one question at a time, no lists or URLs read aloud, and end each turn with a question or confirmation.' },
    { q: 'Can I use the same prompt for chat and voice?', a: 'Use the same knowledge and rules, but adapt the speech-style section. Voice needs shorter turns and different handling of numbers, links and lists.' },
  ],
};
