import { columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function WorkflowsListPage() {
  const supabase = await createClient();
  const { data: workflows, error } = await supabase
    .from("workflows")
    .select("id, title, slug, status, updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error loading workflows:", error);
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Workflows</h1>
          <p className="text-slate-500">Manage step-by-step AI tool workflows.</p>
        </div>
        <Link href="/admin/cms/workflows/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Workflow
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={workflows || []} />
    </div>
  );
}
