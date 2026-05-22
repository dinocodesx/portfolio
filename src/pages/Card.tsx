import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const DATA = {
  name: "Debarshee Chakraborty",
  role: "Backend & Distributed Systems",
  email: "debarshee.chakraborty.work@gmail.com",
  portfolio: "https://www.dinocodes.in",
  github: "https://github.com/dinocodesx",
  linkedin: "https://linkedin.com/in/dinocodesx",
};

export function Card() {
  return (
    <div className="fixed inset-0 w-full bg-white flex flex-col items-center justify-center font-sans antialiased overflow-hidden select-none overscroll-none">
      {/* The Movie Ticket Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="w-[90%] max-w-sm h-[85vh] bg-[#111] rounded-[2.5rem] relative flex flex-col overflow-hidden border border-white"
      >
        {/* Ticket Side Indentations (Circles) */}
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full z-10" />
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full z-10" />

        {/* Ticket Perforation Line */}
        <div className="absolute top-1/2 left-8 right-8 h-px border-t border-dashed border-white/20 -translate-y-1/2 z-10" />

        {/* Top Section (Details) */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-white tracking-tight"
              >
                {DATA.name.split(" ")[0]}
                <br />
                {DATA.name.split(" ")[1]}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-500 font-medium tracking-wide uppercase text-[10px]"
              >
                {DATA.role}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <a
                href={DATA.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium">dinocodes.in</span>
              </a>
              <a
                href={`mailto:${DATA.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium">{DATA.email}</span>
              </a>
              <a
                href={DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href={DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section (QR Code) */}
        <div className="flex-1 p-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="p-4 bg-white rounded-[2rem]"
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(DATA.portfolio)}`}
              alt="Portfolio QR Code"
              className="w-32 h-32"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
