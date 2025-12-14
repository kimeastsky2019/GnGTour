import { Translations } from "../../lib/i18n";

type Props = { t: Translations["groupVisa"] };

export default function GroupVisa({ t }: Props) {
  return (
    <section className="pt-6 pb-8 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900 mb-3">{t.title}</h2>
      <p className="text-sm text-slate-700">{t.description}</p>
    </section>
  );
}