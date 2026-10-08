import { callout, cite, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'database-reactivation-campaign-guide',
  title: 'Database Reactivation: How to Turn Old Leads into Booked Appointments',
  metaTitle: 'Database Reactivation Campaign Guide (2026) | Voxil AI',
  description: 'How to run a database reactivation campaign: cleaning and segmenting your CRM, checking consent, writing offers that get replies, using AI to handle conversations and measuring results.',
  category: 'Lead Generation',
  tags: ['GoHighLevel'],
  author: 'abdul-moeez',
  date: '2026-10-08',
  keywords: ['database reactivation', 'reactivate old leads', 'lead reactivation campaign', 'dead lead revival', 'AI reactivation'],
  excerpt: 'Your CRM is full of people who once asked about your services. A careful reactivation campaign can turn a share of them into appointments, without buying a single new lead.',
  takeaways: [
    'Old leads and past customers are often the cheapest source of new revenue you have.',
    'Clean, deduplicate and segment the list before sending anything.',
    'Check consent and do-not-contact status first; reactivation must stay compliant.',
    'Give each segment a specific, relevant reason to reply, not a generic “checking in.”',
    'Test a small batch, let AI handle replies quickly, then roll out in paced waves.',
  ],
  services: ['ai-lead-reactivation', 'email-sms-marketing', 'ai-follow-up-system', 'gohighlevel-automation'],
  related: ['automate-lead-follow-up-gohighlevel', 'tcpa-ai-calling-compliance', 'speed-to-lead-statistics'],
  body: `
<p>Every business that has run ads for a while has a database of people who inquired, got a quote or bought once, and then went quiet. Many still need what you sell; they just never heard from you at the right moment. A database reactivation campaign reaches them with a relevant reason to reply, then follows up fast when they do. Done carefully, it’s one of the highest-return projects in marketing.</p>

<h2>Why reactivation works</h2>
<p>Many leads were never properly followed up in the first place. In one widely cited study of web leads, 23% of companies never responded at all ${cite('hbr-23')}. Others received a call or two and were forgotten. Their need didn’t disappear: the roof still leaks, the system still needs a service, the patient is still due a checkup. Reactivation simply catches them at a better time.</p>

<h2>Step 1: Export, clean and deduplicate</h2>
<ul>
  <li>Export contacts from your CRM, spreadsheets and old tools into one list.</li>
  <li>Remove duplicates, invalid numbers and obviously bad records.</li>
  <li>Standardize phone formats and time zones.</li>
  <li>Remove existing active customers and open opportunities, which belong in normal follow-up.</li>
</ul>

<h2>Step 2: Check consent and contact rules</h2>
${callout('Do this first', 'Only contact people you’re allowed to contact, through the channels they consented to. In the US, automated texts and AI-voice calls generally need prior express consent, and marketing messages need written consent. Remove anyone who opted out or is on applicable do-not-call lists. The UK, EU, Canada and Australia have their own rules.', '#ff6b35')}
<p>Our ${link('/blog/tcpa-ai-calling-compliance/', 'TCPA guide')} explains the US rules in more detail. If consent is unclear for part of your list, email may be the only appropriate channel for those contacts.</p>

<h2>Step 3: Segment the list</h2>
${table(
  ['Segment', 'Typical reason to reach out'],
  [
    ['Past customers', 'Maintenance, renewal, seasonal service or a new offering'],
    ['Lost or stalled quotes', 'Updated pricing, availability or a fresh look at their project'],
    ['Inquiries that never booked', 'A simple question about whether they still need help'],
    ['No-shows and cancellations', 'An easy way to rebook'],
    ['Inactive members or patients', 'A welcome-back offer or overdue reminder'],
  ],
  'Reactivation segments'
)}

<h2>Step 4: Write messages that get replies</h2>
<p>The best reactivation messages are short, personal and easy to answer. They reference the original inquiry and ask a simple question.</p>
<ul>
  <li><strong>Lost quote:</strong> “Hi Sam, it’s Jordan at Summit Peak Roofing. We quoted your roof repair last spring. Is that still something you’re planning?”</li>
  <li><strong>Past customer:</strong> “Hi Priya, it’s been about a year since your AC tune-up. Want me to send a few times for this season’s check?”</li>
  <li><strong>Unbooked inquiry:</strong> “Hi Alex, you asked about Invisalign a while back. Are you still interested in a free consultation?”</li>
</ul>
<p>Avoid generic “just checking in” messages and heavy discounts that train customers to wait. Use our ${link('/resources/sms-character-counter/', 'SMS counter')} to keep texts to one segment, and our ${link('/resources/follow-up-templates/', 'follow-up templates')} for more examples.</p>

<h2>Step 5: Respond to replies instantly</h2>
<p>Reactivation creates bursts of replies. If they wait hours for an answer, the moment passes. AI agents can respond in seconds, answer questions, handle simple objections and book appointments, while your team takes the conversations that need a person. This is where ${link('/services/ai-lead-reactivation/', 'AI lead reactivation')} makes the biggest difference.</p>

<h2>Step 6: Test, then roll out in waves</h2>
<ol>
  <li>Send to a small batch, such as 100 to 200 contacts per segment.</li>
  <li>Measure replies, opt-outs, bookings and any complaints.</li>
  <li>Adjust messages and AI responses based on what you learn.</li>
  <li>Roll out the rest in paced waves your team can handle, protecting deliverability.</li>
</ol>

<h2>Step 7: Measure what matters</h2>
${table(
  ['Metric', 'Why it matters'],
  [
    ['Reply rate', 'Shows whether the message and segment resonate'],
    ['Opt-out rate', 'A warning sign if high; review targeting and wording'],
    ['Booked appointments', 'The real outcome of the campaign'],
    ['Revenue from reactivated contacts', 'Proves the return compared with buying new leads'],
  ],
  'Reactivation campaign metrics'
)}

<h2>Make it a habit, not a one-off</h2>
<p>Once the first campaign is done, automate reactivation: contacts who go quiet for 90 days enter a light-touch sequence, lost opportunities get a check-in after a few months, and past customers receive seasonal reminders. In GoHighLevel, these are a handful of simple workflows; see our ${link('/blog/gohighlevel-workflow-examples/', 'GoHighLevel workflow examples')}.</p>
`,
  faqs: [
    { q: 'What is database reactivation?', a: 'It’s a campaign that re-engages old leads and past customers in your CRM with relevant messages, then follows up on replies to book appointments or sales.' },
    { q: 'Is it legal to text old leads?', a: 'Only if you have appropriate consent for that channel. In the US, automated texts generally need prior express consent, and marketing texts need written consent. Remove opt-outs and check applicable rules before sending.' },
    { q: 'How old can leads be and still work?', a: 'Leads from months or even a few years ago can respond if the message is relevant, but older lists have more invalid numbers and lower response. Test a batch to find out.' },
    { q: 'How many messages should a reactivation campaign send?', a: 'Usually two or three per contact over a couple of weeks, stopping as soon as they reply or opt out.' },
  ],
};
