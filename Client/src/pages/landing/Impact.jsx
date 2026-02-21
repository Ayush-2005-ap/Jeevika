import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { supabase } from "../../lib/supabase";

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

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  const [stats, setStats] = useState({
    families_helped: 0,
    communities_reached: 0,
    partners: 0,
  });

  const [animatedStats, setAnimatedStats] = useState({
    families_helped: 0,
    communities_reached: 0,
    partners: 0,
  });

  useEffect(() => {
    fetchImpactStats();
  }, []);

  async function fetchImpactStats() {
    const { data, error } = await supabase.from("impact_stats").select("*");

    if (error) {
      console.error("Error fetching impact stats:", error);
      return;
    }

    const formatted = {};
    data.forEach((item) => {
      formatted[item.key] = item.value;
    });

    setStats(formatted);
  }

  // 🔥 Smooth Count Animation
  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // 1.5 sec
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setAnimatedStats({
        families_helped: Math.floor(progress * (stats.families_helped || 0)),
        communities_reached: Math.floor(progress * (stats.communities_reached || 0)),
        partners: Math.floor(progress * (stats.partners || 0)),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [isInView, stats]);

  const statList = [
    {
      label: t("impact_families"),
      value: `${Math.floor(animatedStats.families_helped / 1000)}K+`,
    },
    {
      label: t("impact_communities"),
      value: `${animatedStats.communities_reached}+`,
    },
    {
      label: t("impact_partners"),
      value: `${animatedStats.partners}+`,
    },
  ];

  return (
    <section style={{ background: COLORS.cream, paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.ink }}
        >
          {t("impact_title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {statList.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.2 }}
              className="text-center p-8 rounded-2xl shadow" style={{ background: COLORS.saffronMist, color: COLORS.ink }}
            >
              <h3 className="text-4xl font-bold" style={{ color: COLORS.saffron }}>
                {stat.value}
              </h3>
              <p className="mt-2" style={{ color: COLORS.stone }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
