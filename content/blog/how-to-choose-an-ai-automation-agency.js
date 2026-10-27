import { callout, cite, link, statGrid, table } from '../../scripts/lib/content-helpers.js';

export default {
  slug: 'how-to-choose-an-ai-automation-agency',
  title: 'How to Choose an AI Automation Agency: 12 Questions to Ask',
  metaTitle: 'How to Choose an AI Automation Agency in 2026 | Voxil AI',
  description: 'Hiring an AI automation agency? Ask these 12 questions about scope, ownership, data, testing, pricing and support before you sign, plus the red flags to avoid.',
  category: 'Guides',
  date: '2026-10-27',
  keywords: ['how to choose an AI automation agency', 'AI automation agency', 'hire AI automation agency', 'AI agency questions to ask'],
  excerpt: 'Plenty of agencies sell AI automation now. These 12 questions separate the ones who will ship something useful from the ones selling a demo.',
  takeaways: [
    'A good agency starts with your process and numbers, not with a tool or a demo.',
    'Insist on owning the accounts, workflows, prompts and data from day one.',
    'Ask how they test, monitor and hand over, not just how they build.',
    'Narrow, measurable first projects succeed far more often than broad "AI transformation" plans.',
    'Red flags: guaranteed results, vague pricing, no human escalation and lock-in to their accounts.',
  ],
  services: ['ai-automation-consultant', 'ai-agent-development', 'workflow-automation', 'ai-chatbots'],
  related: ['ai-automation-small-business-guide', 'ai-automation-roi-small-business', 'ai-agent-security-checklist'],
  body: `
<p>AI automation is now one of the most crowded services online. Some agencies build reliable systems that pay for themselves; others resell a template and a slick demo. If you are about to hire one, <strong>the questions you ask before signing matter more than the tools they use.</strong> Here are the twelve we would ask in your position.</p>

<h2>Why choosing well matters</h2>
${statGrid(['mit-95', 'gartner-40-cancel'], '#2fc4b6')}
<p>The failure rate is real. An MIT study found most generative-AI pilots produced no measurable P&L return ${cite('mit-95')}, and Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027 because of cost, unclear value or weak risk controls ${cite('gartner-40-cancel')}. The difference is rarely the model. It is scope, integration and follow-through, which is exactly what you are hiring an agency for.</p>

<h2>Scope and fit</h2>
<ol>
  <li><strong>What problem will this solve, and how will we measure it?</strong> Expect a specific answer, such as missed calls answered, response time, hours of data entry removed or bookings per week, not "efficiency".</li>
  <li><strong>What would you <em>not</em> automate here?</strong> A good partner pushes back on features that add cost without value.</li>
  <li><strong>Can we start with one narrow workflow?</strong> The best first projects are small enough to ship in weeks and prove value quickly.</li>
</ol>

<h2>Ownership and data</h2>
<ol start="4">
  <li><strong>Who owns the accounts, workflows, prompts and data?</strong> The answer should be you. Systems should live in your accounts (your n8n or Make workspace, your CRM, your AI provider keys), or move there at handover.</li>
  <li><strong>Where does our data go, and is it used for training?</strong> They should name every provider in the chain and confirm business terms that exclude training on your data.</li>
  <li><strong>What permissions will the AI have?</strong> Look for least-privilege access and human approval for anything high-impact. Our ${link('/blog/ai-agent-security-checklist/', 'AI agent security checklist')} is a useful reference.</li>
</ol>

<h2>Build quality</h2>
<ol start="7">
  <li><strong>How do you test before launch?</strong> Ask for test scenarios using your real calls, chats, emails or documents, including the awkward edge cases.</li>
  <li><strong>What happens when the AI is unsure or wrong?</strong> There should be a clear fallback to a person, and logs showing what it did.</li>
  <li><strong>Can we see similar work?</strong> Live demos you can try, case studies with specifics, or a reference you can speak to. See ${link('/case-studies/', 'our case studies')} for the kind of detail to expect.</li>
</ol>

<h2>Cost and support</h2>
<ol start="10">
  <li><strong>What exactly is in the price?</strong> Build fee, monthly support, and the third-party costs you will pay directly (AI usage, telephony, automation platform) should all be spelled out.</li>
  <li><strong>What does support look like after launch?</strong> Monitoring, prompt and workflow updates, response times, and who you talk to.</li>
  <li><strong>What does handover include?</strong> Documentation, a walkthrough, and enough access that another developer could take over if needed.</li>
</ol>

<h2>Green flags and red flags</h2>
${table(
  ['Green flags', 'Red flags'],
  [
    ['Starts with your process and numbers', 'Starts with a tool they always use'],
    ['Builds in your accounts, you own everything', 'Everything lives in their accounts'],
    ['Clear itemised pricing, including third-party costs', 'One vague monthly fee'],
    ['Human escalation and logs built in', '"The AI handles everything"'],
    ['Realistic timelines with a narrow first phase', 'Guaranteed results or "fully autonomous" promises'],
    ['Talks you out of unnecessary features', 'Upsells every add-on'],
  ],
  'What to look for in an AI automation agency'
)}
${callout('A quick test', 'Ask the agency to describe, in plain language, what happens when a customer says something the AI was not built for. A strong answer covers the fallback, who gets notified and how it is logged. A weak answer is "that won’t happen".')}

<h2>Agency, freelancer or in-house?</h2>
<p>Freelancers can be great for a single well-defined workflow. An in-house hire makes sense once automation is core to how you operate and you have steady work for them. An agency fits in between: you get design, build, integration and support from one team, without hiring. Whichever you choose, the twelve questions above still apply.</p>

<p>At Voxil AI you work directly with the people building your system, and you own everything we build. If you would like a second opinion on a proposal, or want to scope a first project, start with our ${link('/services/ai-automation-consultant/', 'AI automation consulting')} or ${link('/book-meeting.html', 'book a free call')}.</p>
`,
  faqs: [
    { q: 'What does an AI automation agency do?', a: 'It designs, builds and maintains systems that use AI to handle business tasks, such as answering calls and chats, qualifying leads, booking appointments, processing documents and moving data between your tools.' },
    { q: 'How much does it cost to hire an AI automation agency?', a: 'It depends on scope, integrations and support. Ask for an itemised quote that separates the build fee, ongoing support and third-party costs such as AI usage and telephony, and start with one narrow workflow to keep the first investment small.' },
    { q: 'Should I own the automations an agency builds?', a: 'Yes. Make sure the workflows, prompts, data and accounts are in your name, or transferred to you at handover, so you are never locked in to one provider.' },
    { q: 'How long does an AI automation project take?', a: 'A focused first workflow is usually a matter of weeks rather than months. Broad projects take longer, which is why starting narrow and expanding after it proves value is the safer route.' },
  ],
};
