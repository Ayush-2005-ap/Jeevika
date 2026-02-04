import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-primary-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-8">
            Be part of the movement to empower livelihoods across communities.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </Link>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm text-gray-200">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-gray-200">Research Publications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-200">States Reached</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
