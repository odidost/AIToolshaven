import * as fs from 'fs';
import * as path from 'path';
import { chromium } from 'playwright';
import { createClient } from '@supabase/supabase-js';

// Parse .env.local
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

const LOGO_FALLBACKS: Record<string, string> = {
  'rankmath-ai': 'https://rankmath.com/wp-content/uploads/2019/04/cropped-favicon-192x192.png',
  'se-ranking-copilot': 'https://seranking.com/favicon.ico',
  'semrush-ai': 'https://www.semrush.com/favicon.ico',
  'ahrefs-ai': 'https://ahrefs.com/favicon.ico',
  'clearscope': 'https://www.clearscope.io/favicon.ico'
};

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

async function run() {
  console.log('=== STARTING AI SEO TOOLS ASSET & CLEANUP PIPELINE ===\n');

  const toolsJsonPath = path.resolve('data/tools.json');
  const allTools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

  // 1. Find all tools currently tagged with SEO
  const allSeoTools = allTools.filter(t => 
    t.category === 'cat-seo' || 
    t.category === 'ai-seo-tools' ||
    t.category === 'SEO' ||
    (t.additionalCategories && (t.additionalCategories.includes('cat-seo') || t.additionalCategories.includes('ai-seo-tools')))
  );

  console.log(`Found ${allSeoTools.length} total SEO tools in dataset.`);

  // 2. Identify tools to permanently delete
  const toolsToDelete = allSeoTools.filter(t => !APPROVED_20_SLUGS.includes(t.slug));
  console.log(`\n🗑️ Tools marked for permanent deletion (${toolsToDelete.length}):`);
  toolsToDelete.forEach((t, i) => console.log(`  ${i + 1}. [${t.name}] (${t.slug})`));

  const idsToDelete = toolsToDelete.map(t => t.id).filter(Boolean);
  const slugsToDelete = toolsToDelete.map(t => t.slug).filter(Boolean);

  // Delete from Supabase DB
  if (idsToDelete.length > 0) {
    const { error: errId } = await supabase.from('tools').delete().in('id', idsToDelete);
    if (errId) console.error('  Error deleting by IDs from Supabase:', errId.message);
    else console.log(`  ✓ Deleted ${idsToDelete.length} records by ID from Supabase.`);
  }
  if (slugsToDelete.length > 0) {
    const { error: errSlug } = await supabase.from('tools').delete().in('slug', slugsToDelete);
    if (errSlug) console.error('  Error deleting by slugs from Supabase:', errSlug.message);
    else console.log(`  ✓ Deleted matching records by slug from Supabase.`);
  }

  // Delete assets for removed tools from Supabase Storage
  const { data: logoFiles } = await supabase.storage.from('assets').list('logos', { limit: 1000 });
  const { data: shotFiles } = await supabase.storage.from('assets').list('screenshots', { limit: 1000 });
  const storagePathsToRemove: string[] = [];

  for (const slug of slugsToDelete) {
    if (logoFiles) {
      const matches = logoFiles.filter(f => f.name.startsWith(slug + '-'));
      matches.forEach(m => storagePathsToRemove.push(`logos/${m.name}`));
    }
    if (shotFiles) {
      const matches = shotFiles.filter(f => f.name.startsWith(slug + '-'));
      matches.forEach(m => storagePathsToRemove.push(`screenshots/${m.name}`));
    }
  }

  if (storagePathsToRemove.length > 0) {
    const { error: remErr } = await supabase.storage.from('assets').remove(storagePathsToRemove);
    if (remErr) console.error('  Error removing storage assets:', remErr.message);
    else console.log(`  ✓ Successfully removed ${storagePathsToRemove.length} storage files.`);
  }

  // Update local tools.json by removing deleted tools
  let currentTools = allTools.filter(t => !idsToDelete.includes(t.id) && !slugsToDelete.includes(t.slug));

  // 3. Process Logos and Screenshots for the 20 approved tools
  console.log('\n📸 Launching Playwright to scrape authentic logos and capture screenshots...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });

  for (const slug of APPROVED_20_SLUGS) {
    const tool = currentTools.find(t => t.slug === slug);
    if (!tool) continue;

    console.log(`\n--------------------------------------------------`);
    console.log(`Processing: [${tool.name}] (${slug}) -> ${tool.websiteUrl || tool.url}`);

    const websiteUrl = tool.websiteUrl || tool.url;
    let newLogoUrl = tool.logoUrl;
    let newScreenshotUrl = tool.screenshotUrl;

    const needsLogo = !tool.logoUrl || tool.logoUrl.includes('placeholder');
    const needsScreenshot = !tool.screenshotUrl || (tool.screenshotUrl.includes('https://') && tool.screenshotUrl.split('https://').length > 2);

    const page = await context.newPage();

    try {
      if (needsScreenshot || needsLogo) {
        console.log(`  Navigating to ${websiteUrl}...`);
        try {
          await page.goto(websiteUrl, { waitUntil: 'domcontentloaded', timeout: 25000 });
          await page.waitForTimeout(3000);
        } catch (navErr: any) {
          console.warn(`  Warning navigating to ${websiteUrl}:`, navErr.message);
        }

        // Capture screenshot if needed
        if (needsScreenshot) {
          console.log(`  Capturing 1440x900 screenshot for ${slug}...`);
          const screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 85 });
          const storagePath = `screenshots/${slug}-interface.jpg`;
          newScreenshotUrl = await uploadToStorage(screenshotBuffer, storagePath, 'image/jpeg');
          console.log(`  ✓ Screenshot uploaded: ${newScreenshotUrl}`);
        }

        // Fetch Logo if needed
        if (needsLogo) {
          console.log(`  Fetching logo for ${slug}...`);
          let logoBuffer: Buffer | null = null;
          let logoMime = 'image/png';
          let logoExt = 'png';

          // Try fallback logo URL first if configured
          if (LOGO_FALLBACKS[slug]) {
            try {
              const res = await fetch(LOGO_FALLBACKS[slug], { headers: { 'User-Agent': 'Mozilla/5.0' } });
              if (res.ok) {
                const arr = await res.arrayBuffer();
                logoBuffer = Buffer.from(arr);
                const ct = res.headers.get('content-type') || '';
                if (ct.includes('svg')) {
                  logoMime = 'image/svg+xml';
                  logoExt = 'svg';
                } else if (ct.includes('png')) {
                  logoMime = 'image/png';
                  logoExt = 'png';
                } else if (ct.includes('webp')) {
                  logoMime = 'image/webp';
                  logoExt = 'webp';
                }
                console.log(`  ✓ Downloaded logo from fallback source (${logoExt})`);
              }
            } catch (e) {}
          }

          // If no buffer, try Google Favicon 256
          if (!logoBuffer && websiteUrl) {
            try {
              const domain = new URL(websiteUrl).hostname;
              const gUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`;
              const res = await fetch(gUrl);
              if (res.ok) {
                const arr = await res.arrayBuffer();
                if (arr.byteLength > 100) {
                  logoBuffer = Buffer.from(arr);
                  logoMime = 'image/png';
                  logoExt = 'png';
                  console.log(`  ✓ Downloaded 256px favicon from Google for ${domain}`);
                }
              }
            } catch (e) {}
          }

          if (logoBuffer) {
            const storagePath = `logos/${slug}-logo.${logoExt}`;
            newLogoUrl = await uploadToStorage(logoBuffer, storagePath, logoMime);
            console.log(`  ✓ Logo uploaded: ${newLogoUrl}`);
          }
        }
      }
    } catch (err: any) {
      console.error(`  Error processing assets for ${slug}:`, err.message);
    } finally {
      await page.close();
    }

    // Update tool object in memory & Supabase
    tool.logoUrl = newLogoUrl;
    tool.screenshotUrl = newScreenshotUrl;
    tool.imageUrl = newLogoUrl;
    tool.category = 'cat-seo';

    const dbUpdate: any = {
      category_id: 'cat-seo',
      logo_url: newLogoUrl,
      image_url: newLogoUrl,
      screenshot_url: newScreenshotUrl,
      updated_at: new Date().toISOString()
    };

    if (slug === 'se-ranking-copilot') {
      tool.name = 'SE Ranking';
      dbUpdate.name = 'SE Ranking';
    }

    const { error: upErr } = await supabase.from('tools').update(dbUpdate).eq('slug', slug);
    if (upErr) {
      console.error(`  Error updating Supabase tool row (${slug}):`, upErr.message);
    } else {
      console.log(`  ✓ Updated Supabase tool row for ${slug}`);
    }
  }

  await browser.close();

  // 4. Save updated tools.json
  fs.writeFileSync(toolsJsonPath, JSON.stringify(currentTools, null, 2), 'utf8');
  console.log(`\n💾 Saved data/tools.json! Total tools remaining: ${currentTools.length}`);

  const remainingSeo = currentTools.filter(t => 
    t.category === 'cat-seo' || 
    t.category === 'ai-seo-tools' ||
    (t.additionalCategories && (t.additionalCategories.includes('cat-seo') || t.additionalCategories.includes('ai-seo-tools')))
  );

  console.log(`\n=== FINAL AI SEO TOOLS (${remainingSeo.length}) ===`);
  remainingSeo.forEach((t, i) => {
    console.log(`  ${i + 1}. [${t.name}] (${t.slug})`);
    console.log(`     Logo: ${t.logoUrl}`);
    console.log(`     Screenshot: ${t.screenshotUrl}`);
  });
}

run().catch(console.error);
