async function verifyResearchEndpoints() {
  const urls = [
    'http://localhost:3000/category/ai-research-tools',
    'http://localhost:3000/category/ai-academic-literature-review',
    'http://localhost:3000/category/ai-paper-pdf-summarizers',
    'http://localhost:3000/category/ai-citation-reference-managers',
    'http://localhost:3000/category/ai-data-analysis-research',
    'http://localhost:3000/category/ai-academic-essay-polishers'
  ];

  console.log('Verifying Category 17 endpoints...');
  let allOk = true;

  for (const url of urls) {
    const start = Date.now();
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000); // 60s timeout for first compilation
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      const html = await res.text();
      const duration = ((Date.now() - start) / 1000).toFixed(1);
      const isOk = res.status === 200 && html.length > 5000;
      console.log(`[${res.status}] (${duration}s, ${html.length.toLocaleString()} bytes) ${url} -> ${isOk ? 'PASS' : 'FAIL'}`);
      if (!isOk) allOk = false;
    } catch (err) {
      const duration = ((Date.now() - start) / 1000).toFixed(1);
      console.error(`[ERROR] (${duration}s) ${url}:`, err.message);
      allOk = false;
    }
  }

  if (allOk) {
    console.log('ALL CATEGORY 17 ENDPOINTS VERIFIED 200 OK!');
    process.exit(0);
  } else {
    console.error('SOME ENDPOINTS FAILED.');
    process.exit(1);
  }
}

verifyResearchEndpoints();
