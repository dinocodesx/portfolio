import React from "react";
import { motion } from "motion/react";
import { 
  Search, 
  MessageSquare, 
  Settings, 
  Plus, 
  User,
  History,
  LayoutDashboard
} from "lucide-react";

export function WebChatSidebar() {
  const menuItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: "Dashboard" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Chat", active: true },
    { icon: <History className="w-4 h-4" />, label: "History" },
    { icon: <Settings className="w-4 h-4" />, label: "Settings" },
  ];

  const recentChats = [
    "Quantum Computing Basics",
    "Neural Network Architecture",
    "Product Design Review",
    "Weekend Project Ideas",
  ];

  return (
    <div className="w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col h-full">
      {/* Search */}
      <div className="p-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white/60 transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-white/5 border border-white/5 rounded-xl py-2 pl-9 pr-3 text-[13px] text-white outline-none focus:border-white/10 transition-colors"
          />
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex-1 px-3 space-y-1 py-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] transition-all group ${
              item.active 
                ? "bg-white/10 text-white" 
                : "text-white/40 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className={item.active ? "text-white" : "text-white/40 group-hover:text-white transition-colors"}>
              {item.icon}
            </div>
            {item.label}
          </button>
        ))}

        <div className="pt-8 pb-4 px-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-white/20 uppercase tracking-widest">Recent</span>
          <button className="text-white/20 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {recentChats.map((chat) => (
          <button
            key={chat}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] text-white/40 hover:text-white hover:bg-white/5 transition-all text-left truncate"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0 opacity-20" />
            <span className="truncate">{chat}</span>
          </button>
        ))}
      </div>

      {/* Profile */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
            <User className="w-4 h-4 text-white/60" />
          </div>
          <div className="text-left">
            <div className="text-[13px] font-medium text-white">Rishi</div>
            <div className="text-[11px] text-white/20">Pro Member</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export function WebChatInterface() {
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "Hello! How can I assist you with your project today?" },
    { role: "user", content: "I need to design a high-availability URL shortener. What should I focus on?" },
    { role: "assistant", content: "That's a great project! For high availability, you should focus on: \n\n1. **Base62 Encoding** for short URLs\n2. **Consistent Hashing** for database partitioning\n3. **Redis Caching** for hot URLs\n4. **Database Replication** to prevent single points of failure." },
  ]);

  return (
    <div className="flex-1 flex flex-col bg-black relative">
      {/* Header */}
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="text-[15px] font-medium text-white">Project Design Review</div>
          <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">GPT-4o</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-full border border-white/10 text-[12px] text-white/60 hover:text-white hover:bg-white/5 transition-all">
            Share
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 max-w-4xl mx-auto w-full">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex gap-6 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              msg.role === "assistant" ? "bg-white/10 border-white/10" : "bg-white text-black border-white"
            }`}>
              {msg.role === "assistant" ? <LayoutDashboard className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`flex-1 space-y-2 ${msg.role === "user" ? "text-right" : ""}`}>
              <div className="text-[11px] font-bold text-white/20 uppercase tracking-widest">
                {msg.role}
              </div>
              <div className={`text-[15px] leading-relaxed ${msg.role === "user" ? "text-white/80" : "text-white/60"}`}>
                {msg.content.split('\n').map((line, j) => (
                  <p key={j} className={line.startsWith('**') ? 'mt-4 font-medium text-white' : ''}>{line}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-8 pt-0">
        <div className="max-w-3xl mx-auto w-full relative">
           <div className="bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl focus-within:border-white/20 transition-all flex flex-col gap-4">
            <textarea 
              placeholder="Message GPT-4o..."
              className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/20 resize-none h-12 text-[15px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-white/5 text-white/20 hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="px-4 py-1.5 bg-white text-black rounded-full text-[13px] font-semibold hover:bg-white/90 transition-all">
                Send
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-[11px] text-white/10">GPT-4o can make mistakes. Check important info.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
