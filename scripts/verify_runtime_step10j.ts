import http from 'http';

const BASE = process.env.BASE_URL || 'http://localhost:3000';

const routesToTest = [
  { url: '/category/ai-agents', expectedStatus: 200, name: 'L1 Category: AI Agents' },
  { url: '/category/coding-assistants', expectedStatus: 200, name: 'L1 Category: Coding Assistants' },
  { url: '/category/ai-research-tools', expectedStatus: 200, name: 'L1 Category: AI Research Tools' },
  { url: '/tool/agentql', expectedStatus: 200, name: 'L2 Tool: AgentQL (Wave 4 Enriched)' },
  { url: '/tool/consensus', expectedStatus: 200, name: 'L2 Tool: Consensus (Wave 4 Enriched)' },
  { url: '/tool/haiper-ai', expectedStatus: 200, name: 'L2 Tool: Haiper AI (Wave 4 Enriched)' },
  { url: '/compare-tools/midjourney-vs-flux', expectedStatus: 200, name: 'L3 Comparison: Midjourney vs Flux.1' },
  { url: '/compare-tools/jasper-vs-writesonic', expectedStatus: 200, name: 'L3 Comparison: Jasper vs Writesonic' },
  { url: '/compare-tools/elevenlabs-vs-playht', expectedStatus: 200, name: 'L3 Comparison: ElevenLabs vs Play.ht' },
  { url: '/alternatives/midjourney', expectedStatus: 200, name: 'L4 Alternatives: Midjourney' },
  { url: '/alternatives/elevenlabs', expectedStatus: 200, name: 'L4 Alternatives: ElevenLabs' },
  { url: '/goals/ai-for-marketing-agencies', expectedStatus: 200, name: 'L5 Goal: AI for Marketing Agencies' },
  { url: '/goals/ai-for-academic-research', expectedStatus: 200, name: 'L5 Goal: AI for Academic Research' },
  { url: '/workflows/faceless-youtube-channel', expectedStatus: 200, name: 'L6 Workflow: Faceless YouTube Channel' },
  { url: '/workflows/automated-lead-enrichment', expectedStatus: 200, name: 'L6 Workflow: Automated Lead Enrichment' },
  { url: '/blog/agentic-ai-coding-trends-2026', expectedStatus: 200, name: 'L7 Blog: Agentic AI Coding Trends' },
  { url: '/tool/metagpt', expectedStatus: 404, name: 'Draft Tool Access Protection (/tool/metagpt)' },
  { url: '/collections/best-ai-writing-tools', expectedStatus: 404, name: 'Deprecated Collection 404 (/collections/best-ai-writing-tools)' },
  { url: '/tool/this-tool-does-not-exist-xyz', expectedStatus: 404, name: 'Non-Existent Tool 404' }
];

async function checkUrl(route: typeof routesToTest[0]): Promise<boolean> {
  return new Promise((resolve) => {
    http.get(`${BASE}${route.url}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const isErrorInHtml = data.includes('Something went wrong') && !data.includes('Page Not Found');
        const is404Title = data.includes('<title>Page Not Found') || data.includes('<title>Tool Not Found') || res.statusCode === 404;
        
        let pass = false;
        if (route.expectedStatus === 404) {
          pass = is404Title && !isErrorInHtml;
        } else {
          pass = res.statusCode === route.expectedStatus && !isErrorInHtml && !is404Title;
        }

        if (pass) {
          console.log(`[PASS] ${route.name} (${route.url}) -> HTTP ${res.statusCode} (is404: ${is404Title})`);
        } else {
          console.error(`[FAIL] ${route.name} (${route.url}) -> Got HTTP ${res.statusCode} (Expected ${route.expectedStatus}), is404: ${is404Title}, ErrorInHtml: ${isErrorInHtml}`);
        }
        resolve(pass);
      });
    }).on('error', (err) => {
      console.error(`[ERROR] ${route.name} (${route.url}) -> ${err.message}`);
      resolve(false);
    });
  });
}

async function runRuntimeVerification() {
  console.log('==================================================');
  console.log('STEP 10J LIVE RUNTIME HTTP VERIFICATION');
  console.log('==================================================\n');

  let passed = 0;
  for (const r of routesToTest) {
    const ok = await checkUrl(r);
    if (ok) passed++;
  }

  console.log(`\n==================================================`);
  console.log(`RUNTIME SUMMARY: ${passed} / ${routesToTest.length} PASSED (${passed === routesToTest.length ? '100% SUCCESS' : 'FAILURES DETECTED'})`);
  console.log(`==================================================`);
}

runRuntimeVerification();
