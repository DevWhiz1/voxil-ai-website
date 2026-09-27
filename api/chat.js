// Live chatbot endpoint for the portfolio page and demo funnels (Vercel
// serverless function). POST { bot, messages: [{ role, content }] } -> { reply }.
//
// Needs ANTHROPIC_API_KEY in the Vercel project's environment variables.
// CHAT_MODEL optionally overrides the model (e.g. claude-haiku-4-5 for lower cost).
// System prompts are generated into api/_knowledge.js by scripts/build-pages.js.
import Anthropic from '@anthropic-ai/sdk';

import { BOTS } from './_knowledge.js';

const MODEL = process.env.CHAT_MODEL || 'claude-opus-5';
const IS_OPUS_5 = MODEL.startsWith('claude-opus-5');

const MAX_MESSAGES = 12;
const MAX_CHARS = 600;
const RATE_LIMIT = 20; // requests per IP per window, per function instance
const RATE_WINDOW_MS = 10 * 60 * 1000;

const ALLOWED_ORIGINS = [/^https:\/\/(www\.)?voxilai\.tech$/, /^http:\/\/localhost(:\d+)?$/, /^http:\/\/127\.0\.0\.1(:\d+)?$/];

// Created on first use: the constructor throws when ANTHROPIC_API_KEY is unset.
let client;
const hits = new Map();

const rateLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
};

const originAllowed = (origin) => {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.some((re) => re.test(origin))) return true;
  // Vercel preview deployments of this project.
  return Boolean(process.env.VERCEL_URL) && origin === `https://${process.env.VERCEL_URL}`;
};

// Accepts only a short, alternating user/assistant history that starts and ends with the user.
const cleanMessages = (raw) => {
  if (!Array.isArray(raw) || !raw.length) return null;
  const msgs = raw.slice(-MAX_MESSAGES).map((m) => ({
    role: m?.role === 'assistant' ? 'assistant' : 'user',
    content: typeof m?.content === 'string' ? m.content.trim().slice(0, MAX_CHARS) : '',
  }));
  while (msgs.length && msgs[0].role !== 'user') msgs.shift();
  if (!msgs.length || msgs.at(-1).role !== 'user') return null;
  for (let i = 0; i < msgs.length; i++) {
    if (!msgs[i].content || msgs[i].role !== (i % 2 === 0 ? 'user' : 'assistant')) return null;
  }
  return msgs;
};

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!originAllowed(req.headers.origin)) return res.status(403).json({ error: 'Forbidden' });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return res.status(429).json({ error: 'Too many messages, please try again in a few minutes.' });

  let body = req.body || {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
  }
  const system = Object.hasOwn(BOTS, body.bot) ? BOTS[body.bot] : null;
  const messages = cleanMessages(body.messages);
  if (!system || !messages) return res.status(400).json({ error: 'Invalid request' });

  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Chat is not configured' });

  try {
    client ||= new Anthropic();
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 400,
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages,
      // Opus 5: short, fast replies, and a server-side fallback model if a request is declined.
      ...(IS_OPUS_5 && {
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        thinking: { type: 'disabled' },
        output_config: { effort: 'low' },
      }),
    });

    if (response.stop_reason === 'refusal') {
      return res.status(200).json({ reply: 'Sorry, I can’t help with that one. Is there anything about our services I can answer?' });
    }

    const reply = response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('')
      .replace(/\s*[–—]\s*/g, ', ')
      .trim();

    if (!reply) return res.status(502).json({ error: 'Empty reply' });
    return res.status(200).json({ reply });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) return res.status(429).json({ error: 'Busy, please try again shortly.' });
    if (err instanceof Anthropic.AuthenticationError) {
      console.error('chat: ANTHROPIC_API_KEY is missing or invalid');
      return res.status(503).json({ error: 'Chat is not configured' });
    }
    if (err instanceof Anthropic.APIError) {
      console.error('chat: API error', err.status, err.message);
      return res.status(502).json({ error: 'Upstream error' });
    }
    console.error('chat: unexpected error', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
