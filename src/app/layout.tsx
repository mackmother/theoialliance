import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PasswordGate } from "@/components/auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Space Grotesk - Industrial, technical sans-serif (closest to Halvar on Google Fonts)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "wibipOS | Production-Ready OpenWiFi for MSPs",
  description:
    "wibipOS is the enterprise wrapper for OpenWiFi. Manage Ruckus, Edgecore, NetExperience, Fortinet, and more from one dashboard. No vendor lock-in. Deploy in 15 minutes.",
  keywords: [
    "OpenWiFi",
    "MSP",
    "Wi-Fi management",
    "multi-vendor",
    "Ruckus",
    "Edgecore",
    "NetExperience",
    "Fortinet",
    "managed Wi-Fi",
  ],
  authors: [{ name: "WiBUZ" }],
  openGraph: {
    title: "wibipOS | Production-Ready OpenWiFi for MSPs",
    description:
      "The enterprise wrapper for OpenWiFi. Manage multi-vendor Wi-Fi from one dashboard.",
    url: "https://wibuz.com",
    siteName: "WiBUZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wibipOS | Production-Ready OpenWiFi for MSPs",
    description:
      "The enterprise wrapper for OpenWiFi. Manage multi-vendor Wi-Fi from one dashboard.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to external image hosts for faster loading */}
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}
