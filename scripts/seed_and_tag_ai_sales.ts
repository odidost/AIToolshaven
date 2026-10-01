import fs from 'fs';
import path from 'path';

const toolsFilePath = path.join(process.cwd(), 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// 1. Tag existing tools
const mappings: Record<string, string[]> = {
  // Call Intelligence & Conversation Analytics
  'gong': ['ai-sales-call-intelligence'],
  'chorus-ai': ['ai-sales-call-intelligence'],
  'salesroom': ['ai-sales-call-intelligence'],
  'attention-ai': ['ai-sales-call-intelligence'],
  'fireflies': ['ai-sales-call-intelligence'],

  // Lead Enrichment & B2B Intent Data
  'apollo': ['ai-b2b-lead-enrichment'],
  'clay-ai': ['ai-b2b-lead-enrichment'],
  'cognism': ['ai-b2b-lead-enrichment'],
  'lusha': ['ai-b2b-lead-enrichment'],
  'clearbit': ['ai-b2b-lead-enrichment'],
  'uplead-ai': ['ai-b2b-lead-enrichment'],

  // CRM Auto Updating & Pipeline Automation
  'scratchpad': ['ai-crm-auto-updating'],
  'clari': ['ai-crm-auto-updating'],
  'close-crm-ai': ['ai-crm-auto-updating'],
  'folk-crm': ['ai-crm-auto-updating'],
  'dropcontact-crm-clean': ['ai-crm-auto-updating'],

  // Objection Handling & Sales Coaches
  'lavender': ['ai-sales-objection-coaches'],
  'humantic-ai': ['ai-sales-objection-coaches'],

  // Proposal & CPQ
  'loopio': ['ai-cpq-proposal-generators'],
};

for (const tool of tools) {
  const targetSubcats = mappings[tool.slug] || mappings[tool.id];
  if (targetSubcats) {
    tool.additionalCategories = Array.from(new Set([...(tool.additionalCategories || []), ...targetSubcats]));
    if (tool.publishedData) {
      tool.publishedData.additionalCategories = Array.from(new Set([...(tool.publishedData.additionalCategories || []), ...targetSubcats]));
    }
    if (tool.draftData) {
      tool.draftData.additionalCategories = Array.from(new Set([...(tool.draftData.additionalCategories || []), ...targetSubcats]));
    }
  }
}

// 2. Seed premier tools for Objection Handling Coaches & Proposal Generators
const newSalesTools = [
  {
    id: `tool-${Date.now()}-second-nature`,
    name: 'Second Nature AI',
    slug: 'second-nature-ai',
    company: 'Second Nature AI',
    tagline: 'AI sales role-play training and real-time conversation simulation.',
    description: 'Second Nature provides conversational AI avatars that act as realistic buyers to train sales reps on pitching, handling tough objections, and certification at scale.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-sales-objection-coaches'],
    priceModel: 'Enterprise',
    pricing: [{ plan: 'Enterprise', price: 'Custom', description: 'Bespoke avatar coaching modules' }],
    rating: 4.8,
    easeOfUse: 4.7,
    featureRating: 4.9,
    valueForMoney: 4.7,
    performance: 4.8,
    support: 4.7,
    reviewCount: 38,
    websiteUrl: 'https://secondnature.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Sales Coaching', 'Role Play', 'Objection Handling', 'AI Simulation'],
    features: [
      { title: 'Interactive AI Buyer Avatars', description: 'Realistic voice-and-video avatars test reps on value propositions and competitor counters.' },
      { title: 'Automated Scoring & Certifications', description: 'Objective scorecards grade pitch completeness and active listening.' },
      { title: 'Personalized Coaching Feedback', description: 'Pinpoints specific talk-tracks where reps struggled during roleplay.' }
    ],
    verified: true,
    popularity: 92,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-hyperbound`,
    name: 'Hyperbound',
    slug: 'hyperbound',
    company: 'Hyperbound Inc.',
    tagline: 'Simulated AI buyers to practice cold calling and handle live objections.',
    description: 'Hyperbound turns target buyer personas and LinkedIn profiles into interactive AI voice bots that cold callers can practice dialing against with realistic gatekeeper and prospect resistance.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-sales-objection-coaches'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Team', price: '$99/rep/mo', description: 'Unlimited simulation calls' }],
    rating: 4.9,
    easeOfUse: 4.8,
    featureRating: 4.9,
    valueForMoney: 4.8,
    performance: 4.9,
    support: 4.8,
    reviewCount: 42,
    websiteUrl: 'https://hyperbound.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Cold Calling', 'Objection Practice', 'Sales Training', 'Voice AI'],
    features: [
      { title: 'Dynamic Resistance Curves', description: 'Simulates hostile, skeptical, and friendly prospects dynamically.' },
      { title: 'Persona Import', description: 'Drop in ICP titles and company URLs to generate authentic buyer contexts.' },
      { title: 'Audio Call Playback', description: 'Listen back to recorded calls with timestamped feedback markers.' }
    ],
    verified: true,
    popularity: 94,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-yoodli-ai`,
    name: 'Yoodli AI',
    slug: 'yoodli-ai',
    company: 'Yoodli Inc.',
    tagline: 'Private AI speech coach for sales presentation and objection practice.',
    description: 'Yoodli gives sales professionals real-time feedback on filler words, pacing, body language, and monologue duration during pitches and customer demos.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-sales-objection-coaches'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: 'Basic speech coaching' }, { plan: 'Pro', price: '$20/mo', description: 'Advanced roleplay drills' }],
    rating: 4.8,
    easeOfUse: 4.9,
    featureRating: 4.8,
    valueForMoney: 4.9,
    performance: 4.8,
    support: 4.7,
    reviewCount: 65,
    websiteUrl: 'https://yoodli.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Speech Coach', 'Sales Pitch', 'Filler Words', 'Presentation AI'],
    features: [
      { title: 'Private & Real-Time', description: 'Zero pressure environment to hone answers before speaking to prospects.' },
      { title: 'Filler Word Detection', description: 'Real-time counters for ums, ahs, and repetitive crutch words.' },
      { title: 'Pacing & Cadence Optimization', description: 'Helps speakers maintain optimal words-per-minute engagement.' }
    ],
    verified: true,
    popularity: 95,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-pandadoc-ai`,
    name: 'PandaDoc AI',
    slug: 'pandadoc-ai',
    company: 'PandaDoc',
    tagline: 'AI proposal generator, contract intelligence, and e-signature workflow.',
    description: 'PandaDoc AI streamlines document creation, auto-populates pricing tables from CRM records, analyzes contract risks, and speeds up the entire proposal-to-close workflow.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-cpq-proposal-generators'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: 'Basic e-signing' }, { plan: 'Business', price: '$49/user/mo', description: 'Full AI proposal suite' }],
    rating: 4.8,
    easeOfUse: 4.8,
    featureRating: 4.9,
    valueForMoney: 4.7,
    performance: 4.8,
    support: 4.8,
    reviewCount: 110,
    websiteUrl: 'https://pandadoc.com',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Sales Proposals', 'E-Signature', 'Contract AI', 'CPQ'],
    features: [
      { title: 'AI Proposal Drafter', description: 'Generate custom executive summaries and scope-of-work sections in seconds.' },
      { title: 'Dynamic CPQ Pricing', description: 'Interactive tables that allow buyers to toggle options and recalculate totals.' },
      { title: 'Contract Clause Review', description: 'AI detects deviation from standard legal redlines and risk clauses.' }
    ],
    verified: true,
    popularity: 98,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-qwilr-ai`,
    name: 'Qwilr AI',
    slug: 'qwilr-ai',
    company: 'Qwilr Pty Ltd',
    tagline: 'Interactive web-based sales proposals and quotes with automated AI drafting.',
    description: 'Qwilr replaces boring static PDFs with interactive web pages that feature modular pricing calculators, video embeds, and AI-assisted copywriting designed to convert enterprise deals.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-cpq-proposal-generators'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Business', price: '$35/user/mo', description: 'Interactive proposals & payments' }],
    rating: 4.7,
    easeOfUse: 4.8,
    featureRating: 4.8,
    valueForMoney: 4.6,
    performance: 4.8,
    support: 4.7,
    reviewCount: 52,
    websiteUrl: 'https://qwilr.com',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Interactive Proposals', 'Quotes', 'Sales Enablement', 'CPQ'],
    features: [
      { title: 'Interactive Pricing Tables', description: 'Let prospective buyers select quantities, package tiers, and add-ons directly.' },
      { title: 'AI Copy Generation', description: 'Instantly generate compelling case studies and personalized proposal intros.' },
      { title: 'Real-Time Engagement Analytics', description: 'Receive instant notifications when prospects open, view, or forward proposals.' }
    ],
    verified: true,
    popularity: 93,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-dealhub-io`,
    name: 'DealHub.io',
    slug: 'dealhub-io',
    company: 'DealHub',
    tagline: 'Next-gen AI CPQ, digital sales rooms, and subscription contract management.',
    description: 'DealHub unites CPQ, CLM, and Digital Sales Rooms into a guided revenue orchestration platform that eliminates quote errors and shortens complex B2B sales cycles.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-cpq-proposal-generators'],
    priceModel: 'Enterprise',
    pricing: [{ plan: 'Enterprise', price: 'Custom', description: 'Full CPQ & DealRoom rollout' }],
    rating: 4.8,
    easeOfUse: 4.7,
    featureRating: 4.9,
    valueForMoney: 4.7,
    performance: 4.9,
    support: 4.8,
    reviewCount: 46,
    websiteUrl: 'https://dealhub.io',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['CPQ', 'Digital Sales Room', 'Subscription Billing', 'Contract Management'],
    features: [
      { title: 'Guided Selling Playbooks', description: 'Rules-based questions guide sales reps to the exact right product configuration.' },
      { title: 'Digital Sales Room', description: 'Single shared URL containing proposals, contracts, assets, and chat with buyers.' },
      { title: 'Approval Workflow Automation', description: 'Auto-routes non-standard discounts to sales managers and finance.' }
    ],
    verified: true,
    popularity: 94,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-proposify-ai`,
    name: 'Proposify AI',
    slug: 'proposify-ai',
    company: 'Proposify',
    tagline: 'AI proposal generation software with deal closing analytics.',
    description: 'Proposify gives sales teams control and visibility over their closing process with automated AI proposals, custom branding templates, and legally binding e-signatures.',
    category: 'AI Sales Tools',
    category_id: 'ai-sales-tools',
    categoryName: 'AI Sales Tools',
    categorySlug: 'ai-sales-tools',
    additionalCategories: ['ai-cpq-proposal-generators'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Team', price: '$49/user/mo', description: 'Unlimited proposals & metrics' }],
    rating: 4.6,
    easeOfUse: 4.7,
    featureRating: 4.7,
    valueForMoney: 4.6,
    performance: 4.7,
    support: 4.6,
    reviewCount: 58,
    websiteUrl: 'https://proposify.com',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Proposal Software', 'Sales Quotes', 'E-Signature', 'Deal Analytics'],
    features: [
      { title: 'Content Library Management', description: 'Stores approved case studies, bios, and pricing tables for quick assembly.' },
      { title: 'Automated Reminders', description: 'Pings buyers automatically before proposal expiration deadlines.' },
      { title: 'Granular Viewing Heatmaps', description: 'See which sections and pages your prospect spent the most time reading.' }
    ],
    verified: true,
    popularity: 91,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  }
];

for (const newTool of newSalesTools) {
  if (!tools.some((t: any) => t.slug === newTool.slug)) {
    tools.push(newTool);
  }
}

fs.writeFileSync(toolsFilePath, JSON.stringify(tools, null, 2), 'utf8');
console.log('Successfully updated tools.json with Sales tags and tools. Total tools:', tools.length);
