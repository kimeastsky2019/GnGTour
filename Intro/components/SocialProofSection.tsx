"use client";

import { useLanguage } from "./LanguageProvider";

const translations = {
  ko: {
    title: "검증된 파트너 네트워크",
    subtitle:
      "대학·병원·전문기관과의 공식 협력을 통해 안전하고 신뢰할 수 있는 서비스만 제공합니다.",
    cards: [
      {
        label: "대학 연계 골프 연수",
        title: "중원대학교 골프학과 및 부설 평생교육원",
        desc: "골프 전문 교육기관과의 협력을 통해 커리큘럼과 연수 품질을 보장합니다."
      },
      {
        label: "한국 의료 네트워크",
        title: "대학병원 · 전문병원과의 의료 네트워크",
        desc: "성형, 피부, 치과, 정형외과, 산부인과, 종합검진 등 분야별 병원·전문의 정보를 검증해 제공합니다."
      },
      {
        label: "실제 운영 데이터",
        title: "상담 건수 · 후기 기반 품질 관리",
        desc: "누적 상담, 연수생 후기, 병원 후기를 기반으로 서비스 품질을 지속적으로 개선합니다."
      }
    ]
  },
  en: {
    title: "Verified partner network",
    subtitle:
      "We only deliver services backed by formal collaboration with universities, hospitals, and specialist organizations.",
    cards: [
      {
        label: "Golf training partners",
        title: "Jungwon University Golf Dept. & Lifelong Education Center",
        desc: "Curriculum and training quality are guaranteed through an official golf education partner."
      },
      {
        label: "Korea medical network",
        title: "University and specialist hospitals",
        desc: "Verified hospital and doctor data across plastic, dermatology, dental, orthopedics, OB-GYN, and health checkups."
      },
      {
        label: "Operational data",
        title: "Quality governed by consultations and reviews",
        desc: "We improve quality continuously using accumulated consultations and feedback from trainees and patients."
      }
    ]
  },
  ru: {
    title: "Проверенная сеть партнёров",
    subtitle:
      "Работаем только с официальными партнёрами — университетами, клиниками и профильными организациями.",
    cards: [
      {
        label: "Партнёры по гольф-обучению",
        title: "Университет Чонгвон, кафедра гольфа и центр доп. образования",
        desc: "Качество программы подтверждено сотрудничеством со специализированным образовательным центром."
      },
      {
        label: "Медицинская сеть Кореи",
        title: "Университетские и профильные клиники",
        desc: "Проверенные данные по больницам и врачам: пластика, дерма, стоматология, ортопедия, гинекология, чекапы."
      },
      {
        label: "Рабочие данные",
        title: "Контроль качества по заявкам и отзывам",
        desc: "Улучшаем сервис, опираясь на накопленные консультации и отзывы студентов и пациентов."
      }
    ]
  },
  th: {
    title: "เครือข่ายพาร์ตเนอร์ที่ผ่านการตรวจสอบ",
    subtitle:
      "เราทำงานกับมหาวิทยาลัย โรงพยาบาล และสถาบันเฉพาะทางที่มีความร่วมมืออย่างเป็นทางการเท่านั้น",
    cards: [
      {
        label: "พาร์ตเนอร์หลักสูตรกอล์ฟ",
        title: "ภาควิชากอล์ฟ ม.จองวอน และศูนย์การศึกษาต่อเนื่อง",
        desc: "รับประกันคุณภาพหลักสูตรและการฝึกผ่านสถาบันการศึกษากอล์ฟที่เป็นทางการ"
      },
      {
        label: "เครือข่ายการแพทย์เกาหลี",
        title: "โรงพยาบาลมหาวิทยาลัยและโรงพยาบาลเฉพาะทาง",
        desc: "ข้อมูลที่ตรวจสอบแล้วของโรงพยาบาลและแพทย์ด้านศัลยกรรม ผิว ทันตกรรม กระดูก สูตินรีเวช และตรวจสุขภาพ"
      },
      {
        label: "ข้อมูลการดำเนินงานจริง",
        title: "ควบคุมคุณภาพจากจำนวนคำปรึกษาและรีวิว",
        desc: "พัฒนาคุณภาพบริการอย่างต่อเนื่องด้วยคำปรึกษาและรีวิวจากนักเรียนและผู้ป่วย"
      }
    ]
  }
};

export default function SocialProofSection() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;

  return (
    <section className="py-14 bg-white">
      <div className="container-main space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{copy.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-soft/40"
            >
              <p className="text-xs font-semibold text-slate-500 mb-1">
                {card.label}
              </p>
              <p className="text-sm font-semibold mb-2">{card.title}</p>
              <p className="text-xs text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
