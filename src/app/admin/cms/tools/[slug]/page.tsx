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
  let toolData = null;
  if (slug !== "new") {
    const { data, error } = await supabase
      .from("tools")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      notFound();
    }
    toolData = data;
    
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
  const { data: categories } = await supabase
    .from("categories")
    .select("id, name")
    .order("name");

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
