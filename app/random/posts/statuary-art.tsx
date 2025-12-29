import Image from "next/image";
import { randomPosts } from "./index";

export default function StatuaryArtPost() {
  const postData = randomPosts.find((p) => p.slug === "statuary-art");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-8">
        {/* Info Section */}

        {/* Main Content */}
      </div>
    </article>
  );
}
