import { columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ComparisonsListPage() {
  const supabase = await createClient();
  const { data: comparisons, error } = await supabase
    .from("comparisons")
    .select("id, title, slug, status, updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error loading comparisons:", error);
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Comparisons</h1>
          <p className="text-slate-500">Manage tool head-to-head comparisons.</p>
        </div>
        <Link href="/admin/cms/comparisons/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Comparison
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={comparisons || []} />
    </div>
  );
}
