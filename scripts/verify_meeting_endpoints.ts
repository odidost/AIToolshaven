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
  console.log('Testing Category: AI Meeting Assistants pages...');
  await check('http://localhost:3000/category/ai-meeting-assistants');
  await check('http://localhost:3000/category/ai-meeting-note-takers');
  await check('http://localhost:3000/category/ai-sales-meeting-recorders');
  await check('http://localhost:3000/category/ai-async-video-meetings');
  await check('http://localhost:3000/category/ai-standup-scrum-assistants');
  await check('http://localhost:3000/category/ai-1-on-1-meeting-coaches');
}

main();
