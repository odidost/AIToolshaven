import * as fs from 'fs';

const tools = JSON.parse(fs.readFileSync('data/tools.json', 'utf8'));
const search = ["instantly", "smartlead", "clay", "mailforge", "lemlist", "artisan", "11x", "qualified", "regie", "aisdr", "adcreative", "madgicx", "pencil", "quickads", "anyword", "framer", "relume", "unbounce", "durable", "mixo", "jasper", "writer", "typeface", "copysmith"];

const matches = tools.filter((t: any) => search.some(s => t.slug?.toLowerCase().includes(s) || t.name?.toLowerCase().includes(s)));
console.log(`Found ${matches.length} matching tools:`);
for (const m of matches) {
  console.log(`- ${m.id} | ${m.name} | slug: ${m.slug} | cat: ${m.categoryId} | addCats: ${JSON.stringify(m.additionalCategories)}`);
}
