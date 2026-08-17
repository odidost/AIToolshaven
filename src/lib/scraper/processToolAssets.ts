import { chromium } from 'playwright';
import { extractLogo, extractLogoDirect } from './extractLogo';
import { captureScreenshot } from './captureScreenshot';
import { uploadAssetBuffer } from '../utils/storage';

export interface ScrapeResult {
  logoUrl?: string;
  screenshotUrl?: string;
  status: {
    logo: '✓ Automatically found' | '⚠ Manual upload required' | '✓ Existed (Skipped)';
    screenshot: '✓ Automatically found' | '⚠ Manual upload required' | '✓ Existed (Skipped)';
    error?: string;
  };
}

export async function processToolAssets(
  url: string,
  slug: string,
  options: {
    existingLogoUrl?: string | null;
    existingScreenshotUrl?: string | null;
    forceLogoRefresh?: boolean;
    forceScreenshotRefresh?: boolean;
  } = {}
): Promise<ScrapeResult> {
  const result: ScrapeResult = {
    logoUrl: options.existingLogoUrl || undefined,
    screenshotUrl: options.existingScreenshotUrl || undefined,
    status: {
      logo: options.existingLogoUrl && !options.forceLogoRefresh ? '✓ Existed (Skipped)' : '⚠ Manual upload required',
      screenshot: options.existingScreenshotUrl && !options.forceScreenshotRefresh ? '✓ Existed (Skipped)' : '⚠ Manual upload required'
    }
  };

  let needsLogo = !options.existingLogoUrl || options.forceLogoRefresh;
  let needsScreenshot = !options.existingScreenshotUrl || options.forceScreenshotRefresh;

  if (!needsLogo && !needsScreenshot) {
    return result;
  }

    let directLogoData = null;
    let browser;
    try {
      if (needsLogo) {
        directLogoData = await extractLogoDirect(url);
        if (directLogoData) {
          const uploadRes = await uploadAssetBuffer(directLogoData.buffer, slug, 'logo', directLogoData.mimeType);
          if (uploadRes.success && uploadRes.url) {
            result.logoUrl = uploadRes.url;
            result.status.logo = '✓ Automatically found';
            needsLogo = false; // Successfully found, no need to fallback
          }
        }
      }

      if (!needsLogo && !needsScreenshot) {
        return result;
      }

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    // Set a timeout of 30 seconds for navigation
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {
      // Ignore networkidle timeout, we'll try to process whatever loaded
    });

    if (needsLogo) {
      const logoData = await extractLogo(page, url);
      if (logoData) {
        const uploadRes = await uploadAssetBuffer(logoData.buffer, slug, 'logo', logoData.mimeType);
        if (uploadRes.success && uploadRes.url) {
          result.logoUrl = uploadRes.url;
          result.status.logo = '✓ Automatically found';
        }
      }
    }

    if (needsScreenshot) {
      const screenshotBuffer = await captureScreenshot(page, url);
      if (screenshotBuffer) {
        const uploadRes = await uploadAssetBuffer(screenshotBuffer, slug, 'screenshot', 'image/jpeg');
        if (uploadRes.success && uploadRes.url) {
          result.screenshotUrl = uploadRes.url;
          result.status.screenshot = '✓ Automatically found';
        }
      }
    }
  } catch (err) {
    console.error(`Asset processing failed for ${url}:`, err);
    result.status.error = err instanceof Error ? err.message : String(err);
  } finally {
    if (browser) await browser.close();
  }

  return result;
}
