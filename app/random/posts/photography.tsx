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
                src="/gallery/photo2/1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/5.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/7.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/c2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/c4.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/c5.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/u1.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/gallery/photo2/2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/4.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/6.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/c1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/c3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/u2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/gallery/photo2/u3.jpg"
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
