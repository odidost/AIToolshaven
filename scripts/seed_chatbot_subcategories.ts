import * as fs from 'fs';

const toolsFilePath = 'data/tools.json';
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// Helper to add additionalCategories cleanly
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

// 1. Tag ai-customer-support-bots
addCategoryToTool(t => t.slug === 'fin-by-intercom' || t.id === '53ae77eb-afa8-47ed-b330-c7802d892992', 'ai-customer-support-bots');
addCategoryToTool(t => t.slug === 'tidio-lyro-ai' || t.id === '90f12fe1-d50b-4595-abac-f8ccc27a6229', 'ai-customer-support-bots');
addCategoryToTool(t => t.slug === 'gorgias-ai-agent' || t.id === '31ae3f75-a69c-4d0b-8cef-fcb85365b3ce', 'ai-customer-support-bots');
addCategoryToTool(t => t.slug === 'ada-support-ai' || t.id === 'cca8e217-2359-4aa1-bab9-bcf93cfcece4', 'ai-customer-support-bots');
addCategoryToTool(t => t.slug === 'forethought-supportgpt' || t.id === 'f7acfbcd-725b-48fc-b404-aefcb3a4a7c3', 'ai-customer-support-bots');
addCategoryToTool(t => t.slug === 'kustomer-ai-chat' || t.id === 'af3fabe3-6319-4854-8218-e839891c8dab', 'ai-customer-support-bots');

// 2. Tag ai-internal-knowledge-bots
addCategoryToTool(t => t.slug === 'chatbase' || t.id === 'd8d1493a-0d29-4476-ad54-340874cb2870', 'ai-internal-knowledge-bots');
addCategoryToTool(t => t.slug === 'sitegpt' || t.id === '29a81f47-8126-4857-adf6-54f74183d6ab', 'ai-internal-knowledge-bots');
addCategoryToTool(t => t.slug === 'docsbot-ai' || t.id === '4401f345-f9e8-43ae-ac03-f667cb32a8d5', 'ai-internal-knowledge-bots');
addCategoryToTool(t => t.slug === 'customgpt' || t.id === '470c76a2-7955-4d90-8d24-bb3fdba62356', 'ai-internal-knowledge-bots');
addCategoryToTool(t => t.slug === 'ingestai' || t.id === '393d4e3b-c7b0-43c6-8885-8b75893abd5f', 'ai-internal-knowledge-bots');

// 3. Tag ai-whatsapp-omnichannel-bots
addCategoryToTool(t => t.slug === 'manychat-ai' || t.id === '4ec46316-a303-452d-b703-8b4f6db508d7', 'ai-whatsapp-omnichannel-bots');
addCategoryToTool(t => t.slug === 'landbot-ai' || t.id === '4383d5bb-ee53-4319-aa73-f129cbd11a0d', 'ai-whatsapp-omnichannel-bots');
addCategoryToTool(t => t.slug === 'botpress' || t.id === '3a36e559-c0a2-4857-a49e-edb63bc4d18c', 'ai-whatsapp-omnichannel-bots');
addCategoryToTool(t => t.slug === 'voiceflow' || t.id === 'f8ec990a-3ee7-41fd-8ba1-a9e20f2cd9c5', 'ai-whatsapp-omnichannel-bots');
addCategoryToTool(t => t.slug === 'yellow-ai-dynamic-automation' || t.id === '0329870e-01f9-466f-94f5-02cc171a7a1d', 'ai-whatsapp-omnichannel-bots');
addCategoryToTool(t => t.slug === 'botpenguin' || t.id === '8bb23d4d-badf-473f-9fd5-5098e8952609', 'ai-whatsapp-omnichannel-bots');

// 4. Tag ai-character-roleplay-chat
addCategoryToTool(t => t.slug === 'character-ai' || t.id === '7ff36c37-e7f7-44cd-a6f3-96319c5991c1', 'ai-character-roleplay-chat');
addCategoryToTool(t => t.slug === 'chai-chat' || t.id === 'bac07dbf-e671-4d1b-9894-32246b6104f9', 'ai-character-roleplay-chat');
addCategoryToTool(t => t.slug === 'replika' || t.id === '5d2cccb8-c00a-46f3-969f-3a38c4bb8641', 'ai-character-roleplay-chat');
addCategoryToTool(t => t.slug === 'nomi' || t.id === '9c9467a0-3ee8-4baf-b6a6-1c849a41e22d', 'ai-character-roleplay-chat');
addCategoryToTool(t => t.slug === 'anima-virtual-companion' || t.id === 'a0b89c7c-0eab-4195-8702-eaf3d05649f8', 'ai-character-roleplay-chat');
addCategoryToTool(t => t.slug === 'kuki-chatbot' || t.id === 'e446fb7a-6991-4302-9f55-c9317a2186bd', 'ai-character-roleplay-chat');

// 5. Tag ai-voice-receptionists
addCategoryToTool(t => t.slug === 'bland-ai-phone-agents' || t.id === '2ba5d2ea-0290-42a3-a6b5-b7ebcf077c88', 'ai-voice-receptionists');
addCategoryToTool(t => t.slug === 'vapi-voice-ai-agents' || t.id === 'tool-1786834973439-zk1gvl5', 'ai-voice-receptionists');

// New tools to seed
const newToolsToSeed = [
  // Enterprise Search Bot
  {
    id: `tool-glean-ai-${Date.now()}`,
    name: 'Glean AI',
    slug: 'glean-ai',
    tagline: 'The AI-powered work assistant and enterprise search engine across all company data.',
    description: 'Glean searches and connects across all corporate enterprise SaaS tools—Google Workspace, Slack, Jira, Salesforce, and GitHub—delivering accurate conversational answers grounded in company knowledge.',
    websiteUrl: 'https://glean.com',
    priceModel: 'Paid',
    category_id: 'b9c74436-f00a-41e0-aee9-6ab15d90d3ec',
    additionalCategories: ['ai-internal-knowledge-bots', 'ai-chatbots'],
    tags: ['Enterprise Search', 'Knowledge Assistant', 'Workplace Chatbot', 'SaaS Search'],
    status: 'Published',
    featured: true,
    views: 3450,
    rating: 4.9
  },

  // Voice Receptionists
  {
    id: `tool-retell-ai-${Date.now() + 1}`,
    name: 'Retell AI',
    slug: 'retell-ai',
    tagline: 'Ultra-realistic conversational voice API for building human-like phone agents with sub-800ms latency.',
    description: 'Retell AI provides developers and businesses with an ultra-responsive voice engine specifically built for conversational telephone agents, appointment scheduling, and automated call centers.',
    websiteUrl: 'https://retellai.com',
    priceModel: 'Paid',
    category_id: 'b9c74436-f00a-41e0-aee9-6ab15d90d3ec',
    additionalCategories: ['ai-voice-receptionists', 'ai-chatbots'],
    tags: ['Voice API', 'Phone Agent', 'Conversational AI', 'Call Center AI'],
    status: 'Published',
    featured: true,
    views: 2120,
    rating: 4.8
  },
  {
    id: `tool-synthflow-ai-${Date.now() + 2}`,
    name: 'Synthflow AI',
    slug: 'synthflow-ai',
    tagline: 'No-code conversational AI voice assistant builder for real-time inbound and outbound phone calls.',
    description: 'Synthflow allows non-technical business owners and agencies to deploy sophisticated conversational voice agents for dentist offices, home service dispatch, and inbound customer reception in minutes.',
    websiteUrl: 'https://synthflow.ai',
    priceModel: 'Paid',
    category_id: 'b9c74436-f00a-41e0-aee9-6ab15d90d3ec',
    additionalCategories: ['ai-voice-receptionists', 'ai-chatbots'],
    tags: ['No-Code Voice', 'Phone Receptionist', 'Automated Calling', 'Virtual Assistant'],
    status: 'Published',
    featured: false,
    views: 1650,
    rating: 4.7
  },
  {
    id: `tool-air-ai-${Date.now() + 3}`,
    name: 'Air AI',
    slug: 'air-ai',
    tagline: 'Autonomous AI telemarketer and customer service rep capable of 5-40 minute phone calls.',
    description: 'Air AI performs full, human-length 5 to 40 minute phone calls over the telephone, handling complex sales objections and booking appointments straight into CRM pipelines.',
    websiteUrl: 'https://air.ai',
    priceModel: 'Paid',
    category_id: 'b9c74436-f00a-41e0-aee9-6ab15d90d3ec',
    additionalCategories: ['ai-voice-receptionists', 'ai-chatbots'],
    tags: ['Autonomous Caller', 'Sales Calls', 'Phone Bot', 'Outbound AI'],
    status: 'Published',
    featured: false,
    views: 1980,
    rating: 4.6
  }
];

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
