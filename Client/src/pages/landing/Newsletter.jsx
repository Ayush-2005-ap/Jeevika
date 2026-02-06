import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support the Change
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Stay informed about our work and help us empower street vendors
            across India. Your support makes a real difference.
          </p>

          {/* Newsletter */}
          {!subscribed ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full border w-full sm:w-80 focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-semibold mb-10"
            >
              ✅ Thanks for subscribing!
            </motion.p>
          )}

          {/* Donate CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-800 text-white font-semibold shadow-lg"
            >
              ❤️ Donate for Change
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
