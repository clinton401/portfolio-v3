import type { Metadata, Viewport } from "next";
import { DM_Sans, EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { personal, seo } from "@/lib/data";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  // 300 removed because EB Garamond does not support it
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // ── Core ────────────────────────────────────────────────────────────────────
  title: {
    default: seo.title,
    template: `%s | ${personal.name}`,
  },
  description: seo.description,
  metadataBase: new URL(seo.url),
  authors: [{ name: personal.name, url: seo.url }],
  creator: personal.name,
  keywords: [
    "Full-Stack Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Nigeria",
    "Software Engineer",
    "SaaS",
    "Resumify",
  ],

  // ── Favicons & Icons ─────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── Web App Manifest ─────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    siteName: personal.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} - Full-Stack & Mobile Developer`,
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    title: seo.title,
    description: seo.description,
    images: ["/og-image.png"],
  },

  // ── Robots ───────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: seo.url,
  },
};
 
export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
};
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-primary overflow-x-hidden antialiased">
        <div className="max-w-375 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
