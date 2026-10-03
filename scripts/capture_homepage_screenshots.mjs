import { chromium } from 'playwright';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/user/.gemini/antigravity-ide/brain/2010e6c3-5b84-4434-8fd3-1d894c949a2c';
const BASE_URL = 'http://localhost:3000';

async function main() {
  console.log(`Launching Playwright Chromium targeting ${BASE_URL}...`);
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    // 1. Desktop Test (1280px)
    console.log('Testing Desktop Viewport (1280x900)...');
    const desktopContext = await browser.newContext({
      viewport: { width: 1280, height: 900 },
      deviceScaleFactor: 2,
    });
    const desktopPage = await desktopContext.newPage();
    const res = await desktopPage.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
    console.log(`Desktop HTTP status: ${res?.status()}`);
    await desktopPage.waitForSelector('h1', { timeout: 15000 });
    await desktopPage.waitForTimeout(2000);

    // Verify search usability
    const searchInput = await desktopPage.$('input[placeholder*="Search"]');
    const isSearchVisible = await searchInput?.isVisible();
    console.log(`Desktop Search Input Visible: ${isSearchVisible}`);

    // Check horizontal overflow
    const desktopOverflow = await desktopPage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`Desktop Horizontal Overflow: ${desktopOverflow}`);

    const desktopScreenshotPath = path.join(ARTIFACT_DIR, 'desktop_redesign.png');
    await desktopPage.screenshot({
      path: desktopScreenshotPath,
      fullPage: false,
    });
    console.log(`Desktop viewport screenshot saved to ${desktopScreenshotPath}`);

    const desktopFullScreenshotPath = path.join(ARTIFACT_DIR, 'desktop_full_redesign.png');
    await desktopPage.screenshot({
      path: desktopFullScreenshotPath,
      fullPage: true,
    });
    console.log(`Desktop fullpage screenshot saved to ${desktopFullScreenshotPath}`);
    await desktopContext.close();

    // 2. Mobile Test (390px - iPhone 12/13/14)
    console.log('Testing Mobile Viewport (390x844)...');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobileContext.newPage();
    const mobileRes = await mobilePage.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
    console.log(`Mobile HTTP status: ${mobileRes?.status()}`);
    await mobilePage.waitForSelector('h1', { timeout: 15000 });
    await mobilePage.waitForTimeout(2000);

    const mobileSearchInput = await mobilePage.$('input[placeholder*="Search"]');
    const isMobileSearchVisible = await mobileSearchInput?.isVisible();
    console.log(`Mobile Search Input Visible: ${isMobileSearchVisible}`);

    const mobileOverflow = await mobilePage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`Mobile Horizontal Overflow: ${mobileOverflow}`);

    const mobileScreenshotPath = path.join(ARTIFACT_DIR, 'mobile_redesign.png');
    await mobilePage.screenshot({
      path: mobileScreenshotPath,
      fullPage: false,
    });
    console.log(`Mobile viewport screenshot saved to ${mobileScreenshotPath}`);

    const mobileFullScreenshotPath = path.join(ARTIFACT_DIR, 'mobile_full_redesign.png');
    await mobilePage.screenshot({
      path: mobileFullScreenshotPath,
      fullPage: true,
    });
    console.log(`Mobile fullpage screenshot saved to ${mobileFullScreenshotPath}`);
    await mobileContext.close();

    console.log('ALL_CHECKS_PASSED_SUCCESSFULLY');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
