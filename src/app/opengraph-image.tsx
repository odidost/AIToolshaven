import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'AIToolsHaven - Premium AI Tools Directory';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="175" height="100" viewBox="0 0 175 100" fillRule="evenodd" clipRule="evenodd">
            <defs>
              <linearGradient id="a-grad-og" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
              <linearGradient id="i-grad-og" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
            <path d="M 10 90 L 45 15 L 65 15 L 100 90 L 75 90 L 66 70 L 34 70 L 25 90 Z M 41 55 L 59 55 L 50 37 Z" fill="url(#a-grad-og)" />
            <path d="M 110 90 L 133.33 40 L 153.33 40 L 130 90 Z" fill="url(#i-grad-og)" />
            <path d="M 138 30 L 145 15 L 165 15 L 158 30 Z" fill="url(#i-grad-og)" />
          </svg>
          <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '12px', marginLeft: '12px' }}>
            <span style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: '80px', letterSpacing: '0.08em', color: '#0f172a' }}>
              TOOLS
            </span>
            <span style={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '80px', letterSpacing: '0.08em', color: '#0f172a', opacity: 0.8, marginLeft: '4px' }}>
              HAVEN
            </span>
          </div>
        </div>
        <p style={{ marginTop: '40px', fontSize: '32px', color: '#64748b', fontWeight: 500 }}>
          The world's most curated AI tools directory
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
