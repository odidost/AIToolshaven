import { ToolRepository } from "@/lib/repositories";
import { ToolEditor } from "@/components/cms/ToolEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ToolEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const document = await ToolRepository.findDocumentById(resolvedParams.id);
  
  if (!document) {
    notFound();
  }

  return <ToolEditor initialDocument={document} />;
}
