import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/hero.mp4"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering Livelihoods Across India
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
          Jeevika is a movement to amplify voices, create opportunities,
          and build sustainable futures.
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
