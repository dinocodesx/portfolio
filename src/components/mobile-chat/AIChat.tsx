import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  MoreHorizontal,
  Send,
  ArrowLeft,
  X,
} from "lucide-react";

export const Key: React.FC<{ char: string }> = ({ char }) => {
  return (
    <div className="w-6 h-8 bg-white/10 rounded-md flex items-center justify-center text-white text-base font-light active:bg-white/30 transition-colors">
      {char}
    </div>
  );
};

const AIChat: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [messages, setMessages] = useState([
    {
      role: "user",
      content:
        "Create an image of a tiny dragon hatching from an egg in a sunlit meadow, surrounded by curious glowing butterflies. Vibrant colors, detailed scales.",
    },
    {
      role: "assistant",
      content:
        "A tiny dragon hatches in a sunlit meadow, its vibrant scales shimmering as glowing butterflies flutter around. Cracked eggshells reveal delicate wings, bathed in golden light and surrounded by wildflowers.",
    },
  ]);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="w-full h-full bg-[#0a0a0b] flex flex-col"
    >
      {/* Header */}
      <div className="pt-12 pb-3 px-3 flex items-center justify-between border-b border-white/5 bg-linear-to-b from-[#1a2a6c]/20 to-transparent">
        <button
          onClick={onBack}
          className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-white font-medium text-xs">Create an image</span>
        <button className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-xl text-[11px] leading-relaxed ${
                msg.role === "user"
                  ? "bg-white/5 text-white/70 border border-white/10"
                  : "bg-white/10 text-white/90 border border-white/20"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <div className="flex items-center gap-2 text-white/40 text-[11px] font-medium">
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
            </span>
            Searching
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-2.5 space-y-3 bg-[#0a0a0b]">
        <div className="relative">
          <input
            type="text"
            placeholder="Message..."
            className="w-full h-10 bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 text-white text-xs outline-none focus:bg-white/10 transition-colors"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#0055ff] rounded-full flex items-center justify-center text-white">
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mock Keyboard */}
        <div className="bg-[#1c1c1e] rounded-t-2xl -mx-2.5 p-1.5 pt-3 space-y-1.5 select-none">
          <div className="flex gap-1 justify-center">
            {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((k) => (
              <Key key={k} char={k} />
            ))}
          </div>
          <div className="flex gap-1 justify-center px-3">
            {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((k) => (
              <Key key={k} char={k} />
            ))}
          </div>
          <div className="flex gap-1 justify-center">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/60 text-xs">
              <ArrowLeft className="w-3 h-3 rotate-90" />
            </div>
            {["z", "x", "c", "v", "b", "n", "m"].map((k) => (
              <Key key={k} char={k} />
            ))}
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/60 text-xs">
              <X className="w-3 h-3" />
            </div>
          </div>
          <div className="flex gap-1 justify-center px-1.5 pb-2">
            <div className="flex-1 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white text-[10px]">
              123
            </div>
            <div className="flex-4 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/40 text-[10px]">
              space
            </div>
            <div className="flex-1 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white text-[10px]">
              return
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIChat;
