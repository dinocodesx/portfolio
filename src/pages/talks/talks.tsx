import talksData from "../../assets/data/talks.json";

interface Talk {
  id: number;
  title: string;
  description: string;
  date: string;
  venue: string;
  type: string;
  slides: string;
  video: string;
  tags: string[];
}

const talks: Talk[] = talksData;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getTypeColor(type: string) {
  switch (type.toLowerCase()) {
    case "conference":
      return "bg-blue-600 text-blue-100";
    case "meetup":
      return "bg-green-600 text-green-100";
    case "workshop":
      return "bg-purple-600 text-purple-100";
    default:
      return "bg-gray-600 text-gray-100";
  }
}

export default function Talks() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111111" }}>
      <main className="min-h-screen py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">
              Talks & Presentations
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              A collection of my technical talks, presentations, and workshops
              on various topics including machine learning, backend development,
              and modern technologies.
            </p>
          </div>

          {/* Talks Grid */}
          <div className="space-y-8">
            {talks.map((talk) => (
              <article
                key={talk.id}
                className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 shadow-sm transition-shadow hover:shadow-lg hover:bg-gray-700/50"
              >
                <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h2 className="mb-2 text-xl font-semibold text-white">
                      {talk.title}
                    </h2>
                    <div className="my-5 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getTypeColor(
                          talk.type,
                        )}`}
                      >
                        {talk.type}
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">
                        {formatDate(talk.date)}
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">
                        {talk.venue}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  {talk.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {talk.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {talk.slides !== "#" && (
                    <a
                      href={talk.slides}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="mr-1.5 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      View Slides
                    </a>
                  )}
                  {talk.video !== "#" && (
                    <a
                      href={talk.video}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="mr-1.5 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2z"
                        />
                      </svg>
                      Watch Video
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-white">
              Interested in having me speak?
            </h3>
            <p className="mb-4 text-gray-300">
              I'm always excited to share knowledge and connect with fellow
              developers and tech enthusiasts.
            </p>
            <a
              href="mailto:debarshee.chakraborty.work@gmail.com"
              className="mt-5 inline-block border-2 border-white bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition-all duration-200 hover:bg-white hover:text-black sm:px-8 sm:py-4 sm:text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
