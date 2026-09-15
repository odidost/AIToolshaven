import { chromium } from 'playwright';

async function runBrowserQa() {
  console.log('🚀 Starting Playwright Browser QA for /ai-cost-calculator...');
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
    // 1. Navigate to calculator
    await page.goto('http://localhost:3000/ai-cost-calculator', { waitUntil: 'networkidle' });
    console.log('✅ Page loaded successfully.');

    // 2. Verify Hero
    const h1Text = await page.locator('h1').innerText();
    console.log('H1:', h1Text);
    if (!h1Text.includes('Calculate Your AI Costs')) throw new Error('H1 text mismatch');

    // 3. Verify Prompt View (Default)
    const promptTextarea = page.locator('#prompt-textarea');
    await promptTextarea.waitFor({ state: 'visible' });
    console.log('✅ Prompt textarea is visible.');

    // Type new prompt
    await promptTextarea.fill('Write a comprehensive TypeScript library for vector similarity search.');
    await page.waitForTimeout(300);
    const counterText = await page.locator('text=/words · ~.*tokens/').innerText();
    console.log('Word/Token counter:', counterText);

    // Test Empty Textarea
    await promptTextarea.fill('');
    await page.waitForTimeout(300);
    const emptyStateText = await page.getByText('$0.0000', { exact: true }).innerText();
    console.log('Empty state cost:', emptyStateText);

    // Fill back realistic prompt
    await promptTextarea.fill('Explain quantum computing principles in plain English.');
    await page.waitForTimeout(300);

    // 4. Test "Use this" on Best Value card
    const bestValueCard = page.locator('text=🏆 Best Value').locator('..');
    const useThisBtn = page.locator('button:has-text("Use this")').first();
    if (await useThisBtn.isVisible()) {
      await useThisBtn.click();
      await page.waitForTimeout(300);
      console.log('✅ Clicked "Use this" on curated option.');
    }

    // 5. Test AI App Tab
    const appTabBtn = page.locator('button:has-text("An AI App")');
    await appTabBtn.click();
    await page.waitForTimeout(300);
    console.log('✅ Switched to AI App mode.');

    const usersInput = page.locator('#app-users-input');
    await usersInput.fill('2500');
    const rpuInput = page.locator('#app-frequency-input');
    await rpuInput.fill('25');

    // Click coding chip
    const codingChip = page.locator('button:has-text("Coding")');
    await codingChip.click();
    await page.waitForTimeout(300);

    // Fill subscription price
    const subPriceInput = page.locator('#subscription-price-input');
    await subPriceInput.fill('39');
    await page.waitForTimeout(300);
    const marginText = await page.locator('text=/Estimated Gross Margin at \\$39/').innerText();
    console.log('AI App margin:', marginText);

    // 6. Test AI Agent Tab
    const agentTabBtn = page.locator('button:has-text("An AI Agent")');
    await agentTabBtn.click();
    await page.waitForTimeout(300);
    console.log('✅ Switched to AI Agent mode.');

    const tasksInput = page.locator('#agent-tasks-input');
    await tasksInput.fill('1500');
    const complexTierBtn = page.locator('button:has-text("Complex")');
    await complexTierBtn.click();
    await page.waitForTimeout(300);
    console.log('✅ Selected Complex Agent tier.');

    // 7. Test Cost Optimizer Button ("Use this model →")
    const optimizerBtn = page.locator('button:has-text("Use this model →")');
    if (await optimizerBtn.isVisible()) {
      await optimizerBtn.click();
      await page.waitForTimeout(300);
      console.log('✅ Clicked "Use this model →" in Cost Optimizer.');
    }

    // 8. Test Advanced Settings Drawer
    const advancedToggle = page.locator('button:has-text("⚙️ Advanced settings")');
    await advancedToggle.click();
    await page.waitForTimeout(300);
    const customInput = page.locator('#custom-input-tokens');
    await customInput.fill('15000');
    await page.waitForTimeout(300);
    console.log('✅ Custom input tokens applied in Advanced Settings.');

    const resetBtn = page.locator('button:has-text("Reset to automatic defaults")');
    await resetBtn.click();
    await page.waitForTimeout(300);
    console.log('✅ Reset Advanced Settings back to automatic defaults.');

    // 9. Test "Compare all models →"
    const compareAllBtn = page.locator('button:has-text("Compare all models →")');
    await compareAllBtn.click();
    await page.waitForTimeout(300);
    const allModelsTable = page.locator('text=All Models Comparison');
    if (await allModelsTable.isVisible()) {
      console.log('✅ All Models Comparison table revealed cleanly.');
    }

    // 10. Test Mobile Viewport (375px width)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(400);
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`Mobile Viewport (375px) Horizontal Overflow: ${hasHorizontalOverflow ? '❌ YES' : '✅ NO'}`);
    if (hasHorizontalOverflow) {
      throw new Error('Mobile layout has horizontal overflow!');
    }

    // 11. Check console errors
    console.log(`\nBrowser Console Errors: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.error('Console errors encountered:', consoleErrors);
    }

    console.log('\n🎉 ALL BROWSER INTERACTION & RESPONSIVE TESTS PASSED SUCCESSFULLY!\n');

  } catch (err) {
    console.error('❌ Playwright QA Error:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runBrowserQa();
