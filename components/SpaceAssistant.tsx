
import React, { useState, useRef, useEffect } from 'react';
import { askSpaceAssistant } from '../geminiService';

const SpaceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isTyping) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const botResponse = await askSpaceAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 h-[450px] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl mb-4 flex flex-col overflow-hidden animate-slide-up">
          <div className="p-4 bg-blue-600 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">🤖</span>
              <span className="font-bold text-white">우주 탐험 길잡이</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8 text-slate-500 text-sm">
                "안녕하세요! 대한민국의 우주 기술에 대해 무엇이든 물어보세요."
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-slate-950/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="질문을 입력하세요..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="p-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors">
                <span className="block transform rotate-[-45deg] translate-y-[-2px] translate-x-[2px]">🚀</span>
              </button>
            </div>
          </form>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all glow-blue group"
      >
        <span className="group-hover:animate-bounce">🤖</span>
      </button>
    </div>
  );
};

export default SpaceAssistant;
