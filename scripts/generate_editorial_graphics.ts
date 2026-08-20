import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const publicBlogDir = path.join(process.cwd(), 'public', 'blog');

interface GraphicConfig {
  filename: string;
  category: string;
  badgeBg: string;
  badgeBorder: string;
  badgeTextColor: string;
  titleLines: string[];
  subtitle: string;
  toolBadges: { name: string; bg: string; border: string; text: string }[];
  accentColor: string;
  gradientStart: string;
  gradientEnd: string;
  techDetails: string;
}

const codingGraphics: GraphicConfig[] = [
  {
    filename: 'cursor-vs-windsurf-vs-copilot-best-ai-code-editors.jpg',
    category: 'AI CODE EDITORS &amp; IDEs',
    badgeBg: 'rgba(59, 130, 246, 0.15)',
    badgeBorder: '#3b82f6',
    badgeTextColor: '#60a5fa',
    titleLines: ['Cursor vs Windsurf', 'vs GitHub Copilot'],
    subtitle: 'Next-Gen AI IDEs • Multi-File Composer • Cascade Workflows',
    toolBadges: [
      { name: 'Cursor AI', bg: '#1e293b', border: '#3b82f6', text: '#93c5fd' },
      { name: 'Windsurf Cascade', bg: '#1e293b', border: '#06b6d4', text: '#67e8f9' },
      { name: 'GitHub Copilot', bg: '#1e293b', border: '#a855f7', text: '#d8b4fe' }
    ],
    accentColor: '#3b82f6',
    gradientStart: '#0f172a',
    gradientEnd: '#020617',
    techDetails: 'Composer Engine • AST Codebase Indexing • Tab Autocomplete'
  },
  {
    filename: 'best-autonomous-ai-software-engineers.jpg',
    category: 'AUTONOMOUS SWE AGENTS',
    badgeBg: 'rgba(168, 85, 247, 0.15)',
    badgeBorder: '#a855f7',
    badgeTextColor: '#c084fc',
    titleLines: ['Devin vs Devika', 'vs Claude Engineer'],
    subtitle: 'Autonomous Software Engineers • SWE-bench • Sandboxes',
    toolBadges: [
      { name: 'Devin AI', bg: '#1e293b', border: '#ec4899', text: '#f472b6' },
      { name: 'Devika (Open Source)', bg: '#1e293b', border: '#8b5cf6', text: '#c4b5fd' },
      { name: 'Claude Engineer', bg: '#1e293b', border: '#f59e0b', text: '#fcd34d' }
    ],
    accentColor: '#8b5cf6',
    gradientStart: '#111827',
    gradientEnd: '#030712',
    techDetails: 'SWE-bench Verified • Cloud MicroVMs • Automated PR Workflows'
  },
  {
    filename: 'vibe-coding-tools-bolt-lovable-v0.jpg',
    category: 'VIBE CODING &amp; GENERATIVE UI',
    badgeBg: 'rgba(236, 72, 153, 0.15)',
    badgeBorder: '#ec4899',
    badgeTextColor: '#f472b6',
    titleLines: ['Vibe Coding in 2026:', 'Bolt.new vs Lovable vs v0'],
    subtitle: 'Natural Language to Live App • WebContainers • Supabase Stack',
    toolBadges: [
      { name: 'Bolt.new', bg: '#1e293b', border: '#f97316', text: '#fdba74' },
      { name: 'Lovable.dev', bg: '#1e293b', border: '#ec4899', text: '#f472b6' },
      { name: 'v0 by Vercel', bg: '#1e293b', border: '#10b981', text: '#6ee7b7' }
    ],
    accentColor: '#ec4899',
    gradientStart: '#0f172a',
    gradientEnd: '#020617',
    techDetails: 'WebContainers In-Browser • Supabase Auth • shadcn/ui React'
  },
  {
    filename: 'best-ai-terminal-cli-coding-assistants.jpg',
    category: 'TERMINAL &amp; CLI CODING',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    badgeBorder: '#10b981',
    badgeTextColor: '#34d399',
    titleLines: ['Aider vs Cline:', 'Top CLI &amp; VS Code Agents'],
    subtitle: 'Git-Native Auto-Commits • Open Source BYOK • Browser Testing',
    toolBadges: [
      { name: 'Aider CLI', bg: '#1e293b', border: '#10b981', text: '#6ee7b7' },
      { name: 'Cline Extension', bg: '#1e293b', border: '#3b82f6', text: '#93c5fd' },
      { name: 'OpenRouter BYOK', bg: '#1e293b', border: '#eab308', text: '#fde047' }
    ],
    accentColor: '#10b981',
    gradientStart: '#064e3b',
    gradientEnd: '#022c22',
    techDetails: 'Tree-Sitter Repo Maps • MCP Servers • Zero Cloud Telemetry'
  },
  {
    filename: 'ai-coding-agents-architecture-swe-bench-mcp.jpg',
    category: 'SYSTEM ARCHITECTURE DEEP DIVE',
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    badgeBorder: '#f59e0b',
    badgeTextColor: '#fbbf24',
    titleLines: ['Architecture of AI Agents:', 'SWE-bench, MCP &amp; Sandboxes'],
    subtitle: 'How Autonomous Coding Systems Work • Context &amp; Verification Loops',
    toolBadges: [
      { name: 'Tree-Sitter AST', bg: '#1e293b', border: '#f59e0b', text: '#fde68a' },
      { name: 'Anthropic MCP', bg: '#1e293b', border: '#6366f1', text: '#a5b4fc' },
      { name: 'Ephemeral Sandboxes', bg: '#1e293b', border: '#06b6d4', text: '#a5f3fc' }
    ],
    accentColor: '#f59e0b',
    gradientStart: '#18181b',
    gradientEnd: '#09090b',
    techDetails: 'Model Context Protocol • MicroVM Isolation • Closed-Loop Test Fixes'
  },
  {
    filename: 'best-ai-video-dubbing-translation-tools.jpg',
    category: 'AI VIDEO DUBBING &amp; VOICE',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
    badgeBorder: '#8b5cf6',
    badgeTextColor: '#a78bfa',
    titleLines: ['Best AI Video Dubbing', '&amp; Translation Tools 2026'],
    subtitle: 'Multi-Language Voice Cloning • Automated Lip-Sync • Global Localization',
    toolBadges: [
      { name: 'ElevenLabs Dubbing', bg: '#1e293b', border: '#8b5cf6', text: '#c4b5fd' },
      { name: 'HeyGen Video Translate', bg: '#1e293b', border: '#ec4899', text: '#f472b6' },
      { name: 'Synthesia Global', bg: '#1e293b', border: '#3b82f6', text: '#93c5fd' }
    ],
    accentColor: '#8b5cf6',
    gradientStart: '#1e1b4b',
    gradientEnd: '#0f0e26',
    techDetails: 'Natural Voice Inflection • 140+ Languages • Frame-by-Frame Lip Sync'
  }
];

function generateSVG(config: GraphicConfig): string {
  const width = 1200;
  const height = 630;

  // Title render lines
  const titleSvg = config.titleLines.map((line, idx) => {
    const yPos = 240 + (idx * 68);
    return `<text x="90" y="${yPos}" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1">${line}</text>`;
  }).join('\n');

  // Tool badges render
  let badgeX = 90;
  const toolBadgesSvg = config.toolBadges.map(tb => {
    const badgeWidth = tb.name.length * 11 + 36;
    const currentX = badgeX;
    badgeX += badgeWidth + 16;
    return `
      <g transform="translate(${currentX}, 420)">
        <rect width="${badgeWidth}" height="42" rx="21" fill="${tb.bg}" stroke="${tb.border}" stroke-width="1.5" />
        <circle cx="20" cy="21" r="5" fill="${tb.border}" />
        <text x="34" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="${tb.text}">${tb.name}</text>
      </g>
    `;
  }).join('\n');

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Gradient -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${config.gradientStart}" />
        <stop offset="100%" stop-color="${config.gradientEnd}" />
      </linearGradient>

      <!-- Glow Accent -->
      <radialGradient id="glowAccent" cx="80%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${config.accentColor}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${config.accentColor}" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="glowBottom" cx="20%" cy="80%" r="50%">
        <stop offset="0%" stop-color="${config.accentColor}" stop-opacity="0.2" />
        <stop offset="100%" stop-color="${config.accentColor}" stop-opacity="0" />
      </radialGradient>

      <!-- Grid Pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1" />
      </pattern>
    </defs>

    <!-- Base Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    <rect width="${width}" height="${height}" fill="url(#glowAccent)" />
    <rect width="${width}" height="${height}" fill="url(#glowBottom)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />

    <!-- Outer Decorative Border Frame -->
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />
    
    <!-- Top Header Badge -->
    <g transform="translate(90, 80)">
      <rect width="${config.category.length * 10 + 40}" height="36" rx="18" fill="${config.badgeBg}" stroke="${config.badgeBorder}" stroke-width="1.5" />
      <text x="20" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="${config.badgeTextColor}" letter-spacing="1.5">${config.category}</text>
    </g>

    <!-- Brand Watermark Top Right -->
    <g transform="translate(920, 85)">
      <rect width="190" height="34" rx="17" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
      <circle cx="20" cy="17" r="6" fill="${config.accentColor}" />
      <text x="34" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#f8fafc">aitoolshaven.com</text>
    </g>

    <!-- Title Lines -->
    ${titleSvg}

    <!-- Subtitle -->
    <text x="90" y="375" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#94a3b8">${config.subtitle}</text>

    <!-- Tool Chips / Matrix Badges -->
    ${toolBadgesSvg}

    <!-- Bottom Technical Specs Footer Line -->
    <g transform="translate(90, 525)">
      <line x1="0" y1="0" x2="1020" y2="0" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
      <text x="0" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#64748b">BENCHMARKED STACK:</text>
      <text x="190" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="500" fill="#cbd5e1">${config.techDetails}</text>
      <text x="900" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="${config.badgeTextColor}">2026 EDITION</text>
    </g>
  </svg>
  `;
}

async function renderBanners() {
  console.log('Rendering high-resolution custom editorial banners with Sharp...');
  for (const config of codingGraphics) {
    const svgString = generateSVG(config);
    const outputPath = path.join(publicBlogDir, config.filename);
    
    await sharp(Buffer.from(svgString))
      .jpeg({ quality: 95 })
      .toFile(outputPath);
      
    console.log(`✓ Rendered: ${config.filename} (${fs.statSync(outputPath).size} bytes)`);
  }
  console.log('All custom editorial graphics generated successfully!');
}

renderBanners();
