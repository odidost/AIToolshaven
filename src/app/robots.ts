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
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}

