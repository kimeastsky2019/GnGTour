'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.faq-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (!t.faq) return null;

    return (
        <section ref={containerRef} className="bg-background py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(178,58,255,0.05),transparent_50%)]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t.faq.title}
                    </h2>
                </div>

                <div className="mx-auto mt-10 max-w-3xl space-y-3">
                    {t.faq.items.map((item, index) => {
                        const isOpen = index === openIndex;
                        return (
                            <div
                                key={item.question}
                                className={`faq-item rounded-2xl border p-4 transition-all duration-300 ${isOpen ? 'border-neon-cyan bg-gray-50 shadow-sm' : 'border-gray-200 bg-white hover:border-neon-cyan/50'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between text-left text-foreground"
                                >
                                    <span className="text-lg font-semibold">{item.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-neon-cyan' : 'text-gray-400'}`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
