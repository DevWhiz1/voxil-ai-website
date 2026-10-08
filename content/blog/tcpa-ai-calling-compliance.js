import { callout, cite, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'tcpa-ai-calling-compliance',
  title: 'AI Calling and the TCPA: A Practical Compliance Guide for US Businesses (2026)',
  metaTitle: 'AI Calling & TCPA Compliance Guide (2026) | Voxil AI',
  description: 'What US businesses need to know before using AI voice agents and automated texts: TCPA consent, the FCC’s AI voice ruling, Do Not Call rules, calling hours, revocation and state laws.',
  category: 'Lead Generation',
  tags: ['AI Calling Bots'],
  author: 'abdul-moeez',
  date: '2026-10-08',
  keywords: ['TCPA AI calls', 'AI voice TCPA', 'FCC AI voice ruling', 'AI calling compliance', 'TCPA consent for texts'],
  excerpt: 'AI calling bots can transform lead response, but in the US they sit squarely inside the TCPA. Here’s a plain-English overview of the rules, and the practical defaults we build into every system.',
  takeaways: [
    'The FCC ruled in 2024 that AI-generated voices are “artificial” voices under the TCPA.',
    'Automated or AI-voice telemarketing calls to consumers generally need prior express written consent.',
    'Text messages are treated as calls under the TCPA, so the same consent rules apply.',
    'Do Not Call rules, calling hours and opt-out handling still apply to AI outreach.',
    'Several states, including Florida and Oklahoma, add their own rules on top of federal law.',
  ],
  services: ['ai-calling-bots', 'ai-lead-reactivation', 'speed-to-lead-automation', 'ai-follow-up-system'],
  related: ['ai-voice-calling-lead-generation', 'a2p-10dlc-registration-guide', 'database-reactivation-campaign-guide'],
  body: `
${callout('Important', 'This article is general information to help you ask the right questions, not legal advice. TCPA litigation is active and rules change. Have a qualified attorney review your consent language and outreach before launching automated calling or texting.', '#ff6b35')}

<p>AI voice agents and automated texts are powerful tools for responding to leads and re-engaging customers. In the United States, they are also regulated by the Telephone Consumer Protection Act (TCPA) and the FCC’s rules under it. Violations can be expensive: the TCPA allows statutory damages of $500 per violation, up to $1,500 if willful, and class actions are common. Here is how the main rules apply to AI calling.</p>

<h2>AI voices are “artificial” voices</h2>
<p>In February 2024, the FCC issued a declaratory ruling confirming that calls using AI-generated voices fall under the TCPA’s restrictions on “artificial or prerecorded” voices ${cite('fcc-ai-voice')}. In practice, an outbound call where an AI agent speaks is treated like a prerecorded-voice call for consent purposes, no matter how natural it sounds.</p>

<h2>Consent: the core requirement</h2>
${table(
  ['Type of call or text', 'Consent generally required'],
  [
    ['Informational AI or prerecorded call to a mobile number (appointment reminder, order update)', 'Prior express consent'],
    ['Telemarketing AI or prerecorded call to a mobile or residential number', 'Prior express written consent'],
    ['Marketing texts sent with automated systems', 'Prior express written consent'],
    ['Calls the consumer initiates (inbound calls to your AI receptionist)', 'TCPA outbound consent rules don’t apply; recording and disclosure rules still may'],
  ],
  'Consent requirements under the TCPA, simplified'
)}
<p><strong>Prior express written consent</strong> generally means a signed agreement, including electronic signatures such as a checked box on a web form, that clearly authorizes the business to deliver marketing calls or texts using automated technology or an artificial voice to the number provided, and states that consent isn’t a condition of purchase.</p>
<p>The FCC adopted a “one-to-one consent” rule in late 2023 that would have required consent to be specific to a single seller, but a federal appeals court vacated it in January 2025 before it took effect. Clear, seller-specific consent language is still the safest practice.</p>

<h2>Texts count as calls</h2>
<p>Under the TCPA, text messages are treated as calls. Automated marketing texts need prior express written consent just like AI voice calls, and carriers impose their own requirements through A2P 10DLC registration. See our ${link('/blog/a2p-10dlc-registration-guide/', 'A2P 10DLC registration guide')}.</p>

<h2>Do Not Call rules</h2>
<ul>
  <li><strong>National Do Not Call Registry:</strong> telemarketing calls to registered numbers are restricted unless an exemption applies, such as an established business relationship or prior written permission.</li>
  <li><strong>Internal do-not-call list:</strong> businesses must maintain their own list and honor requests not to be called.</li>
  <li><strong>State lists:</strong> some states maintain separate do-not-call lists.</li>
</ul>
<p>Note that an established business relationship can be an exemption from Do Not Call rules, but it does not replace the consent required for artificial-voice telemarketing calls.</p>

<h2>Calling hours and identification</h2>
<p>Telemarketing calls are restricted to between 8am and 9pm in the called party’s local time. Callers must identify the business and provide a way to contact it. For AI agents, that means building time-zone-aware calling windows and an identification line into every outbound script.</p>

<h2>Revoking consent</h2>
<p>Consumers can revoke consent, and FCC rules adopted in 2024 make clear they can do so by any reasonable means, such as replying STOP, saying “don’t call me again” to a voice agent, or emailing. Requests must be honored promptly, within a short, defined period. Your AI agent should recognize opt-out requests in natural language and your system should apply them across every channel.</p>

<h2>State “mini-TCPA” laws</h2>
<p>Several states have their own telemarketing laws that go further than federal rules. Florida’s Telephone Solicitation Act and Oklahoma’s Telephone Solicitation Act are well-known examples, and other states have added rules on calling times, call frequency or consent. If you call consumers nationally, your rules engine needs to account for the strictest applicable state law.</p>

<h2>Practical defaults we build into AI calling systems</h2>
<ol>
  <li><strong>Consent capture:</strong> clear, seller-specific consent language on every form, with timestamp, IP address and form version stored in the CRM.</li>
  <li><strong>Consent checks before dialing:</strong> outbound calls only go to contacts with valid consent for that type of call.</li>
  <li><strong>Do Not Call screening:</strong> national, state and internal lists checked before campaigns.</li>
  <li><strong>Calling windows:</strong> calls scheduled by the contact’s local time zone, within legal hours and sensible business hours.</li>
  <li><strong>Identification and disclosure:</strong> the agent identifies the business, discloses recording and answers honestly about being an AI.</li>
  <li><strong>Natural-language opt-out:</strong> any request to stop is honored immediately and synced across calls, texts and email.</li>
  <li><strong>Audit trail:</strong> recordings, transcripts and consent records retained according to your policy.</li>
</ol>

<h2>Inbound AI receptionists are lower risk</h2>
<p>When a customer calls you and an AI receptionist answers, outbound consent rules don’t apply in the same way. You still need to follow call-recording consent laws, which vary by state and in some cases require every party’s consent. Disclosing recording at the start of the call is the simplest approach. Learn more in ${link('/blog/what-is-an-ai-receptionist/', 'what an AI receptionist is')}.</p>

<h2>Outside the US</h2>
<p>Other countries have their own rules: PECR and the TPS in the UK, GDPR and national telemarketing laws in the EU, CASL and the National DNCL in Canada, and the Spam Act and Do Not Call Register in Australia. Our location pages summarize the rules for each market we serve.</p>
`,
  faqs: [
    { q: 'Are AI voice calls legal in the US?', a: 'Yes, when they follow the TCPA and related rules. The FCC treats AI voices as artificial voices, so outbound AI calls generally require prior express consent, and telemarketing calls require prior express written consent.' },
    { q: 'Do I need consent to text my leads?', a: 'For automated marketing texts, generally yes: prior express written consent. Informational texts have lighter requirements, but you still need consent, sender identification and opt-out handling.' },
    { q: 'Does the TCPA apply to inbound calls answered by AI?', a: 'The outbound consent rules don’t apply to calls a customer makes to you. Call-recording consent laws and disclosure obligations may still apply.' },
    { q: 'What are the TCPA penalties?', a: 'Statutory damages of $500 per violation, up to $1,500 per willful violation, which can add up quickly across many calls or texts.' },
  ],
};
