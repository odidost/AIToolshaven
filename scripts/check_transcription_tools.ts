import * as fs from 'fs';
import * as path from 'path';

const candidates = [
  { name: 'Sonix', slug: 'sonix-ai', url: 'https://sonix.ai' },
  { name: 'Notta', slug: 'notta-ai', url: 'https://notta.ai' },
  { name: 'Happy Scribe', slug: 'happy-scribe', url: 'https://happyscribe.com' },
  { name: 'Trint', slug: 'trint', url: 'https://trint.com' },
  { name: 'TurboScribe', slug: 'turboscribe-engine', url: 'https://turboscribe.ai' },
  { name: 'Amberscript', slug: 'amberscript', url: 'https://amberscript.com' },
  { name: 'Castmagic', slug: 'castmagic', url: 'https://castmagic.io' },
  { name: 'Podsqueeze', slug: 'podsqueeze', url: 'https://podsqueeze.com' },
  { name: 'Transkriptor', slug: 'transkriptor', url: 'https://transkriptor.com' },
  { name: 'Riverside', slug: 'riverside-fm', url: 'https://riverside.fm' },
  { name: 'Deepgram', slug: 'deepgram', url: 'https://deepgram.com' },
  { name: 'AssemblyAI', slug: 'assemblyai', url: 'https://assemblyai.com' },
  { name: 'Speechmatics', slug: 'speechmatics-ai', url: 'https://speechmatics.com' },
  { name: 'Gladia', slug: 'gladia-ai-transcribe', url: 'https://gladia.io' },
  { name: 'Rev AI', slug: 'rev-ai', url: 'https://rev.ai' },
  { name: 'Verbit', slug: 'verbit', url: 'https://verbit.ai' },
  { name: 'Whisper (OpenAI)', slug: 'whisper', url: 'https://openai.com/research/whisper' },
  { name: 'Cockatoo AI', slug: 'cockatoo-ai', url: 'https://cockatoo.com' },
  { name: 'Deciphr AI', slug: 'deciphr-ai', url: 'https://deciphr.ai' },
  { name: 'Simon Says', slug: 'simon-says', url: 'https://simonsaysai.com' },
  { name: 'Temi', slug: 'temi', url: 'https://temi.com' },
  { name: 'Scribie AI', slug: 'scribie-ai', url: 'https://scribie.com' },
  { name: 'Speak AI', slug: 'speak-ai', url: 'https://speakai.co' },
  { name: 'Vocalmatic', slug: 'vocalmatic', url: 'https://vocalmatic.com' },
  { name: 'Beey', slug: 'beey', url: 'https://beey.io' },
  { name: 'TranscribeMe AI', slug: 'transcribeme-ai', url: 'https://transcribeme.com' },
  { name: 'Maestra', slug: 'maestra', url: 'https://maestra.ai' },
  { name: 'AudioShake', slug: 'audioshake', url: 'https://audioshake.ai' },
  { name: 'Audext', slug: 'audext-speech-recognition', url: 'https://audext.com' }
];

async function checkCandidates() {
  console.log(`Checking ${candidates.length} candidate transcription tools...`);
  for (const c of candidates) {
    try {
      const res = await fetch(c.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        redirect: 'manual'
      });
      let finalUrl = c.url;
      let finalStatus = res.status;
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get('location');
        console.log(`[${c.name}] (${c.slug}) -> Redirect (${res.status}) to ${loc}`);
      } else {
        console.log(`[${c.name}] (${c.slug}) -> HTTP ${res.status}`);
      }
    } catch (e: any) {
      console.log(`❌ [${c.name}] (${c.slug}) ERROR: ${e.message}`);
    }
  }
}

checkCandidates();
