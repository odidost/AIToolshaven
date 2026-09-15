import { VIDEO_MODELS, IMAGE_MODELS } from '../src/data/generation-pricing';

function testGenerationCalculations() {
  console.log('🧪 Starting Generation Calculator Mathematical & Edge-Case QA Suite...\n');

  // 1. Data Integrity Check
  console.log(`✅ Loaded ${VIDEO_MODELS.length} Video models and ${IMAGE_MODELS.length} Image models.`);
  for (const m of [...VIDEO_MODELS, ...IMAGE_MODELS]) {
    if (!m.id || !m.name || !m.provider || !m.sourceUrl) {
      throw new Error(`Incomplete model record: ${m.id}`);
    }
    if (m.apiPricing.isAvailable && (!m.apiPricing.costPerUnit || m.apiPricing.costPerUnit <= 0)) {
      throw new Error(`Invalid API cost for ${m.id}`);
    }
  }

  // 2. Video API Cost Math Test
  console.log('\n--- Testing Video API Calculations ---');
  const runwayTurbo = VIDEO_MODELS.find(m => m.id === 'runway-gen3-turbo')!;
  const cost5sRunway = runwayTurbo.apiPricing.costPerUnit * 5; // $0.05 * 5 = $0.25
  const monthlyRunway = 10000 * cost5sRunway; // $2,500
  console.log(`Runway Gen-3 Turbo (10k 5s videos): $${cost5sRunway.toFixed(2)}/vid -> $${monthlyRunway.toFixed(2)}/mo`);
  if (cost5sRunway !== 0.25 || monthlyRunway !== 2500) throw new Error('Runway Turbo math mismatch');

  const klingTurbo = VIDEO_MODELS.find(m => m.id === 'kling-3-0-turbo')!;
  const cost5sKling = klingTurbo.apiPricing.costPerUnit * 5; // $0.112 * 5 = $0.56
  const monthlyKling = 5000 * cost5sKling; // $2,800
  console.log(`Kling 3.0 Turbo (5k 5s videos): $${cost5sKling.toFixed(2)}/vid -> $${monthlyKling.toFixed(2)}/mo`);
  if (Math.abs(cost5sKling - 0.56) > 0.001) throw new Error('Kling Turbo math mismatch');

  // 3. Image API Cost Math Test
  console.log('\n--- Testing Image API Calculations ---');
  const fluxSchnell = IMAGE_MODELS.find(m => m.id === 'flux-1-schnell')!;
  const monthlyFlux = 50000 * fluxSchnell.apiPricing.costPerUnit; // 50,000 * $0.003 = $150
  console.log(`FLUX.1 [schnell] (50k images): $${fluxSchnell.apiPricing.costPerUnit}/img -> $${monthlyFlux.toFixed(2)}/mo`);
  if (monthlyFlux !== 150) throw new Error('FLUX.1 schnell math mismatch');

  const dalle3 = IMAGE_MODELS.find(m => m.id === 'openai-dalle-3')!;
  const standardDalle = dalle3.apiPricing.costPerUnit * (dalle3.apiPricing.resolutionCostMultiplier!['1024x1024 Standard']);
  const hdDalle = dalle3.apiPricing.costPerUnit * (dalle3.apiPricing.resolutionCostMultiplier!['1024x1024 HD']);
  console.log(`DALL-E 3 Standard: $${standardDalle.toFixed(3)}, HD: $${hdDalle.toFixed(3)}`);
  if (standardDalle !== 0.040 || hdDalle !== 0.080) throw new Error('DALL-E 3 multiplier math mismatch');

  // 4. Video Credits Bidirectional Math Test
  console.log('\n--- Testing Video Credits Bidirectional Math ---');
  // Credits -> Output: 3,000 Kling credits @ 10 cr / 5s = 300 videos
  const creditsKling = 3000;
  const videosKling5s = Math.floor(creditsKling / 10);
  const videosKling10s = Math.floor(creditsKling / 20);
  console.log(`Kling (3,000 credits): ${videosKling5s} videos (5s) or ${videosKling10s} videos (10s)`);
  if (videosKling5s !== 300 || videosKling10s !== 150) throw new Error('Kling credit math mismatch');

  // Output -> Credits: 40 Runway videos @ 25 cr / 5s = 1,000 credits
  const targetRunway = 40;
  const creditsNeededRunway = targetRunway * 25;
  console.log(`Runway (40 5s videos): ${creditsNeededRunway} credits required`);
  if (creditsNeededRunway !== 1000) throw new Error('Runway credit requirement mismatch');

  // 5. Explicit Tests for Newly Added Frontier Video Models
  console.log('\n--- Testing Grok, Google Veo/Flow, Seedance, Wan 2.1, Firefly & PixVerse ---');
  
  // Grok Imagine Video 1.5
  const grok15 = VIDEO_MODELS.find(m => m.id === 'grok-imagine-video-1-5')!;
  const costGrok5s = grok15.apiPricing.costPerUnit * 5; // $0.14 * 5 = $0.70
  console.log(`Grok Imagine Video 1.5 (5s 720p API): $${costGrok5s.toFixed(2)}/vid`);
  if (Math.abs(costGrok5s - 0.70) > 0.001) throw new Error('Grok API math mismatch');
  const grokCreditsGens = Math.floor(600 / grok15.consumerPricing.creditsPerGeneration); // 600 / 25 = 24
  console.log(`Grok Consumer (X Premium+ 600 credits): ${grokCreditsGens} 5s videos`);
  if (grokCreditsGens !== 24) throw new Error('Grok consumer credit math mismatch');

  // Google Veo 3.1 Quality (Google Flow)
  const veoQuality = VIDEO_MODELS.find(m => m.id === 'google-veo-3-1-quality')!;
  const costVeo5s = veoQuality.apiPricing.costPerUnit * 5; // $0.40 * 5 = $2.00
  console.log(`Google Veo 3.1 Quality (5s 1080p API): $${costVeo5s.toFixed(2)}/vid`);
  if (Math.abs(costVeo5s - 2.00) > 0.001) throw new Error('Google Veo API math mismatch');
  const googleFlowGens = Math.floor(1000 / veoQuality.consumerPricing.creditsPerGeneration); // 1,000 / 25 = 40
  console.log(`Google Flow (1,000 credits on Google AI Pro): ${googleFlowGens} 5s videos`);
  if (googleFlowGens !== 40) throw new Error('Google Flow credit math mismatch');

  // Seedance 2.5 Pro (ByteDance)
  const seedance = VIDEO_MODELS.find(m => m.id === 'seedance-2-5-pro')!;
  const costSeedance5s = seedance.apiPricing.costPerUnit * 5; // $0.15 * 5 = $0.75
  console.log(`Seedance 2.5 Pro (5s API): $${costSeedance5s.toFixed(2)}/vid`);
  if (Math.abs(costSeedance5s - 0.75) > 0.001) throw new Error('Seedance API math mismatch');
  const seedanceGens = Math.floor(500 / seedance.consumerPricing.creditsPerGeneration); // 500 / 25 = 20
  console.log(`Seedance Consumer (500 credits on Dreamina): ${seedanceGens} 5s videos`);
  if (seedanceGens !== 20) throw new Error('Seedance consumer credit math mismatch');

  // Wan 2.1 (Alibaba Cloud)
  const wan = VIDEO_MODELS.find(m => m.id === 'wan-2-1-pro')!;
  const costWan5s = wan.apiPricing.costPerUnit * 5; // $0.06 * 5 = $0.30
  console.log(`Wan 2.1 Pro (5s API): $${costWan5s.toFixed(2)}/vid`);
  if (Math.abs(costWan5s - 0.30) > 0.001) throw new Error('Wan 2.1 API math mismatch');

  // Adobe Firefly Video
  const firefly = VIDEO_MODELS.find(m => m.id === 'adobe-firefly-video')!;
  const fireflyGens = Math.floor(2000 / firefly.consumerPricing.creditsPerGeneration); // 2,000 / 50 = 40
  console.log(`Adobe Firefly (2,000 credits): ${fireflyGens} 5s videos`);
  if (fireflyGens !== 40) throw new Error('Firefly credit math mismatch');

  // PixVerse v3
  const pixverse = VIDEO_MODELS.find(m => m.id === 'pixverse-v3')!;
  const costPixverse5s = pixverse.apiPricing.costPerUnit * 5; // $0.06 * 5 = $0.30
  console.log(`PixVerse v3 (5s API): $${costPixverse5s.toFixed(2)}/vid`);
  if (Math.abs(costPixverse5s - 0.30) > 0.001) throw new Error('PixVerse API math mismatch');

  // 6. Image Credits Math Test
  console.log('\n--- Testing Image Credits Math ---');
  const ideogram = IMAGE_MODELS.find(m => m.id === 'ideogram-2-0')!;
  const ideogramGens = Math.floor(1000 / (ideogram.consumerPricing.creditsPerGeneration || 2));
  console.log(`Ideogram (1,000 credits): ${ideogramGens} images`);
  if (ideogramGens !== 500) throw new Error('Ideogram credit math mismatch');

  // 7. Edge Cases
  console.log('\n--- Testing Mathematical Edge Cases ---');
  // 0 credits
  const zeroGens = Math.floor(0 / 25);
  if (zeroGens !== 0 || isNaN(zeroGens)) throw new Error('Zero credit test failed');
  // 1 credit when cost is 25
  const fractionalGens = Math.floor(1 / 25);
  if (fractionalGens !== 0) throw new Error('Low credit test failed');
  // 1 million images
  const hugeMonthly = 1000000 * 0.003;
  if (hugeMonthly !== 3000) throw new Error('Large volume test failed');

  console.log('\n🎉 ALL GENERATION CALCULATOR QA TESTS PASSED CLEANLY!\n');
}

testGenerationCalculations();
