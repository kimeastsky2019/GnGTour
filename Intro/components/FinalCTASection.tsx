"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const translations = {
  ko: {
    title: "한국에서 배우고, 치료받고, 성장할 준비가 되셨나요?",
    desc: "GnG Tour와 함께라면 교육, 취업, 의료, 쇼핑까지 하나의 브랜드 안에서 이어지는 삶의 여정을 설계할 수 있습니다.",
    golf: "골프 연수 시작하기",
    med: "의료 상담하기",
    mall: "K-Lifestyle 쇼핑하기"
  },
  en: {
    title: "Ready to study, heal, and grow in Korea?",
    desc: "With GnG Tour you can plan education, jobs, medical care, and shopping inside one trusted brand.",
    golf: "Start golf training",
    med: "Get medical help",
    mall: "Shop K-Lifestyle"
  },
  ru: {
    title: "Готовы учиться, лечиться и расти в Корее?",
    desc: "С GnG Tour вы строите путь — учеба, работа, медицина и покупки — внутри одного надежного бренда.",
    golf: "Начать гольф-обучение",
    med: "Получить мед. консультацию",
    mall: "Магазин K-Lifestyle"
  },
  th: {
    title: "พร้อมเรียน รักษา และเติบโตในเกาหลีหรือยัง?",
    desc: "กับ GnG Tour คุณออกแบบเส้นทางเรียน งาน การแพทย์ และช้อปปิ้ง ได้ครบในแบรนด์เดียวที่เชื่อถือได้",
    golf: "เริ่มหลักสูตรกอล์ฟ",
    med: "รับคำปรึกษาการแพทย์",
    mall: "ช้อป K-Lifestyle"
  }
};

export default function FinalCTASection() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;
  const withLang = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}lang=${lang}`;

  return (
    <section className="py-16 bg-brand-dark text-white">
      <div className="container-main text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">{copy.title}</h2>
        <p className="text-sm text-slate-200 max-w-xl mx-auto">{copy.desc}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={withLang("https://gngtour.com/golf/")}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-brand-dark"
            prefetch={false}
          >
            {copy.golf}
          </Link>
          <Link
            href={withLang("https://gngtour.com/med")}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            prefetch={false}
          >
            {copy.med}
          </Link>
          <Link
            href={withLang("https://agent.gngtour.com/")}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-white"
            prefetch={false}
          >
            {copy.mall}
          </Link>
        </div>
      </div>
    </section>
  );
}
