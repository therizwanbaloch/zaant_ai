import React, { useState } from 'react';
import { Sparkles, SendHorizontal } from 'lucide-react';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Welcome to the Sulemani Archive. How can I assist your research today?' },
    { role: 'user', content: 'Tell me about the proverbs regarding hospitality.' }
  ]);

  return (
    <>
      {/* Chat Header */}
      <header className="p-6 border-b flex justify-between items-center bg-white z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#70A288] rounded-xl flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-black text-[#B2386C] leading-none">Zaant AI</h3>
            <span className="text-[10px] font-bold text-[#70A288] uppercase tracking-widest">Archive Mode Active</span>
          </div>
        </div>
      </header>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F9FAFB]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-5 rounded-[2rem] font-bold text-sm shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#B2386C] text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border-2 border-[#F7C6C7] rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white">
        <div className="relative max-w-4xl mx-auto">
          <input 
            type="text" 
            placeholder="Ask Zaant about Sulemani history..."
            className="w-full bg-gray-100 border-2 border-transparent focus:border-[#F26B6B] focus:bg-white rounded-2xl py-5 pl-6 pr-16 outline-none font-bold transition-all shadow-inner"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#B2386C] text-white p-3 rounded-xl hover:bg-[#F26B6B] transition-colors shadow-lg">
            <SendHorizontal size={20} />
          </button>
        </div>
        <p className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-4">
          Zaant may provide historical interpretations. Verify clan records.
        </p>
      </div>
    </>
  );
};

export default ChatContainer;