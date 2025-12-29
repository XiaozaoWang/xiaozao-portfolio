// Random posts configuration
export interface RandomPostMetadata {
  title: string;
  slug: string;
  category: "creative-coding" | "art";
  time?: string;
  coverImage: string; // Single cover image for card view
  images?: string[]; // Optional images for detail page gallery
  heroImage?: string; // Optional hero image for detail page, defaults to coverImage
  hasCustomContent?: boolean; // If true, use custom tsx file instead of default gallery
}

export const randomPosts: RandomPostMetadata[] = [
  {
    slug: "dark-side-of-the-moon",
    title: "Dark Side of the Moon",
    time: "2023",
    category: "creative-coding",
    coverImage: "/gallery/coding2/1.jpg",
    hasCustomContent: true,
  },
  {
    slug: "gaussian-distribution",
    title: "Gaussian Distribution",
    time: "2023",
    category: "creative-coding",
    coverImage: "/gallery/coding2/8.jpg",
    hasCustomContent: true,
  },
  {
    slug: "genesis",
    title: "Genesis",
    time: "2023",
    category: "creative-coding",
    coverImage: "/gallery/coding2/1.gif",
    hasCustomContent: true,
  },

  {
    slug: "linked-nodes",
    title: "Linked Nodes",
    time: "2023",
    category: "creative-coding",
    coverImage: "/gallery/coding2/2.gif",
    hasCustomContent: true,
  },
  //   {
  //     slug: "create-your-planet-system",
  //     title: "Create your Planet System",
  //     time: "2023",
  //     category: "creative-coding",
  //     coverImage: "/gallery/coding2/planet.jpg",
  //     hasCustomContent: true,
  //   },
  {
    slug: "random-walker",
    title: "The World's End",
    time: "2023",
    category: "creative-coding",
    coverImage: "/gallery/coding2/11.jpg",
    hasCustomContent: true,
  },
  // -------------------art-------------------------------

  {
    slug: "visual-designs",
    title: "Visual Designs",
    // time: "2023",
    category: "art",
    coverImage: "/gallery/design/c.png",
    hasCustomContent: true,
  },
  {
    slug: "illustrations",
    title: "Illustrations",
    // time: "2023",
    category: "art",
    coverImage: "/gallery/art2/4.jpg",
    hasCustomContent: true,
  },
  {
    slug: "sketches",
    title: "Sketches",
    // time: "2023",
    category: "art",
    coverImage: "/gallery/sketch2/c.jpg",
    hasCustomContent: true,
  },
  {
    slug: "3d-rendering",
    title: "3D Renderings",
    // time: "2023",
    category: "art",
    coverImage: "/gallery/render/c.png",
    hasCustomContent: true,
  },
  {
    slug: "photography",
    title: "Photography",
    // time: "2023",
    category: "art",
    coverImage: "/gallery/photo2/2.jpg",
    hasCustomContent: true,
  },
  //   {
  //     slug: "statuary-art",
  //     title: "Statuary Arts",
  //     // time: "2023",
  //     category: "art",
  //     coverImage: "/gallery/sculpture/c.png",
  //     hasCustomContent: true,
  //   },
];
