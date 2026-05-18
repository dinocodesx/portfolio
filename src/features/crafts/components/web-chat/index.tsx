import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { MacbookMockup } from "../../mockup/MacbookMockup";
import { WebChatSidebar, WebChatInterface } from "./WebChatUI";
import { containerVariants, itemVariants } from "../../../../constants/animations";

export function WebChat() {
  return (
    <div className="min-h-screen flex flex-col items-center p-2 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl space-y-16"
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
                Syncra Web Experience
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A high-fidelity <span className="text-white">desktop chat interface</span>. 
                This design leverages wide-screen ergonomics, featuring a persistent 
                navigation sidebar, glassmorphic headers, and a clean, centered 
                conversation flow. 
              </p>
              <p>
                Presented within a <span className="text-white">MacBook mockup</span> to 
                simulate the end-user environment, ensuring that proportions and visual 
                weight feel grounded in real-world usage.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[65vw] lg:ml-[calc(-32.5vw+50%)] min-h-150 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
            >
              <MacbookMockup>
                <div className="flex h-full w-full">
                  <WebChatSidebar />
                  <WebChatInterface />
                </div>
              </MacbookMockup>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The interface uses a <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">popLayout</code> for 
                message entry and a custom scrollbar implementation to maintain 
                the minimalist aesthetic. Every surface uses a 5% white border 
                to define boundaries without adding visual clutter.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
