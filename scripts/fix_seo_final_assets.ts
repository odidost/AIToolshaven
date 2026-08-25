import * as fs from 'fs';
import * as path from 'path';
import { chromium } from 'playwright';
import { createClient } from '@supabase/supabase-js';

function loadEnv() {
  const envPath = path.resolve('.env.local');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...valParts] = trimmed.split('=');
        const val = valParts.join('=').replace(/^["']|["']$/g, '');
        process.env[key.trim()] = val;
      }
    }
  }
}
loadEnv();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const APPROVED_20_SLUGS = [
  'surfer',
  'frase',
  'semrush-ai',
  'ahrefs-ai',
  'clearscope',
  'neuronwriter',
  'marketmuse',
  'scalenut',
  'rankiq',
  'se-ranking-copilot',
  'pageoptimizer-pro',
  'alli-ai',
  'outranking',
  'letterdrop',
  'rankmath-ai',
  'inlinks',
  'lowfruits',
  'seowind',
  'wordlift',
  'koala-sh'
];

async function uploadToStorage(buffer: Buffer, storagePath: string, contentType: string): Promise<string> {
  const { error } = await supabase.storage.from('assets').upload(storagePath, buffer, {
    contentType,
    upsert: true
  });
  if (error) {
    console.error(`  Failed upload to storage (${storagePath}):`, error.message);
  }
  const { data } = supabase.storage.from('assets').getPublicUrl(storagePath);
  return data.publicUrl;
}

async function fixFinalAssets() {
  console.log('=== FIXING SEO ASSETS & FOREIGN KEYS ===\n');

  const toolsJsonPath = path.resolve('data/tools.json');
  const allTools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });

  // 1. Capture real Surfer SEO assets
  console.log('📸 Capturing real Surfer SEO assets...');
  const surferPage = await context.newPage();
  try {
    await surferPage.goto('https://surferseo.com', { waitUntil: 'domcontentloaded', timeout: 25000 });
    await surferPage.waitForTimeout(3000);
    const shotBuffer = await surferPage.screenshot({ type: 'jpeg', quality: 85 });
    const shotUrl = await uploadToStorage(shotBuffer, 'screenshots/surfer-interface.jpg', 'image/jpeg');

    // Download logo from Google Favicon 256
    const gUrl = 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://surferseo.com&size=256';
    const logoRes = await fetch(gUrl);
    const logoArr = await logoRes.arrayBuffer();
    const logoUrl = await uploadToStorage(Buffer.from(logoArr), 'logos/surfer-logo.png', 'image/png');

    const surferTool = allTools.find(t => t.slug === 'surfer');
    if (surferTool) {
      surferTool.logoUrl = logoUrl;
      surferTool.screenshotUrl = shotUrl;
      surferTool.imageUrl = logoUrl;
    }
    console.log(`  ✓ Surfer SEO Logo: ${logoUrl}`);
    console.log(`  ✓ Surfer SEO Screenshot: ${shotUrl}`);
  } catch (e: any) {
    console.error('  Error fixing Surfer SEO:', e.message);
  } finally {
    await surferPage.close();
  }

  // 2. Capture real RankMath screenshot
  console.log('\n📸 Capturing real RankMath screenshot...');
  const rmPage = await context.newPage();
  try {
    await rmPage.goto('https://rankmath.com', { waitUntil: 'domcontentloaded', timeout: 25000 });
    await rmPage.waitForTimeout(3000);
    const rmShotBuffer = await rmPage.screenshot({ type: 'jpeg', quality: 85 });
    const rmShotUrl = await uploadToStorage(rmShotBuffer, 'screenshots/rankmath-ai-interface.jpg', 'image/jpeg');

    const rmTool = allTools.find(t => t.slug === 'rankmath-ai');
    if (rmTool) {
      rmTool.screenshotUrl = rmShotUrl;
    }
    console.log(`  ✓ RankMath Screenshot: ${rmShotUrl}`);
  } catch (e: any) {
    console.error('  Error fixing RankMath:', e.message);
  } finally {
    await rmPage.close();
  }

  await browser.close();

  // 3. Update all 20 SEO tools in Supabase with category_id = 'ai-seo-tools'
  console.log('\n💾 Updating all 20 SEO tools in Supabase...');
  for (const slug of APPROVED_20_SLUGS) {
    const tool = allTools.find(t => t.slug === slug);
    if (!tool) continue;

    tool.category = 'ai-seo-tools';
    const dbRecord: any = {
      category_id: 'ai-seo-tools',
      logo_url: tool.logoUrl,
      image_url: tool.imageUrl || tool.logoUrl,
      screenshot_url: tool.screenshotUrl,
      updated_at: new Date().toISOString()
    };
    if (slug === 'se-ranking-copilot') {
      dbRecord.name = 'SE Ranking';
      tool.name = 'SE Ranking';
    }

    const { error } = await supabase.from('tools').update(dbRecord).eq('slug', slug);
    if (error) {
      console.error(`  Error updating ${slug} in Supabase:`, error.message);
    } else {
      console.log(`  ✓ Updated ${tool.name} (${slug}) in Supabase.`);
    }
  }

  fs.writeFileSync(toolsJsonPath, JSON.stringify(allTools, null, 2), 'utf8');
  console.log('\n✓ Saved data/tools.json!');
}

fixFinalAssets().catch(console.error);
