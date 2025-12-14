"use client";

import { useState } from "react";
import { getTranslations, Locale } from "../lib/i18n";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";

import Hero from "../components/sections/Hero";
import WhyKorea from "../components/sections/WhyKorea";
import Specialties from "../components/sections/Specialties";
import AIService from "../components/sections/AIService";
import Process from "../components/sections/Process";
import GroupVisa from "../components/sections/GroupVisa";
import Hospitals from "../components/sections/Hospitals";
import PackagesPreview from "../components/sections/PackagesPreview";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import ContactCTA from "../components/sections/ContactCTA";
import ForDoctorsTeaser from "../components/sections/ForDoctorsTeaser";
import AuthGatewayLite from "../components/sections/AuthGatewayLite";

export default function Page() {
  const [locale, setLocale] = useState<Locale>("ru");
  const t = getTranslations(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <MainHeader locale={locale} onLocaleChange={setLocale} />
      <div className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-6 space-y-8">
          <Hero t={t.hero} />
          <WhyKorea t={t.whyKorea} />
          <Specialties t={t.specialties} />
          <AIService t={t.aiService} />
          <Process t={t.process} />
          <GroupVisa t={t.groupVisa} />
          <Hospitals t={t.hospitals} />
          <PackagesPreview t={t.packages} />
          <Testimonials t={t.testimonials} />
          <FAQ t={t.faq} />
          <ContactCTA t={t.contact} />
          <ForDoctorsTeaser t={t.forDoctorsTeaser} locale={locale} />
          <AuthGatewayLite t={t.authLite} />
        </div>
      </div>
      <MainFooter />
    </main>
  );
}
