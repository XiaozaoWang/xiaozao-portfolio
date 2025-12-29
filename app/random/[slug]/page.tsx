import { notFound } from "next/navigation";
import {
  getRandomPostBySlug,
  getRandomPosts,
  getRandomPostComponent,
} from "app/random/utils";
import { baseUrl } from "app/sitemap";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getRandomPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = getRandomPostBySlug(slug);
  if (!post) {
    return;
  }

  let { title } = post;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${baseUrl}/random/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogImage],
    },
  };
}

export default async function RandomPost({ params }) {
  const { slug } = await params;
  let post = getRandomPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const heroImage = post.heroImage || post.coverImage;

  // Check if there's a custom component
  const CustomComponent = post.hasCustomContent
    ? await getRandomPostComponent(slug)
    : null;

  // Get all posts and find prev/next
  const allPosts = getRandomPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <section className="relative pb-20">
      {/* Hero Image */}
      {/* <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden">
        <Image
          src={heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div> */}

      <h1 className="title font-semibold text-4xl tracking-tighter !mb-2">
        {post.title}
      </h1>

      {/* Time */}
      {post.time && (
        <p className="text-gray-500 dark:text-gray-400 !text-medium mb-6">
          {post.time}
        </p>
      )}

      <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>

      {/* Render custom component if available, otherwise show default gallery */}
      {CustomComponent ? (
        <CustomComponent />
      ) : (
        post.images &&
        post.images.length > 0 && (
          <div className="space-y-8">
            {post.images.map((image, index) => (
              <div key={index} className="relative w-full h-96 overflow-hidden">
                <Image
                  src={image}
                  alt={`${post!.title} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )
      )}

      {/* Navigation buttons */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-between pointer-events-none">
        <div className="ml-[280px]">
          {prevPost && (
            <Link
              href={`/random/${prevPost.slug}`}
              className="pointer-events-auto px-4 py-2 rounded-md text-sm font-medium bg-blue-500 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg"
              //   className="pointer-events-auto text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
            >
              ← Prev
            </Link>
          )}
        </div>
        <div className="mr-8">
          {nextPost && (
            <Link
              href={`/random/${nextPost.slug}`}
              className="pointer-events-auto px-4 py-2 rounded-md text-sm font-medium bg-blue-500 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg"
              //   className="pointer-events-auto text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
