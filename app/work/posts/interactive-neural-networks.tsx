import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function InteractiveNeuralNetworksPost() {
  const postData = posts.find((p) => p.slug === "interactive-neural-networks");
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
            <p>
              <strong>
                AI feels like a black box because we teach symbols and
                terminology before developing intuition.
              </strong>
            </p>
            <p>
              <strong>
                In this project, I turn neural networks into something you can
                play with and understand through interaction.
              </strong>
            </p>

            <p>
              Interactive Neural Networks is an educational exploration which
              aims to enhance public’s understanding of neural networks by
              developing an interactive online guide that explains their inner
              workings. Through the use of text explanations, real-time
              simulations, and interactive graphics,{" "}
              <strong>
                users can actively engage with the learning process by modifying
                parameters and observing the corresponding effects.
              </strong>
            </p>

            <p>
              This approach fosters a more intuitive and hands-on understanding
              of complex concepts, contrasted with traditional, passive learning
              methods. This project contributes to the principles of Explainable
              AI (XAI) by promoting transparency in AI decision-making process,
              building trust and encouraging responsible use of this technology.
            </p>
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
            {/* no margin between the two p */}
            <p className="font-semibold !mb-0 !mt-0">
              <em>Art and Design Education: FutureLab, 2025</em>
            </p>
            <p className="!mt-0">West Bund Art Center, Shanghai, China</p>

            <p className="font-semibold !mb-0 !mt-0">
              <em>NYU Global Show & Tell, 2025</em>
            </p>
            <p className="!mb-0 !mt-0">NYU Shanghai, Shanghai, China</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Conference
            </h3>
            <p className="!mb-0 !mt-0">
              COSA (Center for Open Source Arts) x NYU{" "}
              <a
                href="https://accad.osu.edu/news/cosa-x-nyu-global-dialogues-creative-tools"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Machine Learning for Creative Coding Conference
              </a>
              , New York, Mar 2025
              {"  "}
              <a
                href="https://docs.google.com/presentation/d/1M5xfaeLiY5PyC25rPTrvyXr9C6TKwTNz8YfzwJqj_9o/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Slides
              </a>
            </p>

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
            <p>
              <a
                href="https://github.com/XiaozaoWang/Interactive-Neural-Networks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Github Repo
              </a>{" "}
            </p>
          </div>
        </div>

        {/* ============== Main Content ================= */}
        {/* Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Demo</h2>
          <p className="!my-2">
            <strong>Explorable Explanation of a single perceptron:</strong>
          </p>

          <ZoomableImage
            src="/blog-images/inn3/d1.gif"
            alt="Neuron Demo"
            className="w-2/3 rounded-lg"
          />
          <p className="!my-2">
            <strong>Explorable Explanation of multi-layer perceptron:</strong>
          </p>

          <ZoomableImage
            src="/blog-images/inn3/d2.gif"
            alt="MLP Demo"
            className="w-2/3 rounded-lg"
          />
          <p className="!my-2">
            <strong>Video Demo:</strong>
          </p>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/ERDMJC7V_-Y?si=mO1By3YXFRCfj_rE"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Design*/}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mr-4 mb-6 w-4/5">
            <ZoomableImage
              src="/blog-images/inn3/s1.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/inn3/s2.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-4/5 ">
            <ZoomableImage
              src="/blog-images/inn3/s3.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/inn3/s4.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Exhibition */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4  mb-6">
            <ZoomableImage
              src="/blog-images/inn3/ex0.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/inn3/ex1.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4 mb-6">
            <ZoomableImage
              src="/blog-images/inn3/ex3.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/inn3/ex6.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>

          <p className="!my-2">
            <strong>
              Trailer Video for the Physical Installation (For Children):
            </strong>
          </p>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/PjvQ_i1lBPI?si=EXo-NFX9nFRT146v"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>

          {/* <Gallery
            images={[
              "/blog-images/inn3/ex_main.jpg",
              "/blog-images/inn3/ex_kibo.jpg",
              "/blog-images/inn3/ex_inter1.jpg",
            ]}
          /> */}
        </div>

        {/* Presentation */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Presentation at COSA x NYU Machine Learning for Creative Coding
            Conference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4 mb-6">
            <ZoomableImage
              src="/blog-images/inn3/ex7.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/inn3/ex8.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
