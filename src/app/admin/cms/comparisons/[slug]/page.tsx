import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ComparisonForm } from "./comparison-form";

export default async function ComparisonEditorPage({
  params,
}: {
  params: { slug: string };
}) {
  const isNew = params.slug === "new";
  let comparison = null;

  if (!isNew) {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("comparisons")
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (error || !data) {
      notFound();
    }
    comparison = data;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto pb-24">
      <ComparisonForm initialData={comparison} comparisonSlug={params.slug} />
    </div>
  );
}
