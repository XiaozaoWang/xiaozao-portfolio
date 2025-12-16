import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/work/utils";

export async function GET() {
  let allBlogs = await getBlogPosts();

  const itemsXml = allBlogs
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/work/${post.slug}</link>
          <description>${post.description || ""}</description>
          <pubDate>${new Date().toUTCString()}</pubDate>
        </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
