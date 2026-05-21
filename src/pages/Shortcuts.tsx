import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";
import { OverflowSection } from "@/components/layout/section-layout";
import { Keyboard } from "@/components/ui/keyboard/Keyboard";
import { itemVariants } from "@/constants/animations";
import { shortcuts } from "@/data/shortcuts";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

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
  const filteredShortcuts =
    selectedCategory === "All"
      ? shortcuts
      : shortcuts.filter((s) => s.category === selectedCategory);

  // Group filtered shortcuts by category for the table view
  const groupedShortcuts = filteredShortcuts.reduce(
    (acc, shortcut) => {
      if (!acc[shortcut.category]) {
        acc[shortcut.category] = [];
      }
      acc[shortcut.category].push(shortcut);
      return acc;
    },
    {} as Record<string, typeof shortcuts>,
  );

  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Shortcuts | Debarshee Chakraborty"
        description="Keyboard shortcuts for navigating the portfolio of Debarshee Chakraborty."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        <div className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl tracking-tight">
              Keyboard Shortcuts
            </h1>
            <p className="text-white/60 text-[15px] max-w-xl leading-relaxed">
              Experience the site at full speed. Use these physical keys to
              navigate instantly between sections.
            </p>
          </motion.div>

          {/* Keyboard Component */}
          <motion.div variants={itemVariants} className="w-full">
            <OverflowSection>
              <Keyboard shortcuts={shortcuts} activeKey={activeKey} />
            </OverflowSection>
          </motion.div>

          {/* Shortcuts List Section (Table-style) */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="flex flex-wrap gap-2 pb-6 border-b border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                    selectedCategory === cat
                      ? "text-white bg-white/10"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-20">
              <AnimatePresence mode="popLayout">
                {Object.entries(groupedShortcuts).map(([category, items]) => (
                  <motion.div
                    key={category}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12"
                  >
                    {/* Category Label */}
                    <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 pt-1">
                      {category}
                    </div>

                    {/* Shortcuts List */}
                    <div className="space-y-0 divide-y divide-white/10">
                      {items.map((shortcut) => (
                        <div
                          key={shortcut.id}
                          className="group py-5 flex items-center justify-between transition-colors border-white/10"
                        >
                          <div className="space-y-1.5 pr-8">
                            <h3 className="text-white/90 group-hover:text-white transition-colors text-[15px] font-medium">
                              {shortcut.command}
                            </h3>
                            <p className="text-white/40 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                              {shortcut.description}
                            </p>
                          </div>
                          <div className="shrink-0 flex items-center gap-1.5">
                            {shortcut.keys.map((key, kIdx) => (
                              <React.Fragment key={kIdx}>
                                <div className="min-w-8 h-8 px-2.5 rounded bg-white/3 border border-white/10 text-white/60 font-mono text-[11px] font-bold flex items-center justify-center shadow-sm group-hover:border-white/30 group-hover:text-white group-hover:bg-white/8 transition-all">
                                  {key}
                                </div>
                                {kIdx < shortcut.keys.length - 1 && (
                                  <span className="text-white/20 text-[10px] font-bold">
                                    +
                                  </span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
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
