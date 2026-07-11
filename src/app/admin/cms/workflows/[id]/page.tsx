import { WorkflowRepository } from "@/lib/repositories";
import { JsonEditor } from "@/components/cms/JsonEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function WorkflowEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const document = await WorkflowRepository.findById(resolvedParams.id);
  
  if (!document) {
    notFound();
  }

  return (
    <JsonEditor 
      initialData={document}
      title={`Edit Workflow: ${document.title}`}
      apiEndpoint={`/api/cms/workflows/${document.id}`}
      backUrl="/admin/cms/workflows"
    />
  );
}
