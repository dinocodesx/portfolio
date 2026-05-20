import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import {
  ContentChapter,
  TextSection,
  ImageSingle,
} from "../components/layout";

export function Culture() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-24">
      <SEO
        title="Culture | Debarshee Chakraborty"
        description="My philosophy on engineering culture, team values, and collaboration."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-3xl tracking-tight">
              Culture
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              Philosophy, values, and the human side of software engineering.
            </p>
          </motion.div>

          <ContentChapter title="Engineering Values">
            <TextSection>
              I believe that great software is built by teams that value
              clarity, empathy, and collective ownership. It's not just about
              the code we write, but how we support each other and grow
              together.
            </TextSection>
            <ImageSingle
              imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team Collaboration"
            />
          </ContentChapter>

          <ContentChapter title="Mindset & Growth">
            <TextSection>
              A culture of continuous learning and psychological safety allows
              for innovation to flourish. I strive to foster environments where
              curiosity is encouraged and every failure is treated as a
              valuable lesson.
            </TextSection>
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
