fetch('http://localhost:3000/')
  .then(res => res.text())
  .then(text => {
    if (text.includes("Something went wrong")) {
      console.log("STILL BROKEN");
    } else {
      console.log("SUCCESS! Page rendered.");
      console.log("Title snippet:", text.match(/<title[^>]*>([^<]+)<\/title>/)?.[1]);
    }
  })
  .catch(console.error);
