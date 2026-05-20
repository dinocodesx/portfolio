import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import {
  ContentChapter,
  TextSection,
  ImageSingle,
  PolaroidGallery,
} from "../components/layout";

export function Journey() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-12">
      <SEO
        title="Journey | Debarshee Chakraborty"
        description="The story of my career and evolution as a software engineer."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-3xl tracking-tight">
              Journey
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              A timeline of my evolution, from early curiosity to building
              complex systems.
            </p>
          </motion.div>

          <ContentChapter title="Beginnings">
            <TextSection>
              Every engineer has a starting point. For me, it was the curiosity
              of how things work behind the screen. This curiosity led me to
              my first lines of code and a lifelong pursuit of knowledge.
            </TextSection>
            <ImageSingle
              imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              alt="Early Programming"
            />
          </ContentChapter>

          <ContentChapter title="Professional Growth">
            <TextSection>
              Over the years, I've navigated through various roles and
              technologies, each providing unique challenges and learning
              opportunities. From startups to established firms, the journey
              has been about continuous improvement.
            </TextSection>
          </ContentChapter>

          <PolaroidGallery 
            items={[
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBrcFUUfome6jd7GXxhwVOUTyZLHAo4ikFB3pD", caption: "Major Milestone" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJ8yxnEH9okxYKg58u4AHl7yXJdMb10tmehrf", caption: "Community Impact" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBeo0IK2CqR7UO68w0blMSgWBfTdtFQriDHjJm", caption: "Learning Phase" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBb7xNMoFGToRrynm8aIQ5pVLwtcDJxeFWfhdz", caption: "Speaker Experience" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBreeGzC5ome6jd7GXxhwVOUTyZLHAo4ikFB3p", caption: "Growth Journey" }
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
}
