import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "GnG Tour | Учеба в Корее · Медтуризм · K-Lifestyle",
  description:
    "GnG Tour — единая платформа: 6-месячное обучение кэдди при корейских вузах, медтуризм для иностранцев и магазин K-Lifestyle."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
