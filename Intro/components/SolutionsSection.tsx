"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const translations = {
  ko: {
    title: "GnG Tour가 제공하는 3가지 핵심 솔루션",
    subtitle:
      "전문성(Expertise) · 신뢰(Trust & Safety) · 올인원(All-in-One) 구조를 기반으로 설계된 통합 서비스입니다.",
    cards: [
      {
        badge: "Solution A",
        title: "대학 연계 6개월 골프 캐디 연수 + 취업 프로그램",
        bullets: [
          "· 규칙·에티켓·코스 관리 등 실무 중심 커리큘럼 (Golf Wiki 기반)",
          "· 고객 서비스 · 리더십 · 커뮤니케이션 등 고부가가치 역량",
          "· 수료 후 한국 골프장 취업 연계",
          "· 비자 로드맵: D-2 → D-10 → E-7 → F-2-99 / F-2-R 제공"
        ],
        cta: "6개월 연수 과정 보기",
        href: "https://gngtour.com/golf/",
        theme: "brand"
      },
      {
        badge: "Solution B",
        title: "한국 병원·전문의 맞춤 의료 관광 인바운드",
        bullets: [
          "· 성형/피부/치과/정형외과/산부인과/종합검진 등 전문 분야",
          "· 실데이터 기반 병원·의료진 정보, 다국어 코디네이션",
          "· 치료 목적 C-3 비자, 공항 픽업, 통역, 숙소 배정까지 원스톱",
          "· AI 기반 병원·전문의 매칭 (Med Wiki 구조 기반)"
        ],
        cta: "한국 의료 상담 요청",
        href: "https://gngtour.com/med",
        theme: "dark"
      },
      {
        badge: "Solution C",
        title: "K-Lifestyle 쇼핑몰 (Coming Soon)",
        bullets: [
          "· K-뷰티, 건강보조제, 의료·건강 관리 제품",
          "· 골프 용품, 패션, 라이프스타일 제품 큐레이션",
          "· 연수생·의료 관광 고객을 GnG Tour 브랜드 안에 묶는 락인 전략",
          "· 추천 알고리즘 기반 향후 GnG 자체 커머스 운영 계획"
        ],
        cta: "쇼핑몰 오픈 알림 받기",
        href: "https://agent.gngtour.com/",
        theme: "outline"
      }
    ]
  },
  en: {
    title: "Three core solutions from GnG Tour",
    subtitle:
      "Built on Expertise, Trust & Safety, and All-in-One design for a seamless journey.",
    cards: [
      {
        badge: "Solution A",
        title: "6-month caddie training + career track with universities",
        bullets: [
          "· Practice-first curriculum: rules, etiquette, course ops (Golf Wiki)",
          "· Service, leadership, and communication skills for premium roles",
          "· Job linkage to Korean golf clubs after completion",
          "· Visa roadmap: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
        ],
        cta: "View the 6-month program",
        href: "https://gngtour.com/golf/",
        theme: "brand"
      },
      {
        badge: "Solution B",
        title: "Personalized medical travel inbound to Korea",
        bullets: [
          "· Plastic/derma/dental/orthopedics/OB-GYN/checkups and more",
          "· Data-backed hospital & doctor info with multilingual coordination",
          "· End-to-end: medical C-3 visa, airport pickup, interpreter, lodging",
          "· AI-powered matching engine (Med Wiki structure)"
        ],
        cta: "Request Korean medical help",
        href: "https://gngtour.com/med",
        theme: "dark"
      },
      {
        badge: "Solution C",
        title: "K-Lifestyle shopping mall (Coming soon)",
        bullets: [
          "· K-beauty, supplements, medical & wellness items",
          "· Golf gear, fashion, and lifestyle curation",
          "· Lock-in strategy to keep trainees and patients in one brand",
          "· Future GnG commerce with recommendation algorithms"
        ],
        cta: "Get launch alerts",
        href: "https://agent.gngtour.com/",
        theme: "outline"
      }
    ]
  },
  ru: {
    title: "3 ключевых решения GnG Tour",
    subtitle:
      "Построены на экспертизе, доверии и модели «все-в-одном» для плавного пути клиента.",
    cards: [
      {
        badge: "Solution A",
        title: "6-месячное обучение кэдди + карьера при университетах",
        bullets: [
          "· Практический курс: правила, этикет, управление полем (Golf Wiki)",
          "· Сервис, лидерство, коммуникация для премиальных позиций",
          "· Связь с работой на гольф-полях Кореи после выпуска",
          "· Визы: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
        ],
        cta: "Посмотреть курс на 6 месяцев",
        href: "https://gngtour.com/golf/",
        theme: "brand"
      },
      {
        badge: "Solution B",
        title: "Персональный медтуризм в Корею",
        bullets: [
          "· Пластика/дерма/стоматология/ортопедия/гинекология/чекапы",
          "· Данные по клиникам и врачам + мультиязычная координация",
          "· Полный цикл: мед. виза C-3, трансфер, перевод, проживание",
          "· AI-подбор клиники и врача (структура Med Wiki)"
        ],
        cta: "Запросить мед. консультацию",
        href: "https://gngtour.com/med",
        theme: "dark"
      },
      {
        badge: "Solution C",
        title: "Магазин K-Lifestyle (скоро)",
        bullets: [
          "· K-beauty, БАДы, мед- и wellness-товары",
          "· Гольф-товары, мода, lifestyle подборки",
          "· Стратегия удержания студентов и пациентов в одном бренде",
          "· Будущая коммёрс-платформа GnG с рекомендациями"
        ],
        cta: "Получить уведомление об открытии",
        href: "https://agent.gngtour.com/",
        theme: "outline"
      }
    ]
  },
  th: {
    title: "3 โซลูชันหลักจาก GnG Tour",
    subtitle:
      "ออกแบบบนรากฐาน ความเชี่ยวชาญ ความน่าเชื่อถือ และบริการครบวงจร",
    cards: [
      {
        badge: "Solution A",
        title: "หลักสูตรแคดดี้ 6 เดือน + เส้นทางงานกับมหาวิทยาลัย",
        bullets: [
          "· หลักสูตรเน้นปฏิบัติ: กฎ มารยาท การดูแลสนาม (Golf Wiki)",
          "· ทักษะบริการ ภาวะผู้นำ การสื่อสารสำหรับงานระดับพรีเมียม",
          "· เชื่อมงานกับสนามกอล์ฟในเกาหลีหลังจบคอร์ส",
          "· แผนวีซ่า: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
        ],
        cta: "ดูหลักสูตร 6 เดือน",
        href: "https://gngtour.com/golf/",
        theme: "brand"
      },
      {
        badge: "Solution B",
        title: "ท่องเที่ยวการแพทย์เข้าเกาหลีแบบส่วนตัว",
        bullets: [
          "· ศัลยกรรม/ผิวพรรณ/ทันตกรรม/กระดูก/สูตินรีเวช/ตรวจสุขภาพ",
          "· ข้อมูลโรงพยาบาลและแพทย์จากฐานข้อมูล พร้อมการประสานหลายภาษา",
          "· ครบวงจร: วีซ่า C-3 เพื่อการรักษา รับสนามบิน ล่าม ที่พัก",
          "· ระบบจับคู่โรงพยาบาลและแพทย์ด้วย AI (Med Wiki)"
        ],
        cta: "ขอความช่วยเหลือด้านการแพทย์ในเกาหลี",
        href: "https://gngtour.com/med",
        theme: "dark"
      },
      {
        badge: "Solution C",
        title: "ช้อปปิ้งมอลล์ K-Lifestyle (เร็วๆ นี้)",
        bullets: [
          "· K-beauty ผลิตภัณฑ์เสริมอาหาร สินค้าแพทย์และสุขภาพ",
          "· อุปกรณ์กอล์ฟ แฟชั่น และสินค้าไลฟ์สไตล์ที่คัดสรร",
          "· กลยุทธ์ล็อกอินลูกค้า นักศึกษา และผู้ป่วยไว้ในแบรนด์เดียว",
          "· เตรียมต่อยอดสู่คอมเมิร์ซ GnG พร้อมระบบแนะนำสินค้า"
        ],
        cta: "รับแจ้งเตือนวันเปิด",
        href: "https://agent.gngtour.com/",
        theme: "outline"
      }
    ]
  }
};

export default function SolutionsSection() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;
  const withLang = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}lang=${lang}`;

  const cardImages = [
    "/images/solution_golf.jpg",
    "/images/solution_med.jpg",
    "/images/solution_mall.jpg"
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-main space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {copy.title}
          </h2>
          <p className="text-sm text-slate-600">{copy.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.cards.map((card, idx) => (
            <div
              key={card.title}
              className="group rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-[450px]"
            >
              {/* Image Section (60-70%) */}
              <div
                className="h-[60%] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${cardImages[idx]}')` }}
              />

              {/* Text/Content Section */}
              <div className="flex-1 p-5 flex flex-col bg-white relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold line-clamp-1" title={card.title}>{card.title}</h3>
                </div>

                <p className="text-xs font-semibold text-brand mb-3">
                  {card.badge}
                </p>

                <ul className="text-xs text-slate-600 space-y-1 mb-4 flex-1 overflow-hidden">
                  {card.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="line-clamp-1">• {b.replace(/^· /, '')}</li>
                  ))}
                </ul>

                <Link
                  href={withLang(card.href)}
                  target="_blank"
                  rel="noreferrer"
                  prefetch={false}
                  className={
                    "mt-auto w-full inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition transform active:scale-95 " +
                    (card.theme === "brand"
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : card.theme === "dark"
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "bg-slate-100 text-brand hover:bg-slate-200")
                  }
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
