import fs from 'fs';
import path from 'path';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));

const testSlugs = ['chatpdf', 'scholarcy', 'scispace', 'humata', 'explainpaper', 'paperdigest-ai', 'scisummary-ai', 'genei-io', 'paperpal', 'consensus'];

for (const s of testSlugs) {
  const found = tools.find((t: any) => t.slug === s || t.id === s || (t.publishedData && t.publishedData.slug === s));
  console.log(`Slug ${s}: found=${!!found}, id=${found?.id}, status=${found?.status}, addCats=${JSON.stringify(found?.additionalCategories)}`);
}
