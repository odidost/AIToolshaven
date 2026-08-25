import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/api/",
          "/admin/",
          "/video/",
          "/*?*nocache=",
          "/*?*cache=",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "ClaudeBot",
          "Bytespider",
          "Amazonbot",
          "cohere-ai",
          "SemrushBot",
          "AhrefsBot",
          "MJ12bot",
          "DotBot"
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}

