import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM
   Warm saffron / ink black / cream palette,
   editorial serif headlines, clean sans body.
   Inspired by Indian advocacy print culture.
───────────────────────────────────────────── */

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

  const display = target.includes('K') ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}K` : `${count}`;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const impactStats = [
  { value: '12K', suffix: '+', label: 'Users Reached', icon: '👥' },
  { value: '400', suffix: '+', label: 'Markets in Delhi & Jaipur', icon: '🏙️' },
  { value: '92', suffix: '%', label: 'Complaint Resolution Rate', icon: '⚖️' },
  { value: '10000', suffix: '+', label: 'Vendors Trained', icon: '📊' },
];

const pillars = [
  {
    icon: '📚',
    title: 'Legal Awareness and Empowerment',
    body:
      'The app provides simplified information on vendor rights, responsibilities, and protections under the Street Vendors Act. Through multimedia resources and easy-to-understand guidance, vendors can better assert their legal standing. In addition, Jeevika conducts on-ground legal aid camps across markets, offering direct interaction with legal experts, rights training sessions, and hands-on guidance for documentation and grievance filing. By combining app-based learning with physical outreach, Jeevika strengthens both awareness and confidence among vendors.',
  },
  {
    icon: '👥',
    title: 'Community Mobilisation',
    body:
      'Jeevika enables peer-driven support networks. Vendors can connect in real time, document incidents, and build collective resilience against unlawful eviction or confiscation.',
  },
  {
    icon: '⚖️',
    title: 'Structured Pro Bono Legal Aid',
    body:
      'Vendors can file complaints directly through the app, including audio submissions and document uploads. Each verified complaint is assigned for structured follow-up, legal strategy development, and court representation where required.',
  },
  {
    icon: '🌍',
    title: 'Designed for Accessibility and Inclusion',
    body:
      'Jeevika was built to reach the most marginalised street vendors, including those with limited literacy, limited digital familiarity, and minimal access to formal legal systems. Vendors can record complaints in audio format instead of drafting written submissions. Bright visual design and large fonts ensure usability in outdoor working conditions. By combining intuitive technology with on-ground legal aid camps and direct outreach, Jeevika ensures that access to legal protection is not restricted by literacy, cost, or digital skill. The aim is not merely to provide information, but to ensure that even the most vulnerable vendor can confidently seek support.',
  },
];

const timeline = [
  { year: '2004', icon: '🚀', title: 'Jeevika Campaign Launched', body: 'Centre for Civil Society launches Jeevika to advocate for livelihood freedom and street vendor rights.' },
  { year: '2004', icon: '🎬', title: 'First Documentary Festival', body: 'Inaugural Asia Livelihood Documentary Festival brings livelihood issues to cinema.' },
  { year: '2009', icon: '📢', title: 'National Advocacy Begins', body: 'Intensified advocacy for national street vendor legislation, working with vendor unions nationwide.' },
  { year: '2011', icon: '🎓', title: 'Fellowship Program', body: 'Jeevika Fellowship for law students launched to provide legal aid to street vendors.' },
  { year: '2014', icon: '🏆', title: 'Street Vendors Act Passed', body: 'Historic victory — Parliament enacts the Street Vendors (Protection of Livelihood) Act.' },
  { year: '2015', icon: '🎋', title: 'Bamboo Campaign', body: '"Bamboo is not a Tree" campaign leads to successful reclassification.' },
  { year: '2020', icon: '🛡️', title: 'COVID-19 Response', body: 'Advocacy for vendor support during the pandemic including PM SVANidhi scheme.' },
  { year: '2023', icon: '📱', title: 'Jeevika App Launched', body: 'Technology platform launched on 21 January 2023, reaching 12,000+ users across 400+ markets.' },
];

const awards = [
  { year: '2024', award: 'Data for Good Exchange Award', body: 'Dasra and Bloomberg' },
  { year: '2021', award: 'Asia Liberty Award', body: 'Atlas Network' },
  { year: '2021', award: 'Templeton Freedom Award', body: 'Templeton Foundation' },
];

const coreValues = [
  { icon: '⚖️', title: 'Economic Freedom', desc: 'Every individual has the fundamental right to pursue an honest livelihood without unnecessary regulatory barriers.' },
  { icon: '🤝', title: 'Grassroots Empowerment', desc: 'We work directly with communities, amplifying the voices of street vendors in policy discussions.' },
  { icon: '📊', title: 'Evidence-Based Advocacy', desc: 'Our campaigns are grounded in rigorous research, data analysis, and real-world experiences of those we serve.' },
  { icon: '🌟', title: 'Innovation', desc: 'Creative approaches—documentary festivals, tech platforms, fellowships—drive systemic social change.' },
  { icon: '🎯', title: 'Impact-Driven', desc: 'We measure success by real policy changes and improved lives, not activities or outputs.' },
  { icon: '🔍', title: 'Transparency', desc: 'We openly share our research, findings, and methodologies, maintaining accountability to those we serve.' },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function About() {
  return (
    <div style={{ background: COLORS.cream, fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="pt-20">

      {/* ═══════════════════════════════════════
          PAGE HEADER — Subpage style
      ═══════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: `1px solid ${COLORS.stoneLight}` }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
<h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 12, lineHeight: 1.2 }}>
            About Jeevika
          </h1>
          <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.6, maxWidth: 560 }}>
            A technology-enabled platform for legal dignity — reaching street vendors across Delhi and Jaipur with awareness, legal aid, and community support.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/get-involved"
              className="transition-opacity hover:opacity-90"
              style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="transition-opacity hover:opacity-90"
              style={{ border: `2px solid ${COLORS.ink}`, color: COLORS.ink, fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
            >
              Donate
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
            <Label>Impact</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 20 }}>
              Our Reach and Results
            </h2>
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.8, marginBottom: 48, maxWidth: 720 }}>
              Since its launch, Jeevika has reached over 12,000 users across 400+ markets in Delhi and Jaipur, achieving a 92 percent complaint resolution rate. More than 10,000 vendors have been trained on their legal rights through a combination of app engagement and legal aid camps.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: COLORS.stoneLight, boxShadow: '0 4px 24px rgba(26,18,8,0.08)' }}>
            {impactStats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div
                  style={{
                    padding: '40px 28px',
                    background: i % 2 === 1 ? COLORS.saffronMist : '#fff',
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: COLORS.saffron, lineHeight: 1 }}>
                    <Counter target={s.value} />{s.suffix}
                  </div>
                  <div style={{ color: COLORS.stone, fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
                    {s.label}
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
              <div style={{ fontSize: 36, flexShrink: 0 }}>💡</div>
              <div>
                <p style={{ color: COLORS.stoneLight, fontWeight: 700, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Ripple Effect
                </p>
                <p style={{ color: '#fff', fontSize: 17, lineHeight: 1.75 }}>
                  When a vendor in <strong style={{ color: COLORS.saffronLight }}>Yusuf Sarai</strong> challenged an eviction notice, the resulting stay order protected <strong style={{ color: COLORS.saffronLight }}>27 other vendors</strong> operating in the same area — demonstrating the wider systemic ripple effect of strategic legal action.
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
              <Label>About Jeevika</Label>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 24, lineHeight: 1.2 }}>
                Why Jeevika Was Created
              </h2>
              <Divider />
              <p style={{ color: COLORS.inkMid, lineHeight: 1.9, fontSize: 17, marginBottom: 20 }}>
                Street vending is central to the functioning of Indian cities. Vendors provide affordable goods and services at locations that millions depend on every day. Despite this essential role, they often face eviction, confiscation of goods, harassment, and informal penalties from local authorities.
              </p>
              <p style={{ color: COLORS.inkMid, lineHeight: 1.9, fontSize: 17 }}>
                In 2014, Parliament enacted the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act to safeguard vendor rights and establish a uniform national framework. However, gaps in implementation, low legal awareness, and weak enforcement mechanisms have limited its effectiveness. Vendors frequently do not approach lawyers due to high costs, procedural complexity, and lack of information. Many instances of harassment go undocumented and unchallenged.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: -16, right: -16, width: '80%', height: '80%', background: COLORS.saffronMist, borderRadius: 16, zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, background: COLORS.ink, borderRadius: 16, padding: '40px 36px' }}>
                  <p style={{ color: COLORS.saffron, fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
                    Launched 21 January 2023
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#fff', lineHeight: 1.7, marginBottom: 24 }}>
                    The Jeevika App was launched by the Centre for Civil Society to bridge this gap between legal protection and lived reality. Jeevika uses technology to make legal dignity accessible, responsive, and scalable.
                  </p>
                  <p style={{ color: COLORS.stoneLight, fontSize: 14, fontWeight: 600 }}>
                    — Centre for Civil Society
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
            <Label>Our Approach</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>
              How Jeevika Works
            </h2>
            <p style={{ color: COLORS.stone, fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
              Jeevika integrates three core pillars — and a relentless focus on accessibility and inclusion.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(26,18,8,0.1)' }}
                  transition={{ duration: 0.3 }}
                  style={{ background: '#fff', borderRadius: 16, padding: '40px 36px', borderLeft: `5px solid ${COLORS.saffron}`, boxShadow: '0 2px 16px rgba(26,18,8,0.05)', height: '100%' }}
                >
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ color: COLORS.stone, lineHeight: 1.8, fontSize: 15 }}>{p.body}</p>
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
            <Label>What Drives Us</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 56 }}>
              Core Values
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.09}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  style={{ background: i % 3 === 1 ? COLORS.ink : COLORS.cream, borderRadius: 14, padding: '32px 28px', minHeight: 200 }}
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 19, fontWeight: 700, color: i % 3 === 1 ? COLORS.saffron : COLORS.ink, marginBottom: 10 }}>
                    {v.title}
                  </h3>
                  <p style={{ color: i % 3 === 1 ? COLORS.stoneLight : COLORS.stone, lineHeight: 1.75, fontSize: 14 }}>
                    {v.desc}
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
      <section style={{ background: COLORS.cream, padding: '96px 0' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <Label>Our Journey</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 64 }}>
              Two Decades of Impact
            </h2>
          </FadeIn>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${COLORS.saffron}, ${COLORS.stoneLight})`, borderRadius: 2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 36, paddingLeft: 72 }}>
              {timeline.map((t, i) => (
                <FadeIn key={`${t.year}-${t.title}`} delay={i * 0.07} direction="right">
                  <div style={{ position: 'relative' }}>
                    {/* Dot */}
                    <div style={{ position: 'absolute', left: -72, top: 6, width: 40, height: 40, borderRadius: '50%', background: i === timeline.length - 1 ? COLORS.saffron : '#fff', border: `3px solid ${COLORS.saffron}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 4px 12px rgba(232,118,10,0.2)' }}>
                      {t.icon}
                    </div>
                    <div>
                      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 800, fontSize: 13, color: COLORS.saffron, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {t.year}
                      </span>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, color: COLORS.ink, margin: '4px 0 8px' }}>
                        {t.title}
                      </h3>
                      <p style={{ color: COLORS.stone, lineHeight: 1.75, fontSize: 15 }}>{t.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RECOGNITION
      ═══════════════════════════════════════ */}
      <section style={{ background: COLORS.ink, padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <Label>Recognition</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: 20 }}>
              Awards & Honours
            </h2>
            <p style={{ color: COLORS.stoneLight, fontSize: 17, lineHeight: 1.8, marginBottom: 48, maxWidth: 680 }}>
              The Jeevika initiative has received national and international recognition for advancing livelihood freedom and legal empowerment.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <FadeIn key={a.award} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderTop: `4px solid ${COLORS.saffron}`, background: COLORS.inkMid, borderRadius: 12, padding: '32px 28px' }}
                >
                  <p style={{ color: COLORS.saffron, fontWeight: 800, fontSize: 28, fontFamily: 'Georgia, serif', marginBottom: 12 }}>{a.year}</p>
                  <h3 style={{ color: '#fff', fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{a.award}</h3>
                  <p style={{ color: COLORS.stoneLight, fontSize: 14 }}>{a.body}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 64, padding: '40px 48px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, borderLeft: `4px solid ${COLORS.saffron}` }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#fff', lineHeight: 1.8 }}>
                Jeevika represents a technology-enabled model for legal dignity. By combining awareness, documentation, community mobilisation, legal aid camps, and structured pro bono support, it strengthens economic security for vendors while advancing accountability in urban governance.
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
            <div style={{ fontSize: 56, marginBottom: 24 }}>🏛️</div>
            <Label>Our Parent Organisation</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 24 }}>
              Powered by Centre for Civil Society
            </h2>
            <Divider />
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.9, marginBottom: 40, maxWidth: 660, marginLeft: 'auto', marginRight: 'auto' }}>
              Jeevika is an initiative of the Centre for Civil Society (CCS), India's leading public policy think tank working to promote individual liberty, livelihood freedom, and accountable governance. Through research, advocacy, legal empowerment, and digital innovation, CCS drives systemic reforms that protect the rights of informal workers and street vendors.
            </p>
            <a
              href="https://ccs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
              style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 40px', borderRadius: 8, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Visit CCS Website
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
                Support Livelihood Freedom
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 12, maxWidth: 480 }}>
                Help us expand legal access, protect vendor rights, and scale the Jeevika App across more cities in India.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }} className="flex-wrap">
                <Link to="/get-involved" className="transition-opacity hover:opacity-90" style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }}>
                  Get Involved
                </Link>
                <Link to="/donate" className="transition-opacity hover:opacity-90" style={{ border: '2px solid #fff', color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }}>
                  Donate Now
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}