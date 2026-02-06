import React from 'react';
import Hero from './landing/Hero';
import About from './landing/About';
import Impact from './landing/Impact';
import Festival from './landing/Festival';
import CTA from './landing/CTA';
import Newsletter from './landing/Newsletter';
import { useLang } from "../context/LanguageContext";


const Home = () => {
    const { lang } = useLang();

    const text = {
        EN: {
            heading: "Empowering Livelihoods Across India",
            sub: "Building sustainable futures for street vendors.",
        },
        HI: {
            heading: "भारत में आजीविका को सशक्त बनाना",
            sub: "स्ट्रीट वेंडरों के लिए टिकाऊ भविष्य बनाना।",
        },
    };

    return (
        <div className="overflow-x-hidden">
            <Hero heading={text[lang].heading}
                sub={text[lang].sub} />
            <About />
            <Impact />
            <Festival />
            <CTA />
            <Newsletter />
        </div>
    );
};

export default Home;