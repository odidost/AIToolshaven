/**
 * Verified Generation Pricing Dataset for Video and Image Models.
 * Strictly separates Developer API Rates from Consumer Subscription Credits.
 * Last verified: September 15, 2026.
 */

export type ModalityType = 'video' | 'image';

export interface GenerationModel {
  id: string;
  name: string;
  provider: string;
  modality: ModalityType;
  description: string;
  category: 'frontier' | 'fast' | 'balanced' | 'open-weight';
  
  // Developer API Pricing (for SaaS Founders)
  apiPricing: {
    isAvailable: boolean;
    unavailableReason?: string;
    costPerUnit: number; // in USD
    billingUnit: 'per_second' | 'per_image' | 'per_generation';
    supportedDurations?: number[]; // in seconds, e.g. [5, 10]
    defaultDuration?: number;
    supportedResolutions?: string[]; // e.g. ['720p', '1080p', '4k']
    defaultResolution?: string;
    resolutionCostMultiplier?: Record<string, number>;
    hasNativeAudio?: boolean;
    audioSurchargePerSecond?: number;
    endpointUrl?: string;
  };

  // Consumer Credit Pricing (for Creators / Users)
  consumerPricing: {
    isAvailable: boolean;
    unavailableReason?: string;
    creditsPerGeneration: number; // base credit cost
    creditUnit: 'credits' | 'tokens' | 'fast_hours' | 'points';
    supportedDurations?: number[];
    defaultDuration?: number;
    creditsPerSecond?: number;
    durationCostMultiplier?: Record<number, number>; // e.g. { 5: 1, 10: 2 }
    supportedResolutions?: string[];
    defaultResolution?: string;
    resolutionCreditMultiplier?: Record<string, number>;
    popularPlans?: Array<{
      planName: string;
      monthlyPrice: number;
      monthlyCredits: number;
    }>;
  };

  sourceUrl: string;
  lastUpdated: string;
  notes?: string;
}

// ============================================================================
// 1. VERIFIED VIDEO GENERATION MODELS
// ============================================================================
export const VIDEO_MODELS: GenerationModel[] = [
  {
    id: 'runway-gen3-turbo',
    name: 'Runway Gen-3 Alpha Turbo',
    provider: 'Runway',
    modality: 'video',
    description: 'High-speed generative video with realistic motion and 720p fidelity.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.05, // $0.05/second ($0.25 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 10],
      defaultDuration: 5,
      supportedResolutions: ['720p'],
      defaultResolution: '720p',
      endpointUrl: 'https://docs.dev.runwayml.com'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 25, // 5 credits/sec * 5s = 25 credits
      creditUnit: 'credits',
      creditsPerSecond: 5,
      supportedDurations: [5, 10],
      defaultDuration: 5,
      durationCostMultiplier: { 5: 1, 10: 2 },
      popularPlans: [
        { planName: 'Standard', monthlyPrice: 15, monthlyCredits: 625 },
        { planName: 'Pro', monthlyPrice: 35, monthlyCredits: 2250 }
      ]
    },
    sourceUrl: 'https://docs.dev.runwayml.com',
    lastUpdated: 'September 15, 2026',
    notes: 'Developer API credits cost $0.01 each. 5 credits/sec on Turbo.'
  },
  {
    id: 'runway-gen3-alpha',
    name: 'Runway Gen-3 Alpha (Full)',
    provider: 'Runway',
    modality: 'video',
    description: 'Cinematic visual fidelity, complex transitions, and photorealistic physics.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.10, // $0.10/second ($0.50 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 10],
      defaultDuration: 5,
      supportedResolutions: ['720p'],
      defaultResolution: '720p',
      endpointUrl: 'https://docs.dev.runwayml.com'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 50, // 10 credits/sec * 5s = 50 credits
      creditUnit: 'credits',
      creditsPerSecond: 10,
      supportedDurations: [5, 10],
      defaultDuration: 5,
      durationCostMultiplier: { 5: 1, 10: 2 },
      popularPlans: [
        { planName: 'Standard', monthlyPrice: 15, monthlyCredits: 625 },
        { planName: 'Pro', monthlyPrice: 35, monthlyCredits: 2250 }
      ]
    },
    sourceUrl: 'https://docs.dev.runwayml.com',
    lastUpdated: 'September 15, 2026',
    notes: 'Flagship production model for cinema and commercials.'
  },
  {
    id: 'kling-3-0-turbo',
    name: 'Kling 3.0 Turbo',
    provider: 'Kling AI',
    modality: 'video',
    description: 'Rapid video generation with native synced audio and dynamic camera control.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.112, // 0.8 Units/sec @ $0.14/unit = $0.112/sec ($0.56 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 10],
      defaultDuration: 5,
      supportedResolutions: ['720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '720p': 1.0, '1080p': 1.25 }, // 1.0 unit/sec for 1080p
      hasNativeAudio: true,
      endpointUrl: 'https://klingai.com/api'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 10, // Standard generation 10 credits
      creditUnit: 'credits',
      creditsPerSecond: 2,
      supportedDurations: [5, 10],
      defaultDuration: 5,
      durationCostMultiplier: { 5: 1, 10: 2 },
      popularPlans: [
        { planName: 'Standard', monthlyPrice: 10, monthlyCredits: 660 },
        { planName: 'Pro', monthlyPrice: 37, monthlyCredits: 3000 },
        { planName: 'Premier', monthlyPrice: 92, monthlyCredits: 8000 }
      ]
    },
    sourceUrl: 'https://klingai.com/api',
    lastUpdated: 'September 15, 2026',
    notes: 'Official API billed in prepaid units ($0.14/unit). Consumer uses credits.'
  },
  {
    id: 'kling-3-0-standard',
    name: 'Kling 3.0 (Pro Motion)',
    provider: 'Kling AI',
    modality: 'video',
    description: 'High-motion physical simulation with advanced prompt adherence.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.084, // 0.6 Units/sec @ $0.14/unit = $0.084/sec ($0.42 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 10],
      defaultDuration: 5,
      supportedResolutions: ['720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '720p': 1.0, '1080p': 1.33 },
      endpointUrl: 'https://klingai.com/api'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 35, // Professional Mode = 35 credits / 5s
      creditUnit: 'credits',
      creditsPerSecond: 7,
      supportedDurations: [5, 10],
      defaultDuration: 5,
      durationCostMultiplier: { 5: 1, 10: 2 },
      popularPlans: [
        { planName: 'Standard', monthlyPrice: 10, monthlyCredits: 660 },
        { planName: 'Pro', monthlyPrice: 37, monthlyCredits: 3000 },
        { planName: 'Premier', monthlyPrice: 92, monthlyCredits: 8000 }
      ]
    },
    sourceUrl: 'https://klingai.com/api',
    lastUpdated: 'September 15, 2026',
    notes: 'Standard consumer mode takes 10 credits; Pro Mode takes 35 credits.'
  },
  {
    id: 'luma-ray-2',
    name: 'Luma Dream Machine (Ray 2)',
    provider: 'Luma AI',
    modality: 'video',
    description: 'Fast multimodal video generation with photorealistic lighting.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.064, // $0.064/sec (~$0.32 for 5s 720p)
      billingUnit: 'per_second',
      supportedDurations: [5],
      defaultDuration: 5,
      supportedResolutions: ['540p', '720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '540p': 0.6, '720p': 1.0, '1080p': 2.0 },
      endpointUrl: 'https://lumalabs.ai/dream-machine/api'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 50, // 50 credits for 5s 720p
      creditUnit: 'credits',
      creditsPerSecond: 10,
      supportedDurations: [5],
      defaultDuration: 5,
      supportedResolutions: ['540p', '720p', '1080p'],
      defaultResolution: '720p',
      resolutionCreditMultiplier: { '540p': 0.4, '720p': 1.0, '1080p': 2.0 },
      popularPlans: [
        { planName: 'Lite', monthlyPrice: 9.99, monthlyCredits: 300 },
        { planName: 'Standard', monthlyPrice: 29.99, monthlyCredits: 1000 },
        { planName: 'Pro', monthlyPrice: 99.99, monthlyCredits: 3500 }
      ]
    },
    sourceUrl: 'https://lumalabs.ai/dream-machine/api',
    lastUpdated: 'September 15, 2026',
    notes: 'Resolution scaling: 540p (20 cr), 720p (50 cr), 1080p (100 cr).'
  },
  {
    id: 'minimax-hailuo-fast',
    name: 'MiniMax Hailuo 2.3 Fast',
    provider: 'MiniMax',
    modality: 'video',
    description: 'Cost-effective high-framerate character and landscape video synthesis.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.19, // $0.19 flat per 6s generation at 768p (~$0.031/sec)
      billingUnit: 'per_generation',
      supportedDurations: [6],
      defaultDuration: 6,
      supportedResolutions: ['768p'],
      defaultResolution: '768p',
      endpointUrl: 'https://platform.minimaxi.com'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 150,
      creditUnit: 'points',
      supportedDurations: [6],
      defaultDuration: 6,
      popularPlans: [
        { planName: 'Standard Points', monthlyPrice: 19.90, monthlyCredits: 2000 }
      ]
    },
    sourceUrl: 'https://platform.minimaxi.com',
    lastUpdated: 'September 15, 2026',
    notes: 'Deterministic $0.19 per 6-second generation at 768p.'
  },
  {
    id: 'minimax-hailuo-hd',
    name: 'MiniMax Hailuo 2.3 HD (1080p)',
    provider: 'MiniMax',
    modality: 'video',
    description: 'Full HD 1080p video generation with nuanced facial expressions.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.49, // $0.49 per 6s generation at 1080p (~$0.081/sec)
      billingUnit: 'per_generation',
      supportedDurations: [6],
      defaultDuration: 6,
      supportedResolutions: ['1080p'],
      defaultResolution: '1080p',
      endpointUrl: 'https://platform.minimaxi.com'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 300,
      creditUnit: 'points',
      supportedDurations: [6],
      defaultDuration: 6,
      popularPlans: [
        { planName: 'Standard Points', monthlyPrice: 19.90, monthlyCredits: 2000 }
      ]
    },
    sourceUrl: 'https://platform.minimaxi.com',
    lastUpdated: 'September 15, 2026',
    notes: 'HD 1080p mode for premium commercial clips.'
  },
  {
    id: 'google-veo-3-1-quality',
    name: 'Google Veo 3.1 Quality (Google Flow)',
    provider: 'Google DeepMind',
    modality: 'video',
    description: 'Cinematic 4K-capable video generation with native audio, spatial audio, and camera physics.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.40, // $0.40/sec ($2.00 for 5s, $3.20 for 8s)
      billingUnit: 'per_second',
      supportedDurations: [5, 8],
      defaultDuration: 5,
      supportedResolutions: ['720p', '1080p'],
      defaultResolution: '1080p',
      endpointUrl: 'https://cloud.google.com/vertex-ai/pricing'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 25, // 25 Flow credits on Google Flow
      creditUnit: 'credits',
      supportedDurations: [5, 8],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'Google AI Pro', monthlyPrice: 19.99, monthlyCredits: 1000 },
        { planName: 'Google AI Ultra', monthlyPrice: 249.99, monthlyCredits: 12500 }
      ]
    },
    sourceUrl: 'https://cloud.google.com/vertex-ai/pricing',
    lastUpdated: 'September 15, 2026',
    notes: 'Official Vertex AI rate: $0.40/sec. Google Flow provides 1,000 credits/mo ($19.99).'
  },
  {
    id: 'google-veo-3-1-fast',
    name: 'Google Veo 3.1 Fast',
    provider: 'Google DeepMind',
    modality: 'video',
    description: 'High-throughput multimodal video model optimized for production speed.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.10, // $0.10/sec ($0.50 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 8],
      defaultDuration: 5,
      supportedResolutions: ['720p'],
      defaultResolution: '720p',
      endpointUrl: 'https://cloud.google.com/vertex-ai/pricing'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 10, // 10 Flow credits
      creditUnit: 'credits',
      supportedDurations: [5, 8],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'Google AI Pro', monthlyPrice: 19.99, monthlyCredits: 1000 },
        { planName: 'Google AI Ultra', monthlyPrice: 249.99, monthlyCredits: 12500 }
      ]
    },
    sourceUrl: 'https://cloud.google.com/vertex-ai/pricing',
    lastUpdated: 'September 15, 2026',
    notes: 'Vertex AI: $0.10/sec. In Google Flow: ~10 credits per generation (100 videos/mo on Pro).'
  },
  {
    id: 'google-veo-lite',
    name: 'Google Veo 3.1 Lite',
    provider: 'Google DeepMind',
    modality: 'video',
    description: 'Efficient low-latency video generation for mobile previews and drafts.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.05, // $0.05/sec ($0.25 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 8],
      defaultDuration: 5,
      supportedResolutions: ['720p'],
      defaultResolution: '720p',
      endpointUrl: 'https://cloud.google.com/vertex-ai/pricing'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 5, // 5 Flow credits
      creditUnit: 'credits',
      supportedDurations: [5, 8],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'Google AI Pro', monthlyPrice: 19.99, monthlyCredits: 1000 }
      ]
    },
    sourceUrl: 'https://cloud.google.com/vertex-ai/pricing',
    lastUpdated: 'September 15, 2026',
    notes: 'Direct developer API on Vertex AI ($0.05/sec). Google Flow draft tier.'
  },
  {
    id: 'grok-imagine-video-1-5',
    name: 'Grok Imagine Video 1.5',
    provider: 'xAI',
    modality: 'video',
    description: 'State-of-the-art physics simulation, text-to-video, and image-to-video animation.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.14, // $0.14/sec at 720p ($0.70 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 10],
      defaultDuration: 5,
      supportedResolutions: ['480p', '720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '480p': 0.571, '720p': 1.0, '1080p': 1.786 }, // $0.08, $0.14, $0.25/s
      endpointUrl: 'https://console.x.ai'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 25, // 25 credits per 5s video
      creditUnit: 'credits',
      creditsPerSecond: 5,
      supportedDurations: [5, 10],
      defaultDuration: 5,
      durationCostMultiplier: { 5: 1, 10: 2 },
      popularPlans: [
        { planName: 'X Premium+', monthlyPrice: 16, monthlyCredits: 600 },
        { planName: 'SuperGrok', monthlyPrice: 30, monthlyCredits: 1500 }
      ]
    },
    sourceUrl: 'https://console.x.ai',
    lastUpdated: 'September 15, 2026',
    notes: 'Official xAI Console rate: 480p ($0.08/s), 720p ($0.14/s), 1080p ($0.25/s).'
  },
  {
    id: 'grok-imagine-video-fast',
    name: 'Grok Imagine Video (Fast)',
    provider: 'xAI',
    modality: 'video',
    description: 'High-speed generative video optimized for real-time conversational agents.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.07, // $0.07/sec at 720p ($0.35 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5],
      defaultDuration: 5,
      supportedResolutions: ['480p', '720p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '480p': 0.714, '720p': 1.0 }, // $0.05 vs $0.07/s
      endpointUrl: 'https://console.x.ai'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 15,
      creditUnit: 'credits',
      supportedDurations: [5],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'X Premium+', monthlyPrice: 16, monthlyCredits: 600 },
        { planName: 'SuperGrok', monthlyPrice: 30, monthlyCredits: 1500 }
      ]
    },
    sourceUrl: 'https://console.x.ai',
    lastUpdated: 'September 15, 2026',
    notes: 'Fast 720p generation at $0.07/second.'
  },
  {
    id: 'seedance-2-5-pro',
    name: 'Seedance 2.5 Pro',
    provider: 'ByteDance',
    modality: 'video',
    description: 'Dynamic character motions, human dance generation, and synchronized gestures.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.15, // ~$0.15/sec on BytePlus ($0.75 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5, 10],
      defaultDuration: 5,
      supportedResolutions: ['720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '720p': 1.0, '1080p': 1.53 },
      endpointUrl: 'https://www.byteplus.com/en/product/modelark'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 25, // Universal AI credits on Dreamina
      creditUnit: 'credits',
      creditsPerSecond: 5,
      supportedDurations: [5, 10],
      defaultDuration: 5,
      durationCostMultiplier: { 5: 1, 10: 2 },
      popularPlans: [
        { planName: 'Basic', monthlyPrice: 9.99, monthlyCredits: 500 },
        { planName: 'Pro', monthlyPrice: 29.99, monthlyCredits: 2000 }
      ]
    },
    sourceUrl: 'https://www.byteplus.com',
    lastUpdated: 'September 15, 2026',
    notes: 'ByteDance flagship video model hosted on BytePlus ModelArk and Dreamina.'
  },
  {
    id: 'wan-2-1-pro',
    name: 'Wan 2.1 (14B Pro)',
    provider: 'Alibaba Cloud',
    modality: 'video',
    description: 'High-quality open-weight video standard with text and image-to-video capabilities.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.06, // $0.06/sec on Alibaba Model Studio Standard ($0.30 for 5s)
      billingUnit: 'per_second',
      supportedDurations: [5],
      defaultDuration: 5,
      supportedResolutions: ['720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '720p': 1.0, '1080p': 1.5 }, // $0.09/s Pro
      endpointUrl: 'https://www.alibabacloud.com/product/modelstudio'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 20,
      creditUnit: 'credits',
      supportedDurations: [5],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'Standard Pack', monthlyPrice: 15, monthlyCredits: 1000 }
      ]
    },
    sourceUrl: 'https://www.alibabacloud.com',
    lastUpdated: 'September 15, 2026',
    notes: 'Alibaba Cloud Model Studio: Standard mode $0.06/s, Professional mode $0.09/s.'
  },
  {
    id: 'adobe-firefly-video',
    name: 'Adobe Firefly Video',
    provider: 'Adobe',
    modality: 'video',
    description: 'Commercially safe, cinematic B-roll generation with timeline integration.',
    category: 'balanced',
    apiPricing: {
      isAvailable: false,
      unavailableReason: 'Adobe Firefly API requires custom enterprise contract. Consumer credits supported.',
      costPerUnit: 0,
      billingUnit: 'per_second'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 50, // 50 generative credits per 5s video
      creditUnit: 'credits',
      supportedDurations: [5],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'Firefly Standard', monthlyPrice: 9.99, monthlyCredits: 2000 },
        { planName: 'Firefly Pro', monthlyPrice: 19.99, monthlyCredits: 4000 }
      ]
    },
    sourceUrl: 'https://www.adobe.com/products/firefly.html',
    lastUpdated: 'September 15, 2026',
    notes: 'Consumer uses Creative Cloud Generative Credits (~50 credits / 5s video).'
  },
  {
    id: 'pixverse-v3',
    name: 'PixVerse v3',
    provider: 'PixVerse',
    modality: 'video',
    description: 'Artistic motion control, cinematic anime, and 4K character animation.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.06, // ~$0.06/sec ($0.30 for 5s 720p)
      billingUnit: 'per_second',
      supportedDurations: [5],
      defaultDuration: 5,
      supportedResolutions: ['720p', '1080p'],
      defaultResolution: '720p',
      resolutionCostMultiplier: { '720p': 1.0, '1080p': 1.67 },
      endpointUrl: 'https://platform.pixverse.ai'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 45, // 9 credits/sec * 5s = 45 credits
      creditUnit: 'credits',
      creditsPerSecond: 9,
      supportedDurations: [5],
      defaultDuration: 5,
      popularPlans: [
        { planName: 'Standard', monthlyPrice: 10, monthlyCredits: 1200 },
        { planName: 'Pro', monthlyPrice: 30, monthlyCredits: 6000 }
      ]
    },
    sourceUrl: 'https://pixverse.ai',
    lastUpdated: 'September 15, 2026',
    notes: '720p 5s generation consumes ~45 credits. Standard plan provides 1,200 credits.'
  },
  {
    id: 'pika-2-0',
    name: 'Pika 2.0',
    provider: 'Pika',
    modality: 'video',
    description: 'Creative video effects, camera movements, and animated transformations.',
    category: 'balanced',
    apiPricing: {
      isAvailable: false,
      unavailableReason: 'Pika API requires enterprise approval. Consumer credit calculation available.',
      costPerUnit: 0,
      billingUnit: 'per_second'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 10, // Turbo is ~10 credits
      creditUnit: 'credits',
      supportedDurations: [3, 5],
      defaultDuration: 3,
      popularPlans: [
        { planName: 'Standard', monthlyPrice: 10, monthlyCredits: 700 },
        { planName: 'Pro', monthlyPrice: 35, monthlyCredits: 2300 }
      ]
    },
    sourceUrl: 'https://pika.art',
    lastUpdated: 'September 15, 2026',
    notes: 'Turbo clips consume ~10 credits. Pro effects consume ~20 credits.'
  }
];

// ============================================================================
// 2. VERIFIED IMAGE GENERATION MODELS
// ============================================================================
export const IMAGE_MODELS: GenerationModel[] = [
  {
    id: 'flux-1-schnell',
    name: 'FLUX.1 [schnell]',
    provider: 'Black Forest Labs',
    modality: 'image',
    description: 'Ultra-fast 4-step high-fidelity image generator optimized for local and API speed.',
    category: 'fast',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.003, // $0.003/image ($3.00 / 1,000 images)
      billingUnit: 'per_image',
      supportedResolutions: ['1024x1024'],
      defaultResolution: '1024x1024',
      endpointUrl: 'https://fal.ai/models/fal-ai/flux/schnell'
    },
    consumerPricing: {
      isAvailable: false,
      unavailableReason: 'Open-weight model; primarily accessed via third-party web tools or direct API.',
      creditsPerGeneration: 0,
      creditUnit: 'credits'
    },
    sourceUrl: 'https://replicate.com/black-forest-labs/flux-schnell',
    lastUpdated: 'September 15, 2026',
    notes: 'Industry benchmark for budget-friendly commercial image generation.'
  },
  {
    id: 'flux-1-dev',
    name: 'FLUX.1 [dev]',
    provider: 'Black Forest Labs',
    modality: 'image',
    description: 'Guidance-distilled model with superior typography, anatomy, and prompt adherence.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.025, // $0.025/image
      billingUnit: 'per_image',
      supportedResolutions: ['1024x1024'],
      defaultResolution: '1024x1024',
      endpointUrl: 'https://fal.ai/models/fal-ai/flux/dev'
    },
    consumerPricing: {
      isAvailable: false,
      unavailableReason: 'Direct developer API access recommended.',
      creditsPerGeneration: 0,
      creditUnit: 'credits'
    },
    sourceUrl: 'https://fal.ai/models/fal-ai/flux/dev',
    lastUpdated: 'September 15, 2026',
    notes: 'Exceptional visual aesthetics at $0.025/image.'
  },
  {
    id: 'flux-1-1-pro',
    name: 'FLUX 1.1 [pro]',
    provider: 'Black Forest Labs',
    modality: 'image',
    description: 'State-of-the-art commercial production model with 2K resolution and raw modes.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.040, // $0.040/image
      billingUnit: 'per_image',
      supportedResolutions: ['1024x1024', '2048x2048 (Ultra)'],
      defaultResolution: '1024x1024',
      resolutionCostMultiplier: { '1024x1024': 1.0, '2048x2048 (Ultra)': 1.5 }, // $0.06 for Ultra
      endpointUrl: 'https://bfl.ml'
    },
    consumerPricing: {
      isAvailable: false,
      unavailableReason: 'BFL API is direct developer pay-as-you-go.',
      creditsPerGeneration: 0,
      creditUnit: 'credits'
    },
    sourceUrl: 'https://bfl.ml',
    lastUpdated: 'September 15, 2026',
    notes: 'Official BFL API endpoint rate: $0.040 standard, $0.060 Ultra 4MP.'
  },
  {
    id: 'openai-dalle-3',
    name: 'OpenAI DALL-E 3',
    provider: 'OpenAI',
    modality: 'image',
    description: 'Nuanced prompt understanding with native multi-subject composition.',
    category: 'frontier',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.040, // $0.040 for 1024x1024 Standard
      billingUnit: 'per_image',
      supportedResolutions: ['1024x1024 Standard', '1024x1792 Standard', '1024x1024 HD', '1024x1792 HD'],
      defaultResolution: '1024x1024 Standard',
      resolutionCostMultiplier: {
        '1024x1024 Standard': 1.0,
        '1024x1792 Standard': 2.0, // $0.080
        '1024x1024 HD': 2.0,       // $0.080
        '1024x1792 HD': 3.0        // $0.120
      },
      endpointUrl: 'https://api.openai.com/v1/images/generations'
    },
    consumerPricing: {
      isAvailable: false,
      unavailableReason: 'Included in ChatGPT Plus ($20/mo) with dynamic fair-use rate limits.',
      creditsPerGeneration: 0,
      creditUnit: 'credits'
    },
    sourceUrl: 'https://openai.com/api/pricing',
    lastUpdated: 'September 15, 2026',
    notes: 'Standard 1024x1024 is $0.040; HD or widescreen is $0.080–$0.120.'
  },
  {
    id: 'google-imagen-3',
    name: 'Google Imagen 3',
    provider: 'Google',
    modality: 'image',
    description: 'High-detail visual textures with rich lighting and low visual artifacts.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.030, // $0.030/image Standard
      billingUnit: 'per_image',
      supportedResolutions: ['Standard 1024x1024', 'Fast 1024x1024'],
      defaultResolution: 'Standard 1024x1024',
      resolutionCostMultiplier: {
        'Standard 1024x1024': 1.0,
        'Fast 1024x1024': 0.667 // $0.020/image
      },
      endpointUrl: 'https://cloud.google.com/vertex-ai/pricing'
    },
    consumerPricing: {
      isAvailable: false,
      unavailableReason: 'Available via Gemini Advanced subscription with prompt pools.',
      creditsPerGeneration: 0,
      creditUnit: 'credits'
    },
    sourceUrl: 'https://cloud.google.com/vertex-ai/pricing',
    lastUpdated: 'September 15, 2026',
    notes: 'Vertex AI rate: $0.030 per standard image, $0.020 per fast image.'
  },
  {
    id: 'ideogram-2-0',
    name: 'Ideogram 2.0',
    provider: 'Ideogram',
    modality: 'image',
    description: 'Market leader in typography, poster design, graphic text, and logos.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.060, // $0.060 Default mode
      billingUnit: 'per_image',
      supportedResolutions: ['Turbo Mode', 'Default Mode', 'Quality Mode'],
      defaultResolution: 'Default Mode',
      resolutionCostMultiplier: {
        'Turbo Mode': 0.5,   // $0.030
        'Default Mode': 1.0, // $0.060
        'Quality Mode': 1.5  // $0.090
      },
      endpointUrl: 'https://ideogram.ai/features/api-pricing'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 2, // ~2 credits for Default, 1 credit for Turbo
      creditUnit: 'credits',
      popularPlans: [
        { planName: 'Basic', monthlyPrice: 8, monthlyCredits: 400 },
        { planName: 'Plus', monthlyPrice: 20, monthlyCredits: 1000 },
        { planName: 'Pro', monthlyPrice: 60, monthlyCredits: 3000 }
      ]
    },
    sourceUrl: 'https://ideogram.ai/features/api-pricing',
    lastUpdated: 'September 15, 2026',
    notes: 'API: $0.03 (Turbo), $0.06 (Default), $0.09 (Quality). Consumer: ~1-2 credits/gen.'
  },
  {
    id: 'recraft-v3',
    name: 'Recraft v3',
    provider: 'Recraft',
    modality: 'image',
    description: 'Vector SVG, icon design, and brand design system generation.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.040, // $0.040 raster
      billingUnit: 'per_image',
      supportedResolutions: ['Raster Image ($0.04)', 'Vector SVG ($0.08)'],
      defaultResolution: 'Raster Image ($0.04)',
      resolutionCostMultiplier: {
        'Raster Image ($0.04)': 1.0,
        'Vector SVG ($0.08)': 2.0 // $0.080
      },
      endpointUrl: 'https://recraft.ai'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 1, // 1 credit for raster, 2 credits for vector
      creditUnit: 'credits',
      popularPlans: [
        { planName: 'Basic', monthlyPrice: 25, monthlyCredits: 1000 },
        { planName: 'Pro', monthlyPrice: 48, monthlyCredits: 2500 }
      ]
    },
    sourceUrl: 'https://recraft.ai',
    lastUpdated: 'September 15, 2026',
    notes: 'Official API: $0.040 per raster, $0.080 per vector SVG.'
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.Ai (Phoenix / Kino)',
    provider: 'Leonardo.Ai',
    modality: 'image',
    description: 'Artistic assets, concept art, and fine-tuned community generation pipelines.',
    category: 'balanced',
    apiPricing: {
      isAvailable: true,
      costPerUnit: 0.012, // PAYG ~ $0.012/image
      billingUnit: 'per_image',
      supportedResolutions: ['Standard 1024x1024'],
      defaultResolution: 'Standard 1024x1024',
      endpointUrl: 'https://leonardo.ai'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 16, // ~16 tokens per standard generation
      creditUnit: 'tokens',
      popularPlans: [
        { planName: 'Apprentice', monthlyPrice: 12, monthlyCredits: 8500 },
        { planName: 'Artisan', monthlyPrice: 30, monthlyCredits: 25000 },
        { planName: 'Maestro', monthlyPrice: 60, monthlyCredits: 60000 }
      ]
    },
    sourceUrl: 'https://leonardo.ai',
    lastUpdated: 'September 15, 2026',
    notes: 'Consumer uses monthly tokens (e.g. 16 tokens/gen). API is PAYG dollar-based.'
  },
  {
    id: 'midjourney-v6-1',
    name: 'Midjourney v6.1',
    provider: 'Midjourney',
    modality: 'image',
    description: 'Unmatched photorealism, artistic rendering, and visual texture synthesis.',
    category: 'frontier',
    apiPricing: {
      isAvailable: false,
      unavailableReason: 'Midjourney does not offer an official public developer API. Use consumer credit calculator.',
      costPerUnit: 0,
      billingUnit: 'per_image'
    },
    consumerPricing: {
      isAvailable: true,
      creditsPerGeneration: 1, // ~1 fast generation unit (approx 1 minute fast GPU time)
      creditUnit: 'fast_hours',
      popularPlans: [
        { planName: 'Basic Plan', monthlyPrice: 10, monthlyCredits: 200 }, // ~3.3 fast hrs ≈ 200 images
        { planName: 'Standard Plan', monthlyPrice: 30, monthlyCredits: 900 }, // ~15 fast hrs ≈ 900 images + unlimited relaxed
        { planName: 'Pro Plan', monthlyPrice: 60, monthlyCredits: 1800 } // ~30 fast hrs ≈ 1800 images
      ]
    },
    sourceUrl: 'https://docs.midjourney.com',
    lastUpdated: 'September 15, 2026',
    notes: 'Midjourney operates on Fast GPU Hours. 1 fast hour ≈ 60 standard image jobs.'
  }
];
