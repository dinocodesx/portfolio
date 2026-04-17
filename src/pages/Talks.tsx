import { motion } from "motion/react";
import { Play, Calendar, MapPin } from "lucide-react";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { PageHeader } from "../components/ui/PageHeader";
import { SEO } from "../components/ui/SEO";
import { TALKS_DATA } from "../constants/data";

export function Talks() {
  return (
    <PageLayout>
      <SEO 
        title="Talks | Debarshee Chakraborty"
        description="Public speaking and workshops by Debarshee Chakraborty. Exploring Machine Learning, GenAI, and technical best practices."
      />
      <PageHeader title="Talks" />

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
    </PageLayout>
  );
}
