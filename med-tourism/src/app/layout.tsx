import "./globals.css";
import React from "react";

export const metadata = {
  title: "Korea Medical Tourism Platform",
  description: "AI-based matching platform connecting Central Asian patients and Korean doctors",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}