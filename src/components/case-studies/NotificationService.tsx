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
      viewBox="0 0 620 230"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="an"
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
          id="an-dim"
          viewBox="0 0 8 8"
          refX="4"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8z" fill="rgba(255,255,255,0.10)" />
        </marker>
      </defs>

      {/* API Layer */}
      <rect x={10} y={78} width={100} height={36} {...hot} />
      <text x={60} y={90} {...{ ...txt, fill: "rgba(255,255,255,0.85)" }}>
        API Layer
      </text>
      <text x={60} y={103} {...sub}>
        validate + enqueue
      </text>

      {/* Arrow → Fan-out */}
      <line
        x1={110}
        y1={96}
        x2={158}
        y2={96}
        stroke="rgba(255,255,255,0.22)"
        strokeWidth={1}
        markerEnd="url(#an)"
      />

      {/* Fan-out Service */}
      <rect x={160} y={78} width={110} height={36} {...hot} />
      <text x={215} y={90} {...{ ...txt, fill: "rgba(255,255,255,0.85)" }}>
        Fan-out Service
      </text>
      <text x={215} y={103} {...sub}>
        1 event → N tasks
      </text>

      {/* Priority Queue tiers (middle) */}
      <text x={365} y={12} {...sub} letterSpacing="0.10em">
        PRIORITY KAFKA TOPICS
      </text>
      <rect x={300} y={22} width={130} height={25} {...hot} />
      <text x={365} y={35} {...{ ...txt, fill: "rgba(255,255,255,0.9)" }}>
        Critical
      </text>
      <rect x={300} y={52} width={130} height={25} {...dim} />
      <text x={365} y={65} {...txt}>
        High
      </text>
      <rect x={300} y={82} width={130} height={25} {...dim} />
      <text x={365} y={95} {...txt}>
        Normal
      </text>
      <rect x={300} y={112} width={130} height={25} {...dim} />
      <text x={365} y={125} {...txt}>
        Low
      </text>

      {/* Fan-out → queues */}
      <line
        x1={270}
        y1={90}
        x2={300}
        y2={35}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
        markerEnd="url(#an-dim)"
      />
      <line
        x1={270}
        y1={93}
        x2={300}
        y2={65}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
        markerEnd="url(#an-dim)"
      />
      <line
        x1={270}
        y1={96}
        x2={300}
        y2={95}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={1}
        markerEnd="url(#an)"
      />
      <line
        x1={270}
        y1={99}
        x2={300}
        y2={125}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
        markerEnd="url(#an-dim)"
      />

      {/* Channel Workers */}
      <text x={535} y={12} {...sub} letterSpacing="0.10em">
        CHANNEL WORKERS
      </text>
      <rect x={480} y={22} width={90} height={25} {...dim} />
      <text x={525} y={35} {...txt}>
        Push (FCM)
      </text>
      <rect x={480} y={52} width={90} height={25} {...dim} />
      <text x={525} y={65} {...txt}>
        Email (SES)
      </text>
      <rect x={480} y={82} width={90} height={25} {...dim} />
      <text x={525} y={95} {...txt}>
        SMS (Twilio)
      </text>

      {/* Queues → workers */}
      <line
        x1={430}
        y1={35}
        x2={480}
        y2={35}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
        markerEnd="url(#an)"
      />
      <line
        x1={430}
        y1={65}
        x2={480}
        y2={65}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
        markerEnd="url(#an)"
      />
      <line
        x1={430}
        y1={95}
        x2={480}
        y2={95}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
        markerEnd="url(#an)"
      />
      <line
        x1={430}
        y1={125}
        x2={460}
        y2={125}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth={1}
        strokeDasharray="3,2"
      />

      {/* Delivery Tracker */}
      <rect x={300} y={160} width={130} height={28} {...dim} />
      <text x={365} y={170} {...txt}>
        Delivery Tracker
      </text>
      <text x={365} y={181} {...sub}>
        status + retry loop
      </text>
      <line
        x1={525}
        y1={107}
        x2={430}
        y2={174}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="3,2"
        markerEnd="url(#an-dim)"
      />

      {/* Preference Store */}
      <rect x={160} y={150} width={110} height={28} {...dim} />
      <text x={215} y={160} {...txt}>
        Preference Store
      </text>
      <text x={215} y={171} {...sub}>
        Redis (hot) + PG
      </text>
      <line
        x1={215}
        y1={114}
        x2={215}
        y2={150}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="3,2"
        markerEnd="url(#an-dim)"
      />

      <text
        x={10}
        y={220}
        fill="rgba(255,255,255,0.18)"
        fontSize={8}
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
      >
        ARCHITECTURE — EVENT-DRIVEN FAN-OUT DELIVERY
      </text>
    </svg>
  );
}

/* ─── Fan-out Write vs Read Canvas ──────────────────────────────────────── */

function FanOutCanvas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* Fan-out on Write */}
      <div className="border border-white/8 rounded-sm p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-widest text-white/50">
            Fan-out on Write
          </p>
          <span className="text-[9px] border border-white/20 text-white/40 px-2 py-0.5 rounded-sm">
            chosen ✓
          </span>
        </div>
        {/* Mini diagram */}
        <div className="space-y-2">
          <div className="border border-white/20 bg-white/4 rounded-sm px-3 py-2 text-center">
            <p className="text-[11px] text-white/80">1 broadcast event</p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-4 bg-white/20" />
          </div>
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/12 bg-white/2.5 rounded-sm py-1.5 text-center"
              >
                <p className="text-[9px] text-white/40">task</p>
              </div>
            ))}
          </div>
        </div>
        <ul className="space-y-1">
          {[
            "Tasks pre-materialised at write time",
            "Consistent low read latency",
            "Write amplification at 10M subscribers",
          ].map((pt, i) => (
            <li key={i} className="flex gap-2 text-[11px] text-white/45">
              <span className="text-white/20 shrink-0">·</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Fan-out on Read */}
      <div className="border border-white/6 rounded-sm p-4 space-y-3 opacity-70">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-widest text-white/35">
            Fan-out on Read
          </p>
          <span className="text-[9px] border border-white/8 text-white/25 px-2 py-0.5 rounded-sm">
            not chosen
          </span>
        </div>
        <div className="space-y-2">
          <div className="border border-white/8 rounded-sm px-3 py-2 text-center">
            <p className="text-[11px] text-white/40">1 event stored</p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-4 bg-white/8" />
          </div>
          <div className="border border-white/8 rounded-sm px-3 py-2 text-center">
            <p className="text-[10px] text-white/30">
              expand at consume time → latency grows with subscribers
            </p>
          </div>
        </div>
        <ul className="space-y-1">
          {[
            "Lower storage — one event record",
            "Read latency ∝ subscriber count",
            "Unacceptable for Critical priority",
          ].map((pt, i) => (
            <li key={i} className="flex gap-2 text-[11px] text-white/30">
              <span className="text-white/15 shrink-0">·</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Priority Queue Visual ──────────────────────────────────────────────── */

function PriorityQueueCanvas() {
  const tiers = [
    {
      label: "Critical",
      sla: "< 1 sec",
      lag: 12,
      maxLag: 1000,
      color: "bg-white/[0.4]",
    },
    {
      label: "High",
      sla: "< 30 sec",
      lag: 380,
      maxLag: 5000,
      color: "bg-white/[0.2]",
    },
    {
      label: "Normal",
      sla: "< 5 min",
      lag: 2100,
      maxLag: 20000,
      color: "bg-white/10",
    },
    {
      label: "Low",
      sla: "< 1 hour",
      lag: 8900,
      maxLag: 50000,
      color: "bg-white/5",
    },
  ];

  return (
    <div className="border border-white/6 rounded-sm p-5 space-y-3 bg-white/[0.008]">
      <p className="text-[10px] uppercase tracking-widest text-white/22">
        Consumer lag per priority topic — push channel
      </p>
      <div className="space-y-2.5">
        {tiers.map((tier) => {
          const pct = Math.min((tier.lag / tier.maxLag) * 100, 100);
          return (
            <div key={tier.label} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/60 w-20">
                  {tier.label}
                </span>
                <span className="text-[10px] text-white/30 font-mono">
                  {tier.lag.toLocaleString()} msgs lag
                </span>
                <span className="text-[10px] text-white/25">{tier.sla}</span>
              </div>
              <div className="h-1.5 bg-white/4 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${tier.color}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-white/28 leading-relaxed pt-1">
        Workers always drain the Critical topic before processing lower tiers.
        Alert threshold: Critical lag &gt; 1,000 messages.
      </p>
    </div>
  );
}

/* ─── Retry Flow Canvas ──────────────────────────────────────────────────── */

function RetryFlow() {
  const steps = [
    { label: "Deliver", detail: "channel worker calls FCM / SES / Twilio" },
    { label: "Failure", detail: "provider returns error or timeout" },
    { label: "30 sec", detail: "1st retry attempt" },
    { label: "2 min", detail: "2nd retry + jitter" },
    { label: "10 min", detail: "3rd retry" },
    { label: "1 hr", detail: "4th retry" },
    { label: "6 hr", detail: "5th retry" },
    { label: "DLQ", detail: "permanent dead-letter store" },
  ];

  return (
    <div className="border border-white/6 rounded-sm p-5 bg-white/[0.008] space-y-3">
      <p className="text-[10px] uppercase tracking-widest text-white/22">
        Retry schedule — exponential backoff with jitter
      </p>
      <div className="flex gap-0 flex-wrap">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`border rounded-sm px-2.5 py-1.5 space-y-0.5 text-center ${
                step.label === "DLQ"
                  ? "border-white/18 bg-white/4"
                  : step.label === "Deliver"
                    ? "border-white/18 bg-white/4"
                    : "border-white/[0.07]"
              }`}
            >
              <p
                className={`text-[11px] font-mono font-medium ${
                  step.label === "DLQ" ? "text-white/70" : "text-white/50"
                }`}
              >
                {step.label}
              </p>
              <p className="text-[9px] text-white/25 max-w-17.5 leading-tight">
                {step.detail}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center px-1">
                <div className="w-4 h-px bg-white/10" />
                <span className="text-white/15 text-xs">›</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-white/28 leading-relaxed">
        ±20% jitter added to each backoff window to prevent thundering herd
        after a mass failure event.
      </p>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

export function NotificationServiceCaseStudy() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Design a Notification Service | Case Studies | Debarshee Chakraborty"
        description="Event-driven notification service — fan-out strategies, priority queues, idempotent delivery, and retry with exponential backoff at 10M subscribers."
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
                Design a Notification Service
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-sm shrink-0 mt-0.5">
                10M subscribers
              </span>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed">
              An event-driven fan-out system for push, email, and SMS — priority
              queues, idempotent delivery, and exponential backoff retry.
              Designed to fan out one broadcast event to 10M subscribers in
              under 60 seconds.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Kafka",
                "WebSockets",
                "Fan-out",
                "Priority Queue",
                "AWS SNS",
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

          {/* Fan-out Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Fan-out Strategies</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Fan-out on write pre-materialises one task per subscriber the
              moment an event arrives. Fan-out on read expands lazily at consume
              time — simpler storage but read latency grows with subscriber
              count.
            </p>
            <FanOutCanvas />
          </motion.div>

          {/* Priority Queue Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Priority Queue — Four-Tier Model</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Kafka has no native priority. We model it with four separate
              topics per channel. Workers always drain the Critical topic before
              processing lower tiers — guaranteeing Critical messages are never
              starved by low-priority floods.
            </p>
            <PriorityQueueCanvas />
          </motion.div>

          {/* Idempotent Delivery */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Idempotent Delivery — Dedup Redis Key</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Duplicate notifications are inevitable: Kafka at-least-once
              delivery, worker retries, and client resends all produce
              duplicates. Each notification task is assigned a deterministic
              UUID — workers check Redis before every delivery attempt.
            </p>
            <div className="border border-white/6 rounded-sm p-4 space-y-3 bg-white/[0.008]">
              <p className="text-[10px] uppercase tracking-widest text-white/22">
                Dedup key derivation
              </p>
              <pre className="text-[11px] font-mono text-white/55 leading-relaxed overflow-x-auto">
                {`notificationId = sha256(
  userId    + ":" +
  templateId + ":" +
  eventId   + ":" +
  hourBucket          // floor(timestamp / 3600)
)

// Before delivery:
result = SETNX dedup:{notificationId} 1
EXPIRE dedup:{notificationId} 86400   // 24h TTL

if result == 0:
  skip()   // already delivered
else:
  deliver()`}
              </pre>
              <p className="text-[11px] text-white/30 leading-relaxed">
                Same event replayed in the same hour always produces the same
                UUID. Prevents duplicate push/email/SMS across crash-recovery
                and Kafka partition rebalancing.
              </p>
            </div>
          </motion.div>

          {/* Retry Flow Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Retry Flow — Dead-letter Queue</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Failed deliveries are never retried inline. The worker writes the
              failed task to a dead-letter Kafka topic with a{" "}
              <code className="font-mono text-white/60">nextRetryAt</code>{" "}
              timestamp. A retry scheduler re-enqueues eligible tasks after each
              backoff window.
            </p>
            <RetryFlow />
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
                    "Push (APNs/FCM), email (SES), SMS (Twilio)",
                    "Per-user channel opt-in/out preferences",
                    "Priority levels: Critical → High → Normal → Low",
                    "Retry with exponential backoff + DLQ",
                    "Idempotent delivery within 24h window",
                    "Targeted (1:1) and broadcast (1:N) modes",
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
                    "Support 10M active subscribers",
                    "Critical: delivered within 1 second",
                    "Normal: delivered within 5 minutes",
                    "At-least-once with deduplication",
                    "99.9% delivery rate for Critical priority",
                    "1 broadcast → 10M tasks in < 60 seconds",
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
                { label: "Active subscribers", value: "10M" },
                { label: "Notifications / day", value: "50M avg" },
                { label: "Avg throughput", value: "~580 / sec" },
                { label: "Peak fan-out", value: "~170K / sec" },
                { label: "Dedup window", value: "24h / Redis" },
                { label: "Max retries", value: "5 × backoff" },
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
                  decision: "Fan-out Timing",
                  chosen: "Fan-out on write",
                  alt: "Fan-out on read",
                  reason:
                    "Fan-out on write pre-materialises tasks for consistent low read latency. Fan-out on read latency grows proportionally to subscriber count — unacceptable for Critical notifications.",
                },
                {
                  decision: "Queue System",
                  chosen: "Apache Kafka",
                  alt: "AWS SQS",
                  reason:
                    "Kafka supports message replay from any offset, sustains 1M msg/s throughput, and supports log compaction. SQS cannot replay messages and caps at a lower throughput ceiling.",
                },
                {
                  decision: "Dedup State",
                  chosen: "Redis SETNX + TTL",
                  alt: "PostgreSQL unique constraint",
                  reason:
                    "Redis SETNX is a single atomic O(1) operation with sub-millisecond latency. PostgreSQL unique constraints add 5–10ms per delivery and require schema management at scale.",
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
                "Fan-out worker throughput during viral events → pre-scale worker pool from subscriber count estimate; use batch Kafka produce (5K records/call)",
                "FCM/APNs provider rate limits during push storms → per-provider token-bucket limiting; FCM batch API (up to 500 device tokens per request)",
                "Redis dedup memory growth at 50M notifications/day → shard by userId prefix; Bloom filter as probabilistic first-pass to skip ~99% of Redis checks",
                "Preference store lookup on every fan-out task at 170K/sec → in-process cache with 5-minute TTL; invalidate via Kafka CDC event on preference update",
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
