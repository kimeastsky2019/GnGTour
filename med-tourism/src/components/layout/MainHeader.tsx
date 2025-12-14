"use client";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "../../lib/i18n";
import React from "react";
import { imagePath } from "../../lib/paths";

type Props = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export default function MainHeader({ locale, onLocaleChange }: Props) {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Image
            src={imagePath("/images/gngtour-logo.png")}
            alt="GnG Tour logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-contain"
            priority
          />
          <span>Medical Korea Platform</span>
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <a
            href="https://www.gngtour.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            {locale === 'ko' ? '홈' :
              locale === 'en' ? 'Home' :
                locale === 'ru' ? 'Главная' :
                  'หน้าแรก'}
          </a>
          <Link
            href={locale === 'ko' ? '/medical-contacts' : `/${locale}/medical-contacts`}
            className="hidden sm:inline text-slate-600 hover:text-slate-900"
          >
            {locale === 'ko' ? '의료진 찾기' :
              locale === 'en' ? 'Find Doctors' :
                locale === 'ru' ? 'Найти врачей' :
                  'ค้นหาแพทย์'}
          </Link>
          <a href="#contact" className="hidden sm:inline text-slate-600 hover:text-slate-900">
            {locale === 'ko' ? '상담하기' :
              locale === 'en' ? 'Consultation' :
                locale === 'ru' ? 'Консультация' :
                  'ปรึกษา'}
          </a>
          <Link href="/auth" className="text-slate-600 hover:text-slate-900">
            {locale === 'ko' ? '로그인' :
              locale === 'en' ? 'Login' :
                locale === 'ru' ? 'Войти' :
                  'เข้าสู่ระบบ'}
          </Link>
          <div className="h-4 w-px bg-slate-200 mx-2" />
          <div className="flex gap-1">
            {(['ru', 'en', 'th', 'ko'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => onLocaleChange(lang)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${locale === lang
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-100"
                  }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
