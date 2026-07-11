import { NextResponse } from "next/server";
import { ToolRepository } from "@/lib/repositories";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const document = await ToolRepository.findDocumentById(resolvedParams.id);
    if (!document) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(document);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch document" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const body = await request.json();
    const { action, data } = body;

    if (action === "save_draft") {
      const doc = await ToolRepository.saveDraft(resolvedParams.id, data);
      return NextResponse.json(doc);
    } 
    
    if (action === "publish") {
      const doc = await ToolRepository.publish(resolvedParams.id, "editor_user");
      return NextResponse.json(doc);
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
