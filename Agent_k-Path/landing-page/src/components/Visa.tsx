'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { withBasePath } from '@/lib/imagePrefix';

gsap.registerPlugin(ScrollTrigger);

export default function Visa() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.visa-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-background py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(178,58,255,0.05),transparent_50%)]" />
            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-12 text-center">
                    <p className="inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple">
                        <ShieldCheck className="h-4 w-4" /> Visa Paths
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        {t.visa.title}
                    </h2>
                    {t.visa.intro && (
                        <p className="mt-4 text-lg text-gray-600">
                            {t.visa.intro}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {t.visa.items.map((visa) => (
                        <div
                            key={visa.code}
                            className="visa-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neon-purple hover:shadow-lg shadow-sm"
                        >
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(178,58,255,0.05),transparent_40%)]" />
                            <div className="relative z-10 space-y-3">
                                <div className="text-sm font-semibold text-neon-cyan">{visa.code}</div>
                                <p className="text-lg font-bold text-foreground">{visa.title}</p>
                                <p className="text-gray-600 leading-relaxed">{visa.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center text-neon-cyan text-lg font-medium">
                    {t.visa.closing}
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="relative max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_20px_80px_rgba(178,58,255,0.1)]">
                        <Image
                            src={withBasePath("/ai-visa.svg")}
                            alt="AI visa illustration"
                            width={640}
                            height={400}
                            className="h-auto w-full rounded-2xl"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-black/5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
