import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electricity Cost Calculator",
  description: "Calculate electricity costs for home appliances",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-adsense-account" content="ca-pub-8022371531355895" />
        <meta name="google-site-verification" content="jpnp6ZZrsofA3VgIxeLKbhmv8jmy0LWur8uvAOMXS_M" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
 