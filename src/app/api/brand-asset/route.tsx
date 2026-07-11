import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
 
export const runtime = 'edge';
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') || 'logo'; // 'logo' | 'icon' | 'stacked'
  const variant = searchParams.get('variant') || 'primary'; // 'primary' | 'white'

  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#111827';
  const aGradientId = isWhite ? 'a-grad-white' : 'a-grad';
  const iGradientId = isWhite ? 'i-grad-white' : 'i-grad';

  // SVG Paths
  const A_PATH = "M 10 90 L 45 15 L 65 15 L 100 90 L 75 90 L 66 70 L 34 70 L 25 90 Z M 41 55 L 59 55 L 50 37 Z";
  const I_STEM = "M 110 90 L 133.33 40 L 153.33 40 L 130 90 Z";
  const I_DOT = "M 138 30 L 145 15 L 165 15 L 158 30 Z";

  const defs = (
    <defs>
      <linearGradient id={aGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isWhite ? '#FFFFFF' : '#22D3EE'} />
        <stop offset="100%" stopColor={isWhite ? '#FFFFFF' : '#6366F1'} />
      </linearGradient>
      <linearGradient id={iGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isWhite ? '#FFFFFF' : '#F59E0B'} />
        <stop offset="100%" stopColor={isWhite ? '#FFFFFF' : '#F43F5E'} />
      </linearGradient>
    </defs>
  );

  if (type === 'icon') {
    return new ImageResponse(
      (
        <div style={{ display: 'flex', width: '100%', height: '100%', background: 'transparent' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 175 100" fillRule="evenodd" clipRule="evenodd">
            {defs}
            <path d={A_PATH} fill={`url(#${aGradientId})`} />
            <path d={I_STEM} fill={`url(#${iGradientId})`} />
            <path d={I_DOT} fill={`url(#${iGradientId})`} />
          </svg>
        </div>
      ),
      { width: 350, height: 200 }
    );
  }

  if (type === 'stacked') {
    return new ImageResponse(
      (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: 'transparent' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="350" height="200" viewBox="0 0 175 100" fillRule="evenodd" clipRule="evenodd">
            {defs}
            <path d={A_PATH} fill={`url(#${aGradientId})`} />
            <path d={I_STEM} fill={`url(#${iGradientId})`} />
            <path d={I_DOT} fill={`url(#${iGradientId})`} />
          </svg>
          <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '16px' }}>
            <span style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: '64px', letterSpacing: '0.2em', color: textColor }}>TOOLS</span>
            <span style={{ fontFamily: 'sans-serif', fontWeight: 300, fontSize: '64px', letterSpacing: '0.2em', color: textColor }}>HAVEN</span>
          </div>
        </div>
      ),
      { width: 800, height: 600 }
    );
  }

  // Default: logo (horizontal)
  return new ImageResponse(
    (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', background: 'transparent', padding: '0 40px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="100" viewBox="0 0 175 100" fillRule="evenodd" clipRule="evenodd">
          {defs}
          <path d={A_PATH} fill={`url(#${aGradientId})`} />
          <path d={I_STEM} fill={`url(#${iGradientId})`} />
          <path d={I_DOT} fill={`url(#${iGradientId})`} />
        </svg>
        <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '12px', marginTop: '12px' }}>
          <span style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: '72px', letterSpacing: '0.08em', color: textColor }}>TOOLS</span>
          <span style={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '72px', letterSpacing: '0.08em', color: textColor, opacity: 0.8, marginLeft: '4px' }}>HAVEN</span>
        </div>
      </div>
    ),
    { width: 1000, height: 200 }
  );
}