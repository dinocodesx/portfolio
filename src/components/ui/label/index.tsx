import { motion } from "motion/react";
import {
  Tag,
  Hash,
  Bookmark,
  Circle,
  Bell,
  Zap,
  Command,
  User,
} from "lucide-react";
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
        className="relative w-full min-h-200 md:min-h-250 bg-[#0A0A0A] border border-white/5 rounded-3xl flex items-center justify-center p-8 md:p-16 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20 w-full max-w-3xl">
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

          {/* 5. Notification Badges */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              Alert Badges
            </h3>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="relative">
                <Bell className="w-5 h-5 text-white/20" />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full">
                  3
                </span>
              </div>
              <div className="relative">
                <Command className="w-5 h-5 text-white/20" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 bg-blue-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* 6. Stylized Tags */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              Visual Hierarchy
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-white/5 text-white text-[11px] font-medium rounded-lg">
                <Zap className="w-3 h-3 fill-blue-400 text-blue-400" />
                Pro
              </span>
              <span className="px-3 py-1 border border-white/10 text-white/40 text-[11px] font-medium rounded-full hover:text-white/60 hover:border-white/20 transition-colors cursor-default">
                Standard
              </span>
            </div>
          </div>

          {/* 7. Identity Labels */}
          <div className="space-y-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-widest font-medium">
              Metadata
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white/40" />
                </div>
                <span className="text-[11px] text-white/70 font-medium">
                  Alex Rivera
                </span>
              </div>
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
