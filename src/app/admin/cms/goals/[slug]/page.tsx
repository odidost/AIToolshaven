import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { GoalForm } from "./goal-form";

export default async function GoalEditorPage({
  params,
}: {
  params: { slug: string };
}) {
  const isNew = params.slug === "new";
  let goal = null;

  if (!isNew) {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("goals")
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (error || !data) {
      notFound();
    }
    goal = data;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto pb-24">
      <GoalForm initialData={goal} goalSlug={params.slug} />
    </div>
  );
}
