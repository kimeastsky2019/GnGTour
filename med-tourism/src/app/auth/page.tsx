"use client";

import { useState } from "react";
import { getTranslations, Locale } from "../../lib/i18n";
import MainHeader from "../../components/layout/MainHeader";
import MainFooter from "../../components/layout/MainFooter";

import { getAuthToken } from "../../lib/auth";

export default function AuthPage() {
  const [locale, setLocale] = useState<Locale>("ru");
  const t = getTranslations(locale);

  const authT = t.auth;

  return (
    <main className="flex min-h-screen flex-col">
      <MainHeader locale={locale} onLocaleChange={setLocale} />
      <div className="flex-1">
        <div className="mx-auto max-w-md px-4 py-8">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            {authT.title}
          </h1>
          <p className="text-sm text-slate-700 mb-4">{authT.subtitle}</p>

          <div className="grid gap-3 mb-6 text-sm">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="font-semibold mb-1">{authT.roles.patient.title}</div>
              <div className="text-xs text-slate-600">{authT.roles.patient.description}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="font-semibold mb-1">{authT.roles.doctor.title}</div>
              <div className="text-xs text-slate-600">{authT.roles.doctor.description}</div>
            </div>
          </div>

          <form className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {authT.login.email}
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {authT.login.password}
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </div>
            <div className="text-xs text-slate-600">
              <a href="#" className="underline">
                {authT.login.forgot}
              </a>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-sky-700"
              >
                {authT.login.loginBtn}
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50"
              >
                {authT.login.registerBtn}
              </button>
            </div>
          </form>
        </div>
      </div>
      <MainFooter />
    </main>
  );
}