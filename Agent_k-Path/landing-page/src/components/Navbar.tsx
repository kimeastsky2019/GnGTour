'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/content';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { withBasePath } from '@/lib/imagePrefix';
import Link from 'next/link'; // Added Link import

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false); // Renamed scrolled to isScrolled
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added mobile menu state

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Updated to setIsScrolled
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' },
        { code: 'th', label: 'TH' },
    ];

    // Placeholder for navLinks and scrollToSection, as they are used in the new JSX
    // You would typically define these based on your application's navigation structure
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.substring(1)); // Remove '#' from id
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple p-[1px]">
                            <div className="absolute inset-0 rounded-xl bg-white opacity-90 transition-opacity group-hover:opacity-0" />
                            <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white">
                                <Image
                                    src={withBasePath("/gg-logo.svg")}
                                    alt="GnG Logo"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            GnG Tour
                        </span>
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-neon-cyan"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="flex items-center gap-4">
                            <div className="h-4 w-[1px] bg-gray-300" />
                            <div className="flex gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`rounded-md px-2 py-1 text-xs font-bold transition-colors ${language === lang.code ? 'bg-neon-cyan text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-foreground'}`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => scrollToSection('cts-form')}
                                className="rounded-full bg-neon-cyan px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-neon-cyan/20"
                            >
                                {t.cta.button}
                            </button>
                        </div>
                    </div>

                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 p-6 md:hidden shadow-xl">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-left text-base font-medium text-gray-600 hover:text-neon-cyan"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="h-[1px] bg-gray-100 my-2" />
                        <div className="flex gap-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code)}
                                    className={`rounded-md px-3 py-1.5 text-sm font-bold transition-colors ${language === lang.code ? 'bg-neon-cyan text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => scrollToSection('cts-form')}
                            className="mt-2 w-full rounded-full bg-neon-cyan py-3 text-center font-bold text-white shadow-lg shadow-neon-cyan/20"
                        >
                            {t.cta.button}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
