import { LLM_MODELS, LLMModel } from '../src/data/llm-pricing';

function testEdgeCases() {
  console.log('🧪 Running AI Cost Calculator Mathematical & Edge-Case QA Suite...\n');

  // Test Model Catalog
  console.log(`✅ Verified Model Catalog: ${LLM_MODELS.length} models loaded.`);
  for (const m of LLM_MODELS) {
    if (!m.id || !m.name || !m.inputPerMillion || !m.outputPerMillion) {
      throw new Error(`Invalid model definition: ${JSON.stringify(m)}`);
    }
  }

  // Calculation Formula
  function calcCost(model: LLMModel, inputTokens: number, outputTokens: number, cacheHitRate = 0, useBatch = false) {
    if (inputTokens + outputTokens === 0) {
      return { costPerRequest: 0, monthlyCost: 0 };
    }
    const batchMultiplier = (useBatch && model.supportsBatch) ? 0.5 : 1.0;
    const cacheDecimal = cacheHitRate / 100;
    const standardInput = inputTokens * (1 - cacheDecimal);
    const cachedTokens = inputTokens * cacheDecimal;

    const singleInputCost = (
      (standardInput / 1_000_000) * model.inputPerMillion +
      (cachedTokens / 1_000_000) * model.cachedInputPerMillion
    ) * batchMultiplier;

    const singleOutputCost = (
      (outputTokens / 1_000_000) * model.outputPerMillion
    ) * batchMultiplier;

    const costPerRequest = singleInputCost + singleOutputCost;
    return { costPerRequest, monthlyCost: costPerRequest * 100 };
  }

  // Case A: Tiny Prompt
  const sonnet = LLM_MODELS.find(m => m.id === 'claude-sonnet-5')!;
  const caseA = calcCost(sonnet, 2, 120);
  console.log('Case A (Tiny prompt): Cost per request = $' + caseA.costPerRequest.toFixed(6));
  if (isNaN(caseA.costPerRequest) || caseA.costPerRequest <= 0) throw new Error('Case A failed');

  // Case B: Long Document (30k tokens in, 1k out)
  const caseB = calcCost(sonnet, 30000, 1000);
  console.log('Case B (Long document): Cost per request = $' + caseB.costPerRequest.toFixed(4));
  if (isNaN(caseB.costPerRequest) || caseB.costPerRequest <= 0) throw new Error('Case B failed');

  // Case C: Empty Input (0 in, 0 out)
  const caseC = calcCost(sonnet, 0, 0);
  console.log('Case C (Empty input): Cost per request = $' + caseC.costPerRequest.toFixed(4));
  if (caseC.costPerRequest !== 0 || isNaN(caseC.costPerRequest)) throw new Error('Case C failed');

  // Case D: Cache & Batch Discounts
  const standardCost = calcCost(sonnet, 10000, 1000, 0, false).costPerRequest;
  const cachedCost = calcCost(sonnet, 10000, 1000, 50, false).costPerRequest;
  const batchCost = calcCost(sonnet, 10000, 1000, 0, true).costPerRequest;
  console.log('Case D (Standard vs Cache 50% vs Batch):');
  console.log(`  Standard: $${standardCost.toFixed(5)}`);
  console.log(`  50% Cache: $${cachedCost.toFixed(5)} (Reduction: ${Math.round((1 - cachedCost/standardCost)*100)}%)`);
  console.log(`  Batch API: $${batchCost.toFixed(5)} (Reduction: ${Math.round((1 - batchCost/standardCost)*100)}%)`);
  if (cachedCost >= standardCost || batchCost >= standardCost) throw new Error('Case D discount failed');

  // Case E: Model Comparison on identical workload (1k in, 500 out)
  console.log('\nCase E: Comparing 3 recommended tiers on identical 1k in / 500 out workload:');
  const flash = LLM_MODELS.find(m => m.id === 'gemini-3-8-flash')!;
  const astra = LLM_MODELS.find(m => m.id === 'gpt-6-astra')!;
  const costFlash = calcCost(flash, 1000, 500).costPerRequest;
  const costSonnet = calcCost(sonnet, 1000, 500).costPerRequest;
  const costAstra = calcCost(astra, 1000, 500).costPerRequest;
  console.log(`  Gemini 3.8 Flash (Best Value): $${costFlash.toFixed(5)} / request`);
  console.log(`  Claude Sonnet 5 (Best Balance): $${costSonnet.toFixed(5)} / request`);
  console.log(`  OpenAI GPT-6 Astra (Frontier):   $${costAstra.toFixed(5)} / request`);
  if (!(costFlash < costSonnet && costSonnet < costAstra)) {
    throw new Error('Tier comparison hierarchy failed');
  }

  // Optimizer math check
  const monthlyAstra = costAstra * 50000;
  const monthlySonnet = costSonnet * 50000;
  const savings = monthlyAstra - monthlySonnet;
  const pctSavings = (savings / monthlyAstra) * 100;
  console.log(`\nOptimizer Math Test (50,000 requests):`);
  console.log(`  Astra: $${monthlyAstra.toFixed(2)}/mo`);
  console.log(`  Sonnet: $${monthlySonnet.toFixed(2)}/mo`);
  console.log(`  Savings: $${savings.toFixed(2)}/mo (${pctSavings.toFixed(1)}%)`);
  if (savings <= 0 || pctSavings <= 0 || pctSavings >= 100) throw new Error('Optimizer math failed');

  console.log('\n🎉 ALL CALCULATOR QA TESTS PASSED CLEANLY!\n');
}

testEdgeCases();
