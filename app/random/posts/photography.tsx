import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function PhotographyPost() {
  const postData = randomPosts.find((p) => p.slug === "photography");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-8">
        {/* Main Content */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/photo/1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/5.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/7.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/c2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/c4.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/c5.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/u1.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/photo/2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/4.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/6.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/c1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/c3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/u2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo/u3.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
