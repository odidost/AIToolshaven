const http = require('http');

http.get('http://localhost:3000/category/ai-speech-to-text-transcription', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Found Unsplash:', data.includes('photo-1598488035139'));
    console.log('Contains Whisper:', data.toLowerCase().includes('whisper'));
    console.log('Contains Rev AI:', data.toLowerCase().includes('rev ai'));
    console.log('Contains Sonix:', data.toLowerCase().includes('sonix'));
    console.log('Contains TurboScribe:', data.toLowerCase().includes('turboscribe'));
    console.log('Contains Descript:', data.toLowerCase().includes('descript'));
    console.log('HTML Length:', data.length);
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('HTTP Request Error:', err);
  process.exit(1);
});
