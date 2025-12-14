'use client';

import { FormEvent, useMemo, useState, ChangeEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Loader2, Send, Sparkles } from 'lucide-react';

// TODO: Replace this URL with your own Google Apps Script Web App URL
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbywh_txd4qOQICtUhntKKT1NDkAFmf-YsOjE8es6HTMZ4DDdbXabcRA7ixMNXB9uqAR/exec';

export default function CTSForm() {
    const { t } = useLanguage();
    const initialState = useMemo(() => {
        const defaults: Record<string, string> = {};
        t.ctsForm.fields.forEach((f: { name: string }) => {
            defaults[f.name] = '';
        });
        return defaults;
    }, [t]);

    const [formData, setFormData] = useState<Record<string, string>>(initialState);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus('submitting');
        try {
            const resp = await fetch(ENDPOINT, {
                method: 'POST',
                // Use text/plain to avoid CORS preflight options request which GAS doesn't handle well
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(formData),
            });
            if (!resp.ok) {
                throw new Error('Non-200');
            }
            setSubmitStatus('success');
            setFormData(initialState);
        } catch (error) {
            console.error('CTS submit error', error);
            setSubmitStatus('error');
        }
    };

    const isSubmitting = submitStatus === 'submitting';

    return (
        <section id="cts-form" className="bg-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(178,58,255,0.05),transparent_40%)]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-xl">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple mb-4">
                            <Sparkles className="h-4 w-4" />
                            {t.ctsForm.badge}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t.ctsForm.title}
                        </h2>
                        <p className="text-gray-600">
                            {t.ctsForm.subTitle}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t.ctsForm.fields.map((field: { name: string; label: string; placeholder: string }) => (
                                <div key={field.name} className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">
                                        {field.label}
                                    </label>
                                    <input
                                        type="text"
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={formData[field.name] ?? ''}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-foreground placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
                                        required={['name', 'contact'].includes(field.name)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-neon-cyan px-8 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-neon-cyan/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <>
                                            {t.ctsForm.submit}
                                            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            </button>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 text-center font-medium">
                                {t.ctsForm.submitSuccess}
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-center font-medium">
                                {t.ctsForm.submitError}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
