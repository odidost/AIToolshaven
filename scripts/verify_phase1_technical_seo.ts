import { proxy } from '../src/proxy';
import { NextRequest } from 'next/server';
import { resolveCategory } from '../src/lib/data/categories';
import { getComparisonBySlug, comparisons } from '../src/lib/comparisons';
import { shouldIndexTool, PROVEN_SEARCH_SIGNAL_TOOL_SLUGS } from '../src/lib/utils/tool-indexability';
import nextConfig from '../next.config';

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}${detail ? ` -> ${detail}` : ''}`);
    failed++;
  }
}

async function runTests() {
  console.log('=== 1. NEXT.CONFIG REDIRECTS AUDIT ===');
  const redirects = await (nextConfig as any).redirects();
  
  const mktgRedirect = redirects.find((r: any) => r.source === '/ai-marketing-tools');
  assert(Boolean(mktgRedirect && mktgRedirect.destination === '/category/marketing-sales' && mktgRedirect.permanent),
    '/ai-marketing-tools 301 redirect to /category/marketing-sales');

  const imgGenRedirect = redirects.find((r: any) => r.source === '/category/ai-image-generation-tools');
  assert(Boolean(imgGenRedirect && imgGenRedirect.destination === '/category/ai-image-generators' && imgGenRedirect.permanent),
    '/category/ai-image-generation-tools 301 redirect to /category/ai-image-generators');

  const lumaRedirect = redirects.find((r: any) => r.source === '/tool/luma');
  assert(Boolean(lumaRedirect && lumaRedirect.destination === '/tool/luma-dream-machine' && lumaRedirect.permanent),
    '/tool/luma 301 redirect to /tool/luma-dream-machine');

  const capcutOpusRedirect = redirects.find((r: any) => r.source === '/compare-tools/capcut-vs-opus-clip');
  assert(Boolean(capcutOpusRedirect && capcutOpusRedirect.destination === '/compare-tools/opus-clip-vs-capcut' && capcutOpusRedirect.permanent),
    '/compare-tools/capcut-vs-opus-clip 301 redirect to /compare-tools/opus-clip-vs-capcut');

  console.log('\n=== 2. CATEGORY RESOLUTION & ALIASES AUDIT ===');
  const resolvedImg = resolveCategory('ai-image-generation-tools');
  assert(resolvedImg.slug === 'ai-image-generators', 'resolveCategory(ai-image-generation-tools) -> ai-image-generators', `got: ${resolvedImg.slug}`);

  const resolvedMktg = resolveCategory('ai-marketing-tools');
  assert(resolvedMktg.slug === 'marketing-sales', 'resolveCategory(ai-marketing-tools) -> marketing-sales', `got: ${resolvedMktg.slug}`);

  console.log('\n=== 3. COMPARISON RECORDS AUDIT ===');
  const opusCapcut = getComparisonBySlug('opus-clip-vs-capcut');
  assert(Boolean(opusCapcut && opusCapcut.tool1.name === 'Opus Clip' && opusCapcut.tool2.name === 'CapCut'),
    'opus-clip-vs-capcut curated record exists with correct tools');

  const gammaSlides = getComparisonBySlug('gamma-vs-slidespilot-ai');
  assert(Boolean(gammaSlides && gammaSlides.tool1.name === 'Gamma' && gammaSlides.tool2.name === 'Slidespilot AI'),
    'gamma-vs-slidespilot-ai curated record exists with correct tools');

  console.log('\n=== 4. SELECTIVE TOOL INDEXABILITY AUDIT ===');
  const toolsData = require('../data/tools.json');

  const cursorTool = toolsData.find((t: any) => t.slug === 'cursor');
  assert(shouldIndexTool(cursorTool), 'Cursor tool is indexable');

  const capcutTool = toolsData.find((t: any) => t.slug === 'capcut');
  assert(shouldIndexTool(capcutTool), 'CapCut tool is indexable');

  const piTool = toolsData.find((t: any) => t.slug === 'pi');
  assert(shouldIndexTool(piTool), 'Pi tool is indexable');

  const lumaDreamMachineTool = toolsData.find((t: any) => t.slug === 'luma-dream-machine');
  assert(shouldIndexTool(lumaDreamMachineTool), 'Luma Dream Machine tool is indexable');

  const lumaRedirectTool = toolsData.find((t: any) => t.id === 'luma');
  assert(!shouldIndexTool(lumaRedirectTool), 'Luma duplicate tool is NOT indexable (Status: Redirect)');

  const draftTool = { slug: 'draft-ai', status: 'Draft', name: 'Draft AI', description: 'Testing draft tool' } as any;
  assert(!shouldIndexTool(draftTool), 'Draft tool is NOT indexable');

  const totalIndexed = toolsData.filter(shouldIndexTool).length;
  assert(totalIndexed > 20 && totalIndexed < 100, `Selective indexation controls crawl budget (${totalIndexed} indexed out of ${toolsData.length})`);

  console.log('\n=== 5. ?NOCACHE= EDGE PROXY REDIRECT AUDIT ===');
  const reqHomeNocache = new NextRequest('https://aitoolshaven.com/?nocache=1780202763');
  const resHome = await proxy(reqHomeNocache);
  assert(resHome.status === 301 && resHome.headers.get('location') === 'https://aitoolshaven.com/',
    '/?nocache=1780202763 301 redirects to clean /');

  const reqToolNocache = new NextRequest('https://aitoolshaven.com/tool/cursor?nocache=1780202763');
  const resTool = await proxy(reqToolNocache);
  assert(resTool.status === 301 && resTool.headers.get('location') === 'https://aitoolshaven.com/tool/cursor',
    '/tool/cursor?nocache=1780202763 301 redirects to clean /tool/cursor');

  const reqPreserveParams = new NextRequest('https://aitoolshaven.com/submit/form?plan=launch&nocache=999');
  const resPreserve = await proxy(reqPreserveParams);
  assert(resPreserve.status === 301 && resPreserve.headers.get('location') === 'https://aitoolshaven.com/submit/form?plan=launch',
    '/submit/form?plan=launch&nocache=999 preserves ?plan=launch and strips nocache');

  const reqNormal = new NextRequest('https://aitoolshaven.com/category/coding-assistants');
  const resNormal = await proxy(reqNormal);
  assert(resNormal.status === 200, '/category/coding-assistants proceeds without redirect (status 200)');

  console.log(`\n================================`);
  console.log(`RESULTS: ${passed} passed, ${failed} failed`);
  console.log(`================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Fatal error in tests:', err);
  process.exit(1);
});
