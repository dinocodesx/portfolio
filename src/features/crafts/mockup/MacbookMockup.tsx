import React, { ReactNode } from "react";

interface MacbookMockupProps {
  children: ReactNode;
  className?: string;
}

export function MacbookMockup({ children, className = "" }: MacbookMockupProps) {
  return (
    <div className={`relative w-full max-w-5xl aspect-[16/10] bg-[#1a1a1a] rounded-[24px] border-[8px] border-[#2a2a2a] shadow-[0_0_0_2px_#3a3a3a,0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col ${className}`}>
      {/* Menu Bar (Simulated) */}
      <div className="h-7 bg-[#0A0A0A] flex items-center px-4 justify-between border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20 h-3 bg-white/5 rounded-full" />
          <div className="w-10 h-3 bg-white/5 rounded-full" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 bg-black relative overflow-hidden">
        {children}
      </div>

      {/* Glass Footer / Dock (Optional, can be inside children) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl z-40 hidden group-hover:flex items-center justify-around px-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-8 h-8 bg-white/10 rounded-lg hover:scale-110 transition-transform cursor-pointer" />
        ))}
      </div>
    </div>
  );
}
