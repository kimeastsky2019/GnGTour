"use client";

import { Translations } from "../../lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagePath } from "../../lib/paths";

type Props = { t: Translations["aiService"] };

export default function AIService({ t }: Props) {
  return (
    <section className="py-16 border-y bg-sky-50/50 border-sky-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.title}</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">{t.description}</p>
          <ul className="space-y-4">
            {t.bullets.map((b, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                className="flex gap-3 items-start"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                <span className="text-slate-700">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-sky-200 rounded-full blur-3xl opacity-20 animate-pulse" />
          <Image
            src={imagePath("/images/ai-body-logic.png")}
            alt="AI Body Logic"
            width={600}
            height={400}
            className="relative z-10 rounded-2xl shadow-xl border border-sky-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
