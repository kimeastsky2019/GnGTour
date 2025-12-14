import React from 'react';
import { GolfHeader, GolfFooter } from '../components/golf/GolfLayout';
import GolfHero from '../components/golf/GolfHero';
import Problem from '../components/Problem';
import Program from '../components/Program';
import Target from '../components/Target';
import Benefit from '../components/Benefit';
import University from '../components/University';
import Visa from '../components/Visa';
import Curriculum from '../components/Curriculum';
import Pricing from '../components/Pricing';
import Stories from '../components/Stories';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { LanguageProvider } from '../i18n/LanguageContext';

const GolfHome = () => {
    return (
        <LanguageProvider>
            <div className="golf-theme">
                <GolfHeader />
                <GolfHero />
                <Problem />
                <div id="program">
                    <Program />
                </div>
                <Target />
                <div id="benefits">
                    <Benefit />
                </div>
                <University />
                <Visa />
                <Curriculum />
                <Pricing />
                <Stories />
                <div id="faq">
                    <FAQ />
                </div>
                <CTA />
                <GolfFooter />
            </div>
        </LanguageProvider>
    );
};

export default GolfHome;
