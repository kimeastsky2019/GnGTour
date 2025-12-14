"use client";

import { Translations } from "../../lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagePath } from "../../lib/paths";

type Props = { t: Translations["process"] };

export default function Process({ t }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.title}</h2>
          <ol className="relative border-l border-slate-200 ml-3 space-y-8">
            {t.steps.map((s, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="mb-10 ml-6"
              >
                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-sky-600 font-bold text-sm">{idx + 1}</span>
                </span>
                <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-base font-normal text-slate-500">
                    {s.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <Image
              src={imagePath("/images/process-steps.png")}
              alt="Process Steps"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
