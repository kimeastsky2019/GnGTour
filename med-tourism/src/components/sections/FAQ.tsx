import { Translations } from "../../lib/i18n";

type Props = { t: Translations["faq"] };

export default function FAQ({ t }: Props) {
  return (
    <section id="faq" className="pt-6 pb-8 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t.title}</h2>
      <div className="space-y-3">
        {t.items.map((f, idx) => (
          <details key={idx} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">
              {f.question}
            </summary>
            <p className="mt-2 text-sm text-slate-700">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}