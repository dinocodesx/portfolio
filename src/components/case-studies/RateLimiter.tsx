import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../../constants/animations";
import { PageLayout } from "../ui/PageLayout";
import { SEO } from "../ui/SEO";

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
  const dim = {
    fill: "rgba(255,255,255,0.025)",
    stroke: "rgba(255,255,255,0.10)",
    strokeWidth: 1,
    rx: 2,
  };
  const hot = {
    fill: "rgba(255,255,255,0.055)",
    stroke: "rgba(255,255,255,0.25)",
    strokeWidth: 1,
    rx: 2,
  };
  const txt = {
    fill: "rgba(255,255,255,0.65)",
    fontSize: 10,
    fontFamily: "system-ui, sans-serif",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
  };
  const sub = {
    fill: "rgba(255,255,255,0.28)",
    fontSize: 8,
    fontFamily: "system-ui, sans-serif",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
  };

  return (
    <svg
      viewBox="0 0 580 190"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="ar"
          viewBox="0 0 8 8"
          refX="4"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8z" fill="rgba(255,255,255,0.22)" />
        </marker>
      </defs>

      {/* ── Multiple API Gateway nodes (left) ── */}
      <text x={70} y={10} {...sub} letterSpacing="0.12em">
        API GATEWAYS
      </text>

      <rect x={10} y={22} width={120} height={28} {...dim} />
      <text x={70} y={32} {...txt}>
        Gateway Node 1
      </text>
      <text x={70} y={43} {...sub}>
        rate limiter middleware
      </text>

      <rect x={10} y={64} width={120} height={28} {...dim} />
      <text x={70} y={74} {...txt}>
        Gateway Node 2
      </text>
      <text x={70} y={85} {...sub}>
        rate limiter middleware
      </text>

      <rect x={10} y={106} width={120} height={28} {...dim} />
      <text x={70} y={116} {...txt}>
        Gateway Node 3
      </text>
      <text x={70} y={127} {...sub}>
        rate limiter middleware
      </text>

      {/* Arrows → Lua call */}
      <line
        x1={130}
        y1={36}
        x2={200}
        y2={65}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
        markerEnd="url(#ar)"
      />
      <line
        x1={130}
        y1={78}
        x2={200}
        y2={78}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
        markerEnd="url(#ar)"
      />
      <line
        x1={130}
        y1={120}
        x2={200}
        y2={90}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
        markerEnd="url(#ar)"
      />

      {/* Lua Atomic Script node */}
      <rect x={202} y={58} width={110} height={40} {...hot} />
      <text x={257} y={72} {...{ ...txt, fill: "rgba(255,255,255,0.85)" }}>
        Lua Script
      </text>
      <text x={257} y={87} {...sub}>
        atomic check + decrement
      </text>

      {/* Arrow Lua → Redis Cluster */}
      <line
        x1={312}
        y1={78}
        x2={368}
        y2={78}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth={1}
        markerEnd="url(#ar)"
      />

      {/* Redis Cluster nodes */}
      <text x={430} y={22} {...sub} letterSpacing="0.10em">
        REDIS CLUSTER
      </text>
      <rect x={370} y={32} width={100} height={28} {...hot} />
      <text x={420} y={42} {...{ ...txt, fill: "rgba(255,255,255,0.85)" }}>
        Redis Shard A
      </text>
      <text x={420} y={53} {...sub}>
        clients A–J
      </text>

      <rect x={370} y={72} width={100} height={28} {...dim} />
      <text x={420} y={82} {...txt}>
        Redis Shard B
      </text>
      <text x={420} y={93} {...sub}>
        clients K–R
      </text>

      <rect x={370} y={112} width={100} height={28} {...dim} />
      <text x={420} y={122} {...txt}>
        Redis Shard C
      </text>
      <text x={420} y={133} {...sub}>
        clients S–Z
      </text>

      {/* Config Store */}
      <rect x={480} y={155} width={90} height={26} {...dim} />
      <text x={525} y={168} {...sub}>
        Config Store
      </text>

      {/* Circuit Breaker */}
      <rect x={202} y={130} width={110} height={28} {...dim} />
      <text x={257} y={140} {...txt}>
        Circuit Breaker
      </text>
      <text x={257} y={151} {...sub}>
        fail open on timeout
      </text>
      <line
        x1={257}
        y1={98}
        x2={257}
        y2={130}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth={1}
        strokeDasharray="3,2"
      />

      <text
        x={10}
        y={180}
        fill="rgba(255,255,255,0.18)"
        fontSize={8}
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
      >
        ARCHITECTURE — DISTRIBUTED RATE LIMITER
      </text>
    </svg>
  );
}

/* ─── Algorithm Comparison Canvas ───────────────────────────────────────── */

type AlgoRow = {
  name: string;
  memory: string;
  accuracy: string;
  burst: string;
  best: string;
  chosen?: boolean;
};

const ALGORITHMS: AlgoRow[] = [
  {
    name: "Fixed Window Counter",
    memory: "O(1)",
    accuracy: "Poor at boundaries",
    burst: "2× limit possible",
    best: "Simple internal APIs",
  },
  {
    name: "Token Bucket",
    memory: "O(1)",
    accuracy: "Good + burst allow",
    burst: "Yes — by design",
    best: "APIs with burst tolerance",
  },
  {
    name: "Sliding Window Log",
    memory: "O(N) per user",
    accuracy: "Exact",
    burst: "No",
    best: "High-accuracy quota billing",
  },
  {
    name: "Sliding Window Counter",
    memory: "O(1)",
    accuracy: "≤1% error",
    burst: "No",
    best: "High-scale production",
    chosen: true,
  },
];

function AlgoComparison() {
  return (
    <div className="border border-white/6 rounded-sm overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-0 border-b border-white/6 bg-white/2">
        {["Algorithm", "Memory", "Accuracy", "Best for"].map((h) => (
          <div
            key={h}
            className="px-3 py-2 text-[10px] uppercase tracking-widest text-white/30"
          >
            {h}
          </div>
        ))}
      </div>
      {ALGORITHMS.map((algo, i) => (
        <div
          key={i}
          className={`grid grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-0 border-b border-white/4 last:border-0 ${
            algo.chosen ? "bg-white/3" : ""
          }`}
        >
          <div className="px-3 py-2.5 flex items-center gap-2">
            <span
              className={`text-[12px] ${algo.chosen ? "text-white font-medium" : "text-white/55"}`}
            >
              {algo.name}
            </span>
            {algo.chosen && (
              <span className="text-[9px] border border-white/25 text-white/50 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                chosen
              </span>
            )}
          </div>
          <div className="px-3 py-2.5">
            <code
              className={`text-[11px] font-mono ${algo.chosen ? "text-white/80" : "text-white/40"}`}
            >
              {algo.memory}
            </code>
          </div>
          <div className="px-3 py-2.5 text-[11px] text-white/40">
            {algo.accuracy}
          </div>
          <div className="px-3 py-2.5 text-[11px] text-white/40">
            {algo.best}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Token Bucket Visual ────────────────────────────────────────────────── */

function TokenBucketCanvas() {
  const tokens = 7;
  const capacity = 10;
  const fill = (tokens / capacity) * 100;

  return (
    <div className="border border-white/6 rounded-sm p-5 space-y-5 bg-white/[0.008]">
      <p className="text-[10px] uppercase tracking-widest text-white/22">
        Token bucket — client "api_key_abc123" — burst capacity: {capacity}
      </p>
      <div className="flex gap-8 items-start flex-wrap">
        {/* Bucket graphic */}
        <div className="space-y-1.5">
          <p className="text-[10px] text-white/30">
            Current tokens:{" "}
            <code className="font-mono text-white/60">{tokens}</code>
          </p>
          <div className="w-20 h-32 border border-white/20 rounded-b-sm relative overflow-hidden">
            {/* Fill */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-white/12 transition-all"
              style={{ height: `${fill}%` }}
            />
            {/* Token dots */}
            <div className="absolute inset-0 flex flex-wrap content-end justify-center gap-1 p-2">
              {Array.from({ length: tokens }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-white/40 shrink-0"
                />
              ))}
            </div>
          </div>
          {/* Refill rate label */}
          <p className="text-[9px] text-white/22">refills at 5 tokens/sec</p>
        </div>

        {/* State table */}
        <div className="space-y-2 flex-1">
          <div className="divide-y divide-white/4">
            {[
              { label: "Bucket capacity (B)", value: "10 tokens" },
              { label: "Refill rate (R)", value: "5 tokens / sec" },
              { label: "Current tokens", value: `${tokens}` },
              { label: "Request cost", value: "1 token" },
              {
                label: "Burst headroom",
                value: `${tokens} requests immediately`,
              },
              { label: "Redis key shape", value: "(tokens, lastRefillTs)" },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 py-1.5">
                <span className="text-[11px] text-white/35 w-44 shrink-0">
                  {row.label}
                </span>
                <code className="font-mono text-[11px] text-white/60">
                  {row.value}
                </code>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/30 leading-relaxed pt-1">
            Refill is lazy — computed on each request from{" "}
            <code className="font-mono text-white/45">elapsedTime × R</code>. No
            background cron job needed.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

export function RateLimiterCaseStudy() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Design a Rate Limiter | Case Studies | Debarshee Chakraborty"
        description="Distributed rate limiter — token bucket vs sliding window algorithms, atomic Redis Lua scripts, and multi-gateway consistency at 50K req/s."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <motion.div variants={itemVariants}>
          <Link
            to="/system-designs"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Case Studies
          </Link>
        </motion.div>

        <div className="space-y-10">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h1 className="text-white font-medium text-xl leading-snug">
                Design a Rate Limiter
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-sm shrink-0 mt-0.5">
                50K req/s
              </span>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed">
              A distributed rate limiter running as in-process middleware inside
              each API gateway. Algorithm selection, atomic Redis operations,
              and fail-open fault tolerance — all under a 5ms latency budget.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Redis",
                "Token Bucket",
                "Sliding Window",
                "API Gateway",
                "Lua",
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

          {/* Algorithm Comparison */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Algorithm Comparison</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Four common algorithms — each with distinct memory, accuracy, and
              burst characteristics. The choice is a direct trade-off between
              implementation simplicity and correctness under concurrent load.
            </p>
            <AlgoComparison />
          </motion.div>

          {/* Token Bucket Visual */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Token Bucket — Visual State</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Each client has a virtual bucket with capacity B. Tokens refill at
              rate R/sec. Each request consumes one token. Bursting is allowed
              up to B tokens. State is stored as a two-field Redis hash — no
              background jobs needed.
            </p>
            <TokenBucketCanvas />
          </motion.div>

          {/* Atomic Lua explanation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Atomic Redis Lua Script</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Race condition: two gateway nodes both read the same counter
              before either writes — both allow a request that should be denied.
              A Lua script running in Redis is atomic: the entire
              read-check-write sequence executes as one indivisible operation.
            </p>
            <div className="border border-white/6 rounded-sm p-4 bg-white/[0.008] space-y-3">
              <p className="text-[10px] uppercase tracking-widest text-white/22">
                Sliding window counter — Lua pseudocode
              </p>
              <pre className="text-[11px] font-mono text-white/55 leading-relaxed overflow-x-auto">
                {`local prev    = tonumber(redis.call("GET", prevKey) or 0)
local curr    = tonumber(redis.call("GET", currKey) or 0)
local elapsed = now % windowSize
local weight  = (windowSize - elapsed) / windowSize
local count   = prev * weight + curr

if count >= limit then
  return 0          -- rejected: 429
end

redis.call("INCR",    currKey)
redis.call("EXPIRE",  currKey, windowSize * 2)
return 1            -- allowed`}
              </pre>
              <p className="text-[11px] text-white/30">
                EVAL executes atomically — no other Redis command runs between
                the reads and the INCR. Adds ~0.1ms vs a plain GET.
              </p>
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
                    "Throttle per client ID, IP, or API key",
                    "Configurable limits per tier/endpoint",
                    "HTTP 429 + Retry-After on rejection",
                    "Multiple time windows simultaneously",
                    "Controlled bursting above steady rate",
                  ].map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] text-white/50 leading-relaxed"
                    >
                      <span className="text-white/20 shrink-0 mt-0.5 select-none">
                        ·
                      </span>
                      {r}
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
                    "< 5ms overhead per request at p99",
                    "50,000 requests/sec aggregate",
                    "Correct across all distributed nodes",
                    "Fail open if Redis unreachable",
                    "≤ 0.1% error rate under concurrency",
                  ].map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] text-white/50 leading-relaxed"
                    >
                      <span className="text-white/20 shrink-0 mt-0.5 select-none">
                        ·
                      </span>
                      {r}
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
                { label: "Requests / sec", value: "50K" },
                { label: "Redis ops / sec", value: "~50K" },
                { label: "Memory / user", value: "~80 bytes" },
                { label: "1M active users", value: "~80 MB" },
                { label: "Redis capacity", value: "~1M ops/s" },
                { label: "Latency budget", value: "< 5ms" },
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
                  decision: "Algorithm",
                  chosen: "Sliding Window Counter",
                  alt: "Token Bucket",
                  reason:
                    "Sliding window counter is near-exact with O(1) memory. Token bucket allows bursting but can be gamed — clients timing requests at window start get up to 2× the limit.",
                },
                {
                  decision: "State Location",
                  chosen: "Centralised Redis Cluster",
                  alt: "Local in-process counter",
                  reason:
                    "Centralised Redis ensures consistent counts across all gateways. Local counters are faster but allow clients to bypass limits by hitting multiple gateway nodes.",
                },
                {
                  decision: "Failure Mode",
                  chosen: "Fail open (allow on Redis timeout)",
                  alt: "Fail closed (deny on timeout)",
                  reason:
                    "Rate limiting is a UX safety feature, not a security boundary. Failing open preserves availability during a Redis blip. Failing closed drops all traffic on Redis failure.",
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
                "Redis shard saturates under very high QPS → shard clients by consistent hash of client ID across Redis Cluster nodes",
                "Hot keys for high-traffic clients → add local in-process counter as a first-pass filter; use Redis as the authoritative backstop",
                "Config propagation lag on limit changes → Redis pub/sub for push-based updates instead of poll intervals",
                "Distributed clock skew between gateways → derive window boundaries from Redis server-side timestamp, not local node clocks",
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
