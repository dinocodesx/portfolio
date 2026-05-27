import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { SocialsProps } from "@/types";

export function Socials({ name, url, description, icon }: SocialsProps) {
  const isInternal = url.startsWith("/");
  const Component = isInternal ? Link : "a";
  const props = isInternal
    ? { to: url }
    : { href: url, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Component
      {...(props as any)}
      className="group block p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] rounded-2xl backdrop-blur-md transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 shrink-0 bg-white/[0.05] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-white/70 group-hover:fill-white transition-colors"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icon} />
          </svg>
        </div>
        <div className="grow min-w-0">
          <h3 className="text-white font-medium text-[15px] truncate">
            {name}
          </h3>
          <p className="text-xs opacity-50 truncate">{description}</p>
        </div>
        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-30 transition-opacity shrink-0" />
      </div>
    </Component>
  );
}
