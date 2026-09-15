import React from 'react';
import { LLMModel, LLM_MODELS, PRICING_LAST_UPDATED } from '@/data/llm-pricing';
import { ExternalLink, Check, Server } from 'lucide-react';

export function LlmPricingTable() {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Comprehensive AI Model Benchmark &amp; Token Dataset (2026)
          </h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Raw, crawlable comparison table showing input, cached input, and output rates per 1,000,000 tokens.
          </p>
        </div>
        <span className="text-xs text-on-surface-variant font-mono bg-surface px-2.5 py-1 rounded-full border border-border">
          Verified: {PRICING_LAST_UPDATED}
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xl">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-elevated text-foreground font-bold">
              <th className="py-3.5 px-4">Model &amp; Provider</th>
              <th className="py-3.5 px-3">Context Window</th>
              <th className="py-3.5 px-3">Input / 1M</th>
              <th className="py-3.5 px-3">Cached Input / 1M</th>
              <th className="py-3.5 px-3">Output / 1M</th>
              <th className="py-3.5 px-3">Batch 50%</th>
              <th className="py-3.5 px-3">Recommended Host</th>
              <th className="py-3.5 px-4 text-right">Endpoint</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-foreground">
            {LLM_MODELS.map((model) => {
              const cacheSavingsPct = Math.round(
                ((model.inputPerMillion - model.cachedInputPerMillion) / model.inputPerMillion) * 100
              );

              return (
                <tr 
                  key={model.id}
                  className="hover:bg-surface-secondary/60 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="font-bold text-foreground flex items-center space-x-2">
                      <span>{model.name}</span>
                      {model.isPopular && (
                        <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-on-surface-variant">{model.provider}</div>
                  </td>

                  <td className="py-3 px-3 font-mono text-on-surface-variant">
                    {(model.contextWindow / 1000).toLocaleString()}k
                  </td>

                  <td className="py-3 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    ${model.inputPerMillion.toFixed(2)}
                  </td>

                  <td className="py-3 px-3 font-mono font-medium text-primary">
                    ${model.cachedInputPerMillion.toFixed(2)}
                    {cacheSavingsPct > 0 && (
                      <span className="text-[10px] text-on-surface-variant block">
                        (-{cacheSavingsPct}%)
                      </span>
                    )}
                  </td>

                  <td className="py-3 px-3 font-mono font-bold text-accent">
                    ${model.outputPerMillion.toFixed(2)}
                  </td>

                  <td className="py-3 px-3">
                    {model.supportsBatch ? (
                      <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                        <Check className="w-3.5 h-3.5 mr-1" /> Supported
                      </span>
                    ) : (
                      <span className="text-on-surface-variant text-xs">—</span>
                    )}
                  </td>

                  <td className="py-3 px-3">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-surface-secondary border border-border text-foreground inline-flex items-center font-medium">
                      <Server className="w-3 h-3 mr-1 text-on-surface-variant" />
                      {model.bestHost || 'Official API'}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-right">
                    {model.affiliateUrl ? (
                      <a
                        href={model.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all font-bold shadow-2xs"
                      >
                        <span>Deploy</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-on-surface-variant">Official</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
