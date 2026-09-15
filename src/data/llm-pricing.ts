export const PRICING_LAST_UPDATED = 'September 15, 2026';
export const PRICING_DATE_LABEL = 'September 2026';

export interface LLMModel {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Anthropic' | 'Google' | 'DeepSeek' | 'Meta' | 'Mistral' | 'Cohere';
  contextWindow: number; // e.g. 1000000
  inputPerMillion: number; // USD per 1M tokens
  cachedInputPerMillion: number; // USD per 1M cached tokens
  outputPerMillion: number; // USD per 1M tokens
  supportsBatch: boolean;
  batchDiscountPercentage?: number; // default 50%
  category: 'frontier' | 'reasoning' | 'fast' | 'coding' | 'open-weight';
  bestHost?: string; // e.g. 'OpenRouter', 'Groq', 'DeepInfra', 'Official'
  hostSpeedTokensPerSec?: number;
  affiliateUrl?: string;
  isPopular?: boolean;
  notes?: string;
}

export const LLM_MODELS: LLMModel[] = [
  // ==================== OpenAI (Current Generation) ====================
  {
    id: 'gpt-6-astra',
    name: 'OpenAI GPT-6 Astra',
    provider: 'OpenAI',
    contextWindow: 1050000,
    inputPerMillion: 10.00,
    cachedInputPerMillion: 5.00,
    outputPerMillion: 50.00,
    supportsBatch: true,
    category: 'frontier',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/openai/gpt-6-astra',
    notes: 'Flagship multimodal frontier model with next-gen agentic synthesis and 1M context.'
  },
  {
    id: 'openai-o3',
    name: 'OpenAI o3',
    provider: 'OpenAI',
    contextWindow: 200000,
    inputPerMillion: 2.00,
    cachedInputPerMillion: 1.00,
    outputPerMillion: 8.00,
    supportsBatch: true,
    category: 'reasoning',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/openai/o3',
    notes: 'Full deep reasoning model for competitive programming, advanced science, and math.'
  },
  {
    id: 'openai-o4-mini',
    name: 'OpenAI o4 Mini',
    provider: 'OpenAI',
    contextWindow: 200000,
    inputPerMillion: 1.10,
    cachedInputPerMillion: 0.55,
    outputPerMillion: 4.40,
    supportsBatch: true,
    category: 'reasoning',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/openai/o4-mini',
    notes: 'Cost-effective high-speed reasoning model tailored for math and coding agents.'
  },
  {
    id: 'gpt-5-4-mini',
    name: 'OpenAI GPT-5.4 Mini',
    provider: 'OpenAI',
    contextWindow: 400000,
    inputPerMillion: 0.75,
    cachedInputPerMillion: 0.375,
    outputPerMillion: 4.50,
    supportsBatch: true,
    category: 'fast',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/openai/gpt-5.4-mini',
    notes: 'Ultra-fast production workhorse with 400k context for customer bots and RAG.'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o (Omni)',
    provider: 'OpenAI',
    contextWindow: 128000,
    inputPerMillion: 2.50,
    cachedInputPerMillion: 1.25,
    outputPerMillion: 10.00,
    supportsBatch: true,
    category: 'frontier',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/openai/gpt-4o',
    notes: 'Baseline multimodal workhorse for high-concurrency production deployments.'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    contextWindow: 128000,
    inputPerMillion: 0.15,
    cachedInputPerMillion: 0.075,
    outputPerMillion: 0.60,
    supportsBatch: true,
    category: 'fast',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/openai/gpt-4o-mini',
    notes: 'High-efficiency budget model for classifications and lightweight summaries.'
  },

  // ==================== Anthropic Claude (Current Generation) ====================
  {
    id: 'claude-sonnet-5',
    name: 'Claude Sonnet 5',
    provider: 'Anthropic',
    contextWindow: 1000000,
    inputPerMillion: 2.00,
    cachedInputPerMillion: 0.20, // 90% prompt cache discount
    outputPerMillion: 10.00,
    supportsBatch: true,
    category: 'frontier',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/anthropic/claude-sonnet-5',
    notes: 'Top-tier code generation and complex agentic workflows with 1M context.'
  },
  {
    id: 'claude-opus-5',
    name: 'Claude Opus 5',
    provider: 'Anthropic',
    contextWindow: 1000000,
    inputPerMillion: 5.00,
    cachedInputPerMillion: 0.50,
    outputPerMillion: 25.00,
    supportsBatch: true,
    category: 'frontier',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/anthropic/claude-opus-5',
    notes: 'Maximum capability frontier reasoning, deep synthesis, and enterprise auditing.'
  },
  {
    id: 'claude-fable-5-1',
    name: 'Claude Fable 5.1',
    provider: 'Anthropic',
    contextWindow: 1000000,
    inputPerMillion: 10.00,
    cachedInputPerMillion: 1.00,
    outputPerMillion: 50.00,
    supportsBatch: true,
    category: 'reasoning',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/anthropic/claude-fable-5.1',
    notes: 'Anthropic flagship reasoning architecture for high-stakes research.'
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    contextWindow: 200000,
    inputPerMillion: 3.00,
    cachedInputPerMillion: 0.30,
    outputPerMillion: 15.00,
    supportsBatch: true,
    category: 'coding',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/anthropic/claude-3.5-sonnet',
    notes: 'Benchmark software engineering and UI design synthesis model.'
  },
  {
    id: 'claude-haiku-4-5',
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    contextWindow: 200000,
    inputPerMillion: 1.00,
    cachedInputPerMillion: 0.10,
    outputPerMillion: 5.00,
    supportsBatch: true,
    category: 'fast',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/anthropic/claude-haiku-4.5',
    notes: 'Rapid response time with exceptional instruction adherence.'
  },

  // ==================== Google Gemini (Current Generation) ====================
  {
    id: 'gemini-3-8-flash',
    name: 'Gemini 3.8 Flash',
    provider: 'Google',
    contextWindow: 1048576,
    inputPerMillion: 0.75,
    cachedInputPerMillion: 0.1875,
    outputPerMillion: 3.75,
    supportsBatch: true,
    category: 'frontier',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/google/gemini-3.8-flash',
    notes: 'State-of-the-art multimodal reasoning with 1M context and real-time execution.'
  },
  {
    id: 'gemini-3-5-flash',
    name: 'Gemini 3.5 Flash',
    provider: 'Google',
    contextWindow: 1048576,
    inputPerMillion: 1.50,
    cachedInputPerMillion: 0.375,
    outputPerMillion: 9.00,
    supportsBatch: true,
    category: 'fast',
    isPopular: true,
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/google/gemini-3.5-flash',
    notes: 'High-throughput enterprise workhorse model with native audio & video processing.'
  },
  {
    id: 'gemini-3-5-flash-lite',
    name: 'Gemini 3.5 Flash Lite',
    provider: 'Google',
    contextWindow: 1048576,
    inputPerMillion: 0.30,
    cachedInputPerMillion: 0.075,
    outputPerMillion: 2.50,
    supportsBatch: true,
    category: 'fast',
    bestHost: 'OpenRouter',
    affiliateUrl: 'https://openrouter.ai/models/google/gemini-3.5-flash-lite',
    notes: 'Ultra-low cost high-speed classifier and parser with 1M context.'
  },
  {
    id: 'gemini-3-1-pro-preview',
    name: 'Gemini 3.1 Pro Preview',
    provider: 'Google',
    contextWindow: 1048576,
    inputPerMillion: 2.00,
    cachedInputPerMillion: 0.50,
    outputPerMillion: 12.00,
    supportsBatch: true,
    category: 'frontier',
    bestHost: 'Google AI Studio',
    notes: 'Frontier reasoning engine with advanced tool-use and multi-turn planning.'
  },

  // ==================== DeepSeek ====================
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    contextWindow: 163840,
    inputPerMillion: 0.26,
    cachedInputPerMillion: 0.07,
    outputPerMillion: 1.03,
    supportsBatch: false,
    category: 'frontier',
    isPopular: true,
    bestHost: 'DeepInfra',
    hostSpeedTokensPerSec: 160,
    affiliateUrl: 'https://openrouter.ai/models/deepseek/deepseek-chat',
    notes: '671B MoE model rivaling top closed models at ~1/10th the token cost.'
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    contextWindow: 64000,
    inputPerMillion: 0.70,
    cachedInputPerMillion: 0.175,
    outputPerMillion: 2.50,
    supportsBatch: false,
    category: 'reasoning',
    isPopular: true,
    bestHost: 'Together AI',
    hostSpeedTokensPerSec: 90,
    affiliateUrl: 'https://openrouter.ai/models/deepseek/deepseek-r1',
    notes: 'Open-weights reasoning model with chain-of-thought verification.'
  },

  // ==================== Meta Llama & Open-Weights ====================
  {
    id: 'llama-3-3-70b',
    name: 'Llama 3.3 70B Instruct',
    provider: 'Meta',
    contextWindow: 131072,
    inputPerMillion: 0.10,
    cachedInputPerMillion: 0.05,
    outputPerMillion: 0.32,
    supportsBatch: false,
    category: 'open-weight',
    isPopular: true,
    bestHost: 'Groq',
    hostSpeedTokensPerSec: 320,
    affiliateUrl: 'https://openrouter.ai/models/meta-llama/llama-3.3-70b-instruct',
    notes: 'High-speed open weight standard running up to 320 tokens/sec on LPUs.'
  },
  {
    id: 'llama-3-1-8b',
    name: 'Llama 3.1 8B Instruct',
    provider: 'Meta',
    contextWindow: 131072,
    inputPerMillion: 0.05,
    cachedInputPerMillion: 0.02,
    outputPerMillion: 0.08,
    supportsBatch: false,
    category: 'fast',
    bestHost: 'Groq',
    hostSpeedTokensPerSec: 750,
    affiliateUrl: 'https://openrouter.ai/models/meta-llama/llama-3.1-8b-instruct',
    notes: 'Lightweight edge model for real-time applications and classifications.'
  }
];

export interface UseCasePreset {
  id: string;
  name: string;
  description: string;
  dailyRequests: number;
  inputTokens: number;
  outputTokens: number;
  cacheHitRate: number; // 0 to 1
}

export const USE_CASE_PRESETS: UseCasePreset[] = [
  {
    id: 'customer-support-bot',
    name: '🤖 AI Customer Support Bot',
    description: 'Handles incoming customer inquiries with knowledge-base context and concise answers.',
    dailyRequests: 5000,
    inputTokens: 1200,
    outputTokens: 250,
    cacheHitRate: 0.60
  },
  {
    id: 'rag-document-search',
    name: '📚 RAG & Long-Doc Analysis',
    description: 'Ingests deep context chunks and synthesizes research summaries across documents.',
    dailyRequests: 2000,
    inputTokens: 12000,
    outputTokens: 800,
    cacheHitRate: 0.50
  },
  {
    id: 'code-assistant',
    name: '💻 AI Code Assistant / Copilot',
    description: 'Ingests active project context, repository files, and prompts for code completions.',
    dailyRequests: 1000,
    inputTokens: 5000,
    outputTokens: 1500,
    cacheHitRate: 0.70
  },
  {
    id: 'agentic-workflow',
    name: '⚡ Multi-Step Agentic Workflow',
    description: 'Autonomous tool-calling agents running recursive loops with heavy state accumulation.',
    dailyRequests: 300,
    inputTokens: 24000,
    outputTokens: 3500,
    cacheHitRate: 0.50
  },
  {
    id: 'lightweight-classifier',
    name: '🏷️ High-Volume Classifier',
    description: 'Ultra-fast parsing of inbound emails, support tickets, or sentiment scoring.',
    dailyRequests: 25000,
    inputTokens: 500,
    outputTokens: 100,
    cacheHitRate: 0.20
  }
];
