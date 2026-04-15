import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Loader2,
  Check,
  ArrowRight,
  Play,
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

export function ButtonCraft() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAsyncAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 1500);
  };

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
                Button Varieties
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A collection of button patterns exploring{" "}
                <span className="text-white">tactile feedback</span> and{" "}
                <span className="text-white">state transitions</span>. Each
                variety is designed for a specific hierarchy and intent within a
                minimalist system.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-150 md:min-h-125 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center w-full max-w-2xl">
                {/* 1. Primary Solid */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all active:scale-95 text-sm">
                    Primary
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Solid
                  </span>
                </div>

                {/* 2. Secondary Outline */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="px-6 py-2.5 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all active:scale-95 text-sm">
                    Secondary
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Outline
                  </span>
                </div>

                {/* 3. Ghost with Icon */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="group flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-all text-sm">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Ghost
                  </span>
                </div>

                {/* 4. Loading/Success State */}
                <div className="space-y-3 flex flex-col items-center">
                  <button
                    onClick={handleAsyncAction}
                    disabled={isLoading || isSuccess}
                    className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all active:scale-95 flex items-center justify-center min-w-30 ${
                      isSuccess
                        ? "bg-green-500/20 text-green-400 border border-green-500/20"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : isSuccess ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Async
                  </span>
                </div>

                {/* 5. Glassmorphic Action */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all active:scale-95 text-sm shadow-xl">
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Preview
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Glass
                  </span>
                </div>

                {/* 6. Icon Only (Plus) */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all active:scale-90 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <Plus className="w-5 h-5" />
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Fab
                  </span>
                </div>

                {/* 7. Delete (Destructive) */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-red-500/10 border border-red-500/20 text-red-500 font-medium rounded-full hover:bg-red-500 hover:text-white transition-all active:scale-95 text-sm group">
                    <Trash2 className="w-4 h-4 group-hover:animate-bounce" />
                    Delete
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Destructive
                  </span>
                </div>

                {/* 8. Complete (Success) */}
                <div className="space-y-3 flex flex-col items-center">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium rounded-full hover:bg-emerald-500 hover:text-white transition-all active:scale-95 text-sm group">
                    <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Complete
                  </button>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Success
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The buttons utilize{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  active:scale-95
                </code>{" "}
                for immediate haptic-like feedback. The async button
                demonstrates a seamless transition between loading and success
                states, reducing jarring UI shifts.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
