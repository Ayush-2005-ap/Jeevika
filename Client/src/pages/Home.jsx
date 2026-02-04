import React from 'react';
import Hero from './landing/Hero';
import About from './landing/About';
import Impact from './landing/Impact';
import Festival from './landing/Festival';
import CTA from './landing/CTA';
import Newsletter from './landing/Newsletter';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Impact />
      <Festival />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Home;