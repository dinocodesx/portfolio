import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Search,
  Command as CommandIcon,
  Sparkles,
  History,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../../../constants/animations";

export function CommandPalette() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const openGlobalPalette = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: isMac,
      ctrlKey: !isMac,
      bubbles: true
    });
    window.dispatchEvent(event);
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
                Global Command Palette
              </h1>
              <p className="text-white/40 text-lg">May 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A site-wide <span className="text-white">operational hub</span>. 
                Designed for speed and power, this palette allows for instant 
                navigation across the entire portfolio using just your keyboard.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                  <CommandIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium text-[14px]">Keyboard Shortcut</p>
                  <p className="text-white/40 text-[12px]">
                    Press <code className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">{isMac ? '⌘' : 'Ctrl'} + K</code> from anywhere to trigger.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-100 md:min-h-125 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-8 p-8 md:p-12 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 text-center max-w-sm">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Terminal className="w-10 h-10 text-white/20" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-medium text-lg">Experience the Hub</h3>
                  <p className="text-white/40 text-[14px]">Click the button below or use the shortcut to launch the global command center.</p>
                </div>
                <button
                  onClick={openGlobalPalette}
                  className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  Open Command Palette
                </button>
              </div>

              {/* Animated Rings Decor */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 border border-white/5 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white/5 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The palette features <span className="text-white">fuzzy search</span>, 
                keyboard-driven navigation, and a spring-animated backdrop. It serves 
                as the primary navigation layer for power users, bypassing traditional 
                menu hierarchies for direct-to-destination jumps.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
