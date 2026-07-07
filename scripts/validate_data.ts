import { tools } from '../src/lib/data/tools/index';
import { workflows } from '../src/lib/workflows';
import { categories } from '../src/lib/data/categories';

interface ValidationResult {
    pass: boolean;
    issues: string[];
}

function checkDataQuality() {
    let hasIssues = false;
    
    console.log(`Total tools: ${tools.length}`);

    const slugs = new Set<string>();
    const ids = new Set<string>();
    const companies = new Map<string, number>();
    const categoryIds = new Set(categories.map(c => c.id));
    const workflowSlugs = new Set(workflows.map(w => w.slug));
    
    // Detect duplicate categories in categories.ts
    const catSlugs = new Set();
    for (const c of categories) {
        if (catSlugs.has(c.slug)) {
            console.log(`WARNING: Duplicate category slug in categories.ts: ${c.slug}`);
        }
        catSlugs.add(c.slug);
    }

    tools.forEach((tool) => {
        // Basic AITool fields
        if (!tool.id || !tool.name || !tool.slug || !tool.category) {
            console.log(`FAIL: Tool missing basic fields: ${tool.name || tool.id}`);
            hasIssues = true;
        }

        // Duplicates
        if (slugs.has(tool.slug)) {
            console.log(`FAIL: Duplicate slug detected: ${tool.slug}`);
            hasIssues = true;
        }
        slugs.add(tool.slug);

        if (ids.has(tool.id)) {
            console.log(`FAIL: Duplicate ID detected: ${tool.id}`);
            hasIssues = true;
        }
        ids.add(tool.id);

        if (tool.company) {
            companies.set(tool.company, (companies.get(tool.company) || 0) + 1);
        }

        // Broken Compare Relationships
        if (tool.compareWith) {
            tool.compareWith.forEach(compareId => {
                const target = tools.find(t => t.slug === compareId || t.id === compareId);
                if (!target) {
                    console.log(`FAIL: Broken compare relationship in ${tool.slug}: ${compareId}`);
                    hasIssues = true;
                }
            });
        }

        // Invalid workflow references
        if (tool.workflows) {
            tool.workflows.forEach(w => {
                if (!workflowSlugs.has(w)) {
                    console.log(`FAIL: Invalid workflow reference in ${tool.slug}: ${w}`);
                    hasIssues = true;
                }
            });
        }

        // Missing logos/screenshots
        if (!tool.logoUrl) {
            console.log(`FAIL: Missing logo for tool: ${tool.slug}`);
            hasIssues = true;
        }
        if (!tool.screenshotUrl) {
            console.log(`WARNING: Missing screenshot for tool: ${tool.slug}`);
        }

        // Invalid Category
        if (!categoryIds.has(tool.category) && !catSlugs.has(tool.category)) {
            console.log(`FAIL: Invalid category reference in ${tool.slug}: ${tool.category}`);
            hasIssues = true;
        }
    });

    companies.forEach((count, company) => {
        if (count > 1) {
            console.log(`WARNING: Company "${company}" appears ${count} times.`);
        }
    });

    tools.forEach(tool => {
        if (!tool.workflows?.length && !tool.compareWith?.length && !tool.recommendationTags?.length) {
            console.log(`WARNING: Orphaned tool (Low discoverability): ${tool.slug}`);
        }
    });

    if (hasIssues) {
        console.log("\nValidation completed with issues.");
    } else {
        console.log("\nValidation passed. No critical errors.");
    }
}

checkDataQuality();
