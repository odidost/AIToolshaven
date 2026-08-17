import { Page } from 'playwright';
import * as cheerio from 'cheerio';

async function validateCandidateUrl(candidateUrl: string): Promise<{ buffer: Buffer; mimeType: string } | null> {
  try {
    const res = await fetch(candidateUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      signal: AbortSignal.timeout(10000)
    });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || 'image/png';
    if (contentType.includes('text/html') || contentType.includes('application/json')) return null;
    
    const buffer = Buffer.from(await res.arrayBuffer());
    // Reject tracking pixels or tiny images
    if (buffer.length < 200) return null;
    
    return { buffer, mimeType: contentType };
  } catch (e) {
    return null;
  }
}

export async function extractLogoDirect(url: string): Promise<{ buffer: Buffer; mimeType: string } | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
      signal: AbortSignal.timeout(15000)
    });
    if (!res.ok) return null;
    const html = await res.text();
    const $ = cheerio.load(html);
    const origin = new URL(res.url || url).origin;

    const candidates: { url: string; score: number }[] = [];
    
    const addCandidate = (urlStr: string | undefined, score: number) => {
      if (!urlStr) return;
      try {
        const absoluteUrl = new URL(urlStr, origin).href;
        if (absoluteUrl.startsWith('data:') && absoluteUrl.length < 100) return;
        candidates.push({ url: absoluteUrl, score });
      } catch (e) {}
    };

    // 1. Official SVG logo
    $('header img[src$=".svg"], nav img[src$=".svg"], img[alt*="logo" i][src$=".svg"], img[class*="logo" i][src$=".svg"], img[id*="logo" i][src$=".svg"]').each((_, el) => {
      addCandidate($(el).attr('src'), 100);
    });

    // 2. Organization Schema Logo
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const json = JSON.parse($(el).html() || '{}');
        const checkOrg = (obj: any) => {
          if (obj && (obj['@type'] === 'Organization' || obj['@type'] === 'Corporation') && obj.logo) {
            let logoUrl = obj.logo;
            if (typeof logoUrl === 'object' && logoUrl.url) logoUrl = logoUrl.url;
            if (typeof logoUrl === 'string') addCandidate(logoUrl, 85);
          }
        };
        if (Array.isArray(json)) json.forEach(checkOrg);
        else if (json['@graph']) json['@graph'].forEach(checkOrg);
        else checkOrg(json);
      } catch (e) {}
    });

    // 3. Header logo / Logo-related class/ID
    $('header img, nav img, img[alt*="logo" i], img[class*="logo" i], img[id*="logo" i], img[class*="brand" i]').each((_, el) => {
      let score = 80;
      const src = $(el).attr('src');
      if (src && (src.endsWith('.png') || src.endsWith('.webp'))) score = 70;
      addCandidate(src, score);
    });

    // 4. Apple touch icon
    $('link[rel="apple-touch-icon"]').each((_, el) => addCandidate($(el).attr('href'), 60));

    // 5. Favicon
    $('link[rel="icon"], link[rel="shortcut icon"]').each((_, el) => {
      const sizes = $(el).attr('sizes') || '';
      let score = 40;
      if (sizes.includes('192x192')) score = 45;
      if (sizes.includes('512x512')) score = 50;
      addCandidate($(el).attr('href'), score);
    });

    // 6. OG / Twitter image (fallback)
    $('meta[property="og:image"], meta[name="twitter:image"]').each((_, el) => addCandidate($(el).attr('content'), 30));

    // Sort candidates descending
    candidates.sort((a, b) => b.score - a.score);

    // Try candidates
    for (const candidate of candidates) {
      const result = await validateCandidateUrl(candidate.url);
      if (result) return result;
    }
  } catch (e) {
    console.error(`Direct HTML extraction failed for ${url}`);
  }
  return null;
}

export async function extractLogo(page: Page, url: string): Promise<{ buffer: Buffer; mimeType: string } | null> {
  try {
    const logoCandidates = await page.evaluate(() => {
      const candidates: { url: string; type: string; score: number }[] = [];
      const origin = window.location.origin;

      const addCandidate = (urlStr: string | null | undefined, type: string, score: number) => {
        if (!urlStr) return;
        try {
          const absoluteUrl = new URL(urlStr, origin).href;
          if (absoluteUrl.startsWith('data:') && absoluteUrl.length < 100) return;
          candidates.push({ url: absoluteUrl, type, score });
        } catch (e) {}
      };

      const svgLogos = document.querySelectorAll('header img[src$=".svg"], nav img[src$=".svg"], img[alt*="logo" i][src$=".svg"], img[class*="logo" i][src$=".svg"]');
      svgLogos.forEach(img => addCandidate(img.getAttribute('src'), 'svg', 100));

      const headerLogos = document.querySelectorAll('header img, nav img, img[alt*="logo" i], img[class*="logo" i]');
      headerLogos.forEach(img => addCandidate(img.getAttribute('src'), 'header_logo', 80));

      const appleTouch = document.querySelector('link[rel="apple-touch-icon"]');
      if (appleTouch) addCandidate(appleTouch.getAttribute('href'), 'apple_touch', 60);

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) addCandidate(ogImage.getAttribute('content'), 'og_image', 40);

      const icons = Array.from(document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]'));
      icons.forEach(icon => {
        const sizes = icon.getAttribute('sizes');
        let score = 20;
        if (sizes && sizes.includes('192x192')) score = 30;
        if (sizes && sizes.includes('512x512')) score = 40;
        addCandidate(icon.getAttribute('href'), 'favicon', score);
      });

      return candidates.sort((a, b) => b.score - a.score);
    });

    if (logoCandidates.length === 0) return null;

    for (const candidate of logoCandidates) {
      try {
        const response = await page.request.get(candidate.url);
        if (response.ok()) {
          const buffer = await response.body();
          const contentType = response.headers()['content-type'] || 'image/png';
          if (buffer.length > 200) {
             return { buffer, mimeType: contentType };
          }
        }
      } catch (err) {}
    }
  } catch (err) {
    console.error(`Playwright extraction failed for ${url}`);
  }
  return null;
}
