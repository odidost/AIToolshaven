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
  console.log('Testing Category: AI Social Media Tools pages...');
  await check('http://localhost:3000/category/ai-social-media-tools');
  await check('http://localhost:3000/category/ai-twitter-x-growth');
  await check('http://localhost:3000/category/ai-linkedin-post-generators');
  await check('http://localhost:3000/category/ai-social-media-schedulers');
  await check('http://localhost:3000/category/ai-instagram-tiktok-captions');
  await check('http://localhost:3000/category/ai-social-listening-analytics');
}

main();
