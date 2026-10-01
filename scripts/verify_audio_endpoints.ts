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
  console.log('Testing Category 4 (Audio & Voice) pages...');
  await check('http://localhost:3000/category/audio-voice');
  await check('http://localhost:3000/category/ai-voice-cloning');
  await check('http://localhost:3000/category/ai-podcast-editors');
  await check('http://localhost:3000/category/ai-music-song-generators');
  await check('http://localhost:3000/category/ai-text-to-speech-readers');
  await check('http://localhost:3000/category/ai-audio-noise-removers');
}

main();
