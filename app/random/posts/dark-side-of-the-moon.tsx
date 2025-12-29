import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function Sample1Post() {
  const postData = randomPosts.find((p) => p.slug === "sample-1");

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
                href="https://editor.p5js.org/Xiaozao/full/B2DWGdlQo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Live Demo
              </a>
              ,{" "}
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
        </div>

        {/* ============== Main Content ================= */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/coding2/2.jpg"
                alt="Image"
                className=""
              />
              <ZoomableImage
                src="/gallery/coding2/3.jpg"
                alt="Image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/coding2/1.jpg"
                alt="Image"
                className=""
              />
            </div>
          </div>
          {/* <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Process
            </h3>

            <ZoomableImage
              src="/gallery/coding2/4.jpg"
              alt="Image"
              className="w-1/2"
            />
          </div> */}
        </div>
      </div>
    </article>
  );
}
