import { motion } from "motion/react";
import { ArrowLeft, Sparkles, User } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

export function ChatBubbleCraft() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Sidebar */}
          <motion.div variants={itemVariants}>
            <Link
              to="/ui"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Chat Bubbles
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A study on{" "}
                <span className="text-white">conversational hierarchy</span>.
                Differentiating between human and machine responses through
                color, alignment, and subtle visual cues.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-16/16 bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
            >
              <div className="w-full max-w-lg space-y-8">
                {/* 1. User Bubble */}
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-white/20 uppercase tracking-widest font-medium">
                    You
                    <User className="w-3 h-3" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    className="bg-white text-black px-5 py-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-2xl"
                  >
                    <p className="text-[15px] leading-relaxed font-medium">
                      How can I optimize my React components for better
                      performance?
                    </p>
                  </motion.div>
                </div>

                {/* 2. AI Bubble */}
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-white/20 uppercase tracking-widest font-medium">
                    <Sparkles className="w-3 h-3" />
                    Assistant
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 text-white/80 px-5 py-4 rounded-2xl rounded-tl-none max-w-[90%] shadow-xl"
                  >
                    <div className="space-y-4 text-[15px] leading-relaxed">
                      <p>
                        To optimize React performance, you should focus on three
                        main areas:
                      </p>
                      <ul className="space-y-2 list-disc list-inside text-white/60">
                        <li>
                          Memoization using{" "}
                          <code className="text-white font-mono text-[13px]">
                            useMemo
                          </code>{" "}
                          and{" "}
                          <code className="text-white font-mono text-[13px]">
                            useCallback
                          </code>
                        </li>
                        <li>
                          Code splitting with{" "}
                          <code className="text-white font-mono text-[13px]">
                            React.lazy
                          </code>
                        </li>
                        <li>Optimizing re-renders by stabilizing props</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Typing Indicator (Bonus) */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border border-white/10 rounded-full w-fit">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                    className="w-1.5 h-1.5 bg-white/40 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-1.5 h-1.5 bg-white/40 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-1.5 h-1.5 bg-white/40 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The user bubble uses a{" "}
                <span className="text-white">high-contrast</span> solid
                background to indicate ownership, while the AI response uses a
                subtle border and background to feel integrated but distinct.
                The typing indicator provides essential{" "}
                <span className="text-white">system feedback</span> during
                generation.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
