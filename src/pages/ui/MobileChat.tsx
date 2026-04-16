import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { IPhoneMockup } from "../../components/mockup/IPhoneMockup";
import { containerVariants, itemVariants } from "../../constants/animations";

// --- Components ---
import AIHome from "../../components/mobile-chat/AIHome";
import AIChat from "../../components/mobile-chat/AIChat";
import AIVoice from "../../components/mobile-chat/AIVoice";
import AIChatHistory from "../../components/mobile-chat/AIChatHistory";
import AuthScreen from "../../components/mobile-chat/AuthScreen";

export function MobileChat() {
  const [view, setView] = useState<"home" | "chat">("home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2 py-24 md:py-32">
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
