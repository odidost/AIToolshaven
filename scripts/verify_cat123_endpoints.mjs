async function verifyCat123Endpoints() {
  const urls = [
    // Category 1: Image
    'http://localhost:3000/category/ai-image-generators',
    'http://localhost:3000/category/ai-product-photography',
    'http://localhost:3000/category/ai-headshot-generators',
    'http://localhost:3000/category/ai-vector-svg-generators',
    'http://localhost:3000/category/ai-image-upscalers',
    
    // Category 2: Video
    'http://localhost:3000/category/ai-video-generators',
    'http://localhost:3000/category/ai-shorts-repurposing',
    'http://localhost:3000/category/ai-faceless-video-makers',
    'http://localhost:3000/category/ai-talking-avatars',
    'http://localhost:3000/category/ai-video-lip-sync-dubbing',
    'http://localhost:3000/category/ai-ugc-video-ads',

    // Category 3: Voice / Audio
    'http://localhost:3000/category/ai-voice-generators',
    'http://localhost:3000/category/ai-voice-cloning',
    'http://localhost:3000/category/ai-podcast-editors',
    'http://localhost:3000/category/ai-music-song-generators',
    'http://localhost:3000/category/ai-text-to-speech-readers',
    'http://localhost:3000/category/ai-audio-noise-removers'
  ];

  console.log(`Checking ${urls.length} endpoints for Categories 1, 2, and 3...`);
  let allOk = true;

  for (const url of urls) {
    const start = Date.now();
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      const html = await res.text();
      const duration = ((Date.now() - start) / 1000).toFixed(1);
      const isOk = res.status === 200 && html.length > 5000;
      console.log(`[${res.status}] (${duration}s, ${html.length.toLocaleString()} bytes) ${url} -> ${isOk ? 'PASS' : 'FAIL'}`);
      if (!isOk) allOk = false;
    } catch (err) {
      const duration = ((Date.now() - start) / 1000).toFixed(1);
      console.error(`[ERROR] (${duration}s) ${url}:`, err.message);
      allOk = false;
    }
  }

  if (allOk) {
    console.log('ALL CATEGORY 1, 2, AND 3 ENDPOINTS VERIFIED 200 OK!');
    process.exit(0);
  } else {
    console.error('SOME ENDPOINTS FAILED.');
    process.exit(1);
  }
}

verifyCat123Endpoints();
