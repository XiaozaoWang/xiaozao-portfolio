import { notFound } from "next/navigation";
import { getBlogPosts, getPostBySlug, getPostComponent } from "app/work/utils";
import { getTagColor } from "app/work/posts";
import { baseUrl } from "app/sitemap";
import Image from "next/image";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = getPostBySlug(slug);
  if (!post) {
    return;
  }

  let { title, description } = post;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function WorkPost({ params }) {
  const { slug } = await params;
  let post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 动态加载文章组件
  const PostComponent = await getPostComponent(slug);

  if (!PostComponent) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: `${baseUrl}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Xiaozao Wang",
            },
          }),
        }}
      />
      {/* Hero Image - 全宽度无圆角阴影 */}
      <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* 显示特色标签 */}
      {post.featured && (
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
            <span className="mr-1">⭐</span>
            Featured
          </span>
        </div>
      )}
      <h1 className="title font-semibold text-4xl tracking-tighter mb-4">
        {post.title}
      </h1>
      {/* Time */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        {post.time}
      </p>
      {/* 显示标签 */}
      <div className="flex flex-wrap gap-3 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-medium"
            style={{ color: getTagColor(tag) }}
          >
            {tag}
          </span>
        ))}
      </div>{" "}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>
      {/* 渲染动态加载的文章组件 */}
      <PostComponent />
    </section>
  );
}
