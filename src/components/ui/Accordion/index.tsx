import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  className = "",
}: AccordionItemProps) {
  return (
    <div className={`border-b border-white/5 overflow-hidden ${className}`}>
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-[15px] font-medium transition-colors ${isOpen ? "text-white" : "text-white/60 group-hover:text-white"}`}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-white/20 group-hover:text-white/60 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="pb-5 text-[14px] text-white/40 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className = "" }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleIndex(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
