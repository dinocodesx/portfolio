import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Menu,
  MessageSquare,
  Sparkles,
  Gamepad2,
  Users,
  Search,
  Mic,
  Settings,
  Star,
  Plus
} from "lucide-react";

export const SuggestionCard: React.FC<{ icon: ReactNode; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className="shrink-0 w-36 bg-[#0A0A0A] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 hover:bg-white/5 transition-all cursor-pointer group active:scale-95">
      <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
        {icon}
      </div>
      <p className="text-white/60 text-[11px] leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
};

const AIHome: React.FC<{ onStartChat: () => void }> = ({ onStartChat }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatHistory = [
    "Quantum Computing Basics",
    "Neural Network Architecture",
    "Product Design Review",
    "Weekend Project Ideas",
  ];

  return (
    <div className="relative w-full h-full overflow-hidden bg-black font-sans">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-60"
          />
        )}
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 left-0 w-[85%] h-full bg-[#0A0A0A] z-70 px-6 pt-16 pb-8 border-r border-white/5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-white font-bold text-lg tracking-tighter uppercase italic">Syncra</span>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 scrollbar-hide">
              <nav className="space-y-1">
                {[
                  { label: "New Chat", icon: <Plus className="w-4 h-4" />, highlight: true },
                  { label: "History", icon: <History className="w-4 h-4" /> },
                  { label: "Settings", icon: <Settings className="w-4 h-4" /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all cursor-pointer group ${
                      item.highlight ? "bg-white text-black" : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={item.highlight ? "text-black" : "text-white/20 group-hover:text-white transition-colors"}>
                      {item.icon}
                    </span>
                    <span className="text-[14px] font-semibold">{item.label}</span>
                  </div>
                ))}
              </nav>

              <div className="space-y-4 pt-4">
                <h3 className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold px-3">
                  Recent
                </h3>
                <div className="space-y-1">
                  {chatHistory.map((chat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-white/40 hover:text-white cursor-pointer py-3 px-3 rounded-xl hover:bg-white/5 text-[13px] transition-all group"
                    >
                      <MessageSquare className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span className="truncate font-medium">{chat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 text-white font-bold italic">
                  R
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[13px] font-bold tracking-tight">Rishi</p>
                  <p className="text-white/20 text-[10px] font-medium uppercase tracking-widest">Pro Member</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full p-6 pt-16 flex flex-col relative"
      >
        {/* Ambient Gradient */}
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[60%] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-16 relative z-10">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
            <img
              src="https://picsum.photos/seed/rishi/100/100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <p className="text-white/20 text-[12px] font-bold uppercase tracking-[0.3em]">Syncra Studio</p>
          <h1 className="text-white text-3xl font-bold tracking-tighter leading-none">
            Welcome back,<br />Rishi
          </h1>
        </div>

        <div className="mt-auto space-y-6 pb-4 relative z-10">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 pb-2">
            <SuggestionCard
              icon={<Sparkles className="w-4 h-4" />}
              text="Analyze neural network architecture patterns"
            />
            <SuggestionCard
              icon={<Gamepad2 className="w-4 h-4" />}
              text="Generate complex system design diagrams"
            />
            <SuggestionCard
              icon={<Search className="w-4 h-4" />}
              text="Search global database for optimization"
            />
          </div>

          <div className="relative group" onClick={onStartChat}>
            <div className="w-full h-14 bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center px-6 text-white/20 text-[13px] font-medium cursor-pointer hover:bg-white/5 transition-all focus-within:border-white/20">
              Message Syncra...
            </div>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center shadow-2xl transition-transform active:scale-90">
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function History({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

export default AIHome;
