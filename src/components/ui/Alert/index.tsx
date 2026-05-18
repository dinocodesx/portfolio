import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, ShieldCheck, ShieldIcon, X } from "lucide-react";

export type AlertType = "info" | "success" | "error" | "warning";

interface AlertProps {
  type?: AlertType;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Alert({
  type = "info",
  title,
  children,
  onClose,
  className = "",
}: AlertProps) {
  const icons = {
    info: <ShieldIcon className="w-5 h-5 text-blue-400" />,
    success: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    error: <ShieldAlert className="w-5 h-5 text-red-400" />,
    warning: <ShieldAlert className="w-5 h-5 text-amber-400" />,
  };

  const backgrounds = {
    info: "bg-blue-500/5 border-blue-500/10",
    success: "bg-emerald-500/5 border-emerald-500/10",
    error: "bg-red-500/5 border-red-500/10",
    warning: "bg-amber-500/5 border-amber-500/10",
  };

  return (
    <div
      className={`p-4 rounded-2xl border flex gap-4 relative group ${backgrounds[type]} ${className}`}
    >
      <div className="shrink-0 mt-0.5">{icons[type]}</div>
      <div className="space-y-1 flex-1">
        <h4 className="text-[14px] font-medium text-white">{title}</h4>
        <div className="text-[13px] text-white/40 leading-relaxed">
          {children}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/10 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
