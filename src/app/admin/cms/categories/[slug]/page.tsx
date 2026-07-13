import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { CategoryForm } from "./category-form";

export default async function CategoryEditorPage({
  params,
}: {
  params: { slug: string };
}) {
  const isNew = params.slug === "new";
  let category = null;

  if (!isNew) {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (error || !data) {
      notFound();
    }
    category = data;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto pb-24">
      <CategoryForm initialData={category} categorySlug={params.slug} />
    </div>
  );
}
