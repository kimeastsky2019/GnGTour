"use client";

import { Translations } from "../../lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagePath } from "../../lib/paths";

type Props = { t: Translations["whyKorea"] };

export default function WhyKorea({ t }: Props) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={imagePath("/images/why-korea.png")}
              alt="Why Korea"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sky-100 rounded-full -z-10 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.title}</h2>
          <ul className="grid gap-4 text-slate-700">
            {t.bullets.map((b, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                <span className="font-medium">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
