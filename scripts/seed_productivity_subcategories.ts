import * as fs from 'fs';

const toolsFilePath = 'data/tools.json';
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// Helper to add additionalCategories cleanly to tool root and publishedData/draftData
function addCategoryToTool(toolMatchFn: (t: any) => boolean, categorySlug: string) {
  let count = 0;
  for (const t of tools) {
    if (toolMatchFn(t)) {
      t.additionalCategories = t.additionalCategories || [];
      if (!t.additionalCategories.includes(categorySlug)) {
        t.additionalCategories.push(categorySlug);
      }
      if (t.publishedData) {
        t.publishedData.additionalCategories = t.publishedData.additionalCategories || [];
        if (!t.publishedData.additionalCategories.includes(categorySlug)) {
          t.publishedData.additionalCategories.push(categorySlug);
        }
      }
      if (t.draftData) {
        t.draftData.additionalCategories = t.draftData.additionalCategories || [];
        if (!t.draftData.additionalCategories.includes(categorySlug)) {
          t.draftData.additionalCategories.push(categorySlug);
        }
      }
      console.log(`Tagged tool "${t.name}" (${t.slug}) with ${categorySlug}`);
      count++;
    }
  }
  return count;
}

// 1. Tag ai-calendar-scheduling
addCategoryToTool(t => t.slug === 'reclaim-ai' || t.id === 'b69ac50e-44b9-48c2-9a98-992252570564', 'ai-calendar-scheduling');
addCategoryToTool(t => t.slug === 'motion-planner' || t.id === '6a46ad0b-27d1-4c73-9f73-2ce3f2201522', 'ai-calendar-scheduling');
addCategoryToTool(t => t.slug === 'clockwise' || t.id === '8a94362a-68fc-4d87-94ba-78f904bbc23b', 'ai-calendar-scheduling');
addCategoryToTool(t => t.slug === 'trevor-planner' || t.id === '827ee4c4-219e-407f-8bb4-89866acfb805', 'ai-calendar-scheduling');
addCategoryToTool(t => t.slug === 'flowsavvy' || t.id === '4f15904d-f7aa-4b09-8efb-f4bc822c25c3', 'ai-calendar-scheduling');
addCategoryToTool(t => t.slug === 'morgen-calendar' || t.id === '76c3a0f5-1272-4bfe-abce-985f96c58511', 'ai-calendar-scheduling');

// 2. Tag ai-note-taking-knowledge
addCategoryToTool(t => t.slug === 'mem-ai' || t.id === 'mem-ai', 'ai-note-taking-knowledge');
addCategoryToTool(t => t.slug === 'tana-ai' || t.id === 'ca931856-ebe7-4fcb-bcd4-3e150fe43644', 'ai-note-taking-knowledge');
addCategoryToTool(t => t.slug === 'capacities-studio' || t.id === 'c4618889-ecdf-4be7-9a58-60672fd3fdf9', 'ai-note-taking-knowledge');
addCategoryToTool(t => t.slug === 'obsidian-canvas-ai' || t.id === 'tool-1786834494618-ib238zq', 'ai-note-taking-knowledge');
addCategoryToTool(t => t.slug === 'logseq-local-graph' || t.id === 'tool-1786834503378-9mllbyz', 'ai-note-taking-knowledge');
addCategoryToTool(t => t.slug === 'anytype-local-studio' || t.id === 'tool-1786834479610-bwgz6cb', 'ai-note-taking-knowledge');
addCategoryToTool(t => t.slug === 'slite-knowledge-copilot' || t.id === 'tool-1786834460904-1fsn3cg', 'ai-note-taking-knowledge');

// 3. Tag ai-email-productivity
addCategoryToTool(t => t.slug === 'superhuman' || t.id === 'superhuman', 'ai-email-productivity');
addCategoryToTool(t => t.slug === 'shortwave' || t.id === '0d391cd2-ccac-4c29-8b2e-71e32010a1a1', 'ai-email-productivity');
addCategoryToTool(t => t.slug === 'sanebox' || t.id === 'sanebox', 'ai-email-productivity');
addCategoryToTool(t => t.slug === 'mailbox-ai-assistant' || t.id === '522ee716-8393-4313-8e9c-68331b551f9e', 'ai-email-productivity');

// 4. Tag ai-project-management
addCategoryToTool(t => t.slug === 'clickup' || t.id === 'clickup', 'ai-project-management');
addCategoryToTool(t => t.slug === 'asana-intelligence' || t.id === '9f403c6a-674c-4216-8a7a-03b1eba87e4c', 'ai-project-management');
addCategoryToTool(t => t.slug === 'monday-ai-assistant' || t.id === 'bd232c16-317a-4147-b415-8d33a6fbbfe2', 'ai-project-management');
addCategoryToTool(t => t.slug === 'coda-ai-workspaces' || t.id === 'aae31b46-7666-46de-8ac6-fbba08c4a14c', 'ai-project-management');
addCategoryToTool(t => t.slug === 'height-ai-tasks' || t.id === 'tool-1786834444971-1l3pgny', 'ai-project-management');
addCategoryToTool(t => t.slug === 'wrike-work-intelligence' || t.id === 'dcc888d5-8e0e-47c4-818e-3b14d1e4ae0b', 'ai-project-management');

// 5. Tag ai-document-readers-summarizers
addCategoryToTool(t => t.slug === 'chatpdf' || t.id === 'tool-chatpdf-1786742992809', 'ai-document-readers-summarizers');

// New tools to seed
const newToolsToSeed = [
  // Email Productivity
  {
    id: `tool-mailbutler-ai-${Date.now()}`,
    name: 'Mailbutler AI',
    slug: 'mailbutler-ai',
    tagline: 'Smart AI email assistant integrated directly inside Apple Mail, Outlook, and Gmail.',
    description: 'Mailbutler integrates AI Smart Assistant features into Apple Mail, Microsoft Outlook, and Gmail, helping professionals write emails, extract tasks and contacts, and summarize long threads.',
    websiteUrl: 'https://mailbutler.io',
    priceModel: 'Freemium',
    category_id: 'c7',
    additionalCategories: ['ai-email-productivity', 'productivity'],
    tags: ['Email Assistant', 'Inbox Management', 'Outlook Extension', 'Gmail Copilot'],
    status: 'Published',
    featured: false,
    views: 1120,
    rating: 4.7
  },

  // Document Readers & Summarizers
  {
    id: `tool-humata-ai-${Date.now() + 1}`,
    name: 'Humata AI',
    slug: 'humata-ai',
    tagline: 'ChatGPT for your files with instant citations, document synthesis, and question answering.',
    description: 'Humata AI lets users upload scientific papers, legal contracts, and technical manuals to ask questions and receive instant answers grounded in precise document page citations.',
    websiteUrl: 'https://humata.ai',
    priceModel: 'Freemium',
    category_id: 'c7',
    additionalCategories: ['ai-document-readers-summarizers', 'productivity'],
    tags: ['PDF Chat', 'Document Analysis', 'Legal Tech', 'Academic Research'],
    status: 'Published',
    featured: true,
    views: 2950,
    rating: 4.8
  },
  {
    id: `tool-sharly-ai-${Date.now() + 2}`,
    name: 'Sharly AI',
    slug: 'sharly-ai',
    tagline: 'Chat with any document, PDF, Word doc, or spreadsheet with bulleted takeaways and citation links.',
    description: 'Sharly AI transforms complex reports, research papers, and eBooks into interactive knowledge conversations with verified citation quotes and section overviews.',
    websiteUrl: 'https://sharly.ai',
    priceModel: 'Freemium',
    category_id: 'c7',
    additionalCategories: ['ai-document-readers-summarizers', 'productivity'],
    tags: ['Document Reader', 'Summarizer', 'PDF Assistant', 'Knowledge Extraction'],
    status: 'Published',
    featured: false,
    views: 1240,
    rating: 4.6
  },
  {
    id: `tool-pdfgear-ai-${Date.now() + 3}`,
    name: 'PDFgear Copilot',
    slug: 'pdfgear-ai',
    tagline: 'Free desktop and mobile PDF editor with integrated AI copilot for natural language document actions.',
    description: 'PDFgear incorporates an AI chatbot copilot that enables natural language commands to summarize chapters, rewrite paragraphs, extract tables, and convert PDF formats completely free.',
    websiteUrl: 'https://pdfgear.com',
    priceModel: 'Free',
    category_id: 'c7',
    additionalCategories: ['ai-document-readers-summarizers', 'productivity'],
    tags: ['Free PDF Tool', 'PDF Copilot', 'Document Editor', 'Local AI'],
    status: 'Published',
    featured: false,
    views: 1820,
    rating: 4.7
  },
  {
    id: `tool-coral-ai-${Date.now() + 4}`,
    name: 'Coral AI',
    slug: 'coral-ai',
    tagline: 'AI PDF summarizer and document chat engineered for researchers, students, and analysts.',
    description: 'Coral AI provides fast multi-page PDF processing with page-exact source referencing, automatic glossary generation, and document comparison tools.',
    websiteUrl: 'https://coralai.io',
    priceModel: 'Freemium',
    category_id: 'c7',
    additionalCategories: ['ai-document-readers-summarizers', 'productivity'],
    tags: ['PDF Summarizer', 'Research Assistant', 'Page Citations', 'Document Reader'],
    status: 'Published',
    featured: false,
    views: 940,
    rating: 4.6
  }
];

// Append new tools only if their slug doesn't exist
for (const nt of newToolsToSeed) {
  if (!tools.some((t: any) => t.slug === nt.slug)) {
    tools.push(nt);
    console.log(`Seeded new tool "${nt.name}" (${nt.slug})`);
  } else {
    const existing = tools.find((t: any) => t.slug === nt.slug);
    existing.additionalCategories = existing.additionalCategories || [];
    nt.additionalCategories.forEach(c => {
      if (!existing.additionalCategories.includes(c)) existing.additionalCategories.push(c);
    });
    console.log(`Updated existing tool "${existing.name}" (${existing.slug})`);
  }
}

fs.writeFileSync(toolsFilePath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`\nSuccessfully updated ${toolsFilePath}. Total tools count: ${tools.length}`);
