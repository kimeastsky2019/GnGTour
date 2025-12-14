"use client";

import { useState } from "react";
import { Translations } from "../../lib/i18n";

type Props = { t: Translations["contact"] };

// TODO: Replace this with the actual Google Apps Script Web App URL provided by the user
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0CuYV7Z1jKE25yl_lN-rjohtEQp1fNV26jFulp8KOEUjWlu6V6F40J9Q4DsVRs8ZY/exec";

export default function ContactCTA({ t }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    contact: "",
    specialty: "",
    symptoms: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!GOOGLE_SCRIPT_URL) {
      alert("Google Script URL이 설정되지 않았습니다. 관리자에게 문의하세요.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // With no-cors, we can't check response.ok, so we assume success if no error thrown
      setStatus("success");
      setFormData({ name: "", country: "", contact: "", specialty: "", symptoms: "" });
      alert("문의가 성공적으로 접수되었습니다!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <section id="contact" className="pt-8 pb-10">
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] items-start">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">{t.title}</h2>
          <p className="text-sm text-slate-700 mb-4">{t.description}</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.fields.name}
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.fields.country}
              </label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.fields.contact}
              </label>
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder="WhatsApp / Telegram / Email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.fields.specialty}
              </label>
              <input
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.fields.symptoms}
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm min-h-[80px] focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`mt-2 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white transition-all
                ${status === "submitting" ? "bg-slate-400 cursor-not-allowed" : "bg-sky-600 hover:bg-sky-700 shadow-md hover:shadow-lg"}
              `}
            >
              {status === "submitting" ? "Sending..." : t.submitLabel}
            </button>
          </form>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            {t.instantTitle}
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {t.instantChannels.map((c, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}