import { articles } from '../src/lib/articles';

console.log('=== ARTICLE WORD COUNT AUDIT ===\n');
articles.forEach((a, idx) => {
  const clean = a.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = clean.split(' ').length;
  console.log(`${idx + 1}. [${words} words] ${a.slug}`);
});
