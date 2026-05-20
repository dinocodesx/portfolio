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

export function GDG() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-24">
      <SEO
        title="GDG | Debarshee Chakraborty"
        description="Google Developer Groups (GDG) and my contributions to the community."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-3xl tracking-tight">
              GDG
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              Building community, sharing knowledge, and fostering innovation
              as part of Google Developer Groups.
            </p>
          </motion.div>

          <ContentChapter title="Community Leadership">
            <TextSection>
              My journey with GDG began with a passion for connecting with
              like-minded developers and sharing the latest advancements in
              technology. As a community leader, I focus on organizing
              events that empower developers to learn and grow.
            </TextSection>
            <ImageSingle
              imageSrc="https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop"
              alt="Conference Audience"
            />
          </ContentChapter>

          <ContentChapter title="Workshops & Events">
            <TextSection>
              From DevFests to specialized hands-on workshops, I've had the
              privilege of hosting numerous events that bring together the
              tech community. These gatherings are more than just about
              code; they're about building lasting relationships.
            </TextSection>
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
