import React from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

const AIVoice: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #2a52be 0%, #1a2a6c 50%, #000 100%)",
            "radial-gradient(circle at 80% 70%, #2a52be 0%, #1a2a6c 50%, #000 100%)",
            "radial-gradient(circle at 20% 30%, #2a52be 0%, #1a2a6c 50%, #000 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      {/* Header */}
      <div className="absolute top-14 left-0 w-full text-center z-30">
        <p className="text-white/60 text-[11px] font-medium tracking-wide">
          Voice chat is active
        </p>
      </div>

      {/* 3D-ish Dismorfed Sphere (Blob) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"
          />

          {/* The Blob */}
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              scale: [1, 1.05, 0.95, 1.02, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-32 bg-linear-to-br from-blue-400 via-blue-600 to-blue-900 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.5)] relative z-10"
          />

          {/* Inner Light/Reflection */}
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              x: [-5, 5, -5],
              y: [-5, 5, -5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 w-12 h-12 bg-white/20 blur-md z-20"
          />
        </div>
      </div>

      {/* Close Button */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center z-30">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default AIVoice;
