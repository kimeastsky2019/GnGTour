"use client";

import { useLanguage } from "./LanguageProvider";

const footerCopy = {
  ko: {
    tagline: "한국 전문 연수 · 의료 관광 · K-Lifestyle 쇼핑 통합 플랫폼"
  },
  en: { tagline: "Integrated platform for study, medical travel, and K-Lifestyle shopping" },
  ru: { tagline: "Единая платформа: обучение в Корее, медтуризм и K-Lifestyle шопинг" },
  th: { tagline: "แพลตฟอร์มครบวงจร: เรียน ทำทัวร์การแพทย์ และช้อป K-Lifestyle" }
};

export default function Footer() {
  const { lang } = useLanguage();
  const copy = footerCopy[lang] ?? footerCopy.en;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-main flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} GnG Tour. All rights reserved.</p>
        <p>{copy.tagline}</p>
      </div>
    </footer>
  );
}
