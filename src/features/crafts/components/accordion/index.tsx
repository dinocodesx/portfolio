import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../../../constants/animations";

const ACCORDION_ITEMS = [
  {
    id: "01",
    title: "System Architecture",
    content: "Our system is built on a distributed microservices model, utilizing gRPC for high-performance inter-service communication and Kafka for reliable event streaming across regional clusters."
  },
  {
    id: "02",
    title: "Data Consistency",
    content: "We implement strong eventual consistency using a combination of Raft-based consensus for critical metadata and CRDTs for collaborative real-time editing features."
  },
  {
    id: "03",
    title: "Observability Stack",
    content: "Full-stack visibility is achieved through OpenTelemetry instrumented traces, Prometheus metrics for real-time alerting, and Grafana dashboards for deep-dive analysis."
  }
];

export function AccordionCraft() {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <div className="min-h-screen flex flex-col items-center p-2 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Sidebar */}
          <motion.div variants={itemVariants}>
            <Link
              to="/ui"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-[15px]"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Fluid Accordion
              </h1>
              <p className="text-white/40 text-lg">May 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A study on <span className="text-white">spatial continuity</span>. 
                This accordion utilizes Framer Motion's automatic layout animations 
                to provide a tactile, physical feel when expanding content.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-125 md:min-h-150 lg:min-h-0 lg:aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
            >
              <div className="w-full max-w-md space-y-3">
                {ACCORDION_ITEMS.map((item) => (
                  <div 
                    key={item.id}
                    className={`border transition-colors duration-500 rounded-2xl overflow-hidden ${
                      openId === item.id ? "bg-white/5 border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(openId === item.id ? null : item.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-[10px] font-mono transition-colors duration-500 ${
                          openId === item.id ? "text-blue-400" : "text-white/20"
                        }`}>
                          {item.id}
                        </span>
                        <h3 className={`text-[15px] font-medium transition-colors duration-500 ${
                          openId === item.id ? "text-white" : "text-white/60 group-hover:text-white/80"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <div className={`transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                        openId === item.id ? "rotate-45 text-white" : "text-white/20"
                      }`}>
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <div className="px-6 pb-6 pl-14">
                            <p className="text-[14px] text-white/40 leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The transition uses a <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">custom cubic-bezier</code> curve 
                to mimic physical weight. The numbering and icons shift color to 
                provide clear <span className="text-white">active-state hierarchy</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
