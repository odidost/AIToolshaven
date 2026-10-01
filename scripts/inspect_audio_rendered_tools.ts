import { getLocalToolsByCategory } from '../src/lib/data/tools-service';

const cats = [
  'ai-voice-cloning',
  'ai-podcast-editors',
  'ai-music-song-generators',
  'ai-text-to-speech-readers',
  'ai-audio-noise-removers'
];

for (const c of cats) {
  const tools = getLocalToolsByCategory(c);
  console.log(`\n==================`);
  console.log(`Subcategory: ${c} (Total: ${tools.length})`);
  tools.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.name} (slug: ${t.slug}, price: ${t.priceModel || (t as any).price_model})`);
  });
}
