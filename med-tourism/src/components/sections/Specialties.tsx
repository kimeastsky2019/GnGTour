"use client";

import { Translations } from "../../lib/i18n";
import { motion } from "framer-motion";

type Props = { t: Translations["specialties"] };

export default function Specialties({ t }: Props) {
  const items = [t.internal, t.gynecology, t.plastic, t.dermatology, t.orthoPain];
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-8 text-center"
        >
          {t.title}
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mb-4 text-sky-600 font-bold text-lg">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}