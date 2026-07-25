const fs = require('fs');
const html = fs.readFileSync('err_latest.html', 'utf8');
const idx = html.indexOf('trim is not a function');
if (idx !== -1) {
  console.log(html.substring(Math.max(0, idx - 100), idx + 1000));
} else {
  console.log("NOT FOUND");
}
