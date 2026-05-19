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
  title: "SimplyPDF — AI Income Intelligence Platform",
  description:
    "Discover profitable digital business opportunities and launch them rapidly using AI automation. Your personal AI business operating system.",
  keywords: [
    "AI business",
    "digital products",
    "trend intelligence",
    "passive income",
    "side hustle",
    "faceless business",
    "AI automation",
  ],
  openGraph: {
    title: "SimplyPDF — AI Income Intelligence Platform",
    description:
      "Start an online income stream in 24 hours — even if you're starting from zero.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
