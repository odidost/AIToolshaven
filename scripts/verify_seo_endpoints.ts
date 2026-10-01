async function check(url: string) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const hasTools = text.includes('tool-card') || text.includes('grid') || text.includes('Free') || text.includes('Paid');
    console.log(`[${res.status}] ${url} - Length: ${text.length} - Has content: ${hasTools}`);
  } catch (err: any) {
    console.error(`[ERR] ${url}:`, err.message);
  }
}

async function main() {
  console.log('Testing Category: AI SEO Tools pages...');
  await check('http://localhost:3000/category/ai-seo-tools');
  await check('http://localhost:3000/category/ai-keyword-research-clustering');
  await check('http://localhost:3000/category/ai-seo-content-optimizers');
  await check('http://localhost:3000/category/ai-technical-seo-auditors');
  await check('http://localhost:3000/category/ai-programmatic-seo-builders');
  await check('http://localhost:3000/category/ai-internal-linking-optimizers');
}

main();
