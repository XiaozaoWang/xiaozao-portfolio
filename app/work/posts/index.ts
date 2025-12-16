// 文章配置文件
export interface PostMetadata {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  slug: string;
  time: string;
  image: string;
}

// Tag到颜色的映射关系
export const tagColorMap: Record<string, string> = {
  // 技术相关
  Template: "#3B82F6", // 蓝色
  UI: "#10B981", // 绿色
  Design: "#F59E0B", // 橙色
  Components: "#8B5CF6", // 紫色

  // AI/ML相关
  AI: "#EF4444", // 红色
  "Machine Learning": "#06B6D4", // 青色
  Interactive: "#EC4899", // 粉色
  Visualization: "#84CC16", // 青绿色

  // 开发相关
  TypeScript: "#3B82F6", // 蓝色
  Development: "#059669", // 绿色
  "Best Practices": "#7C3AED", // 紫色

  // 默认颜色（如果tag不在映射中）
  default: "#6B7280", // 灰色
};

// 获取tag颜色的函数
export function getTagColor(tag: string): string {
  return tagColorMap[tag] || tagColorMap.default;
}

export const posts: PostMetadata[] = [
  // {
  //   slug: "vim",
  //   title: "Template",
  //   description:
  //     "Comprehensive layout template showcasing all available UI components and design patterns for creating rich, interactive content.",
  //   tags: ["Template", "UI", "Design", "Components"],
  //   featured: true,
  //   time: "time",
  //   image: "/blog-images/inn1.jpg",
  // },
  {
    slug: "interactive-neural-networks",
    title: "Interactive Neural Networks",
    description:
      "Demystifying neural networks through interactive web-based simulations.",
    tags: [
      "explorable explanation",
      "education",
      "Machine Learning",
      "web dev",
    ],
    featured: false,
    time: "2024-2025",
    image: "/blog-images/inn/neuron.gif",
  },
  {
    slug: "algorithmic-nature",
    title: "Algorithmic Nature",
    description:
      "Exploring alternate natures through generative algorithms and 3D printing.",
    tags: ["algorithmic art", "generative design", "3D printing"],
    featured: false,
    time: "2025",
    image: "/blog-images/inn/neuron.gif",
  },
];
