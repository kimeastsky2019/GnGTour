"use client";

import { useEffect, useState } from "react";
import MainHeader from "../../components/layout/MainHeader";
import MainFooter from "../../components/layout/MainFooter";
import { getTranslations, Locale } from "../../lib/i18n";
import { apiClient } from "../../lib/apiClient";
import { getAuthToken, getRole, requireRole } from "../../lib/auth";

export default function PatientDashboard() {
  requireRole("patient");
  const [locale, setLocale] = useState<Locale>("ru");
  const t = getTranslations(locale);

  const [matches, setMatches] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const token = getAuthToken();
    if (!token) return;
    apiClient("/patient/matches", { token }).then(setMatches).catch(() => {});
    apiClient("/patient/bookings", { token }).then(setBookings).catch(() => {});
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <MainHeader locale={locale} onLocaleChange={setLocale} />
      <div className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-6 space-y-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            나의 치료 진행 현황
          </h1>
          <section>
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              매칭된 병원 및 의료진
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {matches.map((m, idx) => (
                <article
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-white p-3 text-sm"
                >
                  <div className="font-semibold">{m.doctorName}</div>
                  <div className="text-xs text-slate-600">{m.hospitalName}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    점수: {m.score} / 메모: {m.reasonSummary}
                  </div>
                </article>
              ))}
              {matches.length === 0 && (
                <div className="text-xs text-slate-500">
                  아직 매칭된 의료진이 없습니다. 상담을 완료하면 추천이 표시됩니다.
                </div>
              )}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              예약 일정
            </h2>
            <div className="space-y-2 text-sm">
              {bookings.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-white p-3 flex justify-between"
                >
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <div className="text-xs text-slate-600">{b.date}</div>
                  </div>
                  <div className="text-xs text-slate-500">{b.status}</div>
                </div>
              ))}
              {bookings.length === 0 && (
                <div className="text-xs text-slate-500">
                  예약된 일정이 없습니다.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      <MainFooter />
    </main>
  );
}