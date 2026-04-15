import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  Command,
  Mail,
  MessageSquare,
  Share2,
  Link2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

export function DropdownCraft() {
  const [showMinimal, setShowMinimal] = useState(false);
  const [showContext, setShowContext] = useState(false);

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
                Dropdown Patterns
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                Exploring two distinct approaches to{" "}
                <span className="text-white">contextual navigation</span>. A
                minimalist selector for primary settings and a dense context
                menu for deep actions.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-100 md:min-h-150 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-12 p-8 md:p-12 overflow-hidden"
            >
              {/* 1. Minimalist Selector */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <button
                    onClick={() => setShowMinimal(!showMinimal)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 hover:text-white transition-all"
                  >
                    <User className="w-4 h-4" />
                    Account
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${showMinimal ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {showMinimal && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        className="absolute top-full left-0 mt-2 bg-[#111] border border-white/10 rounded-xl p-1.5 shadow-2xl min-w-40 z-50"
                      >
                        <button className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                          <Settings className="w-4 h-4 opacity-50" />
                          Settings
                        </button>
                        <button className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                          <Bell className="w-4 h-4 opacity-50" />
                          Notifications
                        </button>
                        <div className="h-px bg-white/5 my-1" />
                        <button className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg hover:bg-red-500/10 text-[13px] text-red-400 transition-colors">
                          <LogOut className="w-4 h-4 opacity-50" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest">
                  Minimalist
                </span>
              </div>

              {/* 2. Context Menu Style */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <button
                    onClick={() => setShowContext(!showContext)}
                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {showContext && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 bg-[#111] border border-white/10 rounded-2xl p-2 shadow-2xl min-w-50 z-50"
                      >
                        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 opacity-50" />
                            Email
                          </div>
                          <span className="text-[11px] text-white/40 font-mono tracking-wider">
                            ⌘E
                          </span>
                        </button>
                        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="w-4 h-4 opacity-50" />
                            Messages
                          </div>
                          <span className="text-[11px] text-white/40 font-mono tracking-wider">
                            ⌘M
                          </span>
                        </button>
                        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                          <div className="flex items-center gap-3">
                            <Link2 className="w-4 h-4 opacity-50" />
                            Copy Link
                          </div>
                          <span className="text-[11px] text-white/40 font-mono tracking-wider">
                            ⌘C
                          </span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest">
                  Contextual
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The contextual dropdown includes{" "}
                <span className="text-white">keyboard shortcut hints</span> and
                section headers to organize high-density information. Both
                components use{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  AnimatePresence
                </code>{" "}
                for smooth entry and exit transitions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
