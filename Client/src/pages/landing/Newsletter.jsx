import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, ArrowRight, CheckCircle, Heart } from "lucide-react";

const COLORS = {
  saffron: '#E8760A', saffronLight: '#FFA830', saffronMist: '#FFF5E8',
  ink: '#1A1208', inkMid: '#3D2C12', cream: '#FAF6F0',
  stone: '#8C7A60', stoneLight: '#C4B49A',
};

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-28" style={{ background: COLORS.saffronMist }}>

      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.saffronLight}55, transparent)` }} />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.saffron}33, transparent)` }} />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, transparent, ${COLORS.saffron}, transparent)` }} />

      <div ref={ref} className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "#fff", boxShadow: `0 8px 32px ${COLORS.saffron}25` }}>
            <Mail className="w-8 h-8" style={{ color: COLORS.saffron }} />
          </div>

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, color: COLORS.ink, lineHeight: 1.2, marginBottom: 12 }}>
            {t("newsletter_title")}
          </h2>
          <p className="max-w-xl mx-auto mb-12 text-base leading-relaxed" style={{ color: COLORS.stone }}>
            {t("newsletter_desc")}
          </p>

          {/* Subscribe form */}
          {!subscribed ? (
            <motion.form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-12 max-w-lg mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors"
                  style={{ color: focused ? COLORS.saffron : COLORS.stoneLight }} />
                <input
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                  placeholder={t("newsletter_placeholder")}
                  className="w-full pl-11 pr-4 py-3.5 rounded-full text-sm outline-none transition-all duration-200"
                  style={{
                    border: `2px solid ${focused ? COLORS.saffron : COLORS.stoneLight}`,
                    background: "#fff",
                    color: COLORS.ink,
                    boxShadow: focused ? `0 0 0 4px ${COLORS.saffron}18` : "none",
                  }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: `0 8px 24px ${COLORS.saffron}40` }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm whitespace-nowrap"
                style={{ background: COLORS.saffron, color: "#fff" }}
              >
                {t("newsletter_subscribe")} <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 mb-12 py-4 px-8 rounded-2xl mx-auto max-w-sm"
              style={{ background: "#EDFAF3", border: "1.5px solid #16A34A33" }}
            >
              <CheckCircle className="w-5 h-5" style={{ color: "#16A34A" }} />
              <span className="font-semibold text-sm" style={{ color: "#15803D" }}>
                {t("newsletter_success")}
              </span>
            </motion.div>
          )}



          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {["No spam, ever", "Unsubscribe anytime", "Privacy protected"].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-xs" style={{ color: COLORS.stone }}>
                <CheckCircle className="w-3.5 h-3.5" style={{ color: COLORS.saffron }} />
                {badge}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
