import http from 'http';

const BASE = 'http://localhost:3000';

interface RouteCheck {
  url: string;
  expectedFinalStatus: number;
  expectedFinalPath?: string;
  name: string;
}

const routes: RouteCheck[] = [
  // 1. Canonical Pages (HTTP 200)
  { url: '/', expectedFinalStatus: 200, name: 'Homepage (with intent copy & quick links)' },
  { url: '/categories', expectedFinalStatus: 200, name: 'All Categories Index' },
  { url: '/category/ai-writing-tools', expectedFinalStatus: 200, name: 'Category: AI Writing Tools' },
  { url: '/category/coding-assistants', expectedFinalStatus: 200, name: 'Category: Coding Assistants' },
  { url: '/tool/chatgpt', expectedFinalStatus: 200, name: 'Tool: ChatGPT' },
  { url: '/tool/writesonic', expectedFinalStatus: 200, name: 'Tool: Writesonic' },
  { url: '/tool/canva', expectedFinalStatus: 200, name: 'Tool: Canva' },
  { url: '/tool/aider-chat', expectedFinalStatus: 200, name: 'Tool: Aider' },
  { url: '/tool/wix-logo-maker', expectedFinalStatus: 200, name: 'Tool: Wix Logo Maker' },
  { url: '/compare-tools/chatgpt-vs-claude', expectedFinalStatus: 200, name: 'Comparison: ChatGPT vs Claude' },
  { url: '/alternatives/chatgpt', expectedFinalStatus: 200, name: 'Alternatives: ChatGPT' },
  { url: '/alternatives/writesonic', expectedFinalStatus: 200, name: 'Alternatives: Writesonic' },
  { url: '/goals/vibe-coding', expectedFinalStatus: 200, name: 'Goal: Vibe Coding' },
  { url: '/workflows/vibe-coding', expectedFinalStatus: 200, name: 'Workflow: Vibe Coding' },

  // 2. High-Impact Legacy 301 Redirects
  { url: '/ai-tool/aider-ai-review', expectedFinalStatus: 200, expectedFinalPath: '/tool/aider-chat', name: 'Legacy Aider -> /tool/aider-chat' },
  { url: '/ai-tool/aider-ai-review/', expectedFinalStatus: 200, expectedFinalPath: '/tool/aider-chat', name: 'Legacy Aider (trailing slash) -> /tool/aider-chat' },
  { url: '/ai-tool/pear-ai-review', expectedFinalStatus: 200, expectedFinalPath: '/tool/pearai-code', name: 'Legacy PearAI -> /tool/pearai-code' },
  { url: '/ai-tool/pear-ai-review/', expectedFinalStatus: 200, expectedFinalPath: '/tool/pearai-code', name: 'Legacy PearAI (trailing slash) -> /tool/pearai-code' },
  { url: '/ai-tool/wix', expectedFinalStatus: 200, expectedFinalPath: '/tool/wix-logo-maker', name: 'Legacy Wix -> /tool/wix-logo-maker' },
  { url: '/ai-tool/wix/', expectedFinalStatus: 200, expectedFinalPath: '/tool/wix-logo-maker', name: 'Legacy Wix (trailing slash) -> /tool/wix-logo-maker' },
  { url: '/tool/canva-logo-maker', expectedFinalStatus: 200, expectedFinalPath: '/tool/canva', name: 'Canva Logo Maker -> /tool/canva' },
  { url: '/all-ai-tool-categories', expectedFinalStatus: 200, expectedFinalPath: '/categories', name: 'All AI Tool Categories -> /categories' },
  { url: '/ai-tool-category/ai-image-generation-tools', expectedFinalStatus: 200, expectedFinalPath: '/category/ai-image-generators', name: 'Legacy Category Image Gen -> /category/ai-image-generators' },
  { url: '/ai-tool-category/ai-image-generation-tools/', expectedFinalStatus: 200, expectedFinalPath: '/category/ai-image-generators', name: 'Legacy Category Image Gen (trailing slash) -> /category/ai-image-generators' },

  // 3. Query Parameter / ?nocache= 301 Cleanups
  { url: '/?nocache=1780202763', expectedFinalStatus: 200, expectedFinalPath: '/', name: 'Homepage ?nocache= -> /' },
  { url: '/tool/writesonic?nocache=1780202763', expectedFinalStatus: 200, expectedFinalPath: '/tool/writesonic', name: 'Tool Writesonic ?nocache= -> /tool/writesonic' },
  { url: '/ai-tool/wix?nocache=1780175029', expectedFinalStatus: 200, expectedFinalPath: '/tool/wix-logo-maker', name: 'Legacy Wix ?nocache= -> /tool/wix-logo-maker' },

  // 4. Clean 404 Handlers (Draft-Only, Invalid, Spam)
  { url: '/ai-tool/deforum-studio', expectedFinalStatus: 404, name: 'Draft Tool Deforum -> 404' },
  { url: '/ai-tool/deforum-studio/', expectedFinalStatus: 404, name: 'Draft Tool Deforum (slash) -> 404' },
  { url: '/ai-tool/viggle-2-0', expectedFinalStatus: 404, name: 'Draft Tool Viggle -> 404' },
  { url: '/ai-tool/viggle-2-0/', expectedFinalStatus: 404, name: 'Draft Tool Viggle (slash) -> 404' },
  { url: '/ai-tool/adpex-ai', expectedFinalStatus: 404, name: 'Invalid Tool adpex-ai -> 404' },
  { url: '/ai-tool/webflow', expectedFinalStatus: 404, name: 'Invalid Tool webflow -> 404' },
  { url: '/ai-tool/family-pro', expectedFinalStatus: 404, name: 'Invalid Tool family-pro -> 404' },
  { url: '/ai-tool-category/ai-podcast-script-generators', expectedFinalStatus: 404, name: 'Invalid Category -> 404' },
  { url: '/video', expectedFinalStatus: 404, name: 'Spam /video -> 404' },
  { url: '/video/', expectedFinalStatus: 404, name: 'Spam /video/ -> 404' },
  { url: '/video/?lai=test', expectedFinalStatus: 404, name: 'Spam /video/?lai= -> 404' },
];

function fetchWithRedirects(currentUrl: string, redirectCount = 0): Promise<{ statusCode: number; finalUrl: string; body: string }> {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      return reject(new Error('Too many redirects'));
    }

    const reqUrl = currentUrl.startsWith('http') ? currentUrl : `${BASE}${currentUrl}`;
    http.get(reqUrl, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode && [301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
          const nextUrl = res.headers.location.startsWith('http') 
            ? res.headers.location 
            : `${BASE}${res.headers.location}`;
          return resolve(fetchWithRedirects(nextUrl, redirectCount + 1));
        }

        resolve({
          statusCode: res.statusCode || 500,
          finalUrl: reqUrl,
          body
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log("==================================================");
  console.log("STEP 10K LIVE HTTP E2E RUNTIME SUITE");
  console.log("==================================================");

  let passed = 0;
  for (const r of routes) {
    try {
      const res = await fetchWithRedirects(r.url);
      const parsedFinal = new URL(res.finalUrl);
      const finalPath = parsedFinal.pathname;

      let isSuccess = false;
      let details = '';

      if (r.expectedFinalStatus === 404) {
        const is404 = res.statusCode === 404 || res.body.includes('Page Not Found') || res.body.includes('Tool Not Found') || res.body.includes('404');
        isSuccess = is404;
        details = `Status: ${res.statusCode} (is404 UI: ${is404})`;
      } else {
        const statusMatch = res.statusCode === r.expectedFinalStatus;
        const pathMatch = !r.expectedFinalPath || finalPath === r.expectedFinalPath;
        const noError = !res.body.includes('Something went wrong');
        isSuccess = statusMatch && pathMatch && noError;
        details = `Final Path: ${finalPath} (Expected: ${r.expectedFinalPath || r.url}), Status: ${res.statusCode}`;
      }

      if (isSuccess) {
        console.log(`[PASS] ${r.name} -> ${details}`);
        passed++;
      } else {
        console.error(`[FAIL] ${r.name} -> ${details}`);
      }
    } catch (e: any) {
      console.error(`[ERROR] ${r.name} -> ${e.message}`);
    }
  }

  console.log("\n==================================================");
  console.log(`LIVE HTTP RESULTS: ${passed} / ${routes.length} PASSED (${passed === routes.length ? '100% SUCCESS' : 'FAILURES DETECTED'})`);
  console.log("==================================================");

  if (passed !== routes.length) {
    process.exit(1);
  }
}

run();
