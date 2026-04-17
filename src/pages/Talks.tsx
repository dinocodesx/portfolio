import { motion } from "motion/react";
import { ArrowLeft, Play, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { SEO } from "../components/ui/SEO";
import { TALKS_DATA } from "../constants/data";

export function Talks() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Talks | Debarshee Chakraborty"
        description="Public speaking and workshops by Debarshee Chakraborty. Exploring Machine Learning, GenAI, and technical best practices."
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
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Talks</h1>
          </motion.div>

          <div className="space-y-16">
            {TALKS_DATA.map((talk) => (
              <motion.div
                key={talk.id}
                variants={itemVariants}
                className="space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest text-white/40">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {talk.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {talk.location}
                    </div>
                  </div>

                  <h2 className="text-white font-medium text-lg leading-tight">
                    {talk.title}
                  </h2>
                  <p className="text-white/40 text-sm font-medium">{talk.event}</p>
                </div>

                <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
                  {talk.description}
                </p>

                <div className="pt-2">
                  <a
                    href={talk.link}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors group/link"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Watch Recording —&gt;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
