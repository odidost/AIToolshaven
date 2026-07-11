import { CategoryRepository } from "@/lib/repositories";
import { CategoryEditor } from "@/components/cms/CategoryEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CategoryEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const document = await CategoryRepository.findById(resolvedParams.id);
  
  if (!document) {
    notFound();
  }

  return <CategoryEditor initialDocument={document} />;
}
