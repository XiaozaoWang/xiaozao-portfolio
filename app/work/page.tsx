import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Work",
  description: "View my work and projects.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Work</h1>
      <BlogPosts />
    </section>
  );
}
