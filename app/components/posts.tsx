import { getBlogPosts } from "app/work/utils";
import { BlogCard } from "./blog-card";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allBlogs.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
