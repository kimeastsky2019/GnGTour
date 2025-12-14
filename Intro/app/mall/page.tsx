"use client";

import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  ko: {
    badge: "GnG Tour K-Lifestyle 쇼핑몰",
    title1: "한국에서의 좋은 경험을,",
    title2: "집으로 돌아간 후에도 계속 이어가세요.",
    desc:
      "골프 연수생과 의료 관광 고객이 한국에서 사용해 본 제품을 다시 구매하고, 새로운 K-Lifestyle 상품을 발견할 수 있는 큐레이션 쇼핑몰입니다.",
    note: "현재는 베타 준비 단계이며, 오픈 알림 신청 및 추천 상품 리스트부터 제공할 수 있습니다.",
    categoryTitle: "주요 카테고리",
    categoryDesc:
      "실제 운영 시, 카테고리별 추천 상품과 후기, 연수·의료 기록 기반 개인화 추천 알고리즘을 연동할 수 있습니다.",
    categories: [
      { name: "K-Beauty", desc: "스킨케어, 메이크업, 클렌징 등 한국 대표 뷰티 브랜드" },
      { name: "건강보조제", desc: "비타민, 홍삼, 관절·면역 케어 제품" },
      { name: "골프 전문 장비", desc: "클럽, 골프볼, 액세서리, 골프웨어" },
      { name: "의료·건강 관리 제품", desc: "의료 소모품, 재활·체형 케어 용품" },
      { name: "패션 & 라이프스타일", desc: "의류, 가방, 스니커즈, 리빙 소품" }
    ],
    roleTitle: "GnG Tour 쇼핑몰의 역할",
    roleDesc:
      "쇼핑몰은 단순 판매 채널이 아니라, GnG Tour 브랜드 안에서 고객을 묶어 두는 락인 전략의 핵심 요소입니다.",
    roleBullets: [
      "연수생·환자·보호자가 공통으로 사용하는 제품 큐레이션",
      "한국 방문 후에도 지속되는 커뮤니티 및 콘텐츠 연계",
      "이전 구매·상담·연수 데이터를 반영한 개인화 추천"
    ],
    alertTitle: "쇼핑몰 오픈 알림 신청(예시 플로우)",
    alertSteps: [
      "· 이메일 또는 메신저 ID 입력",
      "· 관심 카테고리 선택 (K-Beauty / 건강 / 골프 / 패션 등)",
      "· 베타 오픈 시 우선 초대 및 할인 코드 제공"
    ]
  },
  en: {
    badge: "GnG Tour K-Lifestyle Mall",
    title1: "Keep your great Korean experience",
    title2: "going even after you fly home.",
    desc:
      "A curated shop where trainees and medical travelers can repurchase what they loved in Korea and discover new K-Lifestyle picks.",
    note: "Currently in beta prep; we can collect launch alerts and share curated lists first.",
    categoryTitle: "Key categories",
    categoryDesc:
      "In production we can add recommended products, reviews, and personalized picks based on training and medical records.",
    categories: [
      { name: "K-Beauty", desc: "Skincare, makeup, cleansing from leading Korean brands" },
      { name: "Supplements", desc: "Vitamins, red ginseng, joint and immune care" },
      { name: "Golf gear", desc: "Clubs, balls, accessories, golf wear" },
      { name: "Medical & wellness", desc: "Medical supplies, rehab and posture care" },
      { name: "Fashion & lifestyle", desc: "Apparel, bags, sneakers, living goods" }
    ],
    roleTitle: "Role of the GnG mall",
    roleDesc:
      "Beyond sales, the mall is a lock-in strategy to keep customers inside the GnG brand ecosystem.",
    roleBullets: [
      "Curated items used by trainees, patients, and guardians alike",
      "Community and content that continue after visiting Korea",
      "Personalized picks using past purchases, consults, and training data"
    ],
    alertTitle: "Launch alert flow (sample)",
    alertSteps: [
      "· Enter email or messenger ID",
      "· Pick interests (K-Beauty / health / golf / fashion etc.)",
      "· Get early invite and discount when beta opens"
    ]
  },
  ru: {
    badge: "Магазин GnG Tour K-Lifestyle",
    title1: "Сохраняйте лучшие впечатления из Кореи",
    title2: "даже после возвращения домой.",
    desc:
      "Кураторский магазин, где студенты и медтуристы могут покупать любимые товары из Кореи и находить новые K-Lifestyle продукты.",
    note: "Сейчас этап подготовки беты: собираем заявки на уведомление и делимся списками рекомендаций.",
    categoryTitle: "Ключевые категории",
    categoryDesc:
      "В продакшене добавим рекомендованные товары, отзывы и персонализацию по данным обучения и лечения.",
    categories: [
      { name: "K-Beauty", desc: "Уход, макияж, очищение от корейских брендов" },
      { name: "БАДы и здоровье", desc: "Витамины, красный женьшень, уход за суставами и иммунитетом" },
      { name: "Гольф", desc: "Клюшки, мячи, аксессуары, одежда для гольфа" },
      { name: "Медицина и велнес", desc: "Мед. расходники, реабилитация и коррекция осанки" },
      { name: "Fashion & lifestyle", desc: "Одежда, сумки, кроссовки, товары для дома" }
    ],
    roleTitle: "Роль магазина GnG",
    roleDesc:
      "Это не просто продажи: магазин удерживает клиентов внутри бренда GnG.",
    roleBullets: [
      "Подборки товаров для студентов, пациентов и сопровождающих",
      "Сообщество и контент продолжаются после поездки в Корею",
      "Персональные рекомендации по прошлым покупкам, консультациям и обучению"
    ],
    alertTitle: "Уведомление об открытии (пример)",
    alertSteps: [
      "· Укажите email или мессенджер",
      "· Выберите интересы (K-Beauty / здоровье / гольф / мода и др.)",
      "· Раннее приглашение и скидка при открытии беты"
    ]
  },
  th: {
    badge: "GnG Tour K-Lifestyle Mall",
    title1: "ต่อยอดประสบการณ์ดีๆ ในเกาหลี",
    title2: "ได้แม้กลับถึงบ้านแล้ว",
    desc:
      "ร้านค้าที่คัดสรรสินค้า ให้ผู้เรียนและนักท่องเที่ยวการแพทย์ซื้อซ้ำสิ่งที่ชอบในเกาหลี และค้นพบ K-Lifestyle ใหม่ๆ",
    note: "ตอนนี้อยู่ช่วงเตรียมเบต้า เปิดให้ลงทะเบียนแจ้งเตือนและแชร์ลิสต์แนะนำก่อน",
    categoryTitle: "หมวดหมู่หลัก",
    categoryDesc:
      "เวอร์ชันจริงสามารถเพิ่มสินค้าที่แนะนำ รีวิว และระบบแนะนำส่วนบุคคลจากข้อมูลการอบรมและการรักษา",
    categories: [
      { name: "K-Beauty", desc: "สกินแคร์ เมคอัพ คลีนซิ่ง จากแบรนด์เกาหลี" },
      { name: "อาหารเสริม", desc: "วิตามิน โสมแดง ผลิตภัณฑ์ดูแลข้อและภูมิคุ้มกัน" },
      { name: "อุปกรณ์กอล์ฟ", desc: "ไม้กอล์ฟ ลูกกอล์ฟ อุปกรณ์ และเสื้อผ้ากอล์ฟ" },
      { name: "การแพทย์ & สุขภาพ", desc: "เวชภัณฑ์ อุปกรณ์กายภาพและแก้ท่าทาง" },
      { name: "แฟชั่น & ไลฟ์สไตล์", desc: "เสื้อผ้า กระเป๋า สนีกเกอร์ ของแต่งบ้าน" }
    ],
    roleTitle: "บทบาทของร้าน GnG",
    roleDesc:
      "ไม่ใช่แค่ช่องขาย แต่เป็นกลยุทธ์ล็อกอินให้ลูกค้าอยู่ในแบรนด์ GnG",
    roleBullets: [
      "คัดสินค้าที่นักเรียน ผู้ป่วย และผู้ติดตามใช้ร่วมกัน",
      "สร้างคอมมูนิตี้และคอนเทนต์ต่อเนื่องหลังจากเยือนเกาหลี",
      "แนะนำเฉพาะบุคคลจากประวัติซื้อ ปรึกษา และการอบรม"
    ],
    alertTitle: "ขั้นตอนแจ้งเตือนวันเปิด (ตัวอย่าง)",
    alertSteps: [
      "· กรอกอีเมลหรือไอดีเมสเซนเจอร์",
      "· เลือกความสนใจ (K-Beauty / สุขภาพ / กอล์ฟ / แฟชั่น ฯลฯ)",
      "· รับเชิญทดลองและโค้ดส่วนลดเมื่อเปิดเบต้า"
    ]
  }
};

export default function MallPage() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;

  return (
    <div className="bg-slate-50">
      <section className="bg-white border-b border-slate-200">
        <div className="container-main py-14 sm:py-18 lg:py-20 space-y-4">
          <p className="text-xs font-semibold text-brand">{copy.badge}</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            {copy.title1}
            <br />
            {copy.title2}
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">{copy.desc}</p>
          <p className="text-xs text-slate-500">{copy.note}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-main space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">{copy.categoryTitle}</h2>
            <p className="mt-2 text-sm text-slate-600">{copy.categoryDesc}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-600">
            {copy.categories.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl bg-white p-4 border border-slate-100 shadow-soft/40"
              >
                <p className="font-semibold text-slate-900 mb-1">{c.name}</p>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-main grid gap-8 lg:grid-cols-[1.3fr,1fr] text-xs text-slate-600">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{copy.roleTitle}</h2>
            <p className="mb-3">{copy.roleDesc}</p>
            <ul className="list-disc list-inside space-y-1">
              {copy.roleBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-soft space-y-2">
            <p className="text-sm font-semibold">{copy.alertTitle}</p>
            <p>
              {copy.alertSteps.map((step) => (
                <span key={step}>
                  {step}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
