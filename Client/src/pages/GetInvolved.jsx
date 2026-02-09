import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const heroRef = useRef(null);
  const rolesRef = useRef(null);
  const benefitsRef = useRef(null);
  const formRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isRolesInView = useInView(rolesRef, { once: true, margin: '-100px' });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

  const opportunities = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      subtitle: 'Make a difference in your community',
      description: 'Join our team of passionate volunteers working directly with street vendors to protect their rights and improve their livelihoods.',
      icon: '🤝',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      commitment: 'Flexible hours',
      duration: 'Ongoing',
      responsibilities: [
        'Community outreach and engagement',
        'Assisting with campaign activities',
        'Data collection and documentation',
        'Event organization and support',
        'Social media and content creation'
      ],
      requirements: [
        'Passion for social justice',
        'Good communication skills',
        'Ability to work with diverse communities',
        'Commitment of at least 10 hours per week',
        'Basic computer literacy'
      ]
    },
    {
      id: 'intern',
      title: 'Intern',
      subtitle: 'Learn while making an impact',
      description: 'Gain hands-on experience in policy research, advocacy, and community development while contributing to meaningful social change.',
      icon: '🎓',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverBorder: 'hover:border-green-400',
      commitment: 'Full-time / Part-time',
      duration: '3-6 months',
      responsibilities: [
        'Policy research and analysis',
        'Report writing and documentation',
        'Supporting advocacy campaigns',
        'Data analysis and visualization',
        'Legal research and documentation'
      ],
      requirements: [
        'Currently enrolled in or recent graduate from college/university',
        'Strong research and writing skills',
        'Interest in social policy and development',
        'Proficiency in MS Office',
        'Ability to commit 3-6 months'
      ]
    },
    {
      id: 'fellowship',
      title: 'Jeevika Fellowship',
      subtitle: 'For law students passionate about justice',
      description: 'Law students can provide legal aid to street vendors while gaining practical experience in public interest law and advocacy.',
      icon: '⚖️',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      commitment: 'Part-time',
      duration: '6-12 months',
      responsibilities: [
        'Providing legal aid to street vendors',
        'Researching street vending laws and policies',
        'Drafting legal documents and petitions',
        'Participating in advocacy initiatives',
        'Conducting legal awareness workshops'
      ],
      requirements: [
        'Currently enrolled in law school (3rd year or above)',
        'Strong interest in public interest law',
        'Good legal research and writing skills',
        'Ability to work with marginalized communities',
        'Commitment of 15-20 hours per week'
      ]
    }
  ];

  const benefits = [
    {
      icon: '📚',
      title: 'Skill Development',
      description: 'Gain practical experience in advocacy, research, and community engagement'
    },
    {
      icon: '🌟',
      title: 'Certificate',
      description: 'Receive a certificate of appreciation upon successful completion'
    },
    {
      icon: '👥',
      title: 'Networking',
      description: 'Connect with like-minded individuals and social sector professionals'
    },
    {
      icon: '💼',
      title: 'Career Growth',
      description: 'Build your portfolio and enhance your career prospects'
    },
    {
      icon: '🎯',
      title: 'Mentorship',
      description: 'Learn from experienced professionals in the field'
    },
    {
      icon: '❤️',
      title: 'Make Impact',
      description: 'Contribute to meaningful social change and empower communities'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Former Intern',
      image: '👩‍🎓',
      text: 'My internship at Jeevika was transformative. I learned so much about policy research and got to work directly with street vendor communities.',
      rating: 5
    },
    {
      name: 'Rahul Verma',
      role: 'Volunteer',
      image: '👨‍💼',
      text: 'Volunteering with Jeevika has been incredibly rewarding. The team is supportive and the work is meaningful.',
      rating: 5
    },
    {
      name: 'Ananya Reddy',
      role: 'Fellow',
      image: '👩‍⚖️',
      text: 'The fellowship program helped me understand the intersection of law and livelihood. A great learning experience!',
      rating: 5
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    education: '',
    availability: '',
    motivation: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="text-6xl md:text-7xl">🙌</div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Movement
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Be part of a team that's fighting for the rights and livelihoods of millions of street vendors across India
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { number: '500+', label: 'Active Volunteers' },
                { number: '100+', label: 'Interns Trained' },
                { number: '50+', label: 'Fellows Graduated' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Opportunities Section */}
      <section ref={rolesRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              How You Can Contribute
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the role that fits your skills, interests, and availability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedRole(opp.id)}
                className={`${opp.bgColor} rounded-2xl p-6 border-2 ${opp.borderColor} ${opp.hoverBorder} transition-all duration-300 cursor-pointer ${
                  selectedRole === opp.id ? 'ring-4 ring-primary-200 shadow-xl' : 'hover:shadow-lg'
                }`}
              >
                <div className="text-5xl mb-4">{opp.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{opp.title}</h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">{opp.subtitle}</p>
                <p className="text-gray-700 mb-6">{opp.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Commitment:</strong> {opp.commitment}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Duration:</strong> {opp.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedRole(opp.id);
                    setFormData(prev => ({ ...prev, role: opp.title }));
                    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full bg-gradient-to-r ${opp.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Selected Role Details */}
          {selectedRole && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              {opportunities.filter(opp => opp.id === selectedRole).map(opp => (
                <div key={opp.id}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 flex items-center">
                      <span className="text-4xl mr-3">{opp.icon}</span>
                      {opp.title} - Details
                    </h3>
                    <button
                      onClick={() => setSelectedRole(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {opp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {opp.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Why Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond the satisfaction of making a difference, here's what we offer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Hear From Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" ref={formRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Apply Now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you soon
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                  I'm interested in *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a role</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Intern">Intern</option>
                  <option value="Jeevika Fellowship">Jeevika Fellowship (Law Students)</option>
                </select>
              </div>

              {/* Education & Availability */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Education/Occupation *
                  </label>
                  <input
                    type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="e.g., 3rd Year Law Student"
                  />
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select availability</option>
                    <option value="Immediate">Immediate</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="After 1 month">After 1 month</option>
                  </select>
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Why do you want to join Jeevika? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your motivation, relevant experience, and what you hope to learn..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Resume/CV (PDF, DOC, DOCX)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                    </div>
                    <input
                      id="resume"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.resume && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {formData.resume.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Submit Application
                </button>
              </div>
            </form>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">Application Submitted Successfully!</p>
                  <p className="text-sm">We'll review your application and get back to you within 5-7 business days.</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Have questions? Email us at{' '}
              <a href="mailto:jeevika@ccs.in" className="text-primary-600 font-semibold hover:underline">
                jeevika@ccs.in
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower street vendors and create lasting social change
          </p>
          <button
            onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:shadow-xl inline-flex items-center"
          >
            Apply Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;