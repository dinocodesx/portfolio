import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants, containerVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { UI_DATA, UIItem } from "../constants/data";

interface RegistryRowProps {
  item: UIItem;
  index: number;
}

function RegistryRow({ item, index }: RegistryRowProps) {
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div variants={itemVariants}>
      <Link
        to={item.link}
        className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_200px_120px] items-center gap-6 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
      >
        {/* Index */}
        <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-widest">
          ID_{displayIndex}
        </span>

        {/* Name & Description */}
        <div className="space-y-1">
          <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors flex items-center gap-2">
            {item.title}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
          </h3>
          <p className="text-white/30 text-xs hidden md:block max-w-md line-clamp-1 group-hover:text-white/50 transition-colors">
            {item.description}
          </p>
        </div>

        {/* Metadata / Tags */}
        <div className="hidden md:flex flex-wrap gap-2">
          {item.label ? (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono uppercase tracking-tighter">
              {item.label}
            </span>
          ) : (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/20 font-mono uppercase tracking-tighter">
              Standard
            </span>
          )}
        </div>

        {/* Action */}
        <div className="text-right">
          <span className="text-[10px] font-mono text-white/10 group-hover:text-white/40 transition-colors uppercase tracking-widest">
            View_Src
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function UI() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-16">
      <SEO
        title="Registry | UI Lab"
        description="A technical index of experimental UI components and design patterns."
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

        <div className="space-y-12">
          <header className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Component Registry
              </h1>
            </motion.div>
            <p className="text-white/40 text-lg max-w-xl">
              A systematically indexed collection of interface experiments focusing on 
              tactile feedback and LLM-centric design patterns.
            </p>
          </header>

          <div className="space-y-px">
            {/* Table Header */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-[60px_1fr_200px_120px] items-center gap-6 px-4 py-3 border-b border-white/10 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] hidden md:grid"
            >
              <span>Entry</span>
              <span>Component</span>
              <span>Classification</span>
              <span className="text-right">Access</span>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {UI_DATA.map((item, i) => (
                <RegistryRow 
                  key={item.link} 
                  item={item} 
                  index={i} 
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
