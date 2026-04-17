import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../../constants/animations";
import { PageLayout } from "../ui/PageLayout";
import { SEO } from "../ui/SEO";

/* ─── Shared micro-components ──────────────────────────────────────────── */

function SectionDivider() {
  return <div className="border-t border-white/6" />;
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-medium">
      {children}
    </h2>
  );
}

/* ─── Architecture Diagram ──────────────────────────────────────────────── */

function ArchDiagram() {
  const boxStyle = {
    stroke: "rgba(255,255,255,0.10)",
    strokeWidth: 1,
    fill: "rgba(255,255,255,0.025)",
    rx: 2,
  };
  const hotBox = {
    stroke: "rgba(255,255,255,0.25)",
    strokeWidth: 1,
    fill: "rgba(255,255,255,0.055)",
    rx: 2,
  };
  const label = {
    fill: "rgba(255,255,255,0.65)",
    fontSize: 10,
    fontFamily: "system-ui, sans-serif",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
  };
  const sublabel = {
    fill: "rgba(255,255,255,0.28)",
    fontSize: 8,
    fontFamily: "system-ui, sans-serif",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
  };

  return (
    <svg
      viewBox="0 0 540 230"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="ah"
          viewBox="0 0 8 8"
          refX="4"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8z" fill="rgba(255,255,255,0.22)" />
        </marker>
        <marker
          id="ah-dim"
          viewBox="0 0 8 8"
          refX="4"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8z" fill="rgba(255,255,255,0.12)" />
        </marker>
      </defs>

      {/* Row 1 — left horizontal flow */}
      <rect x={10} y={22} width={80} height={30} {...boxStyle} />
      <text x={50} y={33} {...label}>
        Client
      </text>
      <text x={50} y={44} {...sublabel}>
        browser
      </text>

      <line
        x1={90}
        y1={37}
        x2={138}
        y2={37}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={1}
        markerEnd="url(#ah)"
      />

      <rect x={140} y={22} width={100} height={30} {...boxStyle} />
      <text x={190} y={33} {...label}>
        Load Balancer
      </text>
      <text x={190} y={44} {...sublabel}>
        health-checks
      </text>

      <line
        x1={240}
        y1={37}
        x2={293}
        y2={37}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={1}
        markerEnd="url(#ah)"
      />

      {/* App Server — highlighted */}
      <rect x={295} y={22} width={120} height={30} {...hotBox} />
      <text
        x={355}
        y={33}
        {...{ ...label, fill: "rgba(255,255,255,0.85)", fontWeight: 500 }}
      >
        App Server
      </text>
      <text x={355} y={44} {...sublabel}>
        stateless · ×N
      </text>

      {/* Arrow App → Redis (vertical) */}
      <line
        x1={355}
        y1={52}
        x2={355}
        y2={96}
        stroke="rgba(255,255,255,0.28)"
        strokeWidth={1}
        markerEnd="url(#ah)"
      />
      <text x={367} y={75} {...{ ...sublabel, textAnchor: "start" as const }}>
        check cache
      </text>

      {/* Redis — hot path */}
      <rect x={295} y={98} width={120} height={30} {...hotBox} />
      <text
        x={355}
        y={109}
        {...{ ...label, fill: "rgba(255,255,255,0.9)", fontWeight: 500 }}
      >
        Redis Cache
      </text>
      <text x={355} y={120} {...sublabel}>
        hit → return ←
      </text>

      {/* Cache-hit return path (dashed left loop) */}
      <path
        d="M295,113 L262,113 L262,37 L240,37"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth={1}
        strokeDasharray="3,3"
      />

      {/* Arrow Redis → PostgreSQL (dashed miss) */}
      <line
        x1={355}
        y1={128}
        x2={355}
        y2={172}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
        strokeDasharray="3,3"
        markerEnd="url(#ah-dim)"
      />
      <text x={367} y={151} {...{ ...sublabel, textAnchor: "start" as const }}>
        cache miss
      </text>

      {/* PostgreSQL */}
      <rect x={295} y={174} width={120} height={30} {...boxStyle} />
      <text x={355} y={185} {...label}>
        PostgreSQL
      </text>
      <text x={355} y={196} {...sublabel}>
        source of truth
      </text>

      {/* Analytics side — bottom left */}
      <rect x={10} y={98} width={90} height={30} {...boxStyle} />
      <text x={55} y={113} {...label}>
        Kafka
      </text>
      <text x={55} y={124} {...sublabel}>
        click events
      </text>

      {/* Arrow App → Kafka (long diagonal) */}
      <path
        d="M295,42 L100,42 L100,98"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="3,2"
        markerEnd="url(#ah-dim)"
      />

      <rect x={10} y={174} width={90} height={30} {...boxStyle} />
      <text x={55} y={185} {...label}>
        Analytics
      </text>
      <text x={55} y={196} {...sublabel}>
        async worker
      </text>
      <line
        x1={55}
        y1={128}
        x2={55}
        y2={174}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth={1}
        markerEnd="url(#ah-dim)"
      />

      {/* Diagram footer label */}
      <text
        x={10}
        y={220}
        fill="rgba(255,255,255,0.18)"
        fontSize={8}
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
      >
        ARCHITECTURE — REQUEST LIFECYCLE
      </text>
    </svg>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

export function URLShortenerCaseStudy() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Design a URL Shortener | Case Studies | Debarshee Chakraborty"
        description="High-availability URL shortener — Base62 encoding, Redis caching, consistent hashing, and 301 vs 302 trade-offs at 100M redirects/day."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Sidebar */}
        <motion.div variants={itemVariants}>
          <Link
            to="/system-designs"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Case Studies
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h1 className="text-white font-medium text-xl leading-snug">
                Design a URL Shortener
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-sm shrink-0 mt-0.5">
                100M req/day
              </span>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed">
              High-availability URL shortening service. A classic read-heavy
              system (100:1 read-to-write ratio) that lives and dies on cache
              efficiency, redirect strategy, and encoding design.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Redis",
                "Consistent Hashing",
                "Base62",
                "PostgreSQL",
                "CDN",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-sm bg-white/4 border border-white/6 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Architecture Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Architecture</SectionLabel>
            <div className="border border-white/6 rounded-sm p-5 bg-white/[0.008] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.018]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative">
                <ArchDiagram />
              </div>
            </div>
          </motion.div>

          {/* 301 vs 302 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>The Redirect Decision — 301 vs 302</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Every URL shortener must pick a redirect type. This single HTTP
              status code decision reshapes your analytics story and server load
              profile entirely.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border border-white/8 rounded-sm p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <code className="text-[13px] text-white/60 font-mono">
                    301
                  </code>
                  <span className="text-[10px] text-white/25 border border-white/8 px-2 py-0.5 rounded-sm">
                    Permanent
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Browser caches redirect permanently",
                    "Subsequent hits bypass your servers",
                    "Lower infrastructure cost at scale",
                    "Analytics are blind after first hit",
                  ].map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[12px] text-white/40"
                    >
                      <span className="text-white/20 shrink-0">·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-white/22 italic pt-1">
                  Use when: analytics are not a product requirement.
                </p>
              </div>

              <div className="border border-white/20 rounded-sm p-4 space-y-2.5 bg-white/2">
                <div className="flex items-center justify-between">
                  <code className="text-[13px] text-white font-mono">302</code>
                  <span className="text-[10px] text-white/50 border border-white/20 px-2 py-0.5 rounded-sm">
                    Temporary ✓ chosen
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Every redirect reaches our server",
                    "Full click tracking + real-time analytics",
                    "Geo-routing and A/B testing possible",
                    "Higher load — offset by Redis cache",
                  ].map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[12px] text-white/60"
                    >
                      <span className="text-white/30 shrink-0">·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-white/32 italic pt-1">
                  Use when: click analytics and routing control are core
                  features.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Base62 Encoding Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Base62 Encoding</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              7 characters from a 62-symbol alphabet (0–9, A–Z, a–z) gives 62⁷ ≈
              3.5 trillion unique codes — enough for decades of URLs at any
              foreseeable scale.
            </p>
            <div className="border border-white/6 rounded-sm p-5 space-y-5">
              {/* Alphabet grid */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-white/22">
                  Alphabet — 62 symbols
                </p>
                <div className="flex flex-wrap gap-1">
                  {"0123456789".split("").map((c) => (
                    <span
                      key={`n-${c}`}
                      className="font-mono text-[10px] w-6 h-6 flex items-center justify-center border border-white/8 text-white/35 rounded-sm"
                    >
                      {c}
                    </span>
                  ))}
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => (
                    <span
                      key={`u-${c}`}
                      className="font-mono text-[10px] w-6 h-6 flex items-center justify-center border border-white/8 text-white/50 rounded-sm"
                    >
                      {c}
                    </span>
                  ))}
                  {"abcdefghijklmnopqrstuvwxyz".split("").map((c) => (
                    <span
                      key={`l-${c}`}
                      className="font-mono text-[10px] w-6 h-6 flex items-center justify-center border border-white/8 text-white/65 rounded-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* 7-char code visual */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-white/22">
                  Sample short code — 7 positions
                </p>
                <div className="flex gap-2 flex-wrap items-end">
                  {["a", "B", "3", "x", "Q", "2", "k"].map((c, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className="font-mono text-white text-lg border border-white/25 bg-white/6 w-10 h-10 flex items-center justify-center rounded-sm">
                        {c}
                      </span>
                      <span className="text-[9px] text-white/20 font-mono">
                        pos {i + 1}
                      </span>
                    </div>
                  ))}
                  <div className="ml-3 pb-1 space-y-1">
                    <p className="font-mono text-[13px] text-white/70">
                      62⁷ = 3,521,614,606,208
                    </p>
                    <p className="text-[10px] text-white/30">
                      unique codes available
                    </p>
                  </div>
                </div>
              </div>

              {/* Collision note */}
              <div className="border-t border-white/5 pt-4 space-y-1">
                <p className="text-[11px] uppercase tracking-widest text-white/22">
                  Collision handling
                </p>
                <p className="text-[12px] text-white/40 leading-relaxed">
                  Generate a random 7-char code → check if the short code
                  already exists in PostgreSQL → retry up to 3 times on
                  collision (probability: 1 in 3.5T). A Bloom filter can
                  short-circuit 99% of checks in O(1).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Requirements</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-white/40">
                  Functional
                </p>
                <ul className="space-y-2">
                  {[
                    "Generate a short alias for any long URL",
                    "Redirect from short URL to original",
                    "Support optional custom aliases",
                    "URL expiry with auto-deactivation",
                    "Basic click analytics per URL",
                  ].map((req, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] text-white/50 leading-relaxed"
                    >
                      <span className="text-white/20 shrink-0 mt-0.5 select-none">
                        ·
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-white/40">
                  Non-Functional
                </p>
                <ul className="space-y-2">
                  {[
                    "100M redirects/day — ~1,200 req/s avg",
                    "Read-heavy: 100:1 read-to-write ratio",
                    "99.99% uptime for redirect endpoint",
                    "Redirect latency < 100ms at p99",
                    "Short codes must not be enumerable",
                  ].map((req, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] text-white/50 leading-relaxed"
                    >
                      <span className="text-white/20 shrink-0 mt-0.5 select-none">
                        ·
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Capacity */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Capacity Estimation</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {[
                { label: "Redirects / day", value: "100M" },
                { label: "Reads / sec (avg)", value: "~1,160" },
                { label: "Writes / sec", value: "~12" },
                { label: "Storage / year", value: "~180 GB" },
                { label: "Cache (top 20%)", value: "~4 GB" },
                { label: "Code space", value: "62⁷ ≈ 3.5T" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="border border-white/6 rounded-sm p-3.5 space-y-1.5"
                >
                  <p className="text-white font-medium text-[14px] font-mono">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-white/35 uppercase tracking-wider">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trade-offs */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Key Trade-offs</SectionLabel>
            <div className="space-y-2.5">
              {[
                {
                  decision: "Redirect Type",
                  chosen: "302 Temporary",
                  alt: "301 Permanent",
                  reason:
                    "302 hits our server on every redirect enabling real-time analytics. 301 caches in browsers — click tracking becomes impossible for repeat visitors.",
                },
                {
                  decision: "Code Generation",
                  chosen: "Random Base62 + collision check",
                  alt: "Sequential counter in Base62",
                  reason:
                    "Random codes prevent enumeration attacks. Sequential IDs can be iterated to scrape every stored URL in minutes.",
                },
                {
                  decision: "Cache Population",
                  chosen: "Write-through on create",
                  alt: "Lazy (fill on first miss)",
                  reason:
                    "Write-through ensures even the first redirect of a new URL hits cache. Lazy caching causes a DB stampede when a viral link is shared simultaneously by thousands.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="border border-white/6 rounded-sm p-4 space-y-2.5 hover:border-white/12 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/28">
                    {t.decision}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap text-[13px]">
                    <span className="text-white font-medium">✓ {t.chosen}</span>
                    <span className="text-white/18 text-[11px]">vs</span>
                    <span className="text-white/32 line-through decoration-white/18">
                      {t.alt}
                    </span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-relaxed">
                    {t.reason}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottlenecks */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Bottlenecks & Improvements</SectionLabel>
            <ul className="space-y-3">
              {[
                "Single DB write node saturates at high write throughput → introduce write sharding or a time-series write buffer (Cassandra for click events)",
                "Redis single-node memory limit → Redis Cluster with consistent hashing distributes keys across nodes",
                "Viral short code creates a hot key in Redis → replicate that key across multiple nodes and randomise which replica serves each read",
                "Click counter writes suffer contention at scale → use HyperLogLog probabilistic counters or route all click events through an async Kafka pipeline",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-[13px] text-white/50 leading-relaxed list-none"
                >
                  <span className="text-white/20 shrink-0 font-mono text-[11px] mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
