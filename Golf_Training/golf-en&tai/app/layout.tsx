import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Golf Caddy Study Program | Jungwon University",
  description: "Study in Korea and build your career in the golf industry with Jungwon University's professional caddy program.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
