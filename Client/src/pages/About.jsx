import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const workRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const partnersRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const isHistoryInView = useInView(historyRef, { once: true, margin: '-100px' });
  const isWorkInView = useInView(workRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const isPartnersInView = useInView(partnersRef, { once: true, margin: '-100px' });

  const coreValues = [
    {
      icon: '⚖️',
      title: 'Economic Freedom',
      description: 'We believe in the fundamental right of every individual to pursue an honest livelihood without unnecessary regulatory barriers.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🤝',
      title: 'Grassroots Empowerment',
      description: 'We work directly with communities, amplifying the voices of street vendors and informal workers in policy discussions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📊',
      title: 'Evidence-Based Advocacy',
      description: 'Our campaigns are grounded in rigorous research, data analysis, and real-world experiences of those we serve.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🌟',
      title: 'Innovation',
      description: 'We use creative approaches like documentary festivals and fellowships to drive social change and policy reform.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🎯',
      title: 'Impact-Driven',
      description: 'We measure success by real policy changes and improved lives, not just activities or outputs.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🔍',
      title: 'Transparency',
      description: 'We maintain accountability to the communities we serve and openly share our research, findings, and methodologies.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const workAreas = [
    {
      title: 'Policy Research & Advocacy',
      description: 'Conducting comprehensive research on livelihood regulations and advocating for policy reforms that protect vendor rights.',
      icon: '📋',
      achievements: [
        'Contributed to Street Vendors Act 2014',
        'Bamboo declassification campaign',
        'State-level policy reforms in Rajasthan & Bihar'
      ]
    },
    {
      title: 'Legal Support',
      description: 'Providing legal aid and awareness to street vendors through our fellowship program and legal clinics.',
      icon: '⚖️',
      achievements: [
        '50+ law fellows trained',
        '1000+ vendors provided legal support',
        'Legal awareness workshops across India'
      ]
    },
    {
      title: 'Community Mobilization',
      description: 'Organizing and empowering street vendor associations to collectively advocate for their rights.',
      icon: '👥',
      achievements: [
        '100+ vendor associations strengthened',
        'Regular community meetings and workshops',
        'Vendor leadership development programs'
      ]
    },
    {
      title: 'Documentary Festival',
      description: 'Showcasing livelihood stories through our annual Asia Livelihood Documentary Festival since 2004.',
      icon: '🎬',
      achievements: [
        '20+ years of festivals',
        '1000+ films screened',
        'Films from 15+ countries'
      ]
    }
  ];

  const timeline = [
    {
      year: '2004',
      title: 'Jeevika Campaign Launched',
      description: 'Centre for Civil Society launches the Jeevika campaign to advocate for livelihood freedom and street vendor rights.',
      icon: '🚀'
    },
    {
      year: '2004',
      title: 'First Documentary Festival',
      description: 'Inaugural Asia Livelihood Documentary Festival held, bringing livelihood issues to cinema.',
      icon: '🎬'
    },
    {
      year: '2009',
      title: 'National Advocacy Begins',
      description: 'Intensified advocacy for national street vendor legislation, working with vendor unions nationwide.',
      icon: '📢'
    },
    {
      year: '2011',
      title: 'Fellowship Program Launched',
      description: 'Started Jeevika Fellowship for law students to provide legal aid to street vendors.',
      icon: '🎓'
    },
    {
      year: '2014',
      title: 'Street Vendors Act Passed',
      description: 'Historic victory! Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act passed by Parliament.',
      icon: '🏆'
    },
    {
      year: '2015',
      title: 'Bamboo Campaign Success',
      description: '"Bamboo is not a Tree" campaign leads to reclassification, removing restrictions on bamboo trade.',
      icon: '🎋'
    },
    {
      year: '2016-Present',
      title: 'State-Level Implementation',
      description: 'Ongoing work ensuring proper implementation of Street Vendors Act across Indian states.',
      icon: '🗺️'
    },
    {
      year: '2020-Present',
      title: 'COVID-19 Response',
      description: 'Advocacy for vendor support during pandemic, helping vendors access government schemes like PM SVANidhi.',
      icon: '🛡️'
    }
  ];

  const impactNumbers = [
    { number: '10M+', label: 'Street Vendors Impacted', icon: '👥' },
    { number: '50+', label: 'Cities Covered', icon: '🏙️' },
    { number: '100+', label: 'Research Reports', icon: '📊' },
    { number: '15+', label: 'Years of Advocacy', icon: '📅' },
    { number: '1000+', label: 'Vendors Legally Aided', icon: '⚖️' },
    { number: '20+', label: 'Film Festivals', icon: '🎬' }
  ];

  const team = [
    {
      name: 'Parth J Shah',
      role: 'Founder & President, CCS',
      image: '👨‍💼',
      bio: 'Leading voice in policy reform and economic freedom in India'
    },
    {
      name: 'Sapna Swaroop',
      role: 'Programme Head, Jeevika',
      image: '👩‍💼',
      bio: 'Expert in livelihood policy and street vendor advocacy'
    },
    {
      name: 'Research Team',
      role: 'Policy Analysts',
      image: '👥',
      bio: 'Dedicated researchers documenting livelihood challenges'
    },
    {
      name: 'Legal Fellows',
      role: 'Legal Aid Providers',
      image: '⚖️',
      bio: 'Law students providing grassroots legal support'
    }
  ];

  const partners = [
    { name: 'Street Vendor Unions', type: 'Community Partners' },
    { name: 'National Association of Street Vendors (NASVI)', type: 'Advocacy Partners' },
    { name: 'Law Schools Across India', type: 'Academic Partners' },
    { name: 'Documentary Filmmakers', type: 'Creative Partners' },
    { name: 'Policy Think Tanks', type: 'Research Partners' },
    { name: 'International Development Organizations', type: 'Global Partners' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl border-4 border-white/30">
                ✊
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About Jeevika
            </h1>
            <p className="text-2xl md:text-3xl text-primary-100 mb-4 font-light">
              Law, Liberty & Livelihood
            </p>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Fighting for the freedom of millions to earn an honest living since 2004
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                Our Purpose
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border-l-4 border-primary-600 shadow-lg"
              >
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To advocate for and protect the livelihood rights of street vendors and informal workers across India by removing regulatory barriers, providing legal support, and driving evidence-based policy reforms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border-l-4 border-secondary-600 shadow-lg"
              >
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every individual has the freedom to pursue an honest livelihood without facing unnecessary regulatory obstacles, where the free market—not the government—creates opportunities for all.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-4xl mr-3">💡</span>
                Our Philosophy
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Centre for Civil Society's Centre for Law, Liberty, and Livelihood is founded on the principle that the quality of life is intrinsically related to the pursuit of livelihood. We believe that choice and pursuit of livelihood is more valuable for those at the bottom rung of the economic ladder—<strong className="text-white">nobody appreciates free enterprise more than the poor hawker.</strong>
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Through research, advocacy, and outreach activities, we shift the terms of public debate in favor of deregulation of exit and entry barriers for the pursuit of an honest livelihood. The free market, not the government, is best suited to offer opportunities for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              By the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-700 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and decision-making
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center text-3xl mb-4 shadow-md`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section ref={workRef} className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Areas of Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isWorkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">{area.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {area.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-primary-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/History */}
      <section ref={historyRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Two Decades of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our fight for livelihood freedom
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                      {event.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'} bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg border border-primary-100`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary-600">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-primary-400 to-primary-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              The People Behind Jeevika
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section ref={partnersRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Collaboration
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working together with organizations across sectors to drive change
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isPartnersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg border border-primary-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-primary-600 font-semibold">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Organization - CCS */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🏛️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Part of Centre for Civil Society
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Jeevika is a flagship campaign of Centre for Civil Society (CCS), India's leading public policy think tank. CCS works to promote individual choice, free markets, and accountability in governance through research, advocacy, and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ccs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Visit CCS Website
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether as a volunteer, intern, partner, or supporter—be part of our movement for livelihood freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-10 rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;