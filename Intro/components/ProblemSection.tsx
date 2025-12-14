"use client";

import { useLanguage } from "./LanguageProvider";

const translations = {
  ko: {
    title: "현재 고객이 겪는 3가지 문제",
    subtitle:
      "GnG Tour는 실제 고객 여정을 분석해, 연수·의료·쇼핑 전 단계에서 반복되는 문제를 해결하도록 설계되었습니다.",
    items: [
      {
        title: "해외 취업 및 전문 직업 경로 부재",
        desc: "러시아·중앙아시아·동남아 청년층은 전문직 기회가 부족하고, 6개월 연수 후 취업으로 이어지는 경로가 절실합니다."
      },
      {
        title: "의료 시스템 접근 어려움",
        desc: "어떤 병원을 선택해야 하는지, 치료 계획과 비용은 어떻게 비교해야 하는지, 언어와 신뢰 문제로 큰 장벽이 존재합니다."
      },
      {
        title: "한국 라이프스타일 소비 니즈 증가",
        desc: "한국 방문 후 만족도가 높지만, 본국으로 돌아간 뒤에도 계속해서 한국 제품을 구매할 수 있는 수단이 부족합니다."
      }
    ]
  },
  en: {
    title: "Three pain points we solve",
    subtitle:
      "We mapped the customer journey to fix recurring issues before, during, and after study, medical visits, and shopping.",
    items: [
      {
        title: "Few professional career paths abroad",
        desc: "Young people in Russia, Central Asia, and Southeast Asia need a 6-month training path that connects directly to jobs."
      },
      {
        title: "Hard to navigate healthcare",
        desc: "Choosing the right hospital, comparing treatment plans and costs, and trusting the process is difficult without support."
      },
      {
        title: "Rising demand for Korean lifestyle",
        desc: "Even after visiting Korea, customers struggle to repurchase the products and routines they loved back home."
      }
    ]
  },
  ru: {
    title: "3 проблемы клиентов",
    subtitle:
      "Мы изучили путь клиента и устранили повторяющиеся сложности до, во время и после обучения, лечения и покупок.",
    items: [
      {
        title: "Нет понятного карьерного пути за рубежом",
        desc: "Молодежи в России, Центральной Азии и ЮВА нужен 6-месячный курс, который реально ведет к работе."
      },
      {
        title: "Сложно разобраться в системе здравоохранения",
        desc: "Трудно выбрать клинику, сравнить план лечения и стоимость, доверять без языка и проверенной информации."
      },
      {
        title: "Растущий спрос на корейский лайфстайл",
        desc: "После поездки в Корею клиенты хотят покупать те же товары и сервисы у себя дома, но удобного канала нет."
      }
    ]
  },
  th: {
    title: "3 ปัญหาหลักที่เราแก้",
    subtitle:
      "เราศึกษาเส้นทางลูกค้าเพื่อลดปัญหาที่เกิดซ้ำ ก่อน ระหว่าง และหลังการเรียน ท่องเที่ยวการแพทย์ และการช้อปปิ้ง",
    items: [
      {
        title: "ขาดเส้นทางอาชีพมืออาชีพในต่างประเทศ",
        desc: "คนรุ่นใหม่ในรัสเซีย เอเชียกลาง และอาเซียนต้องการคอร์ส 6 เดือนที่เชื่อมต่อสู่การทำงานจริง"
      },
      {
        title: "ระบบสาธารณสุขเข้าใจยาก",
        desc: "การเลือกโรงพยาบาล การเปรียบเทียบแผนรักษาและค่าใช้จ่ายเป็นเรื่องยากหากไม่มีภาษาและข้อมูลที่เชื่อถือได้"
      },
      {
        title: "ความต้องการสินค้าสไตล์เกาหลีเพิ่มขึ้น",
        desc: "หลังเที่ยวเกาหลี ลูกค้าอยากซื้อของที่ชอบอีกครั้งเมื่อกลับบ้าน แต่ยังไม่มีช่องทางที่สะดวก"
      }
    ]
  }
};

export default function ProblemSection() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="container-main space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{copy.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {copy.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-soft/30"
            >
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
