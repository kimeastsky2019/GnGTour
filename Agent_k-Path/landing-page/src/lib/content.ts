export type Language = 'en' | 'ru' | 'th';

export const content = {
    en: {
        hero: {
            headline: "Study and Grow Your Career in Korea — Let AI design a personalized program & visa plan for you",
            subHeadline: "Our AI platform matches you with the most suitable training programs in Korea — Golf, Intensive Crash Courses, Software Development, and K-Beauty — together with the right visa pathway for your goals, budget, and background. Everything in one place. Simple, fast, and trustworthy.",
            cta: "Get My Personalized AI Recommendation",
            subText: "Answer a few questions — get your Korea study & visa plan within minutes."
        },
        problem: {
            title: "Why is studying or training in Korea so confusing for many people?",
            intro: "Many international students dream of studying, training, or living in Korea — but face the same common challenges.",
            cards: [
                {
                    title: "Scattered and inconsistent information",
                    desc: "Websites show different requirements and contradicting instructions. Hard to know what’s real and what’s outdated."
                },
                {
                    title: "Visa complexity",
                    desc: "D-2, D-4, C-3… each has different rules, documents, and limitations. A small mistake can lead to rejection."
                },
                {
                    title: "Too many program choices",
                    desc: "Golf, crash courses, IT, K-Beauty — which one truly fits your goals?"
                },
                {
                    title: "Concerns about safety and reliability",
                    desc: "Families want to be sure about housing, support, and the legitimacy of programs."
                }
            ],
            closing: "Our platform solves these issues with transparency and smart automation."
        },
        solution: {
            title: "Our AI builds the best path for your Korea journey",
            intro: "No more endless research. Our system analyzes your profile and shows real, practical options.",
            steps: [
                {
                    step: "Step 1",
                    title: "Fill in a short profile",
                    desc: "Age, budget, preferred field (Golf / Crash Course / IT / K-Beauty), goals."
                },
                {
                    step: "Step 2",
                    title: "AI Analysis",
                    desc: "Matches your profile with training programs and visa requirements."
                },
                {
                    step: "Step 3",
                    title: "Personalized Study + Visa Plan",
                    desc: "Program + duration + city + visa route tailored to you."
                },
                {
                    step: "Step 4",
                    title: "Talk with a real consultant",
                    desc: "Clarify costs, requirements, and next steps with human experts."
                }
            ]
        },
        bodyLogic: {
            title: "AI Body Logic that learns your moves and goals",
            intro: "We fuse motion-inspired logic with time-series data so recommendations feel natural and precise.",
            items: [
                {
                    title: "Learning your rules and context",
                    desc: "Hybrid ML + DL models capture budgets, goals, and constraints to craft ranked recommendations."
                },
                {
                    title: "Movement metaphors",
                    desc: "We borrow from dance and sports motion analysis to keep paths balanced, fluid, and goal-directed."
                },
                {
                    title: "Automated data pipeline",
                    desc: "Time-series collection → cleaning → ML/DL evaluation → quality agents keep outputs fresh and safe."
                }
            ]
        },
        programs: {
            title: "Choose your path — or let AI choose it for you",
            items: [
                {
                    title: "Golf Training Program",
                    tag: "Sports",
                    desc: "Perfect for those who love sports, outdoor work, and a growing industry in Korea."
                },
                {
                    title: "Intensive Crash Courses",
                    tag: "Short-term",
                    desc: "Short, hands-on 2–8 week programs ideal for gaining fast experience or trying life in Korea."
                },
                {
                    title: "Software Development Tracks",
                    tag: "Tech",
                    desc: "Coding skills, real projects, and portfolio building — great for future tech careers."
                },
                {
                    title: "K-Beauty Programs",
                    tag: "Beauty",
                    desc: "Professional techniques, Korean beauty trends, and business opportunities."
                }
            ],
            closing: "AI recommends the best match based on your goals, timeline, and financial plan."
        },
        visa: {
            title: "Visa choices made simple — with AI and expert guidance",
            intro: "See realistic visa routes side by side with your training plan.",
            items: [
                {
                    code: "D-4",
                    title: "Language & specialized courses",
                    desc: "Ideal for language learning or mid-length specialty tracks."
                },
                {
                    code: "D-2",
                    title: "Long-term academic programs",
                    desc: "For extended academic study or deeper specialization."
                },
                {
                    code: "C-3",
                    title: "Short-term study + travel",
                    desc: "Great for short intensives, trial stays, and exploration."
                }
            ],
            closing: "AI will highlight which visa routes are realistic for you, while our team ensures documents are accurate and safe."
        },
        socialProof: {
            title: "Why international students trust us",
            items: [
                "Verified programs from trusted Korean partners",
                "Clear, upfront information and transparent costs",
                "English-speaking support from consultation to arrival",
                "Strong focus on safety and smooth adaptation"
            ]
        },
        faq: {
            title: "Frequently asked questions",
            items: [
                {
                    question: "Do I need strong English or Korean to join?",
                    answer: "No. We ask about your current level and match programs that fit. Several tracks welcome beginners."
                },
                {
                    question: "How much will it cost?",
                    answer: "It depends on duration, city, and program type. AI gives a budget range first, then our team shares a clear cost breakdown."
                },
                {
                    question: "Is it safe to travel alone?",
                    answer: "Programs are vetted with Korean partners. Housing and on-the-ground support are arranged with clear contacts."
                },
                {
                    question: "Can I talk to a consultant in my language?",
                    answer: "Yes. You can schedule a call with a consultant who speaks your language to review visa and program details."
                }
            ]
        },
        ctsForm: {
            badge: "CTS Form",
            title: "CTS Lead Capture Form",
            subTitle: "Ready to find out if this program is right for you? Submit a request, and our Russian-speaking consultant will contact you to discuss your visa options and select a program that suits your language level and budget.",
            fields: [
                { name: "name", label: "Name", placeholder: "e.g., John Doe" },
                { name: "contact", label: "Contact", placeholder: "email or phone" },
                { name: "country", label: "Country", placeholder: "e.g., Korea, Thailand" },
                { name: "language", label: "Preferred language", placeholder: "EN / RU / TH / KO" },
                { name: "program", label: "Interested program", placeholder: "Golf / Crash / IT / K-Beauty" },
                { name: "budgetStart", label: "Budget / start timeline", placeholder: "e.g., $3k~ / in 3 months" },
                { name: "visa", label: "Visa status", placeholder: "Not applied / In progress / Issued" },
                { name: "notes", label: "Notes / requirements", placeholder: "Special requests" },
                { name: "owner", label: "Owner", placeholder: "Consultant name" },
                { name: "createdAt", label: "Created at", placeholder: "YYYY-MM-DD" }
            ],
            submit: "Save form data",
            submitSuccess: "Submitted! Saved to the sheet.",
            submitError: "Submit failed. Please try again."
        },
        cta: {
            title: "Ready to start your Korea journey?",
            subText: "Ready to find out if this program is right for you? Submit a request, and our Russian-speaking consultant will contact you to discuss your visa options and select a program that suits your language level and budget.",
            badge: "AI + Human Guidance",
            button: "Get My Free Korea Plan"
        }
    },
    ru: {
        hero: {
            headline: "Учись и развивай карьеру в Корее — позволь AI подобрать программу и визу лично для тебя",
            subHeadline: "Платформа, которая автоматически подбирает оптимальную программу обучения в Корее — гольф, интенсивные курсы, разработка ПО, K-Beauty — и предлагает подходящий тип визы под твои цели, бюджет и уровень подготовки. Всё в одном месте. Быстро. Понятно. Надёжно.",
            cta: "Получить мой персональный план от AI",
            subText: "Ответь на несколько вопросов — и за 2–3 минуты система покажет твой путь в Корею."
        },
        problem: {
            title: "Почему большинству так сложно разобраться с обучением и визами в Корею?",
            intro: "Многие молодые люди из СНГ хотят учиться, развиваться или попробовать жить в Корее. Но сталкиваются с типичными проблемами…",
            cards: [
                {
                    title: "Разрозненная и противоречивая информация",
                    desc: "В разных источниках — разные требования, сроки, цены. Непонятно, кому верить и с чего начать."
                },
                {
                    title: "Сложные визовые правила",
                    desc: "Виза D-2, D-4, C-3 — у каждой свои условия, документы и подводные камни. Ошибки могут стоить отказа."
                },
                {
                    title: "Сложно выбрать подходящую программу",
                    desc: "Гольф, интенсивные курсы, IT, K-Beauty — вариантов много, но неясно, что подходит именно тебе и что даст результат."
                },
                {
                    title: "Опасения семьи и вопрос доверия",
                    desc: "Родители волнуются: безопасно ли это? Кто встречает? Где жить? Кто будет помогать?"
                }
            ],
            closing: "Мы создали сервис, который решает эти проблемы системно и прозрачно."
        },
        solution: {
            title: "AI подбирает для тебя оптимальный путь в Корею",
            intro: "Вместо долгих часов поисков — умная система, которая показывает реальные варианты обучения и виз на основе твоих данных.",
            steps: [
                {
                    step: "Шаг 1",
                    title: "Короткая анкета",
                    desc: "Возраст, бюджет, интересное направление (гольф / интенсив / IT / K-Beauty), цели."
                },
                {
                    step: "Шаг 2",
                    title: "AI-анализ",
                    desc: "Сравнивает твой профиль с учебными программами и визовыми требованиями."
                },
                {
                    step: "Шаг 3",
                    title: "Готовый персональный план",
                    desc: "Программа + продолжительность + город + визовый маршрут, который подходит тебе."
                },
                {
                    step: "Шаг 4",
                    title: "Консультация с русскоязычным экспертом",
                    desc: "Обсуждаем детали, стоимость, жильё и шаги оформления."
                }
            ]
        },
        bodyLogic: {
            title: "AI-логика, которая изучает твои цели и движение",
            intro: "Соединяем поведенческую метафору с тайм-сериями, чтобы рекомендации были естественными и точными.",
            items: [
                {
                    title: "Правила и контекст",
                    desc: "Гибрид ML + DL учитывает бюджет, цели и ограничения, формируя приоритезированные рекомендации."
                },
                {
                    title: "Метафора движений",
                    desc: "Используем подходы из танца и спорта, чтобы путь был сбалансированным, плавным и целенаправленным."
                },
                {
                    title: "Автоматический пайплайн данных",
                    desc: "Сбор тайм-серий → очистка → оценка ML/DL → агенты качества поддерживают актуальность и безопасность."
                }
            ]
        },
        programs: {
            title: "Выбери направление, которое соответствует твоим интересам — или доверь выбор AI",
            items: [
                {
                    title: "Гольф-программы",
                    tag: "Гольф",
                    desc: "Для тех, кто любит спорт, природу и хочет стабильную профессию в быстрорастущей отрасли."
                },
                {
                    title: "Интенсивные курсы (Crash Course)",
                    tag: "Интенсив",
                    desc: "Короткие, практические программы 2–8 недель. Отлично подходят, чтобы попробовать Корею."
                },
                {
                    title: "Программы по разработке ПО",
                    tag: "IT",
                    desc: "IT-навыки, реальные проекты, портфолио — отличный старт в технологическую карьеру."
                },
                {
                    title: "K-Beauty курсы",
                    tag: "Beauty",
                    desc: "Макияж, уход, тренды. Идеально для будущих мастеров или предпринимателей."
                }
            ],
            closing: "AI предложит лучший формат исходя из твоих целей, бюджета и уровня подготовки."
        },
        visa: {
            title: "Визы становятся понятными, когда AI помогает выбрать маршрут",
            intro: "Смотрим на визовые опции вместе с программой обучения.",
            items: [
                {
                    code: "D-4",
                    title: "Языковые и специализированные курсы",
                    desc: "Подходит для изучения корейского языка или профильных курсов средней длительности."
                },
                {
                    code: "D-2",
                    title: "Долгосрочное академическое обучение",
                    desc: "Для бакалавриата, магистратуры и других длительных программ."
                },
                {
                    code: "C-3",
                    title: "Краткосрочные программы",
                    desc: "Идеально для интенсивов, коротких курсов или учебного туризма."
                }
            ],
            closing: "AI покажет, какие визы возможны лично для тебя, а наши специалисты проверят документы и помогут избежать ошибок."
        },
        socialProof: {
            title: "Почему нас выбирают студенты из СНГ",
            items: [
                "Программы от проверенных корейских партнёров",
                "Прозрачные условия и чёткие инструкции",
                "Поддержка на русском языке",
                "Фокус на безопасности и адаптации по прибытии"
            ]
        },
        faq: {
            title: "Частые вопросы",
            items: [
                {
                    question: "Нужен ли высокий уровень языка?",
                    answer: "Нет. Мы уточним уровень языка и предложим программы для начинающих или продвинутых."
                },
                {
                    question: "Сколько это стоит?",
                    answer: "Стоимость зависит от города, длительности и типа курса. Сначала даём диапазон бюджета, затем — детализированную смету."
                },
                {
                    question: "Безопасно ли ехать одному?",
                    answer: "Программы проверены, предоставляется жильё и поддержка на месте с прозрачными контактами."
                },
                {
                    question: "Можно общаться с консультантом на русском?",
                    answer: "Да, русскоязычные консультанты помогут с выбором программы и визы."
                }
            ]
        },
        ctsForm: {
            badge: "CTS форма",
            title: "CTS форма для лидов",
            subTitle: "Готовы узнать, подойдёт ли вам программа? Оставьте заявку, и наш русскоязычный консультант свяжется с вами, расскажет о вариантах визы и подберёт программу под ваш уровень языка и бюджет.",
            fields: [
                { name: "name", label: "Имя", placeholder: "Напр.: Иван Петров" },
                { name: "contact", label: "Контакт", placeholder: "email или телефон" },
                { name: "country", label: "Гражданство", placeholder: "Напр.: Казахстан, Корея" },
                { name: "language", label: "Предпочитаемый язык", placeholder: "RU / EN / TH / KO" },
                { name: "program", label: "Интересующая программа", placeholder: "Golf / Crash / IT / K-Beauty" },
                { name: "budgetStart", label: "Бюджет / сроки старта", placeholder: "Напр.: $3k~ / 1–3 мес" },
                { name: "visa", label: "Статус визы", placeholder: "Не подавал / В процессе / Получена" },
                { name: "notes", label: "Требования", placeholder: "Особые запросы" },
                { name: "owner", label: "Ответственный", placeholder: "Имя консультанта" },
                { name: "createdAt", label: "Дата создания", placeholder: "YYYY-MM-DD" }
            ],
            submit: "Сохранить",
            submitSuccess: "Отправлено! Сохранено в таблице.",
            submitError: "Ошибка отправки. Попробуйте позже."
        },
        cta: {
            title: "Готов начать свой путь в Корею?",
            subText: "Готовы узнать, подойдёт ли вам программа? Оставьте заявку, и наш русскоязычный консультант свяжется с вами, расскажет о вариантах визы и подберёт программу под ваш уровень языка и бюджет.",
            badge: "AI + экспертная поддержка",
            button: "Получить бесплатный персональный план"
        }
    },
    th: {
        hero: {
            headline: "เรียนและสร้างอาชีพในเกาหลี — ให้ AI ออกแบบโปรแกรมและแผนวีซ่าเพื่อคุณ",
            subHeadline: "แพลตฟอร์ม AI ของเราจะจับคู่คุณกับโปรแกรมการฝึกอบรมที่เหมาะสมที่สุดในเกาหลี — กอล์ฟ, คอร์สเร่งรัด, การพัฒนาซอฟต์แวร์ และ K-Beauty — พร้อมกับเส้นทางวีซ่าที่ถูกต้องตามเป้าหมาย งบประมาณ และพื้นฐานของคุณ ทุกอย่างในที่เดียว ง่าย รวดเร็ว และเชื่อถือได้",
            cta: "รับคำแนะนำ AI ส่วนตัวของฉัน",
            subText: "ตอบคำถามไม่กี่ข้อ — รับแผนการเรียนและวีซ่าเกาหลีของคุณภายในไม่กี่นาที"
        },
        problem: {
            title: "ทำไมการเรียนหรือฝึกอบรมในเกาหลีถึงสับสนสำหรับหลายคน?",
            intro: "นักเรียนต่างชาติจำนวนมากฝันที่จะเรียน ฝึกอบรม หรือใช้ชีวิตในเกาหลี — แต่ต้องเผชิญกับความท้าทายทั่วไปเหมือนกัน",
            cards: [
                {
                    title: "ข้อมูลกระจัดกระจายและไม่สอดคล้องกัน",
                    desc: "เว็บไซต์แสดงข้อกำหนดที่แตกต่างกันและคำแนะนำที่ขัดแย้งกัน ยากที่จะรู้ว่าอะไรจริงและอะไรล้าสมัย"
                },
                {
                    title: "ความซับซ้อนของวีซ่า",
                    desc: "D-2, D-4, C-3… แต่ละประเภทมีกฎ เอกสาร และข้อจำกัดที่แตกต่างกัน ความผิดพลาดเล็กน้อยอาจนำไปสู่การถูกปฏิเสธ"
                },
                {
                    title: "มีตัวเลือกโปรแกรมมากเกินไป",
                    desc: "กอล์ฟ, คอร์สเร่งรัด, ไอที, K-Beauty — อันไหนที่เหมาะกับเป้าหมายของคุณจริงๆ?"
                },
                {
                    title: "ความกังวลเรื่องความปลอดภัยและความน่าเชื่อถือ",
                    desc: "ครอบครัวต้องการความมั่นใจเรื่องที่พัก การสนับสนุน และความถูกต้องของโปรแกรม"
                }
            ],
            closing: "แพลตฟอร์มของเราแก้ปัญหาเหล่านี้ด้วยความโปร่งใสและระบบอัตโนมัติอัจฉริยะ"
        },
        solution: {
            title: "AI ของเราสร้างเส้นทางที่ดีที่สุดสำหรับการเดินทางสู่เกาหลีของคุณ",
            intro: "ไม่ต้องค้นหาข้อมูลไม่รู้จบอีกต่อไป ระบบของเราวิเคราะห์โปรไฟล์ของคุณและแสดงตัวเลือกที่ใช้งานได้จริง",
            steps: [
                {
                    step: "ขั้นตอนที่ 1",
                    title: "กรอกโปรไฟล์สั้นๆ",
                    desc: "อายุ, งบประมาณ, สาขาที่ต้องการ (กอล์ฟ / คอร์สเร่งรัด / ไอที / K-Beauty), เป้าหมาย"
                },
                {
                    step: "ขั้นตอนที่ 2",
                    title: "การวิเคราะห์ AI",
                    desc: "จับคู่โปรไฟล์ของคุณกับโปรแกรมการฝึกอบรมและข้อกำหนดวีซ่า"
                },
                {
                    step: "ขั้นตอนที่ 3",
                    title: "แผนการเรียน + วีซ่าส่วนบุคคล",
                    desc: "โปรแกรม + ระยะเวลา + เมือง + เส้นทางวีซ่าที่เหมาะกับคุณ"
                },
                {
                    step: "ขั้นตอนที่ 4",
                    title: "คุยกับที่ปรึกษาจริง",
                    desc: "ชี้แจงค่าใช้จ่าย ข้อกำหนด และขั้นตอนต่อไปกับผู้เชี่ยวชาญที่เป็นมนุษย์"
                }
            ]
        },
        bodyLogic: {
            title: "AI Body Logic ที่เรียนรู้เป้าหมายและจังหวะของคุณ",
            intro: "ผสานแนวคิดการเคลื่อนไหวกับข้อมูลแบบ time-series เพื่อให้คำแนะนำแม่นยำและลื่นไหล",
            items: [
                {
                    title: "เรียนรู้กติกาและบริบทของแต่ละคน",
                    desc: "โมเดลลูกผสม ML + DL พิจารณางบประมาณ เป้าหมาย และข้อจำกัด เพื่อจัดลำดับแผนที่เหมาะสมที่สุด"
                },
                {
                    title: "เมตาฟอร์การเคลื่อนไหว",
                    desc: "แรงบันดาลใจจากการเต้น/กีฬา เพื่อสร้างเส้นทางที่สมดุล ไหลลื่น และมุ่งสู่เป้าหมาย"
                },
                {
                    title: "สายงานข้อมูลอัตโนมัติ",
                    desc: "เก็บข้อมูลแบบ time-series → ทำความสะอาด → ประเมิน ML/DL → เอเจนต์ควบคุมคุณภาพให้ผลลัพธ์สดใหม่และปลอดภัย"
                }
            ]
        },
        programs: {
            title: "เลือกเส้นทางของคุณ — หรือให้ AI เลือกให้คุณ",
            items: [
                {
                    title: "โปรแกรมกอล์ฟ (Golf Program)",
                    tag: "Golf",
                    desc: "เหมาะสำหรับคนที่ชอบกีฬา ชอบบรรยากาศสนามกอล์ฟ และสนใจโอกาสทำงานในอุตสาหกรรมกอล์ฟที่เติบโตเร็วในเกาหลี",
                    bullets: [
                        "เรียนพื้นฐานกอล์ฟ มารยาทในสนาม และการดูแลลูกค้า",
                        "ฝึกในสนามจริง สัมผัสการทำงานแบบมืออาชีพ",
                        "ต่อยอดได้ทั้งประสบการณ์ใหม่และเส้นทางอาชีพ"
                    ]
                },
                {
                    title: "โปรแกรมคอร์สเร่งรัด (Crash Course)",
                    tag: "Intensive",
                    desc: "สำหรับคนที่มีเวลาจำกัด แต่อยากได้ประสบการณ์เข้มข้นในช่วงสั้น ๆ",
                    bullets: [
                        "คอร์ส 2–8 สัปดาห์ เนื้อหาแน่น ทำจริง เรียนจริง",
                        "เหมาะกับนักศึกษา คนทำงาน หรือคนที่อยากลองใช้ชีวิตในเกาหลี",
                        "จับคู่กับวีซ่าระยะสั้น เพื่อเรียน + ท่องเที่ยวได้พร้อมกัน"
                    ]
                },
                {
                    title: "โปรแกรมซอฟต์แวร์ดีเวลลอปเมนต์",
                    tag: "Tech",
                    desc: "สำหรับสายเทค สายไอที ที่อยากอัปสกิลในสภาพแวดล้อมแบบเกาหลี",
                    bullets: [
                        "เรียนพื้นฐานการเขียนโปรแกรมจนถึงเทคโนโลยีที่ตลาดต้องการ",
                        "มีโปรเจกต์จริงให้ทำ สร้างผลงานลงพอร์ตโฟลิโอ",
                        "ต่อยอดไปสู่การทำงานในสายซอฟต์แวร์ได้"
                    ]
                },
                {
                    title: "โปรแกรม K-Beauty",
                    tag: "Beauty",
                    desc: "สายความงาม สกินแคร์ เมกอัพ ต้องไม่พลาด",
                    bullets: [
                        "เรียนเทคนิค K-Beauty จากผู้เชี่ยวชาญในเกาหลี",
                        "เข้าใจเทคนิคและเทรนด์ความงามแบบเกาหลี",
                        "เหมาะสำหรับเปิดร้าน/ทำธุรกิจ หรือทำงานในวงการความงาม"
                    ]
                }
            ],
            closing: "ไม่ว่าคุณจะชอบแนวไหน AI จะช่วยเลือก “คอร์ส + ระยะเวลา + เมือง + วีซ่า” ให้เหมาะกับเป้าหมายและงบประมาณของคุณที่สุด"
        },
        visa: {
            title: "เรื่องวีซ่า ปล่อยให้เราและ AI ช่วยคิดให้",
            intro: "สำหรับหลายคน เรื่องวีซ่าเป็นส่วนที่ยุ่งยากที่สุด เราออกแบบระบบให้เห็นเส้นทางแบบง่ายและปลอดภัย",
            items: [
                {
                    code: "วีซ่าเรียนภาษา / คอร์สระยะกลาง",
                    title: "เหมาะกับการเรียนภาษาเกาหลีหรือคอร์สเฉพาะทาง 6 เดือน–1 ปี",
                    desc: "ใช้ได้กับสาย K-Beauty, ซอฟต์แวร์ หรือเตรียมต่อคอร์สอื่นในอนาคต"
                },
                {
                    code: "วีซ่านักเรียน / เรียนต่อระดับสูง",
                    title: "สำหรับคนที่วางแผนเรียนต่อหรือหลักสูตรยาว",
                    desc: "เชื่อมกับโปรแกรมเฉพาะทางได้ เพื่อสร้างเส้นทางระยะยาวในเกาหลี"
                },
                {
                    code: "วีซ่าระยะสั้น / ท่องเที่ยว + คอร์สเร่งรัด",
                    title: "สำหรับคนที่อยากมาลองใช้ชีวิตในเกาหลีช่วงสั้น ๆ",
                    desc: "เรียนคอร์สเร่งรัด กอล์ฟ หรือ K-Beauty พร้อมเที่ยวไปด้วย"
                }
            ],
            closing: "AI จะช่วยเสนอรูปแบบวีซ่าที่เป็นไปได้ แล้วทีมงานจะตรวจสอบอีกครั้ง เพื่อให้แน่ใจว่าถูกต้องและปลอดภัย"
        },
        socialProof: {
            title: "ทำไมหลายคนเลือกใช้บริการของเรา",
            items: [
                "รวบรวมโปรแกรมที่ผ่านการคัดเลือกจากพันธมิตรในเกาหลี",
                "เน้นความชัดเจนเรื่องค่าใช้จ่าย ขั้นตอน และเงื่อนไข",
                "ทีมงานเข้าใจทั้งมุมมองคนไทยและระบบของเกาหลี",
                "วางแผนโดยดูทั้งประสบการณ์และโอกาสในอนาคตของผู้เรียน"
            ]
        },
        faq: {
            title: "คำถามที่คนไทยมักถามบ่อย",
            items: [
                {
                    question: "ต้องเก่งภาษาอังกฤษหรือเกาหลีไหม ถึงจะไปได้?",
                    answer: "ไม่จำเป็นต้องเก่งตั้งแต่แรก ระบบจะถามระดับภาษาของคุณ แล้วเสนอโปรแกรมที่เหมาะกับระดับปัจจุบัน หลายคอร์สรับผู้ที่เริ่มจากศูนย์ได้"
                },
                {
                    question: "ค่าใช้จ่ายประมาณเท่าไหร่?",
                    answer: "ขึ้นอยู่กับระยะเวลา เมือง และประเภทคอร์สที่เลือก AI จะช่วยเสนอช่วงงบประมาณเบื้องต้น และทีมงานจะสรุปรายละเอียดให้ชัดเจนก่อนตัดสินใจ"
                },
                {
                    question: "ไปคนเดียว ปลอดภัยไหม?",
                    answer: "โปรแกรมทั้งหมดร่วมกับสถาบันและพาร์ทเนอร์ในเกาหลี มีที่พักและการดูแลพื้นฐาน พร้อมทีมงานช่วยประสานงานเมื่อมีปัญหา"
                },
                {
                    question: "สามารถคุยกับเจ้าหน้าที่เป็นภาษาไทยได้ไหม?",
                    answer: "ได้แน่นอน คุณสามารถนัดคุยกับทีมงานที่สื่อสารภาษาไทยได้ เพื่อปรึกษาเรื่องคอร์ส วีซ่า และความกังวลของครอบครัว"
                }
            ]
        },
        ctsForm: {
            badge: "ฟอร์ม CTS",
            title: "ฟอร์มเก็บข้อมูล CTS",
            subTitle: "พร้อมที่จะค้นหาว่าโปรแกรมนี้เหมาะกับคุณหรือไม่? ส่งคำขอ แล้วที่ปรึกษาที่พูดภาษารัสเซียของเราจะติดต่อคุณเพื่อหารือเกี่ยวกับตัวเลือกวีซ่าและเลือกโปรแกรมที่เหมาะสมกับระดับภาษาและงบประมาณของคุณ",
            fields: [
                { name: "name", label: "ชื่อ", placeholder: "เช่น Somchai" },
                { name: "contact", label: "ติดต่อ", placeholder: "อีเมลหรือเบอร์" },
                { name: "country", label: "สัญชาติ", placeholder: "เช่น Thailand, Korea" },
                { name: "language", label: "ภาษาที่สะดวก", placeholder: "TH / EN / RU / KO" },
                { name: "program", label: "โปรแกรมที่สนใจ", placeholder: "Golf / Crash / IT / K-Beauty" },
                { name: "budgetStart", label: "งบประมาณ / ช่วงเริ่ม", placeholder: "เช่น 100k THB / 1–3 เดือน" },
                { name: "visa", label: "สถานะวีซ่า", placeholder: "ยังไม่ยื่น / ดำเนินการ / ได้รับแล้ว" },
                { name: "notes", label: "ความต้องการเพิ่มเติม", placeholder: "หมายเหตุหรือข้อกังวล" },
                { name: "owner", label: "ผู้ดูแล", placeholder: "ชื่อที่ปรึกษา" },
                { name: "createdAt", label: "วันที่สร้าง", placeholder: "YYYY-MM-DD" }
            ],
            submit: "ส่งข้อมูล",
            submitSuccess: "ส่งสำเร็จ! บันทึกลงสเปรดชีตแล้ว",
            submitError: "ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้ง"
        },
        cta: {
            title: "พร้อมให้เราช่วยออกแบบ “เส้นทางสู่เกาหลี” ที่เหมาะกับคุณไหม?",
            subText: "พร้อมที่จะค้นหาว่าโปรแกรมนี้เหมาะกับคุณหรือไม่? ส่งคำขอ แล้วที่ปรึกษาที่พูดภาษารัสเซียของเราจะติดต่อคุณเพื่อหารือเกี่ยวกับตัวเลือกวีซ่าและเลือกโปรแกรมที่เหมาะสมกับระดับภาษาและงบประมาณของคุณ",
            badge: "AI + ทีมงานคนไทย",
            button: "เริ่มทำแบบสอบถามและรับคำแนะนำฟรี"
        }
    }
};
