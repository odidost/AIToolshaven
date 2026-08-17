import http from 'http';

const PORT = process.env.PORT || '3007';

const routesToTest = [
  // Core routes that must return HTTP 200
  { path: '/', expectedStatus: [200], name: 'Homepage' },
  { path: '/tool/chatgpt', expectedStatus: [200], name: 'Tool: ChatGPT' },
  { path: '/tool/claude', expectedStatus: [200], name: 'Tool: Claude' },
  { path: '/category/ai-writing-tools', expectedStatus: [200], name: 'Category Hub' },
  { path: '/compare-tools/chatgpt-vs-claude', expectedStatus: [200], name: 'Comparison Hub' },
  { path: '/alternatives/chatgpt', expectedStatus: [200], name: 'Alternatives Hub' },
  { path: '/goals/vibe-coding', expectedStatus: [200], name: 'Goals Hub' },
  { path: '/workflows/vibe-coding', expectedStatus: [200], name: 'Workflows Hub' },
  { path: '/latest-ai-tools', expectedStatus: [200], name: 'Latest Tools' },
  { path: '/trending-ai-tools', expectedStatus: [200], name: 'Trending Tools' },
  { path: '/popular-ai-tools', expectedStatus: [200], name: 'Popular Tools' },
  { path: '/admin/seo/gsc', expectedStatus: [200, 307], name: 'Admin GSC Dashboard (Protected)' },

  // Deleted collections that must return clean 404 (notFound)
  { path: '/collections/best-ai-writing-tools', expectedStatus: [404], name: 'Removed Collection: Writing' },
  { path: '/collections/best-ai-image-generators', expectedStatus: [404], name: 'Removed Collection: Image' },
  { path: '/collections/best-ai-coding-assistants', expectedStatus: [404], name: 'Removed Collection: Coding' },
  { path: '/collections/best-ai-video-generators', expectedStatus: [404], name: 'Removed Collection: Video' },
  { path: '/collections/best-ai-sales-tools', expectedStatus: [404], name: 'Removed Collection: Sales' },
];

function fetchRoute(path: string): Promise<{ status: number; bodyLength: number }> {
  return new Promise((resolve) => {
    http.get(`http://localhost:${PORT}${path}`, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; });
      res.on('end', () => {
        resolve({ status: res.statusCode || 0, bodyLength: body.length });
      });
    }).on('error', (err) => {
      resolve({ status: 500, bodyLength: 0 });
    });
  });
}

async function run() {
  console.log(`==================================================`);
  console.log(`TESTING COLLECTION CLEANUP & CORE ROUTES (PORT ${PORT})`);
  console.log(`==================================================\n`);

  let passCount = 0;
  let failCount = 0;

  for (const item of routesToTest) {
    const res = await fetchRoute(item.path);
    const pass = item.expectedStatus.includes(res.status);
    if (pass) {
      passCount++;
      console.log(`[PASS] ${item.name} (${item.path}) -> Status: ${res.status}`);
    } else {
      failCount++;
      console.error(`[FAIL] ${item.name} (${item.path}) -> Got: ${res.status}, Expected: ${item.expectedStatus.join('/')}`);
    }
  }

  console.log(`\n==================================================`);
  console.log(`SUMMARY: Total=${routesToTest.length}, Passed=${passCount}, Failed=${failCount}`);
  console.log(`==================================================`);

  if (failCount === 0) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

run();
