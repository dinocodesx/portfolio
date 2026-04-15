import { motion } from "motion/react";
import { ArrowLeft, Play, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";
import { TALKS_DATA } from "../constants/data";

export function Talks() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl space-y-12"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-white/5 transition-colors group"
            aria-label="Go back to portfolio"
          >
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </Link>
          <h1 className="text-white font-medium">Talks</h1>
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
                <p className="text-white/40 text-sm font-medium">
                  {talk.event}
                </p>
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
      </motion.main>
    </div>
  );
}
