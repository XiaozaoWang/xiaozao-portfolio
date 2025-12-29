import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function SketchesPost() {
  const postData = randomPosts.find((p) => p.slug === "sketches");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-8">
        {/* Cat */}
        <h3>My Cats and I</h3>
        <div className="mt-12 w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4 md:col-span-2">
              {" "}
              <ZoomableImage
                src="/gallery/sketch/c3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/c4.jpg"
                alt="image"
                className=""
              />
            </div>

            <div className="!space-y-4 md:col-span-3">
              <ZoomableImage
                src="/gallery/sketch/c1.jpg"
                alt="image"
                className=""
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="!space-y-4 md:col-span-1">
                  <ZoomableImage
                    src="/gallery/sketch/c2.jpg"
                    alt="image"
                    className=""
                  />
                </div>
                <div className="!space-y-4 md:col-span-1">
                  <ZoomableImage
                    src="/gallery/sketch/c5.jpg"
                    alt="image"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 速写 */}
        <h3>Daily Anime Sketches</h3>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/sketch/1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/3.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/sketch/7.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/4.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/9.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/sketch/10.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/6.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/sketch/11.jpg"
                alt="image"
                className=""
              />
              {/* <ZoomableImage
                  src="/gallery/sketch/c1.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/sketch/c2.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/sketch/c3.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/sketch/c4.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/sketch/c5.jpg"
                  alt="image"
                  className=""
                /> */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
