'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
    const { t } = useLanguage();

    const scrollToForm = () => {
        document.getElementById('cts-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-background to-neon-cyan/10" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 bg-white p-8 md:p-12 text-center shadow-lg">
                    <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan mb-6">
                        <Sparkles className="h-4 w-4" />
                        {t.cta.badge}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        {t.cta.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        {t.cta.subText}
                    </p>
                    <button
                        onClick={scrollToForm}
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neon-cyan px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-neon-cyan/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {t.cta.button}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </button>
                </div>
            </div>
        </section>
    );
}
