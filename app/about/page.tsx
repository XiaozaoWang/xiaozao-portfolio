export default function AboutPage() {
  const fontShowcase = [
    {
      name: "Inter (Body Text - Active)",
      className: "font-inter",
      description: "Clean, modern sans-serif - Currently used for body text",
    },
    {
      name: "Space Grotesk (Headings - Active)",
      className: "font-space-grotesk",
      description: "Geometric modern font - Currently used for headings",
    },
    {
      name: "Geist Sans (Previous Default)",
      className: "font-sans",
      description: "Clean, modern sans-serif",
    },
    {
      name: "Geist Mono",
      className: "font-mono",
      description: "Monospace font for code",
    },
    {
      name: "Roboto",
      className: "font-roboto",
      description: "Google's flagship font",
    },
    {
      name: "Open Sans",
      className: "font-open-sans",
      description: "Highly readable, widely used",
    },
    {
      name: "Lato",
      className: "font-lato",
      description: "Friendly and approachable",
    },
    {
      name: "Montserrat",
      className: "font-montserrat",
      description: "Geometric and modern",
    },
    {
      name: "Source Sans Pro",
      className: "font-source-sans",
      description: "Professional and clean",
    },
    {
      name: "Poppins",
      className: "font-poppins",
      description: "Rounded and friendly",
    },
    {
      name: "Nunito Sans",
      className: "font-nunito",
      description: "Soft and modern",
    },
    {
      name: "Playfair Display",
      className: "font-playfair",
      description: "Elegant serif for headings",
    },
    {
      name: "Merriweather",
      className: "font-merriweather",
      description: "Readable serif",
    },
    {
      name: "PT Serif",
      className: "font-pt-serif",
      description: "Traditional serif",
    },
  ];

  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Learn more about my background, skills, and journey.
        </p>
      </div>

      {/* Font Showcase Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Font Showcase
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Here are various font options to choose from. Each shows how text
          would appear in headings and body text.
        </p>

        <div className="space-y-8">
          {fontShowcase.map((font, index) => (
            <div
              key={font.name}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            >
              <div className={`${font.className}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {font.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 lg:mt-0">
                    {font.description}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Heading Example: Welcome to My Portfolio
                    </h4>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Subheading: About My Work
                    </h5>
                  </div>
                  <div>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Body text: I'm a passionate designer and developer with
                      expertise in creating interactive digital experiences. My
                      work combines technical precision with creative vision to
                      deliver engaging user interfaces.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Small text: Additional details and captions would appear
                      in this size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>✓ Typography System Active!</strong> Your site now uses{" "}
            <strong>Inter</strong> for all body text and
            <strong> Space Grotesk</strong> for headings (similar aesthetic to
            Faculty Glyphic). All fonts are optimized with Next.js font loading
            for the best performance.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Background
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm Xiaozao, a passionate developer and designer with expertise in
              creating interactive digital experiences. My work combines
              technical precision with creative vision.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "p5.js",
                "Design Systems",
                "UI/UX",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              More details about my professional experience and educational
              background will be added soon.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out for collaborations or opportunities.
              Contact information coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
