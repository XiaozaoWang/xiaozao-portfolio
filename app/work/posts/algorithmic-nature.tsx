import { Gallery } from "app/components/gallery";
import { posts } from "./index";

export default function AlgorithmicNaturePost() {
  const postData = posts.find((p) => p.slug === "interactive-neural-networks");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              This project is an educational exploration which aims to enhance
              public’s understanding of neural networks by developing an
              interactive online guide that explains their inner workings.
              Through the use of text explanations, real-time simulations, and
              interactive graphics, users can actively engage with the learning
              process by modifying parameters and observing the corresponding
              effects. This approach fosters a more intuitive and hands-on
              understanding of complex concepts, contrasted with traditional,
              passive learning methods. This project contributes to the
              principles of Explainable AI (XAI) by promoting transparency in AI
              decision-making process, building trust and encouraging
              responsible use of this technology.
            </p>
          </div>

          {/* Right Sidebar */}
          {/* space y 没用 */}
          <div className="space-y-2">
            {/* bold p */}
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Project Details
            </p>
            <p>{postData?.tags.map((tag) => `#${tag}`).join(" ")}</p>

            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Time
            </p>
            <p>2024-2025</p>

            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </p>
            <p>React.js, custom machine learning model, Arduino, electronics</p>

            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Exhibitions
            </p>
            {/* no margin between the two p */}
            <p className="!mb-0 !mt-0">Shanghai West Bund Art Center (2025)</p>
            <p className="!mb-0 !mt-0">NYU Global Show & Tell (2025)</p>

            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Conference
            </p>
            <p className="!mb-0 !mt-0">
              <a
                href="https://clinicopensourcearts.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                COSA (Clinic for Open Source Arts)
              </a>{" "}
              x NYU Machine Learning for Creative Coding Conference, NY, Mar
              2025
            </p>

            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Website
            </p>

            <p>
              <a
                href="https://interactivenn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                interactivenn.netlify.app
              </a>
            </p>

            {/* Time Section */}
            {/* <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Time
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2024-2025
              </p>
            </div> */}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Video</h3>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://drive.google.com/file/d/1WKuMUcKnRuAW0_feQhPq503mUfT-fuT5/preview"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Demo</h3>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          <img
            src="/blog-images/inn/neuron.gif"
            alt="Neuron Demo"
            className="w-full rounded-lg"
          />
          <img
            src="/blog-images/inn/mlp.gif"
            alt="MLP Demo"
            className="w-full rounded-lg"
          />
          {/* </div> */}
        </div>

        {/* Exhibition Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Exhibition at Shanghai New Bund Art Center
          </h3>
          <Gallery
            images={[
              "/blog-images/inn/ex_main.jpg",
              "/blog-images/inn/ex_kibo.jpg",
              "/blog-images/inn/ex_inter1.jpg",
            ]}
          />

          <Gallery
            images={[
              "/blog-images/inn/ex_kid.jpg",
              "/blog-images/inn/inn2.jpg",
              "/blog-images/inn/ex_user2.jpg",
            ]}
          />
        </div>

        {/* Presentation Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Presentation at COSA x NYU Machine Learning for Creative Coding
            Conference
          </h3>
          <Gallery
            images={[
              "/blog-images/inn/nycpre1.jpg",
              "/blog-images/inn/nycpre2.jpg",
            ]}
          />
        </div>
      </div>
    </article>
  );
}
