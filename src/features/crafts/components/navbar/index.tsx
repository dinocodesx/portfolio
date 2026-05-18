import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Menu, X, User, Layout, Briefcase, Code, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { containerVariants, itemVariants } from "../../../../constants/animations";

const NAV_ITEMS = [
  { label: "Portfolio", icon: <User className="w-4 h-4" />, path: "/" },
  { label: "UI Lab", icon: <Layout className="w-4 h-4" />, path: "/ui" },
  { label: "Projects", icon: <Briefcase className="w-4 h-4" />, path: "/projects" },
  { label: "Talks", icon: <Code className="w-4 h-4" />, path: "/talks" },
];

export function NavbarCraft() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] flex flex-col items-center p-2 pt-24 md:pt-32">
      {/* The Navbar Demo */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[5000] flex items-center gap-2 p-1.5 rounded-full transition-all duration-500 border ${
          isScrolled 
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl scale-95" 
            : "bg-white/5 backdrop-blur-md border-white/5 scale-100"
        }`}
      >
        <div className="flex items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                location.pathname === item.path ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="w-px h-4 bg-white/10 mx-1" />
        <button className="p-2 text-white/40 hover:text-white transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full border border-black" />
        </button>
      </motion.nav>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16"
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
                Floating Navbar
              </h1>
              <p className="text-white/40 text-lg">May 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A <span className="text-white">context-aware</span> navigation pattern. 
                The navbar responds to scroll depth, shrinking and increasing its 
                background opacity to minimize visual noise while maintaining access.
              </p>
            </motion.div>

            {/* Scroll Indicator Demo Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-80 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 overflow-hidden"
            >
              <div className="text-center space-y-4">
                <p className="text-white/20 text-[11px] uppercase tracking-widest">Interaction Guide</p>
                <h3 className="text-white font-medium">Scroll the page</h3>
                <p className="text-white/40 text-[14px]">Watch the navbar at the top transform as you move.</p>
                <div className="pt-4">
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
                  >
                    <div className="w-1 h-1.5 bg-white/40 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The active state uses a <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">layoutId</code> transition 
                for the pill, creating a fluid sliding effect between links. This 
                physicality makes navigation feel more connected and intentional.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
