import { SidebarLink } from "../components/layout/SidebarLink";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import {
  ContentChapter,
  TextSection,
  PolaroidGallery,
} from "../components/layout";

export function Community() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
      <SEO
        title="Community | Debarshee Chakraborty"
        description="My contributions to the developer community and Google Developer Groups (GDG)."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-12">
          <ContentChapter title="GDG Cloud Kolkata">
            <TextSection>
              My journey with developer communities began with a passion for
              connecting with like-minded individuals and sharing the latest
              advancements in technology. As a leader, I focus on organizing
              events that empower developers to learn and grow.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBlR3F2M9WNjtb5EF8xgnJVfapHDClO9S1QqXs",
                  caption: "Post Event Photo Shoot",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHB57h049gbzaAfyrs7CMLkUDQpeqidcuEIx1Jj",
                  caption: "Team Selfie",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBHEAt6Yn06jCruytYQXS4amOIo1kwGWNfF8qR",
                  caption: "CCD2025",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBFGRMMv4bLHB6OxNQMXP0izS8uURITcW9tEfp",
                  caption: "Team Dinner",
                },
              ]}
            />
          </ContentChapter>

          <ContentChapter title="GDG On Campus AOT">
            <TextSection>
              From specialized hands-on workshops to large-scale tech
              gatherings, I've had the privilege of hosting numerous events that
              bring together the tech community. These gatherings are more than
              just about code; they're about building lasting relationships.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBh2HEmwQxLbqzSdkZCwFKHsBvGyuIOXPYemg3",
                  caption: "GDG On Campus AOT Team",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJ8yxnEH9okxYKg58u4AHl7yXJdMb10tmehrf",
                  caption: "GDG Cloud Kolkata Extended Events",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBaemTm6UMdY8KPkAq2O9yIBLvJ6tlFhjguieX",
                  caption: "GDG On Campus AOT Session",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBEVxMJnXYZgsUq0XhAcomi3V4DTPW6lEGdRCa",
                  caption: "GDG On Campus MCKV Session",
                },
              ]}
            />
          </ContentChapter>

          <ContentChapter title="Hack4Bengal">
            <TextSection>
              Hack4Bengal has been one of the most impactful experiences in my
              community journey. Being part of the core team, I've seen
              firsthand how a group of dedicated individuals can build something
              that impacts thousands.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBRc3Zl0YJrnGlpELQAu089gHOYfobNhkBViw7",
                  caption: "Hack4Bengal Team Selfie",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBCk7FyiT4rTsV26QpAiEuI8fqlUxB5wZR1meo",
                  caption: "Post Event Photo Shoot",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBZDSOoMIl3eXWEz2U5NAV7Kxuv9QMfdPYsTkO",
                  caption: "Hackathon Judging Round",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBeo0IK2CqR7UO68w0blMSgWBfTdtFQriDHjJm",
                  caption: "Buring Break",
                },
              ]}
            />
          </ContentChapter>

          <ContentChapter title="IEEE Students Branch of Academy of Technology">
            <TextSection>
              Hack4Bengal has been one of the most impactful experiences in my
              community journey. Being part of the core team, I've seen
              firsthand how a group of dedicated individuals can build something
              that impacts thousands.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBbOiCaNFGToRrynm8aIQ5pVLwtcDJxeFWfhdz",
                  caption: "WISE Event Team",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBHh1yUgn06jCruytYQXS4amOIo1kwGWNfF8qR",
                  caption: "My College Seniors",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBZRQ6v5Il3eXWEz2U5NAV7Kxuv9QMfdPYsTkO",
                  caption: "C3IT Post Event Photo Shoot",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBkXZd3LQTL9htNo68cXKOyRWeir2dUguvHMQS",
                  caption: "C3IT Post Event Photo Shoot",
                },
              ]}
            />
          </ContentChapter>

          <ContentChapter title="IEI Students Chapter of Electrical Engineering">
            <TextSection>
              Hack4Bengal has been one of the most impactful experiences in my
              community journey. Being part of the core team, I've seen
              firsthand how a group of dedicated individuals can build something
              that impacts thousands.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBd1UeuulmA1l4hMjxHeFu9iyEvKDc62Qd785G",
                  caption: "IoTricity Team",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBEd5rYJXYZgsUq0XhAcomi3V4DTPW6lEGdRCa",
                  caption: "Technical Session On IoT",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBZCwujWIl3eXWEz2U5NAV7Kxuv9QMfdPYsTkO",
                  caption: "Pre-event Preparation",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJAeEJiH9okxYKg58u4AHl7yXJdMb10tmehrf",
                  caption: "LLM with MATLAB for DSP",
                },
              ]}
            />
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
