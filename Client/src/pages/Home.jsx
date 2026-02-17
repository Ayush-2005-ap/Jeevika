import React from 'react';
import Hero from './landing/Hero';
import About from './landing/About';
import Impact from './landing/Impact';
import Festival from './landing/Festival';
import CTA from './landing/CTA';
import Newsletter from './landing/Newsletter';
import { useLang } from "../context/LanguageContext";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { lang } = useLang();

    const { t } = useTranslation();

    const text = {
        en: {
            heading: t('greeting'), // Fixed the translation function call
            sub: t('sub'), // Added the sub translation key
            subtitle: t('subtitle'), // Added the subtitle translation key
        },
        hi: {
            heading: t('greeting'), // Fixed the translation function call
            sub: t('sub'), 
            subtitle: t('subtitle'),
        },
    };
    const current = text[lang] || text.en;

    return (
        <div className="overflow-x-hidden">
            <Hero heading={current.heading} sub={current.sub} subtitle={current.subtitle} />
            <About />
            <Impact />
            <Festival />
            <CTA />
            <Newsletter />
        </div>
    );
};

export default Home;
