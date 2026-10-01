async function check(url: string) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const hasTools = text.includes('tool-card') || text.includes('grid') || text.includes('Free') || text.includes('Paid');
    console.log(`[${res.status}] ${url} - Length: ${text.length} - Has content: ${hasTools}`);
  } catch (err: any) {
    console.error(`[ERR] ${url}:`, err.message);
  }
}

async function main() {
  console.log('Testing Category: AI Resume Builders pages...');
  await check('http://localhost:3000/category/ai-resume-builders');
  await check('http://localhost:3000/category/ai-ats-resume-checkers');
  await check('http://localhost:3000/category/ai-executive-modern-resumes');
  await check('http://localhost:3000/category/ai-resume-bullet-optimizers');
  await check('http://localhost:3000/category/ai-cover-letter-generators');
  await check('http://localhost:3000/category/ai-job-application-copilots');
}

main();
