import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');

const categories = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));
const tools = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

// 1. Ensure cat-research primary category exists in categories.json & Supabase
const parentCatId = 'cat-research';
const parentCatSlug = 'ai-research-tools';
const parentCat = categories.find((c: any) => c.id === parentCatId || c.slug === parentCatSlug);
if (parentCat) {
  parentCat.count = (parentCat.count || 0) + 10;
}

// 2. Add ai-academic-literature-review subcategory
const subcatSlug = 'ai-academic-literature-review';
const subcatId = 'ai-academic-literature-review';

const subcatObj = {
  id: subcatId,
  name: 'AI Academic Literature Review',
  slug: subcatSlug,
  icon: 'menu_book',
  count: 10,
  description: 'AI literature discovery engines and citation mapping platforms that search peer-reviewed journals, synthesize study findings, and visualize connected academic papers.',
  type: 'subcategory',
  parentId: parentCatId,
  indexable: true,
  status: 'Published'
};

const existingCatIndex = categories.findIndex((c: any) => c.slug === subcatSlug || c.id === subcatId);
if (existingCatIndex >= 0) {
  categories[existingCatIndex] = { ...categories[existingCatIndex], ...subcatObj };
} else {
  categories.push(subcatObj);
}
fs.writeFileSync(categoriesJsonPath, JSON.stringify(categories, null, 2), 'utf8');
console.log(`✓ Updated categories.json with ${subcatSlug}`);

// 3. Define 10 authentic top tools for literature review
const newTools = [
  {
    id: 'consensus-ai',
    name: 'Consensus',
    slug: 'consensus-ai',
    tagline: 'AI search engine extracting scientific consensus from 200M+ peer-reviewed papers.',
    description: 'Consensus is an AI-powered search engine that extracts claims directly from peer-reviewed scientific research, providing consensus meters, sample size data, and synthesized answers grounded in academic evidence.',
    websiteUrl: 'https://consensus.app',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.9,
    logoUrl: '/images/placeholders/logo-c.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'literature-review', 'consensus', 'academic-research', 'peer-reviewed'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'elicit-ai',
    name: 'Elicit',
    slug: 'elicit-ai',
    tagline: 'AI research assistant that automates literature reviews and synthesizes study findings.',
    description: 'Elicit uses language models to help researchers analyze research papers, extract structured methodologies, findings, and metadata into customizable synthesis matrices without manual spreadsheet work.',
    websiteUrl: 'https://elicit.com',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.9,
    logoUrl: '/images/placeholders/logo-e.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'literature-review', 'synthesis', 'academic-research'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'scite-ai',
    name: 'Scite.ai',
    slug: 'scite-ai',
    tagline: 'Smart Citations platform evaluating if scientific research supports or contrasts claims.',
    description: 'Scite helps researchers evaluate the credibility of scientific publications through Smart Citations, showing the exact citation context and whether subsequent authors confirmed or disputed the original findings.',
    websiteUrl: 'https://scite.ai',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-s.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'smart-citations', 'peer-review', 'academic-research'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'connected-papers',
    name: 'Connected Papers',
    slug: 'connected-papers',
    tagline: 'Visual graph tool to explore connected academic papers and research fields.',
    description: 'Connected Papers generates visual graph networks of academic papers based on co-citation and bibliographic coupling, allowing researchers to discover seminal works and trace derivative papers across disciplines.',
    websiteUrl: 'https://www.connectedpapers.com',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.9,
    logoUrl: '/images/placeholders/logo-c.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'citation-graph', 'paper-mapping', 'visual-discovery'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'researchrabbit',
    name: 'ResearchRabbit',
    slug: 'researchrabbit',
    tagline: 'Visual citation-based literature mapping platform and discovery engine.',
    description: 'ResearchRabbit acts as a personalized discovery engine for academic research, visualizing author networks, paper citations, and sending automated alerts when new papers matching your collection are published.',
    websiteUrl: 'https://www.researchrabbit.ai',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Free',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-r.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'citation-network', 'free', 'research-collections'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'litmaps',
    name: 'Litmaps',
    slug: 'litmaps',
    tagline: 'Literature discovery maps that visualize citation networks and author connections.',
    description: 'Litmaps builds interactive chronological citation trees and maps that highlight emerging research clusters, influential seminal papers, and research gaps in any scholarly domain.',
    websiteUrl: 'https://www.litmaps.com',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.7,
    logoUrl: '/images/placeholders/logo-l.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'citation-map', 'academic-maps', 'timeline'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'scispace',
    name: 'SciSpace',
    slug: 'scispace',
    tagline: 'End-to-end research platform with AI Copilot for literature search and paper comprehension.',
    description: 'SciSpace (formerly Typeset) lets researchers discover 280M+ papers, ask questions across collections, highlight complex mathematical formulas for plain-English explanations, and auto-format citations.',
    websiteUrl: 'https://typeset.io',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-s.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'ai-copilot', 'paper-analysis', 'literature-search'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'semantic-scholar',
    name: 'Semantic Scholar',
    slug: 'semantic-scholar',
    tagline: 'AI-powered scientific literature search engine with TLDR summaries by Allen AI.',
    description: 'Developed by the Allen Institute for AI, Semantic Scholar indexes over 200M papers, featuring AI-generated TLDR summaries, highly influential citation metrics, and deep semantic extraction.',
    websiteUrl: 'https://www.semanticscholar.org',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Free',
    rating: 4.9,
    logoUrl: '/images/placeholders/logo-s.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'open-access', 'tldr', 'free', 'allen-ai'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'scholarcy',
    name: 'Scholarcy',
    slug: 'scholarcy',
    tagline: 'AI summarizer converting research papers and book chapters into interactive flashcards.',
    description: 'Scholarcy reads research articles, reports, and book chapters in seconds, breaking them down into digestible summary cards with highlighted key findings, datasets, and bibliography links.',
    websiteUrl: 'https://www.scholarcy.com',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.7,
    logoUrl: '/images/placeholders/logo-s.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'flashcards', 'summarizer', 'study-cards'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'chatpdf',
    name: 'ChatPDF',
    slug: 'chatpdf',
    tagline: 'Fast AI assistant to converse with, extract quotes, and interrogate academic research PDFs.',
    description: 'ChatPDF enables researchers and students to upload scientific studies and whitepapers to instantly ask questions, locate page citations, and synthesize complex technical methodologies.',
    websiteUrl: 'https://www.chatpdf.com',
    category_id: 'cat-research',
    categoryName: 'AI Research Tools',
    categorySlug: 'ai-research-tools',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-c.svg',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-academic-literature-review', 'cat-research', 'pdf-analysis', 'chat-with-pdf', 'q-and-a'],
    isFeatured: true,
    isVerified: true
  }
];

// Add/update tools in tools.json
for (const nt of newTools) {
  const idx = tools.findIndex((t: any) => t.id === nt.id || t.slug === nt.slug);
  if (idx >= 0) {
    tools[idx] = { ...tools[idx], ...nt };
  } else {
    tools.push(nt);
  }
}

fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`✓ Synced ${newTools.length} tools to tools.json`);

async function syncToSupabase() {
  console.log('\nSyncing parent cat-research and subcategory to Supabase...');

  // Ensure parent cat-research exists in Supabase
  await supabase.from('categories').upsert({
    id: parentCatId,
    name: 'AI Research Tools',
    slug: parentCatSlug,
    description: 'Accelerate academic and professional research.',
    icon: 'science',
    count: 10,
    status: 'Published',
    updated_at: new Date().toISOString()
  });

  const { error: catError } = await supabase.from('categories').upsert({
    id: subcatId,
    name: subcatObj.name,
    slug: subcatObj.slug,
    description: subcatObj.description,
    icon: subcatObj.icon,
    parent_id: subcatObj.parentId,
    count: newTools.length,
    status: subcatObj.status,
    updated_at: new Date().toISOString()
  });

  if (catError) {
    console.error('Error syncing subcategory to Supabase:', catError);
  } else {
    console.log(`✓ Synced category "${subcatObj.name}" to Supabase`);
  }

  console.log('\nSyncing tagged tools to Supabase...');
  for (const t of newTools) {
    const rawPrice = t.priceModel || 'Freemium';
    const validPrice = ['Free', 'Freemium', 'Paid', 'Enterprise'].includes(rawPrice) ? rawPrice : 'Freemium';

    const { error: toolError } = await supabase.from('tools').upsert({
      id: t.id,
      name: t.name,
      slug: t.slug,
      tagline: t.tagline || t.description?.slice(0, 100) || '',
      description: t.description || '',
      website_url: t.websiteUrl,
      category_id: t.category_id,
      logo_url: t.logoUrl || '/images/placeholders/logo-c.svg',
      image_url: t.imageUrl || '/images/placeholders/logo-c.svg',
      price_model: validPrice,
      rating: t.rating || 4.8,
      status: 'Published',
      verified: true,
      updated_at: new Date().toISOString()
    });

    if (toolError) {
      console.error(`Error syncing tool ${t.name}:`, toolError.message);
    } else {
      console.log(`✓ Synced tool: ${t.name} (${t.slug})`);
    }

    // Upsert tool_categories relation for subcategory
    await supabase.from('tool_categories').upsert([
      { tool_id: t.id, category_id: subcatSlug },
      { tool_id: t.id, category_id: subcatId },
      { tool_id: t.id, category_id: parentCatId },
      { tool_id: t.id, category_id: parentCatSlug }
    ]);
  }

  console.log('\nSeeding and synchronization complete!');
}

syncToSupabase().catch(err => {
  console.error('Fatal error during sync:', err);
  process.exit(1);
});
