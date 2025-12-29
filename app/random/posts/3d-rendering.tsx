import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function ThreeDRenderingPost() {
  const postData = randomPosts.find((p) => p.slug === "3d-rendering");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-0">
        {/* Info Section */}
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1 ">
            <p>
              <strong>Project Title: </strong>
            </p>
          </div>
          <div className="">
            <p>Lost in the Depths</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1 ">
            <p>
              <strong>Created With: </strong>
            </p>
          </div>
          <div className="">
            <p>Blender</p>
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
                href="https://docs.google.com/presentation/d/17E0jAGoQwJOrvc8dXwD2k5a-wETHSJPA4aIkaQVrT50/edit?usp=sharing"
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
          <div className="aspect-video mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Bay2HDV3E2w?si=86AteWqZr2T_3jgg"
              title="Lost in the Depths"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="!mt-40">Process</h3>
          <div className="!space-y-4 mt-6 w-4/5">
            <ZoomableImage
              src="/gallery/render/1.jpg"
              alt="Image"
              className=""
            />
            <ZoomableImage
              src="/gallery/render/2.jpg"
              alt="Image"
              className=""
            />
            <ZoomableImage
              src="/gallery/render/3.jpg"
              alt="Image"
              className=""
            />
            <ZoomableImage
              src="/gallery/render/4.jpg"
              alt="Image"
              className=""
            />
            <ZoomableImage
              src="/gallery/render/5.jpg"
              alt="Image"
              className=""
            />
            <ZoomableImage
              src="/gallery/render/6.jpg"
              alt="Image"
              className=""
            />
          </div>
        </div>
      </div>
    </article>
  );
}
