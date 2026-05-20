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

export function Culture() {
  return (
    <PageLayout maxWidth="max-w-5xl" className="space-y-12">
      <SEO
        title="Culture | Debarshee Chakraborty"
        description="My philosophy on engineering culture, team values, and collaboration."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-12">
          <ContentChapter title="Indian and Bengali">
            <TextSection>
              I believe that great software is built by teams that value
              clarity, empathy, and collective ownership. It's not just about
              the code we write, but how we support each other and grow
              together.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBreeGzC5ome6jd7GXxhwVOUTyZLHAo4ikFB3p"
              alt="Picture by Ardhendu Dhar"
            />
            <TextSection>
              A culture of continuous learning and psychological safety allows
              for innovation to flourish. I strive to foster environments where
              curiosity is encouraged and every failure is treated as a valuable
              lesson.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBoCRXc2aDfiQ5jHoRX9Jmb7E8rFxl6wG3I2tv",
                alt: "Team Collaboration",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBEhYrsQXYZgsUq0XhAcomi3V4DTPW6lEGdRCa",
                alt: "Festival Moments",
              }}
            />
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBXQMfAyBRmfCro19wuz75cQ2IDsi4ZAjUkgKy"
              alt="Durga Puja"
            />
            <TextSection>
              A culture of continuous learning and psychological safety allows
              for innovation to flourish. I strive to foster environments where
              curiosity is encouraged and every failure is treated as a valuable
              lesson.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBrcFUUfome6jd7GXxhwVOUTyZLHAo4ikFB3pD",
                  caption: "SIH Winning Moment",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBJ8yxnEH9okxYKg58u4AHl7yXJdMb10tmehrf",
                  caption: "GDG Cloud Kolkata",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBeo0IK2CqR7UO68w0blMSgWBfTdtFQriDHjJm",
                  caption: "Hack4Bengal",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBb7xNMoFGToRrynm8aIQ5pVLwtcDJxeFWfhdz",
                  caption: "MCKV Session",
                },
              ]}
            />
            <TextSection>
              A culture of continuous learning and psychological safety allows
              for innovation to flourish. I strive to foster environments where
              curiosity is encouraged and every failure is treated as a valuable
              lesson.
            </TextSection>
            <ImageDouble
              image1={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBEOYvn5XYZgsUq0XhAcomi3V4DTPW6lEGdRCa",
                alt: "Team Collaboration",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBaZHWs5UMdY8KPkAq2O9yIBLvJ6tlFhjguieX",
                alt: "Festival Moments",
              }}
            />
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
