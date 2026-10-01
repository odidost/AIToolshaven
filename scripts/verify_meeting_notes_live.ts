import http from 'http';

http.get('http://localhost:3000/category/ai-meeting-note-takers', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1573496359142'));
    console.log('Contains Otter:', data.toLowerCase().includes('otter'));
    console.log('Contains Fireflies:', data.toLowerCase().includes('fireflies'));
    console.log('Contains Fathom:', data.toLowerCase().includes('fathom'));
    console.log('Contains Granola:', data.toLowerCase().includes('granola'));
    console.log('Contains tl;dv:', data.toLowerCase().includes('tl;dv') || data.toLowerCase().includes('tldv'));
    console.log('HTML Length:', data.length);
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
