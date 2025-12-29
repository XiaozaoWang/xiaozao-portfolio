import { getRandomPosts } from "app/random/utils";
import { RandomCard } from "app/components/random-card";

export const metadata = {
  title: "Random",
  description: "Random collections and explorations.",
};

export default function Page() {
  const allPosts = getRandomPosts();
  const creativeCodingPosts = allPosts.filter(
    (post) => post.category === "creative-coding"
  );
  const artPosts = allPosts.filter((post) => post.category === "art");

  return (
    <section>
      {/* Creative Coding Section */}
      {creativeCodingPosts.length > 0 && (
        <div className="mb-12">
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
            Creative Coding
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creativeCodingPosts.map((post) => (
              <RandomCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Art Section */}
      {artPosts.length > 0 && (
        <div>
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Art</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artPosts.map((post) => (
              <RandomCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
