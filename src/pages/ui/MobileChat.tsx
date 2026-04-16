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
  ChevronRight,
  Plus,
  Github,
  Apple,
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

const AIVoice: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #2a52be 0%, #1a2a6c 50%, #000 100%)",
            "radial-gradient(circle at 80% 70%, #2a52be 0%, #1a2a6c 50%, #000 100%)",
            "radial-gradient(circle at 20% 30%, #2a52be 0%, #1a2a6c 50%, #000 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      {/* Header */}
      <div className="absolute top-14 left-0 w-full text-center z-30">
        <p className="text-white/60 text-[11px] font-medium tracking-wide">
          Voice chat is active
        </p>
      </div>

      {/* 3D-ish Dismorfed Sphere (Blob) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"
          />

          {/* The Blob */}
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              scale: [1, 1.05, 0.95, 1.02, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-32 bg-linear-to-br from-blue-400 via-blue-600 to-blue-900 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.5)] relative z-10"
          />

          {/* Inner Light/Reflection */}
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              x: [-5, 5, -5],
              y: [-5, 5, -5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 w-12 h-12 bg-white/20 blur-md z-20"
          />
        </div>
      </div>

      {/* Close Button */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center z-30">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const AIChatHistory: React.FC<{ onSelectChat: () => void }> = ({
  onSelectChat,
}) => {
  const chats = [
    { id: 1, title: "Motivation letter template", time: "1 hour ago" },
    { id: 2, title: "Weekly dinner planning", time: "21 hours ago" },
    { id: 3, title: "Seven-day healthy meal plan", time: "21 hours ago" },
    { id: 4, title: "Birthday surprise ideas", time: "Yesterday" },
    { id: 5, title: "React motion tutorial", time: "2 days ago" },
    { id: 6, title: "Travel itinerary for Japan", time: "1 week ago" },
    { id: 7, title: "Home workout routine", time: "1 week ago" },
    { id: 8, title: "Budgeting spreadsheet tips", time: "2 weeks ago" },
    { id: 9, title: "Best hiking trails nearby", time: "2 weeks ago" },
    { id: 10, title: "JavaScript closure explanation", time: "3 weeks ago" },
    { id: 11, title: "Gift ideas for coworkers", time: "1 month ago" },
    { id: 12, title: "Morning meditation guide", time: "1 month ago" },
    { id: 13, title: "Project proposal draft", time: "1 month ago" },
    { id: 14, title: "Gardening for beginners", time: "2 months ago" },
    { id: 15, title: "Interview prep questions", time: "2 months ago" },
    { id: 16, title: "Car maintenance checklist", time: "3 months ago" },
    { id: 17, title: "Book recommendations 2024", time: "3 months ago" },
    { id: 18, title: "Learning Python roadmap", time: "4 months ago" },
    { id: 19, title: "Apartment hunting notes", time: "5 months ago" },
    { id: 20, title: "New Year's resolutions", time: "1 year ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-[#0a0a0b] flex flex-col"
    >
      {/* Header */}
      <div className="pt-12 pb-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Menu className="w-4 h-4" />
          </button>
          <h2 className="text-white text-sm font-semibold tracking-tight">
            Chats
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-[#0055ff] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 active:scale-90 transition-transform">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 scrollbar-hide">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex justify-between items-center group cursor-pointer active:opacity-60 transition-opacity py-1"
            onClick={onSelectChat}
          >
            <div className="space-y-0.5">
              <h3 className="text-white text-[13px] font-medium leading-tight">
                {chat.title}
              </h3>
              <p className="text-white/30 text-[11px]">{chat.time}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Auth Components ---
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const AuthScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0a0a0b] flex flex-col p-6 pt-32">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-white text-xl font-semibold tracking-tight">
          Syncra AI
        </h2>
        <p className="text-white/40 text-[11px] mt-1">
          Welcome back to the future
        </p>
      </div>

      <div className="mt-auto w-full space-y-3 mb-6">
        <button className="w-full flex items-center justify-center gap-3 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white text-xs font-medium">
          <GoogleIcon />
          Sign in with Google
        </button>
        <button className="w-full flex items-center justify-center gap-3 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white text-xs font-medium">
          <Apple className="w-4 h-4 text-white" />
          Sign in with Apple
        </button>
      </div>

      <div className="text-center pb-4">
        <p className="text-[9px] text-white/20 leading-relaxed">
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
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
                LLM Mobile Chat App
              </h1>
              <p className="text-white/40 text-lg">
                Syncra Mobile Experience . April 2026
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <div className="space-y-4">
                <h3 className="text-white font-medium text-xl tracking-tight">
                  Mobile-First AI Chat
                </h3>
                <p>
                  This design prioritizes accessibility, responsiveness, and
                  fluid navigation. It uses deep gradients and subtle
                  glassmorphism to create a native, premium feel, focusing on
                  genuine mobile interaction models and ergonomic thumb-reach
                  optimization.
                </p>
              </div>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[50vw] lg:ml-[calc(-25vw+50%)] min-h-175 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 overflow-hidden mb-12"
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
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <div className="space-y-4">
                <h3 className="text-white font-medium text-xl tracking-tight">
                  App Authentication
                </h3>
                <p>
                  A seamless authentication experience for mobile. Features
                  integrated social login providers, clear state transitions
                  between login and registration, and a focus on high-density
                  input fields for smaller screens.
                </p>
              </div>
            </motion.div>

            {/* Auth Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[50vw] lg:ml-[calc(-25vw+50%)] min-h-175 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 overflow-hidden"
            >
              <IPhoneMockup>
                <AuthScreen />
              </IPhoneMockup>
            </motion.div>

            {/* Voice Preview Area */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 pt-12 text-white/60 leading-relaxed max-w-2xl"
            >
              <div className="space-y-4">
                <h3 className="text-white font-medium text-2xl tracking-tight">
                  Multimodal & Voice Interactions
                </h3>
                <p>
                  The app supports multimodal inputs, including images and
                  document analysis. The Voice Interaction view replaces
                  traditional chat bubbles with a dynamic, abstract orb that
                  responds to speech patterns, offering a seamless, hands-free
                  experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[50vw] lg:ml-[calc(-25vw+50%)] min-h-175 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 overflow-hidden"
            >
              <IPhoneMockup>
                <AIVoice onBack={() => {}} />
              </IPhoneMockup>
            </motion.div>

            {/* Chat History Preview Area */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 pt-12 text-white/60 leading-relaxed max-w-2xl"
            >
              <div className="space-y-4">
                <h3 className="text-white font-medium text-2xl tracking-tight">
                  History & Continuity
                </h3>
                <p>
                  The Chat History view acts as an operational hub for
                  organizing and retrieving past interactions. It features a
                  clean layout, deep search functionality, and full state
                  retention, allowing users to seamlessly resume previous
                  conversations.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[50vw] lg:ml-[calc(-25vw+50%)] min-h-175 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 overflow-hidden"
            >
              <IPhoneMockup>
                <AIChatHistory onSelectChat={() => {}} />
              </IPhoneMockup>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
