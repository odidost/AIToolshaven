const fs = require('fs');
const path = require('path');
const https = require('https');

const toolsList = [
    { name: 'Looka', domain: 'looka.com', tagline: 'Design your own beautiful brand', description: 'Looka is an AI-powered logo maker that gives business owners a quick and affordable way to create a beautiful brand.', tags: ['Logo Generator', 'Branding'] },
    { name: 'Logo.ai', domain: 'logoai.com', tagline: 'Your brand building platform', description: 'Logoai is an AI powered logo maker and brand building platform that can help you create professional logos, design matching identities, and automate brand promotion.', tags: ['Logo Generator', 'AI Design'] },
    { name: 'Brandmark', domain: 'brandmark.io', tagline: 'Create a unique, professional logo for your business', description: 'Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more.', tags: ['Logo Generator', 'Brand Kit'] },
    { name: 'Tailor Brands', domain: 'tailorbrands.com', tagline: 'The business building platform', description: 'Create a logo, build a website, and launch your business with Tailor Brands AI-driven platform.', tags: ['Logo Generator', 'Business Setup'] },
    { name: 'Hatchful', domain: 'shopify.com', tagline: 'The Shopify Logo Maker', description: 'Create a stunning logo in seconds with Shopify\'s free logo maker. Hatchful helps you build your brand from scratch.', tags: ['Logo Generator', 'Ecommerce', 'Free'] },
    { name: 'Canva Logo Maker', domain: 'canva.com', tagline: 'Free logo maker online', description: 'Canva\'s logo maker provides hundreds of templates to help you design a custom logo in minutes.', tags: ['Logo Generator', 'Graphic Design'] },
    { name: 'Wix Logo Maker', domain: 'wix.com', tagline: 'Design a logo you love', description: 'Answer a few questions and the Wix Logo Maker will instantly generate a custom logo for your brand.', tags: ['Logo Generator', 'Website Builder'] },
    { name: 'Fiverr Logo Maker', domain: 'fiverr.com', tagline: 'Make a logo with Fiverr\'s AI logo maker', description: 'Instantly generate a logo for your business. Customize the design to perfectly match your brand identity.', tags: ['Logo Generator', 'Freelance'] },
    { name: 'Designhill Logo Maker', domain: 'designhill.com', tagline: 'Create a professional logo', description: 'Designhill\'s AI logo maker allows you to create high-quality, professional logos in minutes.', tags: ['Logo Generator', 'Custom Design'] },
    { name: 'Renderforest Logo Maker', domain: 'renderforest.com', tagline: 'Online AI logo maker', description: 'Create a unique logo for your brand with the Renderforest machine learning logo creation tool.', tags: ['Logo Generator', 'Video Creation'] },
    { name: 'Zarla', domain: 'zarla.com', tagline: 'Free AI Logo Maker', description: 'Create a professional logo in seconds. It\'s free to try and you can download your logo instantly.', tags: ['Logo Generator', 'Free'] },
    { name: 'Placeit', domain: 'placeit.net', tagline: 'Smart templates for logos, videos, and mockups', description: 'Placeit\'s logo maker is easy to use and provides thousands of templates for any industry.', tags: ['Logo Generator', 'Mockups'] },
    { name: 'Logomaster.ai', domain: 'logomaster.ai', tagline: 'Create beautiful logos in minutes', description: 'Logomaster.ai is a logo builder that helps business founders create professional logos as fast as possible.', tags: ['Logo Generator', 'Startup'] },
    { name: 'Turbologo', domain: 'turbologo.com', tagline: 'Make a logo for free', description: 'Turbologo is an online logo maker that helps you create professional and high-quality logos in minutes.', tags: ['Logo Generator', 'Branding'] },
    { name: 'Fotor AI Logo Generator', domain: 'fotor.com', tagline: 'Free online logo maker', description: 'Use Fotor\'s free online logo maker to create custom logo designs for your business, brand, or project.', tags: ['Logo Generator', 'Photo Editing'] },
    { name: 'Ideogram', domain: 'ideogram.ai', tagline: 'Generative AI for text and images', description: 'Ideogram excels at rendering text accurately within images, making it perfect for creative logo concepts.', tags: ['Logo Generator', 'Image Generation'] },
    { name: 'Recraft', domain: 'recraft.ai', tagline: 'Generative AI design tool', description: 'Recraft allows you to generate and edit vector art, icons, 3d images and illustrations, ideal for professional logos.', tags: ['Logo Generator', 'Vector Graphics'] },
    { name: 'Logopony', domain: 'logopony.com', tagline: 'AI Logo Maker', description: 'Logopony is a new kind of logo maker. Powered by AI, it automatically generates custom logo ideas for your brand.', tags: ['Logo Generator', 'AI Design'] },
    { name: 'SmashingLogo', domain: 'smashinglogo.com', tagline: 'Create a logo without signing up', description: 'A fast, easy-to-use logo maker that generates hundreds of logo options without requiring an account.', tags: ['Logo Generator', 'Fast'] },
    { name: 'MyFreeLogoMaker', domain: 'myfreelogomaker.com', tagline: '100% Free Logo Maker', description: 'Design a beautiful logo for your brand. Get full access to high-res, vector, and transparent files for free.', tags: ['Logo Generator', 'Free', 'Vector'] }
];

const categoryId = 'category-1783781229083';
const toolsFilePath = path.join(__dirname, 'data', 'tools.json');
const manifestFilePath = path.join(__dirname, 'public', 'assets', 'manifest.json');
const logosDirPath = path.join(__dirname, 'public', 'assets', 'logos');

async function downloadImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }

            const contentType = response.headers['content-type'];
            let ext = 'png';
            if (contentType) {
                if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = 'jpg';
                else if (contentType.includes('png')) ext = 'png';
                else if (contentType.includes('webp')) ext = 'webp';
                else if (contentType.includes('svg')) ext = 'svg';
                else if (contentType.includes('x-icon') || contentType.includes('vnd.microsoft.icon')) ext = 'ico';
            }

            const chunks = [];
            response.on('data', chunk => chunks.push(chunk));
            response.on('end', () => resolve({ buffer: Buffer.concat(chunks), ext }));
        }).on('error', reject);
    });
}

async function fetchLogo(domain) {
    try {
        const clearbitUrl = `https://logo.clearbit.com/${domain}`;
        return await downloadImage(clearbitUrl);
    } catch (e) {
        console.log(`Clearbit failed for ${domain}, trying Google Favicon...`);
        const googleUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        return await downloadImage(googleUrl);
    }
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\\s+/g, '-')           // Replace spaces with -
        .replace(/[^\\w\\-]+/g, '')       // Remove all non-word chars
        .replace(/\\-\\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function main() {
    let toolsData = [];
    try {
        if (fs.existsSync(toolsFilePath)) {
            toolsData = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));
        }
    } catch (e) {
        console.error('Error reading tools.json', e);
        return;
    }

    let manifestData = {};
    try {
        if (fs.existsSync(manifestFilePath)) {
            manifestData = JSON.parse(fs.readFileSync(manifestFilePath, 'utf8'));
        }
    } catch (e) {
        console.error('Error reading manifest.json', e);
        return;
    }

    if (!fs.existsSync(logosDirPath)) {
        fs.mkdirSync(logosDirPath, { recursive: true });
    }

    for (const tool of toolsList) {
        const slug = slugify(tool.name);
        
        // Skip if tool already exists
        if (toolsData.some(t => t.id === slug || (t.publishedData && t.publishedData.slug === slug))) {
            console.log(`Tool ${tool.name} already exists. Skipping.`);
            continue;
        }

        console.log(`Processing ${tool.name}...`);
        
        let logoExt = 'png';
        try {
            const result = await fetchLogo(tool.domain);
            logoExt = result.ext;
            // Write image
            const imagePath = path.join(logosDirPath, `${slug}-logo.${logoExt}`);
            fs.writeFileSync(imagePath, result.buffer);
            console.log(`Saved logo to ${imagePath}`);

            // Update manifest
            if (!manifestData[slug]) {
                manifestData[slug] = {};
            }
            manifestData[slug].logo = logoExt;
            fs.writeFileSync(manifestFilePath, JSON.stringify(manifestData, null, 2));

        } catch (e) {
            console.log(`Failed to fetch logo for ${tool.name}: ${e.message}`);
        }

        const newToolEntry = {
            id: slug,
            status: "Published",
            publishedAt: new Date().toISOString(),
            lastAutosavedAt: null,
            draftData: null,
            publishedData: {
                id: slug,
                name: tool.name,
                slug: slug,
                tagline: tool.tagline,
                description: tool.description,
                category: categoryId,
                url: `https://${tool.domain}`,
                websiteUrl: `https://${tool.domain}`,
                tags: tool.tags,
                features: [],
                useCases: [],
                priceModel: "Freemium",
                pricing: [],
                popularity: Math.floor(Math.random() * 50) + 50, // random popularity 50-100
                rating: 4.5,
                reviewCount: Math.floor(Math.random() * 500) + 50,
                featured: false,
                verified: true,
                logoUrl: `/assets/logos/${slug}-logo.${logoExt}`,
                status: "Published"
            }
        };

        toolsData.push(newToolEntry);
    }

    fs.writeFileSync(toolsFilePath, JSON.stringify(toolsData, null, 2));
    console.log('Successfully added 20 tools to tools.json');
}

main().catch(console.error);
