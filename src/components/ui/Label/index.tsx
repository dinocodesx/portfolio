import React from "react";

interface LabelProps {
  children: React.ReactNode;
  variant?: "status" | "category" | "system" | "outline";
  color?: "emerald" | "amber" | "blue" | "white" | "red";
  icon?: React.ReactNode;
  className?: string;
}

export function Label({
  children,
  variant = "category",
  color = "white",
  icon,
  className = "",
}: LabelProps) {
  const colors = {
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    white: "text-white/70 bg-white/5 border-white/10",
    red: "text-red-400 bg-red-500/10 border-red-500/20",
  };

  const variants = {
    status: "inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full",
    category: "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md",
    system: "px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter rounded",
    outline: "px-2 py-0.5 border border-white/20 text-white text-[9px] font-bold uppercase tracking-tighter rounded",
  };

  const activeColor = variant === "system" ? "bg-white text-black" : colors[color];

  return (
    <span className={`${variants[variant]} ${activeColor} border ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
