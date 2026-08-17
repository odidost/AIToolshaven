import { Page } from 'playwright';

export async function captureScreenshot(page: Page, url: string): Promise<Buffer | null> {
  try {
    // Hide cookie banners, overlays, and common popups before screenshotting
    await page.evaluate(() => {
      const selectors = [
        '#cookie-banner', '.cookie-banner', '.cookie-notice', '#onetrust-consent-sdk',
        '.cc-window', '.fc-consent-root', '[id*="cookie"]', '[class*="cookie"]',
        '[class*="popup"]', '[id*="popup"]', '.intercom-lightweight-app'
      ];
      selectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            if (el instanceof HTMLElement) el.style.display = 'none';
          });
        } catch (e) {}
      });
    });

    // Capture a high-quality screenshot
    // Target approximately 1440x900 as requested
    const buffer = await page.screenshot({ 
      type: 'jpeg', 
      quality: 80,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 900 } 
    });

    return buffer;
  } catch (err) {
    console.error(`Error capturing screenshot for ${url}:`, err);
    return null;
  }
}
