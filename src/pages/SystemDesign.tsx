import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { SEO } from "../components/ui/SEO";
import { CASE_STUDIES_DATA } from "../constants/data";

export function SystemDesign() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Case Studies | Debarshee Chakraborty"
        description="System design case studies covering distributed systems, scalable architectures, and real-world engineering trade-offs by Debarshee Chakraborty."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Sidebar */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Index
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Case Studies</h1>
          </motion.div>

          <div className="space-y-8">
            {CASE_STUDIES_DATA.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="space-y-4 group"
              >
                <Link
                  to={study.link ?? "/system-designs"}
                  className="block space-y-4"
                >
                  <div className="space-y-1">
                    <h2 className="text-white font-medium text-lg group-hover:text-white/80 transition-colors">
                      {study.title}
                    </h2>
                  </div>

                  <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
                    {study.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
