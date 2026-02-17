import { useEffect } from "react";
import blogsData from "../../assets/data/blogs.json";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
}

const blogs: Blog[] = blogsData;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateMobile(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs - Debarshee Chakraborty";
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111111" }}>
      <main className="flex min-h-dvh flex-col px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <section className="py-8 sm:py-12">
            <div>
              <div className="mb-8 space-y-3 text-center sm:mb-12 sm:space-y-4">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl">
                  Latest Posts
                </h1>
                <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-gray-300 sm:px-0 sm:text-lg lg:text-xl">
                  Thoughts on machine learning, web development, and the latest
                  in technology.
                </p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              {blogs.map((blog, id) => (
                <div
                  key={blog.id || id}
                  style={{ animationDelay: `${0.1 + id * 0.05}s` }}
                >
                  {/* Desktop/Tablet Layout */}
                  <div className="hidden sm:block">
                    <div className="group flex items-center rounded px-3 py-3 transition-colors hover:bg-gray-800/50">
                      <div className="min-w-0 shrink-0">
                        <a
                          href={blog.url}
                          className="text-base font-medium text-white transition-colors hover:text-gray-300 lg:text-lg"
                        >
                          {blog.title}
                        </a>
                      </div>
                      <div className="mx-4 min-w-5 flex-1 border-b border-dotted border-gray-600"></div>
                      <div className="shrink-0 whitespace-nowrap text-sm text-gray-400">
                        {formatDate(blog.date)}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="sm:hidden">
                    <div className="rounded-lg p-4 transition-colors hover:bg-gray-800/50">
                      <a href={blog.url} className="block space-y-2">
                        <h3 className="text-base font-medium leading-snug text-white">
                          {blog.title}
                        </h3>
                        <div className="text-sm text-gray-400">
                          {formatDateMobile(blog.date)}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to home link */}
            <div className="mt-8 text-center sm:mt-12">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Home
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
