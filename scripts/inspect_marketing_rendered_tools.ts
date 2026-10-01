import { getLocalToolsByCategory } from '../src/lib/data/tools-service';

async function main() {
  const cats = [
    'ai-cold-email-outreach',
    'ai-autonomous-sdrs',
    'ai-ad-creative-generators',
    'ai-landing-page-builders',
    'ai-brand-voice-governance'
  ];

  for (const c of cats) {
    const tools = getLocalToolsByCategory(c);
    console.log(`\n==================`);
    console.log(`Subcategory: ${c} (Total: ${tools.length})`);
    tools.forEach((t, i) => {
      console.log(`  ${i + 1}. ${t.name} (slug: ${t.slug}, price: ${t.priceModel || t.price_model})`);
    });
  }
}

main().catch(console.error);
