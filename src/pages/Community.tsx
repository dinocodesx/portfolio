import { SidebarLink } from "../components/layout/SidebarLink";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import {
  ContentChapter,
  TextSection,
  ImageSingle,
  ImageDouble,
  PolaroidGallery,
} from "../components/layout";

export function Community() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-12">
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
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBlR3F2M9WNjtb5EF8xgnJVfapHDClO9S1QqXs"
              alt="Post Event Photoshoot with GDG Cloud Kolkata Team"
            />
          </ContentChapter>

          <ContentChapter title="GDG On Campus AOT">
            <TextSection>
              From specialized hands-on workshops to large-scale tech
              gatherings, I've had the privilege of hosting numerous events that
              bring together the tech community. These gatherings are more than
              just about code; they're about building lasting relationships.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBh2HEmwQxLbqzSdkZCwFKHsBvGyuIOXPYemg3"
              alt="GDG On Campus AOT with Chairman Trustee of AOT"
            />
          </ContentChapter>

          <ContentChapter title="Hack4Bengal">
            <TextSection>
              Hack4Bengal has been one of the most impactful experiences in my community journey.
              Being part of the core team, I've seen firsthand how a group of dedicated individuals
              can build something that impacts thousands.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBRc3Zl0YJrnGlpELQAu089gHOYfobNhkBViw7"
              alt="H4B Team Selfie"
            />
            <ImageDouble
              image1={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBCk7FyiT4rTsV26QpAiEuI8fqlUxB5wZR1meo",
                alt: "Core Team Photoshoot",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBZDSOoMIl3eXWEz2U5NAV7Kxuv9QMfdPYsTkO",
                alt: "Judging Round during the Hackathon",
              }}
            />
          </ContentChapter>

          <PolaroidGallery 
            items={[
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBrcFUUfome6jd7GXxhwVOUTyZLHAo4ikFB3pD", caption: "SIH Winning Moment" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJ8yxnEH9okxYKg58u4AHl7yXJdMb10tmehrf", caption: "GDG Cloud Kolkata" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBeo0IK2CqR7UO68w0blMSgWBfTdtFQriDHjJm", caption: "Hack4Bengal" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBb7xNMoFGToRrynm8aIQ5pVLwtcDJxeFWfhdz", caption: "MCKV Session" },
              { src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBreeGzC5ome6jd7GXxhwVOUTyZLHAo4ikFB3p", caption: "Team Meetup" }
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
}
