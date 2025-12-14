import { Locale, Translations } from "../../lib/i18n";
import { BASE_PATH } from "../../lib/paths";

type Props = { t: Translations["forDoctorsTeaser"]; locale: Locale };

export default function ForDoctorsTeaser({ t, locale }: Props) {
  const registrationHref = `${BASE_PATH}${locale === 'ko' ? '/medical-contacts' : `/${locale}/medical-contacts`}`;

  return (
    <section className="pt-6 pb-8 border-t border-slate-200">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">{t.title}</h2>
          <p className="text-sm text-slate-700 mb-2">{t.description}</p>
          <ul className="text-xs text-slate-600 space-y-1">
            {t.bullets.map((b, idx) => (
              <li key={idx}>• {b}</li>
            ))}
          </ul>
        </div>
        <div>
          <a
            href={registrationHref}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
