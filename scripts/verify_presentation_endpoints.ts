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
  console.log('Testing Category: AI Presentation Makers pages...');
  await check('http://localhost:3000/category/ai-presentation-makers');
  await check('http://localhost:3000/category/ai-pitch-deck-generators');
  await check('http://localhost:3000/category/ai-sales-presentation-makers');
  await check('http://localhost:3000/category/ai-powerpoint-google-slides-copilots');
  await check('http://localhost:3000/category/ai-interactive-audience-presentations');
  await check('http://localhost:3000/category/ai-educational-lecture-slides');
}

main();
