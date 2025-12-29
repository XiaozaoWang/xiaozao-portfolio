import Image from "next/image";
import { randomPosts } from "./index";

export default function CreateYourPlanetSystemPost() {
  const postData = randomPosts.find(
    (p) => p.slug === "create-your-planet-system"
  );

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-8">
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>Add your description here...</p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Created With
            </h3>
            <p>p5.js</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p>Add your content here...</p>
        </div>
      </div>
    </article>
  );
}
