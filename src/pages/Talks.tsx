import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { Play, Calendar, MapPin } from "lucide-react";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { TALKS_DATA } from "../data";

export function Talks() {
  return (
    <PageLayout maxWidth="max-w-3xl">
      <SEO
        title="Talks | Debarshee Chakraborty"
        description="Public speaking and workshops by Debarshee Chakraborty. Exploring Machine Learning, GenAI, and technical best practices."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Main content */}
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Talks</h1>
          </motion.div>

          <div className="space-y-16">
            {TALKS_DATA.map((talk) => {
              const isLink = !!talk.link;
              const Wrapper = isLink ? motion.a : motion.div;

              return (
                <Wrapper
                  key={talk.id}
                  variants={itemVariants}
                  {...(isLink
                    ? {
                        href: talk.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="block space-y-4 group cursor-pointer"
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

                    <h2 className="text-white/80 font-medium text-lg leading-tight group-hover:text-white transition-colors">
                      {talk.title}
                    </h2>
                    <p className="text-white/40 text-sm font-medium">
                      {talk.event}
                    </p>
                  </div>

                  <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
                    {talk.description}
                  </p>

                  {talk.link && (
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors group/link">
                        <Play className="w-3 h-3 fill-current" />
                        Check it out —&gt;
                      </span>
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
