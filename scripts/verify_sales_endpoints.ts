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
  console.log('Testing Category: AI Sales Tools pages...');
  await check('http://localhost:3000/category/ai-sales-tools');
  await check('http://localhost:3000/category/ai-sales-call-intelligence');
  await check('http://localhost:3000/category/ai-b2b-lead-enrichment');
  await check('http://localhost:3000/category/ai-crm-auto-updating');
  await check('http://localhost:3000/category/ai-sales-objection-coaches');
  await check('http://localhost:3000/category/ai-cpq-proposal-generators');
}

main();
