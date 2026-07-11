import { NextResponse } from "next/server";
import { ToolRepository } from "@/lib/repositories";

export async function GET() {
  try {
    const documents = await ToolRepository.findAllDocuments();
    return NextResponse.json(documents);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 });
  }
}
