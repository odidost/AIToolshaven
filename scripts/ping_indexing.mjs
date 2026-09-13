import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// 1. Load .env.local
const envConfigPath = path.resolve('.env.local');
const env = {};
if (fs.existsSync(envConfigPath)) {
  const content = fs.readFileSync(envConfigPath, 'utf-8');
  content.split('\n').forEach(line => {
    const match = line.match(/^([^#\s]+?)=(.*)$/);
    if (match) {
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      env[match[1]] = val.replace(/\\n/g, '\n');
    }
  });
}

const siteUrl = env.GSC_SITE_URL || 'https://aitoolshaven.com/';
const cleanBase = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
const host = new URL(siteUrl).hostname;
const sitemapUrl = `${cleanBase}/sitemap.xml`;
const indexNowKey = 'e396b07f243b4f9ab535990fc22f9763';

// 2. Google OAuth Service Account Token
async function getGoogleAccessToken() {
  if (!env.GSC_CLIENT_EMAIL || !env.GSC_PRIVATE_KEY) {
    throw new Error("Missing GSC_CLIENT_EMAIL or GSC_PRIVATE_KEY in .env.local");
  }

  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: env.GSC_CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedClaim = Buffer.from(JSON.stringify(claim)).toString('base64url');
  const signInput = `${encodedHeader}.${encodedClaim}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const sig = signer.sign(env.GSC_PRIVATE_KEY, 'base64url');
  const jwt = `${signInput}.${sig}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!tokenRes.ok) {
    throw new Error(`Google OAuth failed: ${await tokenRes.text()}`);
  }

  const data = await tokenRes.json();
  return data.access_token;
}

// 3. Submit Sitemap to Google Search Console
async function pingGoogleSearchConsole(accessToken) {
  console.log(`\n📡 [Google Search Console] Submitting ${sitemapUrl}...`);
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  
  const res = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.ok || res.status === 204) {
    console.log(`✅ [Google Search Console] Sitemap submitted successfully! (HTTP ${res.status})`);
  } else {
    console.error(`❌ [Google Search Console] Submission failed (${res.status}):`, await res.text());
  }

  // Fetch sitemap status
  try {
    const checkRes = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (checkRes.ok) {
      const sitemapData = await checkRes.json();
      console.log(`ℹ️ [Google Search Console] Status: Last downloaded ${sitemapData.lastDownloaded || 'Pending'}, warnings: ${sitemapData.warnings || 0}, errors: ${sitemapData.errors || 0}`);
    }
  } catch (e) {}
}

// 4. Submit Priority URLs to IndexNow (Bing, Yandex, Seznam, Naver)
async function pingIndexNow(urls) {
  console.log(`\n📡 [IndexNow Protocol] Submitting ${urls.length} high-priority URLs to api.indexnow.org...`);
  
  const payload = {
    host: host,
    key: indexNowKey,
    keyLocation: `${cleanBase}/${indexNowKey}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      console.log(`✅ [IndexNow Protocol] Successfully accepted! (HTTP ${res.status})`);
      console.log(`   Bing, Yandex, and participating search engines have been notified.`);
    } else {
      const text = await res.text();
      console.warn(`⚠️ [IndexNow Protocol] Status: HTTP ${res.status} (${text || 'Queued'})`);
    }
  } catch (err) {
    console.error(`❌ [IndexNow Protocol] Request error:`, err.message);
  }
}

// 5. Gather High-Priority URLs for Instant Crawling
function getPriorityUrls() {
  const urls = [
    `${cleanBase}/`,
    `${cleanBase}/categories`,
    `${cleanBase}/latest-ai-tools`,
    `${cleanBase}/trending-ai-tools`,
    `${cleanBase}/popular-ai-tools`,
    `${cleanBase}/ai-tool-recommender`,
    `${cleanBase}/compare-tools`,
    `${cleanBase}/workflows`,
    `${cleanBase}/goals`,
    `${cleanBase}/blog`,
    `${cleanBase}/submit`,
    `${cleanBase}/about`,
    `${cleanBase}/editorial-policy`,
    `${cleanBase}/affiliate-disclosure`,
  ];

  // Extract blog post slugs from articles.ts
  try {
    const articlesContent = fs.readFileSync('src/lib/articles.ts', 'utf-8');
    const blogMatches = articlesContent.match(/slug:\s*["']([^"']+)["']/g) || [];
    for (const m of blogMatches) {
      const slug = m.replace(/slug:\s*["']/, '').replace(/["']/, '');
      urls.push(`${cleanBase}/blog/${slug}`);
    }
  } catch (e) {}

  // Extract workflow slugs from workflows.ts
  try {
    const wfContent = fs.readFileSync('src/lib/workflows.ts', 'utf-8');
    const wfMatches = wfContent.match(/slug:\s*["']([^"']+)["']/g) || [];
    for (const m of wfMatches) {
      const slug = m.replace(/slug:\s*["']/, '').replace(/["']/, '');
      urls.push(`${cleanBase}/workflows/${slug}`);
    }
  } catch (e) {}

  // Extract categories from categories.json
  try {
    const catData = JSON.parse(fs.readFileSync('data/categories.json', 'utf-8'));
    for (const c of catData) {
      if (c.slug) urls.push(`${cleanBase}/category/${c.slug}`);
    }
  } catch (e) {}

  return Array.from(new Set(urls));
}

async function main() {
  console.log("==================================================");
  console.log("🚀 AIToolsHaven Instant SEO Ping Engine");
  console.log(`Target Domain: ${siteUrl}`);
  console.log("==================================================");

  const priorityUrls = getPriorityUrls();
  console.log(`Found ${priorityUrls.length} high-value URLs to broadcast.`);

  // 1. Ping Google Search Console
  try {
    const token = await getGoogleAccessToken();
    await pingGoogleSearchConsole(token);
  } catch (gErr) {
    console.error("Google Search Console ping failed:", gErr.message);
  }

  // 2. Ping IndexNow Protocol
  await pingIndexNow(priorityUrls);

  console.log("\n==================================================");
  console.log("✨ All indexing pings completed successfully!");
  console.log("==================================================");
}

main().catch(console.error);
