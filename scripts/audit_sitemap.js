const http = require('http');

async function fetchSitemap() {
  try {
    const response = await fetch('http://localhost:3000/sitemap.xml');
    const status = response.status;
    const xml = await response.text();
    return { status, xml };
  } catch (err) {
    console.error("Failed to fetch sitemap:", err.message);
    process.exit(1);
  }
}

async function audit() {
  console.log("Fetching sitemap...");
  const { status, xml } = await fetchSitemap();
  
  let passed = true;
  const errors = [];

  const logError = (msg) => {
    errors.push(msg);
    passed = false;
  };

  if (status !== 200) {
    logError(`HTTP Status is ${status}, expected 200`);
  }

  if (!xml.includes('<?xml') || !xml.includes('<urlset')) {
    logError("Invalid XML: Missing <?xml or <urlset>");
  }

  // Extract URLs
  const urlRegex = /<url>([\s\S]*?)<\/url>/g;
  const locRegex = /<loc>(.*?)<\/loc>/;
  const lastmodRegex = /<lastmod>(.*?)<\/lastmod>/;

  let match;
  const urls = [];
  
  while ((match = urlRegex.exec(xml)) !== null) {
    const urlBlock = match[1];
    const locMatch = locRegex.exec(urlBlock);
    const lastmodMatch = lastmodRegex.exec(urlBlock);
    
    if (locMatch) {
      urls.push({
        loc: locMatch[1],
        lastmod: lastmodMatch ? lastmodMatch[1] : null,
      });
    }
  }

  let duplicates = 0;
  let httpsUrls = 0;
  let localhostUrls = 0;
  let httpUrls = 0;
  let queryParams = 0;
  let unexpectedUrls = 0;
  let malformedUrls = 0;
  let withLastmod = 0;
  let withoutLastmod = 0;

  const urlSet = new Set();

  const unexpectedPatterns = ['/admin', '/auth', '/dashboard', '/users', '/login', '/signup'];

  const stats = {
    tools: 0,
    categories: 0,
    goals: 0,
    workflows: 0,
    comparisons: 0,
    articles: 0,
    static: 0,
  };

  urls.forEach(u => {
    const { loc, lastmod } = u;

    if (urlSet.has(loc)) {
      duplicates++;
      logError(`Duplicate URL: ${loc}`);
    }
    urlSet.add(loc);

    if (loc.startsWith('https://aitoolshaven.com')) {
      httpsUrls++;
    } else {
      if (loc.includes('localhost')) {
        localhostUrls++;
        logError(`Localhost URL found: ${loc}`);
      }
      if (loc.startsWith('http://') && !loc.includes('localhost')) {
        httpUrls++;
        logError(`HTTP URL found: ${loc}`);
      }
    }

    if (loc.includes('?')) {
      queryParams++;
      logError(`Query parameter found: ${loc}`);
    }

    if (loc.includes('//') && !loc.includes('://')) {
      // Very basic check for duplicate slashes like https://aitoolshaven.com//tool
      const withoutProtocol = loc.split('://')[1] || '';
      if (withoutProtocol.includes('//')) {
        malformedUrls++;
        logError(`Malformed URL (duplicate slashes): ${loc}`);
      }
    }

    let isUnexpected = false;
    unexpectedPatterns.forEach(pattern => {
      if (loc.includes(pattern)) {
        isUnexpected = true;
        logError(`Unexpected route: ${loc}`);
      }
    });
    if (isUnexpected) unexpectedUrls++;

    if (lastmod) {
      withLastmod++;
      // simple ISO date regex check
      if (Number.isNaN(Date.parse(lastmod))) {
        logError(`Invalid lastmod date: ${lastmod} for URL ${loc}`);
      }
    } else {
      withoutLastmod++;
    }

    // Categorize
    if (loc.includes('/tool/')) stats.tools++;
    else if (loc.includes('/category/')) stats.categories++;
    else if (loc.includes('/goals/')) stats.goals++;
    else if (loc.includes('/workflows/')) stats.workflows++;
    else if (loc.includes('/compare-tools/')) stats.comparisons++;
    else if (loc.includes('/blog/')) stats.articles++;
    else stats.static++;
  });

  console.log("\nAIToolsHaven Sitemap Audit\n");
  console.log(`${status === 200 ? '✓' : '✗'} Sitemap HTTP status: ${status}`);
  console.log(`${xml.includes('<?xml') ? '✓' : '✗'} Valid XML`);
  console.log(`${httpsUrls === urls.length ? '✓' : '✗'} Production HTTPS URLs`);
  console.log(`${duplicates === 0 ? '✓' : '✗'} No duplicate URLs`);
  console.log(`${localhostUrls === 0 ? '✓' : '✗'} No localhost URLs`);
  console.log(`${httpUrls === 0 ? '✓' : '✗'} No HTTP URLs`);
  console.log(`${queryParams === 0 ? '✓' : '✗'} No query parameters`);
  console.log(`${unexpectedUrls === 0 ? '✓' : '✗'} No unexpected admin/auth routes`);

  console.log(`\nTotal URLs: ${urls.length}\n`);
  
  console.log(`Tools: ${stats.tools}`);
  console.log(`Categories: ${stats.categories}`);
  console.log(`Goals: ${stats.goals}`);
  console.log(`Workflows: ${stats.workflows}`);
  console.log(`Comparisons: ${stats.comparisons}`);
  console.log(`Articles: ${stats.articles}`);
  console.log(`Static: ${stats.static}\n`);

  console.log(`URLs with lastmod: ${withLastmod}`);
  console.log(`URLs without lastmod: ${withoutLastmod}\n`);

  if (passed && errors.length === 0) {
    console.log("RESULT: PASS");
  } else {
    console.log("RESULT: FAIL\n");
    console.log("Problems:");
    errors.forEach(err => console.log(`- ${err}`));
    process.exit(1);
  }
}

audit();
