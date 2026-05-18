import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ChevronDown,
  Activity,
  Zap,
  Globe,
  Shield,
  BookOpen,
  Terminal,
  Layers,
  Box,
  FileText,
  Rocket,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../../constants/animations";

const FEATURE_ITEMS = [
  {
    title: "Analytics",
    description: "Real-time insights",
    icon: <Activity className="w-4 h-4" />,
  },
  {
    title: "Automations",
    description: "Workflow builders",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    title: "Integrations",
    description: "Connect your stack",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    title: "Security",
    description: "Enterprise grade",
    icon: <Shield className="w-4 h-4" />,
  },
];

const DOC_ITEMS = [
  {
    title: "Getting Started",
    description: "Quick start guide",
    icon: <Rocket className="w-4 h-4" />,
  },
  {
    title: "API Reference",
    description: "Endpoint details",
    icon: <Terminal className="w-4 h-4" />,
  },
  {
    title: "SDKs",
    description: "Client libraries",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    title: "Webhooks",
    description: "Event callbacks",
    icon: <Box className="w-4 h-4" />,
  },
  {
    title: "Guides",
    description: "In-depth tutorials",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    title: "Changelog",
    description: "Latest updates",
    icon: <FileText className="w-4 h-4" />,
  },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ width: 64, height: 64, borderRadius: 32, opacity: 0 }}
        animate={{
          width: "100%",
          maxWidth: isScrolled ? "1000px" : "1200px",
          height: isScrolled ? 56 : 64,
          borderRadius: 32,
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 0.5, ease: "circOut" },
          width: { duration: 0.6, ease: "anticipate" },
          maxWidth: { duration: 0.4, ease: "easeInOut" },
          height: { duration: 0.3 },
        }}
        className={`pointer-events-auto flex items-center justify-between px-6 border transition-colors duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl"
            : "bg-[#0A0A0A]/90 backdrop-blur-md border-white/5 shadow-lg"
        }`}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <motion.span
            animate={{
              opacity: isScrolled ? 0.8 : 1,
              scale: isScrolled ? 0.95 : 1,
            }}
            className="text-white font-bold text-xl tracking-tight uppercase hidden sm:block"
          >
            Vertex
          </motion.span>
        </Link>

        {/* Center: Navigation */}
        <motion.div
          animate={{ gap: isScrolled ? "1.5rem" : "2.5rem" }}
          className="hidden md:flex items-center"
        >
          <div
            className={`flex items-center transition-all duration-300 ${isScrolled ? "gap-4" : "gap-6"}`}
          >
            <Link
              to="#"
              className="text-[14px] text-white/60 hover:text-white transition-colors"
            >
              Solutions
            </Link>
            <Link
              to="#"
              className="text-[14px] text-white/60 hover:text-white transition-colors"
            >
              Company
            </Link>
          </div>

          <div
            className={`flex items-center transition-all duration-300 ${isScrolled ? "gap-4" : "gap-6"}`}
          >
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white transition-colors py-2">
                Features
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeDropdown === "features" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "features" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-100 bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {FEATURE_ITEMS.map((item) => (
                        <Link
                          key={item.title}
                          to="#"
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="shrink-0 text-white/40 group-hover:text-white transition-colors mt-0.5">
                            {item.icon}
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="text-[13px] font-medium text-white">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-white/40 leading-tight">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Docs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("docs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white transition-colors py-2">
                Docs
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeDropdown === "docs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "docs" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-150 bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {DOC_ITEMS.map((item) => (
                        <Link
                          key={item.title}
                          to="#"
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="shrink-0 text-white/40 group-hover:text-white transition-colors mt-0.5">
                            {item.icon}
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="text-[13px] font-medium text-white">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-white/40 leading-tight">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Right: Auth */}
        <motion.div
          animate={{ gap: isScrolled ? "0.5rem" : "0.75rem" }}
          className="flex items-center shrink-0"
        >
          <button className="px-4 py-2 text-[14px] font-medium text-white/60 hover:text-white transition-colors">
            Log in
          </button>
          <button className="px-5 py-2 bg-white text-black text-[14px] font-medium rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-xl">
            Sign up
          </button>
        </motion.div>
      </motion.nav>
    </div>
  );
}

export function NavbarCraft() {
  return (
    <div className="min-h-[200vh] flex flex-col items-center p-2 pt-24 md:pt-32">
      <Navbar />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16 mt-16 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Sidebar */}
          <motion.div variants={itemVariants}>
            <Link
              to="/ui"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-[15px]"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Architectural Navbar
              </h1>
              <p className="text-white/40 text-lg">May 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A study on{" "}
                <span className="text-white">navigation density</span>. This
                implementation explores how complex information hierarchies can
                be contained within a minimalist footprint using multi-column
                dropdowns.
              </p>
              <p>
                The center section balances static context links with dynamic
                grid-based flyouts. The "Docs" section utilizes a{" "}
                <span className="text-white">3:2 grid</span> while "Features"
                employs a <span className="text-white">2:2 grid</span>,
                optimized for rapid scanning.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-80 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 overflow-hidden"
            >
              <div className="text-center space-y-4">
                <p className="text-white/20 text-[11px] uppercase tracking-widest">
                  Interaction Guide
                </p>
                <h3 className="text-white font-medium text-xl">Scroll the page</h3>
                <p className="text-white/40 text-[14px]">
                  Watch the navbar at the top transform as you move.
                </p>
                <div className="pt-8 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1.5"
                  >
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The dropdowns use{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  AnimatePresence
                </code>{" "}
                with a subtle scale and vertical offset, providing a tactile
                feel that respects the overall minimalist aesthetic.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
