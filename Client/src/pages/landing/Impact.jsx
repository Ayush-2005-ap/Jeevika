import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Impact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Families Helped", value: "10K+" },
            { label: "Communities Reached", value: "250+" },
            { label: "Partners", value: "100+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.2 }}
              className="text-center p-8 bg-gray-50 rounded-2xl shadow"
            >
              <h3 className="text-4xl font-bold text-primary-600">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
