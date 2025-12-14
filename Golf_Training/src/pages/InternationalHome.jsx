import React from 'react';
import { Header, Footer } from '../components/Layout';
import Hero from '../components/Hero';
import Platform from '../components/Platform';

const InternationalHome = () => {
    return (
        <div className="international-home">
            <Header />
            <Hero />
            <Platform />
            <Footer />
        </div>
    );
};

export default InternationalHome;
