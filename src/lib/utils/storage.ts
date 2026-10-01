import { createAdminClient } from '@/lib/supabase/server';

export async function uploadAssetBuffer(
  buffer: Buffer,
  slug: string,
  type: 'logo' | 'screenshot',
  mimeType: string
): Promise<{ success: boolean; url?: string; filename?: string; error?: string }> {
  try {
    const isSvg = mimeType === 'image/svg+xml';
    const extension = isSvg ? 'svg' : 'webp';
    const suffix = type === 'logo' ? 'logo' : 'interface';
    const filename = `${slug}-${suffix}.${extension}`;
    const dirName = type === 'logo' ? 'logos' : 'screenshots';
    const path = `${dirName}/${filename}`;

    const supabase = await createAdminClient();

    const { data, error } = await supabase.storage
      .from('assets')
      .upload(path, buffer, {
        contentType: mimeType,
        upsert: true,
      });

    if (error) {
      throw error;
    }

    const { data: publicUrlData } = supabase.storage
      .from('assets')
      .getPublicUrl(path);

    // Append version timestamp so replaced assets bypass immutable browser/CDN caching
    const versionedUrl = `${publicUrlData.publicUrl}?v=${Date.now()}`;

    return {
      success: true,
      url: versionedUrl,
      filename,
    };
  } catch (error) {
    console.error('Error uploading asset:', error);
    return { 
      success: false, 
      error: 'Failed to upload asset: ' + (error instanceof Error ? error.message : String(error)) 
    };
  }
}
