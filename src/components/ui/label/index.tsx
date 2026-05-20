import { motion } from "motion/react";
import { Tag, Hash, Bookmark, Circle } from "lucide-react";
import { itemVariants } from "../../../constants/animations";
import { UiShowcaseLayout } from "../UiShowcaseLayout";

export function Label() {
  return (
    <UiShowcaseLayout
      title="Label Varieties"
      date="May 2026"
      description={
        <p>
          A collection of semantic indicators for{" "}
          <span className="text-white">categorization</span> and{" "}
          <span className="text-white">status tracking</span>. These labels
          prioritize legibility and consistent information density.
        </p>
      }
    >
      {/* Preview Area */}
      <motion.div
        variants={itemVariants}
        className="relative w-full min-h-125 md:min-h-150 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-2xl">
          {/* 1. Status Labels */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              Status Indicators
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium rounded-full">
                <Circle className="w-1.5 h-1.5 fill-current" />
                Active
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-medium rounded-full">
                <Circle className="w-1.5 h-1.5 fill-current" />
                Pending
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-[11px] font-medium rounded-full">
                <Circle className="w-1.5 h-1.5 fill-current opacity-20" />
                Archived
              </span>
            </div>
          </div>

          {/* 2. Tag Styles */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              Categorization
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 text-[11px] font-medium rounded-md">
                <Tag className="w-3 h-3 opacity-40" />
                Research
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 text-[11px] font-medium rounded-md">
                <Hash className="w-3 h-3 opacity-40" />
                v2.4.0
              </span>
            </div>
          </div>

          {/* 3. High Density */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              System Labels
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-2 py-0.5 bg-white text-black text-[9px] font-bold uppercase tracking-tighter rounded">
                Beta
              </span>
              <span className="px-2 py-0.5 border border-white/20 text-white text-[9px] font-bold uppercase tracking-tighter rounded">
                Stable
              </span>
            </div>
          </div>

          {/* 4. Interactive Variant */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              Removable
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium rounded-full hover:bg-blue-500 hover:text-white transition-all group">
                <Bookmark className="w-3 h-3 fill-current opacity-40" />
                Pinned
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="space-y-6 text-white/60 leading-relaxed max-w-2xl text-[15px]"
      >
        <p>
          Labels use a{" "}
          <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
            font-medium
          </code>{" "}
          weight and reduced tracking for enhanced clarity at small sizes. The
          status indicators leverage high-contrast semantic colors against the
          dark canvas.
        </p>
      </motion.div>
    </UiShowcaseLayout>
  );
}
