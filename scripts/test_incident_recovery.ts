import http from 'http';
import { normalizeTool, normalizeFeatures, normalizeTitledList, normalizePricingPlans, normalizeEditorial } from '../src/lib/data/tool-normalizer';
import { calculateRelatedScore, getDeterministicRelatedTools } from '../src/lib/data/related-tools';
import type { AITool } from '../src/lib/types/tool';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const PORT = process.env.PORT || '3005';

function fetchUrl(path: string): Promise<{ status: number; body: string; isError: boolean }> {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}${path}`, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        const isError = body.includes('Something went wrong') || body.includes('Error ID:');
        resolve({ status: res.statusCode || 0, body, isError });
      });
    });
    req.on('error', (err) => {
      resolve({ status: 500, body: err.message, isError: true });
    });
    req.setTimeout(30000, () => {
      req.destroy();
      resolve({ status: 408, body: 'Timeout', isError: true });
    });
  });
}

async function runRegressionSuite() {
  console.log("==================================================");
  console.log("AITOOLSHAVEN STEP 10G.5 REGRESSION & CONTRACT TEST");
  console.log("==================================================\n");

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition: boolean, testName: string, detail?: string) {
    totalTests++;
    if (condition) {
      passedTests++;
      console.log(`  [PASS] ${testName}`);
    } else {
      failedTests++;
      console.error(`  [FAIL] ${testName}${detail ? ` - ${detail}` : ''}`);
    }
  }

  // 1. DATA CONTRACT UNIT TESTS
  console.log("1. Running Data Contract Normalization Tests:");

  // A. Pricing variations
  const tPricingString = normalizeTool({ id: '1', slug: 't1', name: 'T1', priceModel: 'Freemium', price: '$20' });
  assert(tPricingString.priceModel === 'Freemium' && tPricingString.price === '$20', 'Pricing String Normalization');

  const tPricingArray = normalizeTool({
    id: '2', slug: 't2', name: 'T2',
    pricing: [{ planName: 'Free', price: 0, period: 'forever' }],
    pricingPlans: [{ name: 'Pro', price: '$15', description: 'desc', features: ['a', 'b'], recommended: true }]
  });
  assert(
    Array.isArray(tPricingArray.pricing) && tPricingArray.pricing[0].planName === 'Free' &&
    Array.isArray(tPricingArray.pricingPlans) && tPricingArray.pricingPlans[0].features.length === 2,
    'Pricing Array & Plans Normalization'
  );

  const tPricingJson = normalizeTool({
    id: '3', slug: 't3', name: 'T3',
    pricingPlans: JSON.stringify([{ name: 'Starter', price: '$10', description: 'starter', features: ['x'] }])
  });
  assert(Array.isArray(tPricingJson.pricingPlans) && tPricingJson.pricingPlans[0].name === 'Starter', 'Pricing JSON String Normalization');

  const tNullPricing = normalizeTool({ id: '4', slug: 't4', name: 'T4', pricing: null, pricingPlans: null, priceModel: null });
  assert(tNullPricing.priceModel === 'Freemium' && tNullPricing.pricingPlans === undefined, 'Null Pricing Normalization');

  const tUndefinedPricing = normalizeTool({ id: '5', slug: 't5', name: 'T5' });
  assert(tUndefinedPricing.priceModel === 'Freemium', 'Undefined Pricing Normalization');

  // B. Editorial & Sections variations
  const tNullEditorial = normalizeTool({ id: '6', slug: 't6', name: 'T6', editorial: null, pros: null, cons: null, features: null, useCases: null });
  assert(tNullEditorial.editorial === undefined && Array.isArray(tNullEditorial.pros) && Array.isArray(tNullEditorial.features), 'Null Editorial & Sections Normalization');

  const tStringFeatures = normalizeTool({ id: '7', slug: 't7', name: 'T7', features: ['Legacy Feature 1', 'Legacy Feature 2'] });
  assert(tStringFeatures.features.length === 2 && (tStringFeatures.features[0] as any).title === 'Legacy Feature 1', 'String Features to ToolFeature Normalization');

  const tTitledUseCases = normalizeTool({ id: '8', slug: 't8', name: 'T8', useCases: ['Writing Articles', { title: 'Code Refactoring', description: 'Automated refactoring' }] });
  assert(tTitledUseCases.useCases.length === 2 && (tTitledUseCases.useCases[1] as any).title === 'Code Refactoring', 'Heterogeneous Use Cases Normalization');

  // C. Related tools scoring resilience
  console.log("\n2. Running Related-Tools Engine Hardening Tests:");
  const dummy1 = normalizeTool({ id: 'd1', slug: 'd1', name: 'D1', category: 'ai-code-assistants', tags: ['code', 'developer'], priceModel: 'Freemium' });
  const dummy2 = normalizeTool({ id: 'd2', slug: 'd2', name: 'D2', category: 'ai-code-assistants', tags: ['code', 'testing'], priceModel: 'Freemium', rating: 4.8, reviewCount: 50 });
  const dummyMalformed: any = { id: 'd3', slug: 'd3', name: 123, category: null, tags: null, pricing: [{ invalid: true }], useCases: null };

  const scoreValid = calculateRelatedScore(dummy1, dummy2);
  assert(scoreValid > 40, 'Deterministic Category + Tag + Popularity Score', `Score: ${scoreValid}`);

  const scoreMalformed = calculateRelatedScore(dummy1, dummyMalformed);
  assert(typeof scoreMalformed === 'number', 'Malformed Candidate Calculation Resilience', `Score: ${scoreMalformed}`);

  const deterministicList = getDeterministicRelatedTools(dummy1, [dummy2, dummyMalformed, null as any], 3);
  assert(Array.isArray(deterministicList) && deterministicList.length >= 1, 'Deterministic Related List Generation');

  // 3. HTTP RUNTIME TESTS ACROSS 20+ PUBLISHED TOOLS
  console.log("\n3. Testing 20+ Published Tool Pages at Runtime:");
  const publishedSlugsToTest = [
    'chatgpt',
    'claude',
    'midjourney',
    'cursor',
    'github-copilot',
    'elevenlabs',
    'writesonic',
    'synthesia',
    'perplexity',
    'fliki',
    'codeium',
    'phind',
    'sourcegraph-cody',
    'krea',
    'fathom-video',
    'anyword',
    'superhuman',
    'suno',
    'surfer',
    'apollo',
    'rezi' // minimal published tool
  ];

  for (const slug of publishedSlugsToTest) {
    await sleep(300);
    const res = await fetchUrl(`/tool/${slug}`);
    assert(res.status === 200 && !res.isError, `/tool/${slug} (HTTP ${res.status})`, `isError=${res.isError}`);
  }

  // 4. DRAFT ISOLATION AND 404 VERIFICATION
  console.log("\n4. Testing Draft Protection & 404 Routing:");
  await sleep(300);
  const draftRes = await fetchUrl('/tool/metagpt');
  assert(draftRes.status === 404 || draftRes.body.includes('Page Not Found') || draftRes.body.includes('404'), 'Draft Tool /tool/metagpt Blocked from Public Access', `HTTP ${draftRes.status}`);

  await sleep(300);
  const notFoundRes = await fetchUrl('/tool/non-existent-tool-slug-xyz123');
  assert(notFoundRes.status === 404 || notFoundRes.body.includes('404') || notFoundRes.body.includes('Tool Not Found') || notFoundRes.body.includes('Page Not Found'), 'Unknown Slug Returns 404', `HTTP ${notFoundRes.status}`);

  // 5. CORE ROUTE FAMILIES
  console.log("\n5. Testing Core Route Families:");
  const coreRoutes = [
    '/',
    '/category/ai-code-assistants',
    '/category/ai-writing-tools',
    '/alternatives/cursor',
    '/alternatives/chatgpt',
    '/goals/vibe-coding',
    '/workflows/vibe-coding',
    '/compare-tools/cursor-vs-github-copilot',
    '/compare-tools/chatgpt-vs-claude',
    '/latest-ai-tools',
    '/trending-ai-tools',
    '/popular-ai-tools'
  ];

  for (const route of coreRoutes) {
    await sleep(300);
    const res = await fetchUrl(route);
    assert(res.status === 200 && !res.isError, `${route} (HTTP ${res.status})`, `isError=${res.isError}`);
  }

  // 6. Removed Collection 404 Verification
  const colRes = await fetchUrl('/collections/best-ai-writing-tools');
  assert(colRes.status === 404, 'Deprecated Collection Returns 404', `HTTP ${colRes.status}`);

  console.log("\n==================================================");
  console.log(`TEST SUMMARY: Total=${totalTests}, Passed=${passedTests}, Failed=${failedTests}`);
  console.log("==================================================");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runRegressionSuite().catch(err => {
  console.error("Test Suite Unhandled Exception:", err);
  process.exit(1);
});
