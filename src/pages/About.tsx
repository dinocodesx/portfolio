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

export function About() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
      <SEO
        title="About | Debarshee Chakraborty"
        description="Learn more about Debarshee Chakraborty, a Software Engineer focused on distributed systems and low-level design."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-4">
          <ContentChapter title="About me">
            <TextSection>
              I am a software engineer based in India, specializing in backend
              development. I also have a deep passion for exploring ML, IoT, and
              high-performance systems engineering.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBeo0IK2CqR7UO68w0blMSgWBfTdtFQriDHjJm",
                alt: "During Hack4Bengal",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBb7xNMoFGToRrynm8aIQ5pVLwtcDJxeFWfhdz",
                alt: "Session at MCKV",
              }}
            />
          </ContentChapter>

          <ContentChapter title="Upbringing">
            <TextSection>
              My childhood was a vibrant mix of academic schooling and a deep
              dive into extracurricular activities. From the disciplined world
              of Abacus to the physical rigor of Martial Arts—where I eventually
              earned a brown belt—I was always looking for ways to challenge
              myself outside the classroom.
            </TextSection>
            <TextSection>
              Creativity was a de facto part of my daily life. I spent
              significant time at home working on various creative projects,
              with art being a constant ritual. Whether it was sketching or
              building something new, the act of creation was my primary way of
              exploring the world.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBIdvHz6E7ycmC6tYEdn2LUTpKOVNF4HZ3RDMG",
                alt: "With Mother and Father",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBtNg262P9DXFHM4T2ygQuj5AkRZpbCnqNBorO",
                alt: "Martial Arts Gold Medal",
              }}
            />
            <TextSection>
              Sports were another pillar of my upbringing. Football was a
              constant, played across school teams, our campus community, and
              local grounds. When I wasn't on the football pitch, I was usually
              engaged in a game of cricket or badminton, embracing the
              competitive and collaborative spirit of the game.
            </TextSection>
            <TextSection>
              Parallel to sports and art, I nurtured a strong curiosity for
              science. I participated in numerous competitions and science
              fairs, always eager to understand the 'why' behind everything. It
              was this early drive to learn and compete that eventually paved
              the way for my journey into engineering.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="College">
            <TextSection>
              My college years were a period of intense learning, where I built
              a strong foundation in computer science and started experimenting
              with diverse technologies.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBaldPii4UMdY8KPkAq2O9yIBLvJ6tlFhjguie"
              alt="College Campus"
            />
            {/*<ImageDouble
                      image1={{
                        src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHB41PmrbZXwOxsFflKb6teEVCAYka73uJPMZr2",
                        alt: "University Library",
                      }}
                      image2={{
                        src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBuLnB3uNOLflAhqrpwHPv3TGESdoD1jFBeNzi",
                        alt: "Campus Life",
                      }}
                    />*/}
          </ContentChapter>

          <ContentChapter title="Engineering">
            <TextSection>
              In my professional engineering career, I've focused on building
              robust backend systems that can scale to meet the demands of
              modern applications.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBrcFUUfome6jd7GXxhwVOUTyZLHAo4ikFB3pD"
              alt="SIH Winning Team"
            />
          </ContentChapter>

          <ContentChapter title="Communities">
            <TextSection>
              Being part of developer communities has been incredibly rewarding.
              I've had the chance to lead workshops, contribute to open-source,
              and connect with brilliant minds.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJ8yxnEH9okxYKg58u4AHl7yXJdMb10tmehrf"
              alt="GDG Cloud Kolkata and GDSC AOT Community"
            />
            <ImageDouble
              image1={{
                src: "https://images.unsplash.com/photo-1528605248644-14dd04322111?q=80&w=2070&auto=format&fit=crop",
                alt: "GDG Meetup",
              }}
              image2={{
                src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
                alt: "Conference Talk",
              }}
            />
          </ContentChapter>

          <ContentChapter title="Future">
            <TextSection>
              Looking ahead, I'm excited about the convergence of systems
              engineering and intelligent computing. I plan to build tools that
              are both minimalist and powerful.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBPPjgDTsae8qmj6SViYsXMnkFAyUuv9NGx0bf"
              alt="Which way are we heading right now?"
            />
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
