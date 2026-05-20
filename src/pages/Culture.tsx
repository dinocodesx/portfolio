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
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
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
                alt: "North Kolkata Durga Puja 2024",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBEhYrsQXYZgsUq0XhAcomi3V4DTPW6lEGdRCa",
                alt: "North Kolkata Durga Puja 2025",
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
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBzVnVsHrBXixRnIfr5Q7ZcdsMS8eUCqjmv9hA",
                  caption: "Pandel Hopping 2023",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBnmKXPlb35KO2osHL7UyuXevnakiGf6x1zwqc",
                  caption: "Pandel Hopping 2025",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBU99CRXady7qHhWr0b18O5oQt63FIKgZeYX9A",
                  caption: "Pandel Hopping 2024",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBoBkpGxDfiQ5jHoRX9Jmb7E8rFxl6wG3I2tvZ",
                  caption: "Puja at Friend's House",
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
                alt: "South Kolkata Durga Puja 2024",
              }}
              image2={{
                src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBaZHWs5UMdY8KPkAq2O9yIBLvJ6tlFhjguieX",
                alt: "South Kolkata Durga Puja 2025",
              }}
            />
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
