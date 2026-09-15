import React, { useState, useMemo, useCallback } from 'react';
import { IMAGE_MODELS, GenerationModel } from '@/data/generation-pricing';
import { Check, ArrowRight, TrendingDown, Info, ExternalLink, Share2, Copy, Sparkles } from 'lucide-react';

function formatCurrency(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '$0.00';
  if (n < 0.0001) return `$${n.toFixed(6)}`;
  if (n < 0.01) return `$${n.toFixed(4)}`;
  if (n >= 1000) return `$${Math.round(n).toLocaleString('en-US')}`;
  return `$${n.toFixed(2)}`;
}

function formatUnitCost(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '$0.000';
  if (n < 0.001) return `$${n.toFixed(4)}`;
  return `$${n.toFixed(3)}`;
}

export function ImageApiCalculator() {
  // Available models with developer API pricing
  const apiModels = useMemo(() => {
    return IMAGE_MODELS.filter(m => m.apiPricing.isAvailable);
  }, []);

  const [selectedModelId, setSelectedModelId] = useState<string>('flux-1-schnell');
  const [calculationMode, setCalculationMode] = useState<'total_volume' | 'per_user'>('total_volume');
  
  // Total Volume Mode
  const [monthlyImages, setMonthlyImages] = useState<number>(20000);

  // Per User Mode
  const [activeUsers, setActiveUsers] = useState<number>(1000);
  const [imagesPerUserMonth, setImagesPerUserMonth] = useState<number>(20);

  // Resolution selection
  const selectedModel = useMemo(() => {
    return apiModels.find(m => m.id === selectedModelId) || apiModels[0];
  }, [apiModels, selectedModelId]);

  const [selectedResolution, setSelectedResolution] = useState<string>(
    selectedModel.apiPricing.defaultResolution || '1024x1024'
  );

  // Optional SaaS Unit Economics
  const [showSaasEconomics, setShowSaasEconomics] = useState<boolean>(false);
  const [subscriptionPrice, setSubscriptionPrice] = useState<string>('29');

  // Compute Total Monthly Images
  const effectiveTotalImages = useMemo(() => {
    if (calculationMode === 'per_user') {
      return Math.max(1, (activeUsers || 1) * (imagesPerUserMonth || 1));
    }
    return Math.max(1, monthlyImages || 1);
  }, [calculationMode, activeUsers, imagesPerUserMonth, monthlyImages]);

  // Share Scenario State
  const [copiedScenario, setCopiedScenario] = useState<boolean>(false);
  const handleCopyScenario = useCallback(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('audience', 'build');
    url.searchParams.set('mode', 'image_api');
    url.searchParams.set('model', selectedModelId);
    url.searchParams.set('vol', String(effectiveTotalImages));
    navigator.clipboard.writeText(url.toString());
    setCopiedScenario(true);
    setTimeout(() => setCopiedScenario(false), 2200);
  }, [selectedModelId, effectiveTotalImages]);

  // Resolution multiplier
  const resolutionMultiplier = useMemo(() => {
    if (!selectedModel.apiPricing.resolutionCostMultiplier) return 1.0;
    return selectedModel.apiPricing.resolutionCostMultiplier[selectedResolution] || 1.0;
  }, [selectedModel, selectedResolution]);

  // Cost calculations for selected model
  const currentCostPerImage = (selectedModel.apiPricing.costPerUnit || 0.04) * resolutionMultiplier;
  const currentMonthlyCost = effectiveTotalImages * currentCostPerImage;
  const currentAnnualCost = currentMonthlyCost * 12;
  const currentCostPerUser = calculationMode === 'per_user'
    ? currentCostPerImage * imagesPerUserMonth
    : currentMonthlyCost / Math.max(1, activeUsers || 1);

  // Optional Gross Margin Calculations
  const subPriceNum = parseFloat(subscriptionPrice);
  const hasValidSub = Number.isFinite(subPriceNum) && subPriceNum > 0;
  const monthlyRevenue = hasValidSub ? (activeUsers * subPriceNum) : 0;
  const aiCostPct = monthlyRevenue > 0 ? (currentMonthlyCost / monthlyRevenue) * 100 : 0;
  const grossProfitAfterAi = Math.max(0, monthlyRevenue - currentMonthlyCost);
  const grossMarginAfterAi = monthlyRevenue > 0 ? Math.max(0, 100 - aiCostPct) : 0;

  // Curated Model Comparison
  const comparisonList = useMemo(() => {
    return apiModels.map(m => {
      const resMult = m.apiPricing.resolutionCostMultiplier
        ? (m.apiPricing.resolutionCostMultiplier[selectedResolution] || 1.0)
        : 1.0;
      const unitCost = m.apiPricing.costPerUnit * resMult;
      const monthly = effectiveTotalImages * unitCost;
      return {
        model: m,
        costPerImage: unitCost,
        monthlyCost: monthly,
        isCheaper: monthly < currentMonthlyCost,
        saving: currentMonthlyCost - monthly
      };
    }).sort((a, b) => a.monthlyCost - b.monthlyCost);
  }, [apiModels, selectedResolution, effectiveTotalImages, currentMonthlyCost]);

  return (
    <div className="w-full space-y-8">
      {/* Header Info */}
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight flex items-center space-x-2">
          <span>🖼️ Image API Cost</span>
        </h3>
        <p className="text-xs sm:text-sm text-on-surface-variant">
          Estimate what your image generation API will cost at your expected usage.
        </p>
      </div>

      {/* Input Configuration Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-xs space-y-6">
        {/* Model Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="image-api-model-select" className="block text-xs font-black text-on-surface-variant uppercase tracking-wider">
              Featured Image Generation Models
            </label>
            <span className="text-[11px] font-mono text-on-surface-variant">
              Showing 4 of {apiModels.length} API models
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {apiModels.slice(0, 4).map((m) => {
              const isSelected = selectedModel.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setSelectedModelId(m.id);
                    if (m.apiPricing.defaultResolution) {
                      setSelectedResolution(m.apiPricing.defaultResolution);
                    }
                  }}
                  className={`group relative p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-b from-primary/10 via-surface to-surface border-primary ring-2 ring-primary/20 shadow-md'
                      : 'bg-surface-elevated/80 hover:bg-surface-elevated border-border text-on-surface-variant hover:border-primary/30'
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-on-surface-variant flex items-center space-x-1">
                        <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-primary' : 'bg-on-surface-variant/40'}`} />
                        <span>{m.provider}</span>
                      </span>
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        m.category === 'frontier' 
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                          : m.category === 'fast'
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}>
                        {m.category || 'Balanced'}
                      </span>
                    </div>
                    <div className="text-sm font-black text-foreground group-hover:text-primary transition-colors truncate">
                      {m.name}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-foreground">
                      ${m.apiPricing.costPerUnit.toFixed(3)}{' '}
                      <span className="text-[10px] text-on-surface-variant font-normal">/ img</span>
                    </span>
                    {isSelected ? (
                      <span className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-border" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-on-surface-variant font-medium">Or choose from all providers:</span>
            <select
              id="image-api-model-select"
              value={selectedModelId}
              onChange={(e) => {
                setSelectedModelId(e.target.value);
                const target = apiModels.find(m => m.id === e.target.value);
                if (target?.apiPricing.defaultResolution) {
                  setSelectedResolution(target.apiPricing.defaultResolution);
                }
              }}
              className="bg-surface-elevated border border-border rounded-xl px-3 py-1.5 text-xs font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
            >
              {apiModels.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name} (${m.apiPricing.costPerUnit.toFixed(3)}/image) — {m.provider}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Volume Mode Toggle & Quick Presets */}
        <div className="pt-4 border-t border-border space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold text-on-surface-variant">Calculation Mode:</span>
              <div className="inline-flex rounded-xl bg-surface-elevated p-1 border border-border text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCalculationMode('total_volume')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    calculationMode === 'total_volume'
                      ? 'bg-surface text-foreground shadow-2xs'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  Total Monthly Images
                </button>
                <button
                  type="button"
                  onClick={() => setCalculationMode('per_user')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    calculationMode === 'per_user'
                      ? 'bg-surface text-foreground shadow-2xs'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  Users &times; Images / Month
                </button>
              </div>
            </div>

            {/* Quick Volume Preset Chips */}
            {calculationMode === 'total_volume' && (
              <div className="flex items-center space-x-1.5">
                <span className="text-[11px] font-mono text-on-surface-variant hidden md:inline">Presets:</span>
                {[
                  { label: '5k (Starter)', val: 5000 },
                  { label: '20k (Growth)', val: 20000 },
                  { label: '100k (Scale)', val: 100000 },
                  { label: '500k (High)', val: 500000 },
                ].map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    onClick={() => setMonthlyImages(p.val)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer border ${
                      monthlyImages === p.val
                        ? 'bg-primary/10 border-primary text-primary font-bold shadow-2xs'
                        : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {calculationMode === 'total_volume' ? (
            <div className="space-y-1.5 max-w-sm">
              <label htmlFor="total-monthly-images-input" className="block text-xs font-bold text-foreground">
                How many images will your app generate per month?
              </label>
              <div className="relative">
                <input
                  id="total-monthly-images-input"
                  type="number"
                  min="1"
                  step="500"
                  value={monthlyImages}
                  onChange={(e) => setMonthlyImages(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                />
                <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">images / mo</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="image-active-users-input" className="block text-xs font-bold text-foreground">
                  Number of active users each month
                </label>
                <div className="relative">
                  <input
                    id="image-active-users-input"
                    type="number"
                    min="1"
                    value={activeUsers}
                    onChange={(e) => setActiveUsers(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                  />
                  <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">users</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="image-per-user-input" className="block text-xs font-bold text-foreground">
                  How many images does each user generate?
                </label>
                <div className="relative">
                  <input
                    id="image-per-user-input"
                    type="number"
                    min="1"
                    value={imagesPerUserMonth}
                    onChange={(e) => setImagesPerUserMonth(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-2xs"
                  />
                  <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">images / user</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resolution Selector (if model supports options) */}
        {selectedModel.apiPricing.supportedResolutions && selectedModel.apiPricing.supportedResolutions.length > 1 && (
          <div className="pt-3 border-t border-border space-y-2">
            <span className="text-xs font-bold text-on-surface-variant block">
              Resolution / Quality Tier:
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedModel.apiPricing.supportedResolutions.map((res) => (
                <button
                  key={res}
                  type="button"
                  onClick={() => setSelectedResolution(res)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    selectedResolution === res
                      ? 'bg-primary text-white border-primary shadow-2xs'
                      : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Primary Result Card (Executive Financial HUD) */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface via-surface-elevated/90 to-surface border border-primary/30 ring-1 ring-primary/20 shadow-xl space-y-6">
        {/* Subtle Ambient Radial Highlight */}
        <div 
          className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Top Header & Share Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-primary">
              LIVE IMAGE API SCENARIO
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyScenario}
            className="inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border border-border bg-surface-elevated hover:bg-surface-secondary text-foreground transition-all cursor-pointer w-fit shadow-2xs"
          >
            {copiedScenario ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-on-surface-variant" />
                <span>Share Scenario</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-1">
              Estimated Monthly Image API Spend ({selectedModel.name})
            </span>
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground font-mono tracking-tight">
                {formatCurrency(currentMonthlyCost)}
              </span>
              <span className="text-sm font-semibold text-on-surface-variant">/ month</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs font-mono bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Cost / Image</span>
              <strong className="text-foreground text-sm font-bold">{formatUnitCost(currentCostPerImage)}</strong>
            </div>
            <div className="space-y-0.5 border-x border-border/80 px-3">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Cost / User</span>
              <strong className="text-foreground text-sm font-bold">{formatCurrency(currentCostPerUser)}/mo</strong>
            </div>
            <div className="space-y-0.5 pl-1">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Annual Run-Rate</span>
              <strong className="text-primary text-sm font-bold">{formatCurrency(currentAnnualCost)}/yr</strong>
            </div>
          </div>
        </div>

        {/* Optional SaaS Gross Margin Drawer */}
        <div className="pt-3 border-t border-border">
          <button
            type="button"
            onClick={() => setShowSaasEconomics(prev => !prev)}
            className="text-xs font-bold text-primary hover:underline inline-flex items-center cursor-pointer"
          >
            <span>{showSaasEconomics ? 'Hide SaaS Gross Margin' : 'Forecast SaaS Gross Margin after AI cost &rarr;'}</span>
          </button>

          {showSaasEconomics && (
            <div className="mt-3 p-4 rounded-2xl bg-surface-elevated/80 border border-border space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label htmlFor="image-sub-price-input" className="font-semibold text-foreground">
                  Your Subscription Price ($ / user / month):
                </label>
                <div className="relative w-36">
                  <span className="absolute left-3 top-2 text-xs text-on-surface-variant font-bold">$</span>
                  <input
                    id="image-sub-price-input"
                    type="number"
                    min="0"
                    value={subscriptionPrice}
                    onChange={(e) => setSubscriptionPrice(e.target.value)}
                    className="w-full bg-surface border border-border rounded-xl pl-7 pr-3 py-1.5 font-bold text-foreground"
                  />
                </div>
              </div>

              {hasValidSub && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-border text-center font-mono">
                  <div className="p-2 bg-surface rounded-xl border border-border">
                    <span className="text-[10px] text-on-surface-variant block">Total Revenue</span>
                    <strong className="text-foreground">{formatCurrency(monthlyRevenue)}/mo</strong>
                  </div>
                  <div className="p-2 bg-surface rounded-xl border border-border">
                    <span className="text-[10px] text-on-surface-variant block">AI API Cost</span>
                    <strong className="text-red-500">{formatCurrency(currentMonthlyCost)}/mo</strong>
                  </div>
                  <div className="p-2 bg-surface rounded-xl border border-border">
                    <span className="text-[10px] text-on-surface-variant block">Gross Profit After AI</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">{formatCurrency(grossProfitAfterAi)}/mo</strong>
                  </div>
                  <div className="p-2 bg-surface rounded-xl border border-border">
                    <span className="text-[10px] text-on-surface-variant block">AI Gross Margin</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">{grossMarginAfterAi.toFixed(1)}%</strong>
                  </div>
                </div>
              )}
              <p className="text-[10px] text-on-surface-variant">
                Reflects direct AI image generation API spend. Excludes server hosting, storage, and payment processing fees.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Alternative Models Comparison */}
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-bold text-foreground">
            Compare Image Generation APIs
          </h4>
          <p className="text-xs text-on-surface-variant">
            What this exact workload ({effectiveTotalImages.toLocaleString()} images/month) costs across other providers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {comparisonList.slice(0, 3).map((item) => (
            <div
              key={item.model.id}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                selectedModel.id === item.model.id
                  ? 'bg-surface border-primary ring-1 ring-primary'
                  : 'bg-surface border-border hover:border-primary/40'
              }`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-primary block">
                  {item.model.provider}
                </span>
                <div className="text-sm font-bold text-foreground mt-0.5">{item.model.name}</div>
                <div className="text-xs text-on-surface-variant mt-1 font-mono">
                  {formatUnitCost(item.costPerImage)} per image
                </div>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-base font-black font-mono text-foreground">
                    {formatCurrency(item.monthlyCost)}
                  </div>
                  <div className="text-[10px] text-on-surface-variant">/ month</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedModelId(item.model.id);
                    if (item.model.apiPricing.defaultResolution) {
                      setSelectedResolution(item.model.apiPricing.defaultResolution);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedModel.id === item.model.id
                      ? 'bg-primary text-white'
                      : 'bg-surface-elevated border border-border text-foreground hover:bg-surface-secondary'
                  }`}
                >
                  {selectedModel.id === item.model.id ? 'Selected' : 'Use this'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
