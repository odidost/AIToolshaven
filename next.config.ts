import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  serverExternalPackages: ["bcryptjs"],
  compress: true,
  
  // Production Headers
  async headers() {
    return [
      {
        // Cache static media and assets in browser/CDN
        source: "/assets/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|png|webp|ico|woff|woff2|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/category/text-generation',
        destination: '/category/ai-writing-tools',
        permanent: true,
      },
      {
        source: '/category/image-generation',
        destination: '/category/ai-image-generators',
        permanent: true,
      },
      {
        source: '/category/video-creation',
        destination: '/category/ai-video-generators',
        permanent: true,
      },
      {
        source: '/insight-engine',
        destination: '/ai-tool-recommender',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
