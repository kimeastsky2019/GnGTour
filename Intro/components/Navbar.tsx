"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const navLabels = {
  ko: { home: "홈", golf: "골프 연수", med: "의료 관광", mall: "K-Lifestyle 쇼핑" },
  en: { home: "Home", golf: "Golf Training", med: "Medical Travel", mall: "K-Lifestyle Mall" },
  ru: { home: "Главная", golf: "Гольф-обучение", med: "Медтуризм", mall: "K-Lifestyle Молл" },
  th: { home: "หน้าแรก", golf: "คอร์สแคดดี้", med: "ท่องเที่ยวการแพทย์", mall: "ช้อปปิ้ง K-Lifestyle" }
};

const languageNames = {
  ko: "한국어",
  en: "English",
  ru: "Русский",
  th: "ไทย"
};

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const labels = navLabels[lang] ?? navLabels.en;
  const navItems = [
    { href: "/", label: labels.home },
    { href: "/golf", label: labels.golf },
    { href: "/med", label: labels.med },
    { href: "/mall", label: labels.mall }
  ];

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-main flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/gngtour-logo.png"
            alt="GnG Tour logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="font-semibold text-lg tracking-tight">
            GnG Tour
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "text-sm font-medium transition-colors " +
                    (active
                      ? "text-brand"
                      : "text-slate-600 hover:text-slate-900")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2 py-1">
            {(["ko", "en", "ru", "th"] as const).map((code) => {
              const active = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={
                    "rounded-lg px-2 py-1 text-xs font-semibold transition " +
                    (active
                      ? "bg-brand text-white shadow-soft"
                      : "text-slate-600 hover:text-slate-900")
                  }
                  aria-pressed={active}
                >
                  {languageNames[code]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
