import fs from 'fs';
import path from 'path';

// Parse .env.local manually for test script
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

import { middleware } from '../src/middleware';
import { NextRequest } from 'next/server';

interface TestCase {
  name: string;
  url: string;
  expectedStatus: number;
  expectedDestination?: string;
  expectedCleanSearch?: string;
}

const testCases: TestCase[] = [
  // 1. Verified Legacy Tool 301 Redirects
  {
    name: "Legacy Aider Review -> Canonical Aider",
    url: "https://aitoolshaven.com/ai-tool/aider-ai-review/",
    expectedStatus: 301,
    expectedDestination: "/tool/aider-chat",
  },
  {
    name: "Legacy PearAI Review -> Canonical PearAI Code",
    url: "https://aitoolshaven.com/ai-tool/pear-ai-review/",
    expectedStatus: 301,
    expectedDestination: "/tool/pearai-code",
  },
  {
    name: "Legacy Wix -> Canonical Wix Logo Maker",
    url: "https://aitoolshaven.com/ai-tool/wix/",
    expectedStatus: 301,
    expectedDestination: "/tool/wix-logo-maker",
  },

  // 2. Canva Logo Maker -> Canonical Canva
  {
    name: "Canva Logo Maker -> Canonical Canva",
    url: "https://aitoolshaven.com/tool/canva-logo-maker",
    expectedStatus: 301,
    expectedDestination: "/tool/canva",
  },

  // 3. All AI Tool Categories -> Canonical Categories Index
  {
    name: "All AI Tool Categories -> Categories Index",
    url: "https://aitoolshaven.com/all-ai-tool-categories/",
    expectedStatus: 301,
    expectedDestination: "/categories",
  },

  // 4. Legacy Category 301 Redirects
  {
    name: "Legacy Image Generation Category -> Canonical Category",
    url: "https://aitoolshaven.com/ai-tool-category/ai-image-generation-tools/",
    expectedStatus: 301,
    expectedDestination: "/category/ai-image-generators",
  },
  {
    name: "Legacy Video Generators Category -> Canonical Category (No chain)",
    url: "https://aitoolshaven.com/ai-tool-category/ai-video-generators/",
    expectedStatus: 301,
    expectedDestination: "/category/ai-video-generators",
  },

  // 5. Query Parameter & ?nocache= Cleanup
  {
    name: "Clean URL with ?nocache= -> 301 to Clean Canonical URL",
    url: "https://aitoolshaven.com/tool/writesonic?nocache=1780202763",
    expectedStatus: 301,
    expectedDestination: "/tool/writesonic",
    expectedCleanSearch: "",
  },
  {
    name: "Legacy URL with ?nocache= -> 301 to Canonical Destination without ?nocache=",
    url: "https://aitoolshaven.com/ai-tool/wix/?nocache=1780175029",
    expectedStatus: 301,
    expectedDestination: "/tool/wix-logo-maker",
    expectedCleanSearch: "",
  },
  {
    name: "Legitimate query parameter preserved when ?nocache= is stripped",
    url: "https://aitoolshaven.com/submit/form?plan=launch&nocache=999",
    expectedStatus: 301,
    expectedDestination: "/submit/form",
    expectedCleanSearch: "?plan=launch",
  },

  // 6. Valid Non-Redirecting Routes (Proceeds through middleware to Next.js handler)
  {
    name: "Canonical Homepage (No redirect)",
    url: "https://aitoolshaven.com/",
    expectedStatus: 200,
  },
  {
    name: "Canonical Writesonic Tool (No redirect)",
    url: "https://aitoolshaven.com/tool/writesonic",
    expectedStatus: 200,
  },
  {
    name: "Canonical ChatGPT Tool (No redirect)",
    url: "https://aitoolshaven.com/tool/chatgpt",
    expectedStatus: 200,
  },
  {
    name: "Canonical Category (No redirect)",
    url: "https://aitoolshaven.com/category/ai-writing-tools",
    expectedStatus: 200,
  },

  // 7. Non-existent Legacy / Draft / Spam Routes (Should NOT redirect, proceeds to 404)
  {
    name: "Draft Legacy Tool (Deforum Studio) -> No redirect, falls to 404",
    url: "https://aitoolshaven.com/ai-tool/deforum-studio/",
    expectedStatus: 200, // 200 in middleware means "proceed to next.js routing" which will render 404
  },
  {
    name: "Draft Legacy Tool (Viggle 2.0) -> No redirect, falls to 404",
    url: "https://aitoolshaven.com/ai-tool/viggle-2-0/",
    expectedStatus: 200, // Falls to 404 in Next.js
  },
  {
    name: "Invalid Legacy Tool (adpex-ai) -> No redirect, falls to 404",
    url: "https://aitoolshaven.com/ai-tool/adpex-ai/",
    expectedStatus: 200, // Falls to 404 in Next.js
  },
  {
    name: "Spam /video/ Path -> No redirect, falls to 404",
    url: "https://aitoolshaven.com/video/?lai=test",
    expectedStatus: 200, // Falls to 404 in Next.js
  }
];

async function runTests() {
  console.log("==================================================");
  console.log("STEP 10K — MIDDLEWARE & REDIRECT VERIFICATION SUITE");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  for (const tc of testCases) {
    const req = new NextRequest(tc.url);
    const res = await middleware(req);
    const status = res.status;
    const location = res.headers.get("location");

    let isSuccess = true;
    let failReason = "";

    if (tc.expectedStatus === 301) {
      if (status !== 301) {
        isSuccess = false;
        failReason = `Expected status 301, got ${status}`;
      } else {
        const destUrl = new URL(location || "", tc.url);
        if (destUrl.pathname !== tc.expectedDestination) {
          isSuccess = false;
          failReason = `Expected destination ${tc.expectedDestination}, got ${destUrl.pathname}`;
        }
        if (tc.expectedCleanSearch !== undefined && destUrl.search !== tc.expectedCleanSearch) {
          isSuccess = false;
          failReason = `Expected search ${tc.expectedCleanSearch}, got ${destUrl.search}`;
        }
      }
    } else {
      // Expected 200 (proceed to Next.js route handling / not-found)
      if (status === 301 || status === 302) {
        isSuccess = false;
        failReason = `Expected route to proceed without redirect, but was redirected to ${location}`;
      }
    }

    if (isSuccess) {
      console.log(`[PASS] ${tc.name}`);
      if (tc.expectedStatus === 301) {
        console.log(`       -> Redirects to: ${tc.expectedDestination}${tc.expectedCleanSearch || ""}`);
      } else {
        console.log(`       -> Proceeds directly to route handler / 404`);
      }
      passed++;
    } else {
      console.error(`[FAIL] ${tc.name}`);
      console.error(`       -> ${failReason}`);
      failed++;
    }
  }

  console.log("\n==================================================");
  console.log(`RESULTS: ${passed} PASSED / ${failed} FAILED`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(console.error);
