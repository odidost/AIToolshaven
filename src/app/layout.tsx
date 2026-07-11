import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | AI Tools Discovery Hub`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI tools",
    "AI software directory",
    "best AI tools 2026",
    "compare AI tools",
    "AI tool reviews",
    "ChatGPT alternatives",
    "AI productivity tools",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI Tools Discovery Hub`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Premium AI Tools Directory`,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI Tools Discovery Hub`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { BookmarksProvider } from "@/lib/contexts/BookmarksContext";
import { AssetManifestProvider } from "@/lib/contexts/AssetManifestContext";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import fs from 'fs';
import path from 'path';

function getAssetManifest() {
  try {
    const p = path.join(process.cwd(), 'public', 'assets', 'manifest.json');
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf-8'));
    }
  } catch (e) {
    // Ignore error
  }
  return {};
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const manifest = getAssetManifest();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-on-surface relative">
        <BackgroundPattern type="ambient" className="fixed inset-0 -z-10" opacity={1} />
        <AssetManifestProvider manifest={manifest}>
          <BookmarksProvider>
            <AnalyticsProvider />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </BookmarksProvider>
        </AssetManifestProvider>
      </body>
    </html>
  );
}
