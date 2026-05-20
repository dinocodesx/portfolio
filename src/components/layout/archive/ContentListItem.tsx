import { motion } from "motion/react";
import { Play } from "lucide-react";
import { itemVariants } from "../../../constants/animations";

interface MetaItem {
  icon: React.ReactNode;
  text: string;
}

interface ContentListItemProps {
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  actionLabel?: string;
  meta: MetaItem[];
}

/**
 * A generic list item for Blogs, Talks, and other chronological content.
 * Handles consistent hover states, metadata layout, and optional links.
 */
export function ContentListItem({
  title,
  subtitle,
  description,
  link,
  actionLabel = "Read more",
  meta,
}: ContentListItemProps) {
  const isLink = !!link;
  const Wrapper = isLink ? motion.a : motion.div;

  return (
    <Wrapper
      variants={itemVariants}
      {...(isLink
        ? {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="block space-y-4 group cursor-pointer"
    >
      <div className="space-y-2">
        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest text-white/40">
          {meta.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="shrink-0">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Title Area */}
        <div className="space-y-1">
          <h2 className="text-white/80 font-medium text-lg leading-tight group-hover:text-white transition-colors">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/40 text-sm font-medium">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Body */}
      <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
        {description}
      </p>

      {/* Action Hint */}
      {isLink && (
        <div className="pt-2">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors group/link">
            <Play className="w-3 h-3 fill-current" />
            {actionLabel} —&gt;
          </span>
        </div>
      )}
    </Wrapper>
  );
}
