import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Sparkles,
  PenLine,
  Lightbulb,
  Code,
  LineChart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../../../constants/animations";
import AIChat from "../../mobile-chat/AIChat";

const QUICK_ACTIONS = [
  {
    icon: <PenLine className="w-4 h-4" />,
    label: "Help me write",
    description: "an email to my boss",
  },
  {
    icon: <Lightbulb className="w-4 h-4" />,
    label: "Brainstorm",
    description: "names for a new product",
  },
  {
    icon: <Code className="w-4 h-4" />,
    label: "Code",
    description: "a simple React component",
  },
  {
    icon: <LineChart className="w-4 h-4" />,
    label: "Analyze data",
    description: "from a CSV file",
  },
];

export function WebChat() {
  const [inputValue, setInputValue] = useState("");
  const [hasStartedChat, setHasStartedChat] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      setHasStartedChat(true);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col overflow-hidden">
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative min-w-0">
        {/* Model Selection (Floating) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#171717] p-1 rounded-xl border border-white/5 z-50">
          <button className="px-4 py-1.5 rounded-lg bg-white/10 text-[13px] font-medium shadow-sm">
            GPT-4o
          </button>
          <button className="px-4 py-1.5 rounded-lg hover:bg-white/5 text-[13px] font-medium text-white/40 transition-colors">
            o1-preview
          </button>
        </div>

        {/* Back Button */}
        <Link
          to="/ui"
          className="absolute top-6 left-6 z-50 p-2 hover:bg-white/5 rounded-lg transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
        </Link>

        {/* Chat Content */}
        <div className={`flex-1 flex flex-col items-center px-4 overflow-y-auto ${!hasStartedChat ? "justify-center" : "justify-start"}`}>
          {!hasStartedChat ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-2xl space-y-12 mb-20"
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-white/10">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  What can I help you with today?
                </h1>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {QUICK_ACTIONS.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputValue(action.label + " " + action.description);
                    }}
                    className="p-4 rounded-2xl bg-transparent border border-white/10 hover:bg-white/5 transition-all text-left group relative overflow-hidden"
                  >
                    <div className="text-white/40 group-hover:text-white transition-colors mb-2">
                      {action.icon}
                    </div>
                    <div className="text-[14px] font-medium text-white/80 group-hover:text-white transition-colors">
                      {action.label}
                    </div>
                    <div className="text-[13px] text-white/30 group-hover:text-white/50 transition-colors">
                      {action.description}
                    </div>
                  </button>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <div className="w-full max-w-3xl h-full">
               <AIChat showHeader={false} showKeyboard={false} />
            </div>
          )}
        </div>

        {/* Chat Input Wrapper (Only shown before chat starts) */}
        {!hasStartedChat && (
          <div className="w-full max-w-3xl mx-auto px-4 pb-8 pt-4">
            <div className="relative bg-[#171717] border border-white/10 rounded-[28px] focus-within:border-white/20 transition-all p-2 pr-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-1 px-3">
                <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white">
                    <ArrowLeft className="w-5 h-5 rotate-90" />
                </button>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Message GPT-4o"
                  className="flex-1 bg-transparent border-none outline-none text-white py-4 px-2 text-[16px] placeholder:text-white/20"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    inputValue.trim()
                      ? "bg-white text-black scale-100"
                      : "bg-white/5 text-white/20 scale-95"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5 -rotate-90" />
                </button>
              </div>
            </div>
            <p className="text-center text-[11px] text-white/20 mt-3">
              GPT can make mistakes. Check important info.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
