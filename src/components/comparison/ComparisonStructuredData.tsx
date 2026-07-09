import React from 'react';
import { AITool } from '@/lib/types/tool';

interface ComparisonStructuredDataProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function ComparisonStructuredData({ mainTool, compareTool }: ComparisonStructuredDataProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        "name": `${mainTool.name} vs ${compareTool.name} Comparison`,
        "description": `Comprehensive comparison between ${mainTool.name} and ${compareTool.name} including features, pricing, and performance.`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "SoftwareApplication",
                    "position": 1,
                    "name": mainTool.name,
                    "applicationCategory": mainTool.category,
                    "offers": {
                        "@type": "Offer",
                        "price": mainTool.price?.replace(/[^0-9.]/g, '') || "0.00",
                        "priceCurrency": "USD"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": mainTool.rating,
                        "reviewCount": mainTool.reviewCount
                    }
                },
                {
                    "@type": "SoftwareApplication",
                    "position": 2,
                    "name": compareTool.name,
                    "applicationCategory": compareTool.category,
                    "offers": {
                        "@type": "Offer",
                        "price": compareTool.price?.replace(/[^0-9.]/g, '') || "0.00",
                        "priceCurrency": "USD"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": compareTool.rating,
                        "reviewCount": compareTool.reviewCount
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
