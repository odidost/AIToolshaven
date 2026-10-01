import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');
const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');

const tools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
const categories: any[] = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));

// Tagging Map: Map existing tool slugs in tools.json to their relevant subcategory slugs
const tagMap: Record<string, string[]> = {
  // Category 1: AI Writing Tools
  'ai-youtube-video-scripts': [
    'jasper',
    'copy-ai',
    'writesonic',
    'rytr'
  ],
  'ai-novel-fiction-writers': [
    'shortly-ai'
  ],

  // Category 2: AI Image Generators
  'ai-product-photography': [
    'pixelbin-ai'
  ],
  'ai-vector-svg-generators': [
    'kittl-ai'
  ],
  'ai-image-upscalers': [
    'pixelcut-ai'
  ],

  // Category 3: AI Video Generators
  'ai-faceless-video-makers': [
    'runway-gen-3',
    'pictory'
  ],
  'ai-talking-avatars': [
    'hedra-character-studio'
  ],

  // Category 4: Coding Assistants
  'ai-app-builders-vibe-coding': [
    'cursor',
    'windsurf',
    'cline',
    'claude-engineer',
    'windsurf-codeium'
  ],
  'ai-code-review-security': [
    'codescene',
    'bito-ai'
  ],
  'ai-figma-to-code': [
    'builder-io'
  ],

  // Category 5: Marketing & Sales
  'ai-cold-email-outreach': [
    'salesloft',
    'outreach-io-ai'
  ],
  'ai-autonomous-sdrs': [
    'relevance-ai',
    'cognism'
  ],
  'ai-brand-voice-governance': [
    'copy-ai'
  ],

  // Category 6: Productivity
  'ai-calendar-scheduling': [
    'routine-ai',
    'motion-calendar'
  ],
  'ai-note-taking-knowledge': [
    'craft-docs-ai',
    'saner-ai'
  ],
  'ai-project-management': [
    'linear'
  ],
  'ai-document-readers-summarizers': [
    'scispace'
  ],

  // Category 7: Audio & Voice
  'ai-voice-cloning': [
    'coqui',
    'respeecher',
    'voice-ai',
    'kits-ai',
    'weights-gg',
    'dupdub'
  ],
  'ai-podcast-editors': [
    'castmagic',
    'podsqueeze',
    'deciphr-ai'
  ],
  'ai-text-to-speech-readers': [
    'wellsaid-labs',
    'speechgen',
    'narakeet',
    'fakeyou',
    'topmediai-voice'
  ],
  'ai-audio-noise-removers': [
    'adobe-podcast',
    'auphonic-audio'
  ],

  // Category 8: AI Chatbots
  'ai-internal-knowledge-bots': [
    'wonderchat-ai',
    'slite-knowledge-copilot'
  ],
  'ai-whatsapp-omnichannel-bots': [
    'tars-chatbot-studio',
    'smartloop-bot-builder',
    'koreai-experience'
  ],

  // Category 9: AI Agents
  'ai-autonomous-task-agents': [
    'agentops',
    'phidata-agents',
    'swarms-ai',
    'turing-ai-agents'
  ],
  'ai-multi-agent-frameworks': [
    'swarms-ai',
    'magentic-one',
    'llamaindex-workflows',
    'haystack-by-deepset'
  ],
  'ai-browser-automation-agents': [
    'browse-ai'
  ],
  'ai-workflow-automation-agents': [
    'make-ai'
  ],

  // Category 10: AI SEO Tools
  'ai-seo-content-optimizers': [
    'koala-sh',
    'scalenut',
    'outranking'
  ],
  'ai-programmatic-seo-builders': [
    'koala-sh'
  ],

  // Category 11: AI Sales Tools
  'ai-sales-call-intelligence': [
    'chorus-ai-by-zoominfo',
    'avoma'
  ],
  'ai-b2b-lead-enrichment': [
    'zoominfo-copilot',
    'seamless-ai',
    'wiza',
    'leadfeeder',
    'ocean-io'
  ],
  'ai-crm-auto-updating': [
    'hubspot-ai',
    'breakcold-crm'
  ],
  'ai-sales-objection-coaches': [
    'lavender-ai'
  ],

  // Category 12: AI Social Media Tools
  'ai-linkedin-post-generators': [
    'taplio'
  ],
  'ai-social-media-schedulers': [
    'sprout-social',
    'socialbee',
    'coschedule',
    'vista-social',
    'hootsuite-owlywriter'
  ],
  'ai-instagram-tiktok-captions': [
    'feedfinity',
    'lately-ai',
    'copy-ai'
  ],
  'ai-social-listening-analytics': [
    'meltwater-social-ai'
  ],

  // Category 14: AI Resume Builders
  'ai-resume-bullet-optimizers': [
    'skillroads'
  ]
};

// Tag existing tools
let taggedCount = 0;
for (const tool of tools) {
  const slug = (tool.slug || '').toLowerCase();
  for (const [subcatSlug, slugsToMatch] of Object.entries(tagMap)) {
    if (slugsToMatch.map(s => s.toLowerCase()).includes(slug)) {
      tool.additionalCategories = tool.additionalCategories || [];
      if (!tool.additionalCategories.includes(subcatSlug)) {
        tool.additionalCategories.push(subcatSlug);
        taggedCount++;
      }
    }
  }
}

console.log(`Tagged ${taggedCount} tool references.`);

// Calculate subcategory tool counts & update categories.json
const subcats = categories.filter((c: any) => c.parentId);
const subcatCounts: Record<string, number> = {};

let under10List: { slug: string; count: number; name: string }[] = [];

for (const sub of subcats) {
  const matchCount = tools.filter((t: any) => {
    const cats = [
      t.category,
      t.category_id,
      t.categorySlug,
      ...(t.additionalCategories || [])
    ].filter(Boolean).map((x: string) => x.toLowerCase());
    return cats.includes(sub.slug.toLowerCase()) || cats.includes(sub.id.toLowerCase());
  }).length;

  subcatCounts[sub.slug] = matchCount;
  sub.count = matchCount;

  if (matchCount < 10) {
    under10List.push({ slug: sub.slug, count: matchCount, name: sub.name });
  }
}

// Write back updated tools.json and categories.json
fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
fs.writeFileSync(categoriesJsonPath, JSON.stringify(categories, null, 2), 'utf8');

console.log(`\n=== Verification Results ===`);
console.log(`Total subcategories evaluated: ${subcats.length}`);
if (under10List.length === 0) {
  console.log(`🎉 ALL ${subcats.length} SUBCATEGORIES HAVE AT LEAST 10 LEGIT TOOLS! 🎉`);
} else {
  console.log(`⚠️ ${under10List.length} subcategories still have fewer than 10 tools:`);
  for (const u of under10List) {
    console.log(`  - ${u.slug} (${u.name}): ${u.count} tools`);
  }
}
