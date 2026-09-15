import { MetadataRoute } from "next";
import { getSitemapTools } from "@/lib/queries/tools";
import { getAllCategories } from "@/lib/queries/categories";
import { comparisons } from "@/lib/comparisons";
import { siteConfig } from "@/lib/config/site";
import { goals } from "@/lib/goals";
import { workflows } from "@/lib/workflows";
import { articles } from "@/lib/articles";
import { getAllCuratedAlternatives } from "@/lib/data/alternatives";
import { categoryGuides } from "@/content/categories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const isLocalhost = siteConfig.baseUrl?.includes("localhost");
  const BASE_URL = isLocalhost ? "https://aitoolshaven.com" : (siteConfig.baseUrl || "https://aitoolshaven.com");
  
  // Ensure no trailing slash for clean appending
  const cleanBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

  const validTools = await getSitemapTools();
  const categories = await getAllCategories();
  
  // Calculate max lastUpdated across all tools for static pages fallback
  const allDates = validTools
    .map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0)
    .filter(d => d > 0);
  
  const siteMaxDateStr = allDates.length > 0 
    ? new Date(Math.max(...allDates)).toISOString() 
    : new Date().toISOString();

  // 1. Homepage — Absolute Top Priority (1.0)
  const homeEntry: MetadataRoute.Sitemap = [
    {
      url: `${cleanBase}/`,
      lastModified: siteMaxDateStr,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // 2. High-Intent Core Discovery Hubs
  const coreHubs = [
    "/categories",
    "/freemium-ai-tools",
    "/latest-ai-tools",
    "/trending-ai-tools",
    "/popular-ai-tools",
    "/ai-tool-recommender",
    "/compare-tools",
    "/workflows",
    "/goals",
    "/blog",
    "/ai-cost-calculator",
    "/submit",
  ];

  const coreHubEntries: MetadataRoute.Sitemap = coreHubs.map(route => ({
    url: `${cleanBase}${route}`,
    lastModified: siteMaxDateStr,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // 3. Category Pillar & Dedicated Guides
  const categoryEntries: MetadataRoute.Sitemap = [];
  categories.forEach(cat => {
    if (cat.status && cat.status !== 'Published') return;
    if (cat.indexable === false) return;

    const hasGuide = Boolean(categoryGuides[cat.slug] || categoryGuides[cat.id]);

    const catTools = validTools.filter(t => 
      t.category === cat.id || 
      t.category === cat.slug ||
      t.category === cat.name ||
      t.additionalCategories?.includes(cat.id) ||
      t.additionalCategories?.includes(cat.slug)
    );
    
    // Include if the category has an editorial pillar guide OR has tools
    if (!hasGuide && catTools.length < 3) return;

    const catDates = catTools.map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0).filter(d => d > 0);
    const maxDate = catDates.length > 0 ? new Date(Math.max(...catDates)).toISOString() : siteMaxDateStr;
    
    categoryEntries.push({
      url: `${cleanBase}/category/${cat.slug}`,
      lastModified: maxDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  // 4. In-Depth Blog Articles & Editorial Guides
  const articleEntries: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${cleanBase}/blog/${article.slug}`,
    lastModified: article.date ? new Date(article.date).toISOString() : siteMaxDateStr,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 5. Curated Side-by-Side Comparisons
  const compareEntries: MetadataRoute.Sitemap = [];
  comparisons.forEach(c => {
    const tool1 = validTools.find(t => t.name.toLowerCase() === c.tool1.name.toLowerCase() || t.slug === c.tool1.name.toLowerCase());
    const tool2 = validTools.find(t => t.name.toLowerCase() === c.tool2.name.toLowerCase() || t.slug === c.tool2.name.toLowerCase());
    
    if (!tool1 || !tool2) return;

    const d1 = tool1?.lastUpdated ? new Date(tool1.lastUpdated).getTime() : 0;
    const d2 = tool2?.lastUpdated ? new Date(tool2.lastUpdated).getTime() : 0;
    const maxDateNum = Math.max(d1, d2);
    const maxDate = maxDateNum > 0 ? new Date(maxDateNum).toISOString() : siteMaxDateStr;
    
    compareEntries.push({
      url: `${cleanBase}/compare-tools/${c.slug}`,
      lastModified: maxDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 6. Curated Alternatives Hubs
  const curatedAlternatives = getAllCuratedAlternatives();
  const altEntries: MetadataRoute.Sitemap = curatedAlternatives.map(alt => ({
    url: `${cleanBase}/alternatives/${alt.slug}`,
    lastModified: siteMaxDateStr,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 7. Workflow Step-by-Step Blueprints
  const workflowEntries: MetadataRoute.Sitemap = workflows.map(workflow => {
    const wfTools = validTools.filter(t => t.workflows?.includes(workflow.slug));
    const wfDates = wfTools.map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0).filter(d => d > 0);
    const maxDate = wfDates.length > 0 ? new Date(Math.max(...wfDates)).toISOString() : siteMaxDateStr;
    
    return {
      url: `${cleanBase}/workflows/${workflow.slug}`,
      lastModified: maxDate,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  // 8. Goal Solutions & Roadmaps
  const goalEntries: MetadataRoute.Sitemap = goals.map(goal => {
    const goalTools = validTools.filter(t => t.goals?.includes(goal.slug) || t.goals?.includes(goal.title));
    const goalDates = goalTools.map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0).filter(d => d > 0);
    const maxDate = goalDates.length > 0 ? new Date(Math.max(...goalDates)).toISOString() : siteMaxDateStr;
    
    return {
      url: `${cleanBase}/goals/${goal.slug}`,
      lastModified: maxDate,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  // 9. E-E-A-T, Trust, Transparency & Informational Pages
  const trustRoutes = [
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/editorial-policy", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/affiliate-disclosure", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/advertise", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/media-kit", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/agency", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/refund-policy", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/cookie-policy", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/disclaimer", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const trustEntries: MetadataRoute.Sitemap = trustRoutes.map(item => ({
    url: `${cleanBase}${item.path}`,
    lastModified: siteMaxDateStr,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Combine all high-value entries (tools deliberately excluded to consolidate crawl budget)
  const allEntries = [
    ...homeEntry,
    ...coreHubEntries,
    ...categoryEntries,
    ...articleEntries,
    ...compareEntries,
    ...altEntries,
    ...workflowEntries,
    ...goalEntries,
    ...trustEntries,
  ];

  // Deduplicate by URL
  const uniqueUrls = new Set<string>();
  const deduplicatedEntries = allEntries.filter(entry => {
    if (uniqueUrls.has(entry.url)) return false;
    uniqueUrls.add(entry.url);
    return true;
  });

  return deduplicatedEntries;
}
