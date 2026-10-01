import http from 'http';

http.get('http://localhost:3000/category/ai-standup-scrum-assistants', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1552664730'));
    console.log('Contains Spinach:', data.toLowerCase().includes('spinach'));
    console.log('Contains Geekbot:', data.toLowerCase().includes('geekbot'));
    console.log('Contains Standuply:', data.toLowerCase().includes('standuply'));
    console.log('Contains DailyBot:', data.toLowerCase().includes('dailybot'));
    console.log('HTML Length:', data.length);
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
