import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants, containerVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { UI_DATA, UIItem } from "../constants/data";

interface BentoCardProps {
  item: UIItem;
  index: number;
  className?: string;
}

function BentoCard({ item, index, className = "" }: BentoCardProps) {
  const displayIndex = (index + 1).toString().padStart(2, "0");

  const spanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
  };

  const finalClassName = `${spanClasses[item.gridSpan || 1]} ${className}`;

  return (
    <motion.div variants={itemVariants} className={finalClassName}>
      <Link
        to={item.link}
        className="group relative flex flex-col h-full min-h-[180px] p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl hover:border-white/20 transition-all active:scale-[0.98] overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 blur-[80px] -translate-y-16 translate-x-16 group-hover:bg-white/5 transition-colors" />

        <div className="relative flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
              Index_{displayIndex}
            </span>
            {item.label && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-medium">
                {item.label}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-medium text-lg flex items-center gap-2 leading-tight">
              {item.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            {item.description && (
              <p className="text-white/40 text-sm leading-relaxed max-w-[320px]">
                {item.description}
              </p>
            )}
          </div>
        </div>

        <div className="relative pt-6 flex items-end justify-between">
          <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
}

export function UI() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-16">
      <SEO
        title="UI Lab | Debarshee Chakraborty"
        description="A laboratory for experimental UI components and design patterns built with React, Tailwind CSS, and Framer Motion."
      />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Index
          </Link>
        </motion.div>

        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-3xl tracking-tight">
              UI Lab
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              A collection of interface experiments focusing on tactile feedback, 
              asynchronous states, and LLM-centric design patterns.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr"
          >
            {/* All Items in a single flow for better bento packing */}
            {[...UI_DATA.apps, ...UI_DATA.components, ...UI_DATA.elements].map((item, i) => (
              <BentoCard 
                key={item.link} 
                item={item} 
                index={i} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
