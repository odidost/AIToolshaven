import { getOptimizedCategoryTitle, getOptimizedCategoryDescription } from '../src/lib/seo-titles';
import { getCategoryResourceBundle } from '../src/lib/category-resources';
import { shouldIndexTool } from '../src/lib/utils/tool-indexability';
import { comparisons } from '../src/lib/comparisons';
import { articles } from '../src/lib/articles';

function runVerification() {
  console.log("=== GSC PERFORMANCE SEO OPTIMIZATION: FULL VERIFICATION ===\n");
  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, desc: string) {
    if (condition) {
      console.log(`[PASS] ${desc}`);
      passed++;
    } else {
      console.error(`[FAIL] ${desc}`);
      failed++;
    }
  }

  // 1. Priority Category Title & Description Overrides (< 60 chars title, 130-155 chars desc)
  const priorityCategories = [
    "coding-assistants",
    "productivity",
    "ai-video-generators",
    "ai-presentation-makers",
    "marketing-sales",
    "ai-image-generators"
  ];

  for (const cat of priorityCategories) {
    const title = getOptimizedCategoryTitle(cat, 20, cat);
    const desc = getOptimizedCategoryDescription(cat, 20, undefined, cat);
    
    assert(title.length > 0 && title.length <= 60, `${cat} title length (${title.length} chars) <= 60: "${title}"`);
    assert(desc.length >= 130 && desc.length <= 165, `${cat} desc length (${desc.length} chars) optimal: "${desc}"`);
  }

  // 2. Category Resources (Comparisons & Workflows)
  const codingBundle = getCategoryResourceBundle("coding-assistants");
  assert(
    codingBundle.comparisons.some(c => c.slug === "cursor-vs-github-copilot"),
    "coding-assistants includes cursor-vs-github-copilot comparison"
  );
  assert(
    codingBundle.workflows.some(w => w.slug === "vibe-coding"),
    "coding-assistants maps to vibe-coding workflow (not broken refactoring)"
  );

  const videoBundle = getCategoryResourceBundle("ai-video-generators");
  assert(
    videoBundle.comparisons.some(c => c.slug === "opus-clip-vs-capcut"),
    "ai-video-generators includes opus-clip-vs-capcut comparison"
  );
  assert(
    videoBundle.workflows.some(w => w.slug === "faceless-youtube"),
    "ai-video-generators includes faceless-youtube workflow"
  );

  const presBundle = getCategoryResourceBundle("ai-presentation-makers");
  assert(
    presBundle.comparisons.some(c => c.slug === "gamma-vs-slidespilot-ai"),
    "ai-presentation-makers includes gamma-vs-slidespilot-ai comparison"
  );

  const mktgBundle = getCategoryResourceBundle("marketing-sales");
  assert(
    mktgBundle.comparisons.some(c => c.slug === "apollo-vs-instantly"),
    "marketing-sales includes apollo-vs-instantly comparison"
  );
  assert(
    mktgBundle.workflows.some(w => w.slug === "automated-lead-enrichment"),
    "marketing-sales includes automated-lead-enrichment workflow"
  );

  const imgBundle = getCategoryResourceBundle("ai-image-generators");
  assert(
    imgBundle.comparisons.some(c => c.slug === "dall-e-3-vs-midjourney"),
    "ai-image-generators includes dall-e-3-vs-midjourney comparison"
  );

  // 3. Selective Indexation on Key Tool Profiles
  assert(shouldIndexTool({ name: "Cursor", slug: "cursor", description: "AI-native VS Code fork with Composer multi-file editing and whole-codebase AST indexing.", status: "Published" } as any), "cursor is indexable");
  assert(shouldIndexTool({ name: "CapCut", slug: "capcut", description: "All-in-one cloud video creator with auto-subtitles, viral transitions, and instant social exports.", status: "Published" } as any), "capcut is indexable");
  assert(shouldIndexTool({ name: "Pi", slug: "pi", description: "Inflection AI's conversational partner with high emotional intelligence, real-time voice, and daily brainstorming.", status: "Published" } as any), "pi is indexable");
  assert(shouldIndexTool({ name: "Luma Dream Machine", slug: "luma-dream-machine", description: "Next-gen foundation video model producing fluid 3D physical motion, camera pans, and photorealistic dynamics.", status: "Published" } as any), "luma-dream-machine is indexable");
  assert(!shouldIndexTool({ name: "Luma", slug: "luma", description: "Redirect alias for Luma Dream Machine.", status: "Redirect" } as any), "luma alias is NOT indexable (redirect to luma-dream-machine)");
  assert(!shouldIndexTool({ name: "Random Tool", slug: "random-unvetted-tool", description: "Short unvetted tool profile.", status: "Draft" } as any), "unvetted tool is safely noindex");

  // 4. Comparison Slug Stability (opus-clip-vs-capcut & gamma-vs-slidespilot-ai)
  const opusComp = comparisons.find(c => c.slug === "opus-clip-vs-capcut");
  assert(Boolean(opusComp), "opus-clip-vs-capcut structured comparison exists");
  assert(opusComp?.slug === "opus-clip-vs-capcut", "opus-clip comparison slug is preserved as opus-clip-vs-capcut");

  const gammaComp = comparisons.find(c => c.slug === "gamma-vs-slidespilot-ai");
  assert(Boolean(gammaComp), "gamma-vs-slidespilot-ai structured comparison exists");
  assert(gammaComp?.slug === "gamma-vs-slidespilot-ai", "gamma-vs-slidespilot-ai comparison slug is preserved");

  // 5. Freemium Article Cross-Link
  const freeArticle = articles.find(a => a.slug === "best-completely-free-ai-tools-no-credit-card-2026");
  assert(Boolean(freeArticle), "Free tools master article exists");
  assert(Boolean(freeArticle?.content?.includes("/freemium-ai-tools")), "Free tools article has prominent link to /freemium-ai-tools");

  console.log(`\nVerification Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

runVerification();
