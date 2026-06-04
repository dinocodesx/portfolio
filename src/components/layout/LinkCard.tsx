import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LinkCardProps {
  title: string;
  description: string;
  /** External URL (opens in new tab) or internal route path (uses React Router Link). */
  link?: string;
  /** Controls arrow icon opacity when not hovered. Defaults to false (fully visible). */
  dimArrow?: boolean;
  /** Optional index to display before the title (e.g., [01]) */
  index?: string;
}

/**
 * A clickable card with a title, an ArrowUpRight icon, and a description.
 * Handles both external links (opens in new tab) and internal routes.
 * When no link is provided, renders as a non-interactive div.
 */
export function LinkCard({
  title,
  description,
  link,
  dimArrow = true,
  index,
}: LinkCardProps) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              [{index}]
            </span>
          )}
          <h3 className="text-white font-medium group-hover:underline decoration-white underline-offset-4 transition-all">
            {title}
          </h3>
        </div>
        <ArrowUpRight
          className={`w-4 h-4 ${dimArrow ? "opacity-50 group-hover:opacity-100" : ""} transition-opacity`}
        />
      </div>
      <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
        {description}
      </p>
    </>
  );

  if (!link) {
    return <div className="group cursor-pointer block">{content}</div>;
  }

  const isInternal = link.startsWith("/");

  if (isInternal) {
    return (
      <Link to={link} className="group cursor-pointer block">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block"
    >
      {content}
    </a>
  );
}
