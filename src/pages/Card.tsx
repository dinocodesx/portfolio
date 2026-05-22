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
  year: "2026",
};

export function Card() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="fixed inset-0 w-full bg-[#111] flex flex-col items-center justify-center font-sans antialiased overflow-hidden select-none overscroll-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Lanyard / Strap */}
      <div
        className="flex flex-col items-center z-20"
        style={{ marginBottom: "-2px" }}
      >
        {/* Strap */}
        <div
          className="w-10 rounded-b-lg shadow-lg relative"
          style={{
            height: "96px",
            background: "linear-gradient(to bottom, #1a1a1a, #2563eb)",
          }}
        >
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-zinc-800 rounded-full border border-white/10" />
        </div>
        {/* Clip */}
        <div
          className="w-10 flex items-center justify-center relative shadow-sm"
          style={{
            height: "20px",
            border: "3px solid #9ca3af",
            borderRadius: "999px",
            background: "#e5e7eb",
            marginTop: "-8px",
          }}
        >
          <div
            className="absolute"
            style={{
              top: "-6px",
              width: "12px",
              height: "7px",
              background: "#6b7280",
              borderRadius: "999px",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "24px",
              border: "3px solid #6b7280",
              borderRadius: "999px",
              marginTop: "-30px",
            }}
          />
        </div>
      </div>

      {/* Card stack wrapper */}
      <div className="relative" style={{ width: "280px", height: "420px" }}>
        {/* Blue background card — subtle peek, bottom-right only */}
        <motion.div
          initial={{ opacity: 0, rotate: 3, x: 6, y: 8 }}
          animate={{ opacity: 1, rotate: 6, x: 12, y: 14 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
            borderRadius: "2rem",
            zIndex: 0,
          }}
        />

        {/* 3D flip scene */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            perspective: "1200px",
            zIndex: 1,
          }}
        >
          <motion.div
            onClick={() => setFlipped((f) => !f)}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              cursor: "pointer",
            }}
          >
            {/* ── FRONT FACE ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                background: "#111",
                borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.15)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Punch hole */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20"
                style={{
                  top: "16px",
                  width: "32px",
                  height: "6px",
                  background: "#000",
                  borderRadius: "999px",
                }}
              />

              {/* Blue radial glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "150%",
                  height: "100%",
                  background:
                    "radial-gradient(circle at center, rgba(37,99,235,0.45) 0%, transparent 60%)",
                  mixBlendMode: "screen",
                  zIndex: 0,
                }}
              />

              {/* Domain label */}
              <p
                className="absolute left-1/2 -translate-x-1/2 z-10 whitespace-nowrap"
                style={{
                  top: "44px",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                dinocodes.in
              </p>

              {/* Bottom info section */}
              <div className="mt-auto z-10" style={{ padding: "2rem" }}>
                {/* Social icons */}
                <div
                  className="flex"
                  style={{ gap: "14px", opacity: 0.4, marginBottom: "1.5rem" }}
                >
                  <a
                    href={`mailto:${DATA.email}`}
                    className="hover:opacity-100 transition-opacity"
                  >
                    <Mail size={14} color="white" />
                  </a>
                  <a
                    href={DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity"
                  >
                    <Linkedin size={14} color="white" />
                  </a>
                  <a
                    href={DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity"
                  >
                    <Github size={14} color="white" />
                  </a>
                </div>

                {/* Name + year */}
                <div className="flex justify-between items-end">
                  <div style={{ lineHeight: 1 }}>
                    <h1
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        margin: "0 0 6px",
                      }}
                    >
                      {DATA.name}
                      <br />
                      {DATA.surname}
                    </h1>
                    <p
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {DATA.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 700,
                        letterSpacing: "-0.04em",
                        margin: 0,
                      }}
                    >
                      {DATA.year}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        fontSize: "9px",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      ©
                    </p>
                  </div>
                </div>
              </div>

              {/* Tap hint */}
              <p
                className="absolute"
                style={{
                  bottom: "10px",
                  right: "14px",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.15)",
                  letterSpacing: "0.05em",
                }}
              >
                tap to flip →
              </p>
            </motion.div>

            {/* ── BACK FACE ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "#0f0f1a",
                borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.15)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              {/* Punch hole */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: "16px",
                  width: "32px",
                  height: "6px",
                  background: "#000",
                  borderRadius: "999px",
                  zIndex: 5,
                }}
              />

              {/* Blue radial glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: 0,
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.3) 0%, transparent 70%)",
                }}
              />

              <p
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  zIndex: 2,
                }}
              >
                scan to visit
              </p>

              {/* QR Code */}
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  background: "white",
                  borderRadius: "16px",
                  padding: "8px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  zIndex: 2,
                }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(DATA.portfolio)}`}
                  alt="QR Code"
                  style={{ width: "100%", height: "100%", display: "block" }}
                />
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.05em",
                  zIndex: 2,
                }}
              >
                dinocodes.in
              </p>

              {/* Tap hint */}
              <p
                className="absolute"
                style={{
                  bottom: "10px",
                  right: "14px",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.15)",
                  letterSpacing: "0.05em",
                }}
              >
                tap to flip →
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
