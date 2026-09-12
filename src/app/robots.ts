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
          "ChatGPT-User",
          "Claude-Web",
          "PerplexityBot"
        ],
        allow: "/",
      },
      {
        userAgent: [
          "CCBot",
          "Bytespider",
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

