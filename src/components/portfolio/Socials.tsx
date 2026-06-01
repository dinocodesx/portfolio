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
      className="group block p-3 bg-white hover:bg-gray-50 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-gray-700 group-hover:fill-gray-900 transition-colors"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icon} />
          </svg>
        </div>
        <div className="grow min-w-0 text-center pr-11">
          <h3 className="text-gray-900 font-bold text-[15px] leading-tight">
            {name}
          </h3>
          {description && (
            <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
              {description}
            </p>
          )}
        </div>
      </div>
    </Component>
  );
}
