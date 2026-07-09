const fs = require('fs');
const html = fs.readFileSync('err.html', 'utf8');
const m = html.match(/Error: [^&<\"\\]+/gi);
if (m) console.log(m.slice(0, 10));
else console.log("No error match.");
