// 文章配置文件
export interface PostMetadata {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  slug: string;
  time: string;
  image: string;
  type: string;
}

// Tag到颜色的映射关系
export const tagColorMap: Record<string, string> = {
  education: "#10B981",
  "machine learning": "#06B6D4",
  "explainable AI": "#3B82F6",
  "explorable explanation": "#8B5CF6",
  "physical computing": "#68a4c9ff",
  "generative art": "#F59E0B",
  XR: "#8B5CF6",
  "data visualization": "#84CC16",
  "web dev": "#b06ed1ff",
  "creative coding": "#e8b726ff",
  "creative design": "#F97316",
  "speculative design": "#F97316",
  "embodied learning": "#84CC16",
  "science visualization": "#3B82F6",
  "live performance": "#49bab4ff",
  "motion capture": "#7b5febff",

  // 默认颜色（如果tag不在映射中）
  default: "#6B7280", // 灰色
};

// 获取tag颜色的函数
export function getTagColor(tag: string): string {
  return tagColorMap[tag] || tagColorMap.default;
}

export const posts: PostMetadata[] = [
  {
    slug: "algorithmic-nature",
    title: "Algorithmic Nature",
    description:
      "Is nature the only version possible? Can algorithms reveal unrealized natures?",
    tags: ["generative art", "physical computing", "speculative design"],
    featured: false,
    time: "2025",
    image: "/blog-images/an/sn2.jpg",
    type: "individual",
  },
  {
    slug: "interactive-neural-networks",
    title: "Interactive Neural Networks",
    description: "How to make machine learning more intuitive for beginners?",
    tags: ["explainable AI", "education", "machine learning", "web dev"],
    featured: false,
    time: "2024-2025",
    image: "/blog-images/inn/neuron.gif",
    type: "individual",
  },
  {
    slug: "invisible-worlds",
    title: "Invisible Worlds",
    description:
      "Can we turn the world itself into the interface for learning?",
    tags: ["XR", "education", "embodied learning"],
    featured: false,
    time: "2025",
    image: "/blog-images/iw/c.png",
    type: "individual",
  },
  {
    slug: "digital-blossoms",
    title: "Digital Blossoms",
    description:
      "Interactive visualization of a flower dataset in the 3D space using embeddings and dimension reduction.",
    tags: ["machine learning", "data visualization"],
    featured: false,
    time: "2024",
    image: "/blog-images/blossom/c.png",
    type: "individual",
  },
  {
    slug: "the-shape-of-sound",
    title: "The Shape of Sound",
    description:
      "Translating music into a visual language through computation.",
    tags: ["creative coding", "data visualization"],
    featured: false,
    time: "2024",
    image: "/blog-images/sound/c.png",
    type: "individual",
  },
  {
    slug: "city-of-all",
    title: "City of All",
    description:
      "Blending emerging technology into Disney Imagineering to discover hidden networks of non-human travelers.",
    tags: ["creative design", "XR", "physical computing"],
    featured: false,
    time: "2025",
    image: "/blog-images/disney/c-.png",
    type: "team",
  },
  {
    slug: "a-flowing-painting",
    title: "A Flowing Painting",
    description: "Make Van Gogh’s Starry Night move.",
    tags: ["creative coding"],
    featured: false,
    time: "2023",
    image: "/blog-images/vangogh/c.png",
    type: "individual",
  },
  {
    slug: "morphing",
    title: "Morphing",
    description:
      "Morphing nature’s patterns onto humans to reveal deep interconnection.",
    tags: ["creative coding", "generative art"],
    featured: false,
    time: "2023",
    image: "/blog-images/morphing/c.png",
    type: "individual",
  },

  {
    slug: "between-worlds",
    title: "Between Worlds",
    description: "A networked game that lives across multiple browser windows.",
    tags: ["creative coding", "web dev"],
    featured: false,
    time: "2023",
    image: "/blog-images/windows/c.jpg",
    type: "individual",
  },
  {
    slug: "prism",
    title: "Prism",
    description: "An aesthetic simulation of light refraction.",
    tags: ["creative coding", "science visualization"],
    featured: false,
    time: "2023",
    image: "/blog-images/prism/c.png",
    type: "individual",
  },
  {
    slug: "daughter-of-nature",
    title: "Daughter of Nature",
    description:
      "Where a dancer's movements influences environmental destruction.",
    tags: ["live performance", "motion capture"],
    featured: false,
    time: "2023",
    image: "/blog-images/daughter/c.png",
    type: "team",
  },
  {
    slug: "comments",
    title: "Comments",
    description:
      "Materializing online commenting through chemical reactions to examine the collective impact of cyberbullying.",
    tags: ["web dev", "physical computing"],
    featured: false,
    time: "2022",
    image: "/blog-images/comments/c.jpg",
    type: "individual",
  },

  // {
  //   slug: "vim",
  //   title: "Template",
  //   description:
  //     "Comprehensive layout template showcasing all available UI components and design patterns for creating rich, interactive content.",
  //   tags: ["Template", "UI", "Design", "Components"],
  //   featured: false,
  //   time: "time",
  //   image: "/blog-images/",
  // },
];
