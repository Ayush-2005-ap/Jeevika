import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-4"
        >
          Stay Updated
        </motion.h2>

        {!subscribed ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border"
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg"
            >
              Subscribe Now
            </button>
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-semibold"
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
