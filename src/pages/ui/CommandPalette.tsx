import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Search,
  Command,
  Sparkles,
  History,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

export function CommandPalette() {
  const [searchValue, setSearchValue] = useState("");

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
                Command Palette
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                Reimagining the <span className="text-white">entry point</span>{" "}
                for information retrieval. From a space-saving expanding icon to
                a comprehensive command-style search bar.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-100 md:min-h-125 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-20 p-8 md:p-12 overflow-hidden"
            >
              {/* 2. Command Palette Style */}
              <div className="flex flex-col items-center gap-6 w-full max-w-lg">
                <div className="w-full bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                    <Search className="w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search or type a command..."
                      className="bg-transparent border-none outline-none text-white text-[15px] w-full placeholder:text-white/20"
                    />
                    <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/40 font-mono">
                      <Command className="w-2.5 h-2.5" />K
                    </div>
                  </div>

                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2">
                      <p className="text-[11px] font-medium text-white/20 uppercase tracking-wider">
                        Recent Searches
                      </p>
                    </div>
                    <button className="flex items-center justify-between w-full px-3 py-2 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors group">
                      <div className="flex items-center gap-3">
                        <History className="w-4 h-4 opacity-30" />
                        Performance optimization
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-40 transition-opacity" />
                    </button>
                    <button className="flex items-center justify-between w-full px-3 py-2 rounded-xl hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors group">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-4 h-4 opacity-30" />
                        AI design patterns
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-40 transition-opacity" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The command palette approach integrates{" "}
                <span className="text-white">contextual suggestions</span> and
                keyboard accessibility, making it the preferred pattern for
                power-user interfaces. The expanding search bar provides a{" "}
                <span className="text-white">minimal footprint</span> for
                secondary navigation areas.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
