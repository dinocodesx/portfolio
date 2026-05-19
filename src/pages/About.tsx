import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import {
  AboutChapter,
  AboutText,
  AboutImageSingle,
  AboutImageDouble,
} from "../components/about";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export function About() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-24">
      <SEO
        title="About | Debarshee Chakraborty"
        description="Learn more about Debarshee Chakraborty, a Software Engineer focused on distributed systems and low-level design."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Sidebar */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg sticky top-32"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Index
          </Link>
        </motion.div>

        {/* Modular Sections */}
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-3xl tracking-tight">
              About
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              Software Engineer specializing in systems engineering, distributed
              architectures, and the pursuit of minimalist design.
            </p>
          </motion.div>

          <AboutChapter title="The Early Days">
            <AboutText>{LOREM_IPSUM}</AboutText>
            <AboutImageSingle
              imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
              alt="Workspace Setup"
            />
            <AboutText>
              This is a second paragraph appearing after the first image but
              still under the same heading. It maintains the same narrow width
              as the first paragraph.
            </AboutText>
            <AboutImageDouble
              image1={{
                src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
                alt: "Retro Hardware",
              }}
              image2={{
                src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop",
                alt: "Source Code",
              }}
            />
            <AboutText>
              You can even have another paragraph here, after a set of double
              images. The layout is now completely flexible.
            </AboutText>
          </AboutChapter>

          <AboutChapter title="Current Focus">
            <AboutText>
              I spend most of my time exploring low-level systems and building
              high-performance tools that follow first principles.
            </AboutText>
            <AboutImageSingle
              imageSrc="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
              alt="Mountain Landscape"
            />
          </AboutChapter>
        </div>
      </div>
    </PageLayout>
  );
}
