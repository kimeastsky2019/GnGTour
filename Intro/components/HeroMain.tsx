"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const translations = {
  ko: {
    badge: "GnG Tour = 한국 전문 연수 + 의료 관광 + K-Lifestyle 쇼핑 허브",
    title1: "한국에서 배우고, 치료받고,",
    title2: "새로운 삶을 시작하세요.",
    desc: "한국 대학 연계 6개월 골프 캐디 전문 연수, 외국인 대상 의료 관광 코디네이션, 그리고 K-라이프스타일 쇼핑몰까지 한 번에 연결하는 통합 플랫폼 GnG Tour입니다.",
    ctaGolf: "골프 연수 상담하기",
    ctaMed: "의료 상담 신청하기",
    ctaMall: "K-Lifestyle 쇼핑 보기",
    trust: "전문성 · 신뢰 · 올인원(All-in-One) 서비스",
    langs: "다국어 지원 (RU / EN / TH / KR)",
    journeyTitle: "GnG Tour가 연결하는 3가지 여정",
    journey1Title: "1. 6개월 골프 캐디 전문 연수",
    journey1Desc: "대학 연계 커리큘럼 · 취업 연계 · 비자 로드맵",
    journey2Title: "2. 한국 의료 관광 & 코디네이션",
    journey2Desc: "병원/전문의 매칭 · 통역 · 비자 · 숙소까지 원스톱",
    journey3Title: "3. K-Lifestyle 쇼핑몰",
    journey3Desc: "K-뷰티 · 건강 · 패션 · 골프 용품 큐레이션",
    note:
      "실제 운영 시스템은 Golf Wiki, Med Wiki 기반으로 다국어 구조가 이미 확보되어 있으며, 향후 상담·예약·쇼핑까지 통합됩니다."
  },
  en: {
    badge: "GnG Tour = Study in Korea + Medical travel + K-Lifestyle hub",
    title1: "Learn in Korea, get treated,",
    title2: "and start a new life.",
    desc: "One platform that links a 6-month caddie training with Korean universities, medical travel coordination for foreigners, and a K-Lifestyle shop.",
    ctaGolf: "Book golf training consult",
    ctaMed: "Request medical consult",
    ctaMall: "Shop K-Lifestyle",
    trust: "Expertise · Trust · All-in-one service",
    langs: "Multilingual support (RU / EN / TH / KR)",
    journeyTitle: "3 journeys GnG Tour connects",
    journey1Title: "1. 6-month pro caddie training",
    journey1Desc: "University curriculum · Job linkage · Visa roadmap",
    journey2Title: "2. Korea medical travel & coordination",
    journey2Desc: "Hospital matching · Interpreting · Visa · Housing",
    journey3Title: "3. K-Lifestyle shop",
    journey3Desc: "K-beauty · Health · Fashion · Golf gear curation",
    note:
      "The live system is built on Golf Wiki and Med Wiki with multilingual structure; consultation, booking, and shopping will be unified."
  },
  ru: {
    badge: "GnG Tour = Учеба в Корее + Медтуризм + K-Lifestyle шопинг",
    title1: "Учитесь и лечитесь в Корее,",
    title2: "начиная новую жизнь.",
    desc: "Одна платформа: 6-месячное обучение кэдди при корейских вузах, медтуризм для иностранцев с координацией и магазин K-Lifestyle.",
    ctaGolf: "Консультация по гольф-курсу",
    ctaMed: "Запросить мед. консультацию",
    ctaMall: "Перейти в K-Lifestyle магазин",
    trust: "Экспертиза · Доверие · Все-в-одном",
    langs: "Поддержка RU / EN / TH / KR",
    journeyTitle: "3 направления GnG Tour",
    journey1Title: "1. 6-месячное обучение кэдди",
    journey1Desc: "Университетский курс · Связь с работой · Визовый план",
    journey2Title: "2. Медицинский туризм в Корею",
    journey2Desc: "Подбор клиники · Перевод · Виза · Жилье",
    journey3Title: "3. Магазин K-Lifestyle",
    journey3Desc: "K-beauty · Здоровье · Мода · Гольф — подборки",
    note:
      "Рабочая система на базе Golf Wiki и Med Wiki уже поддерживает мультиязычие; дальше объединятся консультации, бронирование и покупки."
  },
  th: {
    badge: "GnG Tour = หลักสูตรในเกาหลี + ท่องเที่ยวการแพทย์ + ช้อป K-Lifestyle",
    title1: "เรียนที่เกาหลี รักษาที่เกาหลี",
    title2: "และเริ่มต้นชีวิตใหม่",
    desc: "แพลตฟอร์มเดียวที่เชื่อมหลักสูตรแคดดี้ 6 เดือนกับมหาวิทยาลัยเกาหลี บริการท่องเที่ยวการแพทย์ และช้อปปิ้ง K-Lifestyle",
    ctaGolf: "ปรึกษาหลักสูตรกอล์ฟ",
    ctaMed: "ขอคำปรึกษาการแพทย์",
    ctaMall: "ช้อป K-Lifestyle",
    trust: "ความเชี่ยวชาญ · น่าเชื่อถือ · ครบวงจร",
    langs: "รองรับหลายภาษา (RU / EN / TH / KR)",
    journeyTitle: "3 การเดินทางที่ GnG เชื่อม",
    journey1Title: "1. หลักสูตรแคดดี้ 6 เดือน",
    journey1Desc: "หลักสูตรมหาวิทยาลัย · เชื่อมงาน · แผนวีซ่า",
    journey2Title: "2. ท่องเที่ยวการแพทย์เกาหลี",
    journey2Desc: "จับคู่โรงพยาบาล · ล่าม · วีซ่า · ที่พัก",
    journey3Title: "3. ช้อปปิ้ง K-Lifestyle",
    journey3Desc: "K-beauty · สุขภาพ · แฟชั่น · อุปกรณ์กอล์ฟคัดสรร",
    note:
      "ระบบจริงพัฒนาบน Golf Wiki และ Med Wiki รองรับหลายภาษาแล้ว และจะรวมการปรึกษา จอง และช้อปในอนาคต"
  }
};

export default function HeroMain() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;
  const withLang = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}lang=${lang}`;

  return (
    <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/1_Hero_Banner_1920x800.jpg')" }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-md">
          {copy.title1} {copy.title2}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-sm max-w-2xl mx-auto">
          Experience the Perfect Getaway
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href={withLang("https://gngtour.com/golf/")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-brand-dark transition transform hover:-translate-y-1"
            prefetch={false}
          >
            {copy.ctaGolf}
          </Link>
          <Link
            href={withLang("https://gngtour.com/med")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/10 backdrop-blur-md px-8 py-3 text-lg font-semibold text-white border border-white/30 hover:bg-white/20 transition transform hover:-translate-y-1"
            prefetch={false}
          >
            {copy.ctaMed}
          </Link>
        </div>
      </div>
    </section>
  );
}
