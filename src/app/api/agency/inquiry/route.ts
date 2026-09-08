import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { buildTypes, name, company, email, currentTools, projectDescription, budget, timeline } = body;

    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, description)" },
        { status: 400 }
      );
    }

    // In a production environment with RESEND_API_KEY, this can dispatch an email to aitoolshaven@gmail.com
    // or log to Supabase inquiries table.
    console.log("[Agency Inquiry Received]", {
      buildTypes,
      name,
      company,
      email,
      currentTools,
      projectDescription,
      budget,
      timeline,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Project brief successfully received by AI Tools Haven engineering team.",
    });
  } catch (error: any) {
    console.error("[Agency Inquiry Error]", error);
    return NextResponse.json(
      { error: "Internal server error processing brief" },
      { status: 500 }
    );
  }
}
