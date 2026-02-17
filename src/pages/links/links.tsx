import linksData from "../../../public/data/links.json";

function Links() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111111" }}>
      <main className="flex flex-col pt-12 px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          {/* Profile picture */}
          <div className="mx-auto mb-6 flex size-24 items-center justify-center overflow-hidden rounded-full border border-gray-600">
            <img
              src="https://github.com/dinocodesx.png"
              alt="Debarshee Chakraborty"
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="mb-2 text-2xl font-bold text-white">
            Debarshee Chakraborty
          </h3>
          <p className="text-gray-300">Machine Learning Engineer</p>
        </div>

        {/* Links */}
        <div className="mx-auto w-full max-w-md space-y-4">
          {linksData.map((link) => (
            <div key={link.id}>
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block w-full"
              >
                <div className="group p-4 transition-all hover:scale-[1.02] hover:shadow-lg rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-700/50">
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
                        <svg
                          className="h-5 w-5 fill-current text-white"
                          viewBox="0 0 24 24"
                        >
                          <path d={link.icon} />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold transition-colors text-white group-hover:text-gray-200">
                        {link.name}
                      </h4>
                      <p className="text-gray-400 truncate text-sm">
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0">
                      <svg
                        className="h-4 w-4 transition-colors text-gray-400 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Links;
