const http = require('http');

http.get('http://localhost:3000/category/ai-multilingual-subtitles-captions', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1574717024653'));
    console.log('Contains Submagic:', data.toLowerCase().includes('submagic'));
    console.log('Contains Captions:', data.toLowerCase().includes('captions'));
    console.log('Contains Veed:', data.toLowerCase().includes('veed'));
    console.log('Contains Kapwing:', data.toLowerCase().includes('kapwing'));
    console.log('Contains Zubtitle:', data.toLowerCase().includes('zubtitle'));
    console.log('HTML Length:', data.length);
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
