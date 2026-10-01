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
  console.log('Testing Category 6 (Productivity) pages...');
  await check('http://localhost:3000/category/productivity');
  await check('http://localhost:3000/category/ai-calendar-scheduling');
  await check('http://localhost:3000/category/ai-note-taking-knowledge');
  await check('http://localhost:3000/category/ai-email-productivity');
  await check('http://localhost:3000/category/ai-project-management');
  await check('http://localhost:3000/category/ai-document-readers-summarizers');
}

main();
