import Link from "next/link";
import Image from "next/image";
import { formatDate } from "app/blog/utils";

interface BlogCardProps {
  post: {
    slug: string;
    metadata: {
      title: string;
      publishedAt: string;
      summary: string;
      image?: string;
    };
  };
}

export function BlogCard({ post }: BlogCardProps) {
  const heroImage =
    post.metadata.image || `https://picsum.photos/400/300?random=${post.slug}`;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={heroImage}
          alt={post.metadata.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(post.metadata.publishedAt, false)}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.metadata.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {post.metadata.summary}
        </p>
      </div>
    </Link>
  );
}
