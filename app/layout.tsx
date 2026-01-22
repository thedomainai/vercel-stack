import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "vercel-stack",
    template: "%s | vercel-stack",
  },
  description:
    "A Full-Stack Starter optimized for Coding Agents. Built with Next.js 15, Supabase, and Vercel AI SDK.",
  keywords: ["Next.js", "Supabase", "Vercel", "AI", "Full-Stack", "Starter"],
  authors: [{ name: "thedomainai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "vercel-stack",
    title: "vercel-stack",
    description:
      "A Full-Stack Starter optimized for Coding Agents. Built with Next.js 15, Supabase, and Vercel AI SDK.",
  },
  twitter: {
    card: "summary_large_image",
    title: "vercel-stack",
    description:
      "A Full-Stack Starter optimized for Coding Agents. Built with Next.js 15, Supabase, and Vercel AI SDK.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
