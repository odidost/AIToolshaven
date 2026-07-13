import { columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "AI Tools CMS - Editorial OS",
};

export default async function ToolsPage() {
  const supabase = await createClient();
  
  // Fetch tools with category join and explicit fallback handling
  const { data, error } = await supabase
    .from("tools")
    .select(`
      id,
      name,
      slug,
      status,
      price_model,
      updated_at,
      categories (
        name
      )
    `)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error fetching tools for CMS:", error);
  }

  // Format the data for the data table
  const formattedData = (data || []).map((tool: any) => ({
    id: tool.id,
    name: tool.name,
    slug: tool.slug,
    category: tool.categories?.name || "Uncategorized",
    status: tool.status || "Draft",
    priceModel: tool.price_model || "Free",
    updatedAt: tool.updated_at,
  }));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Tools</h2>
          <p className="text-muted-foreground">
            Manage AI tools, their details, features, and pricing.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/admin/cms/tools/new">
              <Plus className="mr-2 h-4 w-4" /> Add Tool
            </Link>
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
