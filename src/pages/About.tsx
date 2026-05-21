import {
  ContentChapter,
  ImageDouble,
  ImageSingle,
  TextSection,
} from "@/components/layout";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";

export function About() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
      <SEO
        title="About | Debarshee Chakraborty"
        description="Learn more about Debarshee Chakraborty, a Software Engineer focused on distributed systems and low-level design."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <SidebarLink />

        {/* Modular Sections */}
        <div>
          <ContentChapter title="About me">
            <TextSection>
              I am a{" "}
              <b>
                <i>Software Engineer</i>
              </b>{" "}
              based in India, specializing in the design and implementation of{" "}
              <b>
                <i>high-performance backend systems</i>
              </b>
              . My technical journey is driven by a deep curiosity for how{" "}
              <b>
                <i>large-scale distributed architectures</i>
              </b>{" "}
              operate, and I actively explore the intersections of{" "}
              <b>
                <i>Machine Learning</i>
              </b>
              ,{" "}
              <b>
                <i>IoT</i>
              </b>
              , and{" "}
              <b>
                <i>low-level systems engineering</i>
              </b>
              .
            </TextSection>
            <TextSection>
              I focus on creating{" "}
              <b>
                <i>efficient, scalable solutions</i>
              </b>{" "}
              that solve complex problems. Whether I'm architecting{" "}
              <b>
                <i>microservices</i>
              </b>
              , optimizing database performance, or experimenting with
              hardware-software integration, I strive for{" "}
              <b>
                <i>technical excellence</i>
              </b>{" "}
              and{" "}
              <b>
                <i>minimalist design</i>
              </b>{" "}
              in every project I undertake.
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
              of{" "}
              <b>
                <i>Abacus</i>
              </b>{" "}
              to the physical rigor of{" "}
              <b>
                <i>Martial Arts</i>
              </b>
              , where I eventually earned a{" "}
              <b>
                <i>brown belt</i>
              </b>
              . I was always looking for ways to challenge myself outside the
              classroom.
            </TextSection>
            <TextSection>
              Creativity was a de-facto part of my daily life. I spent
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
              Sports were another pillar of my upbringing.{" "}
              <b>
                <i>Football</i>
              </b>{" "}
              was a constant, played across school teams, our campus community,
              and local grounds. When I wasn't on the football pitch, I was
              usually engaged in a game of{" "}
              <b>
                <i>cricket</i>
              </b>{" "}
              or{" "}
              <b>
                <i>badminton</i>
              </b>
              , embracing the competitive and collaborative spirit of the game.
            </TextSection>
            <TextSection>
              Parallel to sports and art, I nurtured a strong curiosity for{" "}
              <b>
                <i>science</i>
              </b>
              . I participated in numerous competitions and science fairs,
              always eager to understand the 'why' behind everything. It was
              this early drive to learn and compete that eventually paved the
              way for my journey into engineering.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="College">
            <TextSection>
              As an{" "}
              <b>
                <i>Engineering student</i>
              </b>
              , my academic path bridges the physical and the digital. While my
              core coursework covers traditional engineering, my true passion
              lies in exploring{" "}
              <b>
                <i>IoT</i>
              </b>
              ,{" "}
              <b>
                <i>robotics</i>
              </b>
              ,{" "}
              <b>
                <i>machine learning</i>
              </b>
              , and{" "}
              <b>
                <i>backend development</i>
              </b>
              . I’ve spent countless hours working with{" "}
              <b>
                <i>networks</i>
              </b>
              ,{" "}
              <b>
                <i>operating systems</i>
              </b>
              , and building connected devices.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBaldPii4UMdY8KPkAq2O9yIBLvJ6tlFhjguie"
              alt="College Campus"
            />
            <TextSection>
              College life for me extends far beyond the classroom. I am deeply
              involved in extracurriculars and sports, regularly participating
              in and occasionally winning various competitions and technical
              events. This active involvement has helped me build a strong
              rapport with our community, making me a familiar face among the
              teaching staff, the{" "}
              <b>
                <i>Director</i>
              </b>
              , and the{" "}
              <b>
                <i>Chairman Trustee</i>
              </b>{" "}
              as a dedicated and engaged student.
            </TextSection>
            <TextSection>
              All of this takes place on a remarkably beautiful campus that
              serves as an inspiring backdrop for my work, even if the
              sweltering summer heat often tests our endurance.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Sports">
            <TextSection>
              Sports have always been a source of deep passion and shared joy
              for me, particularly{" "}
              <b>
                <i>football</i>
              </b>{" "}
              and{" "}
              <b>
                <i>cricket</i>
              </b>
              . My journey with{" "}
              <b>
                <i>FC Barcelona</i>
              </b>{" "}
              began in 2009; I remember watching them on the bulky, old
              televisions we had at home, mesmerized by their{" "}
              <b>
                <i>philosophy on the pitch</i>
              </b>
              . That love hasn't faded; I've followed them ever since, trying to
              circulate that same spirit of excellence and passion.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://www.fcbarcelona.com/photo-resources/2019/03/12/304ae4e8-6c40-4e91-a01f-b9c85767bf10/uAnwfqJX.jpg?width=1200&height=750",
                alt: "Football Club Barcelona",
              }}
              image2={{
                src: "https://cf-images.assettype.com/thequint%2F2023-05%2F3e7deaeb-e046-4b1e-a7e8-48a7d76edd49%2FSPCS5657.JPG?auto=format,compress&fmt=webp&width=720&w=1200",
                alt: "Chennai Super Kings",
              }}
            />
            <TextSection>
              Similarly, my cricket allegiance has always been with the{" "}
              <b>
                <i>Chennai Super Kings</i>
              </b>
              . My memories of the IPL start vividly around the second season,
              and ever since, watching the{" "}
              <b>
                <i>Yellow Army</i>
              </b>{" "}
              has been a ritual that brings back the excitement of those early
              years of watching the game.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Games">
            <TextSection>
              Gaming, for me, is synonymous with a specific era of discovery.
              There are two titles I hold exceptionally close to my heart:{" "}
              <b>
                <i>Pokémon Black and White</i>
              </b>{" "}
              and{" "}
              <b>
                <i>Super Mario Galaxy</i>
              </b>
              . They represent more than just entertainment; they are windows
              into a{" "}
              <b>
                <i>retro vibe</i>
              </b>{" "}
              that defined my childhood.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://www.rpgfan.com/wp-content/uploads/2021/04/Pokemon-Black-White-Screenshot-020-320x240_c.jpg",
                alt: "Pokemon Black and White",
              }}
              image2={{
                src: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000104187/d0800d5bf6dc32451514b6f1118f328bfc7a6c4d4c963d644898312a6c6fb335",
                alt: "Super Mario Galaxy",
              }}
            />
            <TextSection>
              The pixelated landscapes of the{" "}
              <b>
                <i>Unova region</i>
              </b>{" "}
              and the gravity-defying wonders of the{" "}
              <b>
                <i>Comet Observatory</i>
              </b>{" "}
              carry a profound nostalgia. Every time I revisit these worlds, I'm
              reminded of the simple wonder and the{" "}
              <b>
                <i>retro charm</i>
              </b>{" "}
              that first drew me to these stories.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Engineering">
            <TextSection>
              My approach to engineering is grounded in a relentless drive to{" "}
              <b>
                <i>compete and build</i>
              </b>
              . From winning at the college level in{" "}
              <b>
                <i>Smart India Hackathon (SIH)</i>
              </b>{" "}
              to participating in{" "}
              <b>
                <i>Hack4Bengal</i>
              </b>{" "}
              and tackling the{" "}
              <b>
                <i>AI/ML track</i>
              </b>
              , I have consistently thrown myself into technical competitions,
              quizzes, and hackathons. Every event has been a crucible for my
              skills, pushing me to raise my engineering standards with every
              line of code I write, both inside and outside the classroom.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBS1g51RjwC5OVfFAJEq6PM3xy9LY7mWpeTrKR"
              alt="SIH Winning Team"
            />
            <TextSection>
              Beyond competitions, my eyes were opened to the broader spectrum
              of engineering by visiting and engaging with the vibrant tech
              showcases at institutions like{" "}
              <b>
                <i>IIEST Shibpur</i>
              </b>
              ,{" "}
              <b>
                <i>Jadavpur University</i>
              </b>
              , and{" "}
              <b>
                <i>IIT Kharagpur</i>
              </b>
              . Seeing their engineering fests and technical fests firsthand
              gave me a profound perspective on how communities of builders
              innovate.
            </TextSection>
            <TextSection>
              I’ve also been a student of industry excellence, studying the
              engineering cultures of giants like{" "}
              <b>
                <i>Netflix</i>
              </b>{" "}
              and{" "}
              <b>
                <i>Amazon</i>
              </b>{" "}
              to understand how they solve problems at scale. This blend of
              competitive fire, community involvement, and academic curiosity
              has shaped my vision: to build systems that aren’t just
              functional, but are engineered to the highest possible standard.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Communities">
            <TextSection>
              My journey in tech communities has been a path of steady growth
              and deepening impact. It all began with Resource here and the
              Electrical Students of Electrical Engineering, where I first
              discovered the power of collective learning. From there, I
              expanded my horizons by joining GDG, eventually stepping up as a{" "}
              <b>
                <i>Community Lead</i>
              </b>{" "}
              at{" "}
              <b>
                <i>GDSC AOT</i>
              </b>
              , where I focused on bridging the gap between academic learning
              and industry practice.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJ8yxnEH9okxYKg58u4AHl7yXJdMb10tmehrf"
              alt="GDG Cloud Kolkata and GDSC AOT Community"
            />
            <TextSection>
              My involvement then grew to the city-wide level with{" "}
              <b>
                <i>IEEE</i>
              </b>{" "}
              and{" "}
              <b>
                <i>GDG Cloud Kolkata</i>
              </b>
              . In these spaces, I’ve been able to contribute through both
              technical design and leadership support whether it's building
              digital infrastructure for events like{" "}
              <b>
                <i>Cloud Community Days</i>
              </b>{" "}
              or mentoring the next wave of developers.
            </TextSection>
            <TextSection>
              Most recently, I've joined{" "}
              <b>
                <i>ML Kolkata</i>
              </b>
              , continuing my commitment to staying at the forefront of the
              local tech ecosystem. For me, communities are about more than just
              networking; they are about building tools and environments that
              are both{" "}
              <b>
                <i>minimalist and powerful</i>
              </b>
              .
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
