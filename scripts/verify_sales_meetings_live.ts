import http from 'http';

http.get('http://localhost:3000/category/ai-sales-meeting-recorders', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1573497019940'));
    console.log('Contains Gong:', data.toLowerCase().includes('gong'));
    console.log('Contains Chorus:', data.toLowerCase().includes('chorus'));
    console.log('Contains Avoma:', data.toLowerCase().includes('avoma'));
    console.log('Contains Grain:', data.toLowerCase().includes('grain'));
    console.log('HTML Length:', data.length);
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
