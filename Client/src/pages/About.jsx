import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Users, Building2, Scale, BarChart3,
  BookOpen, Globe, Handshake, Star, Target, Search,
  Rocket, Film, Megaphone, GraduationCap, Trophy, Leaf, Shield, Smartphone,
  Lightbulb, Landmark,
} from 'lucide-react';

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

/* ── Reusable fade-in wrapper ── */
const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
      x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Section label ── */
const Label = ({ children }) => (
  <p
    style={{ color: COLORS.saffron, letterSpacing: '0.18em', fontFamily: 'Georgia, serif' }}
    className="text-xs font-semibold uppercase mb-3 tracking-widest"
  >
    {children}
  </p>
);

/* ── Divider ── */
const Divider = () => (
  <div className="flex items-center gap-3 my-4">
    <div style={{ width: 40, height: 3, background: COLORS.saffron, borderRadius: 2 }} />
    <div style={{ width: 8, height: 8, background: COLORS.saffronLight, borderRadius: '50%' }} />
  </div>
);

/* ─────────────────────────────────────────────
   FLOATING PARTICLE — loops infinitely up the line
───────────────────────────────────────────── */
const FloatingParticle = ({ delay = 0, duration = 4, size = 4, left = 18 }) => (
  <motion.div
    initial={{ top: '100%', opacity: 0 }}
    animate={{ top: '-5%', opacity: [0, 0.9, 0.9, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    style={{
      position: 'absolute', left, width: size, height: size,
      borderRadius: '50%', background: COLORS.saffron,
      boxShadow: `0 0 ${size * 2}px ${COLORS.saffron}`,
      pointerEvents: 'none', zIndex: 5,
    }}
  />
);

/* ─────────────────────────────────────────────
   TIMELINE ITEM — ∞ orbit ring + breathing card
───────────────────────────────────────────── */
const TimelineItem = ({ item, index, total, t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLast = index === total - 1;
  const fromRight = index % 2 !== 0;

  /* ── one-shot variants ── */
  const cardVariants = {
    hidden: { opacity: 0, x: fromRight ? 60 : -60, scale: 0.92, rotateY: fromRight ? 6 : -6 },
    visible: {
      opacity: 1, x: 0, scale: 1, rotateY: 0,
      transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
    },
  };
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1, opacity: 1,
      transition: { type: 'spring', stiffness: 350, damping: 18, delay: 0.02 }
    },
  };
  const yearVariants = {
    hidden: { opacity: 0, y: -14, scale: 0.8 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.5, delay: 0.08, ease: 'easeOut' }
    },
  };
  const bodyVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.55, delay: 0.3, ease: 'easeOut' }
    },
  };

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 52 }}>

      {/* ── Dot column ── */}
      <div style={{ flexShrink: 0, position: 'relative', width: 44, height: 44, marginTop: 4 }}>

        {/* ∞ Orbit ring — spins forever once visible */}
        {isInView && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -6, borderRadius: '50%',
              border: `1.5px dashed ${COLORS.saffron}55`,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Pulse ring burst (one-shot) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0.9 }}
          animate={isInView ? { scale: 2.6, opacity: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: `2px solid ${COLORS.saffron}`, pointerEvents: 'none'
          }}
        />
        {/* Second pulse (one-shot) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={isInView ? { scale: 3.2, opacity: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: `1.5px solid ${COLORS.saffronLight}`, pointerEvents: 'none'
          }}
        />

        {/* ∞ subtle glow pulse on the dot itself */}
        <motion.div
          variants={dotVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.2, boxShadow: '0 0 0 10px rgba(232,118,10,0.15)' }}
          style={{
            position: 'relative', zIndex: 2,
            width: 44, height: 44, borderRadius: '50%',
            background: isLast ? COLORS.saffron : '#fff',
            border: `3px solid ${COLORS.saffron}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(232,118,10,0.3)',
          }}
        >
          {isInView && (
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(232,118,10,0.3)',
                  '0 0 0 8px rgba(232,118,10,0)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              style={{ position: 'absolute', inset: 0, borderRadius: '50%', pointerEvents: 'none' }}
            />
          )}
          <item.Icon className="w-4.5 h-4.5" style={{ color: isLast ? '#fff' : COLORS.saffron }} />
        </motion.div>
      </div>

      {/* ── Content card — breathes once visible ── */}
      <motion.div
        variants={cardVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
        whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(26,18,8,0.16)' }}
        style={{
          flex: 1, perspective: 600,
          background: isLast ? COLORS.inkMid : '#fff',
          borderRadius: 16, padding: '24px 28px',
          borderLeft: `4px solid ${COLORS.saffron}`,
          boxShadow: '0 2px 16px rgba(26,18,8,0.06)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Year pill */}
        <motion.span
          variants={yearVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'inline-block', fontFamily: 'Georgia, serif',
            fontWeight: 800, fontSize: 11,
            color: isLast ? COLORS.saffronLight : COLORS.saffron,
            textTransform: 'uppercase', letterSpacing: '0.15em',
            background: isLast ? 'rgba(232,118,10,0.18)' : COLORS.saffronMist,
            padding: '4px 12px', borderRadius: 99, marginBottom: 10,
          }}
        >
          {item.year}
        </motion.span>

        <h3 style={{
          fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700,
          color: isLast ? '#fff' : COLORS.ink, margin: '0 0 8px',
        }}>
          {t(item.titleKey)}
        </h3>

        <motion.p
          variants={bodyVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          style={{ color: isLast ? COLORS.stoneLight : COLORS.stone, lineHeight: 1.75, fontSize: 14, margin: 0 }}
        >
          {t(item.bodyKey)}
        </motion.p>

        {/* ∞ breathing shimmer bar at bottom */}
        {isInView && (
          <motion.div
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              marginTop: 16, height: 2, borderRadius: 2,
              background: `linear-gradient(90deg, transparent, ${COLORS.saffron}, transparent)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   TIMELINE SECTION
   scroll-driven fill + infinite floating particles
───────────────────────────────────────────── */
const TimelineSection = ({ timeline, t }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 24 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  /* pre-compute particle configs so they're stable across renders */
  const particles = useMemo(() => [
    { delay: 0, duration: 5, size: 3, left: 17 },
    { delay: 1.3, duration: 4.5, size: 5, left: 19 },
    { delay: 2.6, duration: 5.5, size: 3, left: 21 },
    { delay: 0.7, duration: 6, size: 4, left: 18 },
    { delay: 3.2, duration: 4, size: 3, left: 20 },
    { delay: 1.8, duration: 5.2, size: 4, left: 17 },
  ], []);

  return (
    <section ref={sectionRef} style={{ background: COLORS.cream, padding: '96px 0', overflow: 'hidden' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <Label>{t('about_journey_label')}</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 64 }}>
            {t('about_journey_heading')}
          </h2>
        </FadeIn>

        <div style={{ position: 'relative', paddingLeft: 68 }}>

          {/* ── Static faint track ── */}
          <div style={{
            position: 'absolute', left: 21, top: 0, bottom: 0,
            width: 2, background: `${COLORS.stoneLight}44`, borderRadius: 2,
          }} />

          {/* ── Scroll-driven saffron fill ── */}
          <motion.div style={{
            position: 'absolute', left: 21, top: 0,
            width: 2, borderRadius: 2,
            height: lineHeight,
            background: `linear-gradient(to bottom, ${COLORS.saffron}, ${COLORS.saffronLight})`,
            transformOrigin: 'top',
          }} />

          {/* ── ∞ Floating particles travelling up the line ── */}
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} />
          ))}

          {/* ── Glowing travelling dot ── */}
          <motion.div style={{
            position: 'absolute', left: 12, top: lineHeight,
            width: 20, height: 20, borderRadius: '50%',
            background: COLORS.saffron,
            translateY: '-50%', zIndex: 10,
          }}>
            {/* ∞ pulsing glow */}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 0 0px rgba(232,118,10,0.5), 0 0 12px rgba(232,118,10,0.7)`,
                  `0 0 0 10px rgba(232,118,10,0), 0 0 24px rgba(232,118,10,0.3)`,
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: COLORS.saffron,
              }}
            />
          </motion.div>

          {/* ── Timeline items ── */}
          {timeline.map((item, i) => (
            <TimelineItem
              key={`${item.year}-${item.titleKey}`}
              item={item} index={i} total={timeline.length} t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────────── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ''), 10) || 0;
    const duration = 1600;
    const steps = 50;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, num);
      setCount(Math.floor(current));
      if (current >= num) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target.includes('K') ? `${count}K` : `${count}`;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function About() {
  const { t } = useTranslation();

  const impactStats = useMemo(() => [
    { value: '12K', suffix: '+', labelKey: 'about_stat_users', Icon: Users },
    { value: '400', suffix: '+', labelKey: 'about_stat_markets', Icon: Building2 },
    { value: '92', suffix: '%', labelKey: 'about_stat_resolution', Icon: Scale },
    { value: '10000', suffix: '+', labelKey: 'about_stat_trained', Icon: BarChart3 },
  ], []);

  const pillars = useMemo(() => [
    { Icon: BookOpen, titleKey: 'about_pillar_1_title', bodyKey: 'about_pillar_1_body' },
    { Icon: Users, titleKey: 'about_pillar_2_title', bodyKey: 'about_pillar_2_body' },
    { Icon: Scale, titleKey: 'about_pillar_3_title', bodyKey: 'about_pillar_3_body' },
    { Icon: Globe, titleKey: 'about_pillar_4_title', bodyKey: 'about_pillar_4_body' },
  ], []);

  const timeline = useMemo(() => [
    { year: '2004', Icon: Rocket, titleKey: 'about_timeline_1_title', bodyKey: 'about_timeline_1_body' },
    { year: '2004', Icon: Film, titleKey: 'about_timeline_2_title', bodyKey: 'about_timeline_2_body' },
    { year: '2009', Icon: Megaphone, titleKey: 'about_timeline_3_title', bodyKey: 'about_timeline_3_body' },
    { year: '2011', Icon: GraduationCap, titleKey: 'about_timeline_4_title', bodyKey: 'about_timeline_4_body' },
    { year: '2014', Icon: Trophy, titleKey: 'about_timeline_5_title', bodyKey: 'about_timeline_5_body' },
    { year: '2015', Icon: Leaf, titleKey: 'about_timeline_6_title', bodyKey: 'about_timeline_6_body' },
    { year: '2020', Icon: Shield, titleKey: 'about_timeline_7_title', bodyKey: 'about_timeline_7_body' },
    { year: '2023', Icon: Smartphone, titleKey: 'about_timeline_8_title', bodyKey: 'about_timeline_8_body' },
  ], []);

  const awards = useMemo(() => [
    { year: '2024', awardKey: 'about_award_1', bodyKey: 'about_award_1_body' },
    { year: '2021', awardKey: 'about_award_2', bodyKey: 'about_award_2_body' },
    { year: '2021', awardKey: 'about_award_3', bodyKey: 'about_award_3_body' },
  ], []);

  const coreValues = useMemo(() => [
    { Icon: Scale, titleKey: 'about_value_1_title', descKey: 'about_value_1_desc' },
    { Icon: Handshake, titleKey: 'about_value_2_title', descKey: 'about_value_2_desc' },
    { Icon: BarChart3, titleKey: 'about_value_3_title', descKey: 'about_value_3_desc' },
    { Icon: Star, titleKey: 'about_value_4_title', descKey: 'about_value_4_desc' },
    { Icon: Target, titleKey: 'about_value_5_title', descKey: 'about_value_5_desc' },
    { Icon: Search, titleKey: 'about_value_6_title', descKey: 'about_value_6_desc' },
  ], []);

  return (
    <div style={{ background: COLORS.cream, fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="pt-20">

      {/* ═══════════════════════════════════════
          PAGE HEADER — Subpage style
      ═══════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: `1px solid ${COLORS.stoneLight}` }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">

          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 12, lineHeight: 1.2 }}>
            {t('about_page_title')}
          </h1>
          <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.6, maxWidth: 560 }}>
            {t('about_page_tagline')}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/get-involved"
              className="transition-opacity hover:opacity-90"
              style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
            >
              {t('about_page_get_involved')}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          IMPACT NUMBERS
      ═══════════════════════════════════════ */}
      <section style={{ background: COLORS.cream, padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <Label>{t('about_impact_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 20 }}>
              {t('about_impact_heading')}
            </h2>
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.8, marginBottom: 48, maxWidth: 720 }}>
              {t('about_impact_intro')}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: COLORS.stoneLight, boxShadow: '0 4px 24px rgba(26,18,8,0.08)' }}>
            {impactStats.map((s, i) => (
              <FadeIn key={s.labelKey} delay={i * 0.1}>
                <div
                  style={{
                    padding: '40px 28px',
                    background: i % 2 === 1 ? COLORS.saffronMist : '#fff',
                  }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <s.Icon className="w-8 h-8" style={{ color: COLORS.saffron }} />
                  </div>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: COLORS.saffron, lineHeight: 1 }}>
                    <Counter target={s.value} />{s.suffix}
                  </div>
                  <div style={{ color: COLORS.stone, fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
                    {t(s.labelKey)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Case study callout */}
          <FadeIn delay={0.4}>
            <div
              style={{ background: COLORS.inkMid, borderRadius: 16, padding: '36px 44px', marginTop: 48, display: 'flex', alignItems: 'flex-start', gap: 24, borderLeft: `4px solid ${COLORS.saffron}` }}
            >
              <div style={{ flexShrink: 0 }}>
                <Lightbulb className="w-9 h-9" style={{ color: COLORS.saffron }} />
              </div>
              <div>
                <p style={{ color: COLORS.stoneLight, fontWeight: 700, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {t('about_case_label')}
                </p>
                <p style={{ color: '#fff', fontSize: 17, lineHeight: 1.75 }}>
                  {t('about_case_text')}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION — TWO COLUMNS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <Label>{t('about_mission_label')}</Label>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 24, lineHeight: 1.2 }}>
                {t('about_mission_heading')}
              </h2>
              <Divider />
              <p style={{ color: COLORS.inkMid, lineHeight: 1.9, fontSize: 17, marginBottom: 20 }}>
                {t('about_mission_p1')}
              </p>
              <p style={{ color: COLORS.inkMid, lineHeight: 1.9, fontSize: 17 }}>
                {t('about_mission_p2')}
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: -16, right: -16, width: '80%', height: '80%', background: COLORS.saffronMist, borderRadius: 16, zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, background: COLORS.ink, borderRadius: 16, padding: '40px 36px' }}>
                  <p style={{ color: COLORS.saffron, fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
                    {t('about_quote_date')}
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#fff', lineHeight: 1.7, marginBottom: 24 }}>
                    {t('about_quote_text')}
                  </p>
                  <p style={{ color: COLORS.stoneLight, fontSize: 14, fontWeight: 600 }}>
                    {t('about_quote_attr')}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR APPROACH — 4 PILLARS
      ═══════════════════════════════════════ */}
      <section style={{ background: COLORS.saffronMist, padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <Label>{t('about_approach_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>
              {t('about_approach_heading')}
            </h2>
            <p style={{ color: COLORS.stone, fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
              {t('about_approach_sub')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.titleKey} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(26,18,8,0.1)' }}
                  transition={{ duration: 0.3 }}
                  style={{ background: '#fff', borderRadius: 16, padding: '40px 36px', borderLeft: `5px solid ${COLORS.saffron}`, boxShadow: '0 2px 16px rgba(26,18,8,0.05)', height: '100%' }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <p.Icon className="w-10 h-10" style={{ color: COLORS.saffron }} />
                  </div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>{t(p.titleKey)}</h3>
                  <p style={{ color: COLORS.stone, lineHeight: 1.8, fontSize: 15 }}>{t(p.bodyKey)}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CORE VALUES — GRID
      ═══════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <Label>{t('about_values_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 56 }}>
              {t('about_values_heading')}
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <FadeIn key={v.titleKey} delay={i * 0.09}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  style={{ background: i % 3 === 1 ? COLORS.ink : COLORS.cream, borderRadius: 14, padding: '32px 28px', minHeight: 200 }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <v.Icon
                      className="w-8 h-8"
                      style={{ color: i % 3 === 1 ? COLORS.saffron : COLORS.saffron }}
                    />
                  </div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 19, fontWeight: 700, color: i % 3 === 1 ? COLORS.saffron : COLORS.ink, marginBottom: 10 }}>
                    {t(v.titleKey)}
                  </h3>
                  <p style={{ color: i % 3 === 1 ? COLORS.stoneLight : COLORS.stone, lineHeight: 1.75, fontSize: 14 }}>
                    {t(v.descKey)}
                  </p>
                </motion.div>

              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE
      ═══════════════════════════════════════ */}
      <TimelineSection timeline={timeline} t={t} />

      {/* ═══════════════════════════════════════
          RECOGNITION
      ═══════════════════════════════════════ */}
      <section style={{ background: COLORS.ink, padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <Label>{t('about_recognition_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: 20 }}>
              {t('about_recognition_heading')}
            </h2>
            <p style={{ color: COLORS.stoneLight, fontSize: 17, lineHeight: 1.8, marginBottom: 48, maxWidth: 680 }}>
              {t('about_recognition_intro')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <FadeIn key={a.awardKey} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderTop: `4px solid ${COLORS.saffron}`, background: COLORS.inkMid, borderRadius: 12, padding: '32px 28px' }}
                >
                  <p style={{ color: COLORS.saffron, fontWeight: 800, fontSize: 28, fontFamily: 'Georgia, serif', marginBottom: 12 }}>{a.year}</p>
                  <h3 style={{ color: '#fff', fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{t(a.awardKey)}</h3>
                  <p style={{ color: COLORS.stoneLight, fontSize: 14 }}>{t(a.bodyKey)}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 64, padding: '40px 48px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, borderLeft: `4px solid ${COLORS.saffron}` }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#fff', lineHeight: 1.8 }}>
                {t('about_closing_text')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CCS POWERED BY
      ═══════════════════════════════════════ */}
      <section style={{ background: COLORS.cream, padding: '96px 0' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
              <Landmark className="w-14 h-14" style={{ color: COLORS.saffron }} />
            </div>
            <Label>{t('about_ccs_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 24 }}>
              {t('about_ccs_heading')}
            </h2>
            <Divider />
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.9, marginBottom: 40, maxWidth: 660, marginLeft: 'auto', marginRight: 'auto' }}>
              {t('about_ccs_desc')}
            </p>
            <a
              href="https://ccs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
              style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 40px', borderRadius: 8, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              {t('about_ccs_btn')}
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FOOTER BAND
      ═══════════════════════════════════════ */}
      <section style={{ background: COLORS.saffron, padding: '72px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <FadeIn direction="right">
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                {t('about_cta_heading')}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 12, maxWidth: 480 }}>
                {t('about_cta_desc')}
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }} className="flex-wrap">
                <Link to="/get-involved" className="transition-opacity hover:opacity-90" style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }}>
                  {t('about_cta_get_involved')}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}