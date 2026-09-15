import React, { useState, useMemo, useCallback } from 'react';
import { IMAGE_MODELS, GenerationModel } from '@/data/generation-pricing';
import { Check, ArrowRight, Layers, Sparkles, Share2, Copy } from 'lucide-react';

function formatCurrency(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '$0.00';
  if (n < 0.01) return `$${n.toFixed(4)}`;
  if (n >= 1000) return `$${Math.round(n).toLocaleString('en-US')}`;
  return `$${n.toFixed(2)}`;
}

export function ImageCreditCalculator() {
  // Models with consumer credit pricing
  const creditModels = useMemo(() => {
    return IMAGE_MODELS.filter(m => m.consumerPricing.isAvailable);
  }, []);

  const [selectedModelId, setSelectedModelId] = useState<string>('ideogram-2-0');
  const [calculationDirection, setCalculationDirection] = useState<'credits_to_output' | 'output_to_credits'>('credits_to_output');

  // Mode A: Credits -> Images
  const [availableCredits, setAvailableCredits] = useState<number>(1000);

  // Mode B: Images -> Credits
  const [targetImages, setTargetImages] = useState<number>(250);

  // Share Scenario State
  const [copiedScenario, setCopiedScenario] = useState<boolean>(false);
  const handleCopyScenario = useCallback(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('audience', 'use');
    url.searchParams.set('mode', 'image_credits');
    url.searchParams.set('model', selectedModelId);
    navigator.clipboard.writeText(url.toString());
    setCopiedScenario(true);
    setTimeout(() => setCopiedScenario(false), 2200);
  }, [selectedModelId]);

  const selectedModel = useMemo(() => {
    return creditModels.find(m => m.id === selectedModelId) || creditModels[0];
  }, [creditModels, selectedModelId]);

  // Credits per image calculation
  const creditsPerImage = selectedModel.consumerPricing.creditsPerGeneration || 1;

  // Mode A calculations (Credits -> Images)
  const estimatedImages = Math.floor(Math.max(0, availableCredits) / creditsPerImage);
  const creditsUsed = estimatedImages * creditsPerImage;
  const remainingCredits = Math.max(0, availableCredits - creditsUsed);

  // Mode B calculations (Images -> Credits)
  const totalCreditsNeeded = Math.max(0, targetImages) * creditsPerImage;

  // Plan matching helper
  const matchingPlan = useMemo(() => {
    if (!selectedModel.consumerPricing.popularPlans) return null;
    return selectedModel.consumerPricing.popularPlans.find(p => p.monthlyCredits >= (calculationDirection === 'credits_to_output' ? availableCredits : totalCreditsNeeded)) 
      || selectedModel.consumerPricing.popularPlans[0];
  }, [selectedModel, calculationDirection, availableCredits, totalCreditsNeeded]);

  const effectiveCostPerImage = matchingPlan && matchingPlan.monthlyCredits > 0
    ? (matchingPlan.monthlyPrice / (matchingPlan.monthlyCredits / creditsPerImage))
    : null;

  // Model comparison across same credit budget
  const comparisonList = useMemo(() => {
    return creditModels.map(m => {
      const cpi = m.consumerPricing.creditsPerGeneration || 1;
      const possible = Math.floor(Math.max(0, availableCredits) / cpi);
      return {
        model: m,
        creditsPerImage: cpi,
        possibleGenerations: possible,
      };
    }).sort((a, b) => b.possibleGenerations - a.possibleGenerations);
  }, [creditModels, availableCredits]);

  return (
    <div className="w-full space-y-8">
      {/* Header Info */}
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight flex items-center space-x-2">
          <span>🖼️ Image Credit &amp; Generation Calculator</span>
        </h3>
        <p className="text-xs sm:text-sm text-on-surface-variant">
          Calculate how many images your subscription credits can produce, or how many credits you need.
        </p>
      </div>

      {/* Input Configuration Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-xs space-y-6">
        {/* Direction Toggle */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold text-on-surface-variant">Calculation Goal:</span>
          <div className="inline-flex rounded-xl bg-surface-elevated p-1 border border-border text-xs font-bold">
            <button
              type="button"
              onClick={() => setCalculationDirection('credits_to_output')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                calculationDirection === 'credits_to_output'
                  ? 'bg-surface text-foreground shadow-2xs'
                  : 'text-on-surface-variant hover:text-foreground'
              }`}
            >
              I Have Credits &rarr; Images
            </button>
            <button
              type="button"
              onClick={() => setCalculationDirection('output_to_credits')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                calculationDirection === 'output_to_credits'
                  ? 'bg-surface text-foreground shadow-2xs'
                  : 'text-on-surface-variant hover:text-foreground'
              }`}
            >
              I Have an Image Goal &rarr; Credits
            </button>
          </div>
        </div>

        {/* Model Selection */}
        <div className="space-y-3 pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <label htmlFor="image-credit-model-select" className="block text-xs font-black text-on-surface-variant uppercase tracking-wider">
              Featured Image Generation Platforms
            </label>
            <span className="text-[11px] font-mono text-on-surface-variant">
              Showing {creditModels.length} platforms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {creditModels.map((m) => {
              const isSelected = selectedModel.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedModelId(m.id)}
                  className={`group relative p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-b from-accent/10 via-surface to-surface border-accent ring-2 ring-accent/20 shadow-md'
                      : 'bg-surface-elevated/80 hover:bg-surface-elevated border-border text-on-surface-variant hover:border-accent/30'
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-on-surface-variant flex items-center space-x-1">
                        <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-accent' : 'bg-on-surface-variant/40'}`} />
                        <span>{m.provider}</span>
                      </span>
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                        {m.consumerPricing.creditUnit}
                      </span>
                    </div>
                    <div className="text-sm font-black text-foreground group-hover:text-accent transition-colors truncate">
                      {m.name}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-foreground">
                      {m.consumerPricing.creditsPerGeneration}{' '}
                      <span className="text-[10px] text-on-surface-variant font-normal">
                        {m.consumerPricing.creditUnit} / img
                      </span>
                    </span>
                    {isSelected ? (
                      <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-border" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Popular Plan Autofill (if model has plans) */}
        {selectedModel.consumerPricing.popularPlans && (
          <div className="pt-3 border-t border-border space-y-2">
            <span className="text-xs font-bold text-on-surface-variant block">
              Quick Plan Autofill ({selectedModel.name}):
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedModel.consumerPricing.popularPlans.map((plan) => (
                <button
                  key={plan.planName}
                  type="button"
                  onClick={() => {
                    setAvailableCredits(plan.monthlyCredits);
                    setCalculationDirection('credits_to_output');
                  }}
                  className="px-3 py-1.5 rounded-xl border border-border bg-surface-elevated hover:bg-surface-secondary text-xs text-foreground font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  {plan.planName} (${plan.monthlyPrice}/mo &bull; {plan.monthlyCredits.toLocaleString()} {selectedModel.consumerPricing.creditUnit})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Inputs Based on Direction with Quick Presets */}
        <div className="pt-4 border-t border-border space-y-3">
          {calculationDirection === 'credits_to_output' ? (
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label htmlFor="available-image-credits-input" className="block text-xs font-bold text-foreground">
                  How many credits do you have available?
                </label>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[11px] font-mono text-on-surface-variant hidden sm:inline">Presets:</span>
                  {[
                    { label: '500 (Basic)', val: 500 },
                    { label: '1,000 (Standard)', val: 1000 },
                    { label: '2,500 (Pro)', val: 2500 },
                    { label: '10,000 (Studio)', val: 10000 },
                  ].map((p) => (
                    <button
                      key={p.val}
                      type="button"
                      onClick={() => setAvailableCredits(p.val)}
                      className={`px-2 py-0.5 rounded-lg text-[11px] font-mono transition-all cursor-pointer border ${
                        availableCredits === p.val
                          ? 'bg-accent/15 border-accent text-accent font-bold'
                          : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative max-w-sm">
                <input
                  id="available-image-credits-input"
                  type="number"
                  min="0"
                  step="50"
                  value={availableCredits}
                  onChange={(e) => setAvailableCredits(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-accent shadow-2xs"
                />
                <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">
                  {selectedModel.consumerPricing.creditUnit}
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label htmlFor="target-images-input" className="block text-xs font-bold text-foreground">
                  How many images do you want to generate?
                </label>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[11px] font-mono text-on-surface-variant hidden sm:inline">Presets:</span>
                  {[
                    { label: '50 (Quick Batch)', val: 50 },
                    { label: '250 (Campaign)', val: 250 },
                    { label: '1,000 (Catalog)', val: 1000 },
                    { label: '5,000 (Studio)', val: 5000 },
                  ].map((p) => (
                    <button
                      key={p.val}
                      type="button"
                      onClick={() => setTargetImages(p.val)}
                      className={`px-2 py-0.5 rounded-lg text-[11px] font-mono transition-all cursor-pointer border ${
                        targetImages === p.val
                          ? 'bg-accent/15 border-accent text-accent font-bold'
                          : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative max-w-sm">
                <input
                  id="target-images-input"
                  type="number"
                  min="1"
                  step="25"
                  value={targetImages}
                  onChange={(e) => setTargetImages(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-base sm:text-sm font-bold text-foreground focus:outline-none focus:border-accent shadow-2xs"
                />
                <span className="absolute right-4 top-3 text-xs text-on-surface-variant font-medium">images</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Primary Result Card (Executive Generation Capacity HUD) */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface via-surface-elevated/90 to-surface border border-accent/30 ring-1 ring-accent/20 shadow-xl space-y-6">
        {/* Subtle Ambient Radial Highlight */}
        <div 
          className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 blur-3xl rounded-full pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Top Header & Share Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-accent">
              LIVE IMAGE CAPACITY FORECAST
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

        {calculationDirection === 'credits_to_output' ? (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-1">
                Estimated Output on {selectedModel.name}
              </span>
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground font-mono tracking-tight">
                  {estimatedImages.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-on-surface-variant">
                  images
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Rate / Image</span>
                <strong className="text-foreground text-sm font-bold">{creditsPerImage} {selectedModel.consumerPricing.creditUnit}</strong>
              </div>
              <div className="space-y-0.5 border-l border-border/80 pl-3">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Credits Used</span>
                <strong className="text-foreground text-sm font-bold">{creditsUsed.toLocaleString()}</strong>
              </div>
              <div className="space-y-0.5 border-l border-border/80 pl-3">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Remaining Balance</span>
                <strong className="text-accent text-sm font-bold">{remainingCredits.toLocaleString()}</strong>
              </div>
              <div className="space-y-0.5 border-l border-border/80 pl-3">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Effective Cost</span>
                <strong className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">
                  {effectiveCostPerImage ? `~${formatCurrency(effectiveCostPerImage)}/img` : '—'}
                </strong>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-1">
                Total Credits Required ({selectedModel.name})
              </span>
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground font-mono tracking-tight">
                  {totalCreditsNeeded.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-on-surface-variant">
                  {selectedModel.consumerPricing.creditUnit}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Target Output</span>
                <strong className="text-foreground text-sm font-bold">{targetImages.toLocaleString()} images</strong>
              </div>
              <div className="space-y-0.5 border-x border-border/80 px-3">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Rate per Image</span>
                <strong className="text-foreground text-sm font-bold">{creditsPerImage} {selectedModel.consumerPricing.creditUnit}</strong>
              </div>
              <div className="space-y-0.5 pl-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Suggested Plan</span>
                <strong className="text-accent text-sm font-bold">
                  {matchingPlan ? `${matchingPlan.planName} ($${matchingPlan.monthlyPrice}/mo)` : 'Custom'}
                </strong>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Model Comparison Table for Same Credits */}
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-bold text-foreground">
            What gives you the most images for your credits?
          </h4>
          <p className="text-xs text-on-surface-variant">
            Image generation capacity across popular creator platforms for {availableCredits.toLocaleString()} credits.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-border bg-surface-elevated text-foreground font-bold">
                <th className="py-3 px-4">Platform / Tool</th>
                <th className="py-3 px-4">Credits / Image</th>
                <th className="py-3 px-4 text-right">Possible Generations</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonList.map((item) => {
                const isSelected = item.model.id === selectedModel.id;
                return (
                  <tr
                    key={item.model.id}
                    className={`transition-colors ${isSelected ? 'bg-primary/5 font-semibold' : 'hover:bg-surface-secondary/40'}`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold text-foreground">{item.model.name}</div>
                      <div className="text-[10px] text-on-surface-variant">{item.model.provider}</div>
                    </td>
                    <td className="py-3 px-4 font-mono text-on-surface-variant">
                      {item.creditsPerImage} {item.model.consumerPricing.creditUnit}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-foreground">
                      ~{item.possibleGenerations.toLocaleString()} images
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedModelId(item.model.id)}
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
    </div>
  );
}
