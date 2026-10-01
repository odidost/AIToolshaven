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

async function sync() {
  const subcatSlug = 'ai-academic-literature-review';
  const subcatId = 'ai-academic-literature-review';

  // 1. Ensure categories.json has subcategory
  const subcatObj = {
    id: subcatId,
    name: 'AI Academic Literature Review',
    slug: subcatSlug,
    icon: 'menu_book',
    count: 10,
    description: 'AI literature discovery engines and citation mapping platforms that search peer-reviewed journals, synthesize study findings, and visualize connected academic papers.',
    type: 'subcategory',
    parentId: 'cat-research',
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

  // 2. Ensure Supabase categories has it
  const { error: catError } = await supabase.from('categories').upsert({
    id: subcatId,
    name: subcatObj.name,
    slug: subcatObj.slug,
    icon: subcatObj.icon,
    count: 10,
    description: subcatObj.description,
    status: subcatObj.status,
    updated_at: new Date().toISOString()
  });

  if (catError) {
    console.error('Category upsert error:', catError.message);
  } else {
    console.log(`✓ Synced category "${subcatObj.name}" to Supabase`);
  }

  // 3. Define the 10 tools data
  const targetTools = [
    {
      id: 'tool-consensus-1786742992809',
      name: 'Consensus',
      slug: 'consensus',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'literature-review', 'consensus', 'peer-reviewed']
    },
    {
      id: 'tool-elicit-1786742992809',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'literature-review', 'synthesis', 'academic-research']
    },
    {
      id: '3a29f6df-d383-4943-8598-24d618330a1a',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'smart-citations', 'peer-review', 'academic-research']
    },
    {
      id: '451f98a7-6af3-4729-8be2-3d44a3c99dda',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'citation-graph', 'paper-mapping', 'visual-discovery']
    },
    {
      id: 'tool-researchrabbit-1786742992810',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'citation-network', 'free', 'research-collections']
    },
    {
      id: 'tool-semantic-scholar-1786742992810',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'open-access', 'tldr', 'free', 'allen-ai']
    },
    {
      id: 'tool-scispace-1786742992809',
      name: 'SciSpace',
      slug: 'scispace',
      tagline: 'End-to-end research platform with AI Copilot for literature search and paper comprehension.',
      description: 'SciSpace lets researchers discover 280M+ papers, ask questions across collections, highlight complex mathematical formulas for plain-English explanations, and auto-format citations.',
      websiteUrl: 'https://typeset.io',
      category_id: 'cat-research',
      categoryName: 'AI Research Tools',
      categorySlug: 'ai-research-tools',
      priceModel: 'Freemium',
      rating: 4.8,
      logoUrl: '/images/placeholders/logo-s.svg',
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
      tags: ['ai-academic-literature-review', 'cat-research', 'ai-copilot', 'paper-analysis', 'literature-search']
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
      tags: ['ai-academic-literature-review', 'cat-research', 'flashcards', 'summarizer', 'study-cards']
    },
    {
      id: 'd4b7f183-cf8a-4e40-8da7-9c7a917d0aec',
      name: 'Keenious Research',
      slug: 'keenious-research',
      tagline: 'AI academic search and literature recommender analyzing written text and citations.',
      description: 'Keenious analyzes text passages from your document or thesis in real-time, instantly recommending relevant research papers and topics using natural language processing across scholarly databases.',
      websiteUrl: 'https://keenious.com',
      category_id: 'cat-research',
      categoryName: 'AI Research Tools',
      categorySlug: 'ai-research-tools',
      priceModel: 'Freemium',
      rating: 4.8,
      logoUrl: '/images/placeholders/logo-k.svg',
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
      tags: ['ai-academic-literature-review', 'cat-research', 'recommender', 'academic-search', 'thesis-research']
    },
    {
      id: 'tool-chatpdf-1786742992809',
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
      tags: ['ai-academic-literature-review', 'cat-research', 'pdf-analysis', 'chat-with-pdf', 'q-and-a']
    }
  ];

  // 4. Update data/tools.json
  for (const t of targetTools) {
    const idx = tools.findIndex((x: any) => x.id === t.id || x.slug === t.slug);
    const existing = idx >= 0 ? tools[idx] : {};
    const updated = {
      ...existing,
      ...t,
      tags: Array.from(new Set([...(existing.tags || []), ...t.tags])),
      additionalCategories: Array.from(new Set([...(existing.additionalCategories || []), subcatSlug, subcatId]))
    };
    if (idx >= 0) {
      tools[idx] = updated;
    } else {
      tools.push(updated);
    }
  }
  fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
  console.log(`✓ Updated tools.json with all 10 tools`);

  // 5. Update Supabase tools
  console.log('\nUpdating tools in Supabase...');
  for (const t of targetTools) {
    const { data: current } = await supabase.from('tools').select('tags').eq('id', t.id).single();
    const existingTags = (current && Array.isArray(current.tags)) ? current.tags : [];
    const mergedTags = Array.from(new Set([...existingTags, ...t.tags]));

    const { error: toolErr } = await supabase
      .from('tools')
      .update({
        tags: mergedTags,
        updated_at: new Date().toISOString()
      })
      .eq('id', t.id);

    if (toolErr) {
      console.warn(`Error updating Supabase tool ${t.name}:`, toolErr.message);
    } else {
      console.log(`✓ Updated tags in Supabase for: ${t.name} (${t.slug})`);
    }
  }

  console.log('\nSync finished successfully!');
}

sync().catch(console.error);
