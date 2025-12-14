"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const translations = {
    ko: {
        title: "지금 바로 꿈꾸던 여행을 시작하세요.",
        subtitle: "GnG Tour와 함께하는 특별한 여정",
        cta: "상담 요청하기",
    },
    en: {
        title: "Start your dream journey today.",
        subtitle: "A special journey with GnG Tour",
        cta: "Contact Us",
    },
    ru: {
        title: "Начните путешествие своей мечты сегодня.",
        subtitle: "Особенное путешествие с GnG Tour",
        cta: "Связаться с нами",
    },
    th: {
        title: "เริ่มการเดินทางในฝันของคุณวันนี้",
        subtitle: "การเดินทางพิเศษกับ GnG Tour",
        cta: "ติดต่อเรา",
    },
};

export default function PromoBanner() {
    const { lang } = useLanguage();
    const copy = translations[lang] ?? translations.en;
    const withLang = (base: string) =>
        `${base}${base.includes("?") ? "&" : "?"}lang=${lang}`;

    return (
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden my-16">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: "url('/images/3_Promo_Banner_1920x400.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 space-y-6">
                <div className="space-y-2">
                    <p className="text-lg md:text-xl font-medium opacity-90">{copy.subtitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
                        {copy.title}
                    </h2>
                </div>

                <Link
                    href={withLang("https://gngtour.com/med")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-white text-brand-dark px-8 py-3 text-lg font-bold shadow-lg hover:bg-slate-100 transition transform hover:-translate-y-1"
                    prefetch={false}
                >
                    {copy.cta}
                </Link>
            </div>
        </section>
    );
}
