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
  const arrowStroke = { stroke: "rgba(255,255,255,0.2)", strokeWidth: 1 };

  return (
    <svg
      viewBox="0 0 600 220"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="aq"
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
          id="aq-dim"
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

      {/* ── Producers (left column) ── */}
      <text x={55} y={9} {...sub} letterSpacing="0.12em">
        PRODUCERS
      </text>
      <rect x={10} y={18} width={90} height={28} {...dim} />
      <text x={55} y={32} {...txt}>
        Producer A
      </text>
      <rect x={10} y={60} width={90} height={28} {...dim} />
      <text x={55} y={74} {...txt}>
        Producer B
      </text>
      <rect x={10} y={102} width={90} height={28} {...dim} />
      <text x={55} y={116} {...txt}>
        Producer C
      </text>

      {/* Arrows: producers → broker */}
      <line
        x1={100}
        y1={32}
        x2={165}
        y2={52}
        {...arrowStroke}
        markerEnd="url(#aq)"
      />
      <line
        x1={100}
        y1={74}
        x2={165}
        y2={84}
        {...arrowStroke}
        markerEnd="url(#aq)"
      />
      <line
        x1={100}
        y1={116}
        x2={165}
        y2={116}
        {...arrowStroke}
        markerEnd="url(#aq)"
      />

      {/* ── Broker (middle) with 3 partitions ── */}
      <rect
        x={155}
        y={10}
        width={180}
        height={150}
        fill="rgba(255,255,255,0.01)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="4,3"
        rx={2}
      />
      <text x={245} y={22} {...sub} letterSpacing="0.12em">
        BROKER CLUSTER
      </text>

      {/* Partition 0 (highlighted) */}
      <rect x={168} y={32} width={154} height={30} {...hot} />
      <text x={245} y={44} {...{ ...txt, fill: "rgba(255,255,255,0.85)" }}>
        Partition 0
      </text>
      <text x={245} y={56} {...sub}>
        leader replica
      </text>

      {/* Partition 1 */}
      <rect x={168} y={74} width={154} height={30} {...dim} />
      <text x={245} y={84} {...txt}>
        Partition 1
      </text>
      <text x={245} y={96} {...sub}>
        ← offset log →
      </text>

      {/* Partition 2 */}
      <rect x={168} y={116} width={154} height={30} {...dim} />
      <text x={245} y={126} {...txt}>
        Partition 2
      </text>
      <text x={245} y={138} {...sub}>
        ← offset log →
      </text>

      {/* ── Consumer Groups (right) ── */}
      {/* CG1 */}
      <rect
        x={370}
        y={10}
        width={130}
        height={90}
        fill="rgba(255,255,255,0.01)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="4,3"
        rx={2}
      />
      <text x={435} y={22} {...sub} letterSpacing="0.10em">
        CONSUMER GROUP 1
      </text>
      <rect x={380} y={30} width={110} height={25} {...dim} />
      <text x={435} y={42} {...txt}>
        Consumer A
      </text>
      <rect x={380} y={62} width={110} height={25} {...dim} />
      <text x={435} y={74} {...txt}>
        Consumer B
      </text>

      {/* CG2 */}
      <rect
        x={370}
        y={112}
        width={130}
        height={48}
        fill="rgba(255,255,255,0.01)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="4,3"
        rx={2}
      />
      <text x={435} y={124} {...sub} letterSpacing="0.10em">
        CONSUMER GROUP 2
      </text>
      <rect x={380} y={132} width={110} height={25} {...dim} />
      <text x={435} y={144} {...txt}>
        Consumer C
      </text>

      {/* Arrows: partitions → consumers */}
      <line
        x1={322}
        y1={47}
        x2={380}
        y2={42}
        {...arrowStroke}
        markerEnd="url(#aq)"
      />
      <line
        x1={322}
        y1={89}
        x2={380}
        y2={74}
        {...arrowStroke}
        markerEnd="url(#aq)"
      />
      <line
        x1={322}
        y1={131}
        x2={380}
        y2={144}
        {...arrowStroke}
        markerEnd="url(#aq)"
      />

      {/* Footer label */}
      <text
        x={10}
        y={210}
        fill="rgba(255,255,255,0.18)"
        fontSize={8}
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
      >
        ARCHITECTURE — PARTITION-BASED PARALLELISM
      </text>
    </svg>
  );
}

/* ─── Partition / Offset Visual ─────────────────────────────────────────── */

function OffsetCanvas() {
  const offsets = [0, 1, 2, 3, 4, 5, 6, 7];
  const committed = 5;
  return (
    <div className="border border-white/[6 rounded-sm p-5 space-y-4 bg-white/[0.008]">
      <p className="text-[10px] uppercase tracking-widest text-white/22">
        Partition 0 — append-only log
      </p>
      {/* Segment blocks */}
      <div className="flex gap-px overflow-x-auto pb-1">
        {offsets.map((off) => (
          <div
            key={off}
            className={`flex flex-col items-center shrink-0 w-14 border-y border-r first:border-l ${
              off <= committed
                ? "border-white/20 bg-white/5"
                : "border-white/[0.07] bg-white/1.5"
            }`}
          >
            <div
              className={`text-[11px] font-mono py-2 w-full text-center ${
                off <= committed ? "text-white/70" : "text-white/35"
              }`}
            >
              msg {off}
            </div>
            <div
              className={`w-full text-center text-[9px] py-1 border-t ${
                off <= committed
                  ? "border-white/12 text-white/30 bg-white/3"
                  : "border-white/5 text-white/18"
              }`}
            >
              off:{off}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center shrink-0 w-10 text-white/20 text-lg pl-1">
          →
        </div>
      </div>
      {/* Legend */}
      <div className="flex gap-5 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border border-white/20 bg-white/5 rounded-sm" />
          <span className="text-[11px] text-white/40">
            committed (offset ≤ 5)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border border-white/[0.07] bg-white/1.5 rounded-sm" />
          <span className="text-[11px] text-white/30">uncommitted / ahead</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-white/30">
            Consumer Group 1 → offset committed:{" "}
            <code className="font-mono text-white/50">5</code>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── ISR Replication Visual ─────────────────────────────────────────────── */

function ISRDiagram() {
  return (
    <div className="border border-white/6 rounded-sm p-5 space-y-4 bg-white/[0.008]">
      <p className="text-[10px] uppercase tracking-widest text-white/22">
        Partition 0 — ISR replication
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        {/* Leader */}
        <div className="border border-white/25 bg-white/5 rounded-sm p-3 space-y-1 min-w-27.5">
          <p className="text-[10px] uppercase tracking-widest text-white/35">
            Leader
          </p>
          <p className="text-[12px] text-white font-medium">Broker 1</p>
          <p className="text-[10px] text-white/40">handles all reads/writes</p>
        </div>

        {/* Replication arrows */}
        <div className="flex flex-col gap-3">
          <span className="text-white/25 text-sm">→ replicate</span>
          <span className="text-white/25 text-sm">→ replicate</span>
        </div>

        {/* Followers */}
        <div className="flex flex-col gap-2">
          <div className="border border-white/10 bg-white/2 rounded-sm p-3 space-y-1 min-w-27.5">
            <p className="text-[10px] uppercase tracking-widest text-white/28">
              Follower (ISR)
            </p>
            <p className="text-[12px] text-white/60">Broker 2</p>
            <p className="text-[10px] text-white/30">in-sync replica</p>
          </div>
          <div className="border border-white/10 bg-white/2 rounded-sm p-3 space-y-1 min-w-27.5">
            <p className="text-[10px] uppercase tracking-widest text-white/28">
              Follower (ISR)
            </p>
            <p className="text-[12px] text-white/60">Broker 3</p>
            <p className="text-[10px] text-white/30">in-sync replica</p>
          </div>
        </div>
      </div>

      {/* acks table */}
      <div className="border-t border-white/5 pt-4 space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-white/22">
          Acknowledgment levels
        </p>
        <div className="divide-y divide-white/4">
          {[
            {
              ack: "acks=0",
              label: "Fire & forget",
              desc: "No durability guarantee, highest throughput",
            },
            {
              ack: "acks=1",
              label: "Leader confirms",
              desc: "Fast but data lost if leader crashes before replication",
            },
            {
              ack: "acks=all",
              label: "All ISR confirm ✓",
              desc: "Strongest durability — adds ~2–3ms latency",
            },
          ].map((row, i) => (
            <div key={i} className="flex gap-4 py-2">
              <code className="font-mono text-[11px] text-white/60 w-20 shrink-0">
                {row.ack}
              </code>
              <span
                className={`text-[11px] w-36 shrink-0 ${i === 2 ? "text-white/70" : "text-white/40"}`}
              >
                {row.label}
              </span>
              <span className="text-[11px] text-white/30">{row.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

export function MessageQueueCaseStudy() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Design a Distributed Message Queue | Case Studies | Debarshee Chakraborty"
        description="Kafka-inspired distributed message queue — partitioning, ISR replication, consumer groups, and offset management at 1M messages/sec."
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
                Design a Distributed Message Queue
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-sm shrink-0 mt-0.5">
                1M msg/s
              </span>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed">
              A Kafka-inspired durable message queue — producers, partitions,
              consumer groups, and ISR replication. Designed to sustain 1M
              messages/sec with at-least-once delivery and sub-10ms p99 latency.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Kafka", "KRaft", "Replication", "Partitioning", "Go"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-sm bg-white/4 border border-white/6 text-white/40"
                  >
                    {tag}
                  </span>
                ),
              )}
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

          {/* Partition Offset Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>Inside a Partition — The Offset Log</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Each partition is an ordered, append-only log on disk. Messages
              are written sequentially and indexed by offset. Consumers track
              their own position — the broker never pushes, consumers pull at
              their own pace.
            </p>
            <OffsetCanvas />
          </motion.div>

          {/* ISR Replication Canvas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SectionDivider />
            <SectionLabel>ISR Replication Model</SectionLabel>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Each partition has one leader and N−1 followers. The ISR (in-sync
              replicas) is the set of followers that are caught up within a
              configurable lag threshold. Only ISR members are eligible for
              leader election on broker failure.
            </p>
            <ISRDiagram />
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
                    "Producers publish messages to named topics",
                    "Consumers read messages in partition order",
                    "Consumer groups track independent offsets",
                    "At-least-once delivery guarantee",
                    "Configurable retention (time or size)",
                    "Replay from any historical offset",
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
                    "1M messages/sec aggregate throughput",
                    "End-to-end latency < 10ms at p99",
                    "Messages persisted before acknowledgment",
                    "Horizontally scalable — add brokers linearly",
                    "No single point of failure",
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
                { label: "Messages / sec", value: "1M" },
                { label: "Write throughput", value: "~1 GB/s" },
                { label: "With 3× replication", value: "~3 GB/s" },
                { label: "7-day retention", value: "~600 TB" },
                { label: "Brokers needed", value: "~100" },
                { label: "Partitions / topic", value: "100 – 1K" },
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
                  decision: "Consumer Model",
                  chosen: "Pull (consumers poll)",
                  alt: "Push (broker pushes)",
                  reason:
                    "Pull lets consumers control their own pace — natural back-pressure. Brokers don't need to track consumer speed or buffer per-consumer.",
                },
                {
                  decision: "Delivery Guarantee",
                  chosen: "At-least-once",
                  alt: "Exactly-once",
                  reason:
                    "At-least-once is simpler and more performant. Consumers handle idempotency using the message offset. Exactly-once requires distributed 2PC across producer, broker, and consumer.",
                },
                {
                  decision: "Coordination",
                  chosen: "KRaft (built-in Raft)",
                  alt: "Apache ZooKeeper",
                  reason:
                    "KRaft removes the external ZooKeeper dependency, enabling faster startup and removing the ~200K partition ceiling that ZooKeeper imposed.",
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
                "Hot partitions from popular keys → composite keys, sub-partitioning, or random salt suffix",
                "Leader concentration on one broker after failures → rack-aware replica placement and periodic leader rebalancing",
                "Consumer lag buildup → increase consumers up to partition count; optimise processing or add a Flink processing layer",
                "Disk I/O saturation on brokers → NVMe SSDs, tune flush intervals, enable LZ4 bulk compression",
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
