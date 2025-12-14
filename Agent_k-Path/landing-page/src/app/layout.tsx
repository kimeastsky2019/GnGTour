import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroller from "@/components/SmoothScroller";
import HtmlLangSetter from "@/components/HtmlLangSetter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-PATH.AI | Korea Study & Visa Planner",
  description:
    "AI-powered planner that pairs you with the right training program and visa path for Korea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-black text-foreground`}
      >
        <LanguageProvider>
          <HtmlLangSetter />
          <SmoothScroller>{children}</SmoothScroller>
        </LanguageProvider>
      </body>
    </html>
  );
}
