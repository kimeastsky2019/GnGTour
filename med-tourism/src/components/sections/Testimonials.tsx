import { Translations } from "../../lib/i18n";

type Props = { t: Translations["testimonials"] };

export default function Testimonials({ t }: Props) {
  return (
    <section className="pt-6 pb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t.title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((item, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="text-xs text-slate-500 mb-1">
              {item.country} · {item.procedureType}
            </div>
            <p className="text-sm text-slate-800 mb-2">“{item.text}”</p>
            <div className="text-xs text-slate-500">- {item.name}</div>
          </article>
        ))}
      </div>
    </section>
  );
}