import { getLocalToolsByCategory } from '../src/lib/data/tools-service';

const cats = [
  'ai-calendar-scheduling',
  'ai-note-taking-knowledge',
  'ai-email-productivity',
  'ai-project-management',
  'ai-document-readers-summarizers'
];

for (const c of cats) {
  const tools = getLocalToolsByCategory(c);
  console.log(`\n==================`);
  console.log(`Subcategory: ${c} (Total: ${tools.length})`);
  tools.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.name} (slug: ${t.slug}, price: ${t.priceModel || t.price_model})`);
  });
}
