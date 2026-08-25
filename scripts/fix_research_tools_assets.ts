import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { loadEnvConfig } from '@next/env';
import { chromium, Page } from 'playwright';
import * as cheerio from 'cheerio';

loadEnvConfig(process.cwd());

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseKey) {
  console.error("Missing SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const toolsFilePath = path.join(process.cwd(), 'data', 'tools.json');

// Helper to upload directly to Supabase storage
async function uploadToStorage(buffer: Buffer, slug: string, type: 'logo' | 'screenshot', mimeType: string): Promise<string | null> {
  try {
    const isSvg = mimeType === 'image/svg+xml' || mimeType.includes('svg');
    const isJpeg = mimeType === 'image/jpeg' || mimeType === 'image/jpg';
    const isPng = mimeType === 'image/png';
    const extension = isSvg ? 'svg' : (isJpeg ? 'jpg' : (isPng ? 'png' : 'webp'));
    const suffix = type === 'logo' ? 'logo' : 'interface';
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const filename = `${cleanSlug}-${suffix}.${extension}`;
    const storagePath = `${type === 'logo' ? 'logos' : 'screenshots'}/${filename}`;

    const { error: uploadError } = await supabase.storage
      .from('assets')
      .upload(storagePath, buffer, {
        contentType: mimeType,
        upsert: true
      });

    if (uploadError) {
      console.error(`Upload error for ${storagePath}:`, uploadError);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('assets')
      .getPublicUrl(storagePath);

    return publicUrlData.publicUrl;
  } catch (e) {
    console.error(`Storage exception for ${slug} (${type}):`, e);
    return null;
  }
}

// Check if URL is valid and reachable
async function isAssetValid(url: string | null | undefined): Promise<boolean> {
  if (!url) return false;
  if (url.includes('placeholders') || url.includes('unsplash.com')) return false;
  if (url.includes('https://') && url.indexOf('https://') !== url.lastIndexOf('https://')) return false; // malformed double URL
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(3000) });
    return res.ok;
  } catch {
    try {
      const res = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(3000) });
      return res.ok;
    } catch {
      return false;
    }
  }
}

// Scrape Logo
async function fetchLogo(url: string, slug: string, page?: Page): Promise<{ url: string; mimeType: string } | null> {
  const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname.replace(/^www\./, '');

  // 1. Try Direct HTML parse for SVG / high-res brand icons
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
      signal: AbortSignal.timeout(8000)
    });
    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);
      const origin = new URL(res.url || url).origin;

      const candidates: string[] = [];

      // Look for SVGs in headers, logos, navs
      $('header img[src$=".svg"], nav img[src$=".svg"], img[alt*="logo" i][src$=".svg"], img[class*="logo" i][src$=".svg"], img[id*="logo" i][src$=".svg"]').each((_, el) => {
        const src = $(el).attr('src');
        if (src) candidates.push(src);
      });

      // JSON-LD organization logo
      $('script[type="application/ld+json"]').each((_, el) => {
        try {
          const json = JSON.parse($(el).html() || '{}');
          const checkOrg = (obj: any) => {
            if (obj && (obj['@type'] === 'Organization' || obj['@type'] === 'Corporation') && obj.logo) {
              const l = typeof obj.logo === 'object' ? obj.logo.url : obj.logo;
              if (l && typeof l === 'string') candidates.push(l);
            }
          };
          if (Array.isArray(json)) json.forEach(checkOrg);
          else if (json['@graph']) json['@graph'].forEach(checkOrg);
          else checkOrg(json);
        } catch {}
      });

      // Other logo images (PNG, WebP)
      $('header img, nav img, img[alt*="logo" i], img[class*="logo" i]').each((_, el) => {
        const src = $(el).attr('src');
        if (src && !src.endsWith('.svg')) candidates.push(src);
      });

      // Apple Touch Icon
      $('link[rel="apple-touch-icon"]').each((_, el) => {
        const href = $(el).attr('href');
        if (href) candidates.push(href);
      });

      // Favicons with high resolution
      $('link[rel="icon"], link[rel="shortcut icon"]').each((_, el) => {
        const href = $(el).attr('href');
        if (href) candidates.push(href);
      });

      // Try candidates in order
      for (const cand of candidates) {
        try {
          const absUrl = new URL(cand, origin).href;
          const imgRes = await fetch(absUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            signal: AbortSignal.timeout(5000)
          });
          if (imgRes.ok) {
            const contentType = imgRes.headers.get('content-type') || 'image/png';
            if (!contentType.includes('text') && !contentType.includes('json')) {
              const buffer = Buffer.from(await imgRes.arrayBuffer());
              if (buffer.length > 250) {
                const uploadedUrl = await uploadToStorage(buffer, slug, 'logo', contentType);
                if (uploadedUrl) return { url: uploadedUrl, mimeType: contentType };
              }
            }
          }
        } catch {}
      }
    }
  } catch (err) {
    // direct html failed, continue to browser or fallback
  }

  // 2. Browser DOM extraction if page provided
  if (page) {
    try {
      const domLogos = await page.evaluate(() => {
        const list: string[] = [];
        const origin = window.location.origin;
        document.querySelectorAll('header img, nav img, img[alt*="logo" i], img[class*="logo" i]').forEach(img => {
          const src = img.getAttribute('src');
          if (src) list.push(new URL(src, origin).href);
        });
        const apple = document.querySelector('link[rel="apple-touch-icon"]');
        if (apple) {
          const href = apple.getAttribute('href');
          if (href) list.push(new URL(href, origin).href);
        }
        return list;
      });

      for (const candUrl of domLogos) {
        try {
          const imgRes = await fetch(candUrl, { signal: AbortSignal.timeout(4000) });
          if (imgRes.ok) {
            const contentType = imgRes.headers.get('content-type') || 'image/png';
            if (!contentType.includes('text')) {
              const buffer = Buffer.from(await imgRes.arrayBuffer());
              if (buffer.length > 300) {
                const uploadedUrl = await uploadToStorage(buffer, slug, 'logo', contentType);
                if (uploadedUrl) return { url: uploadedUrl, mimeType: contentType };
              }
            }
          }
        } catch {}
      }
    } catch {}
  }

  // 3. High-res Google Favicon (128/256px) or Icon Horse fallback
  const fallbackSources = [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
    `https://icon.horse/icon/${domain}`
  ];

  for (const fallbackUrl of fallbackSources) {
    try {
      const fbRes = await fetch(fallbackUrl, { signal: AbortSignal.timeout(5000) });
      if (fbRes.ok) {
        const contentType = fbRes.headers.get('content-type') || 'image/png';
        const buffer = Buffer.from(await fbRes.arrayBuffer());
        if (buffer.length > 500) { // genuine icon, not a 1x1 blank
          const uploadedUrl = await uploadToStorage(buffer, slug, 'logo', contentType);
          if (uploadedUrl) return { url: uploadedUrl, mimeType: contentType };
        }
      }
    } catch {}
  }

  return null;
}

// Capture Screenshot with Playwright
async function captureToolScreenshot(page: Page, url: string, slug: string): Promise<string | null> {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 }).catch(() => {});
    await page.waitForTimeout(2500); // Allow fonts and animations to settle

    // Dismiss cookie banners & popups
    await page.evaluate(() => {
      const selectors = [
        '#cookie-banner', '.cookie-banner', '.cookie-notice', '#onetrust-consent-sdk',
        '.cc-window', '.fc-consent-root', '[id*="cookie"]', '[class*="cookie"]',
        '[class*="popup"]', '[id*="popup"]', '.intercom-lightweight-app',
        '#usercentrics-root', '.cky-consent-container'
      ];
      selectors.forEach(sel => {
        try {
          document.querySelectorAll(sel).forEach(el => {
            if (el instanceof HTMLElement) el.style.display = 'none';
          });
        } catch {}
      });
    });

    const buffer = await page.screenshot({
      type: 'jpeg',
      quality: 85,
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });

    if (buffer && buffer.length > 2000) {
      return await uploadToStorage(buffer, slug, 'screenshot', 'image/jpeg');
    }
  } catch (err) {
    console.error(`Screenshot failed for ${slug} (${url}):`, err);
  }
  return null;
}

async function main() {
  console.log("=== STARTING AI RESEARCH TOOLS ASSET RECOVERY ===");

  // 1. Fetch all tools in cat-research
  const { data: dbTools, error } = await supabase
    .from('tools')
    .select('*')
    .in('category_id', ['cat-research', 'ai-research-tools'])
    .eq('status', 'Published')
    .order('popularity', { ascending: false });

  if (error || !dbTools) {
    console.error("Failed to query supabase tools:", error);
    return;
  }

  console.log(`Loaded ${dbTools.length} published tools from Supabase.`);

  // Load local tools.json
  const localToolsRaw = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

  // Launch Playwright once for all browser operations
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  let fixedLogos = 0;
  let fixedScreenshots = 0;

  for (let i = 0; i < dbTools.length; i++) {
    const tool = dbTools[i];
    const cleanSlug = tool.slug || tool.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const websiteUrl = tool.website_url || (tool.url ? (tool.url.startsWith('http') ? tool.url : `https://${tool.url}`) : null);

    console.log(`\n[${i + 1}/${dbTools.length}] Checking "${tool.name}" (${cleanSlug})...`);

    const isLogoOk = await isAssetValid(tool.logo_url);
    const isShotOk = await isAssetValid(tool.screenshot_url);

    let newLogoUrl = tool.logo_url;
    let newShotUrl = tool.screenshot_url;
    let modified = false;

    if (!websiteUrl) {
      console.log(`  ⚠️ No website URL for ${tool.name}. Skipping scraping.`);
      continue;
    }

    // 1. Fix Screenshot if missing, malformed, or invalid
    if (!isShotOk) {
      console.log(`  📸 Fixing Screenshot (current: ${tool.screenshot_url || 'none'})...`);
      const shotUrl = await captureToolScreenshot(page, websiteUrl, cleanSlug);
      if (shotUrl) {
        newShotUrl = shotUrl;
        modified = true;
        fixedScreenshots++;
        console.log(`  ✅ New Screenshot uploaded: ${shotUrl}`);
      } else {
        console.log(`  ❌ Screenshot capture failed for ${tool.name}`);
      }
    } else {
      console.log(`  ✓ Screenshot is valid.`);
    }

    // 2. Fix Logo if missing, placeholder, unsplash, or 404
    if (!isLogoOk) {
      console.log(`  🎨 Fixing Logo (current: ${tool.logo_url || 'none'})...`);
      const logoRes = await fetchLogo(websiteUrl, cleanSlug, page);
      if (logoRes && logoRes.url) {
        newLogoUrl = logoRes.url;
        modified = true;
        fixedLogos++;
        console.log(`  ✅ New Logo uploaded: ${logoRes.url}`);
      } else {
        console.log(`  ❌ Logo extraction failed for ${tool.name}`);
      }
    } else {
      console.log(`  ✓ Logo is valid.`);
    }

    // 3. Update DB if modified
    if (modified) {
      const updatePayload: any = {};
      if (newLogoUrl !== tool.logo_url) updatePayload.logo_url = newLogoUrl;
      if (newShotUrl !== tool.screenshot_url) updatePayload.screenshot_url = newShotUrl;

      const { error: updateError } = await supabase
        .from('tools')
        .update(updatePayload)
        .eq('id', tool.id);

      if (updateError) {
        console.error(`  ❌ Failed to update Supabase row for ${tool.name}:`, updateError);
      } else {
        console.log(`  💾 Updated Supabase row for ${tool.name}.`);
      }

      // Update local tools.json
      for (const localItem of localToolsRaw) {
        const doc = localItem.publishedData || localItem;
        if (localItem.id === tool.id || doc.slug === tool.slug || localItem.slug === tool.slug) {
          if (newLogoUrl) {
            localItem.logo_url = newLogoUrl;
            localItem.logoUrl = newLogoUrl;
            if (localItem.publishedData) {
              localItem.publishedData.logo_url = newLogoUrl;
              localItem.publishedData.logoUrl = newLogoUrl;
            }
          }
          if (newShotUrl) {
            localItem.screenshot_url = newShotUrl;
            localItem.screenshotUrl = newShotUrl;
            if (localItem.publishedData) {
              localItem.publishedData.screenshot_url = newShotUrl;
              localItem.publishedData.screenshotUrl = newShotUrl;
            }
          }
        }
      }
    }
  }

  await browser.close();

  // Save updated tools.json
  fs.writeFileSync(toolsFilePath, JSON.stringify(localToolsRaw, null, 2), 'utf8');
  console.log(`\n💾 Saved updated data/tools.json!`);

  console.log(`\n=== SUMMARY ===`);
  console.log(`Logos fixed: ${fixedLogos}`);
  console.log(`Screenshots fixed: ${fixedScreenshots}`);
}

main().catch(err => {
  console.error("Fatal script error:", err);
  process.exit(1);
});
