import {
  Briefcase,
  Code,
  FileText,
  Layout,
  Link as LinkIcon,
  Search,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CommandItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  link: string;
}

const COMMANDS: CommandItem[] = [
  {
    id: "p",
    title: "Portfolio",
    description: "Return to index",
    icon: <User className="w-4 h-4" />,
    category: "General",
    link: "/",
  },
  {
    id: "a",
    title: "About",
    description: "Learn about me",
    icon: <FileText className="w-4 h-4" />,
    category: "General",
    link: "/about",
  },
  {
    id: "g",
    title: "Community",
    description: "Contributions & ecosystems",
    icon: <Code className="w-4 h-4" />,
    category: "General",
    link: "/community",
  },
  {
    id: "j",
    title: "Journey",
    description: "Career timeline",
    icon: <Briefcase className="w-4 h-4" />,
    category: "General",
    link: "/journey",
  },
  {
    id: "c",
    title: "Culture",
    description: "Engineering philosophy",
    icon: <User className="w-4 h-4" />,
    category: "General",
    link: "/culture",
  },
  {
    id: "pj",
    title: "Projects",
    description: "View my work",
    icon: <Briefcase className="w-4 h-4" />,
    category: "General",
    link: "/projects",
  },
  {
    id: "st",
    title: "Stuffs",
    description: "Experiments & random things",
    icon: <Code className="w-4 h-4" />,
    category: "General",
    link: "/stuffs",
  },
  {
    id: "u",
    title: "UI Lab",
    description: "Browse components",
    icon: <Layout className="w-4 h-4" />,
    category: "General",
    link: "/ui",
  },
  {
    id: "b",
    title: "Blog",
    description: "Read my posts",
    icon: <FileText className="w-4 h-4" />,
    category: "General",
    link: "/blogs",
  },
  {
    id: "bk",
    title: "Books",
    description: "My reading list",
    icon: <FileText className="w-4 h-4" />,
    category: "General",
    link: "/books",
  },
  {
    id: "t",
    title: "Talks",
    description: "Speaking engagements",
    icon: <Code className="w-4 h-4" />,
    category: "General",
    link: "/talks",
  },
  {
    id: "l",
    title: "Links",
    description: "Social profiles",
    icon: <LinkIcon className="w-4 h-4" />,
    category: "General",
    link: "/links",
  },
  {
    id: "r",
    title: "Resume",
    description: "View CV",
    icon: <FileText className="w-4 h-4" />,
    category: "General",
    link: "/resume",
  },
  {
    id: "ks",
    title: "Shortcuts",
    description: "Keyboard shortcuts",
    icon: <Code className="w-4 h-4" />,
    category: "General",
    link: "/shortcuts",
  },
];

export function GlobalCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const filteredCommands = COMMANDS.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = (link: string) => {
    navigate(link);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredCommands.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) =>
          (prev - 1 + filteredCommands.length) % filteredCommands.length,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        handleSelect(filteredCommands[selectedIndex].link);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-[0_0_80px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <Search className="w-5 h-5 text-white/20" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search or type a command..."
                className="flex-1 bg-transparent border-none outline-none text-white text-[15px] placeholder:text-white/20"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white/40 font-mono">
                ESC
              </div>
            </div>

            {/* Results */}
            <div
              ref={scrollContainerRef}
              className="max-h-80 overflow-y-auto p-2 custom-scrollbar"
            >
              {filteredCommands.length > 0 ? (
                <div className="space-y-0.5">
                  {filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      onClick={() => handleSelect(cmd.link)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all duration-200 group text-left ${
                        index === selectedIndex
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`p-1.5 rounded-lg transition-colors ${
                          index === selectedIndex
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-white/5 text-white/40"
                        }`}
                      >
                        {cmd.icon}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-[13.5px] font-medium transition-colors ${
                            index === selectedIndex
                              ? "text-white"
                              : "text-white/60"
                          }`}
                        >
                          {cmd.title}
                        </p>
                        <p className="text-[11.5px] text-white/30 truncate">
                          {cmd.description}
                        </p>
                      </div>
                      {index === selectedIndex && (
                        <div className="text-[9px] text-white/20 font-mono uppercase tracking-widest flex items-center gap-1">
                          Jump <span className="text-[14px]">↵</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-white/20 gap-3">
                  <Search className="w-8 h-8 stroke-[1px]" />
                  <p className="text-[13px]">No results for "{query}"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-white/2 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[10px] text-white/20 uppercase tracking-widest">
                  <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">
                    ↑↓
                  </div>{" "}
                  Navigate
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-white/20 uppercase tracking-widest">
                  <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">
                    ↵
                  </div>{" "}
                  Select
                </div>
              </div>
              <p className="text-[9px] text-white/10 uppercase tracking-[0.2em] font-medium">
                Global Command
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
