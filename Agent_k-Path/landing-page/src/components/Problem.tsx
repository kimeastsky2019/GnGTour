'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, FileQuestion, Layers, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const icons = [FileQuestion, Layers, AlertTriangle, ShieldAlert];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.problem-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        {t.problem.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {t.problem.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.problem.cards.map((card, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="problem-card group p-8 rounded-2xl bg-white border border-gray-200 hover:border-neon-purple transition-colors shadow-sm hover:shadow-md"
                            >
                                <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                                    <Icon className="w-6 h-6 text-neon-purple" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <p className="text-neon-cyan font-medium text-lg">
                        {t.problem.closing}
                    </p>
                </div>
            </div>
        </section>
    );
}
