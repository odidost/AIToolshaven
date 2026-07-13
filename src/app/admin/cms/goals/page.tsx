import { columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function GoalsListPage() {
  const supabase = await createClient();
  const { data: goals, error } = await supabase
    .from("goals")
    .select("id, title, slug, status, updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error loading goals:", error);
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Goals</h1>
          <p className="text-slate-500">Manage user goals and outcomes.</p>
        </div>
        <Link href="/admin/cms/goals/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Goal
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={goals || []} />
    </div>
  );
}
