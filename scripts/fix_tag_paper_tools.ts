import fs from 'fs';
import path from 'path';

const toolsJsonPath = path.join(process.cwd(), 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

const subcatSlug = 'ai-paper-pdf-summarizers';
const subcatId = 'ai-paper-pdf-summarizers';

const targetSlugs = [
  'chatpdf',
  'scholarcy',
  'scispace',
  'humata',
  'explainpaper',
  'paperdigest-ai',
  'scisummary-ai',
  'genei-io',
  'paperpal',
  'consensus'
];

let updatedCount = 0;
for (const t of tools) {
  const match = targetSlugs.includes(t.slug) || (t.publishedData && targetSlugs.includes(t.publishedData.slug));
  if (match) {
    t.status = 'Published';
    t.additionalCategories = Array.from(new Set([...(t.additionalCategories || []), subcatSlug, subcatId]));
    if (!t.tags) t.tags = [];
    if (!t.tags.includes(subcatSlug)) t.tags.push(subcatSlug);
    if (!t.tags.includes('cat-research')) t.tags.push('cat-research');

    if (t.publishedData) {
      t.publishedData.status = 'Published';
      t.publishedData.additionalCategories = Array.from(new Set([...(t.publishedData.additionalCategories || []), subcatSlug, subcatId]));
      if (!t.publishedData.tags) t.publishedData.tags = [];
      if (!t.publishedData.tags.includes(subcatSlug)) t.publishedData.tags.push(subcatSlug);
    }
    updatedCount++;
    console.log(`✓ Tagged: ${t.name || t.publishedData?.name} (${t.slug})`);
  }
}

fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`\nSuccessfully tagged ${updatedCount} tools in tools.json`);
