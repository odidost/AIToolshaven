import { NextRequest, NextResponse } from 'next/server';
import { uploadAssetBuffer } from '@/lib/utils/storage';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const slug = formData.get('slug') as string;
    const type = formData.get('type') as 'logo' | 'screenshot';

    if (!file || !slug || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadAssetBuffer(buffer, slug, type, file.type);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      url: result.url,
      filename: result.filename,
    });
  } catch (error) {
    console.error('Error uploading asset:', error);
    return NextResponse.json({ error: 'Failed to upload asset: ' + (error instanceof Error ? error.message : String(error)) }, { status: 500 });
  }
}
