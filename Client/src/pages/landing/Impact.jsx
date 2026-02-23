import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { supabase } from "../../lib/supabase";
import { TrendingUp, MapPin, CheckCircle } from "lucide-react";

const COLORS = {
  saffron: '#E8760A', saffronLight: '#FFA830', saffronMist: '#FFF5E8',
  ink: '#1A1208', inkMid: '#3D2C12', cream: '#FAF6F0',
  stone: '#8C7A60', stoneLight: '#C4B49A',
};

const icons = [TrendingUp, MapPin, CheckCircle];

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

const StatCard = ({ label, rawValue, suffix, prefix, inView, delay, icon: Icon }) => {
  const count = useCountUp(rawValue, inView, 1600);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65 }}
      whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(26,18,8,0.15)" }}
      className="relative rounded-3xl p-8 text-center overflow-hidden group transition-all duration-300"
      style={{ background: "#fff", border: `1px solid ${COLORS.stoneLight}33`, boxShadow: "0 4px 20px rgba(26,18,8,0.06)" }}
    >
      {/* Radial background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(232,118,10,0.07), transparent 70%)" }} />

      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
        style={{ background: COLORS.saffronMist }}>
        <Icon className="w-6 h-6" style={{ color: COLORS.saffron }} />
      </div>

      {/* Animated number */}
      <div className="font-black leading-none mb-2"
        style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.4rem)", color: COLORS.saffron }}>
        {prefix}{inView ? count.toLocaleString() : 0}{suffix}
      </div>

      <p className="text-sm font-medium" style={{ color: COLORS.stone }}>{label}</p>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        style={{ background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.saffronLight})` }} />
    </motion.div>
  );
};

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useTranslation();

  const [rawStats, setRawStats] = useState({ families_helped: 12000, communities_reached: 400, partners: 92 });

  useEffect(() => {
    supabase.from("impact_stats").select("*").then(({ data }) => {
      if (data?.length) {
        const fmt = {};
        data.forEach((r) => { fmt[r.key] = r.value; });
        setRawStats((p) => ({ ...p, ...fmt }));
      }
    });
  }, []);

  const stats = [
    { label: t("impact_families"), rawValue: rawStats.families_helped, suffix: "+", prefix: "", icon: icons[0] },
    { label: t("impact_communities"), rawValue: rawStats.communities_reached, suffix: "+", prefix: "", icon: icons[1] },
    { label: t("impact_partners"), rawValue: rawStats.partners, suffix: "%", prefix: "", icon: icons[2] },
  ];

  return (
    <section style={{ background: COLORS.ink }} className="py-28 relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(232,118,10,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(232,118,10,0.08), transparent 70%)" }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(232,118,10,0.15)", border: "1.5px solid rgba(232,118,10,0.35)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COLORS.saffron }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.saffronLight }}>
              Our Impact
            </span>
          </div> */}

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
            {t("impact_title")}
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} inView={isInView} delay={i * 0.15} />
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="text-4xl mb-4" style={{ color: COLORS.saffron, opacity: 0.5, fontFamily: "Georgia, serif" }}>"</div>
          <p className="text-lg italic leading-relaxed" style={{ color: COLORS.stoneLight }}>
            When a vendor in Yusuf Sarai challenged an eviction notice, the resulting stay order protected 27 other vendors — demonstrating the wider ripple effect of strategic legal action.
          </p>
          <p className="mt-4 text-sm font-semibold" style={{ color: COLORS.saffron }}>— Jeevika Case Study</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
