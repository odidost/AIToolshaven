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

// 1. Tag ai-voice-cloning
addCategoryToTool(t => t.slug === 'elevenlabs' || t.id === 'elevenlabs', 'ai-voice-cloning');
addCategoryToTool(t => t.slug === 'resemble-ai' || t.id === 'resemble-ai', 'ai-voice-cloning');
addCategoryToTool(t => t.slug === 'descript' || t.id === 'descript', 'ai-voice-cloning');
addCategoryToTool(t => t.slug === 'playht-studio' || t.id === '8dac5ede-7afb-487b-8280-1b4a80babf59', 'ai-voice-cloning');
addCategoryToTool(t => t.slug === 'speechify' || t.id === 'e977fd25-b692-41e6-9adc-4083092fed07', 'ai-voice-cloning');

// 2. Tag ai-podcast-editors
addCategoryToTool(t => t.slug === 'adobe-podcast' || t.id === '09226b6c-d73d-4001-af64-c08b3b13fd58', 'ai-podcast-editors');
addCategoryToTool(t => t.slug === 'podcastle' || t.id === '48ceb160-7fa9-44c7-9f24-c2b0db28df5a', 'ai-podcast-editors');
addCategoryToTool(t => t.slug === 'cleanvoice-ai' || t.id === '53136468-258f-4548-8e5e-61d3a956a7c2', 'ai-podcast-editors');
addCategoryToTool(t => t.slug === 'auphonic-audio' || t.id === '8cce9596-d7fd-4080-8556-52938d4ad9b4', 'ai-podcast-editors');

// 3. Tag ai-music-song-generators
addCategoryToTool(t => t.slug === 'suno' || t.id === 'suno', 'ai-music-song-generators');
addCategoryToTool(t => t.slug === 'udio-ai' || t.id === '7686a123-95ad-425c-913d-0ccf79f8f575', 'ai-music-song-generators');
addCategoryToTool(t => t.slug === 'soundraw-music' || t.id === '985abcc7-5d91-4a35-8630-012969f8ed49', 'ai-music-song-generators');
addCategoryToTool(t => t.slug === 'beatoven-ai' || t.id === 'ca9eb785-9826-4ba6-9091-926d51f6bbe7', 'ai-music-song-generators');
addCategoryToTool(t => t.slug === 'mubert-ai' || t.id === 'a0c06ece-d92f-4b9c-a1ef-084872c60e17', 'ai-music-song-generators');

// 4. Tag ai-text-to-speech-readers
addCategoryToTool(t => t.slug === 'naturalreader-ai' || t.id === 'e4a64339-cb74-432a-aa33-edc8535aa4cb', 'ai-text-to-speech-readers');
addCategoryToTool(t => t.slug === 'murf-ai' || t.id === '07e45f21-0a5a-46db-b360-f1d191a1230d', 'ai-text-to-speech-readers');
addCategoryToTool(t => t.slug === 'readspeaker-voice-ai' || t.id === 'tool-1786835405889-5qj09rm', 'ai-text-to-speech-readers');
addCategoryToTool(t => t.slug === 'voicemaker' || t.id === 'c4b6f008-15b4-409b-8f24-b74a00e0fcd9', 'ai-text-to-speech-readers');
addCategoryToTool(t => t.slug === 'elevenlabs-reader' || t.id === 'dcc32abd-610b-46cd-adc7-4b3a33d71cca', 'ai-text-to-speech-readers');

// 5. Tag ai-audio-noise-removers
addCategoryToTool(t => t.slug === 'krisp' || t.id === '53707db4-9780-4d2d-9894-e39f7fc188e4', 'ai-audio-noise-removers');
addCategoryToTool(t => t.slug === 'voice-ai' || t.id === 'b35156e6-8b72-4924-af06-793b8eefaf03', 'ai-audio-noise-removers');
addCategoryToTool(t => t.slug === 'lalal-ai' || t.id === 'e8222da0-2e7d-4044-aff6-2a1e10080848', 'ai-audio-noise-removers');
addCategoryToTool(t => t.slug === 'cleanvoice-ai' || t.id === '53136468-258f-4548-8e5e-61d3a956a7c2', 'ai-audio-noise-removers');
addCategoryToTool(t => t.slug === 'audo-studio' || t.id === '93a8492e-a74f-424c-86a9-0318cd3d7d6b', 'ai-audio-noise-removers');

// Seed Riverside for Podcast Editors
const newToolsToSeed = [
  {
    id: `tool-riverside-fm-${Date.now()}`,
    name: 'Riverside.fm AI',
    slug: 'riverside-fm',
    tagline: 'Studio-quality remote podcast recording with AI transcription, text-based editing, and Magic Clips.',
    description: 'Riverside records lossless local 4K video and uncompressed audio tracks for remote podcast guests, with an integrated AI editor that generates short social clips, chapters, and show notes in seconds.',
    websiteUrl: 'https://riverside.fm',
    priceModel: 'Freemium',
    category_id: 'c4',
    additionalCategories: ['ai-podcast-editors', 'audio-voice'],
    tags: ['Podcast Recording', 'Audio Mastering', 'Remote Studio', 'Magic Clips'],
    status: 'Published',
    featured: true,
    views: 3120,
    rating: 4.9
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
