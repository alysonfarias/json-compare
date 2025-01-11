import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'JSON Compare Tool | Easy Online JSON Comparison',
  description: 'Compare JSON objects side by side with our free online JSON comparison tool. Easily spot differences, additions, and removals in your JSON data.',
  keywords: 'JSON compare, JSON diff, JSON comparison tool, online JSON tool',
  openGraph: {
    title: 'JSON Compare Tool | Easy Online JSON Comparison',
    description: 'Compare JSON objects side by side with our free online JSON comparison tool. Easily spot differences, additions, and removals in your JSON data.',
    url: 'https://yourwebsite.com/json-compare',
    siteName: 'Your Website Name',
    images: [
      {
        url: 'https://yourwebsite.com/og-image-json-compare.jpg',
        width: 1200,
        height: 630,
        alt: 'JSON Compare Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Compare Tool | Easy Online JSON Comparison',
    description: 'Compare JSON objects side by side with our free online JSON comparison tool. Easily spot differences, additions, and removals in your JSON data.',
    images: ['https://yourwebsite.com/og-image-json-compare.jpg'],
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
