export interface ToolFeature {
    title: string;
    description: string;
    icon: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
}

export interface SocialLinks {
    website?: string;
    x?: string;
    linkedin?: string;
    github?: string;
    discord?: string;
    youtube?: string;
}

export interface ToolStats {
    monthlyVisits?: number;
    launchYear?: number;
    employees?: string;
    monthlyUsers?: string;
}

export interface ToolEditorial {
    overview?: string;
    verdict?: string;
    pricing?: string;
    comparison?: string;
    useCaseFocus?: string;
    compareWithBreakdown?: Record<string, string>;
    faqs?: { question: string; answer: string }[];
}


export interface AITool {
    id: string;
    name: string;
    slug: string;

    company?: string;

    tagline: string;
    description: string;

    category: string;
    category_id?: string;
    categoryName?: string;
    categorySlug?: string;
    subCategory?: string;
    subCategorySlug?: string;
    additionalCategories?: string[];

    priceModel: "Free" | "Freemium" | "Paid" | "Enterprise";
    price?: string;

    rating?: number;
    reviewCount?: number;

    easeOfUse?: number;
    featureRating?: number;
    valueForMoney?: number;
    performance?: number;
    support?: number;

    logoUrl: string;
    screenshotUrl?: string;
    imageUrl: string;

    websiteUrl?: string;
    url?: string; // some tools use url

    tags: string[];

    features: (ToolFeature | string)[];

    pricingPlans?: PricingPlan[];
    pricing?: { planName: string; price: number | string; period: string }[];

    verified: boolean;
    featured?: boolean;
    isSponsored?: boolean;

    popularity: number;

    compareWith?: string[];

    goals?: string[];
    
    workflows?: string[];
    
    collections?: string[];
    
    recommendationTags?: string[];

    relatedTools?: string[];

    similarTools?: string[];

    audiences?: string[];

    pros?: (string | { title: string; description: string })[];

    cons?: (string | { title: string; description: string })[];

    bestFor: string[];

    useCases: (string | { title: string; description: string })[];

    platform?: string;

    api?: boolean;

    mobileApp?: boolean;

    openSource?: boolean;

    freeTrial?: boolean;

    promptExamples?: PromptExample[];

    socials?: SocialLinks;

    stats?: ToolStats;

    editorial?: ToolEditorial;

    lastUpdated?: string;
    status?: string;

    matchScore?: number;
    recommendationBadge?: string;
    aiReasoning?: string;

    hostingType?: 'managed-paas' | 'vps-iaas' | 'self-hosted-deploy';
    hostingDetails?: ToolHostingDetails;
}

export interface ToolHostingDetails {
    productGroup: 'Managed app deployment platforms' | 'VPS and cloud infrastructure providers' | 'Self-hosted deployment software';
    productTypeLabel: string;
    pricingModelType: 'Free' | 'Free trial' | 'Usage-based' | 'Flat rate' | 'Software free + server cost' | 'Contact sales';
    startingPrice: string;
    billingBasis: string;
    freeTierStatus: string;
    commercialUseAllowed: boolean;
    managementResponsibility: 'Fully managed' | 'Managed PaaS' | 'Self-managed infrastructure' | 'Unmanaged IaaS';
    supportedWorkloads: string[];
    deploymentMethods: string[];
    supportedRuntimes: string[];
    longRunningProcesses: string;
    persistentStorage: string;
    regions?: string;
    includedUsage?: string;
    overages?: string;
    keyLimitations: string[];
    officialPricingUrl: string;
    officialDocsUrl: string;
    lastCheckedDate: string;
}

export interface PromptExample {
    name: string;
    prompt: string;
    response: string;
}