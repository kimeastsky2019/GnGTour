'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Activity, Workflow } from 'lucide-react';
import { withBasePath } from '@/lib/imagePrefix';

gsap.registerPlugin(ScrollTrigger);

export default function BodyLogic() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.body-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.2,
                ease: 'power3.out',
            });

            gsap.to(imageRef.current, {
                y: -12,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const icons = [Sparkles, Activity, Workflow];

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-background via-soft-gray to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,128,133,0.05),transparent_45%)]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        {t.bodyLogic.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {t.bodyLogic.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.bodyLogic.items.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={item.title}
                                className="logic-card group p-8 rounded-2xl bg-white border border-gray-200 hover:border-neon-cyan transition-colors shadow-sm hover:shadow-md"
                            >
                                <div className="w-14 h-14 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 transition-colors">
                                    <Icon className="w-7 h-7 text-neon-cyan" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
