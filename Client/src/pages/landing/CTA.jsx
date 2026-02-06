import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Movement for Justice & Livelihood
          </h2>

          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-14">
            Be a part of Jeevika’s mission to protect street vendors, empower
            livelihoods, and create sustainable change across India.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lawyer */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <i className="fa-solid fa-gavel text-4xl mb-4 text-white"></i>
              <h3 className="text-xl font-semibold mb-3">Join as a Lawyer</h3>
              <p className="text-sm text-primary-100 mb-6">
                Help street vendors access justice, legal protection, and fair
                representation.
              </p>
              <Link
                to="/get-involved"
                className="inline-block px-6 py-2 rounded-full bg-white text-primary-700 font-semibold hover:scale-105 transition"
              >
                Become a Lawyer
              </Link>
            </motion.div>

            {/* Street Vendor */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <i className="fa-solid fa-cart-arrow-down text-4xl mb-4 text-white"></i>
              <h3 className="text-xl font-semibold mb-3">
                Join as Street Vendor
              </h3>
              <p className="text-sm text-primary-100 mb-6">
                Register yourself to receive support, resources, and advocacy
                for your livelihood.
              </p>
              <Link
                to="/get-involved"
                className="inline-block px-6 py-2 rounded-full bg-white text-primary-700 font-semibold hover:scale-105 transition"
              >
                Register Now
              </Link>
            </motion.div>

            {/* Partner */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <i className="fa-solid fa-handshake text-4xl mb-4 text-white"></i>
              <h3 className="text-xl font-semibold mb-3">Partner with Us</h3>
              <p className="text-sm text-primary-100 mb-6">
                Collaborate with Jeevika as an organization, institution, or
                supporter.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 rounded-full bg-white text-primary-700 font-semibold hover:scale-105 transition"
              >
                Become a Partner
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
