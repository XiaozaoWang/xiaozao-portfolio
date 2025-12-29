import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function GenesisPost() {
  const postData = randomPosts.find((p) => p.slug === "genesis");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-0">
        {/* Info Section */}
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1 ">
            <p>
              <strong>Created With: </strong>
            </p>
          </div>
          <div className="">
            <p>p5.js</p>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1 ">
            <p>
              <strong>Links: </strong>
            </p>
          </div>
          <div className="col-span-5 ">
            <p>
              <a
                href="https://wp.nyu.edu/nyushanghai-xiaozao/2023/02/20/mini-project-3-generative-motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Documentation
              </a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6">
          <ZoomableImage src="/gallery/coding/1.gif" alt="Image" className="" />
          <h3 className="!mt-40">Live Demo</h3>
          <div className="aspect-video mb-8">
            <iframe
              width="400px"
              height="100%"
              src="https://editor.p5js.org/Xiaozao/full/WH36Hubxi"
              title="Sketch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </article>
  );
}
