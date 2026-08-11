import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';

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

    // Determine extension from file type
    const isSvg = file.type === 'image/svg+xml';
    const extension = isSvg ? 'svg' : 'webp';
    const suffix = type === 'logo' ? 'logo' : 'interface';
    const filename = `${slug}-${suffix}.${extension}`;
    const dirName = type === 'logo' ? 'logos' : 'screenshots';
    const path = `${dirName}/${filename}`;

    const supabase = await createAdminClient();

    const { data, error } = await supabase.storage
      .from('assets')
      .upload(path, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (error) {
      throw error;
    }

    const { data: publicUrlData } = supabase.storage
      .from('assets')
      .getPublicUrl(path);

    return NextResponse.json({
      success: true,
      url: publicUrlData.publicUrl,
      filename,
    });
  } catch (error) {
    console.error('Error uploading asset:', error);
    return NextResponse.json({ error: 'Failed to upload asset: ' + (error instanceof Error ? error.message : String(error)) }, { status: 500 });
  }
}
