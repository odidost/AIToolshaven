import { MetadataRoute } from "next";
import { getAllTools } from "@/lib/queries/tools";
import { getAllCategories } from "@/lib/queries/categories";
import { comparisons } from "@/lib/comparisons";
import { siteConfig } from "@/lib/config/site";

const BASE_URL = siteConfig.baseUrl;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tools = await getAllTools();
  const categories = getAllCategories();

  const toolEntries: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE_URL}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const compareEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/submit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...staticPages, ...categoryEntries, ...toolEntries, ...compareEntries];
}
