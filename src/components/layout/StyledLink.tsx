import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface StyledLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  showIcon?: boolean;
}

export function StyledLink({
  to,
  children,
  className = "",
  underline = true,
  showIcon = false,
}: StyledLinkProps) {
  const isExternal =
    to.startsWith("http") ||
    to.startsWith("www") ||
    to.startsWith("mailto:") ||
    to.includes("://");

  const baseClasses = underline
    ? "text-white underline decoration-white/30 hover:decoration-white underline-offset-4 transition-colors"
    : "text-white hover:underline underline-offset-4 decoration-white/30 transition-colors";

  const combinedClassName = `${showIcon ? "inline-flex items-center gap-2 " : ""}${baseClasses} ${className}`.trim();

  if (isExternal) {
    const href = to.startsWith("www") ? `https://${to}` : to;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
        {showIcon && <ArrowUpRight className="w-4 h-4 opacity-50" />}
      </a>
    );
  }

  return (
    <Link to={to} className={combinedClassName}>
      {children}
      {showIcon && <ArrowUpRight className="w-4 h-4 opacity-50" />}
    </Link>
  );
}
