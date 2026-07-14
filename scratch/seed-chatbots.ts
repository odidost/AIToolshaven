import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

import * as crypto from 'crypto';

async function seed() {
  console.log('Seeding AI Chatbots category...');
  const { data: category, error: catError } = await supabase.from('categories').upsert({
    id: crypto.randomUUID(),
    name: 'AI Chatbots',
    slug: 'ai-chatbots',
    description: 'The best conversational AI agents, LLM assistants, and virtual companions.',
    icon: 'smart_toy',
    count: 20
  }, { onConflict: 'slug' }).select('id').single();

  if (catError) {
    console.error('Error inserting category:', catError);
    return;
  }

  const catId = category?.id;
  
  if (!catId) {
      console.error('Could not get category ID');
      return;
  }

  console.log(`Category ID: ${catId}`);

  const chatbots = [
    { name: 'ChatGPT', slug: 'chatgpt', company: 'OpenAI', tagline: 'The most capable AI chat model.', description: 'ChatGPT is a conversational AI model by OpenAI.', price_model: 'Freemium', rating: 4.9, review_count: 50000, logo_url: 'https://logo.clearbit.com/openai.com', image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995', category_id: catId, popularity: 100, verified: true, tags: ['LLM', 'Assistant', 'Chat'] },
    { name: 'Claude', slug: 'claude', company: 'Anthropic', tagline: 'Next-generation AI assistant.', description: 'Claude is an AI assistant developed by Anthropic, focused on safety.', price_model: 'Freemium', rating: 4.8, review_count: 25000, logo_url: 'https://logo.clearbit.com/anthropic.com', image_url: 'https://images.unsplash.com/photo-1684495376510-1845f94b8e23', category_id: catId, popularity: 95, verified: true, tags: ['LLM', 'Assistant', 'Safe'] },
    { name: 'Gemini', slug: 'gemini', company: 'Google', tagline: 'Google\'s largest and most capable AI.', description: 'Gemini is Google\'s next-generation multimodal AI.', price_model: 'Freemium', rating: 4.7, review_count: 30000, logo_url: 'https://logo.clearbit.com/google.com', image_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095', category_id: catId, popularity: 98, verified: true, tags: ['LLM', 'Multimodal', 'Chat'] },
    { name: 'Perplexity AI', slug: 'perplexity-ai', company: 'Perplexity', tagline: 'Where knowledge begins.', description: 'Perplexity AI is a conversational search engine that answers queries using language models.', price_model: 'Freemium', rating: 4.8, review_count: 15000, logo_url: 'https://logo.clearbit.com/perplexity.ai', image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', category_id: catId, popularity: 90, verified: true, tags: ['Search', 'Assistant', 'Research'] },
    { name: 'Pi', slug: 'pi', company: 'Inflection AI', tagline: 'Your personal AI.', description: 'Pi is designed to be a kind and supportive companion.', price_model: 'Free', rating: 4.6, review_count: 8000, logo_url: 'https://logo.clearbit.com/inflection.ai', image_url: 'https://images.unsplash.com/photo-1616161560417-66d40653d4f4', category_id: catId, popularity: 85, verified: true, tags: ['Companion', 'Assistant'] },
    { name: 'Mistral Le Chat', slug: 'mistral-le-chat', company: 'Mistral AI', tagline: 'Open and powerful AI.', description: 'Le Chat is Mistral AI\'s conversational interface.', price_model: 'Freemium', rating: 4.7, review_count: 12000, logo_url: 'https://logo.clearbit.com/mistral.ai', image_url: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f', category_id: catId, popularity: 88, verified: true, tags: ['LLM', 'European', 'Chat'] },
    { name: 'Copilot', slug: 'copilot', company: 'Microsoft', tagline: 'Your everyday AI companion.', description: 'Microsoft Copilot integrates AI into Windows and web searching.', price_model: 'Freemium', rating: 4.7, review_count: 40000, logo_url: 'https://logo.clearbit.com/microsoft.com', image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475', category_id: catId, popularity: 96, verified: true, tags: ['Assistant', 'Search', 'Windows'] },
    { name: 'Character.ai', slug: 'character-ai', company: 'Character.ai', tagline: 'Chat with AI characters.', description: 'Create and chat with user-created AI personalities.', price_model: 'Freemium', rating: 4.5, review_count: 50000, logo_url: 'https://logo.clearbit.com/character.ai', image_url: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5', category_id: catId, popularity: 92, verified: true, tags: ['Entertainment', 'Roleplay', 'Chat'] },
    { name: 'Poe', slug: 'poe', company: 'Quora', tagline: 'Fast, helpful AI chat.', description: 'Poe lets you ask questions, get instant answers, and have back-and-forth conversations with several AI bots.', price_model: 'Freemium', rating: 4.6, review_count: 10000, logo_url: 'https://logo.clearbit.com/quora.com', image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', category_id: catId, popularity: 86, verified: true, tags: ['Aggregator', 'Assistant', 'Chat'] },
    { name: 'Grok', slug: 'grok', company: 'xAI', tagline: 'AI with a rebellious streak.', description: 'Grok is an AI modeled after the Hitchhiker\'s Guide to the Galaxy.', price_model: 'Paid', rating: 4.4, review_count: 5000, logo_url: 'https://logo.clearbit.com/x.ai', image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485', category_id: catId, popularity: 82, verified: true, tags: ['LLM', 'Humor', 'Real-time'] },
    { name: 'Jasper Chat', slug: 'jasper-chat', company: 'Jasper', tagline: 'AI for marketing teams.', description: 'A conversational AI interface designed specifically for marketers.', price_model: 'Paid', rating: 4.5, review_count: 8000, logo_url: 'https://logo.clearbit.com/jasper.ai', image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', category_id: catId, popularity: 80, verified: true, tags: ['Marketing', 'Writing', 'Business'] },
    { name: 'Replika', slug: 'replika', company: 'Luka', tagline: 'The AI companion who cares.', description: 'An AI companion that listens, talks, and grows with you.', price_model: 'Freemium', rating: 4.3, review_count: 60000, logo_url: 'https://logo.clearbit.com/replika.com', image_url: 'https://images.unsplash.com/photo-1531746790731-6c08c26322d1', category_id: catId, popularity: 88, verified: true, tags: ['Companion', 'Mental Health'] },
    { name: 'HuggingChat', slug: 'huggingchat', company: 'Hugging Face', tagline: 'Open source AI chat.', description: 'An open-source alternative to ChatGPT, powered by various open models.', price_model: 'Free', rating: 4.5, review_count: 4000, logo_url: 'https://logo.clearbit.com/huggingface.co', image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485', category_id: catId, popularity: 75, verified: true, tags: ['Open Source', 'LLM', 'Developer'] },
    { name: 'YouChat', slug: 'youchat', company: 'You.com', tagline: 'AI search engine and chatbot.', description: 'A conversational interface integrated into the You.com search engine.', price_model: 'Freemium', rating: 4.4, review_count: 3500, logo_url: 'https://logo.clearbit.com/you.com', image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', category_id: catId, popularity: 78, verified: true, tags: ['Search', 'Assistant'] },
    { name: 'Chatsonic', slug: 'chatsonic', company: 'Writesonic', tagline: 'Like ChatGPT, but with real-time data.', description: 'A conversational AI that accesses the internet in real-time.', price_model: 'Freemium', rating: 4.6, review_count: 6000, logo_url: 'https://logo.clearbit.com/writesonic.com', image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', category_id: catId, popularity: 81, verified: true, tags: ['Writing', 'Real-time', 'Marketing'] },
    { name: 'Phind', slug: 'phind', company: 'Phind', tagline: 'The AI search engine for developers.', description: 'A chatbot designed specifically to answer coding and development questions.', price_model: 'Freemium', rating: 4.8, review_count: 2500, logo_url: 'https://logo.clearbit.com/phind.com', image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c', category_id: catId, popularity: 77, verified: true, tags: ['Coding', 'Developer', 'Search'] },
    { name: 'Ora.sh', slug: 'ora-sh', company: 'Ora', tagline: 'Build and share AI chatbots.', description: 'A platform that allows you to create customized AI chatbots with just a prompt.', price_model: 'Freemium', rating: 4.3, review_count: 1500, logo_url: 'https://logo.clearbit.com/ora.sh', image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475', category_id: catId, popularity: 70, verified: true, tags: ['Builder', 'Custom', 'Platform'] },
    { name: 'Nomi', slug: 'nomi', company: 'Nomi AI', tagline: 'AI with emotional intelligence.', description: 'An emotionally intelligent AI companion for deep, meaningful conversations.', price_model: 'Freemium', rating: 4.7, review_count: 4500, logo_url: 'https://logo.clearbit.com/nomi.ai', image_url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', category_id: catId, popularity: 74, verified: true, tags: ['Companion', 'Emotional', 'Roleplay'] },
    { name: 'Jan', slug: 'jan', company: 'Jan AI', tagline: 'Run AI locally.', description: 'An open-source ChatGPT alternative that runs completely offline on your computer.', price_model: 'Free', rating: 4.8, review_count: 3000, logo_url: 'https://logo.clearbit.com/jan.ai', image_url: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769', category_id: catId, popularity: 79, verified: true, tags: ['Local', 'Privacy', 'Open Source'] },
    { name: 'Llama 3', slug: 'llama-3', company: 'Meta', tagline: 'Openly available foundation models.', description: 'Meta\'s highly capable series of open-weights language models.', price_model: 'Free', rating: 4.9, review_count: 10000, logo_url: 'https://logo.clearbit.com/meta.com', image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485', category_id: catId, popularity: 94, verified: true, tags: ['Open Weights', 'Foundation Model', 'Developer'] }
  ];

  const chatbotsWithIds = chatbots.map(bot => ({ ...bot, id: crypto.randomUUID() }));

  console.log(`Inserting ${chatbotsWithIds.length} tools...`);
  const { error: toolsError } = await supabase.from('tools').upsert(chatbotsWithIds, { onConflict: 'slug' });
  
  if (toolsError) {
    console.error('Error inserting tools:', toolsError);
  } else {
    console.log('Successfully seeded AI Chatbots category and tools!');
  }
}

seed();
