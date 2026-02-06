import React from "react";

const Hero = ({ heading, sub }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          {heading}
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
          {sub}
        </p>

        <a
          href="#about"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
