import { NextResponse } from "next/server";
import { WorkflowRepository } from "@/lib/repositories";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const document = await WorkflowRepository.findById(resolvedParams.id);
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
    const doc = await WorkflowRepository.save(resolvedParams.id, body);
    return NextResponse.json(doc);
  } catch (error: unknown) {
    return NextResponse.json({ error: (error instanceof Error ? error.message : String(error)) }, { status: 500 });
  }
}
