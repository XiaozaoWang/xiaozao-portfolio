import { posts, PostMetadata } from "./posts";

// 动态导入文章组件
const postComponents = {
  vim: () => import("./posts/vim"),
  "interactive-neural-networks": () =>
    import("./posts/interactive-neural-networks"),
  "algorithmic-nature": () => import("./posts/algorithmic-nature"),
};

export function getBlogPosts(): PostMetadata[] {
  // 将featured文章排在前面，其他按原来的顺序
  return posts.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export function getPostBySlug(slug: string): PostMetadata | undefined {
  return posts.find((post) => post.slug === slug);
}

export async function getPostComponent(slug: string) {
  const componentImport = postComponents[slug as keyof typeof postComponents];
  if (!componentImport) {
    return null;
  }

  const module = await componentImport();
  return module.default;
}

export function formatDate(date: string, includeRelative = false) {
  // 保留此函数以防其他地方仍在使用
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
