"use client";

import { Translations } from "../../lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagePath } from "../../lib/paths";

type Props = { t: Translations["hero"] };

export default function Hero({ t }: Props) {
  return (
    <section className="pt-12 pb-16 border-b bg-white">
      <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold tracking-wide text-sky-600 mb-4 uppercase"
          >
            한국에서 안전하게 치료받으세요
          </motion.p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-sm text-slate-500 mb-8 font-medium">
            온라인 상담 → 진료 계획 → 비자·항공·숙소까지 원스톱 지원
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-8 py-3 rounded-full bg-sky-600 text-white text-base font-semibold hover:bg-sky-700 transition-colors shadow-lg shadow-sky-200">
              {t.ctaPrimary}
            </button>
            <button className="px-8 py-3 rounded-full border border-slate-200 text-base text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              {t.ctaSecondary}
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-sky-500">✓</span> {t.trust1}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">✓</span> {t.trust2}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-white rounded-3xl blur-2xl opacity-50" />
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <Image
              src={imagePath("/images/hero-bg.png")}
              alt="Medical Tourism in Korea"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
