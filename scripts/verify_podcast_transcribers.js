const http = require('http');

http.get('http://localhost:3000/category/ai-podcast-interview-transcribers', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1511671782779'));
    console.log('Contains Castmagic:', data.toLowerCase().includes('castmagic'));
    console.log('Contains Podsqueeze:', data.toLowerCase().includes('podsqueeze'));
    console.log('Contains Riverside:', data.toLowerCase().includes('riverside'));
    console.log('Contains Deciphr:', data.toLowerCase().includes('deciphr'));
    console.log('Contains Descript:', data.toLowerCase().includes('descript'));
    console.log('HTML Length:', data.length);
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
