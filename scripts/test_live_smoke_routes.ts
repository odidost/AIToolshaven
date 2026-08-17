import http from 'http';

const testUrls = [
  'http://localhost:3000/',
  'http://localhost:3000/tool/chatgpt',
  'http://localhost:3000/tool/writesonic',
  'http://localhost:3000/tool/cursor',
  'http://localhost:3000/category/ai-writing-tools',
  'http://localhost:3000/category/coding-assistants',
  'http://localhost:3000/compare-tools/chatgpt-vs-claude',
  'http://localhost:3000/alternatives/chatgpt',
  'http://localhost:3000/goals/vibe-coding',
  'http://localhost:3000/workflows/vibe-coding',
  // 5 Newly published tools
  'http://localhost:3000/tool/tactiq',
  'http://localhost:3000/tool/outranking',
  'http://localhost:3000/tool/replit-agent',
  'http://localhost:3000/tool/assemblyai',
  'http://localhost:3000/tool/deepgram'
];

function fetchStatus(url: string): Promise<{ url: string; status: number; ok: boolean; size: number }> {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode || 0,
          ok: (res.statusCode || 0) === 200,
          size: data.length
        });
      });
    }).on('error', (err) => {
      resolve({
        url,
        status: 500,
        ok: false,
        size: 0
      });
    });
  });
}

async function main() {
  console.log('==================================================');
  console.log('RUNTIME SMOKE TESTS (LIVE HTTP 200 VERIFICATION)');
  console.log('==================================================\n');

  const results = [];
  for (const u of testUrls) {
    const res = await fetchStatus(u);
    results.push(res);
    console.log(`[${res.ok ? 'PASS' : 'FAIL'}] ${res.status} - ${res.url} (${res.size} bytes)`);
  }

  console.log('\n--- SUMMARY ---');
  console.table(results.map(r => ({ URL: r.url.replace('http://localhost:3000', ''), Status: r.status, OK: r.ok })));
  
  const allOk = results.every(r => r.ok);
  console.log(`\nOverall Smoke Test: ${allOk ? '✓ ALL ROUTES PASSED (HTTP 200)' : '✗ FAILED'}`);
}

main();
