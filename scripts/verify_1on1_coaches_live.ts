import http from 'http';

http.get('http://localhost:3000/category/ai-1-on-1-meeting-coaches', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1573497491208'));
    console.log('Contains Fellow:', data.toLowerCase().includes('fellow'));
    console.log('Contains Nyota:', data.toLowerCase().includes('nyota'));
    console.log('Contains Yoodli:', data.toLowerCase().includes('yoodli'));
    console.log('Contains Equal Time:', data.toLowerCase().includes('equal time'));
    console.log('HTML Length:', data.length);
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
