import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   DESIGN TOKENS — identical to About page
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

/* ── Animated Counter ── */
const Counter = ({ target, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const num = parseInt(String(target).replace(/\D/g, ''), 10) || 0;
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

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};

/* ─────────────────────────────────────────────
   DONATION TIERS
───────────────────────────────────────────── */
const TIERS = [
    {
        amount: 500,
        label: 'Supporter',
        icon: '🌱',
        color: COLORS.cream,
        textColor: COLORS.ink,
        impact: 'Funds legal aid materials for 2 street vendors for a month.',
        perks: ['Thank-you letter', 'Jeevika newsletter', 'Name on donor wall'],
    },
    {
        amount: 2000,
        label: 'Champion',
        icon: '⚖️',
        color: COLORS.saffron,
        textColor: '#fff',
        impact: 'Sponsors a full legal aid camp reaching 25+ vendors.',
        perks: ['All Supporter perks', 'Annual impact report', 'Exclusive webinar access'],
        featured: true,
    },
    {
        amount: 5000,
        label: 'Patron',
        icon: '🏛️',
        color: COLORS.ink,
        textColor: '#fff',
        impact: 'Funds a month-long community awareness campaign across 10 markets.',
        perks: ['All Champion perks', 'Personal impact call', 'Logo on campaign materials'],
    },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQS = [
    {
        q: 'Is my donation tax-deductible?',
        a: 'Yes. Jeevika (Centre for Civil Society) is registered under 80G of the Income Tax Act. You will receive an 80G certificate for your donation within 7 working days.',
    },
    {
        q: 'How is my money used?',
        a: '100% of your donation goes directly to programme activities — legal aid camps, vendor training, research, and advocacy. Administrative costs are covered by our institutional grants.',
    },
    {
        q: 'Can I donate monthly?',
        a: 'Absolutely. During checkout you\'ll have the option to set up a recurring monthly donation. You can cancel at any time.',
    },
    {
        q: 'What payment methods are accepted?',
        a: 'We accept UPI, Net Banking, Debit/Credit Cards, and bank transfers (NEFT/RTGS). International donors can use PayPal or wire transfer.',
    },
    {
        q: 'Will I receive a receipt?',
        a: 'Yes. A digital receipt is emailed immediately after your donation is processed, and a physical receipt can be requested for amounts above ₹1,000.',
    },
];

/* ─────────────────────────────────────────────
   IMPACT STATS
───────────────────────────────────────────── */
const IMPACT_STATS = [
    { value: 12, suffix: 'K+', label: 'Vendors Reached' },
    { value: 400, suffix: '+', label: 'Markets Covered' },
    { value: 92, suffix: '%', label: 'Resolution Rate' },
    { value: 20, suffix: '+', label: 'Years of Service' },
];

/* ─────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────── */
const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            style={{
                borderBottom: `1px solid ${COLORS.stoneLight}`,
                padding: '20px 0',
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                }}
            >
                <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 17, color: COLORS.ink }}>
                    {q}
                </span>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ color: COLORS.saffron, fontSize: 24, flexShrink: 0, lineHeight: 1 }}
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: COLORS.stone, lineHeight: 1.8, fontSize: 15, marginTop: 12, overflow: 'hidden' }}
                    >
                        {a}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ─────────────────────────────────────────────
   RAZORPAY INTEGRATION HELPER
───────────────────────────────────────────── */
const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Donate() {
    const [selectedTier, setSelectedTier] = useState(TIERS[1]);
    const [customAmount, setCustomAmount] = useState('');
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [donorPhone, setDonorPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const finalAmount = customAmount ? Number(customAmount) : selectedTier.amount;

    const handleDonate = async (e) => {
        e.preventDefault();
        if (finalAmount <= 0) return;

        setIsProcessing(true);

        // Load Razorpay SDK
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setIsProcessing(false);
            return;
        }

        // Razorpay Options
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use environment variable instead of hardcoding
            amount: finalAmount * 100, // Razorpay works in subunits (paise)
            currency: "INR",
            name: "Jeevika",
            description: "Support Law, Liberty & Livelihood",
            image: "https://your-logo-url.com/logo.png", // Optional logo
            handler: function (response) {
                // Payment was successful
                // response.razorpay_payment_id
                setSubmitted(true);
                setIsProcessing(false);
            },
            prefill: {
                name: donorName,
                email: donorEmail,
                contact: donorPhone
            },
            notes: {
                address: "Jeevika Office"
            },
            theme: {
                color: COLORS.saffron
            },
            modal: {
                ondismiss: function () {
                    setIsProcessing(false);
                }
            }
        };

        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', function (response) {
            alert("Payment failed: " + response.error.description);
            setIsProcessing(false);
        });

        rzp.open();
    };

    return (
        <div style={{ background: COLORS.cream, fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="pt-20">

            {/* ═══════════════════════════════════════
          PAGE HEADER
      ═══════════════════════════════════════ */}
            <section style={{ background: '#fff', borderBottom: `1px solid ${COLORS.stoneLight}` }}>
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <FadeIn>
                        <Label>Support the Mission</Label>
                        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 12, lineHeight: 1.2 }}>
                            Empower Street Vendors.<br />
                            <span style={{ color: COLORS.saffron }}>Fund Justice.</span>
                        </h1>
                        <p style={{ color: COLORS.stone, fontSize: 17, lineHeight: 1.7, maxWidth: 560, marginTop: 12 }}>
                            Your contribution directly funds legal aid camps, vendor training, and advocacy
                            campaigns that protect the livelihoods of India's most vulnerable workers.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            <a
                                href="#donate-form"
                                style={{ background: COLORS.saffron, color: '#fff', fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
                                className="transition-opacity hover:opacity-90"
                            >
                                Donate Now
                            </a>
                            <Link
                                to="/about"
                                style={{ border: `2px solid ${COLORS.ink}`, color: COLORS.ink, fontWeight: 600, padding: '10px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
                                className="transition-opacity hover:opacity-90"
                            >
                                Learn More
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          IMPACT NUMBERS
      ═══════════════════════════════════════ */}
            <section style={{ background: COLORS.cream, padding: '80px 0' }}>
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <FadeIn>
                        <Label>Our Reach</Label>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 48 }}>
                            Every rupee creates measurable change
                        </h2>
                    </FadeIn>
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
                        style={{ background: COLORS.stoneLight, boxShadow: '0 4px 24px rgba(26,18,8,0.08)' }}
                    >
                        {IMPACT_STATS.map((s, i) => (
                            <FadeIn key={s.label} delay={i * 0.1}>
                                <div style={{ padding: '40px 28px', background: i % 2 === 1 ? COLORS.saffronMist : '#fff' }}>
                                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, color: COLORS.saffron, lineHeight: 1 }}>
                                        <Counter target={s.value} suffix={s.suffix} />
                                    </div>
                                    <div style={{ color: COLORS.stone, fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
                                        {s.label}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          DONATION TIERS
      ═══════════════════════════════════════ */}
            <section style={{ background: '#fff', padding: '96px 0' }}>
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <FadeIn className="text-center mb-16">
                        <Label>Choose Your Impact</Label>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 16 }}>
                            How would you like to give?
                        </h2>
                        <p style={{ color: COLORS.stone, fontSize: 16, maxWidth: 520, margin: '0 auto' }}>
                            Select a tier that suits you, or enter a custom amount below.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-6">
                        {TIERS.map((tier, i) => (
                            <FadeIn key={tier.label} delay={i * 0.12}>
                                <motion.div
                                    whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(26,18,8,0.14)' }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => { setSelectedTier(tier); setCustomAmount(''); }}
                                    style={{
                                        background: tier.color,
                                        borderRadius: 16,
                                        padding: '40px 32px',
                                        cursor: 'pointer',
                                        border: selectedTier.label === tier.label && !customAmount
                                            ? `3px solid ${COLORS.saffronLight}`
                                            : '3px solid transparent',
                                        boxShadow: tier.featured
                                            ? '0 8px 32px rgba(232,118,10,0.25)'
                                            : '0 2px 12px rgba(26,18,8,0.06)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {tier.featured && (
                                        <div style={{
                                            position: 'absolute', top: 16, right: 16,
                                            background: COLORS.saffronLight, color: COLORS.ink,
                                            fontSize: 11, fontWeight: 700, padding: '4px 10px',
                                            borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.1em'
                                        }}>
                                            Most Popular
                                        </div>
                                    )}
                                    <div style={{ fontSize: 36, marginBottom: 12 }}>{tier.icon}</div>
                                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 13, fontWeight: 700, color: tier.featured ? 'rgba(255,255,255,0.8)' : COLORS.stone, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>
                                        {tier.label}
                                    </div>
                                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: tier.textColor, lineHeight: 1, marginBottom: 16 }}>
                                        ₹{tier.amount.toLocaleString('en-IN')}
                                    </div>
                                    <p style={{ color: tier.featured ? 'rgba(255,255,255,0.85)' : COLORS.stone, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                                        {tier.impact}
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        {tier.perks.map((perk) => (
                                            <li key={perk} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: tier.featured ? 'rgba(255,255,255,0.9)' : COLORS.inkMid }}>
                                                <span style={{ color: tier.featured ? COLORS.saffronLight : COLORS.saffron, fontWeight: 700 }}>✓</span>
                                                {perk}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          DONATE FORM
      ═══════════════════════════════════════ */}
            <section id="donate-form" style={{ background: COLORS.saffronMist, padding: '96px 0' }}>
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <FadeIn>
                        <Label>Complete Your Gift</Label>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 8 }}>
                            Secure Donation
                        </h2>
                        <Divider />
                    </FadeIn>

                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    background: '#fff',
                                    borderRadius: 20,
                                    padding: '64px 48px',
                                    textAlign: 'center',
                                    boxShadow: '0 8px 40px rgba(26,18,8,0.10)',
                                    borderTop: `4px solid ${COLORS.saffron}`,
                                }}
                            >
                                <div style={{ fontSize: 64, marginBottom: 20 }}>🙏</div>
                                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 800, color: COLORS.ink, marginBottom: 12 }}>
                                    Thank You for Your Generosity!
                                </h3>
                                <p style={{ color: COLORS.stone, fontSize: 16, lineHeight: 1.8, maxWidth: 420, margin: '0 auto 32px' }}>
                                    Thank you, <strong style={{ color: COLORS.ink }}>{donorName || 'supporter'}</strong>! Your donation of <strong style={{ color: COLORS.saffron }}>₹{finalAmount.toLocaleString('en-IN')}</strong> is making a real difference.
                                    A receipt and 80G certificate will be emailed to <strong style={{ color: COLORS.ink }}>{donorEmail}</strong> shortly.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setCustomAmount(''); setDonorName(''); setDonorEmail(''); setDonorPhone(''); setSelectedTier(TIERS[1]); }}
                                    style={{ background: COLORS.saffron, color: '#fff', border: 'none', borderRadius: 8, padding: '14px 32px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
                                >
                                    Make Another Donation
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                onSubmit={handleDonate}
                                style={{ background: '#fff', borderRadius: 20, padding: '48px 44px', boxShadow: '0 8px 40px rgba(26,18,8,0.10)' }}
                            >
                                {/* Amount summary */}
                                <div style={{ marginBottom: 32 }}>
                                    <p style={{ color: COLORS.stone, fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                                        Selected Amount
                                    </p>
                                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 48, fontWeight: 900, color: COLORS.saffron, lineHeight: 1 }}>
                                        ₹{finalAmount ? finalAmount.toLocaleString('en-IN') : '—'}
                                    </div>
                                    <p style={{ color: COLORS.stone, fontSize: 14, marginTop: 6 }}>
                                        {customAmount ? 'Custom amount' : `${selectedTier.label} tier — ${selectedTier.impact}`}
                                    </p>
                                </div>

                                {/* Custom amount input */}
                                <div style={{ marginBottom: 32 }}>
                                    <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 8 }}>
                                        Or enter a custom amount (₹)
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: COLORS.stone, fontWeight: 700, fontSize: 18 }}>₹</span>
                                        <input
                                            type="number"
                                            min="50"
                                            placeholder="Enter amount"
                                            value={customAmount}
                                            onChange={e => setCustomAmount(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px 14px 36px',
                                                border: `2px solid ${customAmount ? COLORS.saffron : COLORS.stoneLight}`,
                                                borderRadius: 10,
                                                fontSize: 16,
                                                color: COLORS.ink,
                                                outline: 'none',
                                                transition: 'border-color 0.2s',
                                                boxSizing: 'border-box',
                                            }}
                                        />
                                    </div>
                                    <p style={{ color: COLORS.stone, fontSize: 12, marginTop: 6 }}>Minimum ₹50. Any amount helps.</p>
                                </div>

                                {/* Donor Details */}
                                <div style={{ marginBottom: 32 }}>
                                    <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: COLORS.inkMid, marginBottom: 12 }}>
                                        Your Details
                                    </label>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            required
                                            value={donorName}
                                            onChange={e => setDonorName(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                border: `2px solid ${COLORS.stoneLight}`,
                                                borderRadius: 10,
                                                fontSize: 15,
                                                color: COLORS.ink,
                                                outline: 'none',
                                                transition: 'border-color 0.2s',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={e => e.target.style.borderColor = COLORS.saffron}
                                            onBlur={e => e.target.style.borderColor = COLORS.stoneLight}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            value={donorEmail}
                                            onChange={e => setDonorEmail(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                border: `2px solid ${COLORS.stoneLight}`,
                                                borderRadius: 10,
                                                fontSize: 15,
                                                color: COLORS.ink,
                                                outline: 'none',
                                                transition: 'border-color 0.2s',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={e => e.target.style.borderColor = COLORS.saffron}
                                            onBlur={e => e.target.style.borderColor = COLORS.stoneLight}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            value={donorPhone}
                                            onChange={e => setDonorPhone(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                border: `2px solid ${COLORS.stoneLight}`,
                                                borderRadius: 10,
                                                fontSize: 15,
                                                color: COLORS.ink,
                                                outline: 'none',
                                                transition: 'border-color 0.2s',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={e => e.target.style.borderColor = COLORS.saffron}
                                            onBlur={e => e.target.style.borderColor = COLORS.stoneLight}
                                        />
                                    </div>
                                    <p style={{ color: COLORS.stone, fontSize: 12, marginTop: 10, lineHeight: 1.5 }}>
                                        Required for 80G tax exemption receipt and payment tracking.
                                    </p>
                                </div>


                                {/* Recurring option */}
                                <div style={{ marginBottom: 32, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                                    <input type="checkbox" id="recurring" style={{ marginTop: 3, accentColor: COLORS.saffron, width: 16, height: 16, cursor: 'pointer' }} />
                                    <label htmlFor="recurring" style={{ fontSize: 14, color: COLORS.inkMid, lineHeight: 1.6, cursor: 'pointer' }}>
                                        <strong>Make this a monthly gift.</strong> Your generosity compounds — recurring donors help us plan and sustain long-term programmes.
                                    </label>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={!finalAmount || isProcessing}
                                    style={{
                                        width: '100%',
                                        padding: '18px',
                                        background: (!finalAmount || isProcessing) ? COLORS.stoneLight : COLORS.saffron,
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 12,
                                        fontWeight: 800,
                                        fontSize: 17,
                                        cursor: (!finalAmount || isProcessing) ? 'not-allowed' : 'pointer',
                                        letterSpacing: '0.04em',
                                        transition: 'background 0.3s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 10,
                                    }}
                                >
                                    {isProcessing ? 'Opening Razorpay Secure Checkout...' : `🔒 Donate ₹${finalAmount ? finalAmount.toLocaleString('en-IN') : '—'} Securely`}
                                </motion.button>

                                <p style={{ textAlign: 'center', color: COLORS.stone, fontSize: 12, marginTop: 16 }}>
                                    Secured by SSL. 80G tax certificate issued. Donations processed via RBI-authorised gateways.
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHERE YOUR MONEY GOES
      ═══════════════════════════════════════ */}
            <section style={{ background: COLORS.ink, padding: '96px 0' }}>
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <FadeIn>
                        <Label>Transparency</Label>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
                            Where does your money go?
                        </h2>
                        <p style={{ color: COLORS.stoneLight, fontSize: 17, lineHeight: 1.8, marginBottom: 56, maxWidth: 680 }}>
                            We believe in complete financial transparency. Here's how every rupee you donate is allocated.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { pct: '65%', label: 'Legal Aid & Camps', icon: '⚖️', desc: 'Direct legal assistance, court representation, and community legal aid camps across Delhi and Jaipur.' },
                            { pct: '25%', label: 'Training & Research', icon: '📚', desc: 'Vendor rights training programmes, research publications, and policy advocacy materials.' },
                            { pct: '10%', label: 'Outreach & Tech', icon: '📱', desc: 'Jeevika App development, awareness campaigns, and digital outreach to underserved communities.' },
                        ].map((item, i) => (
                            <FadeIn key={item.label} delay={i * 0.15}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ borderTop: `4px solid ${COLORS.saffron}`, background: COLORS.inkMid, borderRadius: 12, padding: '36px 28px' }}
                                >
                                    <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                                    <div style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: 40, color: COLORS.saffron, lineHeight: 1, marginBottom: 8 }}>
                                        {item.pct}
                                    </div>
                                    <h3 style={{ color: '#fff', fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.label}</h3>
                                    <p style={{ color: COLORS.stoneLight, fontSize: 14, lineHeight: 1.75 }}>{item.desc}</p>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Callout quote */}
                    <FadeIn delay={0.35}>
                        <div style={{ marginTop: 56, padding: '36px 44px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, borderLeft: `4px solid ${COLORS.saffron}`, display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                            <div style={{ fontSize: 36, flexShrink: 0 }}>💡</div>
                            <div>
                                <p style={{ color: COLORS.stoneLight, fontWeight: 700, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Donor Story</p>
                                <p style={{ color: '#fff', fontSize: 17, lineHeight: 1.75 }}>
                                    "After donating ₹2,000, I learned it funded a legal camp that helped 30 vendors in Sarojini Nagar
                                    recover wrongfully seized goods. That's impact I can see."
                                    <span style={{ display: 'block', color: COLORS.stoneLight, fontSize: 14, marginTop: 12, fontStyle: 'italic' }}>
                                        — Ritu Sharma, New Delhi
                                    </span>
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
            <section style={{ background: '#fff', padding: '96px 0' }}>
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <FadeIn>
                        <Label>FAQ</Label>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: COLORS.ink, marginBottom: 8 }}>
                            Frequently Asked Questions
                        </h2>
                        <Divider />
                        <p style={{ color: COLORS.stone, fontSize: 16, lineHeight: 1.8, marginBottom: 48 }}>
                            Have more questions? <a href="/contact" style={{ color: COLORS.saffron, fontWeight: 600, textDecoration: 'none' }}>Contact us</a>.
                        </p>
                    </FadeIn>
                    {FAQS.map((faq) => (
                        <FaqItem key={faq.q} {...faq} />
                    ))}
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
                                Every rupee you give<br />protects a livelihood.
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 12, maxWidth: 480 }}>
                                Join thousands of supporters standing with India's street vendors. Together, we make justice accessible.
                            </p>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <div style={{ display: 'flex', gap: 16, flexShrink: 0 }} className="flex-wrap">
                                <a
                                    href="#donate-form"
                                    style={{ background: COLORS.ink, color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }}
                                    className="transition-opacity hover:opacity-90"
                                >
                                    Donate Now
                                </a>
                                <Link
                                    to="/get-involved"
                                    style={{ border: '2px solid #fff', color: '#fff', fontWeight: 700, padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }}
                                    className="transition-opacity hover:opacity-90"
                                >
                                    Get Involved
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

        </div>
    );
}
