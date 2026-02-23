import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, Briefcase, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  saffron: '#E8760A', saffronLight: '#FFA830', saffronMist: '#FFF5E8',
  ink: '#1A1208', inkMid: '#3D2C12', cream: '#FAF6F0',
  stone: '#8C7A60', stoneLight: '#C4B49A',
};

const iconMap = [
  { icon: Users },
  { icon: Briefcase },
  { icon: Globe },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useTranslation();

  const features = [
    { icon: Users, title: t("feature_1_title"), description: t("feature_1_desc") },
    { icon: Briefcase, title: t("feature_2_title"), description: t("feature_2_desc") },
    { icon: Globe, title: t("feature_3_title"), description: t("feature_3_desc") },
  ];

  return (
    <section
      id="about"
      style={{ background: COLORS.cream, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
      className="py-28 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.saffronMist}, transparent)`, transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.saffronMist}, transparent)`, transform: "translate(-30%, 30%)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Label pill */}
          {/* <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{ background: COLORS.saffronMist, border: `1.5px solid ${COLORS.saffronLight}` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.saffron }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.saffron }}>
              What We Do
            </span>
          </div> */}

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: COLORS.ink, lineHeight: 1.2, marginBottom: 16 }}>
            {t("about_title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: COLORS.stone }}>
            {t("about_desc")}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16" style={{ background: COLORS.stoneLight }} />
            <div className="w-2 h-2 rounded-full" style={{ background: COLORS.saffron }} />
            <div className="h-px w-16" style={{ background: COLORS.stoneLight }} />
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            const meta = iconMap[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.65 }}
                whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(26,18,8,0.12)" }}
                className="group relative rounded-3xl p-8 transition-all duration-300"
                style={{ background: "#fff", border: `1px solid ${COLORS.stoneLight}33`, boxShadow: "0 4px 20px rgba(26,18,8,0.06)" }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${COLORS.saffron}, transparent)` }} />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: COLORS.saffronMist }}>
                  <Icon className="w-7 h-7" style={{ color: COLORS.saffron }} />
                </div>

                <h3 className="text-xl font-bold mb-3 transition-colors"
                  style={{ fontFamily: "Georgia, serif", color: COLORS.ink }}>
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: COLORS.stone }}>
                  {item.description}
                </p>

                {/* Subtle arrow appears on hover */}
                <div className="mt-5 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: COLORS.saffron }}>
                  <span className="text-xs font-semibold">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA link */}
        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-14"
        >
          <Link to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
            style={{ color: COLORS.saffron }}>
            <span>Read our full story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
