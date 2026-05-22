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

/* Shared card background: deep black base + vivid blue orb in the center */
const ORB_GRADIENT =
  "radial-gradient(ellipse 75% 60% at 50% 52%, #2a50f5 0%, #1a30c4 25%, #0a0a0f 70%)";

export function Card() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-[#111] w-full flex flex-col items-center justify-center antialiased overflow-hidden select-none overscroll-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Lanyard / Strap ── */}
      <div
        className="flex flex-col items-center z-20"
        style={{ marginBottom: "-26px", zIndex: 50, position: "relative" }}
      >
        {/* Strap */}
        <div
          className="rounded-b-lg relative"
          style={{
            width: "40px",
            height: "96px",
            background: "linear-gradient(to bottom, #111, #2563eb)",
            boxShadow: "0 2px 16px rgba(37,99,235,0.25)",
          }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: "12px",
              width: "10px",
              height: "10px",
              background: "#1a1a1a",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>
        {/* Clip */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "40px",
            height: "20px",
            border: "3px solid #9ca3af",
            borderRadius: "999px",
            background: "#e5e7eb",
            marginTop: "-8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
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

      {/* ── Card Stack ── */}
      <div className="relative" style={{ width: "280px", height: "420px" }}>
        {/* Background peek card — same orb gradient, rotated */}
        <motion.div
          initial={{ opacity: 0, rotate: 3, x: 6, y: 8 }}
          animate={{ opacity: 1, rotate: 6, x: 12, y: 14 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background: ORB_GRADIENT,
            borderRadius: "2rem",
            border: "1px solid rgba(255,255,255,0.08)",
            zIndex: 0,
          }}
        />

        {/* ── 3D flip scene ── */}
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
            {/* ══ FRONT FACE ══ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                background: ORB_GRADIENT,
                borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Punch hole */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: "16px",
                  width: "32px",
                  height: "6px",
                  background: "rgba(0,0,0,0.8)",
                  borderRadius: "999px",
                  zIndex: 10,
                }}
              />

              {/* Noise / grain texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "180px",
                  opacity: 0.035,
                  zIndex: 1,
                }}
              />

              {/* Bottom info section */}
              <div
                className="mt-auto"
                style={{ padding: "2rem", position: "relative", zIndex: 5 }}
              >
                {/* Social icons */}
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    opacity: 0.45,
                    marginBottom: "1.4rem",
                  }}
                >
                  <a
                    href={`mailto:${DATA.email}`}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Mail size={13} color="white" />
                  </a>
                  <a
                    href={DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Linkedin size={13} color="white" />
                  </a>
                  <a
                    href={DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Github size={13} color="white" />
                  </a>
                </div>

                {/* Name + year */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
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
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {DATA.role}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
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
            </motion.div>

            {/* ══ BACK FACE ══ */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: ORB_GRADIENT,
                borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.4rem",
              }}
            >
              {/* Punch hole */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: "16px",
                  width: "32px",
                  height: "6px",
                  background: "rgba(0,0,0,0.8)",
                  borderRadius: "999px",
                  zIndex: 5,
                }}
              />

              {/* Grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "180px",
                  opacity: 0.035,
                  zIndex: 1,
                }}
              />

              <p
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  zIndex: 2,
                  margin: 0,
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
                  boxShadow:
                    "0 0 40px rgba(37,99,235,0.4), 0 8px 32px rgba(0,0,0,0.6)",
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
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.06em",
                  zIndex: 2,
                  margin: 0,
                }}
              >
                dinocodes.in
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
