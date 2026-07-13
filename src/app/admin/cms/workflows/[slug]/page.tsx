import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { WorkflowForm } from "./workflow-form";

export default async function WorkflowEditorPage({
  params,
}: {
  params: { slug: string };
}) {
  const isNew = params.slug === "new";
  let workflow = null;

  if (!isNew) {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("workflows")
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (error || !data) {
      notFound();
    }
    workflow = data;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto pb-24">
      <WorkflowForm initialData={workflow} workflowSlug={params.slug} />
    </div>
  );
}
