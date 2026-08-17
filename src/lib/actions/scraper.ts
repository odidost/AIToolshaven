"use server";

import { processToolAssets } from '@/lib/scraper/processToolAssets';
import { createAdminClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function scrapeToolAssetsAction(
  url: string,
  slug: string,
  options: {
    existingLogoUrl?: string | null;
    existingScreenshotUrl?: string | null;
    forceLogoRefresh?: boolean;
    forceScreenshotRefresh?: boolean;
    toolId?: string; // If provided, update the tool in DB
  }
) {
  if (!url || !slug) {
    return { success: false, error: 'URL and Slug are required for scraping.' };
  }

  try {
    const result = await processToolAssets(url, slug, options);
    
    // If we have a toolId and we found new assets, update the tool in Supabase
    if (options.toolId && (result.logoUrl !== options.existingLogoUrl || result.screenshotUrl !== options.existingScreenshotUrl)) {
      const adminSupabase = await createAdminClient();
      
      const updateData: any = {};
      if (result.logoUrl && result.logoUrl !== options.existingLogoUrl) {
        updateData.logo_url = result.logoUrl;
      }
      if (result.screenshotUrl && result.screenshotUrl !== options.existingScreenshotUrl) {
        updateData.screenshot_url = result.screenshotUrl;
      }

      if (Object.keys(updateData).length > 0) {
        await adminSupabase
          .from("tools")
          .update(updateData)
          .eq("id", options.toolId);
          
        revalidatePath(`/admin/cms/tools/${slug}`);
      }
    }

    return { success: true, result };
  } catch (error) {
    console.error('Error in scrapeToolAssetsAction:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}
