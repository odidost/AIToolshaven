import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { ToolForm } from "./tool-form";
import { workflows } from "@/lib/workflows";
import { goals } from "@/lib/goals";

export const metadata = {
  title: "Edit Tool - Editorial OS",
};

export default async function EditToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const supabase = await createClient();

  // Fetch the tool data (or null if it's a new tool)
  let toolData: any = null;
  if (slug !== "new") {
    try {
      const { data, error } = await supabase
        .from("tools")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error && data) {
        toolData = data;
      }
    } catch {}

    if (!toolData) {
      const { getToolBySlug } = await import("@/lib/data/tools-service");
      const local = await getToolBySlug(slug);
      if (!local) {
        notFound();
      }
      toolData = {
        ...local,
        category_id: local.category_id || local.category,
        price_model: local.priceModel,
        website_url: local.websiteUrl,
        logo_url: local.logoUrl,
        screenshot_url: local.screenshotUrl,
        image_url: local.imageUrl,
        use_cases: local.useCases,
      };
    }
    
    // Parse arrays that are stored as JSON strings
    const parseArray = (arr: any[]) => {
      if (!Array.isArray(arr)) return [];
      return arr.map(item => {
        if (typeof item === 'string' && item.trim().startsWith('{')) {
          try { return JSON.parse(item); } catch (e) {}
        }
        return item;
      });
    };
    
    if (toolData.pros) toolData.pros = parseArray(toolData.pros);
    if (toolData.cons) toolData.cons = parseArray(toolData.cons);
    if (toolData.use_cases) toolData.use_cases = parseArray(toolData.use_cases);
  }

  // Fetch all categories for the dropdown
  let categories: any[] = [];
  try {
    const { data: catData } = await supabase
      .from("categories")
      .select("id, name")
      .order("name");
    categories = catData || [];
  } catch {}
  if (categories.length === 0) {
    const { categories: localCats } = await import("@/lib/data/categories");
    categories = localCats.map(c => ({ id: c.id, name: c.name }));
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <ToolForm 
        initialData={toolData} 
        categories={categories || []} 
        allWorkflows={workflows}
        allGoals={goals}
      />
    </div>
  );
}
