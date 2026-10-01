import http from 'http';

async function verify() {
  const url = 'http://localhost:3000/category/ai-medical-clinical-scribes';
  console.log(`Checking ${url}...`);

  http.get(url, (res) => {
    console.log(`Status code: ${res.statusCode}`);
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`Body length: ${data.length}`);
      const checks = [
        'AI Medical & Clinical Scribes',
        'Freed AI',
        'DeepScribe',
        'Nabla Copilot',
        'Abridge',
        'photo-1576091160399-112ba8d25d1d',
        'Ambient Clinical Scribes &amp; SOAP Notes'
      ];

      for (const check of checks) {
        const found = data.includes(check) || data.includes(check.replace(/&amp;/g, '&'));
        console.log(`Contains "${check}": ${found}`);
      }

      if (res.statusCode === 200) {
        console.log('✓ VERIFICATION SUCCESSFUL - HTTP 200');
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
