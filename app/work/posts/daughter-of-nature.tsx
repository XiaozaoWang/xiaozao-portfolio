import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function DaughterOfNaturePost() {
  const postData = posts.find((p) => p.slug === "daughter-of-nature");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-green-700 dark:!text-white">
          Where a dancer's movements influences environmental destruction.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              A live performance with motion-capture in Unity where a dancer's
              movements control an avatar witnessing environmental destruction,
              demonstrating multisensory engagement for cultural and ecological
              narratives.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>Unity, Rokoko Studio, Blender</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Live Performance
            </h3>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Virtual Body Performance, 2023</em>
            </p>
            <p className="!mt-0">
              The Red Theater, NYU Abu Dhabi, Abu Dhabi, UAE
            </p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Collaborators
            </h3>
            <p>Linda Shao, Youssef Aouni, Shreya Goel</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              My Role
            </h3>
            <p>Director, 3D modeling</p>

            {/* <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>
            <p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Project Link
              </a>
            </p> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Performance Recording</h2>
          <div className="aspect-video mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sF3KEBtP9-o?si=CdXpMiTPD_VAMeE-"
              title="The Shape of Sound Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </article>
  );
}
