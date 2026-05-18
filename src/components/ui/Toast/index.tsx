import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, AlertCircle, Info, Terminal } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "system";

interface ToastProps {
  type?: ToastType;
  title: string;
  message: string;
  onRemove: () => void;
  duration?: number;
}

export function Toast({
  type = "info",
  title,
  message,
  onRemove,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onRemove, duration);
    return () => clearTimeout(timer);
  }, [onRemove, duration]);

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    error: <AlertCircle className="w-4 h-4 text-red-400" />,
    info: <Info className="w-4 h-4 text-blue-400" />,
    system: <Terminal className="w-4 h-4 text-white/60" />,
  };

  return (
    <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex gap-3 group relative overflow-hidden">
      <div className="mt-0.5 shrink-0">{icons[type]}</div>
      <div className="flex-1 space-y-1">
        <h4 className="text-[13px] font-medium text-white leading-none">
          {title}
        </h4>
        <p className="text-[12px] text-white/50 leading-tight">{message}</p>
      </div>
      <button
        onClick={onRemove}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 -mr-1 -mt-1 hover:bg-white/5 rounded-lg text-white/20 hover:text-white"
      >
        <X className="w-3 h-3" />
      </button>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 origin-left"
      />
    </div>
  );
}
