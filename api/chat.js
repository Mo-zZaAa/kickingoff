/* Vercel 서버리스 함수 — Upstage Chat Completions 프록시 */

const UPSTAGE_API_URL = 'https://api.upstage.ai/v1/chat/completions';
const UPSTAGE_MODEL = 'solar-pro3';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  const apiKey = process.env.UPSTAGE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: 'Server configuration error' } });
  }

  const { messages } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: { message: 'messages array is required' } });
  }

  try {
    const response = await fetch(UPSTAGE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: UPSTAGE_MODEL, messages }),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch {
    return res.status(500).json({ error: { message: 'Internal server error' } });
  }
}
