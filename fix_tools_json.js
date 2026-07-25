const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const designCom = tools.find(t => t.slug === 'design-com');
if (designCom) {
  designCom.compareWith = ["canva"];
  fs.writeFileSync(filePath, JSON.stringify(tools, null, 2));
  console.log('Fixed tools.json compareWith to canva');
} else {
  console.log('Could not find design-com in tools.json by slug');
}
