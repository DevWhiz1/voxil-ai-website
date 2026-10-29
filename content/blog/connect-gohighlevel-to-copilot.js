import { callout, link, table } from '../../scripts/lib/content-helpers.js';

const GHL_MCP = 'https://help.gohighlevel.com/support/solutions/articles/155000005741';
const MS_MCP = 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent';

export default {
  slug: 'connect-gohighlevel-to-copilot',
  title: 'How to Connect GoHighLevel to Microsoft Copilot (3 Ways)',
  metaTitle: 'How to Connect GoHighLevel to Copilot (2026) | Voxil AI',
  description: 'Connect GoHighLevel to Microsoft Copilot Studio: the HighLevel MCP server, a custom connector to the HighLevel API, or a no-code bridge, with security tips.',
  category: 'GoHighLevel',
  date: '2026-10-30',
  keywords: ['connect GoHighLevel to Copilot', 'GoHighLevel Copilot integration', 'GoHighLevel Copilot Studio', 'HighLevel MCP server', 'GoHighLevel to Copilot'],
  excerpt: 'Want Copilot to look up contacts, check pipelines or book appointments in GoHighLevel? Here are the three ways to connect them, from the HighLevel MCP server to a no-code bridge.',
  takeaways: [
    'There’s no official one-click GoHighLevel connector in Copilot, but Copilot Studio can talk to GoHighLevel three ways.',
    'The HighLevel MCP server is the newest route; HighLevel documents Claude, ChatGPT and Cursor, so test it with Copilot before relying on it.',
    'A custom connector to the HighLevel API with a Private Integration token is the most controllable route.',
    'For simple reporting or alerts, a bridge through Power Automate, n8n or a data connector is quickest.',
    'Give Copilot the narrowest scopes possible and keep it inside one sub-account.',
  ],
  services: ['ghl-integration', 'api-integration', 'ai-agent-development', 'gohighlevel-ai'],
  related: ['gohighlevel-ai-guide', 'make-gohighlevel-integration', 'n8n-ai-agent-tutorial'],
  body: `
<p>Teams that live in Microsoft 365 often want Copilot to answer questions like "what’s in our pipeline this week?" or "book this lead a call" using GoHighLevel data. There’s no official GoHighLevel connector in the Copilot catalogue, but <strong>Microsoft Copilot Studio can connect to GoHighLevel in three ways.</strong> Here’s how each works and which to pick.</p>

<h2>The three options at a glance</h2>
${table(
  ['', '1. HighLevel MCP server', '2. Custom connector (HighLevel API)', '3. No-code bridge'],
  [
    ['What Copilot can do', 'Search and run HighLevel operations', 'Exactly the actions you define', 'Reports, alerts or simple triggers'],
    ['Setup effort', 'Low', 'Medium (developer)', 'Low'],
    ['Officially documented for Copilot', 'No, test first', 'Yes, standard Power Platform connector', 'Depends on the tool'],
    ['Control and safety', 'Scopes you approve', 'Highest', 'Limited to what the bridge exposes'],
    ['Best for', 'Fast experiments, power users', 'Production agents for a team', 'Read-only reporting or notifications'],
  ],
  'Ways to connect GoHighLevel to Microsoft Copilot'
)}

<h2>Option 1: Use the HighLevel MCP server</h2>
<p>HighLevel runs an official <a href="${GHL_MCP}" target="_blank" rel="noopener">MCP server</a> (Model Context Protocol), which lets AI assistants work with a sub-account through four tools: list locations, search operations, describe an operation and execute it, within the scopes you approve. It uses Streamable HTTP and OAuth.</p>
<p>Copilot Studio can <a href="${MS_MCP}" target="_blank" rel="noopener">connect to existing MCP servers</a> that use Streamable HTTP, with OAuth 2.0 authentication. In outline:</p>
<ol>
  <li>In Copilot Studio, open your agent and make sure <strong>generative orchestration</strong> is on.</li>
  <li>Go to <strong>Tools → Add a tool → New tool → Model Context Protocol</strong>.</li>
  <li>Enter a server name, a clear description (for example "Look up and update contacts, opportunities and calendars in our GoHighLevel sub-account") and the HighLevel MCP server URL.</li>
  <li>Choose <strong>OAuth 2.0</strong> authentication, create the connection and sign in to approve access for one sub-account.</li>
  <li>Add the tool to your agent and test with simple read-only questions first.</li>
</ol>
${callout('Check before you rely on it', 'As of October 2026, HighLevel’s MCP documentation lists client-specific endpoints for Claude, ChatGPT and other OpenAI-compatible clients, and Cursor, but not Microsoft Copilot. Test the connection and the OAuth sign-in in a sandbox sub-account. If it won’t complete, use option 2.', '#ff7a3d')}

<h2>Option 2: Build a custom connector to the HighLevel API</h2>
<p>This is the dependable route for a production agent. You define exactly which actions Copilot can take, such as "find contact by phone", "create opportunity" or "get free calendar slots".</p>
<ol>
  <li><strong>Create a Private Integration in GoHighLevel:</strong> in the sub-account’s settings, create a private integration, select only the scopes you need (for example contacts and calendars) and store the token securely.</li>
  <li><strong>Describe the endpoints:</strong> write an OpenAPI definition for the HighLevel API v2 endpoints you need. Requests are authenticated with the token as a Bearer header and include HighLevel’s API version header.</li>
  <li><strong>Create the custom connector:</strong> in Copilot Studio choose <strong>Add a tool → New tool → Custom connector</strong>, import your OpenAPI file in Power Apps and configure authentication.</li>
  <li><strong>Add actions to your agent:</strong> give each action a plain-language description so Copilot knows when to use it.</li>
  <li><strong>Test and restrict:</strong> confirm that writes (creating or updating records) ask for confirmation, and log what the agent does.</li>
</ol>
<p>If you’d rather not maintain this yourself, our ${link('/services/ghl-integration/', 'GoHighLevel integration service')} builds and documents the connector for you.</p>

<h2>Option 3: Use a bridge for reporting and alerts</h2>
<ul>
  <li><strong>Power Automate:</strong> send GoHighLevel webhooks (new lead, stage change, booking) to a Power Automate flow that posts to Teams, Outlook or a SharePoint list Copilot can read.</li>
  <li><strong>n8n or Make:</strong> sync GoHighLevel data into Excel, SharePoint or a database on a schedule. See our ${link('/blog/make-gohighlevel-integration/', 'Make and GoHighLevel guide')}.</li>
  <li><strong>Data connectors:</strong> some reporting tools offer read-only GoHighLevel connections for analysis in Copilot. They can’t create or change records.</li>
</ul>

<h2>Security checklist</h2>
<ol>
  <li>Use the narrowest scopes that do the job, and one sub-account per connection.</li>
  <li>Store tokens in a secure connection, never in prompts or documents.</li>
  <li>Require confirmation for anything that sends messages, changes deals or deletes data.</li>
  <li>Check your Power Platform data policies, which also govern MCP and custom connectors.</li>
  <li>Review activity logs regularly. Our ${link('/blog/ai-agent-security-checklist/', 'AI agent security checklist')} covers this in more depth.</li>
</ol>

<h2>Which option should you choose?</h2>
<p>Use the <strong>MCP server</strong> to experiment quickly, a <strong>custom connector</strong> for a reliable agent your team depends on, and a <strong>bridge</strong> if you only need reports or notifications. Need it built properly? ${link('/book-meeting.html', 'Book a free call')}.</p>
`,
  faqs: [
    { q: 'Does GoHighLevel integrate with Microsoft Copilot?', a: 'There is no official one-click GoHighLevel connector in Copilot, but you can connect them through Copilot Studio using the HighLevel MCP server, a custom connector to the HighLevel API, or a bridge such as Power Automate or n8n.' },
    { q: 'What is the HighLevel MCP server?', a: 'It is HighLevel’s official Model Context Protocol server, which lets AI assistants search and run operations in a GoHighLevel sub-account within the OAuth scopes you approve. HighLevel documents it for Claude, ChatGPT-compatible clients and Cursor.' },
    { q: 'Can Copilot create contacts or book appointments in GoHighLevel?', a: 'Yes, through the MCP server or a custom connector with the right scopes. A read-only data connector or reporting sync cannot create or change records.' },
    { q: 'Do I need a paid Copilot Studio license?', a: 'Building agents with custom connectors and MCP tools in Copilot Studio generally requires a Copilot Studio license. Check your Microsoft licensing before you start.' },
  ],
};
