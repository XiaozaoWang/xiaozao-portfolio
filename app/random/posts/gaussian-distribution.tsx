import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function GaussianDistributionPost() {
  const postData = randomPosts.find((p) => p.slug === "gaussian-distribution");

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

        {/* <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1 ">
            <p>
              <strong>Links: </strong>
            </p>
          </div>
          <div className="col-span-5 ">
            <p>
              <a
                href="https://decodingnature.nyuadim.com/2023/11/13/xiaozao-assignment-9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Documentation
              </a>
            </p>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="mt-6">
          <div className="flex gap-4 max-w-full overflow-hidden">
            <ZoomableImage
              src="/gallery/coding2/5.jpg"
              alt="Image"
              className="flex-1 min-w-0"
            />
            <ZoomableImage
              src="/gallery/coding2/6.jpg"
              alt="Image"
              className="flex-1 min-w-0"
            />
            <ZoomableImage
              src="/gallery/coding2/7.jpg"
              alt="Image"
              className="flex-1 min-w-0"
            />
          </div>
          <h3 className="!mt-40">Live Demo</h3>
          <div className="aspect-video mb-8">
            <iframe
              width="600px"
              height="100%"
              src="https://editor.p5js.org/Xiaozao/full/tcRiXwlqj"
              title="Sketch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </article>
  );
}
