export type Locale = "ru" | "ko" | "en" | "th";

export type Translations = {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust1: string;
    trust2: string;
  };
  whyKorea: {
    title: string;
    bullets: string[];
  };
  specialties: {
    title: string;
    internal: { title: string; description: string };
    gynecology: { title: string; description: string };
    plastic: { title: string; description: string };
    dermatology: { title: string; description: string };
    orthoPain: { title: string; description: string };
  };
  aiService: {
    title: string;
    description: string;
    bullets: string[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  groupVisa: {
    title: string;
    description: string;
  };
  hospitals: {
    title: string;
    items: { name: string; description: string; tag: string; address: string; tel: string }[];
  };
  packages: {
    title: string;
    items: {
      name: string;
      duration: string;
      description: string;
      includes: string[];
      priceHint: string;
    }[];
  };
  testimonials: {
    title: string;
    items: { name: string; country: string; text: string; procedureType: string }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    description: string;
    fields: {
      name: string;
      country: string;
      contact: string;
      specialty: string;
      symptoms: string;
    };
    submitLabel: string;
    instantTitle: string;
    instantChannels: string[];
  };
  forDoctorsTeaser: {
    title: string;
    description: string;
    bullets: string[];
    cta: string;
  };
  authLite: {
    title: string;
    subtitle: string;
    loginLabel: string;
    registerLabel: string;
  };
  auth: {
    title: string;
    subtitle: string;
    roles: {
      patient: { title: string; description: string };
      doctor: { title: string; description: string };
    };
    login: {
      email: string;
      password: string;
      forgot: string;
      loginBtn: string;
      registerBtn: string;
    };
  };
  medicalContacts: {
    title: string;
    subtitle: string;
    button: string;
    filters: {
      allRegions: string;
      allSpecialties: string;
    };
    noResults: string;
  };
};

import ru from "../i18n/ru.json";
import ko from "../i18n/ko.json";
import en from "../i18n/en.json";
import th from "../i18n/th.json";

const dictionaries: Record<Locale, Translations> = {
  ru: ru as Translations,
  ko: ko as Translations,
  en: en as Translations,
  th: th as Translations
};

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}