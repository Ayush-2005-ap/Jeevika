import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Scale, ShoppingCart, Handshake, ArrowRight } from "lucide-react";

const COLORS = {
  saffron: '#E8760A', saffronLight: '#FFA830', saffronMist: '#FFF5E8',
  ink: '#1A1208', inkMid: '#3D2C12', cream: '#FAF6F0',
  stone: '#8C7A60', stoneLight: '#C4B49A',
};

const cards = [
  {
    Icon: Scale,
    titleKey: "cta_lawyer_title",
    descKey: "cta_lawyer_desc",
    btnKey: "cta_lawyer_btn",
    type: "link",
    to: "/get-involved",
    accent: "#E8760A",
    bg: "#FFF5E8",
    badge: "Legal Professional",
  },
  {
    Icon: ShoppingCart,
    titleKey: "cta_vendor_title",
    descKey: "cta_vendor_desc",
    btnKey: "cta_vendor_btn",
    type: "anchor",
    href: "https://play.google.com/store/apps/details?id=com.jeevika&pcampaignid=web_share",
    accent: "#1A7A4A",
    bg: "#EDFAF3",
    badge: "Street Vendor",
    featured: true,
  },
  {
    Icon: Handshake,
    titleKey: "cta_partner_title",
    descKey: "cta_partner_desc",
    btnKey: "cta_partner_btn",
    type: "link",
    to: "/contact",
    accent: "#1A4A7A",
    bg: "#EDF2FA",
    badge: "Organisation",
  },
];

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useTranslation();

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: COLORS.inkMid }}>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(232,118,10,0.8) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(232,118,10,0.07), transparent 70%)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">

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
              How You Can Help
            </span>
          </div> */}

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            {t("cta_title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: COLORS.stoneLight }}>
            {t("cta_desc")}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.65 }}
                whileHover={{ y: -8, boxShadow: `0 24px 60px rgba(0,0,0,0.28)` }}
                className={`relative group rounded-3xl p-8 flex flex-col transition-all duration-300 ${card.featured ? "ring-2 ring-offset-2 ring-offset-transparent" : ""}`}
                style={{
                  background: "#fff",
                  ringColor: card.featured ? card.accent : undefined,
                  boxShadow: card.featured ? `0 8px 40px rgba(26,122,74,0.25)` : "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                {/* Featured badge */}
                {card.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                    style={{ background: card.accent, color: "#fff" }}>
                    ⭐ Most Popular
                  </div>
                )}

                {/* Type badge */}
                <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full self-start text-xs font-semibold"
                  style={{ background: COLORS.saffronMist, color: COLORS.saffron }}>
                  {card.badge}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: COLORS.saffronMist }}>
                  <Icon className="w-7 h-7" style={{ color: COLORS.saffron }} />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif", color: COLORS.ink }}>
                  {t(card.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: COLORS.stone }}>
                  {t(card.descKey)}
                </p>

                {/* CTA button  */}
                {card.type === "link" ? (
                  <Link to={card.to}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ background: card.accent, color: "#fff" }}>
                    {t(card.btnKey)} <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a href={card.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ background: card.accent, color: "#fff" }}>
                    {t(card.btnKey)} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default CTA;
