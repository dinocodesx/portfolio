import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import {
  ContentChapter,
  TextSection,
  ImageSingle,
  ImageDouble,
} from "../components/layout";

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
        <SidebarLink />

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

          <ContentChapter title="The Early Days">
            <TextSection>{LOREM_IPSUM}</TextSection>
            <ImageSingle
              imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
              alt="Workspace Setup"
            />
            <TextSection>
              This is a second paragraph appearing after the first image but
              still under the same heading. It maintains the same narrow width
              as the first paragraph.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
                alt: "Retro Hardware",
              }}
              image2={{
                src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop",
                alt: "Source Code",
              }}
            />
            <TextSection>
              You can even have another paragraph here, after a set of double
              images. The layout is now completely flexible.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Current Focus">
            <TextSection>
              I spend most of my time exploring low-level systems and building
              high-performance tools that follow first principles.
            </TextSection>
            <ImageSingle
              imageSrc="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
              alt="Mountain Landscape"
            />
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
