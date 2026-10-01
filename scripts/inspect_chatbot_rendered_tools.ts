import { getLocalToolsByCategory } from '../src/lib/data/tools-service';

const cats = [
  'ai-customer-support-bots',
  'ai-internal-knowledge-bots',
  'ai-whatsapp-omnichannel-bots',
  'ai-character-roleplay-chat',
  'ai-voice-receptionists'
];

for (const c of cats) {
  const tools = getLocalToolsByCategory(c);
  console.log(`\n==================`);
  console.log(`Subcategory: ${c} (Total: ${tools.length})`);
  tools.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.name} (slug: ${t.slug}, price: ${t.priceModel || t.price_model})`);
  });
}
