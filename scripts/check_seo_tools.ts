import * as fs from 'fs';
import * as path from 'path';

const candidates = [
  { name: 'Surfer SEO', slug: 'surfer', url: 'https://surferseo.com' },
  { name: 'Frase', slug: 'frase', url: 'https://frase.io' },
  { name: 'Semrush AI', slug: 'semrush-ai', url: 'https://www.semrush.com' },
  { name: 'Ahrefs AI', slug: 'ahrefs-ai', url: 'https://ahrefs.com' },
  { name: 'Clearscope', slug: 'clearscope', url: 'https://clearscope.io' },
  { name: 'NeuronWriter', slug: 'neuronwriter', url: 'https://neuronwriter.com' },
  { name: 'MarketMuse', slug: 'marketmuse', url: 'https://marketmuse.com' },
  { name: 'Scalenut', slug: 'scalenut', url: 'https://scalenut.com' },
  { name: 'RankIQ', slug: 'rankiq', url: 'https://rankiq.com' },
  { name: 'SE Ranking', slug: 'se-ranking-copilot', url: 'https://seranking.com' },
  { name: 'PageOptimizer Pro', slug: 'pageoptimizer-pro', url: 'https://pageoptimizer.pro' },
  { name: 'Alli AI', slug: 'alli-ai', url: 'https://alliai.com' },
  { name: 'Outranking', slug: 'outranking', url: 'https://outranking.io' },
  { name: 'Letterdrop', slug: 'letterdrop', url: 'https://letterdrop.com' },
  { name: 'RankMath AI', slug: 'rankmath-ai', url: 'https://rankmath.com' },
  { name: 'Inlinks', slug: 'inlinks', url: 'https://inlinks.com' },
  { name: 'LowFruits', slug: 'lowfruits', url: 'https://lowfruits.io' },
  { name: 'Keyword Insights', slug: 'keyword-insights', url: 'https://keywordinsights.ai' },
  { name: 'WordLift', slug: 'wordlift', url: 'https://wordlift.io' },
  { name: 'KoalaWriter', slug: 'koala-sh', url: 'https://koala.sh' },
  { name: 'GrowthBar', slug: 'growthbar', url: 'https://growthbarseo.com' },
  { name: 'WriterZen', slug: 'writerzen-seo', url: 'https://writerzen.net' },
  { name: 'Sitebulb AI', slug: 'sitebulb', url: 'https://sitebulb.com' },
  { name: 'SEOwind', slug: 'seowind', url: 'https://seowind.io' },
  { name: 'SEOTesting', slug: 'seotesting-com', url: 'https://seotesting.com' }
];

async function checkCandidates() {
  console.log(`Checking ${candidates.length} candidate AI SEO tools...`);
  for (const c of candidates) {
    try {
      const res = await fetch(c.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        redirect: 'manual'
      });
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get('location');
        console.log(`[${c.name}] (${c.slug}) -> Redirect (${res.status}) to ${loc}`);
      } else {
        console.log(`[${c.name}] (${c.slug}) -> HTTP ${res.status}`);
      }
    } catch (e: any) {
      console.log(`❌ [${c.name}] (${c.slug}) ERROR: ${e.message}`);
    }
  }
}

checkCandidates();
