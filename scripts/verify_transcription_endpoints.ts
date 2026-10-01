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
  console.log('Testing Category: AI Transcription Tools pages...');
  await check('http://localhost:3000/category/ai-transcription-tools');
  await check('http://localhost:3000/category/ai-speech-to-text-transcription');
  await check('http://localhost:3000/category/ai-podcast-interview-transcribers');
  await check('http://localhost:3000/category/ai-multilingual-subtitles-captions');
  await check('http://localhost:3000/category/ai-medical-clinical-scribes');
}

main();
