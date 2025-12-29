import Link from "next/link";
import Image from "next/image";
import { RandomPostMetadata } from "app/random/posts";

interface RandomCardProps {
  post: RandomPostMetadata;
}

export function RandomCard({ post }: RandomCardProps) {
  return (
    <Link
      href={`/random/${post.slug}`}
      className="group block transition-opacity duration-300 hover:opacity-80"
    >
      {/* Single cover image */}
      <div className="aspect-video relative overflow-hidden mb-4">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title below */}
      <h3 className="!text-xl !font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
        {post.time}
      </p>
    </Link>
  );
}
