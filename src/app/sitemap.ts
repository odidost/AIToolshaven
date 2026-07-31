import { MetadataRoute } from "next";
import { getAllTools } from "@/lib/queries/tools";
import { getAllCategories } from "@/lib/queries/categories";
import { comparisons } from "@/lib/comparisons";
import { siteConfig } from "@/lib/config/site";
import { goals } from "@/lib/goals";
import { workflows } from "@/lib/workflows";
import { articles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const isLocalhost = siteConfig.baseUrl?.includes("localhost");
  const BASE_URL = isLocalhost ? "https://aitoolshaven.com" : (siteConfig.baseUrl || "https://aitoolshaven.com");
  
  // Ensure no trailing slash for clean appending
  const cleanBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

  const tools = await getAllTools(false);
  const categories = await getAllCategories();

  // Validate tools
  const validTools = tools.filter(t => t.slug && (!t.status || t.status === "Published"));
  
  // Calculate max lastUpdated across all tools for static pages fallback
  const allDates = validTools
    .map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0)
    .filter(d => d > 0);
  
  const siteMaxDateStr = allDates.length > 0 
    ? new Date(Math.max(...allDates)).toISOString() 
    : undefined;

  // 1. Static Core & Index Pages
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/categories",
    "/compare-tools",
    "/goals",
    "/workflows",
    "/blog",
    "/latest-ai-tools",
    "/popular-ai-tools",
    "/trending-ai-tools"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${cleanBase}${route}`,
    ...(siteMaxDateStr && { lastModified: siteMaxDateStr }),
  }));

  // 2. Tools
  const toolEntries: MetadataRoute.Sitemap = validTools.map(tool => ({
    url: `${cleanBase}/tool/${tool.slug}`,
    ...(tool.lastUpdated && { lastModified: new Date(tool.lastUpdated).toISOString() }),
  }));

  // 3. Categories
  const categoryEntries: MetadataRoute.Sitemap = categories.map(cat => {
    const catTools = validTools.filter(t => t.category === cat.id || t.category === cat.slug);
    const catDates = catTools.map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0).filter(d => d > 0);
    const maxDate = catDates.length > 0 ? new Date(Math.max(...catDates)).toISOString() : undefined;
    
    return {
      url: `${cleanBase}/category/${cat.slug}`,
      ...(maxDate && { lastModified: maxDate }),
    };
  });

  // 4. Goals
  const goalEntries: MetadataRoute.Sitemap = goals.map(goal => {
    const goalTools = validTools.filter(t => t.goals?.includes(goal.slug) || t.goals?.includes(goal.title));
    const goalDates = goalTools.map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0).filter(d => d > 0);
    const maxDate = goalDates.length > 0 ? new Date(Math.max(...goalDates)).toISOString() : undefined;
    
    return {
      url: `${cleanBase}/goals/${goal.slug}`,
      ...(maxDate && { lastModified: maxDate }),
    };
  });

  // 5. Workflows
  const workflowEntries: MetadataRoute.Sitemap = workflows.map(workflow => {
    const wfTools = validTools.filter(t => t.workflows?.includes(workflow.slug));
    const wfDates = wfTools.map(t => t.lastUpdated ? new Date(t.lastUpdated).getTime() : 0).filter(d => d > 0);
    const maxDate = wfDates.length > 0 ? new Date(Math.max(...wfDates)).toISOString() : undefined;
    
    return {
      url: `${cleanBase}/workflows/${workflow.slug}`,
      ...(maxDate && { lastModified: maxDate }),
    };
  });

  // 6. Comparisons
  const compareEntries: MetadataRoute.Sitemap = comparisons.map(c => {
    const tool1 = validTools.find(t => t.name === c.tool1.name);
    const tool2 = validTools.find(t => t.name === c.tool2.name);
    
    const d1 = tool1?.lastUpdated ? new Date(tool1.lastUpdated).getTime() : 0;
    const d2 = tool2?.lastUpdated ? new Date(tool2.lastUpdated).getTime() : 0;
    
    const maxDateNum = Math.max(d1, d2);
    const maxDate = maxDateNum > 0 ? new Date(maxDateNum).toISOString() : undefined;
    
    return {
      url: `${cleanBase}/compare-tools/${c.slug}`,
      ...(maxDate && { lastModified: maxDate }),
    };
  });

  // 7. Articles
  const articleEntries: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${cleanBase}/blog/${article.slug}`,
    ...(article.date && { lastModified: new Date(article.date).toISOString() }),
  }));

  // Combine all entries
  const allEntries = [
    ...staticEntries,
    ...categoryEntries,
    ...toolEntries,
    ...goalEntries,
    ...workflowEntries,
    ...compareEntries,
    ...articleEntries,
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
