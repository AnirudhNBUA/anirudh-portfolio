import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

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

Education: B.Tech IT from Vellore Institute of Technology (VIT), CGPA 8.58.

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

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I'm Anirudh's personal AI agent. I can tell you about his work at Morgan Stanley, his AI projects, or his tech stack. What would you like to know? ✨",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = input.trim();
    if (!message || isLoading) return;

    setMessages((prev) => [...prev, { sender: 'user', text: message }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await callGeminiAPI(message);
      setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: "I'm having trouble connecting right now. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const callGeminiAPI = async (userQuery) => {
    const systemPrompt = `You are an AI recruiter assistant for Anirudh BK. 
    Use the following resume context to answer questions about him confidently and professionally.
    Keep answers concise (under 3 sentences) unless asked for details.
    If the answer isn't in the context, say you don't have that specific info but can tell them about his Python or AI skills.
    
    CONTEXT:
    ${RESUME_CONTEXT}`;

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: systemPrompt + '\n\nUser Question: ' + userQuery }],
        },
      ],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('API Request Failed');
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 animate-float">
        <button
          onClick={toggleChat}
          className="flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-sky-600 to-purple-600 text-white font-bold shadow-2xl hover:shadow-sky-500/50 transition-all transform hover:scale-105 group border border-white/10"
        >
          <span className="text-xl">✨</span>
          <span>Ask my AI Agent</span>
        </button>
      </div>

      {/* Chat Modal */}
      <div
        className={`fixed bottom-28 right-8 z-50 w-full max-w-sm transform transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex items-center justify-center text-lg shadow-lg">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Anirudh's AI Recruiter</h3>
                <p className="text-xs text-green-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-hide bg-black/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.sender === 'ai' ? (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex-shrink-0 flex items-center justify-center text-xs shadow-lg">
                    🤖
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-xs">
                    👤
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed ${
                    msg.sender === 'ai'
                      ? 'bg-white/10 text-gray-200 glass rounded-tl-none border border-white/5'
                      : 'bg-sky-600 text-white rounded-tr-none shadow-lg'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex-shrink-0 flex items-center justify-center text-xs shadow-lg">
                  🤖
                </div>
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none glass flex gap-1 items-center border border-white/5">
                  <div className="w-2 h-2 bg-sky-400 rounded-full typing-dot" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full typing-dot" />
                  <div className="w-2 h-2 bg-pink-400 rounded-full typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white/5 border-t border-white/10">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Anirudh's skills..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors pr-12 focus:bg-black/70"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
