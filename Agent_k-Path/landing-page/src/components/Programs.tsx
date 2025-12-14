'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { withBasePath } from '@/lib/imagePrefix';

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    type ProgramItem = {
        title: string;
        tag?: string;
        desc: string;
        bullets?: string[];
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.program-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-background py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,133,0.05),transparent_45%)]" />
            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-14 text-center">
                    <p className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
                        <Sparkles className="h-4 w-4" /> Programs
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        {t.programs.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">{t.programs.closing}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {(t.programs.items as ProgramItem[]).map((item, index) => (
                        <div
                            key={item.title}
                            className="program-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-neon-cyan/70 hover:shadow-lg shadow-sm"
                        >
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(0,128,133,0.05),transparent_35%)]" />
                            <div className="relative z-10 space-y-3">
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="rounded-full border border-neon-cyan px-3 py-1 font-semibold text-neon-cyan">
                                        0{index + 1}
                                    </span>
                                    {item.tag && <span className="text-gray-500">{item.tag}</span>}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                {item.bullets && (
                                    <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                        {item.bullets.map((bullet) => (
                                            <li key={bullet} className="flex gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-cyan" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <div className="relative max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_20px_80px_rgba(0,128,133,0.1)]">
                        <Image
                            src={withBasePath("/ai-programs.svg")}
                            alt="AI programs illustration"
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
