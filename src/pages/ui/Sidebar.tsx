import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Search,
  Settings,
  User,
  ChevronRight,
  Plus,
  MessageSquare,
  Clock,
  Folder,
  PanelLeft,
  Command,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 16 }}
            exit={{ opacity: 0, scale: 0.95, x: 10 }}
            className="absolute left-full ml-2 px-2.5 py-1 bg-white text-black text-[11px] font-medium rounded-md whitespace-nowrap z-100 shadow-xl pointer-events-none"
          >
            {text}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SidebarCraft() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl space-y-16"
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
                Sidebar Architectures
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A refined{" "}
                <span className="text-white">conversational architecture</span>{" "}
                designed for high-density chat applications. This sidebar
                prioritizes organization through pinned folders and quick access
                to recent history, while maintaining a minimalist footprint.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-16/18 bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-4 h-full">
                <motion.div
                  animate={{ width: isCollapsed ? "72px" : "288px" }}
                  className="h-200 bg-[#111] border border-white/10 rounded-xl flex flex-col shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  {/* Header */}
                  <div className="p-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Command className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex items-center gap-1">
                      {!isCollapsed && (
                        <Tooltip text="New Chat">
                          <button className="p-1.5 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </Tooltip>
                      )}
                      <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1.5 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors"
                      >
                        <PanelLeft
                          className={`w-4 h-4 transition-transform duration-500 ${isCollapsed ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="px-4 py-4">
                    <div className="relative group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-white/60 transition-colors" />
                      <input
                        type="text"
                        placeholder={isCollapsed ? "" : "Search chats..."}
                        disabled={isCollapsed}
                        className="w-full bg-white/5 border border-white/5 rounded-lg py-1.5 pl-9 pr-3 text-[12px] text-white outline-none focus:border-white/10 transition-all placeholder:text-white/20 disabled:cursor-default"
                      />
                    </div>
                  </div>

                  {/* Nav Content */}
                  <div className="flex-1 overflow-y-auto px-2 space-y-4">
                    {/* Create Folder Action */}
                    <div className="px-1">
                      <Tooltip text="Create Folder">
                        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5 text-[13px] text-white/40 hover:text-white transition-all border border-dashed border-white/5 hover:border-white/10">
                          <Plus className="w-4 h-4 shrink-0" />
                          {!isCollapsed && <span>Create Folder</span>}
                        </button>
                      </Tooltip>
                    </div>

                    {/* Pinned Folders */}
                    <div className="space-y-1">
                      {!isCollapsed && (
                        <div className="px-3 py-1 flex items-center justify-between group">
                          <span className="text-[10px] font-medium text-white/20 uppercase tracking-wider">
                            Pinned Folders
                          </span>
                        </div>
                      )}

                      <div className="space-y-0.5">
                        <Tooltip text="Research">
                          <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors group">
                            <div className="flex items-center gap-3">
                              <Folder className="w-4 h-4 text-blue-400/50 shrink-0" />
                              {!isCollapsed && <span>Research</span>}
                            </div>
                            {!isCollapsed && (
                              <span className="text-[10px] text-white/20">
                                4
                              </span>
                            )}
                          </button>
                        </Tooltip>
                        <Tooltip text="Project X">
                          <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors group">
                            <div className="flex items-center gap-3">
                              <Folder className="w-4 h-4 text-blue-400/50 shrink-0" />
                              {!isCollapsed && <span>Project X</span>}
                            </div>
                            {!isCollapsed && (
                              <span className="text-[10px] text-white/20">
                                12
                              </span>
                            )}
                          </button>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Recent Chats */}
                    <div className="space-y-1">
                      {!isCollapsed && (
                        <div className="px-3 py-1">
                          <span className="text-[10px] font-medium text-white/20 uppercase tracking-wider">
                            Recent
                          </span>
                        </div>
                      )}

                      <div className="space-y-0.5">
                        <Tooltip text="Performance optimization">
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 text-[13px] text-white transition-colors">
                            <MessageSquare className="w-4 h-4 text-blue-400 shrink-0" />
                            {!isCollapsed && (
                              <span className="truncate">
                                Performance optimization
                              </span>
                            )}
                          </button>
                        </Tooltip>

                        <Tooltip text="AI design patterns">
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                            <MessageSquare className="w-4 h-4 opacity-30 shrink-0" />
                            {!isCollapsed && (
                              <span className="truncate">
                                AI design patterns
                              </span>
                            )}
                          </button>
                        </Tooltip>

                        <Tooltip text="React state management">
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors">
                            <MessageSquare className="w-4 h-4 opacity-30 shrink-0" />
                            {!isCollapsed && (
                              <span className="truncate">
                                React state management
                              </span>
                            )}
                          </button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>

                  {/* History Button (Moved above footer) */}
                  <div className="px-3 py-2 border-t border-white/5">
                    <Tooltip text="View History">
                      <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-[13px] text-white/60 hover:text-white transition-all group">
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 opacity-50 shrink-0" />
                          {!isCollapsed && <span>View History</span>}
                        </div>
                        {!isCollapsed && (
                          <ChevronRight className="w-3.5 h-3.5 opacity-30 group-hover:translate-x-0.5 transition-transform" />
                        )}
                      </button>
                    </Tooltip>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto p-4 border-t border-white/5 flex items-center justify-between bg-[#0D0D0D]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      {!isCollapsed && (
                        <div className="flex flex-col">
                          <span className="text-[12px] font-medium text-white leading-none">
                            Guest User
                          </span>
                          <span className="text-[10px] text-white/40">
                            Free Plan
                          </span>
                        </div>
                      )}
                    </div>
                    {!isCollapsed && (
                      <Tooltip text="Settings">
                        <button className="p-2 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors">
                          <Settings className="w-4 h-4" />
                        </button>
                      </Tooltip>
                    )}
                  </div>
                </motion.div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest">
                  Conversational Architecture
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The sidebars utilize{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  overflow-y-auto
                </code>{" "}
                for scrollable content and{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  AnimatePresence
                </code>{" "}
                for collapsible sections. This conversational version
                prioritizes chat history and quick actions with a collapsible
                state for maximum focus.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
