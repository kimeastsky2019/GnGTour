'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, CheckCircle, FileText, User } from 'lucide-react';
import Image from 'next/image';
import { withBasePath } from '@/lib/imagePrefix';

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const icons = [User, Brain, FileText, CheckCircle];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.step-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-background via-soft-gray to-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                {t.solution.title}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {t.solution.intro}
                            </p>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-neon-cyan/20 via-neon-cyan to-neon-cyan/20" />

                            {t.solution.steps.map((step, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <div key={step.title} className="step-card relative flex gap-6">
                                        <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-background border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,128,133,0.2)]">
                                            <Icon className="w-6 h-6 text-neon-cyan" />
                                        </div>
                                        <div className="pt-2 space-y-2">
                                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="relative max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_20px_80px_rgba(0,128,133,0.1)]">
                            <Image
                                src={withBasePath("/ai-body-logic.svg")}
                                alt="AI agent illustration"
                                width={640}
                                height={400}
                                className="h-auto w-full rounded-2xl"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-black/5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
