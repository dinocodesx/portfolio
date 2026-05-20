import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  Terminal,
} from "lucide-react";
import { itemVariants } from "../../../constants/animations";
import { UiShowcaseLayout } from "../../layout";

type ToastType = "success" | "error" | "info" | "system";

interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

export function Toast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = {
      id,
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
      message: getMessage(type),
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getMessage = (type: ToastType) => {
    switch (type) {
      case "success":
        return "System state synchronized successfully.";
      case "error":
        return "Failed to establish secure connection.";
      case "info":
        return "New firmware update available for download.";
      case "system":
        return "Kernel initialized. Welcome back.";
      default:
        return "";
    }
  };

  return (
    <UiShowcaseLayout
      title="Toast Notifications"
      date="May 2026"
      description={
        <p>
          A notification system exploring{" "}
          <span className="text-white">temporary persistence</span> and{" "}
          <span className="text-white">peripheral awareness</span>. These toasts
          are designed to be informative without disrupting the user's primary
          focus.
        </p>
      }
    >
      {/* Preview Area */}
      <motion.div
        variants={itemVariants}
        className="relative w-full min-h-100 md:min-h-125 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden"
      >
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <button
            onClick={() => addToast("success")}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[13px] text-white/60 hover:text-white transition-all active:scale-95"
          >
            Trigger Success
          </button>
          <button
            onClick={() => addToast("error")}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[13px] text-white/60 hover:text-white transition-all active:scale-95"
          >
            Trigger Error
          </button>
          <button
            onClick={() => addToast("info")}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[13px] text-white/60 hover:text-white transition-all active:scale-95"
          >
            Trigger Info
          </button>
          <button
            onClick={() => addToast("system")}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[13px] text-white/60 hover:text-white transition-all active:scale-95"
          >
            Trigger System
          </button>
        </div>

        {/* Toast Stack - Simulated */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-3 items-end pointer-events-none w-full max-w-xs">
          <AnimatePresence mode="popLayout">
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                className="pointer-events-auto w-full"
              >
                <ToastItem
                  toast={toast}
                  onRemove={() => removeToast(toast.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="space-y-6 text-white/60 leading-relaxed max-w-2xl text-[15px]"
      >
        <p>
          The toast stack uses{" "}
          <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
            popLayout
          </code>{" "}
          to ensure smooth transitions as items are added and removed. Each
          notification features a subtle glassmorphic background to maintain
          legibility over the interface.
        </p>
      </motion.div>
    </UiShowcaseLayout>
  );
}

function ToastItem({
  toast,
  onRemove,
}: {
  toast: ToastMessage;
  onRemove: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onRemove, 5000);
    return () => clearTimeout(timer);
  }, [onRemove]);

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    error: <AlertCircle className="w-4 h-4 text-red-400" />,
    info: <Info className="w-4 h-4 text-blue-400" />,
    system: <Terminal className="w-4 h-4 text-white/60" />,
  };

  return (
    <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex gap-3 group relative overflow-hidden">
      <div className="mt-0.5 shrink-0">{icons[toast.type]}</div>
      <div className="flex-1 space-y-1">
        <h4 className="text-[13px] font-medium text-white leading-none">
          {toast.title}
        </h4>
        <p className="text-[12px] text-white/50 leading-tight">
          {toast.message}
        </p>
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
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 origin-left"
      />
    </div>
  );
}
