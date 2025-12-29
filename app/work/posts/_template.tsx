import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function TemplatePost() {
  const postData = posts.find((p) => p.slug === "template");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-6xl font-bold !my-10 !text-blue-500 dark:!text-white">
          How to make machine learning more intuitive for beginners?
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>Abstract Content</p>
          </div>

          {/* Right Sidebar */}
          {/* space y 没用 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>React.js, custom machine learning model, Arduino, electronics</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Exhibitions
            </h3>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Art and Design Education: FutureLab, 2025</em>
            </p>
            <p className="!mt-0">West Bund Art Center, Shanghai, China</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>

            <p>
              Live Demo:{" "}
              <a
                href="https://interactivenn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                interactivenn.netlify.app
              </a>
            </p>
          </div>
        </div>

        {/* ============== Main Content ================= */}

        {/* Presentation */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Presentation at COSA x NYU Machine Learning for Creative Coding
            Conference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4 mb-6">
            <ZoomableImage
              src="/blog-images/inn/ex7.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/inn/ex8.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Components */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/PjvQ_i1lBPI?si=EXo-NFX9nFRT146v"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </article>
  );
}
