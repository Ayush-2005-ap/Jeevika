import React, { useState, useRef } from "react";
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

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  return (
    <section style={{ background: COLORS.cream, paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.ink }}>
            {t("newsletter_title")}
          </h2>

          <p className="max-w-2xl mx-auto mb-10" style={{ color: COLORS.stone }}>
            {t("newsletter_desc")}
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
                placeholder={t("newsletter_placeholder")}
                className="px-5 py-3 rounded-full border w-full sm:w-80 focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full" style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s' }}
              >
                {t("newsletter_subscribe")}
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-semibold mb-10"
            >
              {t("newsletter_success")}
            </motion.p>
          )}

          {/* Donate CTA */}
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full" style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s' }}
            >
              ❤️ {t("newsletter_donate")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
