import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function CityOfAllPost() {
  const postData = posts.find((p) => p.slug === "city-of-all");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-orange-500 dark:!text-white">
          Blending emerging technology into Disney Imagineering to discover
          hidden networks of non-human travelers.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              <strong>
                We often assume that cities belong to humans. But are we truly
                the owners of the city? Is human transportation the only form of
                movement that exists?
              </strong>{" "}
              As you travel by subway, bus, or other means, have you ever
              noticed the ants bustling through their underground kingdom,
              pigeons patrolling the city in formation, or dandelion seeds
              drifting with the wind?
            </p>
            <p>
              Using Shanghai as our foundation, we integrate the movement of
              three different creatures with human transportation, inviting
              people to{" "}
              <strong>
                discover the hidden networks of non-human travelers and create
                shared memories through interactive experiences.
              </strong>
            </p>
            <p>
              Beyond traditional vehicle and station designs, we{" "}
              <strong>
                incorporate motion capture, XR, and other emerging technologies,
                adding a "layer of wonder" to everyday travel.
              </strong>{" "}
              This layer does not disrupt efficiency but instead transforms
              mundane commutes into small adventures, turning each journey into
              something to look forward to. We believe that true Disney magic is
              not about escaping reality - it's about returning to it with a
              heart full of joy and a renewed sense of wonder.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>WebXR, three.js, p5.js, hand tracking, electronics</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Award
            </h3>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Nationwide 3rd Place</em>
            </p>
            <p className="!mb-0 !mt-0">
              Disney Imaginations Competition Shanghai, 2025
            </p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Collaborators
            </h3>
            <p>Andy Ye, Ash Yang, Linda Shao</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              My Role
            </h3>
            <p>Team Leader, Core Concept Design</p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>
            <p>
              <a
                href="https://drive.google.com/file/d/1rh619QkSqjuJv_kOk3fkNkDeOKa0FAzr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Competition Recording
              </a>
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/1bpO0qAnN6qWESbqA4wx4tNpeWh7zXxLJ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Final Presentation Slides
              </a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Group Photo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/disney/p1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/p3.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/disney/p2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/p4.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <div className="grid gap-8 w-4/5">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/disney/c.png"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c4.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c5.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c6.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c7.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c8.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c9.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c10.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c11.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/disney/c12.jpg"
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
