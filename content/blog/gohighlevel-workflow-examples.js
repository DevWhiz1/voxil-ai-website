import { callout, link, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'gohighlevel-workflow-examples',
  title: '15 GoHighLevel Workflow Examples Every Service Business Should Set Up',
  metaTitle: '15 GoHighLevel Workflow Examples (With Triggers) | Voxil AI',
  description: 'Fifteen practical GoHighLevel workflow examples with triggers, actions and stop conditions: lead response, booking, no-shows, reviews, reactivation, internal alerts and more.',
  category: 'GoHighLevel',
  author: 'ahmad-ali',
  date: '2026-10-08',
  keywords: ['GoHighLevel workflow examples', 'GHL workflows', 'GoHighLevel automation examples', 'GHL workflow templates', 'GoHighLevel triggers'],
  excerpt: 'The fifteen GoHighLevel workflows we set up most often, each with its trigger, actions and stop conditions, grouped by stage of the customer journey.',
  takeaways: [
    'Build small, single-purpose workflows with clear names instead of one large workflow.',
    'Every outreach workflow needs stop conditions for replies, bookings and opt-outs.',
    'Start with lead response, booking and no-show workflows; they pay off fastest.',
    'Internal alert workflows are as valuable as customer-facing ones.',
    'Test each workflow with a test contact before publishing.',
  ],
  services: ['gohighlevel-automation', 'ghl-setup', 'ghl-expert', 'crm-automation'],
  related: ['automate-lead-follow-up-gohighlevel', 'ghl-crm-setup-small-business', 'gohighlevel-missed-call-text-back'],
  body: `
<p>GoHighLevel’s workflow builder can automate almost anything, which is exactly why many accounts end up with dozens of half-finished, overlapping workflows. These fifteen examples are the ones we build most often for service businesses. Each is small, does one job and is named so anyone on your team can understand it.</p>

${callout('Naming convention', 'Use “Stage | Trigger | Purpose”, for example “Lead | Form submitted | Instant reply.” When something misfires, you’ll find the right workflow in seconds.', '#0284c7')}

<h2>Lead capture and response</h2>
<h3>1. Instant reply to new form leads</h3>
<p><strong>Trigger:</strong> form or survey submitted. <strong>Actions:</strong> send a personalized SMS and email within a minute, create an opportunity in “New lead,” assign an owner and notify them. <strong>Stop:</strong> not needed; it runs once.</p>
<h3>2. Facebook and Google lead ad response</h3>
<p><strong>Trigger:</strong> Facebook lead form or Google lead form submitted. <strong>Actions:</strong> same as above, plus a source tag for reporting. Ad leads cool quickly, so this should fire immediately, around the clock.</p>
<h3>3. Missed-call text-back</h3>
<p><strong>Trigger:</strong> call status is missed or no-answer. <strong>Actions:</strong> short wait, SMS asking how you can help, internal alert. Full setup in our ${link('/blog/gohighlevel-missed-call-text-back/', 'missed-call text-back guide')}.</p>
<h3>4. 14-day lead nurture</h3>
<p><strong>Trigger:</strong> tag “nurture” added (by workflows 1 and 2). <strong>Actions:</strong> spaced SMS, email and call tasks over two weeks. <strong>Stop:</strong> reply, appointment booked or stage change. We detail the cadence in ${link('/blog/automate-lead-follow-up-gohighlevel/', 'how to automate lead follow-up')}.</p>

<h2>Booking and appointments</h2>
<h3>5. Appointment confirmation and reminders</h3>
<p><strong>Trigger:</strong> appointment status booked. <strong>Actions:</strong> confirmation now, reminder 24 hours before and 2 hours before, with an easy reschedule reply. Move the opportunity to “Booked.”</p>
<h3>6. No-show recovery</h3>
<p><strong>Trigger:</strong> appointment status no-show. <strong>Actions:</strong> friendly SMS within 15 minutes with a rebooking link; a task for the team if there’s no reply in a day.</p>
<h3>7. Cancellation and waitlist fill</h3>
<p><strong>Trigger:</strong> appointment cancelled. <strong>Actions:</strong> notify the team and text contacts tagged “waitlist” that a slot opened, booking the first to accept.</p>

<h2>Sales pipeline</h2>
<h3>8. Quote or estimate follow-up</h3>
<p><strong>Trigger:</strong> opportunity moved to “Estimate sent.” <strong>Actions:</strong> check-ins at day 2, 5 and 10 asking if there are questions. <strong>Stop:</strong> stage changes to Won or Lost.</p>
<h3>9. Stale opportunity alert</h3>
<p><strong>Trigger:</strong> opportunity unchanged in a stage for a set number of days. <strong>Actions:</strong> internal notification and task for the owner. This catches deals that silently go cold.</p>
<h3>10. Lost-reason capture</h3>
<p><strong>Trigger:</strong> opportunity marked Lost. <strong>Actions:</strong> require or prompt for a lost reason, add a tag and enroll in a long-term reactivation list after a delay.</p>

<h2>After the sale</h2>
<h3>11. Review request</h3>
<p><strong>Trigger:</strong> opportunity Won or job marked complete. <strong>Actions:</strong> thank-you message, review link, one reminder if not clicked. Route negative replies to a manager.</p>
<h3>12. Referral request</h3>
<p><strong>Trigger:</strong> review left or positive reply. <strong>Actions:</strong> a week later, invite them to refer a friend with a simple message.</p>
<h3>13. Recurring service reminders</h3>
<p><strong>Trigger:</strong> date-based, such as 6 or 12 months after a service. <strong>Actions:</strong> reminder to book maintenance, a cleaning or an annual checkup.</p>

<h2>Internal operations</h2>
<h3>14. Speed-to-lead alert escalation</h3>
<p><strong>Trigger:</strong> new lead with no outbound reply after 5 minutes during business hours. <strong>Actions:</strong> escalate to a manager by SMS or Slack. Pair this with our ${link('/services/speed-to-lead-automation/', 'speed-to-lead automation')} approach.</p>
<h3>15. Daily pipeline summary</h3>
<p><strong>Trigger:</strong> scheduled daily. <strong>Actions:</strong> send owners a summary of new leads, booked appointments and stale deals, so nobody has to dig through dashboards.</p>

<h2>Which workflows to build first</h2>
${table(
  ['Priority', 'Workflows', 'Why'],
  [
    ['Week 1', '1, 2, 3, 5', 'Instant response and reminders recover revenue immediately'],
    ['Week 2', '4, 6, 8', 'Follow-up and no-show recovery convert more of the leads you have'],
    ['Week 3', '9, 10, 11, 14', 'Pipeline hygiene and reviews protect long-term growth'],
    ['Later', '7, 12, 13, 15', 'Optimization once the core is stable'],
  ],
  'GoHighLevel workflow rollout priority'
)}

<h2>Testing and maintenance</h2>
<ul>
  <li>Create a test contact with your own phone and email, and run each workflow end to end before publishing.</li>
  <li>Check A2P 10DLC status before relying on SMS; see our ${link('/blog/a2p-10dlc-registration-guide/', 'A2P registration guide')}.</li>
  <li>Review workflow history weekly for errors and skipped steps.</li>
  <li>Archive workflows you no longer use, so the account stays understandable.</li>
</ul>
<p>Want these built and tested for you? See our ${link('/services/gohighlevel-automation/', 'GoHighLevel automation service')} or start with the free ${link('/resources/ghl-setup-checklist/', 'GHL setup checklist')}.</p>
`,
  faqs: [
    { q: 'How many workflows should a GoHighLevel account have?', a: 'As many small, single-purpose workflows as you need, typically ten to thirty for a service business. Fewer, clearly named workflows are easier to maintain than one large one.' },
    { q: 'What is the most important GoHighLevel workflow?', a: 'Instant lead response, because speed to first contact has the biggest effect on conversion. Missed-call text-back and appointment reminders are close behind.' },
    { q: 'How do I stop a workflow when a lead replies?', a: 'Use goal events or a separate workflow triggered by a customer reply that removes the contact from the nurture workflow.' },
    { q: 'Can GoHighLevel workflows use AI?', a: 'Yes. Workflows can hand conversations to Conversation AI, trigger Voice AI or external voice agents, and use AI actions for drafting content.' },
  ],
};
