import {
  ContentChapter,
  ImageDouble,
  ImageSingle,
  PolaroidGallery,
  TextSection,
} from "@/components/layout";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";

export function Culture() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
      <SEO
        title="Culture | Debarshee Chakraborty"
        description="Exploring Bengali culture, the significance of Durga Puja, and the traditions that define my heritage."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <SidebarLink />

        {/* Modular Sections */}
        <div>
          <ContentChapter title="Roots & Identity">
            <TextSection>
              To be Bengali is to inherit a world shaped by poetry, protest, and
              an unshakeable pride in one's roots. From the literary giants of
              the Bengal Renaissance Tagore, Bankimchandra, Sarat Chandra to the
              revolutionary spirit of a land that has always questioned and
              created, Bengali identity is layered and deeply alive.
            </TextSection>
            <TextSection>
              At its core, is{" "}
              <b>
                <i>Adda</i>
              </b>{" "}
              the beloved Bengali tradition of unhurried, free-ranging
              conversation over tea where philosophy, football, and fish curry
              hold equal weight. It is a culture that feeds the soul as
              generously as it feeds the stomach.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBreeGzC5ome6jd7GXxhwVOUTyZLHAo4ikFB3p"
              alt="Dhunuchi Naach picture by Ardhendu Dhar"
            />
            <TextSection>
              And then there is Durga Puja not merely a festival, but the very
              pulse of Bengal. For five days every autumn, the entire state
              exhales in unison. It is the homecoming of Goddess Durga, the
              ten-armed destroyer of evil, who descends from the Himalayas with
              her children Lakshmi, Saraswati, Kartik, and Ganesh to bless the
              mortal world. Beneath the religious devotion, however, lies
              something even more universal: a celebration of community, art,
              and the quiet joy of belonging.
            </TextSection>
            <TextSection>
              Everything begins with Mahalaya, arriving before dawn, when the
              voice of Birendra Krishna Bhadra reciting{" "}
              <b>
                <i>Mahishasura Mardini</i>
              </b>{" "}
              crackles through radios and speakers across Bengal. No alarm clock
              is needed that morning the chants do the waking. This marks the
              <b>
                <i>Devipaksha</i>
              </b>
              , the fortnight of the Goddess, and the city begins to hum with
              anticipation. Artisans in Kumartuli put the final touches on clay
              idols. The smell of{" "}
              <b>
                <i>shiuli</i>
              </b>{" "}
              flowers fills the morning air. Kolkata starts to dress herself up.
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
            <TextSection>
              From Shashti through Navami, life reorganizes itself around the
              Puja.{" "}
              <b>
                <i>Pandal hopping</i>
              </b>{" "}
              visiting the elaborately crafted temporary shrines that
              neighbourhoods construct over months is both a ritual and a sport.
              Each pandal is a world unto itself: some are breathtaking
              recreations of temples, others are conceptual art installations
              that make you stop and think. The thunderous{" "}
              <b>
                <i>Dhak</i>
              </b>{" "}
              the traditional drum beaten by dhakis who travel from rural Bengal
              sets the tempo for it all. Then comes{" "}
              <b>
                <i>Maha Ashtami</i>
              </b>
              , the most sacred day.
            </TextSection>
            <TextSection>
              Devotees observe fasts and gather at dawn for{" "}
              <b>
                <i>Pushpanjali</i>
              </b>
              , offering flowers to the Goddess with Sanskrit mantras that rise
              like smoke into the morning. At the precise cusp of Ashtami and
              Navami, 108 lamps are lit for{" "}
              <b>
                <i>Sandhi Puja</i>
              </b>{" "}
              a moment of such concentrated spiritual energy that the air itself
              seems to hold its breath.
            </TextSection>
            <ImageSingle
              imageSrc="https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBU99CRXady7qHhWr0b18O5oQt63FIKgZeYX9A"
              alt="Pandel Hopping during Ashtami 2025"
            />
            <TextSection>
              <b>
                <i>Dhunuchi Naach</i>
              </b>{" "}
              is something you feel in your chest before you understand it with
              your eyes. Dancers sway with earthen incense burners balanced in
              their hands and mouths, moving in a trance to the Dhak's insistent
              beat. It is devotion made physical urgent, ecstatic, and utterly
              Bengali.
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
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBQeOWBn53KGm1nAjBwtJPZDqilreSYuscETHv",
                  caption: "Raj Bari Pujo 2025",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBoBkpGxDfiQ5jHoRX9Jmb7E8rFxl6wG3I2tvZ",
                  caption: "Puja at Friend's House",
                },
              ]}
            />
            <TextSection>
              And then, before you are ready, it ends. Vijaya Dashami arrives
              with a bittersweet weight that every Bengali knows intimately.
              Women gather for{" "}
              <b>
                <i>Sindoor Khela</i>
              </b>
              , smearing vermilion on each other's faces and on the Goddess
              herself, in a farewell that is both joyous and aching. The idol
              processions wind through streets to the river for{" "}
              <b>
                <i>Visarjan</i>
              </b>{" "}
              immersion as Durga returns to Kailash until next year. People
              touch the feet of elders, exchange
              <b>
                <i>Bijoya</i>
              </b>{" "}
              greetings, and share sweets like{" "}
              <b>
                <i>Nimki</i>
              </b>{" "}
              and{" "}
              <b>
                <i>Sandesh</i>
              </b>
              . There is a particular Bengali word for this feeling{" "}
              <b>
                <i>bhalobasha</i>
              </b>{" "}
              a love so deep it holds grief inside it.
            </TextSection>
            <TextSection>
              Growing up embedded in this culture has shaped how I see the
              world: the value of collective effort, the belief that art belongs
              to everyone, and the understanding that the most meaningful things
              in life a good conversation, a shared meal, a festival that stops
              an entire city are always built together.
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
