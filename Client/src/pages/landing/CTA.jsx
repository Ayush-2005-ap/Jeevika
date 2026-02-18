import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("cta_title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-14">
            {t("cta_desc")}
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lawyer */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <i className="fa-solid fa-gavel text-4xl mb-4 text-white"></i>
              <h3 className="text-xl font-semibold mb-3">
                {t("cta_lawyer_title")}
              </h3>
              <p className="text-sm text-primary-100 mb-6">
                {t("cta_lawyer_desc")}
              </p>
              <Link
                to="/get-involved"
                className="inline-block px-6 py-2 rounded-full bg-white text-primary-700 font-semibold hover:scale-105 transition"
              >
                {t("cta_lawyer_btn")}
              </Link>
            </motion.div>

            {/* Street Vendor */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <i className="fa-solid fa-cart-arrow-down text-4xl mb-4 text-white"></i>
              <h3 className="text-xl font-semibold mb-3">
                {t("cta_vendor_title")}
              </h3>
              <p className="text-sm text-primary-100 mb-6">
                {t("cta_vendor_desc")}
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.jeevika&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-white text-primary-700 font-semibold hover:scale-105 transition"
              >
                {t("cta_vendor_btn")}
              </a>
            </motion.div>

            {/* Partner */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <i className="fa-solid fa-handshake text-4xl mb-4 text-white"></i>
              <h3 className="text-xl font-semibold mb-3">
                {t("cta_partner_title")}
              </h3>
              <p className="text-sm text-primary-100 mb-6">
                {t("cta_partner_desc")}
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 rounded-full bg-white text-primary-700 font-semibold hover:scale-105 transition"
              >
                {t("cta_partner_btn")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
