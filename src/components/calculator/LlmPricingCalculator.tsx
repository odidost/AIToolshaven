"use client";

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { LLMModel, LLM_MODELS, PRICING_LAST_UPDATED } from '@/data/llm-pricing';
import { 
  TrendingDown, 
  ArrowRight, 
  Share2, 
  Check, 
  ChevronDown, 
  Settings, 
  Info,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

export type CalculationType = 'prompt' | 'app' | 'agent';

// App workload categories with realistic behind-the-scenes token defaults
const APP_WORKLOAD_PROFILES: Record<string, { label: string; icon: string; promptTokens: number; outputTokens: number }> = {
  chat: { label: 'Chat & Support', icon: '💬', promptTokens: 600, outputTokens: 200 },
  writing: { label: 'Writing & Marketing', icon: '✍️', promptTokens: 1200, outputTokens: 600 },
  coding: { label: 'Coding & Copilot', icon: '💻', promptTokens: 3500, outputTokens: 1000 },
  research: { label: 'Research & Search', icon: '🔎', promptTokens: 4500, outputTokens: 800 },
  documents: { label: 'Documents & Summaries', icon: '📄', promptTokens: 8000, outputTokens: 900 },
  creative: { label: 'Creative & Brainstorming', icon: '🎨', promptTokens: 800, outputTokens: 500 },
  other: { label: 'Other', icon: '⚡', promptTokens: 1000, outputTokens: 350 }
};

// -------------------------------------------------------------
// USER-FRIENDLY FORMATTERS (No NaNs, No Inf, Clear readability)
// -------------------------------------------------------------
function formatCurrency(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '$0.00';
  if (n < 0.0001) return `$${n.toFixed(6)}`;
  if (n < 0.01) return `$${n.toFixed(4)}`;
  if (n >= 1000) return `$${Math.round(n).toLocaleString('en-US')}`;
  return `$${n.toFixed(2)}`;
}

function formatMicroCost(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '$0.0000';
  if (n < 0.00001) return `$${n.toFixed(6)}`;
  if (n < 0.001) return `$${n.toFixed(4)}`;
  if (n < 0.05) return `$${n.toFixed(4)}`;
  return `$${n.toFixed(3)}`;
}

export function LlmPricingCalculator() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 1. Primary Choice: What are you calculating?
  const rawTab = searchParams.get('tab') || 'prompt';
  const initialType: CalculationType = rawTab === 'app' ? 'app' : rawTab === 'agent' ? 'agent' : 'prompt';
  const [calcType, setCalcType] = useState<CalculationType>(initialType);

  // 2. A Prompt state
  const [promptText, setPromptText] = useState<string>(
    "Explain quantum computing principles, superposition, and practical cryptography applications in plain English."
  );

  // 3. AI App state
  const [monthlyActiveUsers, setMonthlyActiveUsers] = useState<number>(
    searchParams.get('users') ? Number(searchParams.get('users')) : 1000
  );
  const [requestsPerUserMonth, setRequestsPerUserMonth] = useState<number>(
    searchParams.get('rpu') ? Number(searchParams.get('rpu')) : 10
  );
  const [appCategory, setAppCategory] = useState<string>('chat');
  const [subscriptionPriceInput, setSubscriptionPriceInput] = useState<string>(
    searchParams.get('price') || '29'
  );

  // 4. AI Agent state
  const [agentTasksPerDay, setAgentTasksPerDay] = useState<number>(
    searchParams.get('tasks') ? Number(searchParams.get('tasks')) : 1000
  );
  const [agentComplexity, setAgentComplexity] = useState<'simple' | 'moderate' | 'complex'>('moderate');

  // Model Selection
  const [selectedModelId, setSelectedModelId] = useState<string>(
    searchParams.get('model') || 'claude-sonnet-5'
  );

  // Advanced Technical Controls (Progressively revealed)
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [showFullTable, setShowFullTable] = useState<boolean>(false);
  const [showTokenDetails, setShowTokenDetails] = useState<boolean>(false);
  const [cacheHitRate, setCacheHitRate] = useState<number>(
    searchParams.get('cache') ? Number(searchParams.get('cache')) : 0
  );
  const [useBatchApi, setUseBatchApi] = useState<boolean>(
    searchParams.get('batch') === 'true'
  );
  const [manualInputTokens, setManualInputTokens] = useState<number | null>(null);
  const [manualOutputTokens, setManualOutputTokens] = useState<number | null>(null);

  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // URL Sync Helper
  const updateUrlParams = useCallback((newParams: Record<string, string | number | boolean>) => {
    if (typeof window === 'undefined') return;
    const sp = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([k, v]) => {
      sp.set(k, String(v));
    });
    const newUrl = `${pathname}?${sp.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }, [pathname]);

  const handleCopyShareLink = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  // -------------------------------------------------------------
  // UNDER-THE-HOOD TOKEN & WORKLOAD NORMALIZER
  // -------------------------------------------------------------
  const workload = useMemo(() => {
    let input = 0;
    let output = 0;
    let totalMonthlyRequests = 100;
    let words = 0;

    if (calcType === 'prompt') {
      const trimmed = promptText.trim();
      if (trimmed.length > 0) {
        words = trimmed.split(/\s+/).filter(Boolean).length;
        // Plain English token rule: ~4 chars or 0.75 words per token
        input = Math.max(1, Math.ceil(trimmed.length / 4) || Math.ceil(words / 0.75));
        // Realistic response generation assumption: ~1.5x of input or at least 120 tokens
        output = Math.max(120, Math.min(2000, Math.ceil(input * 1.5)));
      } else {
        words = 0;
        input = 0;
        output = 0;
      }
      totalMonthlyRequests = 100; // Baseline monthly multiplier for prompt preview
    } else if (calcType === 'app') {
      const profile = APP_WORKLOAD_PROFILES[appCategory] || APP_WORKLOAD_PROFILES.chat;
      input = profile.promptTokens;
      output = profile.outputTokens;
      words = Math.round(input * 0.75);
      const safeUsers = Math.max(1, monthlyActiveUsers || 1);
      const safeRpu = Math.max(1, requestsPerUserMonth || 1);
      totalMonthlyRequests = safeUsers * safeRpu;
    } else if (calcType === 'agent') {
      const steps = agentComplexity === 'simple' ? 2 : agentComplexity === 'moderate' ? 4 : 8;
      input = 2000;
      output = 500;
      words = Math.round(input * 0.75);
      const safeTasks = Math.max(1, agentTasksPerDay || 1);
      totalMonthlyRequests = safeTasks * 30 * steps;
    }

    // Allow advanced manual override if explicitly provided by developer
    if (manualInputTokens !== null) input = Math.max(0, manualInputTokens);
    if (manualOutputTokens !== null) output = Math.max(0, manualOutputTokens);

    return {
      inputTokens: input,
      outputTokens: output,
      totalTokens: input + output,
      monthlyRequests: totalMonthlyRequests,
      wordCount: words,
      isEmpty: calcType === 'prompt' && promptText.trim().length === 0,
    };
  }, [
    calcType,
    promptText,
    appCategory,
    monthlyActiveUsers,
    requestsPerUserMonth,
    agentTasksPerDay,
    agentComplexity,
    manualInputTokens,
    manualOutputTokens
  ]);

  // Active Selected Model
  const selectedModel = useMemo(() => {
    return LLM_MODELS.find(m => m.id === selectedModelId) || LLM_MODELS[0];
  }, [selectedModelId]);

  // Context window check
  const exceedsContextWindow = useMemo(() => {
    return workload.totalTokens > selectedModel.contextWindow;
  }, [workload.totalTokens, selectedModel.contextWindow]);

  // -------------------------------------------------------------
  // CORE CALCULATION ENGINE
  // Formula:
  // Input Cost = (regular_tokens * inputPrice + cached_tokens * cachedPrice)
  // Output Cost = output_tokens * outputPrice
  // Total Cost = Input Cost + Output Cost
  // -------------------------------------------------------------
  const calculateCostForModel = useCallback((model: LLMModel) => {
    if (workload.totalTokens === 0) {
      return {
        costPerRequest: 0,
        costPer100: 0,
        costPer1000: 0,
        costPerTask: 0,
        dailyCost: 0,
        monthlyCost: 0,
        annualCost: 0,
      };
    }

    const batchMultiplier = (useBatchApi && model.supportsBatch) ? 0.5 : 1.0;
    const cacheRateDecimal = Math.max(0, Math.min(0.95, cacheHitRate / 100));

    const standardInput = workload.inputTokens * (1 - cacheRateDecimal);
    const cachedTokens = workload.inputTokens * cacheRateDecimal;

    const singleInputCost = (
      (standardInput / 1_000_000) * model.inputPerMillion +
      (cachedTokens / 1_000_000) * model.cachedInputPerMillion
    ) * batchMultiplier;

    const singleOutputCost = (
      (workload.outputTokens / 1_000_000) * model.outputPerMillion
    ) * batchMultiplier;

    const costPerRequest = singleInputCost + singleOutputCost;

    // Agent steps calculation
    const agentSteps = agentComplexity === 'simple' ? 2 : agentComplexity === 'moderate' ? 4 : 8;
    const costPerTask = costPerRequest * agentSteps;
    const dailyCost = calcType === 'agent' 
      ? costPerTask * Math.max(1, agentTasksPerDay || 1)
      : (costPerRequest * workload.monthlyRequests) / 30;

    const monthlyCost = calcType === 'agent'
      ? dailyCost * 30
      : costPerRequest * workload.monthlyRequests;

    const annualCost = monthlyCost * 12;

    return {
      costPerRequest,
      costPer100: costPerRequest * 100,
      costPer1000: costPerRequest * 1000,
      costPerTask,
      dailyCost,
      monthlyCost,
      annualCost,
    };
  }, [workload, cacheHitRate, useBatchApi, calcType, agentComplexity, agentTasksPerDay]);

  // Selected Model Calculations
  const currentResult = useMemo(() => {
    return calculateCostForModel(selectedModel);
  }, [selectedModel, calculateCostForModel]);

  // -------------------------------------------------------------
  // TOP 3 CURATED OPTIONS (Genuinely Different Decision Tiers)
  // -------------------------------------------------------------
  const curatedOptions = useMemo(() => {
    // 🏆 Best Value: Lowest estimated cost among popular workhorse models
    const bestValueModel = LLM_MODELS.find(m => m.id === 'gemini-3-5-flash-lite') 
      || LLM_MODELS.find(m => m.id === 'deepseek-v3') 
      || LLM_MODELS.find(m => m.id === 'llama-3-3-70b')
      || LLM_MODELS[0];
    
    // ⭐ Best Balance: Strong capability at reasonable cost
    const bestBalanceModel = LLM_MODELS.find(m => m.id === 'claude-sonnet-5') 
      || LLM_MODELS.find(m => m.id === 'gemini-3-8-flash') 
      || LLM_MODELS[1];
    
    // 🚀 Highest Capability: Frontier tier for demanding workloads
    const highestCapModel = LLM_MODELS.find(m => m.id === 'gpt-6-astra') 
      || LLM_MODELS.find(m => m.id === 'claude-opus-5') 
      || LLM_MODELS[2];

    return [
      {
        badge: '🏆 Best Value',
        model: bestValueModel,
        explanation: 'Lowest estimated cost for this workload.',
        ...calculateCostForModel(bestValueModel)
      },
      {
        badge: '⭐ Best Balance',
        model: bestBalanceModel,
        explanation: 'Strong capability at a reasonable cost.',
        ...calculateCostForModel(bestBalanceModel)
      },
      {
        badge: '🚀 Highest Capability',
        model: highestCapModel,
        explanation: 'Designed for more demanding workloads.',
        ...calculateCostForModel(highestCapModel)
      },
    ];
  }, [calculateCostForModel]);

  // -------------------------------------------------------------
  // HONEST COST SAVINGS OPTIMIZER
  // -------------------------------------------------------------
  const optimizerData = useMemo(() => {
    // Calculate costs across all models for user's actual workload
    const allCalculations = LLM_MODELS.map(m => ({
      model: m,
      ...calculateCostForModel(m)
    })).sort((a, b) => a.monthlyCost - b.monthlyCost);

    // Find cheaper models
    const cheaperAlternatives = allCalculations.filter(
      item => item.model.id !== selectedModel.id && item.monthlyCost < currentResult.monthlyCost
    );

    if (cheaperAlternatives.length === 0) {
      // User is already on the lowest-cost model!
      return {
        isAlreadyCheapest: true,
        currentModel: selectedModel,
        currentMonthly: currentResult.monthlyCost,
        alternativeModel: null,
        alternativeMonthly: 0,
        monthlySaving: 0,
        pctSaving: 0,
      };
    }

    // Intelligently select best alternative:
    // If on a top-tier model, suggest a high-value alternative rather than an extreme edge model
    let bestAlternative = cheaperAlternatives[0];
    if (selectedModel.category === 'frontier' || selectedModel.category === 'reasoning') {
      const balancedAlt = cheaperAlternatives.find(a => 
        a.model.id === 'claude-sonnet-5' || 
        a.model.id === 'gemini-3-8-flash' || 
        a.model.id === 'deepseek-v3'
      );
      if (balancedAlt) bestAlternative = balancedAlt;
    }

    const monthlySaving = Math.max(0, currentResult.monthlyCost - bestAlternative.monthlyCost);
    const pctSaving = currentResult.monthlyCost > 0
      ? Number(((monthlySaving / currentResult.monthlyCost) * 100).toFixed(1))
      : 0;

    return {
      isAlreadyCheapest: false,
      currentModel: selectedModel,
      currentMonthly: currentResult.monthlyCost,
      alternativeModel: bestAlternative.model,
      alternativeMonthly: bestAlternative.monthlyCost,
      monthlySaving,
      pctSaving,
    };
  }, [selectedModel, currentResult.monthlyCost, calculateCostForModel]);

  // Subscription economics calculation (Optional for AI App)
  const subscriptionPriceNum = parseFloat(subscriptionPriceInput);
  const hasValidSubscription = Number.isFinite(subscriptionPriceNum) && subscriptionPriceNum > 0;
  const monthlyRevenue = hasValidSubscription ? (monthlyActiveUsers * subscriptionPriceNum) : 0;
  const aiCostPctOfRevenue = (monthlyRevenue > 0 && currentResult.monthlyCost > 0)
    ? Math.min(100, Number(((currentResult.monthlyCost / monthlyRevenue) * 100).toFixed(1)))
    : null;
  const grossMarginAfterAi = aiCostPctOfRevenue !== null
    ? Math.max(0, Number((100 - aiCostPctOfRevenue).toFixed(1)))
    : null;

  return (
    <div className="w-full space-y-10">
      {/* ============================================================= */}
      {/* 1. PRIMARY CHOICE: "What are you calculating?"                */}
      {/* ============================================================= */}
      <div className="space-y-3">
        <h2 className="text-sm font-black uppercase tracking-wider text-on-surface-variant">
          What are you calculating?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Card 1: A Prompt */}
          <button
            type="button"
            onClick={() => {
              setCalcType('prompt');
              updateUrlParams({ tab: 'prompt' });
            }}
            className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
              calcType === 'prompt'
                ? 'bg-surface border-primary ring-2 ring-primary/25 shadow-md'
                : 'bg-surface border-border hover:border-primary/40 hover:bg-surface-secondary/50'
            }`}
          >
            <div>
              <div className="text-2xl mb-2">✨</div>
              <h3 className="text-base font-bold text-foreground">A Prompt</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Paste a prompt or text and see what it costs.
              </p>
            </div>
            {calcType === 'prompt' && (
              <span className="text-[10px] font-bold text-primary mt-3 flex items-center">
                Active Selection <Check className="w-3 h-3 ml-1" />
              </span>
            )}
          </button>

          {/* Card 2: An AI App */}
          <button
            type="button"
            onClick={() => {
              setCalcType('app');
              updateUrlParams({ tab: 'app' });
            }}
            className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
              calcType === 'app'
                ? 'bg-surface border-primary ring-2 ring-primary/25 shadow-md'
                : 'bg-surface border-border hover:border-primary/40 hover:bg-surface-secondary/50'
            }`}
          >
            <div>
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="text-base font-bold text-foreground">An AI App</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Estimate the cost of running an AI product or chatbot.
              </p>
            </div>
            {calcType === 'app' && (
              <span className="text-[10px] font-bold text-primary mt-3 flex items-center">
                Active Selection <Check className="w-3 h-3 ml-1" />
              </span>
            )}
          </button>

          {/* Card 3: An AI Agent */}
          <button
            type="button"
            onClick={() => {
              setCalcType('agent');
              updateUrlParams({ tab: 'agent' });
            }}
            className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
              calcType === 'agent'
                ? 'bg-surface border-primary ring-2 ring-primary/25 shadow-md'
                : 'bg-surface border-border hover:border-primary/40 hover:bg-surface-secondary/50'
            }`}
          >
            <div>
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="text-base font-bold text-foreground">An AI Agent</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Estimate the cost of a multi-step AI workflow.
              </p>
            </div>
            {calcType === 'agent' && (
              <span className="text-[10px] font-bold text-primary mt-3 flex items-center">
                Active Selection <Check className="w-3 h-3 ml-1" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. USER INPUTS (Plain English, No Jargon)                    */}
      {/* ============================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-xs space-y-6">
        {/* MODE A: A PROMPT (Default Experience) */}
        {calcType === 'prompt' && (
          <div className="space-y-3">
            <label htmlFor="prompt-textarea" className="block text-base font-bold text-foreground">
              Paste your prompt or text
            </label>
            <textarea
              id="prompt-textarea"
              rows={4}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Paste a prompt, question, email, article, or any text here..."
              className="w-full bg-surface-elevated border border-border rounded-2xl p-4 text-base sm:text-sm text-foreground focus:outline-none focus:border-primary transition-all shadow-2xs leading-relaxed placeholder:text-on-surface-variant/60"
            />
            <div className="flex items-center justify-between text-xs text-on-surface-variant pt-1">
              <span className="font-semibold text-foreground">
                {workload.isEmpty ? (
                  <span className="text-on-surface-variant font-normal">0 words · ~0 tokens (estimated)</span>
                ) : (
                  <span>{workload.wordCount.toLocaleString()} words · ~{workload.inputTokens.toLocaleString()} tokens (estimated)</span>
                )}
              </span>
              <button
                type="button"
                onClick={handleCopyShareLink}
                className="inline-flex items-center space-x-1 text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                title="Copy shareable link with current configuration"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied' : 'Share Estimate'}</span>
              </button>
            </div>
          </div>
        )}

        {/* MODE B: AN AI APP */}
        {calcType === 'app' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-foreground">
              About your app
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="app-users-input" className="block text-xs font-semibold text-on-surface-variant">
                  How many people use your app each month?
                </label>
                <div className="relative">
                  <input
                    id="app-users-input"
                    type="number"
                    min="1"
                    value={monthlyActiveUsers}
                    onChange={(e) => {
                      const val = Math.max(1, Number(e.target.value) || 1);
                      setMonthlyActiveUsers(val);
                      updateUrlParams({ users: val });
                    }}
                    className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                  />
                  <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">users</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="app-frequency-input" className="block text-xs font-semibold text-on-surface-variant">
                  How often does each person use the AI?
                </label>
                <div className="relative">
                  <input
                    id="app-frequency-input"
                    type="number"
                    min="1"
                    value={requestsPerUserMonth}
                    onChange={(e) => {
                      const val = Math.max(1, Number(e.target.value) || 1);
                      setRequestsPerUserMonth(val);
                      updateUrlParams({ rpu: val });
                    }}
                    className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                  />
                  <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">requests / month</span>
                </div>
              </div>
            </div>

            {/* App Category Chips */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-on-surface-variant">
                What does your app mainly do?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {Object.entries(APP_WORKLOAD_PROFILES).map(([key, profile]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setAppCategory(key)}
                    className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-center flex flex-col items-center justify-center space-y-1 cursor-pointer ${
                      appCategory === key
                        ? 'bg-primary/10 border-primary text-primary font-bold shadow-2xs'
                        : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                    }`}
                  >
                    <span className="text-base">{profile.icon}</span>
                    <span className="truncate w-full">{profile.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Subscription Pricing */}
            <div className="pt-2 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <label htmlFor="subscription-price-input" className="text-xs font-semibold text-foreground">
                    Your subscription price <span className="text-on-surface-variant font-normal">(optional)</span>
                  </label>
                  <p className="text-[11px] text-on-surface-variant">
                    Enter your SaaS pricing to forecast AI cost as a percentage of revenue.
                  </p>
                </div>
                <div className="relative w-full sm:w-44 shrink-0">
                  <span className="absolute left-3 top-2.5 text-xs text-on-surface-variant font-bold">$</span>
                  <input
                    id="subscription-price-input"
                    type="number"
                    min="0"
                    placeholder="29"
                    value={subscriptionPriceInput}
                    onChange={(e) => {
                      setSubscriptionPriceInput(e.target.value);
                      updateUrlParams({ price: e.target.value });
                    }}
                    className="w-full bg-surface-elevated border border-border rounded-xl pl-7 pr-16 py-2 text-xs font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                  />
                  <span className="absolute right-3 top-2.5 text-[11px] text-on-surface-variant font-medium">/ user / mo</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE C: AN AI AGENT */}
        {calcType === 'agent' && (
          <div className="space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="agent-tasks-input" className="block text-sm font-bold text-foreground">
                How many tasks does your agent complete?
              </label>
              <div className="relative max-w-sm">
                <input
                  id="agent-tasks-input"
                  type="number"
                  min="1"
                  value={agentTasksPerDay}
                  onChange={(e) => {
                    const val = Math.max(1, Number(e.target.value) || 1);
                    setAgentTasksPerDay(val);
                    updateUrlParams({ tasks: val });
                  }}
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                />
                <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">tasks / day</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-foreground">
                How complicated are these tasks?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'simple', title: 'Simple', desc: '1–2 AI steps' },
                  { id: 'moderate', title: 'Moderate', desc: '3–5 AI steps' },
                  { id: 'complex', title: 'Complex', desc: '6–10+ AI steps' },
                ].map((tier) => (
                  <button
                    type="button"
                    key={tier.id}
                    onClick={() => setAgentComplexity(tier.id as 'simple' | 'moderate' | 'complex')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      agentComplexity === tier.id
                        ? 'bg-primary/10 border-primary ring-1 ring-primary text-primary font-bold shadow-2xs'
                        : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                    }`}
                  >
                    <div className="font-bold text-foreground text-sm">{tier.title}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODEL SELECTION & CONTEXT WARNING */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <label htmlFor="model-select" className="text-xs font-bold text-on-surface-variant shrink-0">
              Selected Model:
            </label>
            <select
              id="model-select"
              value={selectedModelId}
              onChange={(e) => {
                setSelectedModelId(e.target.value);
                updateUrlParams({ model: e.target.value });
              }}
              className="bg-surface-elevated border border-border rounded-xl px-3 py-1.5 text-xs font-bold text-foreground focus:outline-none focus:border-primary cursor-pointer shadow-2xs w-full sm:w-auto"
            >
              <optgroup label="Popular Models">
                <option value="gemini-3-8-flash">Gemini 3.8 Flash (Google)</option>
                <option value="claude-sonnet-5">Claude Sonnet 5 (Anthropic)</option>
                <option value="gpt-6-astra">OpenAI GPT-6 Astra (OpenAI)</option>
                <option value="deepseek-v3">DeepSeek V3 (DeepSeek)</option>
              </optgroup>
              <optgroup label="All Verified Models">
                {LLM_MODELS.map(m => (
                  <option key={m.id} value={m.id}>{m.name} ({m.provider})</option>
                ))}
              </optgroup>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setShowFullTable(prev => !prev)}
            className="text-xs font-bold text-primary hover:underline inline-flex items-center cursor-pointer"
          >
            <span>{showFullTable ? 'Hide model list' : 'Compare all models →'}</span>
          </button>
        </div>

        {/* Context Window Alert if Exceeded */}
        {exceedsContextWindow && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />
            <span>
              Workload (~{workload.totalTokens.toLocaleString()} tokens) exceeds {selectedModel.name}&apos;s context window ({(selectedModel.contextWindow / 1000).toLocaleString()}k tokens). Consider models with 1M+ context.
            </span>
          </div>
        )}
      </div>

      {/* ============================================================= */}
      {/* 3. PRIMARY RESULT: "How much will this cost?"                 */}
      {/* ============================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-primary/25 shadow-md space-y-4">
        {workload.isEmpty ? (
          <div className="text-center py-6 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-on-surface-variant block">
              Estimated Cost
            </span>
            <div className="text-4xl sm:text-5xl font-black text-foreground font-mono">
              $0.0000
            </div>
            <p className="text-sm text-on-surface-variant">
              Paste or type your text above to see estimated costs for {selectedModel.name}.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-on-surface-variant block mb-1">
                  Estimated Cost
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-black text-foreground font-mono tracking-tight">
                    {calcType === 'prompt' 
                      ? formatMicroCost(currentResult.costPerRequest)
                      : formatCurrency(currentResult.monthlyCost)
                    }
                  </span>
                  <span className="text-sm text-on-surface-variant font-medium">
                    {calcType === 'prompt' ? 'per request' : 'per month'}
                  </span>
                </div>
              </div>

              {/* Contextual volume scale */}
              <div className="flex flex-wrap gap-2 text-xs font-mono bg-surface-elevated p-3 rounded-2xl border border-border">
                {calcType === 'prompt' && (
                  <>
                    <span className="text-on-surface-variant">
                      100 requests &rarr; <strong className="text-foreground">{formatCurrency(currentResult.costPer100)}</strong>
                    </span>
                    <span className="text-on-surface-variant mx-1">·</span>
                    <span className="text-on-surface-variant">
                      1,000 requests &rarr; <strong className="text-foreground">{formatCurrency(currentResult.costPer1000)}</strong>
                    </span>
                  </>
                )}

                {calcType === 'app' && (
                  <>
                    <span className="text-on-surface-variant">
                      Per request: <strong className="text-foreground">{formatMicroCost(currentResult.costPerRequest)}</strong>
                    </span>
                    <span className="text-on-surface-variant mx-1">·</span>
                    <span className="text-on-surface-variant">
                      Annual cost: <strong className="text-foreground">{formatCurrency(currentResult.annualCost)}</strong>
                    </span>
                  </>
                )}

                {calcType === 'agent' && (
                  <>
                    <span className="text-on-surface-variant">
                      Per task: <strong className="text-foreground">{formatMicroCost(currentResult.costPerTask)}</strong>
                    </span>
                    <span className="text-on-surface-variant mx-1">·</span>
                    <span className="text-on-surface-variant">
                      Daily: <strong className="text-foreground">{formatCurrency(currentResult.dailyCost)}/day</strong>
                    </span>
                    <span className="text-on-surface-variant mx-1">·</span>
                    <span className="text-on-surface-variant">
                      Annual: <strong className="text-foreground">{formatCurrency(currentResult.annualCost)}/yr</strong>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Optional Gross Margin & Unit Economics for AI App */}
            {calcType === 'app' && (
              <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between text-xs text-on-surface-variant gap-2">
                <span>
                  Cost per user: <strong className="text-foreground">{formatCurrency(currentResult.monthlyCost / Math.max(1, monthlyActiveUsers || 1))} / month</strong>
                </span>
                {hasValidSubscription && grossMarginAfterAi !== null && (
                  <span>
                    Estimated Gross Margin at ${subscriptionPriceNum}/mo: <strong className="text-emerald-600 dark:text-emerald-400">
                      {grossMarginAfterAi}%
                    </strong>
                    <span className="text-[10px] text-on-surface-variant ml-1 font-sans">(AI inference spend: {aiCostPctOfRevenue}% of rev)</span>
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* ============================================================= */}
      {/* 4. YOUR BEST OPTIONS (Only 3 Curated Cards)                   */}
      {/* ============================================================= */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Your best options
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Compare three distinct model choices for this workload.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {curatedOptions.map((opt, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl bg-surface border transition-all flex flex-col justify-between space-y-4 ${
                selectedModel.id === opt.model.id
                  ? 'border-primary ring-1 ring-primary shadow-xs'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-primary block mb-1">
                  {opt.badge}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {opt.model.name}
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  {opt.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-base font-black text-foreground font-mono">
                    {formatCurrency(opt.costPer1000)}
                    <span className="text-[10px] text-on-surface-variant font-normal font-sans"> / 1,000 requests</span>
                  </div>
                  <div className="text-[10px] text-on-surface-variant font-mono">
                    {formatMicroCost(opt.costPerRequest)} per request
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedModelId(opt.model.id);
                    updateUrlParams({ model: opt.model.id });
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedModel.id === opt.model.id
                      ? 'bg-primary text-white'
                      : 'bg-surface-elevated border border-border text-foreground hover:bg-surface-secondary'
                  }`}
                >
                  {selectedModel.id === opt.model.id ? 'Selected' : 'Use this'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================= */}
      {/* 5. COST SAVINGS / OPTIMIZER: "Can you get this cheaper?"     */}
      {/* ============================================================= */}
      <div className="p-6 sm:p-7 rounded-3xl bg-surface border border-border shadow-xs space-y-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <TrendingDown className="w-4 h-4" />
            <span>Cost Optimizer</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Can you get this cheaper?
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Compare your current choice with lower-cost alternatives.
          </p>
        </div>

        {optimizerData.isAlreadyCheapest ? (
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center space-x-3 text-xs sm:text-sm text-foreground">
            <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold">You&apos;re already using one of the lowest-cost options for this workload.</span>
              <p className="text-on-surface-variant text-xs mt-0.5">
                At {formatCurrency(optimizerData.currentMonthly)}/month, {optimizerData.currentModel.name} delivers the most economical rate for this volume.
              </p>
            </div>
          </div>
        ) : optimizerData.alternativeModel && (
          <div className="p-5 rounded-2xl bg-surface-elevated/80 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div>
                <span className="text-[11px] font-semibold text-on-surface-variant block">Current model</span>
                <span className="text-sm font-bold text-foreground">{optimizerData.currentModel.name}</span>
                <div className="text-sm font-black font-mono text-on-surface-variant mt-0.5">
                  {formatCurrency(optimizerData.currentMonthly)}/month
                </div>
              </div>

              <div className="text-on-surface-variant hidden sm:block text-lg font-bold">&rarr;</div>

              <div>
                <span className="text-[11px] font-semibold text-primary block">Lower-cost alternative</span>
                <span className="text-sm font-bold text-foreground">{optimizerData.alternativeModel.name}</span>
                <div className="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {formatCurrency(optimizerData.alternativeMonthly)}/month
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-border justify-between sm:justify-end">
              <div>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant block">Potential saving</span>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                  {formatCurrency(optimizerData.monthlySaving)}/month
                  <span className="text-xs font-normal text-on-surface-variant ml-1 font-sans">({optimizerData.pctSaving}%)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (optimizerData.alternativeModel) {
                    setSelectedModelId(optimizerData.alternativeModel.id);
                    updateUrlParams({ model: optimizerData.alternativeModel.id });
                  }
                }}
                className="px-4 py-2 rounded-xl bg-primary hover:opacity-95 text-white font-bold text-xs transition-opacity cursor-pointer"
              >
                Use this model &rarr;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================= */}
      {/* 6. TOKEN ECONOMICS (Secondary educational disclosure)          */}
      {/* ============================================================= */}
      <div className="p-5 rounded-2xl bg-surface border border-border space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Info className="w-4 h-4 text-on-surface-variant" />
            <h3 className="text-xs sm:text-sm font-bold text-foreground">
              Token Economics · <span className="text-on-surface-variant font-normal">~{workload.totalTokens.toLocaleString()} tokens per request</span>
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowTokenDetails(prev => !prev)}
            className="text-xs font-semibold text-primary hover:underline flex items-center cursor-pointer"
          >
            <span>{showTokenDetails ? 'Hide' : 'How is this calculated?'}</span>
            <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${showTokenDetails ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {showTokenDetails && (
          <div className="pt-3 border-t border-border space-y-2 text-xs text-on-surface-variant">
            <div className="grid grid-cols-3 gap-2 text-center py-2 bg-surface-elevated rounded-xl font-mono">
              <div>
                <span className="text-[10px] text-on-surface-variant block">Input</span>
                <span className="font-bold text-foreground">{workload.inputTokens.toLocaleString()} tokens</span>
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant block">Output</span>
                <span className="font-bold text-foreground">{workload.outputTokens.toLocaleString()} tokens</span>
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant block">Total</span>
                <span className="font-bold text-primary">{workload.totalTokens.toLocaleString()} tokens</span>
              </div>
            </div>
            <p className="leading-relaxed pt-1">
              Language models process text as &ldquo;tokens&rdquo; (~4 characters or 0.75 words each). Input tokens represent the text sent to the model; output tokens represent the text generated in return. Output tokens are typically 3–5x more expensive due to GPU compute requirements.
            </p>
          </div>
        )}
      </div>

      {/* ============================================================= */}
      {/* 7. ADVANCED SETTINGS (Collapsed by default)                    */}
      {/* ============================================================= */}
      <div className="border border-border rounded-2xl bg-surface overflow-hidden">
        <button
          type="button"
          onClick={() => setShowAdvanced(prev => !prev)}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-surface-secondary/40 transition-colors cursor-pointer"
        >
          <div>
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-on-surface-variant" />
              <span className="text-xs sm:text-sm font-bold text-foreground">⚙️ Advanced settings</span>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-0.5">
              For developers who want more control over the calculation.
            </p>
          </div>
          <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
        </button>

        {showAdvanced && (
          <div className="p-5 border-t border-border bg-surface-elevated/40 space-y-5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">Developer Overrides</span>
              {(manualInputTokens !== null || manualOutputTokens !== null || cacheHitRate > 0 || useBatchApi) && (
                <button
                  type="button"
                  onClick={() => {
                    setManualInputTokens(null);
                    setManualOutputTokens(null);
                    setCacheHitRate(0);
                    setUseBatchApi(false);
                    updateUrlParams({ cache: 0, batch: false });
                  }}
                  className="inline-flex items-center space-x-1 text-primary hover:underline text-xs font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to automatic defaults</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="custom-input-tokens" className="block font-semibold text-foreground">
                  Custom Input Tokens
                </label>
                <input
                  id="custom-input-tokens"
                  type="number"
                  min="0"
                  placeholder={String(workload.inputTokens)}
                  value={manualInputTokens ?? ''}
                  onChange={(e) => setManualInputTokens(e.target.value ? Number(e.target.value) : null)}
                  className="w-full bg-surface border border-border rounded-xl px-3 py-2 text-foreground font-mono"
                />
                <span className="text-[10px] text-on-surface-variant">Overrides automatic prompt/app token estimation.</span>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="custom-output-tokens" className="block font-semibold text-foreground">
                  Custom Output Tokens
                </label>
                <input
                  id="custom-output-tokens"
                  type="number"
                  min="0"
                  placeholder={String(workload.outputTokens)}
                  value={manualOutputTokens ?? ''}
                  onChange={(e) => setManualOutputTokens(e.target.value ? Number(e.target.value) : null)}
                  className="w-full bg-surface border border-border rounded-xl px-3 py-2 text-foreground font-mono"
                />
                <span className="text-[10px] text-on-surface-variant">Response length generated per call.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border">
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <span className="font-semibold text-foreground">Prompt Cache Hit Rate:</span>
                <input
                  type="range"
                  min="0"
                  max="95"
                  step="5"
                  value={cacheHitRate}
                  onChange={(e) => {
                    setCacheHitRate(Number(e.target.value));
                    updateUrlParams({ cache: e.target.value });
                  }}
                  className="w-32 h-1.5 bg-surface-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="font-mono text-primary font-bold">{cacheHitRate}%</span>
              </div>

              <div className="flex flex-col">
                <label className="flex items-center space-x-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={useBatchApi}
                    onChange={(e) => {
                      setUseBatchApi(e.target.checked);
                      updateUrlParams({ batch: e.target.checked });
                    }}
                    className="w-4 h-4 rounded text-primary bg-surface border-border focus:ring-primary/20 accent-primary"
                  />
                  <span className="text-foreground font-semibold">
                    Apply Batch API Discount <strong className="text-emerald-600 dark:text-emerald-400">(50% Off)</strong>
                  </span>
                </label>
                {useBatchApi && !selectedModel.supportsBatch && (
                  <span className="text-[10px] text-on-surface-variant mt-0.5 pl-6">
                    Note: {selectedModel.name} does not offer batch pricing; standard pricing applies.
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================= */}
      {/* 8. FULL MODEL COMPARISON (Revealed on demand)                  */}
      {/* ============================================================= */}
      {showFullTable && (
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="text-lg font-bold text-foreground">
              All Models Comparison
            </h3>
            <span className="text-xs text-on-surface-variant font-mono">
              Pricing verified for this workload
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border bg-surface-elevated text-foreground font-bold">
                  <th className="py-3 px-4">Model</th>
                  <th className="py-3 px-4 text-right">Cost (Workload)</th>
                  <th className="py-3 px-4">Best For</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {LLM_MODELS.map((m) => {
                  const costs = calculateCostForModel(m);
                  const isSelected = m.id === selectedModel.id;

                  return (
                    <tr 
                      key={m.id}
                      className={`transition-colors ${isSelected ? 'bg-primary/5 font-semibold' : 'hover:bg-surface-secondary/40'}`}
                    >
                      <td className="py-3 px-4">
                        <div className="font-bold text-foreground">{m.name}</div>
                        <div className="text-[10px] text-on-surface-variant">{m.provider}</div>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-foreground">
                        {formatCurrency(costs.costPer1000)} / 1k
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        {m.notes || m.category}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedModelId(m.id);
                            updateUrlParams({ model: m.id });
                          }}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                            isSelected
                              ? 'bg-primary text-white'
                              : 'bg-surface-elevated border border-border text-on-surface-variant hover:text-foreground'
                          }`}
                        >
                          {isSelected ? 'Selected' : 'Select'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 9. BUILD YOUR AI STACK (Lower on the page)                     */}
      {/* ============================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-elevated/40 border border-border space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Build your AI stack
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Looking for tools to build your AI workflow? Explore AI Tools Haven.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          {/* Card 1: Gateways */}
          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-primary">Model Routing</span>
              <h3 className="font-bold text-foreground text-sm mt-0.5">AI Model Gateways</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Connect multiple providers through a unified API with automated failovers.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center text-xs font-bold text-primary hover:underline"
            >
              <span>Explore Gateways</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Card 2: Observability */}
          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Monitoring</span>
              <h3 className="font-bold text-foreground text-sm mt-0.5">AI Observability</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Track production token spend per user, monitor latency, and debug errors.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>View Observability Tools</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Card 3: Infrastructure */}
          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-accent">Hosting &amp; Compute</span>
              <h3 className="font-bold text-foreground text-sm mt-0.5">AI Infrastructure</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Serverless inference and dedicated GPU instances for open weights.
              </p>
            </div>
            <Link
              href="/compare-tools"
              className="inline-flex items-center text-xs font-bold text-accent hover:underline"
            >
              <span>Compare Providers</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Pricing Last Updated Footer Stamp */}
        <div className="pt-2 text-center">
          <span className="text-[11px] text-on-surface-variant font-mono">
            Pricing last verified: {PRICING_LAST_UPDATED} against live provider endpoints.
          </span>
        </div>
      </div>
    </div>
  );
}
