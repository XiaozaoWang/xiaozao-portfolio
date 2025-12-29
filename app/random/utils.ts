import { randomPosts, RandomPostMetadata } from "./posts";

// Dynamic import for custom post components
const postComponents = {
  "dark-side-of-the-moon": () => import("./posts/dark-side-of-the-moon"),
  "gaussian-distribution": () => import("./posts/gaussian-distribution"),
  genesis: () => import("./posts/genesis"),
  "linked-nodes": () => import("./posts/linked-nodes"),
  "create-your-planet-system": () =>
    import("./posts/create-your-planet-system"),
  "random-walker": () => import("./posts/random-walker"),
  "3d-rendering": () => import("./posts/3d-rendering"),
  "visual-designs": () => import("./posts/visual-designs"),
  illustrations: () => import("./posts/illustrations"),
  sketches: () => import("./posts/sketches"),
  photography: () => import("./posts/photography"),
  "statuary-art": () => import("./posts/statuary-art"),
};

export function getRandomPosts(): RandomPostMetadata[] {
  return randomPosts;
}

export function getRandomPostBySlug(
  slug: string
): RandomPostMetadata | undefined {
  return randomPosts.find((post) => post.slug === slug);
}

export async function getRandomPostComponent(slug: string) {
  const componentImport = postComponents[slug as keyof typeof postComponents];
  if (!componentImport) {
    return null;
  }

  const module = await componentImport();
  return module.default;
}
