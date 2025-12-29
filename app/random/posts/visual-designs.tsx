import Image from "next/image";
import { randomPosts } from "./index";
import { ZoomableImage } from "app/components/zoomable-image";

export default function VisualDesignsPost() {
  const postData = randomPosts.find((p) => p.slug === "visual-designs");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-0">
        {/* Info Section 2 */}
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-2">
            <p>
              <strong>Project Description: </strong>
            </p>
          </div>
          <div className="col-span-5">
            <p>
              <a
                href="https://www.i-got-one.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                I Got One
              </a>{" "}
              is a vibrant Chinese language learner community where learners
              from all walks of life share creative strategies and personal
              connections to Chinese characters, turning complexity into
              curiosity and inspiration.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-2">
            <p>
              <strong>My Role: </strong>
            </p>
          </div>
          <div className="col-span-5">
            <p>
              As a graphic designer, I turn foreigners’ text-based
              understandings of Chinese characters into visuals, helping them
              engage with Chinese language in a creative and fun way.
            </p>
          </div>
        </div>

        {/* Content 2*/}
        <div className="mt-12 w-9/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              {/* 1 */}
              <strong>“趣” - Text by Millie, Design by Xiaozao</strong>
              <p>
                "This character looks like 3 kids are having fun sliding down
                from the slider."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i44.png"
                    alt="Image"
                    className=""
                  />
                </div>
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i4.png"
                    alt="Image"
                    className=""
                  />
                </div>
              </div>
              {/* 2 */}
              <strong>“贵” - Text by Pedro, Design by Xiaozao</strong>
              <p>
                "I remember this character because it looks like a knight
                wearing a helmet and body armor. Knights are honorable, and
                polite. Nobles who wear armor live a expensive and lavish
                lifestyle."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i11.png"
                    alt="Image"
                    className=""
                  />
                </div>
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i1.png"
                    alt="Image"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="!space-y-4">
              {/* 3 */}
              <strong>“古” - Text and Design by Xiaozao</strong>
              <p>
                "This character looks like an ancient and elegant wooden chair."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i22.png"
                    alt="Image"
                    className=""
                  />
                </div>
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i2.png"
                    alt="Image"
                    className=""
                  />
                </div>
              </div>
              {/* 4 */}
              <strong>“久” - Text by Simone, Design by Xiaozao</strong>
              <p>
                "It looks like a labyrinth which takes a long time to finish."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i33.png"
                    alt="Image"
                    className=""
                  />
                </div>
                <div className="!space-y-4">
                  <ZoomableImage
                    src="/gallery/design/i3.png"
                    alt="Image"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="mt-12 w-full">
            <h3>
              Our designs are presented at bookstores and in local communities.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="!space-y-4">
                <ZoomableImage
                  src="/gallery/design/i5.jpg"
                  alt="Image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/gallery/design/i6.jpg"
                  alt="Image"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Info Section 1 */}
        <div className="grid grid-cols-7 gap-8 mt-40">
          <div className="col-span-2">
            <p>
              <strong>Project Description: </strong>
            </p>
          </div>
          <div className="col-span-5">
            <p>
              Ripplet is a start-up that helps young people identify and embrace
              their own emotions.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-2">
            <p>
              <strong>My Role: </strong>
            </p>
          </div>
          <div className="col-span-5">
            <p>
              As the graphic designer of the team, I designed a set of emotion
              visualizations based on scientific research and user study, as
              well as all the brandings including the logo, main visuals and
              social media campaigns.
            </p>
          </div>
        </div>

        {/* Content 1*/}
        <div className="mt-12 w-9/10">
          <h4>Main Visual:</h4>
          <ZoomableImage
            src="/gallery/design/r1.jpg"
            alt="Image"
            className=""
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <h4>Visuals:</h4>
              <ZoomableImage
                src="/gallery/design/r2.jpg"
                alt="Image"
                className=""
              />
              <ZoomableImage
                src="/gallery/design/r3.jpg"
                alt="Image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <h4>Logo and Social Media Campaign:</h4>
              <ZoomableImage
                src="/gallery/design/r4.jpg"
                alt="Image"
                className=""
              />
              <ZoomableImage
                src="/gallery/design/r5.jpg"
                alt="Image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
