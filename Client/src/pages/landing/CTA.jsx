import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const COLORS = {
  saffron: '#E8760A',
  saffronLight: '#FFA830',
  saffronMist: '#FFF5E8',
  ink: '#1A1208',
  inkMid: '#3D2C12',
  cream: '#FAF6F0',
  stone: '#8C7A60',
  stoneLight: '#C4B49A',
};

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  return (
    <section style={{ background: COLORS.stone, color: COLORS.ink, paddingTop: '6rem', paddingBottom: '6rem' }}>
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
              style={{ background: COLORS.saffronLight, borderRadius: '1rem', padding: '2rem', border: `1px solid ${COLORS.saffronLight}` }}
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
                style={{ background: COLORS.saffron, color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s', display: 'inline-block' }}
              >
                {t("cta_lawyer_btn")}
              </Link>
            </motion.div>

            {/* Street Vendor */}
            <motion.div
              whileHover={{ y: -6 }}
              style={{ background: COLORS.saffronLight, borderRadius: '1rem', padding: '2rem', border: `1px solid ${COLORS.saffronLight}` }}
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
                style={{ background: COLORS.saffron, color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s', display: 'inline-block' }}
              >
                {t("cta_vendor_btn")}
              </a>
            </motion.div>

            {/* Partner */}
            <motion.div
              whileHover={{ y: -6 }}
              style={{background : COLORS.saffronLight}}
              className="bg-white/10  backdrop-blur rounded-2xl p-8 border border-white/20"
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
                style={{ background: COLORS.saffron, color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s', display: 'inline-block' }}
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
