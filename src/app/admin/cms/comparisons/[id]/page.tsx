import { ComparisonRepository } from "@/lib/repositories";
import { JsonEditor } from "@/components/cms/JsonEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ComparisonEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const document = await ComparisonRepository.findById(resolvedParams.id);
  
  if (!document) {
    notFound();
  }

  return (
    <JsonEditor 
      initialData={document}
      title={`Edit Comparison: ${document.id}`}
      apiEndpoint={`/api/cms/comparisons/${document.id}`}
      backUrl="/admin/cms/comparisons"
    />
  );
}
