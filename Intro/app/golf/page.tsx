"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  ko: {
    hero: {
      badge: "대학 연계 6개월 골프 캐디 전문 연수",
      title1: "6개월 전문 연수 후,",
      title2: "한국 골프장 취업까지 이어지는 Career Path",
      desc: "중원대학교 골프학과 및 부설 평생교육원과 연계된 정식 연수 프로그램으로, 이론·실습·현장 경험을 통해 바로 현장에 투입 가능한 골프 캐디를 양성합니다.",
      bullets: [
        "· 실무 중심 커리큘럼 (규칙, 에티켓, 코스 관리 등)",
        "· 고객 서비스, 리더십, 커뮤니케이션 역량 강화",
        "· 수료 후 한국 골프장 취업 연계",
        "· 비자 로드맵: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
      ],
      ctaPrimary: "연수 상담 신청하기",
      ctaSecondary: "커리큘럼 보기",
      asideTitle: "왜 한국 골프 캐디인가?",
      asideDesc:
        "한국 골프 산업은 빠르게 성장하고 있으며, 외국어 소통이 가능한 전문 캐디에 대한 수요가 꾸준히 증가하고 있습니다.",
      asideNote:
        "본 프로그램은 해외 청년의 안정적인 전문 직업 경로를 설계하고, 한국에서의 중장기 커리어와 비자를 동시에 고려해 설계되었습니다."
    },
    fit: {
      title: "이런 고민이 있다면, 골프 연수가 해답이 될 수 있습니다",
      bullets: [
        "본국에서 안정적인 전문 직업을 찾기 어려운 청년층",
        "한국에서 합법적으로 일하며 커리어를 쌓고 싶은 예비 이민자",
        "서비스 직종 경험은 있지만 전문 교육과 경력 증빙이 부족한 지원자"
      ],
      guaranteeTitle: "GnG Tour 골프 연수 프로그램은 다음을 보장합니다.",
      guarantee: [
        "· 공식 대학 연계 교육 이수증 및 수료증",
        "· 실제 골프장 현장 실습 기회",
        "· 한국 골프장 취업 연계 및 인터뷰 지원",
        "· 비자 전문가와 함께하는 장기 비자 로드맵 컨설팅"
      ]
    },
    curriculum: {
      title: "6개월 커리큘럼 개요",
      subtitle:
        "세부 커리큘럼은 Golf Wiki 및 제안서 내용을 기반으로 구성하며, 이론 · 실습 · 현장 경험을 균형 있게 배치합니다.",
      stages: [
        {
          title: "1–2개월차: 기초 이론",
          points: ["골프 규칙 및 용어", "코스 구조 및 운영 이해", "서비스 매너 · 기본 에티켓"]
        },
        {
          title: "3–4개월차: 실무 스킬",
          points: ["캐디 실습 및 상황별 대응", "고객 커뮤니케이션, 클레임 대응", "팀워크 및 리더십 트레이닝"]
        },
        {
          title: "5–6개월차: 현장 실습 & 취업 준비",
          points: ["제휴 골프장 현장 실습", "이력서/인터뷰 코칭", "비자 연장 및 취업 비자 컨설팅"]
        }
      ]
    },
    benefits: {
      title: "프로그램 주요 혜택",
      points: [
        "대학 명의 수료증 및 교육 이수 기록",
        "연수 기간 중 기숙사 제공(선택 사항)",
        "우수 수료생 대상 추천서 발급 및 취업 우선 매칭",
        "국비 지원 가능 여부 별도 안내 (국가/신청자 조건별 상이)"
      ],
      visaTitle: "비자 로드맵 안내",
      visaDesc: "한국에서의 중장기 커리어를 고려한 단계별 비자 전략을 함께 설계합니다.",
      visaPoints: ["D-2 (연수·교육) → D-10 (구직)", "E-7 (전문 직종 취업 비자)", "F-2-99 / F-2-R (장기 체류 및 정착 비자)"]
    },
    costs: {
      title: "연수 비용 안내 (예시 구조)",
      subtitle:
        "실제 금액은 연수 시기, 기숙사 선택 여부, 개별 옵션에 따라 달라질 수 있으며, 상담 시 상세 견적을 제공합니다.",
      tiers: [
        { name: "기본 연수 패키지", lines: ["· 6개월 이론·실습 교육", "· 수료증 포함"] },
        { name: "연수 + 기숙사 패키지", lines: ["· 기본 연수 패키지 포함", "· 기숙사 및 생활 가이드 제공"] },
        { name: "프리미엄 취업 연계 패키지", lines: ["· 연수 + 기숙사 패키지 포함", "· 집중 취업 코칭 및 비자 컨설팅"] }
      ]
    },
    faq: {
      title: "자주 묻는 질문(FAQ)",
      items: [
        {
          q: "Q. 한국어를 잘 하지 못해도 되나요?",
          a: "A. 연수 초반에는 다국어 코디네이션을 제공하며, 기본적인 한국어 및 서비스 표현도 교육 과정에 포함됩니다."
        },
        {
          q: "Q. 연수 후 취업이 100% 보장되나요?",
          a: "A. 취업 연계를 적극적으로 지원하지만, 최종 채용 여부는 골프장 심사 및 인터뷰 결과에 따라 결정됩니다."
        }
      ]
    },
    form: {
      title: "연수 상담 신청 폼 (예시)",
      desc: "실제 운영 시 Google Form 또는 Google Apps Script를 활용하여 아래와 같은 필드를 구현할 수 있습니다.",
      fields: [
        "이름 / 성별 / 나이",
        "국적 / 현재 거주 국가",
        "영어/한국어/기타 언어 수준",
        "골프 관련 경력 유무",
        "희망 입학 시기",
        "연락 가능한 이메일 / 메신저(WhatsApp, Telegram 등)"
      ],
      cta: "Google Form으로 상담 신청하기"
    }
  },
  en: {
    hero: {
      badge: "6-month pro caddie training with Korean universities",
      title1: "Train for 6 months,",
      title2: "land jobs at Korean golf clubs.",
      desc: "An official program with Jungwon University (Golf Dept.) designed to build caddies ready for the course through theory, practice, and field experience.",
      bullets: [
        "· Practice-first curriculum (rules, etiquette, course management)",
        "· Service, leadership, and communication skill building",
        "· Job linkage to Korean golf clubs after graduation",
        "· Visa roadmap: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
      ],
      ctaPrimary: "Book a training consult",
      ctaSecondary: "See curriculum",
      asideTitle: "Why a Korean caddie career?",
      asideDesc:
        "Korea’s golf industry is growing fast, and demand for multilingual professional caddies keeps rising.",
      asideNote:
        "This program designs a stable professional path for overseas youth, including long-term career and visa planning in Korea."
    },
    fit: {
      title: "If these sound familiar, golf training can be your answer",
      bullets: [
        "Hard to find a stable professional path at home",
        "Want to legally work and build a career in Korea",
        "Have service experience but lack formal training or proof"
      ],
      guaranteeTitle: "Our program guarantees:",
      guarantee: [
        "· University-backed certificate and transcript",
        "· Real field practice at partner golf courses",
        "· Job linkage and interview support with Korean clubs",
        "· Visa roadmap consulting with specialists"
      ]
    },
    curriculum: {
      title: "6-month curriculum overview",
      subtitle:
        "Built from the Golf Wiki and proposal materials to balance theory, practice, and on-course experience.",
      stages: [
        {
          title: "Months 1–2: Foundation",
          points: ["Golf rules and terms", "Course structure and operations", "Service manners and basic etiquette"]
        },
        {
          title: "Months 3–4: Practical skills",
          points: ["Caddie drills and situational responses", "Customer communication and claims handling", "Teamwork and leadership training"]
        },
        {
          title: "Months 5–6: Field practice & jobs",
          points: ["Field practice at partner courses", "Resume and interview coaching", "Visa extension and work-visa consulting"]
        }
      ]
    },
    benefits: {
      title: "Key program benefits",
      points: [
        "University-issued certificate and record of completion",
        "Dormitory during training (optional)",
        "Recommendation letters and priority matching for top graduates",
        "Guidance on possible national subsidies (varies by country/applicant)"
      ],
      visaTitle: "Visa roadmap",
      visaDesc: "We co-design a step-by-step visa strategy for a long-term career in Korea.",
      visaPoints: [
        "D-2 (training/education) → D-10 (job seeking)",
        "E-7 (specialized employment visa)",
        "F-2-99 / F-2-R (long-term residence)"
      ]
    },
    costs: {
      title: "Training fee guide (sample)",
      subtitle:
        "Actual fees vary by intake date, dormitory choice, and options. We share detailed quotes during consultation.",
      tiers: [
        { name: "Core training package", lines: ["· 6 months of theory and practice", "· Certificate included"] },
        { name: "Training + dorm package", lines: ["· Includes core training", "· Dormitory and living guidance"] },
        { name: "Premium career package", lines: ["· Training + dorm package", "· Intensive job coaching and visa consulting"] }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Q. Do I need to speak Korean well?",
          a: "A. We provide multilingual coordination early on, and basic Korean and service expressions are included in the training."
        },
        {
          q: "Q. Is a job guaranteed after training?",
          a: "A. We actively connect you to employers, but hiring depends on golf club evaluation and interviews."
        }
      ]
    },
    form: {
      title: "Training inquiry form (sample)",
      desc: "In production we can use Google Forms or Apps Script with fields like below.",
      fields: [
        "Name / gender / age",
        "Nationality / current country",
        "English/Korean/other language level",
        "Golf experience (yes/no)",
        "Preferred intake date",
        "Contact email / messenger (WhatsApp, Telegram, etc.)"
      ],
      cta: "Apply via Google Form"
    }
  },
  ru: {
    hero: {
      badge: "6-месячное обучение кэдди с корейскими университетами",
      title1: "6 месяцев обучения —",
      title2: "и выход на работу на полях Кореи.",
      desc: "Официальная программа с Университетом Чонгвон (кафедра гольфа): теория, практика и стажировка готовят кэдди, готовых к работе.",
      bullets: [
        "· Практический курс (правила, этикет, управление полем)",
        "· Сервис, лидерство, коммуникация",
        "· Связь с трудоустройством на гольф-поля в Корее",
        "· Визы: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
      ],
      ctaPrimary: "Записаться на консультацию",
      ctaSecondary: "Посмотреть программу",
      asideTitle: "Почему карьера кэдди в Корее?",
      asideDesc:
        "Гольф-индустрия в Корее быстро растет, спрос на многоязычных профи-кэдди постоянно увеличивается.",
      asideNote:
        "Программа создает устойчивый профессиональный путь для молодежи из-за рубежа, включая карьеру и визовую стратегию в Корее."
    },
    fit: {
      title: "Если это про вас, обучение гольфу — решение",
      bullets: [
        "Трудно найти стабильную профессию дома",
        "Хотите легально работать и строить карьеру в Корее",
        "Есть опыт сервиса, но нет формального обучения и подтверждений"
      ],
      guaranteeTitle: "Программа гарантирует:",
      guarantee: [
        "· Сертификат и записи об обучении от университета",
        "· Практика на партнерских гольф-полях",
        "· Связь с работодателями и поддержка интервью",
        "· Визовый роадмап с экспертами"
      ]
    },
    curriculum: {
      title: "Обзор 6-месячной программы",
      subtitle:
        "На основе Golf Wiki: баланс теории, практики и реальной стажировки.",
      stages: [
        {
          title: "1–2 месяцы: база",
          points: ["Правила и терминология гольфа", "Структура поля и операционные процессы", "Сервис и базовый этикет"]
        },
        {
          title: "3–4 месяцы: практика",
          points: ["Практика кэдди и реакции по ситуациям", "Коммуникация с клиентами, работа с претензиями", "Тренинг по командной работе и лидерству"]
        },
        {
          title: "5–6 месяцы: стажировка и работа",
          points: ["Практика на партнерских полях", "Резюме и подготовка к интервью", "Консультации по продлению визы и рабочей визе"]
        }
      ]
    },
    benefits: {
      title: "Основные преимущества",
      points: [
        "Сертификат и записи об обучении от университета",
        "Общежитие на период обучения (по желанию)",
        "Рекомендации и приоритетное трудоустройство для лучших выпускников",
        "Информация о господдержке (зависит от страны/кандидата)"
      ],
      visaTitle: "Визовый роадмап",
      visaDesc: "Разрабатываем пошаговую визовую стратегию под долгосрочную карьеру в Корее.",
      visaPoints: ["D-2 (обучение) → D-10 (поиск работы)", "E-7 (рабочая виза для специалистов)", "F-2-99 / F-2-R (долгосрочное пребывание)"]
    },
    costs: {
      title: "Стоимость обучения (пример)",
      subtitle:
        "Суммы зависят от набора, проживания и опций. Подробная смета дается на консультации.",
      tiers: [
        { name: "Базовый пакет", lines: ["· 6 месяцев теории и практики", "· Сертификат включен"] },
        { name: "Пакет с проживанием", lines: ["· Включает базовый пакет", "· Общежитие и поддержка быта"] },
        { name: "Премиум карьерный пакет", lines: ["· Пакет с проживанием", "· Интенсивный коучинг и визовые консультации"] }
      ]
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Q. Нужно ли хорошо говорить по-корейски?",
          a: "A. В начале мы даем мультиязычную поддержку, базовый корейский и сервисные фразы включены в курс."
        },
        {
          q: "Q. Гарантировано ли трудоустройство после курса?",
          a: "A. Мы активно помогаем, но финальное решение за гольф-клубом после оценки и интервью."
        }
      ]
    },
    form: {
      title: "Форма заявки (пример)",
      desc: "В боевой версии используем Google Forms или Apps Script с полями ниже.",
      fields: [
        "Имя / пол / возраст",
        "Гражданство / текущая страна",
        "Уровень английского/корейского/др. языков",
        "Опыт в гольфе (да/нет)",
        "Желаемая дата начала",
        "Контактный email / мессенджер (WhatsApp, Telegram и др.)"
      ],
      cta: "Оставить заявку через Google Form"
    }
  },
  th: {
    hero: {
      badge: "หลักสูตรแคดดี้ 6 เดือนร่วมกับมหาวิทยาลัยเกาหลี",
      title1: "อบรม 6 เดือน",
      title2: "พร้อมต่อยอดทำงานสนามกอล์ฟในเกาหลี",
      desc: "โปรแกรมทางการร่วมกับมหาวิทยาลัยจองวอน (ภาควิชากอล์ฟ) สร้างแคดดี้ที่ทำงานได้จริงผ่านทฤษฎี การปฏิบัติ และประสบการณ์ภาคสนาม",
      bullets: [
        "· หลักสูตรเน้นปฏิบัติ (กฎ มารยาท การจัดการสนาม)",
        "· พัฒนาทักษะบริการ ภาวะผู้นำ การสื่อสาร",
        "· เชื่อมต่อการทำงานกับสนามกอล์ฟในเกาหลีหลังจบ",
        "· แผนวีซ่า: D-2 → D-10 → E-7 → F-2-99 / F-2-R"
      ],
      ctaPrimary: "ขอคำปรึกษาหลักสูตร",
      ctaSecondary: "ดูหลักสูตร",
      asideTitle: "ทำไมต้องเป็นแคดดี้ในเกาหลี?",
      asideDesc:
        "อุตสาหกรรมกอล์ฟเกาหลีเติบโตเร็ว ความต้องการแคดดี้มืออาชีพที่สื่อสารได้หลายภาษามีเพิ่มขึ้นต่อเนื่อง",
      asideNote:
        "โปรแกรมนี้ออกแบบเส้นทางอาชีพที่มั่นคงให้คนรุ่นใหม่ต่างชาติ พร้อมแผนงานและวีซ่าระยะยาวในเกาหลี"
    },
    fit: {
      title: "ถ้ากังวลเรื่องเหล่านี้ คอร์สกอล์ฟอาจเป็นคำตอบ",
      bullets: [
        "หางานอาชีพมั่นคงในประเทศตัวเองยาก",
        "อยากทำงานอย่างถูกกฎหมายและสร้างอาชีพในเกาหลี",
        "มีประสบการณ์งานบริการแต่ขาดการอบรมและหลักฐานอย่างเป็นทางการ"
      ],
      guaranteeTitle: "โปรแกรมรับรองว่า:",
      guarantee: [
        "· ใบรับรองและประวัติการอบรมจากมหาวิทยาลัย",
        "· โอกาสฝึกภาคสนามที่สนามกอล์ฟพาร์ตเนอร์",
        "· เชื่อมต่อการจ้างงานและช่วยสัมภาษณ์",
        "· ที่ปรึกษาแผนวีซ่าระยะยาว"
      ]
    },
    curriculum: {
      title: "สรุปหลักสูตร 6 เดือน",
      subtitle:
        "อ้างอิง Golf Wiki เพื่อบาลานซ์ทฤษฎี การปฏิบัติ และประสบการณ์จริง",
      stages: [
        {
          title: "เดือน 1–2: พื้นฐาน",
          points: ["กฎและคำศัพท์กอล์ฟ", "โครงสร้างและการดำเนินงานสนาม", "มารยาทบริการพื้นฐาน"]
        },
        {
          title: "เดือน 3–4: ทักษะปฏิบัติ",
          points: ["ฝึกแคดดี้และรับมือสถานการณ์ต่างๆ", "สื่อสารกับลูกค้า รับมือเคลม", "ฝึกทีมเวิร์กและภาวะผู้นำ"]
        },
        {
          title: "เดือน 5–6: ภาคสนามและเตรียมงาน",
          points: ["ฝึกภาคสนามที่สนามพาร์ตเนอร์", "โค้ชเรซูเม่และสัมภาษณ์", "คำปรึกษาการต่อวีซ่าและวีซ่าทำงาน"]
        }
      ]
    },
    benefits: {
      title: "สิทธิประโยชน์หลัก",
      points: [
        "ใบรับรองและบันทึกการอบรมโดยมหาวิทยาลัย",
        "หอพักระหว่างเรียน (เลือกได้)",
        "จดหมายรับรองและการแมตช์งานให้ผู้จบที่โดดเด่น",
        "แจ้งข้อมูลเงินสนับสนุนภาครัฐ (ขึ้นกับประเทศ/ผู้สมัคร)"
      ],
      visaTitle: "แผนวีซ่า",
      visaDesc: "ออกแบบกลยุทธ์วีซ่าทีละขั้นเพื่ออาชีพระยะยาวในเกาหลี",
      visaPoints: [
        "D-2 (อบรม/ศึกษา) → D-10 (หางาน)",
        "E-7 (วีซ่าทำงานสายอาชีพเฉพาะ)",
        "F-2-99 / F-2-R (พำนักระยะยาว)"
      ]
    },
    costs: {
      title: "โครงสร้างค่าใช้จ่าย (ตัวอย่าง)",
      subtitle:
        "ค่าจริงขึ้นกับรอบเปิด หลักสูตรที่เลือก และตัวเลือกอื่นๆ แจ้งรายละเอียดระหว่างปรึกษา",
      tiers: [
        { name: "แพ็กเกจพื้นฐาน", lines: ["· เรียนทฤษฎีและปฏิบัติ 6 เดือน", "· รวมใบรับรอง"] },
        { name: "แพ็กเกจพร้อมหอพัก", lines: ["· รวมแพ็กเกจพื้นฐาน", "· มีหอพักและคำแนะนำการใช้ชีวิต"] },
        { name: "แพ็กเกจพรีเมียมสายงาน", lines: ["· รวมแพ็กเกจพร้อมหอพัก", "· โค้ชงานเข้มข้นและคำปรึกษาวีซ่า"] }
      ]
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      items: [
        {
          q: "Q. ต้องพูดเกาหลีเก่งไหม?",
          a: "A. ช่วงแรกมีการประสานหลายภาษา และมีบทเรียนเกาหลีพื้นฐานและคำศัพท์บริการในหลักสูตร"
        },
        {
          q: "Q. การได้งานหลังจบคอร์สการันตีหรือไม่?",
          a: "A. เราช่วยเชื่อมต่ออย่างเต็มที่ แต่การจ้างงานขึ้นกับการประเมินและสัมภาษณ์ของสนามกอล์ฟ"
        }
      ]
    },
    form: {
      title: "ฟอร์มขอคำปรึกษา (ตัวอย่าง)",
      desc: "เวอร์ชันจริงสามารถใช้ Google Form หรือ Apps Script พร้อมฟิลด์ต่อไปนี้",
      fields: [
        "ชื่อ / เพศ / อายุ",
        "สัญชาติ / ประเทศที่พำนัก",
        "ระดับภาษาอังกฤษ/เกาหลี/อื่นๆ",
        "ประสบการณ์กอล์ฟ (มี/ไม่มี)",
        "รอบเปิดที่ต้องการ",
        "อีเมล / เมสเซนเจอร์ (WhatsApp, Telegram ฯลฯ)"
      ],
      cta: "ส่งแบบฟอร์ม Google"
    }
  }
};

export default function GolfPage() {
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
            <ul className="text-xs text-slate-600 space-y-1">
              {copy.hero.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="#consultation"
                className="rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-dark transition"
              >
                {copy.hero.ctaPrimary}
              </a>
              <a
                href="#program"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-brand border border-brand/20 hover:border-brand/60 transition"
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-soft">
            <p className="text-xs font-semibold text-slate-300 mb-2">
              {copy.hero.asideTitle}
            </p>
            <p className="text-sm mb-2">{copy.hero.asideDesc}</p>
            <p className="text-xs text-slate-300">{copy.hero.asideNote}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-main grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {copy.fit.title}
            </h2>
            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
              {copy.fit.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-900">{copy.fit.guaranteeTitle}</p>
            {copy.fit.guarantee.map((g) => (
              <p key={g}>{g}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-12 bg-white">
        <div className="container-main space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">{copy.curriculum.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{copy.curriculum.subtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-600">
            {copy.curriculum.stages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-2xl bg-slate-50 p-4 border border-slate-100"
              >
                <p className="font-semibold mb-1">{stage.title}</p>
                <ul className="list-disc list-inside space-y-1">
                  {stage.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-main grid gap-6 lg:grid-cols-2 text-xs text-slate-600">
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              {copy.benefits.title}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {copy.benefits.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              {copy.benefits.visaTitle}
            </h3>
            <p className="mb-2">{copy.benefits.visaDesc}</p>
            <ul className="list-disc list-inside space-y-1">
              {copy.benefits.visaPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-main space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">{copy.costs.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{copy.costs.subtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-600">
            {copy.costs.tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl bg-slate-50 p-4 border border-slate-100"
              >
                <p className="font-semibold mb-1">{tier.name}</p>
                {tier.lines.map((line) => (
                  <p key={line} className={line === tier.lines[0] ? "mb-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-12">
        <div className="container-main grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {copy.faq.title}
            </h2>
            <div className="space-y-4 text-xs text-slate-600">
              {copy.faq.items.map((item) => (
                <div key={item.q}>
                  <p className="font-semibold text-slate-900">{item.q}</p>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-100 text-xs text-slate-600 space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {copy.form.title}
            </h3>
            <p>{copy.form.desc}</p>
            <ul className="list-disc list-inside space-y-1">
              {copy.form.fields.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              href="#"
              className="inline-flex justify-center rounded-2xl bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark transition"
            >
              {copy.form.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
