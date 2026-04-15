import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  Apple,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IPhoneMockup } from "../../components/mockup/IPhoneMockup";
import { containerVariants, itemVariants } from "../../constants/animations";

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
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full bg-[#0a0a0b] flex flex-col p-6 pt-16">
      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-white text-xl font-semibold tracking-tight">
          Syncra AI
        </h2>
        <p className="text-white/40 text-[11px] mt-1">
          {mode === "login"
            ? "Welcome back to the future"
            : "Start your journey today"}
        </p>
      </div>

      <div className="space-y-3">
        {/* Social Auth */}
        <div className="grid grid-cols-3 gap-2">
          <button className="flex items-center justify-center h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <GoogleIcon />
          </button>
          <button className="flex items-center justify-center h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Apple className="w-4 h-4 text-white" />
          </button>
          <button className="flex items-center justify-center h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Github className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="relative flex items-center py-2">
          <div className="grow border-t border-white/5"></div>
          <span className="shrink mx-4 text-[9px] text-white/20 uppercase tracking-widest font-bold">
            or email
          </span>
          <div className="grow border-t border-white/5"></div>
        </div>

        {/* Form */}
        <div className="space-y-2.5">
          {mode === "register" && (
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-xs outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/20"
              />
            </div>
          )}
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-xs outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/20"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 pr-10 text-white text-xs outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/20"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/40 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-3.5 h-3.5" />
              ) : (
                <Eye className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        <button className="w-full h-11 bg-blue-600 text-white rounded-xl text-xs font-semibold mt-4 hover:bg-blue-500 transition-colors active:scale-[0.98] flex items-center justify-center gap-2">
          {mode === "login" ? "Sign In" : "Create Account"}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="text-center mt-6">
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-[11px] text-white/40 hover:text-white transition-colors"
          >
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <span className="text-blue-500 font-medium">Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-blue-500 font-medium">Sign In</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-auto text-center pb-4">
        <p className="text-[9px] text-white/20 leading-relaxed">
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

// --- Main Page ---

export function MobileAuth() {
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
                Onboarding Experience . April 2026
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A seamless{" "}
                <span className="text-white">authentication experience</span>{" "}
                for mobile. Features integrated social login providers, clear
                state transitions between login and registration, and a focus on
                high-density input fields for smaller screens.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-[50vw] lg:ml-[calc(-25vw+50%)] min-h-175 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 overflow-hidden"
            >
              <IPhoneMockup>
                <AuthScreen />
              </IPhoneMockup>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The flow utilizes{" "}
                <span className="text-white">Syncra's design language</span>:
                deep blacks, subtle borders, and vibrant blue accents. The
                interface is optimized for thumb reach, with the primary action
                button and toggle positioned in the lower half of the screen.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
