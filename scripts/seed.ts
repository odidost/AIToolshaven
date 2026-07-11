/* eslint-disable */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Use dynamic imports since we'll run this via tsx or ts-node
async function main() {
  console.log('Starting seed...');

  // 1. Import local static data
  const { categories } = await import('../src/lib/data/categories');
  const { goals } = await import('../src/lib/goals');
  const { workflows } = await import('../src/lib/workflows');
  const { tools } = await import('../src/lib/data/tools');

  // 2. Seed Categories
  console.log(`Seeding ${categories.length} categories...`);
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
        icon: cat.icon,
      },
      create: {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        icon: cat.icon,
      },
    });
  }

  // 3. Seed Goals
  console.log(`Seeding ${goals.length} goals...`);
  for (const goal of goals) {
    await prisma.goal.upsert({
      where: { slug: goal.slug },
      update: {
        title: goal.title,
        description: goal.description,
        icon: goal.icon,
        count: goal.count,
      },
      create: {
        title: goal.title,
        slug: goal.slug,
        description: goal.description,
        icon: goal.icon,
        count: goal.count,
      },
    });
  }

  // 4. Seed Workflows
  console.log(`Seeding ${workflows.length} workflows...`);
  for (const workflow of workflows) {
    await prisma.workflow.upsert({
      where: { slug: workflow.slug },
      update: {
        title: workflow.title,
        description: workflow.description,
        icon: workflow.icon,
        audience: workflow.audience,
        color: workflow.color,
        tools: workflow.tools,
        meta: workflow.meta,
      },
      create: {
        title: workflow.title,
        slug: workflow.slug,
        description: workflow.description,
        icon: workflow.icon,
        audience: workflow.audience,
        color: workflow.color,
        tools: workflow.tools,
        meta: workflow.meta,
      },
    });
  }

  // 5. Seed Tools
  console.log(`Seeding ${tools.length} tools...`);
  for (const tool of tools) {
    // Ensure the category exists in the DB first before linking it
    const cat = categories.find((c: any) => c.id === tool.category);
    if (!cat) {
      console.warn(`Category ${tool.category} not found for tool ${tool.slug}. Skipping...`);
      continue;
    }

    await prisma.tool.upsert({
      where: { slug: tool.slug },
      update: {
        name: tool.name,
        company: tool.company,
        tagline: tool.tagline,
        description: tool.description,
        categoryId: tool.category,
        priceModel: tool.priceModel,
        price: tool.price,
        rating: tool.rating,
        reviewCount: tool.reviewCount,
        easeOfUse: tool.easeOfUse,
        featureRating: tool.featureRating,
        valueForMoney: tool.valueForMoney,
        performance: tool.performance,
        support: tool.support,
        logoUrl: tool.logoUrl,
        imageUrl: tool.imageUrl,
        screenshotUrl: tool.screenshotUrl,
        websiteUrl: tool.websiteUrl,
        tags: tool.tags,
        features: tool.features as any,
        pricingPlans: tool.pricingPlans as any,
        verified: tool.verified,
        featured: tool.featured,
        popularity: tool.popularity || 0,
        platform: tool.platform,
        api: tool.api,
        mobileApp: tool.mobileApp,
        openSource: tool.openSource,
        freeTrial: tool.freeTrial,
        socials: tool.socials as any,
        stats: tool.stats as any,
        pros: tool.pros,
        cons: tool.cons,
        bestFor: tool.bestFor,
        useCases: tool.useCases,
        goals: tool.goals || [],
        workflows: tool.workflows || [],
        collections: tool.collections || [],
      },
      create: {
        id: tool.id,
        name: tool.name,
        slug: tool.slug,
        company: tool.company,
        tagline: tool.tagline,
        description: tool.description,
        categoryId: tool.category,
        priceModel: tool.priceModel,
        price: tool.price,
        rating: tool.rating,
        reviewCount: tool.reviewCount,
        easeOfUse: tool.easeOfUse,
        featureRating: tool.featureRating,
        valueForMoney: tool.valueForMoney,
        performance: tool.performance,
        support: tool.support,
        logoUrl: tool.logoUrl,
        imageUrl: tool.imageUrl,
        screenshotUrl: tool.screenshotUrl,
        websiteUrl: tool.websiteUrl,
        tags: tool.tags,
        features: tool.features as any,
        pricingPlans: tool.pricingPlans as any,
        verified: tool.verified,
        featured: tool.featured,
        popularity: tool.popularity || 0,
        platform: tool.platform,
        api: tool.api,
        mobileApp: tool.mobileApp,
        openSource: tool.openSource,
        freeTrial: tool.freeTrial,
        socials: tool.socials as any,
        stats: tool.stats as any,
        pros: tool.pros,
        cons: tool.cons,
        bestFor: tool.bestFor,
        useCases: tool.useCases,
        goals: tool.goals || [],
        workflows: tool.workflows || [],
        collections: tool.collections || [],
      },
    });
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
