const fs = require('fs');
fetch('http://localhost:3000/')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('err_latest.html', text);
    const m = text.match(/Error: [^&<\"\\]+/gi);
    if (m) console.log("FOUND ERROR:", m.slice(0, 10));
    else console.log("NO ERROR FOUND in HTML");
  })
  .catch(console.error);
