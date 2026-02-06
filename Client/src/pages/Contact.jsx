import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="pt-32 pb-20 bg-gray-50 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, ideas, or want to collaborate with Jeevika?
            We’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/90 backdrop-blur rounded-2xl shadow-lg p-10 border border-gray-100"
          >
            {/* gradient accent */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary-500 to-primary-700" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8 text-gray-700">

              {/* Address */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex gap-4 items-start"
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-2xl"
                >
                  📍
                </motion.span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm leading-relaxed">
                    Centre for Civil Society <br />
                    New Delhi, India
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex gap-4 items-start"
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="text-2xl"
                >
                  📧
                </motion.span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:jeevika@ccs.in"
                    className="text-sm text-primary-600 hover:underline"
                  >
                    jeevika@ccs.in
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex gap-4 items-start"
              >
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-2xl"
                >
                  📞
                </motion.span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm">+91-11-26537456</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-md"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
