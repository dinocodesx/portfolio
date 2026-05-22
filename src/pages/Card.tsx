import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const DATA = {
  name: "DEBARSHEE",
  surname: "CHAKRABORTY",
  role: "BACKEND & DISTRIBUTED SYSTEMS",
  email: "debarshee.chakraborty.work@gmail.com",
  portfolio: "https://www.dinocodes.in",
  github: "https://github.com/dinocodesx",
  linkedin: "https://linkedin.com/in/dinocodesx",
};

const ORB_GRADIENT =
  "bg-[radial-gradient(ellipse_75%_60%_at_50%_52%,#2a50f5_0%,#1a30c4_25%,#0a0a0f_70%)]";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function Card() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#111] w-full flex flex-col items-center justify-center antialiased overflow-hidden select-none overscroll-none font-['DM_Sans',sans-serif]">
      {/* ── Lanyard / Strap ── */}
      <div className="flex flex-col items-center z-50 relative -mb-6.5">
        {/* Strap */}
        <div className="w-10 h-24 bg-linear-to-b from-[#111] to-blue-600 rounded-b-lg relative">
          {/* Gradient Shadow */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-600 blur-xl opacity-40 -z-10 translate-y-2 rounded-b-lg" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-2.5 h-2.5 bg-[#1a1a1a] rounded-full border border-white/10" />
        </div>
        {/* Clip */}
        <div className="relative flex items-center justify-center w-10 h-5 border-[3px] border-gray-400 rounded-full bg-gray-200 -mt-2 shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          <div className="absolute -top-1.5 w-3 h-1.75 bg-gray-500 rounded-full" />
          <div className="w-3 h-6 border-[3px] border-gray-500 rounded-full -mt-7.5" />
        </div>
      </div>

      {/* ── Card Stack ── */}
      <div className="relative w-70 h-105">
        {/* Background peek card */}
        <motion.div
          initial={{ opacity: 0, rotate: 3, x: 6, y: 8 }}
          animate={{ opacity: 1, rotate: 6, x: 12, y: 14 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className={`absolute inset-0 ${ORB_GRADIENT} rounded-4xl border border-white/8 z-0`}
        />

        {/* ── 3D flip scene ── */}
        <div className="absolute inset-0 perspective-distant z-10">
          <motion.div
            onClick={() => setFlipped((f) => !f)}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-full relative transform-3d cursor-pointer"
          >
            {/* ══ FRONT FACE ══ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`absolute inset-0 backface-hidden ${ORB_GRADIENT} rounded-4xl border border-white/8 overflow-hidden flex flex-col`}
            >
              {/* Punch hole */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-1.5 bg-black/80 rounded-full z-10" />

              {/* Noise / grain texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.035] z-1 bg-size-[180px]"
                style={{ backgroundImage: NOISE_SVG }}
              />

              {/* Bottom info section */}
              <div className="mt-auto p-8 relative z-5">
                {/* Social icons */}
                <div className="flex gap-3.5 opacity-[0.45] mb-[1.4rem]">
                  <a
                    href={`mailto:${DATA.email}`}
                    className="flex items-center"
                  >
                    <Mail size={13} color="white" />
                  </a>
                  <a
                    href={DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin size={13} color="white" />
                  </a>
                  <a
                    href={DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github size={13} color="white" />
                  </a>
                </div>

                {/* Name + year */}
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="text-[22px] font-bold text-white tracking-[-0.02em] leading-[1.15] mb-1.5">
                      {DATA.name}
                      <br />
                      {DATA.surname}
                    </h1>
                    <p className="text-[9px] font-bold text-white/35 tracking-widest uppercase m-0">
                      {DATA.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ══ BACK FACE ══ */}
            <div
              className={`absolute inset-0 backface-hidden transform-[rotateY(180deg)] ${ORB_GRADIENT} rounded-4xl border border-white/12 overflow-hidden flex flex-col items-center justify-center gap-[1.4rem]`}
            >
              {/* Punch hole */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-1.5 bg-black/80 rounded-full z-5" />

              {/* Grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.035] z-1 bg-size-[180px]"
                style={{ backgroundImage: NOISE_SVG }}
              />

              <p className="text-[9px] font-bold text-white/40 tracking-[0.3em] uppercase z-2 m-0">
                scan to visit
              </p>

              {/* QR Code */}
              <div className="w-35 h-35 bg-white rounded-2xl p-2 shadow-[0_0_40px_rgba(37,99,235,0.4),0_8px_32px_rgba(0,0,0,0.6)] z-2">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(DATA.portfolio)}`}
                  alt="QR Code"
                  className="w-full h-full block"
                />
              </div>

              <p className="text-xs text-white/45 tracking-[0.06em] z-2 m-0">
                dinocodes.in
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
