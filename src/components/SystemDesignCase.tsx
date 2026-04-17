import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export interface SystemDesignCase {
  title: string;
  summary: string;
  tags: string[];
  scale: string;
  link?: string;
}

interface SystemDesignCaseProps extends SystemDesignCase {
  /** When true, renders a compact version suitable for the home page preview */
  compact?: boolean;
}

/**
 * Card for a single system design case study.
 * In compact mode (home page) shows title + scale badge + first 3 tags.
 * In full mode (/system-design page) shows the full summary and all tags.
 */
export function SystemDesignCaseCard({
  title,
  summary,
  tags,
  scale,
  link,
  compact = false,
}: SystemDesignCaseProps) {
  const isInternal = link?.startsWith("/");

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (!link) return <div className="group">{children}</div>;
    if (isInternal)
      return (
        <Link to={link} className="group block">
          {children}
        </Link>
      );
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {children}
      </a>
    );
  };

  return (
    <Wrapper>
      <div
        className={`border border-white/6 rounded-sm p-4 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/2 ${compact ? "space-y-2" : "space-y-3"}`}
      >
        {/* Title row */}
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`text-white font-medium leading-snug ${compact ? "text-sm" : "text-[15px]"} ${link ? "group-hover:underline underline-offset-4" : ""}`}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-0.5 rounded-sm">
              {scale}
            </span>
            {link && (
              <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/70 transition-colors" />
            )}
          </div>
        </div>

        {/* Summary — hidden in compact mode */}
        {!compact && (
          <p className="text-[13px] text-white/50 leading-relaxed">{summary}</p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {(compact ? tags.slice(0, 3) : tags).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-sm bg-white/4 border border-white/6 text-white/40"
            >
              {tag}
            </span>
          ))}
          {compact && tags.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 text-white/25">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
