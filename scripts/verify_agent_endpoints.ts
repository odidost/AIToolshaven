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
  console.log('Testing Category: AI Agents pages...');
  await check('http://localhost:3000/category/ai-agents');
  await check('http://localhost:3000/category/ai-autonomous-task-agents');
  await check('http://localhost:3000/category/ai-multi-agent-frameworks');
  await check('http://localhost:3000/category/ai-browser-automation-agents');
  await check('http://localhost:3000/category/ai-data-extraction-agents');
  await check('http://localhost:3000/category/ai-workflow-automation-agents');
}

main();
