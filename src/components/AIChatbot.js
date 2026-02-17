import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

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
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: userQuery }),
    });

    // Check if response is actually JSON (not HTML from redirect)
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error('Function not available');
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API Request Failed');
    }

    return data.reply;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 animate-float">
        <button
          onClick={toggleChat}
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-sky-600 to-purple-600 text-white font-bold shadow-2xl hover:shadow-sky-500/50 transition-all transform hover:scale-105 group border border-white/10 text-sm sm:text-base"
        >
          <span className="text-xl">✨</span>
          <span>Ask my AI Agent</span>
        </button>
      </div>

      {/* Chat Modal */}
      <div
        className={`fixed bottom-20 sm:bottom-28 right-2 sm:right-8 z-50 w-[calc(100%-1rem)] sm:w-full max-w-sm transform transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[70vh] sm:h-[500px]">
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
