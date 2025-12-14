"use client";

import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  ko: {
    hero: {
      badge: "한국 의료 관광 인바운드 서비스",
      title1: "한국의 전문 의료진과",
      title2: "안전하게 연결됩니다.",
      desc:
        "성형, 피부, 치과, 정형외과, 산부인과, 종합검진 등 분야별 한국 병원·전문의 정보를 기반으로, 다국어 코디네이터가 상담부터 예약, 통역, 비자, 숙소까지 함께합니다.",
      ctaPrimary: "한국 의료 상담 요청하기",
      ctaSecondary: "진료과 살펴보기",
      asideTitle: "왜 GnG Tour를 통해 한국 의료를 이용해야 할까요?",
      asideBullets: [
        "· 검증된 병원·의료진 데이터 기반 매칭",
        "· 러시아어/영어/태국어/한국어 등 다국어 지원",
        "· 공항 픽업, 숙소, 통역까지 원스톱 코디네이션",
        "· 치료 목적 C-3 비자 지원 및 서류 안내"
      ]
    },
    why: {
      title: "Why Korea? 한국 의료의 강점",
      desc: "한국은 높은 의료 기술과 장비, 합리적인 비용, 빠른 진료 시스템으로 세계적인 신뢰를 받고 있습니다.",
      points: ["첨단 의료 장비와 숙련된 전문의", "비교적 짧은 대기 시간과 빠른 진료", "체계적인 사후 관리 및 검진 프로그램"],
      cardTitle: "GnG Tour 의료 관광 서비스 특징",
      cardDesc:
        "단순히 병원 예약만 대행하는 것이 아니라, 상담–치료–회복–추적 관리까지 하나의 여정으로 설계합니다."
    },
    specialties: {
      title: "주요 진료과 및 서비스",
      desc: "Med Wiki에 기반한 실제 진료과·병원 정보를 정리해 제공합니다.",
      list: ["성형외과", "피부과", "치과", "정형외과", "산부인과", "종합검진"],
      bullet: "· 전문 의료진 프로필 및 시술·수술 옵션 안내"
    },
    matching: {
      title: "AI 기반 병원·전문의 매칭",
      desc:
        "상담 내용, 예산, 선호 지역, 언어, 과거 진료 이력 등을 바탕으로 최적의 병원·의료진을 추천하는 매칭 엔진을 운영합니다.",
      points: ["증상·목적·예산 기반 추천", "리뷰·성공 사례·전문 분야 반영", "진료 가능 언어, 대기 기간, 위치 등 고려"],
      coordTitle: "코디네이션 및 통역 지원",
      coordDesc:
        "사전 상담부터 예약, 통역, 동행, 회복기 일정 관리까지 전담 코디네이터가 함께합니다."
    },
    visa: {
      title: "의료 목적 비자 안내 (C-3 계열)",
      desc:
        "한국 의료 관광을 위한 단기 체류 비자는 C-3-1, C-3-2 등 목적에 따라 구분되며, GnG Tour는 필요한 서류 안내와 기본 상담을 제공합니다.",
      points: ["치료 목적 초청장, 진료 예약 확인서 등 준비 가이드 제공", "동반 보호자 입국 관련 기본 정보 안내"]
    },
    contact: {
      title: "실제 고객 후기 (예시 구조)",
      testimonials: [
        {
          title: "러시아 / 피부과 시술 고객",
          quote: "“병원 선택부터 통역, 숙소까지 한 번에 도와주셔서 치료에만 집중할 수 있었습니다.”"
        }
      ],
      formTitle: "의료 상담 요청 채널 (예시)",
      formDesc: "아래 채널 중 편한 방법으로 1차 상담을 요청할 수 있습니다.",
      channels: ["WhatsApp / Telegram 링크", "이메일 문의", "간단 신청 폼 (Google Form 연동)"]
    }
  },
  en: {
    hero: {
      badge: "Inbound medical travel to Korea",
      title1: "Safely connect with Korea’s specialists",
      title2: "with multilingual coordination.",
      desc:
        "From plastic surgery, dermatology, dental, orthopedics, OB-GYN to checkups, we match you to verified hospitals and handle consultation, booking, interpreting, visas, and housing.",
      ctaPrimary: "Request Korean medical help",
      ctaSecondary: "Browse specialties",
      asideTitle: "Why use GnG Tour for Korean care?",
      asideBullets: [
        "· Data-backed matching to verified hospitals and doctors",
        "· Multilingual support (RU / EN / TH / KR)",
        "· End-to-end: airport pickup, housing, interpreting",
        "· Guidance for medical-purpose C-3 visas"
      ]
    },
    why: {
      title: "Why Korea? Strengths of Korean healthcare",
      desc: "Korea is trusted globally for high medical skill, modern equipment, reasonable cost, and fast care.",
      points: ["Advanced equipment and experienced specialists", "Shorter wait times and faster treatments", "Structured aftercare and checkup programs"],
      cardTitle: "How GnG Tour serves medical travelers",
      cardDesc:
        "We design a single journey from consultation through treatment, recovery, and follow-up—not just a hospital booking."
    },
    specialties: {
      title: "Key specialties and services",
      desc: "Based on Med Wiki, we keep verified department and hospital data.",
      list: ["Plastic surgery", "Dermatology", "Dental", "Orthopedics", "OB-GYN", "Health checkups"],
      bullet: "· Profiles of specialists and available procedures"
    },
    matching: {
      title: "AI-driven hospital & doctor matching",
      desc:
        "Our engine recommends the best option using your case, budget, preferred area, language, and past medical history.",
      points: ["Recommendations by symptoms, goal, and budget", "Reviews, success cases, and specialties considered", "Languages, wait times, and location factored in"],
      coordTitle: "Coordination & interpreting",
      coordDesc:
        "A dedicated coordinator supports you from pre-consult to booking, interpreting, accompaniment, and recovery schedule management."
    },
    visa: {
      title: "Medical visa guidance (C-3)",
      desc:
        "Short-term medical visas like C-3-1 and C-3-2 depend on purpose. We provide document guidance and first-line advice.",
      points: ["Guides for invitation letters and appointment confirmations", "Basic info for accompanying guardians"]
    },
    contact: {
      title: "Customer stories (sample)",
      testimonials: [
        {
          title: "Russia / Dermatology client",
          quote: "“They handled clinic choice, interpreting, and housing, so I could focus only on treatment.”"
        }
      ],
      formTitle: "Contact channels (sample)",
      formDesc: "Pick a comfortable channel for your first consultation.",
      channels: ["WhatsApp / Telegram links", "Email inquiry", "Quick application form (Google Form)"]
    }
  },
  ru: {
    hero: {
      badge: "Медицинский туризм в Корею",
      title1: "Надежно связываем с врачами Кореи",
      title2: "с поддержкой на вашем языке.",
      desc:
        "Пластика, дерма, стоматология, ортопедия, гинекология, чекапы — подбираем проверенные клиники, организуем консультации, запись, перевод, визы и проживание.",
      ctaPrimary: "Запросить мед. консультацию",
      ctaSecondary: "Посмотреть направления",
      asideTitle: "Почему идти через GnG Tour?",
      asideBullets: [
        "· Подбор клиник и врачей на базе проверенных данных",
        "· Поддержка на RU / EN / TH / KR",
        "· Полный цикл: трансфер, проживание, перевод",
        "· Помощь с визой C-3 для лечения"
      ]
    },
    why: {
      title: "Почему Корея?",
      desc: "Корейская медицина славится высоким уровнем, современным оборудованием, разумной ценой и быстрым обслуживанием.",
      points: ["Современное оборудование и опытные специалисты", "Более короткие очереди и быстрый прием", "Системные программы пост-ухода и чекапов"],
      cardTitle: "Как GnG Tour работает с пациентами",
      cardDesc:
        "Мы строим целое путешествие: консультация → лечение → восстановление → постконтроль, а не просто бронирование клиники."
    },
    specialties: {
      title: "Основные направления",
      desc: "На базе Med Wiki поддерживаем проверенные данные по отделениям и клиникам.",
      list: ["Пластическая хирургия", "Дерматология", "Стоматология", "Ортопедия", "Гинекология", "Чекапы"],
      bullet: "· Профили врачей и доступные процедуры"
    },
    matching: {
      title: "AI-подбор клиники и врача",
      desc:
        "Рекомендуем лучший вариант с учетом диагноза, бюджета, района, языка и истории лечения.",
      points: ["Рекомендации по симптомам, цели и бюджету", "Отзывы, кейсы и специализация", "Учитываем язык приема, очередь и локацию"],
      coordTitle: "Координация и перевод",
      coordDesc:
        "Координатор ведет вас от консультации и записи до перевода, сопровождения и расписания восстановления."
    },
    visa: {
      title: "Визы для лечения (C-3)",
      desc:
        "Краткосрочные визы C-3-1, C-3-2 зависят от цели. Мы даем гайды по документам и первичные консультации.",
      points: ["Инструкции по приглашению и подтверждению записи", "Базовая инфо о въезде сопровождающих"]
    },
    contact: {
      title: "Отзывы клиентов (пример)",
      testimonials: [
        {
          title: "Россия / клиент дерматологии",
          quote: "«Помогли выбрать клинику, перевод и жилье — я думала только о лечении.»"
        }
      ],
      formTitle: "Каналы связи (пример)",
      formDesc: "Выберите удобный канал для первой консультации.",
      channels: ["WhatsApp / Telegram", "Email", "Короткая форма (Google Form)"]
    }
  },
  th: {
    hero: {
      badge: "ท่องเที่ยวการแพทย์เข้าเกาหลี",
      title1: "เชื่อมคุณกับแพทย์ผู้เชี่ยวชาญ",
      title2: "ในเกาหลีอย่างปลอดภัย หลายภาษา.",
      desc:
        "ศัลยกรรม ผิว ทันตกรรม กระดูก สูตินรีเวช และตรวจสุขภาพ เราจับคู่โรงพยาบาลที่ยืนยันข้อมูลแล้ว พร้อมดูแลการปรึกษา จองคิว ล่าม วีซ่า และที่พัก",
      ctaPrimary: "ขอความช่วยเหลือด้านการแพทย์",
      ctaSecondary: "ดูแผนกบริการ",
      asideTitle: "ทำไมต้องใช้ GnG Tour?",
      asideBullets: [
        "· จับคู่โรงพยาบาลและแพทย์ด้วยข้อมูลที่ตรวจสอบแล้ว",
        "· รองรับ RU / EN / TH / KR",
        "· ดูแลครบ: รับสนามบิน ที่พัก ล่าม",
        "· แนะนำเอกสารวีซ่า C-3 เพื่อการรักษา"
      ]
    },
    why: {
      title: "ทำไมต้องเกาหลี?",
      desc: "ระบบการแพทย์เกาหลีได้รับความเชื่อถือระดับโลก ด้วยเทคโนโลยีสูง ค่าใช้จ่ายเหมาะสม และบริการที่รวดเร็ว",
      points: ["อุปกรณ์ทันสมัยและแพทย์มากประสบการณ์", "เวลารอน้อย บริการรวดเร็ว", "โปรแกรมติดตามผลและตรวจสุขภาพเป็นระบบ"],
      cardTitle: "บริการของ GnG Tour",
      cardDesc:
        "เราออกแบบการเดินทางครบวงจร ตั้งแต่ปรึกษา รักษา ฟื้นฟู จนถึงการติดตาม ไม่ใช่แค่การจองโรงพยาบาล"
    },
    specialties: {
      title: "แผนกหลักและบริการ",
      desc: "อ้างอิง Med Wiki พร้อมข้อมูลแผนกและโรงพยาบาลที่ตรวจสอบแล้ว",
      list: ["ศัลยกรรมตกแต่ง", "ผิวหนัง", "ทันตกรรม", "ออร์โธปิดิกส์", "สูตินรีเวช", "ตรวจสุขภาพ"],
      bullet: "· โปรไฟล์แพทย์และตัวเลือกการรักษา"
    },
    matching: {
      title: "การจับคู่โรงพยาบาลด้วย AI",
      desc:
        "เอนจินแนะนำตัวเลือกที่เหมาะที่สุดจากเคส งบ พื้นที่ที่ชอบ ภาษา และประวัติการรักษา",
      points: ["แนะนำตามอาการ เป้าหมาย และงบประมาณ", "คำนึงถึงรีวิว เคสสำเร็จ และความเชี่ยวชาญ", "พิจารณาภาษา ระยะคิว และทำเล"],
      coordTitle: "การประสานงานและล่าม",
      coordDesc:
        "มีผู้ประสานงานดูแลตั้งแต่ปรึกษาก่อนเดินทาง จองคิว ล่าม เดินทางไปด้วย และวางแผนช่วงพักฟื้น"
    },
    visa: {
      title: "คำแนะนำวีซ่ารักษาพยาบาล (C-3)",
      desc:
        "วีซ่าระยะสั้น C-3-1, C-3-2 แตกต่างตามวัตถุประสงค์ เราให้คำแนะนำเอกสารและที่ปรึกษาขั้นต้น",
      points: ["แนวทางเตรียมจดหมายเชิญและใบยืนยันนัดหมาย", "ข้อมูลพื้นฐานสำหรับผู้ติดตาม"]
    },
    contact: {
      title: "รีวิวลูกค้า (ตัวอย่าง)",
      testimonials: [
        {
          title: "รัสเซีย / ลูกค้าทรีทเมนต์ผิว",
          quote: "“ช่วยเลือกโรงพยาบาล ล่าม ที่พักครบ ทำให้โฟกัสกับการรักษาได้เต็มที่”"
        }
      ],
      formTitle: "ช่องทางติดต่อ (ตัวอย่าง)",
      formDesc: "เลือกช่องทางที่สะดวกเพื่อเริ่มปรึกษา",
      channels: ["ลิงก์ WhatsApp / Telegram", "อีเมล", "ฟอร์มสั้น (Google Form)"]
    }
  }
};

export default function MedPage() {
  const { lang } = useLanguage();
  const copy = translations[lang] ?? translations.en;

  return (
    <div className="bg-slate-50">
      <section className="bg-white border-b border-slate-200">
        <div className="container-main py-14 sm:py-18 lg:py-20 grid gap-8 lg:grid-cols-[1.3fr,1fr] items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold text-brand">{copy.hero.badge}</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              {copy.hero.title1}
              <br />
              {copy.hero.title2}
            </h1>
            <p className="text-sm text-slate-600">{copy.hero.desc}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-dark transition"
              >
                {copy.hero.ctaPrimary}
              </a>
              <a
                href="#specialties"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-brand border border-brand/20 hover:border-brand/60 transition"
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-soft text-xs space-y-2">
            <p className="font-semibold text-slate-100">{copy.hero.asideTitle}</p>
            <p className="leading-relaxed">
              {copy.hero.asideBullets.map((b) => (
                <span key={b}>
                  {b}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-main grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{copy.why.title}</h2>
            <p className="text-sm text-slate-600 mb-3">{copy.why.desc}</p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              {copy.why.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100 text-xs text-slate-600">
            <p className="font-semibold text-slate-900 mb-2">{copy.why.cardTitle}</p>
            <p>{copy.why.cardDesc}</p>
          </div>
        </div>
      </section>

      <section id="specialties" className="py-12 bg-white">
        <div className="container-main space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">{copy.specialties.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{copy.specialties.desc}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-600">
            {copy.specialties.list.map((dept) => (
              <div
                key={dept}
                className="rounded-2xl bg-slate-50 p-4 border border-slate-100"
              >
                <p className="font-semibold mb-1">{dept}</p>
                <p>{copy.specialties.bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-main grid gap-6 lg:grid-cols-2 text-xs text-slate-600">
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">{copy.matching.title}</h3>
            <p className="mb-2">{copy.matching.desc}</p>
            <ul className="list-disc list-inside space-y-1">
              {copy.matching.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">{copy.matching.coordTitle}</h3>
            <p>{copy.matching.coordDesc}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-main space-y-4 text-xs text-slate-600">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            {copy.visa.title}
          </h2>
          <p>{copy.visa.desc}</p>
          <ul className="list-disc list-inside space-y-1">
            {copy.visa.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="container-main grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{copy.contact.title}</h2>
            <div className="space-y-4 text-xs text-slate-600">
              {copy.contact.testimonials.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl bg-white p-4 border border-slate-100 shadow-soft/40"
                >
                  <p className="font-semibold text-slate-900 mb-1">{t.title}</p>
                  <p>{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100 text-xs text-slate-600 space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {copy.contact.formTitle}
            </h3>
            <p>{copy.contact.formDesc}</p>
            <ul className="list-disc list-inside space-y-1">
              {copy.contact.channels.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
