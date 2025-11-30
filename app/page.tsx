import { BlogPosts } from "app/components/posts";
import { Gallery } from "app/components/gallery";
import { P5Sketch } from "app/components/p5-sketch";

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Hi, I'm Xiaozao! I'm passionate about creating digital experiences
          through code and design.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Explore my blog posts below to see my thoughts on development, design,
          and technology.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Latest Blog Posts
        </h2>
        <BlogPosts />
      </div>

      <Gallery />

      <P5Sketch />
    </section>
  );
}
