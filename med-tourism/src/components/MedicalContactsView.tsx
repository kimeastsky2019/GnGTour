'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import contactsData from '../data/medical_contacts.json';
import { getTranslations, Locale } from '../lib/i18n';
import MainHeader from './layout/MainHeader';

interface Contact {
    "병원명": string;
    "분야(성형/피부/치과/정형/산부인과/검진/종합)": string;
    "시/군/구": string;
    "비고(의료관광/외국인 다수 등)": string;
    "홈페이지": string;
    "대표전화": string;
    "이메일": string;
    "담당자 이름": string;
    "region_province": string;
}

interface Props {
    locale: Locale;
}

export default function MedicalContactsView({ locale }: Props) {
    const router = useRouter();
    const [showList, setShowList] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState('');

    const t = getTranslations(locale).medicalContacts;

    // Cast and memoize data
    const allContacts = contactsData as unknown as Record<Locale, Contact[]>;
    const contacts: Contact[] = useMemo(() => allContacts[locale] || [], [locale, allContacts]);

    const handleLocaleChange = (newLocale: Locale) => {
        const path = newLocale === 'ko' ? '/medical-contacts' : `/${newLocale}/medical-contacts`;
        router.push(path);
    };

    // Extract unique filters
    const regions = useMemo(() => ['All', ...Array.from(new Set(contacts.map(c => c.region_province).filter(Boolean)))], [contacts]);
    const specialties = useMemo(() => ['All', ...Array.from(new Set(contacts.map(c => c["분야(성형/피부/치과/정형/산부인과/검진/종합)"]).filter(Boolean)))], [contacts]);

    // Filter Logic
    const filteredContacts = useMemo(() => {
        return contacts.filter(contact => {
            const regionMatch = selectedRegion === 'All' || contact.region_province === selectedRegion;
            const specialtyMatch = selectedSpecialty === 'All' || contact["분야(성형/피부/치과/정형/산부인과/검진/종합)"] === selectedSpecialty;
            const searchMatch = !searchTerm || contact["병원명"].toLowerCase().includes(searchTerm.toLowerCase());
            return regionMatch && specialtyMatch && searchMatch;
        });
    }, [contacts, selectedRegion, selectedSpecialty, searchTerm]);

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
            <MainHeader locale={locale} onLocaleChange={handleLocaleChange} />

            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-700" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] bg-teal-600/5 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    <div className="inline-block mb-4">
                        <span className="py-1 px-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-md">
                            PREMIUM MEDICAL TOURISM
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
                            {t.title}
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.subtitle}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowList(true)}
                        className="mt-12 group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.4)] transition-all duration-300"
                    >
                        <span>{t.button}</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Content Section */}
            <AnimatePresence>
                {showList && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-20 min-h-screen bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50 -mt-20 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)]"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-16">

                            {/* Controls Header */}
                            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-between">
                                <div className="text-left w-full md:w-auto">
                                    <h2 className="text-3xl font-bold text-white mb-2">Partner Hospitals</h2>
                                    <p className="text-slate-400">Find the best medical care in Korea</p>
                                </div>
                                <div className="w-full md:w-auto relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search hospital name..."
                                        className="w-full md:w-80 bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Filter Chips */}
                            <div className="space-y-6 mb-12">
                                {/* Region Filters */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-sm font-medium text-slate-500 mr-2 py-2">Region:</span>
                                    {regions.map(r => (
                                        <button
                                            key={r}
                                            onClick={() => setSelectedRegion(r)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedRegion === r
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 ring-1 ring-blue-400'
                                                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-transparent hover:border-slate-600'
                                                }`}
                                        >
                                            {r === 'All' ? t.filters.allRegions : r}
                                        </button>
                                    ))}
                                </div>

                                {/* Specialty Filters */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-sm font-medium text-slate-500 mr-2 py-2">Specialty:</span>
                                    {specialties.map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setSelectedSpecialty(s)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedSpecialty === s
                                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25 ring-1 ring-purple-400'
                                                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-transparent hover:border-slate-600'
                                                }`}
                                        >
                                            {s === 'All' ? t.filters.allSpecialties : s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Grid */}
                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence mode='popLayout'>
                                    {filteredContacts.map((contact, index) => (
                                        <motion.div
                                            layout
                                            key={`${contact["병원명"]}-${index}`}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="group relative bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
                                        >
                                            {/* Hover Glow Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="flex justify-between items-start mb-4">
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                        {contact["분야(성형/피부/치과/정형/산부인과/검진/종합)"]}
                                                    </span>
                                                    {contact.region_province && (
                                                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {contact.region_province}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-200 transition-colors">
                                                    {contact["병원명"]}
                                                </h3>

                                                <div className="flex-grow">
                                                    <p className="text-sm text-slate-400 mb-4 flex items-start gap-2 line-clamp-2 min-h-[2.5em]">
                                                        {contact["비고(의료관광/외국인 다수 등)"] || "Global medical standard services available."}
                                                    </p>
                                                </div>

                                                <div className="pt-4 mt-auto border-t border-slate-700/50 flex items-center justify-between gap-3">
                                                    {contact["대표전화"] ? (
                                                        <a href={`tel:${contact["대표전화"]}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all cursor-pointer">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                            </svg>
                                                            Call
                                                        </a>
                                                    ) : (
                                                        <span className="flex-1" />
                                                    )}

                                                    {contact["홈페이지"] && (
                                                        <a
                                                            href={contact["홈페이지"].startsWith('http') ? contact["홈페이지"] : `https://${contact["홈페이지"]}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-500/20 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
                                                        >
                                                            Website
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            {filteredContacts.length === 0 && (
                                <div className="text-center py-32">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                                        <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-2">No hospitals found</h3>
                                    <p className="text-slate-400">Try adjusting your filters or search terms.</p>
                                </div>
                            )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
