import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  MoreHorizontal,
  Send,
  ArrowLeft,
  X,
  Sparkles,
  Command
} from "lucide-react";

export const Key: React.FC<{ char: string }> = ({ char }) => {
  return (
    <div className="w-7 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-white text-[15px] font-medium active:bg-white/10 transition-colors">
      {char}
    </div>
  );
};

const AIChat: React.FC<{ onBack?: () => void; showKeyboard?: boolean; showHeader?: boolean }> = ({ 
  onBack, 
  showKeyboard = true,
  showHeader = true 
}) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello Rishi. I've initialized the neural mapping project. How should we proceed with the architecture review?"
    },
    {
      role: "user",
      content:
        "Let's focus on the Base62 encoding strategy first. I want to ensure we handle collision resolution at the application layer.",
    },
    {
      role: "assistant",
      content:
        "Acknowledged. Application-layer resolution via consistent hashing and a Bloom filter for quick lookups would minimize database pressure. Should I generate a technical specification for this approach?",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-black flex flex-col font-sans"
    >
      {/* Header */}
      {showHeader && (
        <div className="pt-14 pb-4 px-6 flex items-center justify-between border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-10">
          <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col items-center">
             <span className="text-white font-bold text-[13px] tracking-tight">Syncra Assistant</span>
             <div className="flex items-center gap-1.5 mt-0.5">
               <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Online</span>
             </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] p-4 rounded-2xl text-[14px] leading-relaxed shadow-2xl ${
                msg.role === "user"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0A0A0A] text-white/60 border border-white/5"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <div className="flex items-center gap-3 text-white/20 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce" />
              <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:0.4s]" />
            </span>
            Syncra is thinking
          </div>
        </div>
      </div>

      {/* Input Area */}
      {!showKeyboard && (
         <div className="p-6 border-t border-white/5 bg-black">
            <div className="relative group">
              <input
                type="text"
                placeholder="Message Syncra..."
                className="w-full h-14 bg-[#0A0A0A] border border-white/5 rounded-2xl pl-6 pr-14 text-white text-[15px] outline-none focus:border-white/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center shadow-2xl transition-transform active:scale-90">
                <Send className="w-5 h-5 -rotate-12" />
              </button>
            </div>
         </div>
      )}

      {showKeyboard && (
        <div className="p-4 space-y-4 bg-black border-t border-white/5">
          <div className="relative group">
            <input
              type="text"
              placeholder="Message..."
              className="w-full h-12 bg-[#0A0A0A] border border-white/5 rounded-xl pl-5 pr-12 text-white text-[14px] outline-none focus:border-white/10 transition-all"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center transition-transform active:scale-90">
              <Send className="w-4 h-4 -rotate-12" />
            </button>
          </div>

          {/* Mock Keyboard - Refined */}
          <div className="bg-[#0A0A0A] rounded-t-3xl -mx-4 -mb-4 p-4 pt-6 space-y-2 border-t border-white/5">
            <div className="flex gap-1 justify-center">
              {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((k) => (
                <Key key={k} char={k} />
              ))}
            </div>
            <div className="flex gap-1 justify-center">
              {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((k) => (
                <Key key={k} char={k} />
              ))}
            </div>
            <div className="flex gap-1 justify-center relative">
              <div className="absolute left-0 w-10 h-9 bg-white/5 rounded-lg flex items-center justify-center text-white/40">
                <Sparkles className="w-4 h-4" />
              </div>
              {["z", "x", "c", "v", "b", "n", "m"].map((k) => (
                <Key key={k} char={k} />
              ))}
              <div className="absolute right-0 w-10 h-9 bg-white/5 rounded-lg flex items-center justify-center text-white/40">
                <X className="w-4 h-4" />
              </div>
            </div>
            <div className="flex gap-2 justify-center pt-2 pb-6">
              <div className="w-16 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/40 text-[13px] font-bold">
                123
              </div>
              <div className="flex-1 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/20 text-[13px] font-bold uppercase tracking-widest">
                space
              </div>
              <div className="w-16 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white text-[13px] font-bold">
                return
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AIChat;
