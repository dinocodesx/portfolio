import { UiShowcaseLayout } from "@/components/layout";
import { itemVariants } from "@/constants/animations";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Play,
  Plus,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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
    <UiShowcaseLayout
      title="Button Varieties"
      date="April 2026"
      description={
        <p>
          A collection of button patterns exploring{" "}
          <span className="text-white">tactile feedback</span> and{" "}
          <span className="text-white">state transitions</span>. Each variety is
          designed for a specific hierarchy and intent within a minimalist
          system.
        </p>
      }
    >
      {/* Preview Area */}
      <motion.div
        variants={itemVariants}
        className="relative w-full min-h-175 md:min-h-225 bg-[#0A0A0A] border border-white/5 rounded-3xl flex items-center justify-center p-8 md:p-16 overflow-hidden"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 items-center justify-items-center w-full max-w-3xl">
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
                "Save"
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

          {/* 9. Shimmer Effect */}
          <div className="space-y-3 flex flex-col items-center">
            <button className="relative group px-6 py-2.5 bg-white/3 border border-white/5 text-white/80 rounded-full text-sm font-medium overflow-hidden transition-all hover:border-white/20 active:scale-95">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-gradient(to-r, transparent, white/10, transparent) -skew-x-12" />
              Shimmer
            </button>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Motion
            </span>
          </div>

          {/* 10. Skeuomorphic */}
          <div className="space-y-3 flex flex-col items-center">
            <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-sm shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_2px_4px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.1)] hover:bg-[#f5f5f5] active:shadow-inner active:scale-95 transition-all">
              Tactile
            </button>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Skeuo
            </span>
          </div>

          {/* 11. Caution / Warning */}
          <div className="space-y-3 flex flex-col items-center">
            <button className="px-6 py-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 font-medium rounded-full hover:bg-amber-500 hover:text-white transition-all active:scale-95 text-sm">
              Warning
            </button>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Caution
            </span>
          </div>

          {/* 12. Link Style */}
          <div className="space-y-3 flex flex-col items-center">
            <button className="text-white/60 hover:text-white hover:underline underline-offset-4 decoration-white/30 transition-all text-sm font-medium">
              Action Link
            </button>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Inline
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="space-y-6 text-white/60 leading-relaxed max-w-2xl text-[15px]"
      >
        <p>
          The buttons utilize{" "}
          <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
            active:scale-95
          </code>{" "}
          for immediate haptic-like feedback. The async button demonstrates a
          seamless transition between loading and success states, reducing
          jarring UI shifts.
        </p>
      </motion.div>
    </UiShowcaseLayout>
  );
}
