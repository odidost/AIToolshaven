import { GoalRepository } from "@/lib/repositories";
import { JsonEditor } from "@/components/cms/JsonEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function GoalEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const document = await GoalRepository.findById(resolvedParams.id);
  
  if (!document) {
    notFound();
  }

  return (
    <JsonEditor 
      initialData={document}
      title={`Edit Persona Goals: ${document.name}`}
      apiEndpoint={`/api/cms/goals/${document.id}`}
      backUrl="/admin/cms/goals"
    />
  );
}
