// Netlify serverless function — proxies Gemini API calls so the key stays server-side.
const fetch = (...args) =>
  import('node-fetch').then(({ default: f }) => f(...args));

const RESUME_CONTEXT = `
Candidate Name: Anirudh BK
Role: Python Developer & AI Engineer

Current Role: Python Developer at Morgan Stanley (Oct 2025 - Present)
   - Team: Investment Management (IM), Project ESGODS.
   - Key Work: 
     1. Architecting high-throughput pipelines for global ESG equity data, feeding Snowflake for real-time analytics.
     2. Designing low-latency FastAPI microservices to serve downstream apps (sub-100ms response).
     3. Orchestrating end-to-end workflows via Autosys & Jenkins (99.9% reliability).

Previous Role: Senior AI/ML Backend Engineer at Accenture (Jun 2025 - Oct 2025)
   - Key Work: 
     1. Engineered Multi-Agent Systems (CrewAI, Autogen) orchestrating 5-10 agents.
     2. Built a universal ingestion API for 25+ file formats to automate bug reports/PPT generation.
     3. Optimized asynchronous Python backends with PostgreSQL.

Previous Role: AI/ML Backend Engineer at Accenture (Aug 2023 - Jun 2025)
   - Key Work: 
     1. Built Generative AI SDLC automation suite (Flask), reducing prototype time by 50%.
     2. Implemented LangChain workflows to convert 150+ user stories into technical specs.
     3. Engineered scalable Flask servers.

Education:
   - B.Tech IT from Vellore Institute of Technology (VIT), CGPA 8.58 (2019-2023).
   - Intermediate (10+2) from BIEAP, CGPA 9.79.
   - SSC (10th) from BSEAP, CGPA 9.8.

Tech Stack:
   - Languages: Python, Java, SQL, Bash.
   - AI: Agentic AI, LangGraph, Autogen, LangChain, CrewAI.
   - Web: FastAPI, Flask.
   - Data: Snowflake, PostgreSQL, Redis, Pandas.
   - DevOps: Git, Terraform, Jenkins, Docker, AWS, Azure.

Achievements:
   - Best Employee Award at Accenture.
   - 15% Server Load Reduction (Redis).
   - 30% Bug Reduction (SOLID principles).
   - 25% Revenue Growth (CrewAI features).
`;

const SYSTEM_PROMPT = `You are an AI recruiter assistant for Anirudh BK. 
Use the following resume context to answer questions about him confidently and professionally.
Keep answers concise (under 3 sentences) unless asked for details.
If the answer isn't in the context, say you don't have that specific info but can tell them about his Python or AI skills.

CONTEXT:
${RESUME_CONTEXT}`;

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: HEADERS, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: 'AI service not configured' }),
    };
  }

  let userQuery;
  try {
    const body = JSON.parse(event.body);
    userQuery = body.query;
  } catch {
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!userQuery || typeof userQuery !== 'string') {
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: 'Missing query' }) };
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT + '\n\nUser Question: ' + userQuery }],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return {
        statusCode: 502,
        headers: HEADERS,
        body: JSON.stringify({ error: 'AI service temporarily unavailable' }),
      };
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return {
        statusCode: 502,
        headers: HEADERS,
        body: JSON.stringify({ error: 'No response from AI' }),
      };
    }

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ reply: text }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
