'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Check } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.proof-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (!t.socialProof) return null;

    return (
        <section ref={containerRef} className="bg-background py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,128,133,0.05),transparent_40%)]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t.socialProof.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {t.socialProof.items.map((item) => (
                        <div
                            key={item}
                            className="proof-card flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-neon-cyan hover:shadow-md"
                        >
                            <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 text-neon-cyan shadow-[0_0_10px_rgba(0,128,133,0.2)]">
                                <Check className="h-4 w-4" />
                            </span>
                            <p className="text-gray-600">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
