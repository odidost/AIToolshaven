import http from 'http';

http.get('http://localhost:3000/category/ai-paper-pdf-summarizers', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // extract tool names or cards
    const matches = data.match(/<h3[^>]*>([^<]+)<\/h3>/g) || [];
    console.log('Rendered h3 headings:', matches);
  });
});
