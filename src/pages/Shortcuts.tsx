import React, { useState, useEffect } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { SidebarLink } from "../components/layout/SidebarLink";
import { SEO } from "../components/layout/SEO";
import { Keyboard } from "../components/ui/keyboard/Keyboard";
import { shortcuts } from "../data/shortcuts";
import { motion, AnimatePresence } from "motion/react";
import { itemVariants } from "../constants/animations";

export function Shortcuts() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKey(e.key);
    };
    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const categories = ["All", ...new Set(shortcuts.map((s) => s.category))];
  const filteredShortcuts = selectedCategory === "All" 
    ? shortcuts 
    : shortcuts.filter((s) => s.category === selectedCategory);

  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO 
        title="Shortcuts | Debarshee Chakraborty" 
        description="Keyboard shortcuts for navigating the portfolio of Debarshee Chakraborty." 
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        <div className="space-y-12">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Keyboard Shortcuts</h1>
            <p className="text-white/40 text-sm max-w-xl leading-relaxed">
              Experience the site at full speed. Use these physical keys to navigate instantly between sections.
            </p>
          </motion.div>

          {/* Keyboard Component */}
          <motion.div variants={itemVariants} className="w-full overflow-hidden">
            <Keyboard shortcuts={shortcuts} activeKey={activeKey} />
          </motion.div>

          {/* Shortcuts List Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all duration-200 border ${
                    selectedCategory === cat
                      ? "bg-white text-black border-white"
                      : "bg-white/5 text-white/40 border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <AnimatePresence mode="popLayout">
                {filteredShortcuts.map((shortcut) => (
                  <motion.div
                    key={shortcut.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="px-2 py-1 rounded bg-white/10 border border-white/10 text-white font-mono text-xs font-bold min-w-[24px] text-center shadow-sm group-hover:bg-white/20 transition-colors">
                        {shortcut.key}
                      </div>
                      <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">
                        {shortcut.category}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">{shortcut.command}</h3>
                      <p className="text-white/30 text-[11px] leading-relaxed group-hover:text-white/40 transition-colors">
                        {shortcut.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
