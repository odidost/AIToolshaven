import http from 'http';

async function verify() {
  const url = 'http://localhost:3000/category/ai-academic-essay-polishers';
  console.log(`Checking ${url}...`);

  http.get(url, (res) => {
    console.log(`Status code: ${res.statusCode}`);
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`Body length: ${data.length}`);
      const checks = [
        'AI Academic Writing &amp; Paper Polishers',
        'Paperpal',
        'Jenni AI',
        'Trinka',
        'Wordvice AI',
        'SciSpace',
        'photo-1455390582262-044cdead277a',
        'Academic Manuscript Polishing &amp; Journal Readiness'
      ];

      for (const check of checks) {
        const found = data.includes(check) || data.includes(check.replace(/&amp;/g, '&'));
        console.log(`Contains "${check}": ${found}`);
      }

      if (res.statusCode === 200) {
        console.log('✓ VERIFICATION SUCCESSFUL - HTTP 200');
        process.exit(0);
      } else {
        console.error('✗ VERIFICATION FAILED - Non-200 status');
        process.exit(1);
      }
    });
  }).on('error', (err) => {
    console.error('Request error:', err.message);
    process.exit(1);
  });
}

verify();
