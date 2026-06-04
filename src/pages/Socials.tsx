import { SEO } from "@/components/layout/SEO";
import { SOCIAL_LINKS } from "@/data";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Simple Clock component
function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="tabular-nums font-medium text-[13px]">{time}</span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
} as const;

export function Socials() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 flex flex-col items-center font-sans text-white selection:bg-white selection:text-black">
      <SEO
        title="Connect | Debarshee Chakraborty"
        description="Connect with Debarshee Chakraborty on GitHub, LinkedIn, Twitter, and more. Let's build something extraordinary together."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-120 space-y-6"
      >
        {/* Profile Card */}
        <motion.div
          variants={itemVariants}
          className="bg-[#111] rounded-4xl p-8 shadow-2xl border border-white/5 space-y-12"
        >
          <div className="flex justify-between items-start">
            <div className="relative">
              <img
                src="https://github.com/dinocodesx.png"
                alt="Debarshee"
                className="w-40 h-40 rounded-3xl object-cover bg-neutral-900 border border-white/5"
              />
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <div className="flex gap-2 text-[11px] font-bold tracking-wider text-neutral-500">
                <span>IN</span>
                <span className="text-neutral-700">KOL</span>
              </div>
              <div className="text-neutral-400">
                <Clock />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-[24px] font-medium leading-tight tracking-tight text-white">
              Debarshee Chakraborty,
              <br />
              <span className="text-neutral-400">Junior Software Engineer</span>
            </h2>
            <p className="text-[15px] text-neutral-500 leading-relaxed font-normal">
              Focused on Backend development, Distributed Systems, and Low-level
              system design. Crafting interfaces and exploring technology from
              Kolkata, India.
            </p>
          </div>
        </motion.div>

        {/* Logo Bar */}
        <motion.div
          variants={itemVariants}
          className="bg-[#111] rounded-full py-5 px-10 shadow-xl border border-white/5 flex justify-between items-center"
        >
          <a
            href={SOCIAL_LINKS.find((l) => l.name === "GitHub")?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          </a>
          <a
            href={SOCIAL_LINKS.find((l) => l.name === "Twitter")?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          </a>
          <a
            href={SOCIAL_LINKS.find((l) => l.name === "LinkedIn")?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          </a>
          <a href={SOCIAL_LINKS.find((l) => l.name === "Email")?.url}>
            <Mail className="w-5 h-5 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          </a>
          <a
            href={SOCIAL_LINKS.find((l) => l.name === "Medium")?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-neutral-500 hover:fill-white transition-colors cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={SOCIAL_LINKS.find((l) => l.name === "Medium")?.icon} />
            </svg>
          </a>
        </motion.div>

        {/* Footer Info Card */}
        <motion.div
          variants={itemVariants}
          className="bg-[#111] rounded-3xl p-6 shadow-xl border border-white/5 space-y-1 h-72 flex flex-col justify-end"
        >
          <p className="text-[13px] text-neutral-500 font-medium">
            @dinocodesx
          </p>
          <p className="text-[13px] text-neutral-400 font-medium transition-colors">
            <a
              href="mailto:debarshee.chakraborty.work@gmail.com"
              className="hover:text-white"
            >
              debarshee.chakraborty.work@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
