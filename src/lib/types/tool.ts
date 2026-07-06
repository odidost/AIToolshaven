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

export interface AITool {
    id: string;
    name: string;
    slug: string;

    company?: string;

    tagline: string;
    description: string;

    category: string;

    priceModel: "Free" | "Freemium" | "Paid" | "Enterprise";
    price?: string;

    rating: number;
    reviewCount: number;

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

    popularity: number;

    compareWith?: string[];

    goals?: string[];
    
    workflows?: string[];
    
    collections?: string[];
    
    recommendationTags?: string[];

    pros?: string[];

    cons?: string[];

    bestFor: string[];

    useCases: string[];

    platform?: string;

    api?: boolean;

    mobileApp?: boolean;

    openSource?: boolean;

    freeTrial?: boolean;

    socials?: SocialLinks;

    stats?: ToolStats;

    lastUpdated?: string;
}