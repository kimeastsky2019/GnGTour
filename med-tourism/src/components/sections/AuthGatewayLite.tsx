import { Translations } from "../../lib/i18n";

type Props = { t: Translations["authLite"] };

export default function AuthGatewayLite({ t }: Props) {
  return (
    <section className="pt-4 pb-8 text-center text-xs text-slate-600">
      <div className="inline-flex flex-col items-center gap-1">
        <div className="font-medium text-slate-800">{t.title}</div>
        <div>{t.subtitle}</div>
        <div className="flex gap-3 mt-1">
          <a href="/auth" className="underline">
            {t.loginLabel}
          </a>
          <a href="/auth" className="underline">
            {t.registerLabel}
          </a>
        </div>
      </div>
    </section>
  );
}