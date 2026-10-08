import { callout, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'a2p-10dlc-registration-guide',
  title: 'A2P 10DLC Registration: How to Get Your Business Texts Approved (GoHighLevel & Twilio)',
  metaTitle: 'A2P 10DLC Registration Guide for GoHighLevel | Voxil AI',
  description: 'How A2P 10DLC registration works for business texting in the US: brand and campaign registration, opt-in requirements, sample messages, common rejection reasons and how to fix them.',
  category: 'GoHighLevel',
  tags: ['Lead Generation'],
  author: 'ahmad-ali',
  date: '2026-10-08',
  keywords: ['A2P 10DLC registration', '10DLC GoHighLevel', 'A2P campaign rejected', 'Twilio A2P 10DLC', 'business texting registration'],
  excerpt: 'If your business texts in the US from a local number, A2P 10DLC registration isn’t optional. Here’s how it works, what carriers look for and how to avoid the rejections that delay launches by weeks.',
  takeaways: [
    'US business texting from standard local numbers requires brand and campaign registration (A2P 10DLC).',
    'Carriers now block unregistered traffic, so register before you launch any SMS automation.',
    'Most rejections come from unclear opt-in descriptions, missing privacy policy language or weak sample messages.',
    'Your legal business name, EIN and address must match official records exactly.',
    'Approval can take days to a few weeks, so start on day one of any GoHighLevel setup.',
  ],
  services: ['ghl-setup', 'email-sms-marketing', 'gohighlevel-automation', 'ghl-support'],
  related: ['ghl-crm-setup-small-business', 'tcpa-ai-calling-compliance', 'gohighlevel-missed-call-text-back'],
  body: `
<p>A2P 10DLC stands for <strong>application-to-person messaging over 10-digit long codes</strong>, the standard local phone numbers most businesses text from. US carriers created the system to reduce spam: every business sending texts from a local number must register its brand and each type of messaging it sends. Unregistered traffic is now blocked, so registration is the first step of any texting setup, including missed-call text-back and lead follow-up in GoHighLevel.</p>

<h2>How the registration works</h2>
${table(
  ['Step', 'What you provide', 'Why it matters'],
  [
    ['1. Brand registration', 'Legal business name, EIN or tax ID, business type, address, website, contact', 'Verifies who is sending the messages'],
    ['2. Brand vetting (optional or automatic)', 'Verification against official records', 'Affects your trust level and sending limits'],
    ['3. Campaign registration', 'Use case, description, sample messages, opt-in flow, opt-out and help keywords', 'Describes what you send and how people agreed to receive it'],
    ['4. Number assignment', 'The numbers that will send for that campaign', 'Links your numbers to the approved campaign'],
  ],
  'A2P 10DLC registration steps'
)}
<p>Registration goes through your messaging provider, such as Twilio, or LC Phone inside GoHighLevel, which submits your details to The Campaign Registry. Providers charge one-time registration and vetting fees plus a monthly campaign fee; check your provider’s current pricing.</p>

<h2>Before you start: get these right</h2>
<ul>
  <li><strong>Legal name and EIN</strong> exactly as on IRS records, including “LLC” or “Inc.” Mismatches are the most common brand rejection.</li>
  <li><strong>A live website</strong> on your business domain that clearly describes what you do.</li>
  <li><strong>A privacy policy</strong> that states mobile numbers and SMS consent won’t be shared with third parties for marketing.</li>
  <li><strong>Terms</strong> or an SMS terms section describing message types, frequency, “message and data rates may apply,” and STOP and HELP instructions.</li>
  <li><strong>A real opt-in point</strong>, such as a web form with an unchecked consent checkbox or clear consent text next to the phone field.</li>
</ul>

<h2>Writing a campaign that gets approved</h2>
<h3>Campaign description</h3>
<p>Explain who you message, why and how often. Weak: “Marketing messages.” Strong: “BrightSpark Plumbing sends appointment confirmations, reminders and follow-ups to customers who request service on our website or by phone, and occasional seasonal offers to customers who opted in. Frequency varies, typically 2 to 6 messages per month.”</p>
<h3>Opt-in description</h3>
<p>Describe exactly how people consent, step by step, and where reviewers can see it. For example: “Customers enter their phone number on our booking form at brightspark.example/book and check an unchecked box stating: ‘I agree to receive appointment and marketing texts from BrightSpark Plumbing. Msg and data rates may apply. Reply STOP to opt out.’” Many rejections come from vague answers here.</p>
<h3>Sample messages</h3>
<p>Provide realistic examples that include your business name and opt-out language where appropriate, and match your stated use case. If you mention links or promotions in samples, make sure your use case covers them.</p>

${callout('Rule of thumb', 'Everything should match: the use case, the description, the sample messages, the opt-in wording on your site and the messages you actually send. Reviewers look for consistency.', '#0284c7')}

<h2>Common rejection reasons and fixes</h2>
${table(
  ['Rejection reason', 'Fix'],
  [
    ['Brand details don’t match records', 'Use your exact legal name, EIN and registered address'],
    ['Opt-in process unclear or unverifiable', 'Describe the exact steps and link to the live form or screenshot'],
    ['Privacy policy missing SMS language', 'Add a clause that mobile data and SMS consent aren’t shared for marketing'],
    ['Website not accessible or unrelated', 'Make sure the site is live and clearly matches the business'],
    ['Sample messages lack brand name or opt-out', 'Add your name and “Reply STOP to opt out” where appropriate'],
    ['Use case doesn’t match content', 'Pick the use case that matches what you send, or a mixed/marketing use case'],
  ],
  'Common A2P 10DLC rejection reasons'
)}

<h2>Registering inside GoHighLevel</h2>
<p>In GoHighLevel, LC Phone users complete registration through the A2P wizard in the phone system settings of each sub-account. Agencies should register every client sub-account separately with that client’s own business details; one agency registration doesn’t cover clients. If you use your own Twilio account with GoHighLevel, register in Twilio’s console instead.</p>

<h2>After approval</h2>
<ul>
  <li>Send only the message types described in your campaign.</li>
  <li>Honor STOP immediately and respond to HELP with contact details.</li>
  <li>Watch delivery reports; sudden filtering can mean content or volume issues.</li>
  <li>Update the registration if your use case changes, for example if you add marketing to a transactional campaign.</li>
</ul>
<p>Use our ${link('/resources/sms-character-counter/', 'SMS character counter')} to keep messages within one segment, and our ${link('/resources/follow-up-templates/', 'follow-up templates')} for compliant message examples. For consent rules beyond carrier requirements, read our ${link('/blog/tcpa-ai-calling-compliance/', 'TCPA guide')}.</p>
`,
  faqs: [
    { q: 'Do I need A2P 10DLC registration?', a: 'Yes, if you send business text messages in the US from standard 10-digit local numbers. Toll-free numbers have a separate verification process, and short codes have their own application.' },
    { q: 'How long does A2P 10DLC approval take?', a: 'Often a few days, sometimes a few weeks, especially if a campaign is rejected and resubmitted. Start registration as early as possible.' },
    { q: 'Why was my A2P campaign rejected?', a: 'The most common reasons are an unclear opt-in description, a privacy policy without SMS language, brand details that don’t match official records, or sample messages that don’t match the use case.' },
    { q: 'Does each GoHighLevel sub-account need its own registration?', a: 'Yes. Each business that sends texts must register its own brand and campaign with its own legal details.' },
  ],
};
