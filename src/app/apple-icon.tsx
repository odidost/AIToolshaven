import { ImageResponse } from 'next/og';
 
// Route segment config
export const runtime = 'edge';
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="80" viewBox="0 0 175 100" fillRule="evenodd" clipRule="evenodd">
          <defs>
            <linearGradient id="a-grad-apple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="i-grad-apple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
          <path d="M 10 90 L 45 15 L 65 15 L 100 90 L 75 90 L 66 70 L 34 70 L 25 90 Z M 41 55 L 59 55 L 50 37 Z" fill="url(#a-grad-apple)" />
          <path d="M 110 90 L 133.33 40 L 153.33 40 L 130 90 Z" fill="url(#i-grad-apple)" />
          <path d="M 138 30 L 145 15 L 165 15 L 158 30 Z" fill="url(#i-grad-apple)" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
