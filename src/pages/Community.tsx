import {
  ContentChapter,
  PolaroidGallery,
  TextSection,
} from "@/components/layout";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";

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
              <b>
                <i>GDG Cloud Kolkata</i>
              </b>{" "}
              is a Google-supported community for cloud developers and
              architects across the city a place to learn, discuss, and explore
              the latest in cloud technologies through monthly meetups, hands-on
              workshops, and its flagship annual conference,{" "}
              <b>
                <i>Cloud Community Days</i>
              </b>
              .
            </TextSection>
            <TextSection>
              I first walked into one of their events at the end of 2022, and it
              didn't take long before I was hooked. Over the next couple of
              years, I kept showing up to the regular monthly meetups, to
              extended{" "}
              <b>
                <i>CCD</i>
              </b>{" "}
              prep events, and to{" "}
              <b>
                <i>Cloud Community Days</i>
              </b>{" "}
              itself, where thousands of professionals, students, and builders
              converge for a full day of talks, networking, and collaboration.
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
              In 2025, I formally joined the GDG Cloud Kolkata team as a{" "}
              <b>
                <i>Social Media Team Member</i>
              </b>
              . In that role, I manage and create content for the community's
              social channels writing posts, designing graphics, and shaping how
              the community presents itself online. Beyond social media, I've
              also contributed to the team's{" "}
              <b>
                <i>design and development</i>
              </b>{" "}
              work. It's a community I believe in deeply, and one I intend to
              keep contributing to actively.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="ML Kolkata">
            <TextSection>
              <b>
                <i>ML Kolkata</i>
              </b>{" "}
              is a sister community under the{" "}
              <b>
                <i>GDG</i>
              </b>{" "}
              umbrella, primarily organized by members of{" "}
              <b>
                <i>GDG Cloud Kolkata</i>
              </b>{" "}
              and various{" "}
              <b>
                <i>GDG on-campus leads</i>
              </b>
              . It serves as a dedicated hub for developers in the city to dive
              deep into the world of Artificial Intelligence and Machine
              Learning.
            </TextSection>
            <PolaroidGallery
              items={[
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBCYUxBbBT4rTsV26QpAiEuI8fqlUxB5wZR1me",
                  caption: "Team Dinner",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHB4b5SFJZXwOxsFflKb6teEVCAYka73uJPMZr2",
                  caption: "Opening Session",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBiAVb3KhN0GxKJzspR89SEYUdBMQOwc1g4CmX",
                  caption: "Session by GDG AOT Lead",
                },
                {
                  src: "https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBbjHW5DFGToRrynm8aIQ5pVLwtcDJxeFWfhdz",
                  caption: "Post Event Photo Shoot",
                },
              ]}
            />
            <TextSection>
              Our work revolves around exploring and implementing cutting-edge
              technologies like{" "}
              <b>
                <i>TensorFlow</i>
              </b>
              ,{" "}
              <b>
                <i>PyTorch</i>
              </b>
              , and{" "}
              <b>
                <i>Gemini</i>
              </b>
              . We focus on a wide range of{" "}
              <b>
                <i>AI and LLM-based community initiatives</i>
              </b>
              , from conducting specialized technical sessions and workshops to
              actively participating in and organizing{" "}
              <b>
                <i>technical hackathons</i>
              </b>{" "}
              that push the boundaries of what's possible with intelligent
              systems.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="GDG On Campus AOT">
            <TextSection>
              <b>
                <i>GDG On Campus AOT</i>
              </b>{" "}
              was founded in 2023, and I joined the chapter in early 2024. From
              the very beginning, I was thrown into the thick of it attending
              and helping organise events across Kolkata, travelling to Siliguri
              and Durgapur for{" "}
              <b>
                <i>cross-community gatherings</i>
              </b>
              , and building connections with developers from colleges all over
              the region. By mid-2024, I had grown into a{" "}
              <b>
                <i>Lead role</i>
              </b>{" "}
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
              how things work to{" "}
              <b>
                <i>leading sessions</i>
              </b>
              , coordinating with other GDG On Campus chapters, and helping
              newer members find their footing the same way I once did.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="Hack4Bengal">
            <TextSection>
              <b>
                <i>Hack4Bengal</i>
              </b>{" "}
              is a hackathon series born out of a collective effort by students
              and builders across SNU and several other colleges, one of those
              rare things that actually works because the people behind it
              genuinely care. I participated in{" "}
              <b>
                <i>Season 2</i>
              </b>{" "}
              and{" "}
              <b>
                <i>Season 3</i>
              </b>{" "}
              as a competitor, and by{" "}
              <b>
                <i>Season 4</i>
              </b>{" "}
              I had moved to the other side of the table as a{" "}
              <b>
                <i>co-organiser</i>
              </b>{" "}
              on the{" "}
              <b>
                <i>tech team</i>
              </b>
              .
            </TextSection>
            <TextSection>
              My primary responsibility was the{" "}
              <b>
                <i>hackathon website</i>
              </b>{" "}
              building it, maintaining it through the chaos of registrations and
              live event updates, and keeping it standing when traffic spikes
              hit.
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
              Beyond the technical work, I also{" "}
              <b>
                <i>mentored participants</i>
              </b>{" "}
              throughout the event helping teams think through their ideas,
              debug their builds, and stay focused under pressure. There's
              something genuinely energising about walking the floor during a
              hackathon, stopping at tables, and seeing what people are making.
              It's messy and intense and a lot of fun.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="IEEE Students Branch of Academy of Technology">
            <TextSection>
              <b>
                <i>IEEE</i>
              </b>{" "}
              needs no introduction it is one of the world's largest and most
              respected technical professional organisations, and being part of
              its student branch at the{" "}
              <b>
                <i>Academy of Technology</i>
              </b>{" "}
              has been one of the most formative experiences of my college life.
              Our branch has punched well above its weight, and two events in
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
              The first was{" "}
              <b>
                <i>Women in Space Engineering</i>
              </b>{" "}
              an event celebrating and encouraging women in highly specialised
              technical fields, bringing together speakers, students, and
              professionals in a way that felt genuinely meaningful. The second
              was{" "}
              <b>
                <i>C3IT</i>
              </b>
              , an academic conference where participants submitted and
              presented research papers a a full-scale, serious conference run
              entirely by students.
            </TextSection>
            <TextSection>
              Both were enormous undertakings, and being in the room where it
              all came together was something I won't forget. What made it
              special wasn't just the scale of the events it was the people.
              Working late into the evenings with{" "}
              <b>
                <i>seniors</i>
              </b>{" "}
              who were deeply invested in getting every detail right, staying
              back at college well past 9 PM, troubleshooting and coordinating
              and{" "}
              <b>
                <i>building things together</i>
              </b>{" "}
              that kind of collaboration leaves a mark. It remains one of the
              best experiences of my life.
            </TextSection>
          </ContentChapter>

          <ContentChapter title="IEI Students Chapter of Electrical Engineering">
            <TextSection>
              The{" "}
              <b>
                <i>IEI Student Chapter of Electrical Engineering</i>
              </b>{" "}
              holds a particularly close place for me it is the only community I
              have been a part of since my very first year of college. I was
              there at the beginning, not as the person who formally founded it,
              but as someone who helped lay the groundwork and contributed
              wherever I could. Over the years, I served as{" "}
              <b>
                <i>Tech Lead</i>
              </b>{" "}
              and{" "}
              <b>
                <i>Tech Co-Lead</i>
              </b>{" "}
              for nearly three years, during which time I was primarily
              responsible for building and maintaining the chapter's website and
              all of its underlying{" "}
              <b>
                <i>digital infrastructure</i>
              </b>
              .
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
              father once conducted a{" "}
              <b>
                <i>PC workshop</i>
              </b>{" "}
              for the chapter, and that session became the spark that eventually
              gave rise to the{" "}
              <b>
                <i>IET stream</i>
              </b>{" "}
              within the chapter something that has since grown into its own
              identity. On the event side, I was the primary organiser behind{" "}
              <b>
                <i>Season 1</i>
              </b>{" "}
              and{" "}
              <b>
                <i>Season 2</i>
              </b>{" "}
              of{" "}
              <b>
                <i>IoTricity</i>
              </b>
              , the chapter's flagship{" "}
              <b>
                <i>IoT-focused</i>
              </b>{" "}
              event series. I was never formally the convener, but the weight of
              organising everything the logistics, the coordination, keeping
              people aligned and moving sat largely with me. It was unglamorous,
              demanding work, and I loved every bit of it.
            </TextSection>
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
