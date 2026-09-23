import { chromium } from 'playwright';

async function testAdvertisePage() {
  console.log('🚀 Starting Automated Browser QA for Upgraded Advertise Page...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // 1. Navigate to /advertise
    await page.goto('http://localhost:3000/advertise', { waitUntil: 'networkidle' });
    console.log('✅ Page loaded successfully.');

    // 2. Hero & Ticker
    const h1 = await page.locator('h1').innerText();
    console.log('H1:', h1);
    if (!h1.includes('Advertise on')) throw new Error('H1 mismatch');

    const ticker = await page.locator('text=2026 LIVE MEDIA KIT').isVisible();
    console.log('Live Ticker Badge visible:', ticker);
    if (!ticker) throw new Error('Ticker badge not visible');

    // 3. Metrics HUD
    const buyersMetric = await page.locator('text=50,000+').first().isVisible();
    console.log('50,000+ Buyers Metric visible:', buyersMetric);
    if (!buyersMetric) throw new Error('Buyers metric not visible');

    // 4. Interactive Campaign Builder
    const builder = page.locator('#campaign-builder');
    await builder.waitFor({ state: 'visible' });
    console.log('✅ Interactive Campaign Builder is visible.');

    // Test tab switching: SEO -> Brand Sponsorships
    const brandTab = page.locator('button:has-text("Brand Sponsorships")');
    await brandTab.click();
    await page.waitForTimeout(300);
    console.log('✅ Switched to Brand Sponsorships tab.');

    // Test duration button: 3 Months (Save 15%)
    const dur3mBtn = page.locator('button:has-text("3 Months (Save 15%)")');
    if (await dur3mBtn.isVisible()) {
      await dur3mBtn.click();
      await page.waitForTimeout(300);
      console.log('✅ Clicked 3 Months duration toggle.');
    }

    // Test tab switching: Brand Sponsorships -> Founder Bundles
    const bundlesTab = page.locator('button:has-text("Founder Bundles")');
    await bundlesTab.click();
    await page.waitForTimeout(300);
    console.log('✅ Switched to Founder Bundles tab.');

    // Verify bundle card selection
    const dominanceBundle = page.locator('button:has-text("Category Dominance Package")');
    if (await dominanceBundle.isVisible()) {
      await dominanceBundle.click();
      await page.waitForTimeout(300);
      console.log('✅ Selected Category Dominance Package.');
    }

    // Test Copy Campaign Brief button
    const copyBriefBtn = page.locator('button:has-text("Copy Campaign Brief")');
    if (await copyBriefBtn.isVisible()) {
      await copyBriefBtn.click();
      await page.waitForTimeout(300);
      const briefCopied = await page.locator('text=Brief Copied!').isVisible();
      console.log('Copy Brief feedback active:', briefCopied);
    }

    // 5. Test Mobile Viewport (375px)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(400);

    const { scrollWidth, innerWidth } = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });
    const hasHorizontalOverflow = scrollWidth > innerWidth;
    console.log(`Mobile Viewport (375px) - scrollWidth: ${scrollWidth}, innerWidth: ${innerWidth} -> Overflow: ${hasHorizontalOverflow ? '❌ YES' : '✅ NO'}`);
    if (hasHorizontalOverflow) {
      throw new Error(`Mobile layout has horizontal overflow! scrollWidth (${scrollWidth}) > innerWidth (${innerWidth})`);
    }

    // 6. Check console errors
    console.log(`\nBrowser Console Errors: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.error('Console errors encountered:', consoleErrors);
      throw new Error('Browser console errors detected');
    }

    console.log('\n🎉 ALL ADVERTISE PAGE BROWSER TESTS PASSED CLEANLY!\n');
  } catch (err) {
    console.error('❌ Advertise Browser QA Error:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testAdvertisePage();
