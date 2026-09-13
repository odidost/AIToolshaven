import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/config/site";
import { getOptimizedBlogTitle } from "@/lib/seo-titles";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate feed hourly

export async function GET() {
  const base = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");

  // Sort articles by date descending
  const sortedArticles = [...articles].sort((a, b) => {
    const timeA = new Date(a.date).getTime() || 0;
    const timeB = new Date(b.date).getTime() || 0;
    return timeB - timeA;
  });

  const newestDate = sortedArticles[0]?.date
    ? new Date(sortedArticles[0].date).toUTCString()
    : new Date().toUTCString();

  const itemsXml = sortedArticles
    .map((article) => {
      const title = getOptimizedBlogTitle(article.title, article.slug);
      const url = `${base}/blog/${article.slug}`;
      const pubDate = new Date(article.date).toUTCString();
      const imageUrl = article.imageUrl.startsWith("http")
        ? article.imageUrl
        : `${base}${article.imageUrl.startsWith("/") ? "" : "/"}${article.imageUrl}`;

      return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${article.author || "AIToolsHaven Editorial Team"}]]></dc:creator>
      <category><![CDATA[${article.category}]]></category>
      <description><![CDATA[${article.summary}]]></description>
      <content:encoded><![CDATA[<p>${article.summary}</p><p><a href="${url}">Read the full guide on AIToolsHaven &rarr;</a></p>]]></content:encoded>
      <media:content url="${imageUrl}" medium="image" />
    </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title><![CDATA[${siteConfig.name} — AI Editorial Guides, Benchmarks & Workflows]]></title>
    <link>${base}</link>
    <description><![CDATA[In-depth technical guides, tool comparisons, vibe coding tutorials, and verified AI software blueprints.]]></description>
    <language>en-us</language>
    <lastBuildDate>${newestDate}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${base}/assets/logo.png</url>
      <title><![CDATA[${siteConfig.name}]]></title>
      <link>${base}</link>
    </image>
${itemsXml}
  </channel>
</rss>`.trim();

  return new Response(rssFeed, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
