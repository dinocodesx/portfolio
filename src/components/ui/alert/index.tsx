import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ShieldIcon,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  containerVariants,
  itemVariants,
} from "../../../constants/animations";

import { AlertType } from "../../../types";

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

export function AlertShowcase() {
  const [activeAlert, setActiveAlert] = useState<AlertType | null>(null);

  const alertData = {
    info: {
      title: "System Optimization",
      content:
        "We've detected that your workspace could be optimized for faster response times. Enable the new caching layer in settings.",
    },
    success: {
      title: "Secure Connection Established",
      content:
        "All data transmission is now encrypted using end-to-end industry standards. Your session is protected.",
    },
    warning: {
      title: "Database Migration Required",
      content:
        "Your current database schema is outdated. Update to avoid potential data inconsistency during high-density operations.",
    },
    error: {
      title: "Deployment Failed",
      content:
        "The latest build could not be deployed due to a configuration mismatch in the kernel environment.",
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-2 py-24 md:py-32">
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
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-[15px]"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Reactive Alert Systems
              </h1>
              <p className="text-white/40 text-lg">May 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A study on{" "}
                <span className="text-white">critical communication</span>.
                Unlike toasts, these alerts are designed for inline persistence.
                Click the triggers below to see how different system states are
                communicated.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-100 md:min-h-125 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-12">
                {(["info", "success", "warning", "error"] as AlertType[]).map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => setActiveAlert(type)}
                      className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all active:scale-95 border ${
                        activeAlert === type
                          ? "bg-white text-black border-white"
                          : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:border-white/20"
                      }`}
                    >
                      Trigger {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ),
                )}
              </div>

              <div className="w-full max-w-lg min-h-32 flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {activeAlert ? (
                    <motion.div
                      key={activeAlert}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-full"
                    >
                      <Alert
                        type={activeAlert}
                        title={alertData[activeAlert].title}
                        onClose={() => setActiveAlert(null)}
                      >
                        {alertData[activeAlert].content}
                        {activeAlert === "warning" && (
                          <div className="pt-3">
                            <button className="text-[12px] font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                              Run Diagnostics Now
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                →
                              </motion.span>
                            </button>
                          </div>
                        )}
                      </Alert>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center gap-4 text-white/10"
                    >
                      <ShieldIcon className="w-12 h-12 stroke-[1px]" />
                      <p className="text-[13px] font-medium uppercase tracking-[0.2em]">
                        System Standby
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {activeAlert && (
                  <button
                    onClick={() => setActiveAlert(null)}
                    className="absolute -bottom-12 p-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-95"
                    title="Clear Alert"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The alerts use a{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  AnimatePresence
                </code>{" "}
                wrapper to handle state changes smoothly. This pattern is ideal
                for <span className="text-white">inline feedback</span> where
                the component needs to occupy space while providing critical
                system updates.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

