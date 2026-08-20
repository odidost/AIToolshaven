import { articles } from '../src/lib/articles';

console.log('=== CURRENT ARTICLE IMAGE MAPPINGS ===\n');
articles.forEach((a, i) => {
  console.log(`${i + 1}. Slug: ${a.slug}`);
  console.log(`   Title: ${a.title}`);
  console.log(`   Image: ${a.imageUrl}\n`);
});
