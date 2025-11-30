import { formatDate, getBlogPosts } from "app/blog/utils";
import { BlogCard } from "./blog-card";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
    </div>
  );
}
