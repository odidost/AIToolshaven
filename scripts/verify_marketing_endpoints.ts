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
  console.log('Testing Category 5 pages...');
  await check('http://localhost:3000/category/marketing-sales');
  await check('http://localhost:3000/category/ai-cold-email-outreach');
  await check('http://localhost:3000/category/ai-autonomous-sdrs');
  await check('http://localhost:3000/category/ai-ad-creative-generators');
  await check('http://localhost:3000/category/ai-landing-page-builders');
  await check('http://localhost:3000/category/ai-brand-voice-governance');
}

main();
