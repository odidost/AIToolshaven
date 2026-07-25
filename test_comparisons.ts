import { getToolBySlug } from './src/lib/data/tools-service';
import { getComparisonCandidates } from './src/lib/queries/comparisons';

async function test() {
  const design = await getToolBySlug('design-com');
  console.log("design.compareWith:", design.compareWith);
  const candidates = getComparisonCandidates(design);
  console.log("Candidates:", candidates.map(c => c.slug));
}
test();
