import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Command } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  className?: string;
}

export function Navbar({ items, logo, className = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-white/5 py-3"
          : "bg-transparent border-transparent py-5"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {logo || (
            <>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Command className="w-5 h-5 text-black" />
              </div>
              <span className="text-white font-medium tracking-tight">Studio</span>
            </>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-white/40 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="px-4 py-2 bg-white text-black text-[12px] font-semibold rounded-full hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-white/40 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full py-4 bg-white text-black text-sm font-semibold rounded-xl mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
