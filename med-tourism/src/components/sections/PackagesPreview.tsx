import { Translations } from "../../lib/i18n";

type Props = { t: Translations["packages"] };

export default function PackagesPreview({ t }: Props) {
  return (
    <section className="pt-6 pb-8 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t.title}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {t.items.map((p, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between shadow-sm"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{p.name}</h3>
              <p className="text-xs text-slate-500 mb-2">{p.duration}</p>
              <p className="text-xs text-slate-700 mb-2">{p.description}</p>
              <ul className="text-[11px] text-slate-600 list-disc list-inside space-y-1">
                {p.includes.map((i, jdx) => (
                  <li key={jdx}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="mt-3 text-xs font-medium text-sky-700">
              {p.priceHint}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}