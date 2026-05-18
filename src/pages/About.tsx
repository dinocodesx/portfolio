import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";

export function About() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-16">
      <SEO
        title="About | Debarshee Chakraborty"
        description="Learn more about Debarshee Chakraborty, a Software Engineer focused on distributed systems and low-level design."
      />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-[15px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Index
          </Link>
        </motion.div>

        <div className="space-y-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">About</h1>
            <div className="space-y-6 text-white/60 leading-relaxed text-[15px]">
              <p>
                I am a Software Engineer with a deep interest in how complex
                systems are built from the ground up. My journey in technology
                started with a curiosity about low-level operations, leading me
                to explore distributed systems, databases, and network
                protocols.
              </p>
              <p>
                I believe in the power of{" "}
                <span className="text-white italic">
                  first principles thinking
                </span>
                . Whether I'm implementing a Redis clone from scratch or
                architecting a high-traffic backend, I strive for simplicity,
                performance, and reliability.
              </p>
              <p>
                Beyond code, I enjoy sharing my findings through talks and blog
                posts, helping others navigate the intricate world of systems
                engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
