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
  console.log('Testing Category: AI Chatbots pages...');
  await check('http://localhost:3000/category/ai-chatbots');
  await check('http://localhost:3000/category/ai-customer-support-bots');
  await check('http://localhost:3000/category/ai-internal-knowledge-bots');
  await check('http://localhost:3000/category/ai-whatsapp-omnichannel-bots');
  await check('http://localhost:3000/category/ai-character-roleplay-chat');
  await check('http://localhost:3000/category/ai-voice-receptionists');
}

main();
