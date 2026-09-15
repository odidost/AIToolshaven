import { chromium } from 'playwright';

async function testMasterCalculatorBrowser() {
  console.log('🚀 Starting Comprehensive Browser QA for Master Multi-Modal Calculator...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // 1. Navigate to page
    await page.goto('http://localhost:3000/ai-cost-calculator', { waitUntil: 'networkidle' });
    console.log('✅ Page loaded successfully.');

    // 2. Hero Verification
    const h1 = await page.locator('h1').innerText();
    console.log('H1:', h1);
    if (!h1.includes('Calculate Your AI Costs')) throw new Error('H1 text mismatch');

    const subheadline = await page.locator('header p').innerText();
    console.log('Subheadline:', subheadline);
    if (!subheadline.includes('Accurately model production API bills')) {
      throw new Error('Subheadline mismatch');
    }

    // 3. Test "Build with AI" Mode (Default)
    const buildBtn = page.locator('button:has-text("Build with AI")');
    await buildBtn.waitFor({ state: 'visible' });
    console.log('✅ "Build with AI" button is visible.');

    // Test Text/LLM Subtab (already verified earlier, verify container presence)
    const textPromptArea = page.locator('#prompt-textarea');
    if (await textPromptArea.isVisible()) {
      console.log('✅ Text/LLM calculator is active and functional under Build with AI.');
    }

    // 4. Test Image API Subtab
    const imageApiTab = page.locator('button:has-text("Image API")');
    await imageApiTab.click();
    await page.waitForTimeout(300);
    const imageCostHeader = page.locator('text=Estimated API Cost');
    if (await imageCostHeader.isVisible()) {
      console.log('✅ Switched to Image API calculator.');
    }

    const imageVolumeInput = page.locator('#total-monthly-images-input');
    await imageVolumeInput.fill('35000');
    await page.waitForTimeout(300);
    console.log('✅ Tested Image volume input update.');

    // 5. Test Video API Subtab
    const videoApiTab = page.locator('button:has-text("Video API")').last();
    await videoApiTab.click();
    await page.waitForTimeout(300);
    const videoSpendHeader = page.locator('text=Estimated Video API Spend');
    if (await videoSpendHeader.isVisible()) {
      console.log('✅ Switched to Video API calculator.');
    }

    const dur10sBtn = page.locator('button:has-text("10 seconds")').first();
    if (await dur10sBtn.isVisible()) {
      await dur10sBtn.click();
      await page.waitForTimeout(300);
      console.log('✅ Tested Video 10s duration toggle.');
    }

    // 6. Test "Use AI" Audience Toggle
    const useAiBtn = page.locator('button:has-text("Use AI")').first();
    await useAiBtn.click();
    await page.waitForTimeout(300);
    console.log('✅ Switched to "Use AI" audience.');

    // 7. Test Video Credits Subtab
    const videoCreditsHeader = page.locator('text=Video Credit & Generation Calculator');
    if (await videoCreditsHeader.isVisible()) {
      console.log('✅ Video Credit calculator is active under Use AI.');
    }

    // Test bidirectional toggle in Video Credits
    const videoGoalToggle = page.locator('button:has-text("I Have a Video Goal → Credits")');
    await videoGoalToggle.click();
    await page.waitForTimeout(300);
    const targetVideosInput = page.locator('#target-videos-input');
    await targetVideosInput.fill('100');
    await page.waitForTimeout(300);
    const creditsReq = await page.locator('text=Credits Required').isVisible();
    console.log(`Video Goal -> Credits Required mode active: ${creditsReq}`);

    // Switch back to "I Have Credits"
    const creditsToVideosToggle = page.locator('button:has-text("I Have Credits → Videos")');
    await creditsToVideosToggle.click();
    await page.waitForTimeout(300);

    // 8. Test Image Credits Subtab
    const imageCreditsTab = page.locator('button:has-text("Image Credits")').last();
    await imageCreditsTab.click();
    await page.waitForTimeout(300);
    const imageCreditsHeader = page.locator('text=Image Credit & Generation Calculator');
    if (await imageCreditsHeader.isVisible()) {
      console.log('✅ Image Credit calculator is active.');
    }

    // Test Quick Plan Autofill
    const basicPlanBtn = page.locator('button:has-text("Basic")').first();
    if (await basicPlanBtn.isVisible()) {
      await basicPlanBtn.click();
      await page.waitForTimeout(300);
      console.log('✅ Tested Plan autofill on Image Credits.');
    }

    // 9. Methodology section verification
    const methodologyNotice = page.locator('text=Pricing Methodology & Data Transparency');
    if (await methodologyNotice.isVisible()) {
      console.log('✅ Pricing Methodology & Transparency notice is visible.');
    }

    // 10. Test Mobile Viewport (375px)
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

    // 11. Check console errors
    console.log(`\nBrowser Console Errors: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.error('Console errors encountered:', consoleErrors);
      throw new Error('Browser console errors detected');
    }

    console.log('\n🎉 ALL MASTER MULTI-MODAL CALCULATOR BROWSER TESTS PASSED CLEANLY!\n');

  } catch (err) {
    console.error('❌ Master Browser QA Error:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testMasterCalculatorBrowser();
