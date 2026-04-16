import React, { ReactNode } from "react";
import { Signal, Wifi, Battery } from "lucide-react";

interface IPhoneMockupProps {
  children: ReactNode;
}

export function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto w-70 h-142.5 bg-[#1a1a1a] rounded-[36px] border-[7px] border-[#2a2a2a] shadow-[0_0_0_2px_#3a3a3a,0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Dynamic Island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-50 flex items-center justify-end px-2.5">
        <div className="w-1 h-1 bg-[#1a1a1a] rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full h-10 flex items-center justify-between px-6 z-40 text-white/90">
        <span className="text-[11px] font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full bg-black relative">{children}</div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50" />
    </div>
  );
}
