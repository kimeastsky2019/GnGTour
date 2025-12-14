"use client";

import { useEffect, useState } from "react";
import MainHeader from "../../components/layout/MainHeader";
import MainFooter from "../../components/layout/MainFooter";
import { getTranslations, Locale } from "../../lib/i18n";
import { apiClient } from "../../lib/apiClient";
import { requireRole, getAuthToken } from "../../lib/auth";

export default function DoctorDashboard() {
  requireRole("doctor");
  const [locale, setLocale] = useState<Locale>("ko");
  const t = getTranslations(locale);

  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    const token = getAuthToken();
    if (!token) return;
    apiClient("/doctor/cases", { token }).then(setCases).catch(() => {});
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <MainHeader locale={locale} onLocaleChange={setLocale} />
      <div className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-6 space-y-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            해외 환자 케이스
          </h1>
          <section className="space-y-3 text-sm">
            {cases.map((c, idx) => (
              <article
                key={idx}
                className="rounded-lg border border-slate-200 bg-white p-3"
              >
                <div className="flex justify-between">
                  <div className="font-semibold">
                    {c.patientCountry} · {c.mainPurpose}
                  </div>
                  <div className="text-xs text-slate-500">{c.status}</div>
                </div>
                <p className="mt-1 text-xs text-slate-600">{c.symptomSummary}</p>
              </article>
            ))}
            {cases.length === 0 && (
              <div className="text-xs text-slate-500">
                아직 매칭된 해외 환자 케이스가 없습니다.
              </div>
            )}
          </section>
        </div>
      </div>
      <MainFooter />
    </main>
  );
}