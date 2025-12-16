import Link from "next/link";
import Image from "next/image";
import { PostMetadata, getTagColor } from "app/work/posts";

interface BlogCardProps {
  post: PostMetadata;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/work/${post.slug}`}
      className="group block transition-opacity duration-300 hover:opacity-80"
    >
      <div className="aspect-video relative overflow-hidden mb-4">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div>
        {/* Title with featured star */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center">
          {post.featured && (
            <span className="text-yellow-500 mr-2 text-lg" title="Featured">
              ⭐
            </span>
          )}
          {post.title}
        </h3>

        {/* Time and Description */}
        <div className="mb-3">
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
            {post.time}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-medium"
              style={{ color: getTagColor(tag) }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
