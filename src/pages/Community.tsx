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
        <div>
          <ContentChapter title="GDG Cloud Kolkata">
            <TextSection>
              GDG Cloud Kolkata is a Google-supported community for cloud
              developers and architects across the city a place to learn,
              discuss, and explore the latest in cloud technologies through
              monthly meetups, hands-on workshops, and its flagship annual
              conference, Cloud Community Days.
            </TextSection>
            <TextSection>
              I first walked into one of their events at the end of 2022, and it
              didn't take long before I was hooked. Over the next couple of
              years, I kept showing up to the regular monthly meetups, to
              extended CCD prep events, and to Cloud Community Days itself,
              where thousands of professionals, students, and builders converge
              for a full day of talks, networking, and collaboration.
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
            <TextSection>
              In 2025, I formally joined the GDG Cloud Kolkata team as a Social
              Media Team Member. In that role, I manage and create content for
              the community's social channels writing posts, designing graphics,
              and shaping how the community presents itself online. Beyond
              social media, I've also contributed to the team's design and
              development work. It's a community I believe in deeply, and one I
              intend to keep contributing to actively.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="GDG On Campus AOT">
            <TextSection>
              GDG On Campus AOT was founded in 2023, and I joined the chapter in
              early 2024. From the very beginning, I was thrown into the thick
              of it attending and helping organise events across Kolkata,
              travelling to Siliguri and Durgapur for cross-community
              gatherings, and building connections with developers from colleges
              all over the region. By mid-2024, I had grown into a Lead role
              within the chapter, taking on the responsibility of organising
              events at the college level and representing the community
              externally.
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
            <TextSection>
              It's been a fast, full ride from being a new member figuring out
              how things work to leading sessions, coordinating with other GDG
              On Campus chapters, and helping newer members find their footing
              the same way I once did.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Hack4Bengal">
            <TextSection>
              Hack4Bengal is a hackathon series born out of a collective effort
              by students and builders across SNU and several other colleges,
              one of those rare things that actually works because the people
              behind it genuinely care. I participated in Season 2 and Season 3
              as a competitor, and by Season 4 I had moved to the other side of
              the table as a co-organiser on the tech team.
            </TextSection>
            <TextSection>
              My primary responsibility was the hackathon website building it,
              maintaining it through the chaos of registrations and live event
              updates, and keeping it standing when traffic spikes hit.
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
            <TextSection>
              Beyond the technical work, I also mentored participants throughout
              the event helping teams think through their ideas, debug their
              builds, and stay focused under pressure. There's something
              genuinely energising about walking the floor during a hackathon,
              stopping at tables, and seeing what people are making. It's messy
              and intense and a lot of fun.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="IEEE Students Branch of Academy of Technology">
            <TextSection>
              IEEE needs no introduction it is one of the world's largest and
              most respected technical professional organisations, and being
              part of its student branch at the Academy of Technology has been
              one of the most formative experiences of my college life. Our
              branch has punched well above its weight, and two events in
              particular stand out as the biggest college-level events I have
              been a part of.
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
            <TextSection>
              The first was Women in Space Engineering an event celebrating and
              encouraging women in highly specialised technical fields, bringing
              together speakers, students, and professionals in a way that felt
              genuinely meaningful. The second was C3IT, an academic conference
              where participants submitted and presented research papers a a
              full-scale, serious conference run entirely by students.
            </TextSection>
            <TextSection>
              Both were enormous undertakings, and being in the room where it
              all came together was something I won't forget. What made it
              special wasn't just the scale of the events it was the people.
              Working late into the evenings with seniors who were deeply
              invested in getting every detail right, staying back at college
              well past 9 PM, troubleshooting and coordinating and building
              things together that kind of collaboration leaves a mark. It
              remains one of the best experiences of my life.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="IEI Students Chapter of Electrical Engineering">
            <TextSection>
              The IEI Student Chapter of Electrical Engineering holds a
              particularly close place for me it is the only community I have
              been a part of since my very first year of college. I was there at
              the beginning, not as the person who formally founded it, but as
              someone who helped lay the groundwork and contributed wherever I
              could. Over the years, I served as Tech Lead and Tech Co-Lead for
              nearly three years, during which time I was primarily responsible
              for building and maintaining the chapter's website and all of its
              underlying digital infrastructure.
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
            <TextSection>
              There's also a personal thread woven into this community: my
              father once conducted a PC workshop for the chapter, and that
              session became the spark that eventually gave rise to the IET
              stream within the chapter something that has since grown into its
              own identity. On the event side, I was the primary organiser
              behind Season 1 and Season 2 of IoTricity, the chapter's flagship
              IoT-focused event series. I was never formally the convener, but
              the weight of organising everything the logistics, the
              coordination, keeping people aligned and moving sat largely with
              me. It was unglamorous, demanding work, and I loved every bit of
              it.
            </TextSection>
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
