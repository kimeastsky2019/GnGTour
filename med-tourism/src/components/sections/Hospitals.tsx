import { Translations } from "../../lib/i18n";

type Props = { t: Translations["hospitals"] };

export default function Hospitals({ t }: Props) {
  return (
    <section className="pt-6 pb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t.title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.items.map((h, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-1 shadow-sm"
          >
            <div className="text-sm font-semibold text-slate-900">{h.name}</div>
            <div className="text-xs text-slate-600">{h.description}</div>
            <div className="text-xs text-slate-500 mt-1">
              <div>📍 {h.address}</div>
              <div>📞 {h.tel}</div>
            </div>
            <div className="mt-2 inline-flex w-fit rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700">
              {h.tag}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}