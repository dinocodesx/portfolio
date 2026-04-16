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
} from "lucide-react";

export const SuggestionCard: React.FC<{ icon: ReactNode; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className="shrink-0 w-35 bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-2 hover:bg-white/10 transition-colors cursor-pointer">
      <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center text-white/60">
        {icon}
      </div>
      <p className="text-white/80 text-[10px] leading-tight font-medium line-clamp-3">
        {text}
      </p>
    </div>
  );
};

const AIHome: React.FC<{ onStartChat: () => void }> = ({ onStartChat }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatHistory = [
    "Birthday surprise ideas",
    "Affordable game night",
    "Tiny dragon image gen",
    "React motion tutorial",
    "Healthy dinner recipes",
    "Travel itinerary for Japan",
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-black/60 z-60"
          />
        )}
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 left-0 w-[80%] h-full bg-[#121212] z-70 pl-5 pr-4 pt-12 pb-6 border-r border-white/5 flex flex-col rounded-l-3xl"
          >
            <div className="flex items-center justify-between mb-8 pr-2">
              <span className="text-white font-medium text-base tracking-tight">
                Menu
              </span>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
              <nav className="space-y-2">
                {[
                  {
                    label: "Chats",
                    icon: <MessageSquare className="w-4 h-4" />,
                  },
                  {
                    label: "Settings",
                    icon: <Settings className="w-4 h-4" />,
                  },
                  {
                    label: "Starred Chats",
                    icon: <Star className="w-4 h-4" />,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-white/60 hover:text-white cursor-pointer py-1.5 text-[13px] transition-colors font-medium"
                  >
                    <span className="text-white/30">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </nav>

              <div className="space-y-2 pt-1">
                <h3 className="text-white/30 text-[9px] uppercase tracking-widest font-bold ml-1">
                  Recent Chats
                </h3>
                <div className="space-y-0.5">
                  {chatHistory.map((chat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-white/50 hover:text-white cursor-pointer py-2 px-2 -ml-1 rounded-xl hover:bg-white/5 text-[11px] transition-all group"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                      <span className="truncate">{chat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                  <img
                    src="https://picsum.photos/seed/chris/100/100"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[11px] font-medium truncate">
                    Chris Anderson
                  </p>
                  <p className="text-white/40 text-[9px] truncate">Free Plan</p>
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
        className="w-full h-full bg-linear-to-b from-[#2a52be] via-[#1a2a6c] to-black p-4 pt-14 flex flex-col"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20">
            <img
              src="https://picsum.photos/seed/chris/100/100"
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-6 mt-10">
          <h1 className="text-white text-xl font-medium tracking-tight">
            Good morning,
          </h1>
          <h1 className="text-white text-xl font-medium tracking-tight">
            Chris
          </h1>
        </div>

        <div className="mt-auto space-y-4 pb-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
            <SuggestionCard
              icon={<Sparkles className="w-4 h-4" />}
              text="Unique and Fun Birthday Surprise Ideas"
            />
            <SuggestionCard
              icon={<Gamepad2 className="w-4 h-4" />}
              text="Epic and Affordable Game Night for Five Friends!"
            />
            <SuggestionCard
              icon={<Search className="w-4 h-4" />}
              text="Best hidden gems in Tokyo for 2024"
            />
            <SuggestionCard
              icon={<Users className="w-4 h-4" />}
              text="How to build a high-performing team"
            />
          </div>

          <div className="relative group px-0.5" onClick={onStartChat}>
            <div className="w-full h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center px-4 text-white/40 text-[10px] cursor-pointer hover:bg-white/10 transition-colors">
              Tap here to start work with Syncra
            </div>
            <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8.5 h-8.5 bg-[#0055ff] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIHome;
