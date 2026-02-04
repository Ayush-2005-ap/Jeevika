import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Festival = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const festivalFeatures = [
    {
      title: "Documentary Showcase",
      description:
        "Powerful films highlighting livelihood struggles and triumphs across Asia",
      icon: "🎬",
    },
    {
      title: "Jeevika Awards",
      description:
        "Recognizing excellence in documentary filmmaking on livelihood issues",
      icon: "🏆",
    },
    {
      title: "Global Dialogues",
      description:
        "Panel discussions with changemakers, policymakers, and social entrepreneurs",
      icon: "🌍",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Jeevika Film Festival</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A platform celebrating stories of livelihood, resilience, and hope
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {festivalFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full transition"
          >
            Get Involved
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Festival;
