import React from 'react';
import { motion } from 'framer-motion';

const Campaign = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Campaign</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction. Content will be added soon.
          </p>
          <p className="text-gray-500">
            This page will feature information about our livelihood freedom campaigns across India,
            including our work in Rajasthan, Bihar, and advocacy initiatives.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Campaign;