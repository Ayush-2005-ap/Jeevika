import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const COLORS = {
  saffron: '#E8760A', saffronLight: '#FFA830', saffronMist: '#FFF5E8',
  ink: '#1A1208', inkMid: '#3D2C12', cream: '#FAF6F0',
  stone: '#8C7A60', stoneLight: '#C4B49A',
};

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      variants={{ hidden: { opacity: 0, y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0, x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0 }, visible: { opacity: 1, y: 0, x: 0 } }}
      initial="hidden" animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
};

const Label = ({ children }) => (
  <p style={{ color: COLORS.saffron, letterSpacing: '0.18em', fontFamily: 'Georgia, serif' }} className="text-xs font-semibold uppercase mb-3 tracking-widest">{children}</p>
);

const Divider = () => (
  <div className="flex items-center gap-3 my-4">
    <div style={{ width: 40, height: 3, background: COLORS.saffron, borderRadius: 2 }} />
    <div style={{ width: 8, height: 8, background: COLORS.saffronLight, borderRadius: '50%' }} />
  </div>
);

/* ── DATA — unchanged ── */
const objectives = [
  { icon: '🎥', title: 'Document Livelihood Challenges', description: 'Capture and showcase the livelihood challenges faced by rural and urban poor across Asia through powerful documentary storytelling.' },
  { icon: '📢', title: 'Advocate for Policy Change', description: 'Bring to light policies, regulations, and social practices that limit livelihood freedom and advocate for meaningful reforms.' },
  { icon: '🌏', title: 'International Platform', description: 'Provide filmmakers from across Asia and beyond a platform to share their experiences and creativity on livelihood issues.' },
  { icon: '🎓', title: 'Encourage Student Filmmakers', description: 'Support aspiring student filmmakers by giving them opportunities to showcase their work before a captive audience.' },
  { icon: '💡', title: 'Highlight Innovative Solutions', description: 'Celebrate innovations and solutions devised by individuals, communities, and organizations to overcome regulatory challenges.' },
  { icon: '🤝', title: 'Foster Dialogue', description: 'Create a meeting point for professionals from media, policymaking, and academia to engage in meaningful conversations.' },
];

const categories = [
  { title: 'Street Vendors & Informal Workers', description: 'Stories of street vendors, hawkers, and informal sector workers fighting for their right to livelihood', icon: '🛒' },
  { title: 'Agriculture & Farmers', description: 'Challenges faced by farmers, agricultural workers, and rural communities', icon: '🌾' },
  { title: 'Micro Entrepreneurs', description: 'Small business owners and micro-entrepreneurs navigating regulatory hurdles', icon: '💼' },
  { title: 'Traditional Livelihoods', description: 'Indigenous communities, traditional crafts, and disappearing occupations', icon: '🎨' },
  { title: 'Urban Poor', description: 'Daily wage laborers, rickshaw pullers, and other urban working class', icon: '🏙️' },
  { title: 'Education & Livelihood', description: 'Education entrepreneurs and the connection between learning and earning', icon: '📚' },
];

const awards = [
  { prize: 'Best Documentary', award: '₹1,00,000', icon: '🏆', featured: true },
  { prize: 'Second Prize', award: '₹50,000', icon: '🥈' },
  { prize: 'Third Prize', award: '₹25,000', icon: '🥉' },
  { prize: 'Best Student Film', award: '₹15,000', icon: '🎓' },
  { prize: 'Special Jury Award', award: 'Trophy & Certificate', icon: '⭐' },
  { prize: 'Asia Liberty Forum Trip', award: 'Malaysia Visit', icon: '✈️' },
];

const pastFestivals = [
  { year: '2016', entries: '180+', screened: '25', countries: '12' },
  { year: '2015', entries: '175+', screened: '20', countries: '11' },
  { year: '2014', entries: '150+', screened: '18', countries: '10' },
  { year: '2013', entries: '120+', screened: '38', countries: '8' },
  { year: '2012', entries: '100+', screened: '15', countries: '7' },
  { year: '2011', entries: '90+', screened: '12', countries: '6' },
];

const whyJeevika = [
  { reason: 'Unique Focus', description: 'Only documentary festival in Asia exclusively focused on livelihood issues and economic freedom' },
  { reason: 'Real Impact', description: 'Our "Bamboo is not a Tree" campaign resulted from a festival screening and led to actual policy change' },
  { reason: 'Independent Jury', description: 'Films evaluated by celebrated professionals from film industry, academia, media, and non-profits' },
  { reason: 'Beyond Screening', description: 'Selected films tour schools, colleges, and cultural centers through "Jeevika on Road" initiative' },
  { reason: 'Networking', description: 'Meet eminent documentary makers, policymakers, and activists in intimate panel discussions' },
  { reason: 'Open to All', description: 'Welcome professional filmmakers and students alike - celebrating both veteran and new voices' },
];

const juryMembers = [
  { name: 'Nandita Das', role: 'Actor & Director', year: '2004', image: '🎭' },
  { name: 'Rahul Bose', role: 'Actor & Director', year: '2005', image: '🎬' },
  { name: 'Deepti Naval', role: 'Actor & Director', year: '2005', image: '⭐' },
  { name: 'Arundhati Roy', role: 'Author & Activist', year: '2013', image: '📚' },
];

const heroStats = [
  { number: '20+', label: 'Years Running' },
  { number: '1000+', label: 'Films Screened' },
  { number: '15+', label: 'Countries' },
  { number: '50K+', label: 'Viewers Reached' },
];

const submissionSteps = [
  { n: 1, title: 'Review Guidelines', body: 'Ensure your documentary fits our theme of livelihood challenges. We accept films on street vendors, farmers, micro-entrepreneurs, and other livelihood issues across Asia.' },
  { n: 2, title: 'Prepare Your Film', body: 'Films can be of any length (short or feature). Both professional filmmakers and students are welcome. Ensure high-quality video and audio.', bullets: ['Format: DVD, Digital File (MP4, MOV, AVI)', 'Subtitles: English (if not in English)', 'Quality: HD preferred, SD acceptable'] },
  { n: 3, title: 'Fill Submission Form', body: 'Complete our online submission form with film details, synopsis, director information, and production credits.' },
  { n: 4, title: 'Pay Entry Fee', body: 'Professional Filmmakers: ₹1,500 | Student Filmmakers: ₹500', note: 'Fee can be paid online via payment gateway or through bank transfer/cheque' },
  { n: 5, title: 'Submit Film', body: 'Send your film via online file transfer or physical media to our office. You\'ll receive a confirmation email with reference ID.' },
];

const Festival = () => (
  <div style={{ background: COLORS.cream, fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="pt-20">

    {/* ── Page Header ── */}
    <section style={{ background: '#fff', borderBottom: `1px solid ${COLORS.stoneLight}` }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <FadeIn>
          <Label>Asia Livelihood Documentary Festival</Label>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 12, lineHeight: 1.2 }}>
            Jeevika: Asia Livelihood<br /><span style={{ color: COLORS.saffron }}>Documentary Festival</span>
          </h1>
          <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.7, maxWidth: 600, marginTop: 8 }}>
            Capturing livelihood challenges faced by the rural and urban poor across Asia since 2004
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#submit-film" style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none' }} className="transition-opacity hover:opacity-90">Submit Your Film</a>
            <a href="#about-festival" style={{ border: `2px solid ${COLORS.ink}`, color: COLORS.ink, fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none' }} className="transition-opacity hover:opacity-90">Learn More</a>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── Hero Stats ── */}
    <section style={{ background: COLORS.ink, padding: '64px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: COLORS.stoneLight }}>
          {heroStats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div style={{ padding: '36px 20px', background: COLORS.inkMid, textAlign: 'center' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: COLORS.saffron, lineHeight: 1 }}>{s.number}</div>
                <div style={{ color: COLORS.stoneLight, fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── About Festival ── */}
    <section id="about-festival" style={{ background: COLORS.cream, padding: '96px 0' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <Label>About the Festival</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 8 }}>Stories That Drive Change</h2>
          <Divider />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '40px 36px', marginBottom: 24, boxShadow: '0 4px 24px rgba(26,18,8,0.07)' }}>
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.9, marginBottom: 20 }}>
              To complement our advocacy efforts, Centre for Civil Society hosts an annual Asia-wide documentary festival to capture the livelihood challenges faced by the rural and urban poor. The festival brings to light policies and regulations that limit livelihood freedom of the poor.
            </p>
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.9, marginBottom: 20 }}>
              By encouraging documentary makers to find interest in livelihood issues and providing them a platform to share their experiences and creativity, Jeevika: Asia Livelihood Documentary Festival hopes to strengthen the Freedom Struggle of the Poor and change the attitudes and minds of many towards inclusive and sustainable development.
            </p>
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.9 }}>
              The festival advocates for liberalizations at the bottom of the pyramid, bringing together filmmakers, policymakers, activists, and audiences in a powerful dialogue for change.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '36px', borderLeft: `5px solid ${COLORS.saffron}`, display: 'flex', alignItems: 'flex-start', gap: 20, boxShadow: '0 4px 24px rgba(26,18,8,0.07)' }}>
            <div style={{ fontSize: 36, flexShrink: 0 }}>🎋</div>
            <div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 800, color: COLORS.ink, marginBottom: 10 }}>Real Impact: Bamboo is Not a Tree Campaign</h3>
              <p style={{ color: COLORS.stone, fontSize: 15, lineHeight: 1.8 }}>
                Our festival doesn't just showcase films—it drives real policy change. A documentary screened at Jeevika led to our successful "Bamboo is not a Tree" campaign, which resulted in amendments to India's classification policy. This is the power of documentary filmmaking combined with strategic advocacy.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── Objectives ── */}
    <section style={{ background: '#fff', padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <Label>Our Mission</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>Festival Objectives</h2>
          <p style={{ color: COLORS.stone, fontSize: 16, maxWidth: 480, margin: '0 auto' }}>What we aim to achieve through cinema and storytelling</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <FadeIn key={obj.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(26,18,8,0.1)' }} transition={{ duration: 0.3 }} style={{ background: COLORS.cream, borderRadius: 14, padding: '32px 28px', borderLeft: `5px solid ${COLORS.saffron}`, boxShadow: '0 2px 12px rgba(26,18,8,0.05)', height: '100%' }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{obj.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>{obj.title}</h3>
                <p style={{ color: COLORS.stone, fontSize: 14, lineHeight: 1.8 }}>{obj.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Categories ── */}
    <section style={{ background: COLORS.saffronMist, padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <Label>Film Categories</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>Themes & Topics</h2>
          <p style={{ color: COLORS.stone, fontSize: 16, maxWidth: 480, margin: '0 auto' }}>We welcome documentaries across various livelihood sectors</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1}>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }} style={{ background: i % 3 === 1 ? COLORS.ink : '#fff', borderRadius: 14, padding: '32px 28px', boxShadow: '0 2px 12px rgba(26,18,8,0.06)', minHeight: 200 }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{cat.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: i % 3 === 1 ? COLORS.saffron : COLORS.ink, marginBottom: 10 }}>{cat.title}</h3>
                <p style={{ color: i % 3 === 1 ? COLORS.stoneLight : COLORS.stone, fontSize: 14, lineHeight: 1.75 }}>{cat.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Awards ── */}
    <section style={{ background: COLORS.ink, padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <Label>Recognition</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Awards & Prizes</h2>
          <p style={{ color: COLORS.stoneLight, fontSize: 17, lineHeight: 1.8, marginBottom: 56, maxWidth: 580 }}>Celebrating excellence in documentary filmmaking on livelihood issues</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((aw, i) => (
            <FadeIn key={aw.prize} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{ borderTop: `4px solid ${COLORS.saffron}`, background: COLORS.inkMid, borderRadius: 12, padding: '32px 28px', position: 'relative' }}>
                {aw.featured && <div style={{ position: 'absolute', top: -1, right: 20, background: COLORS.saffronLight, color: COLORS.ink, fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: '0 0 8px 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Grand Prize</div>}
                <div style={{ fontSize: 40, marginBottom: 12 }}>{aw.icon}</div>
                <p style={{ color: COLORS.stoneLight, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>{aw.prize}</p>
                <div style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: 28, color: COLORS.saffron }}>{aw.award}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <div style={{ marginTop: 48, padding: '32px 40px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, borderLeft: `4px solid ${COLORS.saffron}` }}>
            <p style={{ color: '#fff', fontSize: 16, lineHeight: 1.8 }}>
              <strong style={{ color: COLORS.saffron }}>All winners</strong> receive trophies, certificates, and extensive media coverage. Selected films are also screened through our <strong style={{ color: COLORS.saffronLight }}>"Jeevika on Road"</strong> initiative across India.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── Why Jeevika ── */}
    <section style={{ background: '#fff', padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <Label>Why Participate</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink }}>#WhyJeevika</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyJeevika.map((item, i) => (
            <FadeIn key={item.reason} delay={i * 0.09}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} style={{ background: COLORS.cream, borderRadius: 14, padding: '28px 24px', borderLeft: `5px solid ${COLORS.saffron}` }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: COLORS.saffron, fontWeight: 900 }}>✓</span> {item.reason}
                </h3>
                <p style={{ color: COLORS.stone, fontSize: 14, lineHeight: 1.8 }}>{item.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Distinguished Jury ── */}
    <section style={{ background: COLORS.saffronMist, padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <Label>Our Legacy</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 12 }}>Distinguished Jury Members</h2>
          <p style={{ color: COLORS.stone, fontSize: 16 }}>Over the years, celebrated personalities have graced our festival</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {juryMembers.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{ background: '#fff', borderRadius: 16, padding: '32px 20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(26,18,8,0.08)', borderTop: `4px solid ${COLORS.saffron}` }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{m.image}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 16, color: COLORS.ink, marginBottom: 4 }}>{m.name}</h3>
                <p style={{ color: COLORS.stone, fontSize: 13, marginBottom: 8 }}>{m.role}</p>
                <p style={{ color: COLORS.saffron, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Festival {m.year}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Past Festivals ── */}
    <section style={{ background: COLORS.ink, padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <Label>Our Journey</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Past Festivals</h2>
          <p style={{ color: COLORS.stoneLight, fontSize: 17, marginBottom: 56 }}>Two decades of impactful storytelling</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastFestivals.map((f, i) => (
            <FadeIn key={f.year} delay={i * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} style={{ background: COLORS.inkMid, borderRadius: 16, padding: '32px 28px', borderTop: `4px solid ${COLORS.saffron}` }}>
                <div style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: 40, color: COLORS.saffron, marginBottom: 20 }}>{f.year}</div>
                {[['Entries Received', f.entries], ['Films Screened', f.screened], ['Countries', f.countries]].map(([label, val], idx) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: idx < 2 ? `1px solid rgba(196,180,154,0.2)` : 'none' }}>
                    <span style={{ color: COLORS.stoneLight, fontSize: 14 }}>{label}</span>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>{val}</span>
                  </div>
                ))}
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link to="/festival/previous" style={{ color: COLORS.saffron, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View All Past Festivals <span>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── Submission Guidelines ── */}
    <section id="submit-film" style={{ background: COLORS.cream, padding: '96px 0' }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <FadeIn>
          <Label>Submit Your Film</Label>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 8 }}>How to Participate</h2>
          <Divider />
          <p style={{ color: COLORS.stone, fontSize: 16, marginBottom: 48 }}>Ready to showcase your documentary? Here's how to submit</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ background: '#fff', borderRadius: 20, padding: '48px 44px', boxShadow: '0 8px 40px rgba(26,18,8,0.10)', marginBottom: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {submissionSteps.map(step => (
                <div key={step.n} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: COLORS.saffron, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, fontFamily: 'Georgia, serif' }}>{step.n}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 19, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ color: COLORS.stone, fontSize: 15, lineHeight: 1.75, marginBottom: step.bullets ? 10 : 0 }}>{step.body}</p>
                    {step.bullets && (
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {step.bullets.map(b => (<li key={b} style={{ color: COLORS.stone, fontSize: 13, display: 'flex', gap: 8 }}><span style={{ color: COLORS.saffron }}>•</span>{b}</li>))}
                      </ul>
                    )}
                    {step.note && <p style={{ color: COLORS.stoneLight, fontSize: 13, marginTop: 6 }}>{step.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Important Dates */}
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: `2px solid ${COLORS.saffronMist}` }}>
              <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 17, color: COLORS.ink, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: COLORS.saffron }}>📅</span> Important Dates
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[['Submission Deadline', 'Check website for current year dates'], ['Festival Dates', 'Typically in August/September']].map(([title, val]) => (
                  <div key={title} style={{ background: COLORS.saffronMist, borderRadius: 10, padding: '16px 20px' }}>
                    <p style={{ fontWeight: 700, color: COLORS.ink, fontSize: 14, marginBottom: 4 }}>{title}</p>
                    <p style={{ color: COLORS.stone, fontSize: 13 }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/festival/guidelines" style={{ background: COLORS.saffron, color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15, textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} className="transition-opacity hover:opacity-90">
              View Detailed Guidelines <span>→</span>
            </Link>
            <Link to="/festival/submission-form" style={{ border: `2px solid ${COLORS.ink}`, color: COLORS.ink, fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15, textAlign: 'center' }} className="transition-opacity hover:opacity-90">
              Start Submission
            </Link>
          </div>
          <p style={{ textAlign: 'center', color: COLORS.stone, fontSize: 14, marginTop: 24 }}>
            Questions? Email us at <a href="mailto:jeevika@ccs.in" style={{ color: COLORS.saffron, fontWeight: 600, textDecoration: 'none' }}>jeevika@ccs.in</a> or call <a href="tel:+911126537456" style={{ color: COLORS.saffron, fontWeight: 600, textDecoration: 'none' }}>+91-11-26537456</a>
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── CTA Footer Band ── */}
    <section style={{ background: COLORS.saffron, padding: '72px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <FadeIn direction="right">
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Have a Story to Tell?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 12, maxWidth: 480 }}>Join us in documenting the livelihood struggles and triumphs of Asia's working poor</p>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div style={{ display: 'flex', gap: 16, flexShrink: 0 }} className="flex-wrap">
              <a href="#submit-film" style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }} className="transition-opacity hover:opacity-90">Submit Your Film</a>
              <Link to="/contact" style={{ border: '2px solid #fff', color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }} className="transition-opacity hover:opacity-90">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  </div>
);

export default Festival;