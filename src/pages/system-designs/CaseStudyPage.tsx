import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../../constants/animations";
import { PageLayout } from "../../components/ui/PageLayout";
import { SEO } from "../../components/ui/SEO";
import type { CaseStudyContent } from "../../constants/caseStudies";

const METHOD_STYLES: Record<string, string> = {
  GET: "text-emerald-400/80",
  POST: "text-sky-400/80",
  PUT: "text-amber-400/80",
  DELETE: "text-rose-400/80",
};

interface CaseStudyPageProps {
  content: CaseStudyContent;
}

/** Thin horizontal rule used between major sections */
function SectionDivider() {
  return <div className="border-t border-white/6" />;
}

/** Small ALL-CAPS section label */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-medium">
      {children}
    </h2>
  );
}

export function CaseStudyPage({ content }: CaseStudyPageProps) {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title={`${content.title} | Case Studies | Debarshee Chakraborty`}
        description={content.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* ── Sidebar ──────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Link
            to="/system-designs"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Case Studies
          </Link>
        </motion.div>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div className="space-y-10">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h1 className="text-white font-medium text-xl leading-snug">
                {content.title}
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-sm shrink-0 mt-0.5">
                {content.scale}
              </span>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-sm bg-white/4 border border-white/6 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Requirements ──────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-5">
            <SectionDivider />
            <SectionLabel>Requirements</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Functional */}
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-white/50">
                  Functional
                </p>
                <ul className="space-y-2">
                  {content.functionalRequirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] text-white/50 leading-relaxed"
                    >
                      <span className="text-white/20 shrink-0 select-none mt-0.5">
                        ·
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Non-functional */}
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-white/50">
                  Non-Functional
                </p>
                <ul className="space-y-2">
                  {content.nonFunctionalRequirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] text-white/50 leading-relaxed"
                    >
                      <span className="text-white/20 shrink-0 select-none mt-0.5">
                        ·
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Capacity Estimation ───────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-5">
            <SectionDivider />
            <SectionLabel>Capacity Estimation</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {content.capacityEstimation.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-white/6 rounded-sm p-3.5 space-y-1.5"
                >
                  <p className="text-white font-medium text-[15px] font-mono">
                    {metric.value}
                  </p>
                  <p className="text-[10px] text-white/35 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── API Design ────────────────────────────────────────────── */}
          {content.apiEndpoints && content.apiEndpoints.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-5">
              <SectionDivider />
              <SectionLabel>API Design</SectionLabel>
              <div className="divide-y divide-white/4">
                {content.apiEndpoints.map((endpoint, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-2.5 first:pt-0 last:pb-0"
                  >
                    <span
                      className={`text-[11px] font-mono font-semibold w-12 shrink-0 pt-0.5 ${
                        METHOD_STYLES[endpoint.method] ?? "text-white/60"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-[12px] text-white/70 font-mono shrink-0 min-w-42.5 leading-relaxed">
                      {endpoint.path}
                    </code>
                    <span className="text-[12px] text-white/40 leading-relaxed">
                      {endpoint.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── High-Level Design ─────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-5">
            <SectionDivider />
            <SectionLabel>High-Level Design</SectionLabel>
            <p className="text-[14px] text-white/55 leading-relaxed">
              {content.highLevelDesign.prose}
            </p>
            <div className="divide-y divide-white/4">
              {content.highLevelDesign.components.map((comp) => (
                <div
                  key={comp.name}
                  className="flex gap-6 py-2.5 first:pt-0 last:pb-0"
                >
                  <span className="text-[12px] text-white font-medium w-36 shrink-0 leading-relaxed pt-0.5">
                    {comp.name}
                  </span>
                  <span className="text-[12px] text-white/45 leading-relaxed">
                    {comp.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Deep Dives ────────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-6">
            <SectionDivider />
            <SectionLabel>Deep Dives</SectionLabel>
            {content.deepDives.map((dive, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-[13px] text-white font-medium">
                  {dive.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  {dive.body}
                </p>
                {dive.points && dive.points.length > 0 && (
                  <ul className="space-y-1.5 pt-1">
                    {dive.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-[12px] text-white/40 leading-relaxed"
                      >
                        <span className="text-white/20 shrink-0 select-none mt-0.5">
                          ·
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>

          {/* ── Trade-offs ────────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-5">
            <SectionDivider />
            <SectionLabel>Key Trade-offs</SectionLabel>
            <div className="space-y-2.5">
              {content.tradeoffs.map((tradeoff, i) => (
                <div
                  key={i}
                  className="border border-white/6 rounded-sm p-4 space-y-2.5 hover:border-white/10 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    {tradeoff.decision}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap text-[13px]">
                    <span className="text-white font-medium">
                      ✓ {tradeoff.chosen}
                    </span>
                    <span className="text-white/20 text-[11px]">vs</span>
                    <span className="text-white/35 line-through decoration-white/20">
                      {tradeoff.alternative}
                    </span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-relaxed">
                    {tradeoff.reason}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Bottlenecks ───────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-5">
            <SectionDivider />
            <SectionLabel>Bottlenecks & Improvements</SectionLabel>
            <ul className="space-y-3">
              {content.bottlenecks.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-[13px] text-white/50 leading-relaxed"
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
