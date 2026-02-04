import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-100">
      
      {/* Floating blur shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-1/2 -right-24 w-96 h-96 bg-primary-300/40 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          Empowering <span className="text-primary-600">Livelihoods</span>  
          <br /> Across India
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Jeevika is a movement to amplify voices, create opportunities,
          and build sustainable futures for communities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="px-8 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 transition"
          >
            Learn More
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-8 py-3 rounded-full border border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition"
          >
            Get Involved
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
