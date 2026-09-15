/**
 * Synchronization script for LLM pricing.
 * Run via: npx tsx scripts/sync-llm-prices.ts
 *
 * Queries OpenRouter's live public endpoint (https://openrouter.ai/api/v1/models)
 * and audits/updates pricing across current models.
 */

import * as fs from 'fs';
import * as path from 'path';

interface OpenRouterModel {
  id: string;
  name: string;
  context_length: number;
  pricing?: {
    prompt: string;
    completion: string;
  };
}

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/models';

const MODEL_MAPPING: Record<string, string> = {
  // OpenAI current generation
  'gpt-6-astra': 'openai/gpt-6-astra',
  'openai-o3': 'openai/o3',
  'openai-o4-mini': 'openai/o4-mini',
  'gpt-5-4-mini': 'openai/gpt-5.4-mini',
  'gpt-4o': 'openai/gpt-4o',
  'gpt-4o-mini': 'openai/gpt-4o-mini',

  // Anthropic current generation
  'claude-sonnet-5': 'anthropic/claude-sonnet-5',
  'claude-opus-5': 'anthropic/claude-opus-5',
  'claude-fable-5-1': 'anthropic/claude-fable-5.1',
  'claude-3-5-sonnet': 'anthropic/claude-sonnet-4.5',
  'claude-haiku-4-5': 'anthropic/claude-haiku-4.5',

  // Google Gemini current generation
  'gemini-3-8-flash': 'google/gemini-3.8-flash',
  'gemini-3-5-flash': 'google/gemini-3.5-flash',
  'gemini-3-5-flash-lite': 'google/gemini-3.5-flash-lite',
  'gemini-3-1-pro-preview': 'google/gemini-3.1-pro-preview',

  // DeepSeek & Open Weights
  'deepseek-v3': 'deepseek/deepseek-chat',
  'deepseek-r1': 'deepseek/deepseek-r1',
  'llama-3-3-70b': 'meta-llama/llama-3.3-70b-instruct',
  'llama-3-1-8b': 'meta-llama/llama-3.1-8b-instruct'
};

async function syncPrices() {
  console.log('🔄 Fetching latest model pricing from OpenRouter...');
  
  try {
    const response = await fetch(OPENROUTER_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch OpenRouter models: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const modelsList: OpenRouterModel[] = data.data || [];
    console.log(`✅ Retrieved ${modelsList.length} models from OpenRouter.`);

    const modelsMap = new Map<string, OpenRouterModel>();
    for (const m of modelsList) {
      modelsMap.set(m.id, m);
    }

    const report: Array<{
      id: string;
      openRouterId: string;
      inputPerMillion: number;
      outputPerMillion: number;
      contextLength: number;
    }> = [];

    for (const [localId, openRouterId] of Object.entries(MODEL_MAPPING)) {
      const live = modelsMap.get(openRouterId);
      if (live && live.pricing) {
        const inputPerM = parseFloat(live.pricing.prompt) * 1_000_000;
        const outputPerM = parseFloat(live.pricing.completion) * 1_000_000;
        report.push({
          id: localId,
          openRouterId,
          inputPerMillion: Number(inputPerM.toFixed(4)),
          outputPerMillion: Number(outputPerM.toFixed(4)),
          contextLength: live.context_length
        });
      } else {
        console.warn(`⚠️ Model ${openRouterId} (${localId}) not found in live response.`);
      }
    }

    console.log('\n📊 Live Model Pricing Audit:');
    console.table(report);

    const syncLogPath = path.join(__dirname, '../data/pricing-sync-report.json');
    fs.mkdirSync(path.dirname(syncLogPath), { recursive: true });
    fs.writeFileSync(syncLogPath, JSON.stringify(report, null, 2));
    console.log(`\n💾 Saved pricing audit report to: ${syncLogPath}`);
    console.log('🎉 Price sync completed successfully.');

  } catch (error) {
    console.error('❌ Error syncing pricing:', error);
    process.exit(1);
  }
}

syncPrices();
