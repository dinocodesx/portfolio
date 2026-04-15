import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  MoreHorizontal,
  Send,
  Mic,
  ChevronLeft,
  X,
  Menu,
  MessageSquare,
  Sparkles,
  Gamepad2,
  Users,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IPhoneMockup } from "../../components/mockup/IPhoneMockup";
import { containerVariants, itemVariants } from "../../constants/animations";

// --- Components ---

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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 bg-black/60 z-60"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 w-[80%] h-full bg-[#121212] z-70 p-6 pt-16 border-r border-white/5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-white font-medium text-sm">Menu</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-white/40 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-8 scrollbar-hide">
                <nav className="space-y-4">
                  {[
                    {
                      label: "Syncra Pro",
                      icon: <Sparkles className="w-4 h-4" />,
                    },
                    {
                      label: "Settings",
                      icon: <MoreHorizontal className="w-4 h-4" />,
                    },
                    { label: "Profile", icon: <Users className="w-4 h-4" /> },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-white/60 hover:text-white cursor-pointer py-2 text-xs transition-colors"
                    >
                      <span className="text-white/30">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </nav>

                <div className="space-y-4">
                  <h3 className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
                    Recent Chats
                  </h3>
                  <div className="space-y-1">
                    {chatHistory.map((chat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-white/50 hover:text-white cursor-pointer py-2.5 px-3 rounded-xl hover:bg-white/5 text-[11px] transition-all group"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-white/20 group-hover:text-blue-500 transition-colors" />
                        <span className="truncate">{chat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/5 border border-white/10">
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
                    <p className="text-white/40 text-[9px] truncate">
                      Free Plan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
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

const SuggestionCard: React.FC<{ icon: ReactNode; text: string }> = ({
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

const Key: React.FC<{ char: string }> = ({ char }) => {
  return (
    <div className="w-6 h-8 bg-white/10 rounded-md flex items-center justify-center text-white text-base font-light active:bg-white/30 transition-colors">
      {char}
    </div>
  );
};

// --- Main Page ---

export function MobileChat() {
  const [view, setView] = useState<"home" | "chat">("home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-16 md:py-24">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
          {/* Sidebar */}
          <motion.div variants={itemVariants}>
            <Link
              to="/ui"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-base"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Button Varieties
              </h1>
              <p className="text-white/40 text-lg">
                Syncra Mobile Experience . April 2026
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A high-fidelity <span className="text-white">mobile-first</span>{" "}
                AI interface. Designed for one-handed use with deep gradients,
                glassmorphism, and smooth transitions that mimic native iOS
                behavior.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[50vw] lg:ml-[calc(-25vw+50%)] min-h-175 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 overflow-hidden"
            >
              <IPhoneMockup>
                <AnimatePresence mode="wait">
                  {view === "home" ? (
                    <AIHome key="home" onStartChat={() => setView("chat")} />
                  ) : (
                    <AIChat key="chat" onBack={() => setView("home")} />
                  )}
                </AnimatePresence>
              </IPhoneMockup>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The mockup features a{" "}
                <span className="text-white">Dynamic Island</span> and a custom
                iOS-style keyboard. The interaction model prioritizes
                accessibility, with primary actions located in the lower third
                of the screen for optimal thumb reach.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
