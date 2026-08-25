import { NextRequest, NextResponse } from 'next/server';
import { uploadAssetBuffer } from '@/lib/utils/storage';
import { createAdminClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const slug = (formData.get('slug') as string)?.trim();
    const type = formData.get('type') as 'logo' | 'screenshot';

    if (!file || !slug || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadAssetBuffer(buffer, slug, type, file.type);

    if (!result.success || !result.url) {
      return NextResponse.json({ error: result.error || 'Failed to upload image' }, { status: 500 });
    }

    const uploadedUrl = result.url;

    // Immediately save & persist to Database and tools.json if slug is a real tool
    if (slug && slug !== 'unnamed') {
      try {
        const adminSupabase = await createAdminClient();
        const updateField = type === 'logo' ? { logo_url: uploadedUrl, updated_at: new Date().toISOString() } : { screenshot_url: uploadedUrl, updated_at: new Date().toISOString() };
        
        await adminSupabase
          .from('tools')
          .update(updateField)
          .eq('slug', slug);
      } catch (dbErr) {
        console.warn('Could not directly update Supabase row on asset upload:', dbErr);
      }

      try {
        const toolsPath = path.join(process.cwd(), 'data', 'tools.json');
        if (fs.existsSync(toolsPath)) {
          const toolsJson = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));
          const tool = toolsJson.find((t: any) => t.slug === slug || t.draftData?.slug === slug || t.publishedData?.slug === slug);
          if (tool) {
            if (type === 'logo') {
              tool.logoUrl = uploadedUrl;
              if (tool.draftData) tool.draftData.logoUrl = uploadedUrl;
              if (tool.publishedData) tool.publishedData.logoUrl = uploadedUrl;
            } else {
              tool.screenshotUrl = uploadedUrl;
              if (tool.draftData) tool.draftData.screenshotUrl = uploadedUrl;
              if (tool.publishedData) tool.publishedData.screenshotUrl = uploadedUrl;
            }
            fs.writeFileSync(toolsPath, JSON.stringify(toolsJson, null, 2), 'utf8');
          }
        }
      } catch (jsonErr) {
        console.warn('Could not directly update tools.json on asset upload:', jsonErr);
      }

      try {
        revalidatePath(`/admin/cms/tools/${slug}`);
        revalidatePath(`/tool/${slug}`);
        revalidatePath('/admin/assets');
        revalidatePath('/category/[slug]', 'page');
      } catch {}
    }

    return NextResponse.json({
      success: true,
      url: uploadedUrl,
      filename: result.filename,
    });
  } catch (error) {
    console.error('Error uploading asset:', error);
    return NextResponse.json({ error: 'Failed to upload asset: ' + (error instanceof Error ? error.message : String(error)) }, { status: 500 });
  }
}
