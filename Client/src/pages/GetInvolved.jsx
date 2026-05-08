import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

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

const inputStyle = { width: '100%', padding: '13px 16px', border: `2px solid ${COLORS.stoneLight}`, borderRadius: 10, fontSize: 15, color: COLORS.ink, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', background: '#fff' };

const opportunities = [
  { id: 'volunteer', title: 'Volunteer', subtitle: 'Make a difference in your community', description: 'Join our team of passionate volunteers working directly with street vendors to protect their rights and improve their livelihoods.', icon: '🤝', commitment: 'Flexible hours', duration: 'Ongoing', responsibilities: ['Community outreach and engagement', 'Assisting with campaign activities', 'Data collection and documentation', 'Event organization and support', 'Social media and content creation'], requirements: ['Passion for social justice', 'Good communication skills', 'Ability to work with diverse communities', 'Commitment of at least 10 hours per week', 'Basic computer literacy'] },
  { id: 'intern', title: 'Intern', subtitle: 'Learn while making an impact', description: 'Gain hands-on experience in policy research, advocacy, and community development while contributing to meaningful social change.', icon: '🎓', commitment: 'Full-time / Part-time', duration: '3-6 months', responsibilities: ['Policy research and analysis', 'Report writing and documentation', 'Supporting advocacy campaigns', 'Data analysis and visualization', 'Legal research and documentation'], requirements: ['Currently enrolled in or recent graduate from college/university', 'Strong research and writing skills', 'Interest in social policy and development', 'Proficiency in MS Office', 'Ability to commit 3-6 months'] },
  { id: 'fellowship', title: 'Jeevika Fellowship', subtitle: 'For law students passionate about justice', description: 'Law students can provide legal aid to street vendors while gaining practical experience in public interest law and advocacy.', icon: '⚖️', commitment: 'Part-time', duration: '6-12 months', responsibilities: ['Providing legal aid to street vendors', 'Researching street vending laws and policies', 'Drafting legal documents and petitions', 'Participating in advocacy initiatives', 'Conducting legal awareness workshops'], requirements: ['Currently enrolled in law school (3rd year or above)', 'Strong interest in public interest law', 'Good legal research and writing skills', 'Ability to work with marginalized communities', 'Commitment of 15-20 hours per week'] },
];

const benefits = [
  { icon: '📚', title: 'Skill Development', description: 'Gain practical experience in advocacy, research, and community engagement' },
  { icon: '🌟', title: 'Certificate', description: 'Receive a certificate of appreciation upon successful completion' },
  { icon: '👥', title: 'Networking', description: 'Connect with like-minded individuals and social sector professionals' },
  { icon: '💼', title: 'Career Growth', description: 'Build your portfolio and enhance your career prospects' },
  { icon: '🎯', title: 'Mentorship', description: 'Learn from experienced professionals in the field' },
  { icon: '❤️', title: 'Make Impact', description: 'Contribute to meaningful social change and empower communities' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Former Intern', image: '👩‍🎓', text: 'My internship at Jeevika was transformative. I learned so much about policy research and got to work directly with street vendor communities.', rating: 5 },
  { name: 'Rahul Verma', role: 'Volunteer', image: '👨‍💼', text: 'Volunteering with Jeevika has been incredibly rewarding. The team is supportive and the work is meaningful.', rating: 5 },
  { name: 'Ananya Reddy', role: 'Fellow', image: '👩‍⚖️', text: 'The fellowship program helped me understand the intersection of law and livelihood. A great learning experience!', rating: 5 },
];

const GetInvolved = () => {
  const { t } = useTranslation();
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', education: '', availability: '', motivation: '', resume: null });
  const [submitted, setSubmitted] = useState(false);
  const [activeRoles, setActiveRoles] = useState([]); // Dynamic roles from Supabase

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const { data, error } = await supabase
          .from('application_roles')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (error) {
          console.warn("Supabase fetch error:", error.message);
          return;
        }

        if (data && data.length > 0) {
          // Merge Supabase data with hardcoded defaults
          const merged = data.map(dbRole => {
            const localDefault = opportunities.find(o => o.id === dbRole.role_id) || {};
            return {
              ...localDefault,
              ...dbRole,
              id: dbRole.role_id, // Ensure id matches for mapping
              // Parse JSONB fields if they come as strings
              responsibilities: typeof dbRole.responsibilities === 'string' ? JSON.parse(dbRole.responsibilities) : dbRole.responsibilities || localDefault.responsibilities,
              requirements: typeof dbRole.requirements === 'string' ? JSON.parse(dbRole.requirements) : dbRole.requirements || localDefault.requirements,
            };
          });
          setActiveRoles(merged);
        } else {
          // Fallback if table is empty
          setActiveRoles(opportunities.filter(o => ['volunteer', 'intern'].includes(o.id)));
        }
      } catch (err) {
        console.error("Failed to fetch roles:", err);
      }
    };

    fetchRoles();
  }, []);

  // Use dynamic roles
  const visibleOpportunities = activeRoles;

  const handleInputChange = (e) => { const { name, value } = e.target; setFormData(p => ({ ...p, [name]: value })); };
  const handleFileChange = (e) => setFormData(p => ({ ...p, resume: e.target.files[0] }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };

  return (
    <div style={{ background: COLORS.cream, fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="pt-20">

      {/* Header */}
      <section style={{ background: '#fff', borderBottom: `1px solid ${COLORS.stoneLight}` }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <FadeIn>
            <Label>{t('gi_label')}</Label>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 12, lineHeight: 1.2 }}>{t('gi_h1')}</h1>
            <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.7, maxWidth: 560, marginTop: 8 }}>{t('gi_tagline')}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#application-form" style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none' }} className="transition-opacity hover:opacity-90">{t('gi_apply_now')}</a>
              <Link to="/about" style={{ border: `2px solid ${COLORS.ink}`, color: COLORS.ink, fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none' }} className="transition-opacity hover:opacity-90">{t('gi_learn_more')}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: COLORS.ink, padding: '64px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: COLORS.stoneLight }}>
            {[{ number: '500+', label: t('gi_stat_volunteers') }, { number: '100+', label: t('gi_stat_interns') }, { number: '50+', label: t('gi_stat_fellows') }].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div style={{ padding: '40px 28px', background: COLORS.inkMid, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: COLORS.saffron, lineHeight: 1 }}>{s.number}</div>
                  <div style={{ color: COLORS.stoneLight, fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section style={{ background: COLORS.cream, padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <Label>{t('gi_opp_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>{t('gi_opp_heading')}</h2>
            <p style={{ color: COLORS.stone, fontSize: 16, maxWidth: 480, margin: '0 auto' }}>{t('gi_opp_sub')}</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-8">
            {visibleOpportunities.map((opp, i) => (
              <div key={opp.id} className="w-full md:w-[calc(33.333%-22px)] min-w-[300px] max-w-[380px]">
                <FadeIn delay={i * 0.12}>
                <motion.div whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(26,18,8,0.13)' }} transition={{ duration: 0.3 }}
                  style={{ background: '#fff', borderRadius: 16, padding: '36px 28px', borderLeft: `5px solid ${COLORS.saffron}`, boxShadow: selectedRole === opp.id ? `0 0 0 3px ${COLORS.saffronLight}` : '0 2px 12px rgba(26,18,8,0.06)', cursor: 'pointer' }}
                  onClick={() => setSelectedRole(selectedRole === opp.id ? null : opp.id)}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{opp.icon}</div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>{opp.title}</h3>
                  <p style={{ color: COLORS.saffron, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{opp.subtitle}</p>
                  <p style={{ color: COLORS.stone, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{opp.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                    <div style={{ fontSize: 13, color: COLORS.inkMid }}><span style={{ color: COLORS.saffron }}>⏱ </span><strong>{t('gi_opp_commitment')}:</strong> {opp.commitment}</div>
                    <div style={{ fontSize: 13, color: COLORS.inkMid }}><span style={{ color: COLORS.saffron }}>📅 </span><strong>{t('gi_opp_duration')}:</strong> {opp.duration}</div>
                  </div>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={(e) => { e.stopPropagation(); setSelectedRole(opp.id); setFormData(p => ({ ...p, role: opp.title })); document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ width: '100%', padding: '12px', background: COLORS.saffron, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                    {t('gi_apply_now')}
                  </motion.button>
                </motion.div>
              </FadeIn>
            </div>
          ))}
        </div>

          {/* Role Detail Panel */}
          <AnimatePresence>
            {selectedRole && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }} style={{ overflow: 'hidden', marginTop: 32 }}>
                {visibleOpportunities.filter(o => o.id === selectedRole).map(opp => (
                  <div key={opp.id} style={{ background: '#fff', borderRadius: 16, padding: '40px 36px', border: `2px solid ${COLORS.stoneLight}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 800, color: COLORS.ink, display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ fontSize: 32 }}>{opp.icon}</span>{opp.title} — Details</h3>
                      <button onClick={() => setSelectedRole(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.stone, fontSize: 22 }}>✕</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 16, paddingBottom: 8, borderBottom: `2px solid ${COLORS.saffronMist}` }}>{t('gi_responsibilities')}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {opp.responsibilities.map((r, idx) => (<li key={idx} style={{ display: 'flex', gap: 10, fontSize: 14, color: COLORS.inkMid }}><span style={{ color: COLORS.saffron, fontWeight: 700 }}>✓</span>{r}</li>))}
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 16, paddingBottom: 8, borderBottom: `2px solid ${COLORS.saffronMist}` }}>{t('gi_requirements')}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {opp.requirements.map((r, idx) => (<li key={idx} style={{ display: 'flex', gap: 10, fontSize: 14, color: COLORS.inkMid }}><span style={{ color: COLORS.saffronLight, fontWeight: 700 }}>→</span>{r}</li>))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <Label>{t('gi_benefits_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>{t('gi_benefits_heading')}</h2>
            <p style={{ color: COLORS.stone, fontSize: 16, maxWidth: 480, margin: '0 auto' }}>{t('gi_benefits_sub')}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.09}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }} style={{ background: i % 3 === 1 ? COLORS.ink : COLORS.cream, borderRadius: 14, padding: '32px 28px', minHeight: 200 }}>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{b.icon}</div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 19, fontWeight: 700, color: i % 3 === 1 ? COLORS.saffron : COLORS.ink, marginBottom: 10 }}>{b.title}</h3>
                  <p style={{ color: i % 3 === 1 ? COLORS.stoneLight : COLORS.stone, lineHeight: 1.75, fontSize: 14 }}>{b.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: COLORS.saffronMist, padding: '96px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <Label>{t('gi_testimonials_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink }}>{t('gi_testimonials_heading')}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.12}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{ background: '#fff', borderRadius: 16, padding: '36px 28px', borderTop: `4px solid ${COLORS.saffron}`, boxShadow: '0 4px 24px rgba(26,18,8,0.07)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ fontSize: 48 }}>{t.image}</div>
                    <div>
                      <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 16, color: COLORS.ink }}>{t.name}</p>
                      <p style={{ color: COLORS.saffron, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.role}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                    {[...Array(t.rating)].map((_, j) => (<span key={j} style={{ color: '#F59E0B', fontSize: 16 }}>★</span>))}
                  </div>
                  <p style={{ color: COLORS.stone, fontSize: 14, lineHeight: 1.8, fontStyle: 'italic' }}>"{t.text}"</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" style={{ background: COLORS.cream, padding: '96px 0' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn>
            <Label>{t('gi_form_label')}</Label>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 8 }}>{t('gi_form_heading')}</h2>
            <Divider />
            <p style={{ color: COLORS.stone, fontSize: 16, marginBottom: 40 }}>{t('gi_form_sub')}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: '#fff', borderRadius: 20, padding: '48px 44px', boxShadow: '0 8px 40px rgba(26,18,8,0.10)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_name')} <span style={{ color: COLORS.saffron }}>*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={t('gi_form_name')} style={inputStyle} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_email')} <span style={{ color: COLORS.saffron }}>*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_phone')} <span style={{ color: COLORS.saffron }}>*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_role')} <span style={{ color: COLORS.saffron }}>*</span></label>
                  <select name="role" value={formData.role} onChange={handleInputChange} required style={inputStyle}>
                    <option value="">{t('gi_form_role_placeholder')}</option>
                    {visibleOpportunities.map(opp => (
                      <option key={opp.id} value={opp.title}>{opp.title}</option>
                    ))}
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_education')} <span style={{ color: COLORS.saffron }}>*</span></label>
                    <input type="text" name="education" value={formData.education} onChange={handleInputChange} required placeholder={t('gi_form_education')} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_availability')} <span style={{ color: COLORS.saffron }}>*</span></label>
                    <select name="availability" value={formData.availability} onChange={handleInputChange} required style={inputStyle}>
                      <option value="">{t('gi_form_availability_placeholder')}</option>
                      <option value="Immediate">{t('gi_avail_immediate')}</option>
                      <option value="Within 2 weeks">{t('gi_avail_2weeks')}</option>
                      <option value="Within 1 month">{t('gi_avail_1month')}</option>
                      <option value="After 1 month">{t('gi_avail_after')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_motivation')} <span style={{ color: COLORS.saffron }}>*</span></label>
                  <textarea name="motivation" value={formData.motivation} onChange={handleInputChange} required rows={5} placeholder={t('gi_form_motivation_placeholder')} style={{ ...inputStyle, resize: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>{t('gi_form_resume')}</label>
                  <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 100, border: `2px dashed ${COLORS.stoneLight}`, borderRadius: 10, cursor: 'pointer', background: COLORS.saffronMist }}>
                    <span style={{ fontSize: 28, marginBottom: 6 }}>📎</span>
                    <span style={{ color: COLORS.stone, fontSize: 13 }}><strong style={{ color: COLORS.saffron }}>{t('gi_form_upload_cta')}</strong> {t('gi_form_upload_hint')}</span>
                    <span style={{ color: COLORS.stoneLight, fontSize: 12, marginTop: 4 }}>{t('gi_form_upload_size')}</span>
                    <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" style={{ display: 'none' }} />
                  </label>
                  {formData.resume && <p style={{ marginTop: 8, fontSize: 13, color: '#16A34A' }}>✓ {formData.resume.name}</p>}
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: '100%', padding: '18px', background: COLORS.saffron, color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: 16, cursor: 'pointer' }}>
                  {t('gi_form_submit')}
                </motion.button>
              </form>
              <AnimatePresence>
                {submitted && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ marginTop: 20, background: COLORS.saffronMist, border: `2px solid ${COLORS.saffron}`, borderRadius: 10, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 24 }}>🙏</span>
                    <div>
                      <p style={{ fontWeight: 700, color: COLORS.ink, fontSize: 15 }}>{t('gi_form_success_title')}</p>
                      <p style={{ color: COLORS.stone, fontSize: 13 }}>{t('gi_form_success_body')}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p style={{ textAlign: 'center', color: COLORS.stone, fontSize: 14, marginTop: 24 }}>
              {t('gi_form_contact')} <a href="mailto:jeevika@ccs.in" style={{ color: COLORS.saffron, fontWeight: 600, textDecoration: 'none' }}>jeevika@ccs.in</a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ background: COLORS.saffron, padding: '72px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <FadeIn direction="right">
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{t('gi_cta_heading')}</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 12, maxWidth: 480 }}>{t('gi_cta_sub')}</p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }} className="flex-wrap">
                <a href="#application-form" style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }} className="transition-opacity hover:opacity-90">{t('gi_cta_apply')}</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;