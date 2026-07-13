import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { ToolForm } from "./tool-form";

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
      />
    </div>
  );
}
