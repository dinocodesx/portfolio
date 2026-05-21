import React from "react";
import { motion } from "motion/react";
import { Shortcut } from "../../../types";

interface KeyboardProps {
  shortcuts: Shortcut[];
  activeKey?: string | null;
}

interface KeyInfo {
  key: string;
  flex: number; // Unit width
  display?: string;
}

// MacBook Pro layout units (approximate)
const ROW_0: KeyInfo[] = Array(14).fill(0).map((_, i) => ({ key: i === 0 ? "Esc" : i === 13 ? "Del" : `F${i}`, flex: 1 }));
const ROW_1: KeyInfo[] = [
  { key: "`", flex: 1 }, { key: "1", flex: 1 }, { key: "2", flex: 1 }, { key: "3", flex: 1 }, { key: "4", flex: 1 },
  { key: "5", flex: 1 }, { key: "6", flex: 1 }, { key: "7", flex: 1 }, { key: "8", flex: 1 }, { key: "9", flex: 1 },
  { key: "0", flex: 1 }, { key: "-", flex: 1 }, { key: "=", flex: 1 }, { key: "Backspace", flex: 2, display: "⌫" }
];
const ROW_2: KeyInfo[] = [
  { key: "Tab", flex: 1.5, display: "⇥" }, { key: "Q", flex: 1 }, { key: "W", flex: 1 }, { key: "E", flex: 1 },
  { key: "R", flex: 1 }, { key: "T", flex: 1 }, { key: "Y", flex: 1 }, { key: "U", flex: 1 }, { key: "I", flex: 1 },
  { key: "O", flex: 1 }, { key: "P", flex: 1 }, { key: "[", flex: 1 }, { key: "]", flex: 1 }, { key: "\\", flex: 1.5 }
];
const ROW_3: KeyInfo[] = [
  { key: "Caps", flex: 1.75, display: "⇪" }, { key: "A", flex: 1 }, { key: "S", flex: 1 }, { key: "D", flex: 1 },
  { key: "F", flex: 1 }, { key: "G", flex: 1 }, { key: "H", flex: 1 }, { key: "J", flex: 1 }, { key: "K", flex: 1 },
  { key: "L", flex: 1 }, { key: ";", flex: 1 }, { key: "'", flex: 1 }, { key: "Enter", flex: 2.25, display: "↩" }
];
const ROW_4: KeyInfo[] = [
  { key: "Shift", flex: 2.25, display: "⇧" }, { key: "Z", flex: 1 }, { key: "X", flex: 1 }, { key: "C", flex: 1 },
  { key: "V", flex: 1 }, { key: "B", flex: 1 }, { key: "N", flex: 1 }, { key: "M", flex: 1 }, { key: ",", flex: 1 },
  { key: ".", flex: 1 }, { key: "/", flex: 1 }, { key: "Shift", flex: 2.75, display: "⇧" }
];
const ROW_5: KeyInfo[] = [
  { key: "fn", flex: 1 }, { key: "ctrl", flex: 1, display: "⌃" }, { key: "opt", flex: 1, display: "⌥" },
  { key: "cmd", flex: 1.25, display: "⌘" }, { key: "Space", flex: 6.25, display: "" },
  { key: "cmd", flex: 1.25, display: "⌘" }, { key: "opt", flex: 1, display: "⌥" },
  { key: "←", flex: 0.75 }, { key: "↑", flex: 0.75 }, { key: "↓", flex: 0.75 }, { key: "→", flex: 0.75 }
];

const ALL_ROWS = [ROW_0, ROW_1, ROW_2, ROW_3, ROW_4, ROW_5];

export const Keyboard: React.FC<KeyboardProps> = ({ shortcuts, activeKey }) => {
  const shortcutKeys = new Set(shortcuts.flatMap((s) => s.keys).map((k) => k.toUpperCase()));
  if (shortcutKeys.has("+")) shortcutKeys.add("=");

  const isKeyActive = (key: string) => {
    if (!activeKey) return false;
    const upKey = key.toUpperCase();
    const upActive = activeKey.toUpperCase();
    if (upKey === upActive) return true;
    if (key === "Space" && activeKey === " ") return true;
    if (key === "Caps" && activeKey === "★") return true; // Hyper key visual mapping
    if (key === "=" && activeKey === "+") return true; // Plus key visual mapping
    if (key === "cmd" && activeKey === "Meta") return true;
    if (key === "opt" && activeKey === "Alt") return true;
    if (key === "ctrl" && activeKey === "Control") return true;
    if (key === "←" && activeKey === "ArrowLeft") return true;
    if (key === "↑" && activeKey === "ArrowUp") return true;
    if (key === "↓" && activeKey === "ArrowDown") return true;
    if (key === "→" && activeKey === "ArrowRight") return true;
    return false;
  };

  return (
    <div className="bg-[#050505] p-4 md:p-8 rounded-2xl shadow-2xl border border-white/10 w-full aspect-[16/7.8] flex flex-col justify-between mb-8 select-none">
      <div className="flex flex-col gap-[1.5%] h-full">
        {ALL_ROWS.map((row, i) => (
          <div key={i} className="flex gap-[1%] w-full h-[14%]">
            {row.map((keyInfo, j) => {
              const isShortcut = shortcutKeys.has(keyInfo.key.toUpperCase());
              const isActive = isKeyActive(keyInfo.key);
              
              return (
                <motion.div
                  key={`${i}-${j}`}
                  style={{ flex: keyInfo.flex }}
                  className={`
                    h-full rounded flex flex-col items-center justify-center text-[8px] md:text-[11px] font-semibold transition-all duration-75 relative
                    ${isShortcut 
                      ? "bg-[#141414] text-white border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.02)]" 
                      : "bg-[#080808] text-white/40 border border-white/20"}
                    ${isActive 
                      ? "bg-[#222] border-white/40 translate-y-[1px] scale-[0.98] shadow-inner text-white" 
                      : "shadow-[0_2px_0_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.01)]"}
                  `}
                >
                  <span className="pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                    {keyInfo.display !== undefined ? keyInfo.display : keyInfo.key}
                  </span>
                  {isShortcut && (
                    <div className="absolute bottom-[15%] w-0.5 h-0.5 md:w-1 md:h-1 bg-white/30 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Trackpad area simulation */}
      <div className="mx-auto w-[42%] h-[18%] rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border-t border-white/5 mt-4 opacity-50" />
    </div>
  );
};
