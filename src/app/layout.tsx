import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aitoolshaven.com"),
  title: {
    default: "AIToolsHaven | AI Tools Discovery Hub",
    template: "%s | AIToolsHaven",
  },
  description:
    "Discover, compare, and review the best AI tools of 2026. AIToolsHaven is the #1 directory for AI software across writing, coding, image generation, and more.",
  keywords: [
    "AI tools",
    "AI software directory",
    "best AI tools 2026",
    "compare AI tools",
    "AI tool reviews",
    "ChatGPT alternatives",
    "AI productivity tools",
  ],
  authors: [{ name: "AIToolsHaven" }],
  creator: "AIToolsHaven",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitoolshaven.com",
    siteName: "AIToolsHaven AI Tools",
    title: "AIToolsHaven | AI Tools Discovery Hub",
    description:
      "Discover, compare, and review the best AI tools of 2026.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "AIToolsHaven — AI Tools Discovery Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIToolsHaven | AI Tools Discovery Hub",
    description: "Discover, compare, and review the best AI tools of 2026.",
    images: ["/og-default.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
