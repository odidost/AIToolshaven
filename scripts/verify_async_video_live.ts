import http from 'http';

http.get('http://localhost:3000/category/ai-async-video-meetings', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1590650516494'));
    console.log('Contains Loom:', data.toLowerCase().includes('loom'));
    console.log('Contains Claap:', data.toLowerCase().includes('claap'));
    console.log('Contains Screen Studio:', data.toLowerCase().includes('screen studio'));
    console.log('Contains Vidyard:', data.toLowerCase().includes('vidyard'));
    console.log('Contains Tella:', data.toLowerCase().includes('tella'));
    console.log('HTML Length:', data.length);
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
