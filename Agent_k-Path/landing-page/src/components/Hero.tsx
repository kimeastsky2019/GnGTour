'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const { t, language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from('.hero-text', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power4.out',
            })
                .from('.hero-cta', {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                }, '-=0.5');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleCtaClick = () => {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.setItem('lang', language);
            } catch {
                // ignore storage failures and still redirect
            }
            window.location.href = 'http://agent.gngtour.com/';
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Photo + overlays */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
            </div>

            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-background to-background" />
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight text-foreground">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-gray-500">
                            {t.hero.headline.split('—')[0]}
                        </span>
                        <span className="block text-neon-cyan mt-2">
                            {t.hero.headline.split('—')[1] || ''}
                        </span>
                    </h1>

                    <p className="hero-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {t.hero.subHeadline}
                    </p>

                    <div className="hero-cta flex flex-col items-center gap-4">
                        <button
                            onClick={handleCtaClick}
                            className="group relative px-8 py-4 bg-neon-cyan text-white font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-neon-cyan/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t.hero.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        <p className="text-sm text-gray-500">
                            {t.hero.subText}
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neon-cyan rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}
