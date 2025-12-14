"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "ko" | "en" | "ru" | "th";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const SUPPORTED_LANGS: Language[] = ["ko", "en", "ru", "th"];
const DEFAULT_LANG: Language = "ru";
const STORAGE_KEY = "gngtour-lang";

const isSupportedLang = (value: string | null): value is Language =>
  SUPPORTED_LANGS.includes(value as Language);

const syncDocumentLang = (lang: Language) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
};

export default function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Language>(DEFAULT_LANG);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get("lang");
    const stored = window.localStorage.getItem(STORAGE_KEY);

    const initial = isSupportedLang(paramLang)
      ? paramLang
      : isSupportedLang(stored)
        ? (stored as Language)
        : DEFAULT_LANG;

    setLang(initial);
    window.localStorage.setItem(STORAGE_KEY, initial);
    syncDocumentLang(initial);

    if (!paramLang || paramLang !== initial) {
      params.set("lang", initial);
      const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(STORAGE_KEY, lang);
    syncDocumentLang(lang);

    const params = new URLSearchParams(window.location.search);
    if (params.get("lang") !== lang) {
      params.set("lang", lang);
      const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
