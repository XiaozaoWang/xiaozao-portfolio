import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function IllustrationsPost() {
  const postData = randomPosts.find((p) => p.slug === "illustrations");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-8">
        {/* Info Section */}

        {/* Main Content */}
        <div className="mt-12">
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 上下间隔 */}
              <div className="!space-y-4">
                <ZoomableImage
                  src="/gallery/art2/4.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/art2/8.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/art2/10.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/gallery/art2/5.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/art2/7.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/art2/12.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/gallery/art2/9.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/art2/11.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/gallery/art2/6.jpg"
                  alt="image"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
