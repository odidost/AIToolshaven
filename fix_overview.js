const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const designCom = tools.find(t => t.slug === 'design-com');
if (designCom && designCom.editorial && designCom.editorial.overview) {
  // We keep only the first two paragraphs
  const newOverview = `<p>Design.com is a leading AI design platform built for entrepreneurs, startups, and small businesses that need professional branding without the cost or complexity of hiring a designer. Its AI logo generator draws from a library of over 400,000 exclusive, professionally curated designs to produce thousands of customized logo concepts in seconds based on your business name and description.</p>
<p>Beyond logo creation, Design.com functions as an all-in-one brand system. Your logo — including its colors and typography — is automatically integrated across all other branded templates, covering social media posts, business cards, letterheads, websites, and even printed merchandise, making it one of the most integrated branding tools available in 2026.</p>`;
  
  designCom.editorial.overview = newOverview;
  fs.writeFileSync(filePath, JSON.stringify(tools, null, 2));
  console.log('Fixed tools.json overview');
} else {
  console.log('Could not find design-com overview in tools.json');
}
