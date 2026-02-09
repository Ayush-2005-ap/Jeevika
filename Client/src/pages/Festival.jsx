import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Festival = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const objectivesRef = useRef(null);
  const categoriesRef = useRef(null);
  const awardsRef = useRef(null);
  const pastRef = useRef(null);
  const submissionRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const isObjectivesInView = useInView(objectivesRef, { once: true, margin: '-100px' });
  const isCategoriesInView = useInView(categoriesRef, { once: true, margin: '-100px' });
  const isAwardsInView = useInView(awardsRef, { once: true, margin: '-100px' });
  const isPastInView = useInView(pastRef, { once: true, margin: '-100px' });
  const isSubmissionInView = useInView(submissionRef, { once: true, margin: '-100px' });

  const [activeTab, setActiveTab] = useState('about');

  const objectives = [
    {
      icon: '🎥',
      title: 'Document Livelihood Challenges',
      description: 'Capture and showcase the livelihood challenges faced by rural and urban poor across Asia through powerful documentary storytelling.'
    },
    {
      icon: '📢',
      title: 'Advocate for Policy Change',
      description: 'Bring to light policies, regulations, and social practices that limit livelihood freedom and advocate for meaningful reforms.'
    },
    {
      icon: '🌏',
      title: 'International Platform',
      description: 'Provide filmmakers from across Asia and beyond a platform to share their experiences and creativity on livelihood issues.'
    },
    {
      icon: '🎓',
      title: 'Encourage Student Filmmakers',
      description: 'Support aspiring student filmmakers by giving them opportunities to showcase their work before a captive audience.'
    },
    {
      icon: '💡',
      title: 'Highlight Innovative Solutions',
      description: 'Celebrate innovations and solutions devised by individuals, communities, and organizations to overcome regulatory challenges.'
    },
    {
      icon: '🤝',
      title: 'Foster Dialogue',
      description: 'Create a meeting point for professionals from media, policymaking, and academia to engage in meaningful conversations.'
    }
  ];

  const categories = [
    {
      title: 'Street Vendors & Informal Workers',
      description: 'Stories of street vendors, hawkers, and informal sector workers fighting for their right to livelihood',
      icon: '🛒',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Agriculture & Farmers',
      description: 'Challenges faced by farmers, agricultural workers, and rural communities',
      icon: '🌾',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Micro Entrepreneurs',
      description: 'Small business owners and micro-entrepreneurs navigating regulatory hurdles',
      icon: '💼',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Traditional Livelihoods',
      description: 'Indigenous communities, traditional crafts, and disappearing occupations',
      icon: '🎨',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Urban Poor',
      description: 'Daily wage laborers, rickshaw pullers, and other urban working class',
      icon: '🏙️',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Education & Livelihood',
      description: 'Education entrepreneurs and the connection between learning and earning',
      icon: '📚',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const awards = [
    {
      prize: 'Best Documentary',
      award: '₹1,00,000',
      icon: '🏆',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600'
    },
    {
      prize: 'Second Prize',
      award: '₹50,000',
      icon: '🥈',
      color: 'bg-gradient-to-br from-gray-300 to-gray-500'
    },
    {
      prize: 'Third Prize',
      award: '₹25,000',
      icon: '🥉',
      color: 'bg-gradient-to-br from-orange-400 to-orange-600'
    },
    {
      prize: 'Best Student Film',
      award: '₹15,000',
      icon: '🎓',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      prize: 'Special Jury Award',
      award: 'Trophy & Certificate',
      icon: '⭐',
      color: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      prize: 'Asia Liberty Forum Trip',
      award: 'Malaysia Visit',
      icon: '✈️',
      color: 'bg-gradient-to-br from-green-400 to-green-600'
    }
  ];

  const pastFestivals = [
    { year: '2016', entries: '180+', screened: '25', countries: '12' },
    { year: '2015', entries: '175+', screened: '20', countries: '11' },
    { year: '2014', entries: '150+', screened: '18', countries: '10' },
    { year: '2013', entries: '120+', screened: '38', countries: '8' },
    { year: '2012', entries: '100+', screened: '15', countries: '7' },
    { year: '2011', entries: '90+', screened: '12', countries: '6' }
  ];

  const whyJeevika = [
    {
      reason: 'Unique Focus',
      description: 'Only documentary festival in Asia exclusively focused on livelihood issues and economic freedom'
    },
    {
      reason: 'Real Impact',
      description: 'Our "Bamboo is not a Tree" campaign resulted from a festival screening and led to actual policy change'
    },
    {
      reason: 'Independent Jury',
      description: 'Films evaluated by celebrated professionals from film industry, academia, media, and non-profits'
    },
    {
      reason: 'Beyond Screening',
      description: 'Selected films tour schools, colleges, and cultural centers through "Jeevika on Road" initiative'
    },
    {
      reason: 'Networking',
      description: 'Meet eminent documentary makers, policymakers, and activists in intimate panel discussions'
    },
    {
      reason: 'Open to All',
      description: 'Welcome professional filmmakers and students alike - celebrating both veteran and new voices'
    }
  ];

  const juryMembers = [
    {
      name: 'Nandita Das',
      role: 'Actor & Director',
      year: '2004',
      image: '🎭'
    },
    {
      name: 'Rahul Bose',
      role: 'Actor & Director',
      year: '2005',
      image: '🎬'
    },
    {
      name: 'Deepti Naval',
      role: 'Actor & Director',
      year: '2005',
      image: '⭐'
    },
    {
      name: 'Arundhati Roy',
      role: 'Author & Activist',
      year: '2013',
      image: '📚'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Film Reel Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="15" r="5" fill="currentColor" />
                <circle cx="85" cy="50" r="5" fill="currentColor" />
                <circle cx="50" cy="85" r="5" fill="currentColor" />
                <circle cx="15" cy="50" r="5" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Jeevika: Asia Livelihood
              <br />
              <span className="text-primary-200">Documentary Festival</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto"
            >
              Capturing livelihood challenges faced by the rural and urban poor across Asia since 2004
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button
                onClick={() => document.getElementById('submit-film').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Submit Your Film
              </button>
              <button
                onClick={() => document.getElementById('about-festival').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-10 rounded-lg transition-all duration-300"
              >
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: '20+', label: 'Years Running' },
                { number: '1000+', label: 'Films Screened' },
                { number: '15+', label: 'Countries' },
                { number: '50K+', label: 'Viewers Reached' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
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

      {/* About Festival */}
      <section id="about-festival" ref={aboutRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                About the Festival
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Stories That Drive Change
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 border border-primary-100 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To complement our advocacy efforts, Centre for Civil Society hosts an annual Asia-wide documentary festival to capture the livelihood challenges faced by the rural and urban poor. The festival brings to light policies and regulations that limit livelihood freedom of the poor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By encouraging documentary makers to find interest in livelihood issues and providing them a platform to share their experiences and creativity, Jeevika: Asia Livelihood Documentary Festival hopes to strengthen the Freedom Struggle of the Poor and change the attitudes and minds of many towards inclusive and sustainable development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The festival advocates for liberalizations at the bottom of the pyramid, bringing together filmmakers, policymakers, activists, and audiences in a powerful dialogue for change.
              </p>
            </div>

            {/* Impact Story */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🎋</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Real Impact: Bamboo is Not a Tree Campaign
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our festival doesn't just showcase films—it drives real policy change. A documentary screened at Jeevika led to our successful "Bamboo is not a Tree" campaign, which resulted in amendments to India's classification policy. This is the power of documentary filmmaking combined with strategic advocacy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section ref={objectivesRef} className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isObjectivesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Festival Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What we aim to achieve through cinema and storytelling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isObjectivesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{obj.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{obj.title}</h3>
                <p className="text-gray-600">{obj.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section ref={categoriesRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Film Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Themes & Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome documentaries across various livelihood sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isCategoriesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Prizes */}
      <section ref={awardsRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isAwardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Recognition
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Awards & Prizes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating excellence in documentary filmmaking on livelihood issues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.prize}
                initial={{ opacity: 0, y: 20 }}
                animate={isAwardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative"
              >
                <div className={`${award.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className="text-5xl mb-4">{award.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{award.prize}</h3>
                  <div className="text-2xl font-bold">{award.award}</div>
                  {index === 0 && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Grand Prize
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isAwardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100 inline-block">
              <p className="text-lg text-gray-700">
                <strong className="text-primary-600">All winners</strong> receive trophies, certificates, and extensive media coverage. Selected films are also screened through our <strong>"Jeevika on Road"</strong> initiative across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Jeevika */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Why Participate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              #WhyJeevika
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJeevika.map((item, index) => (
              <motion.div
                key={item.reason}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-l-4 border-primary-600 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">✓</span>
                  {item.reason}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinguished Jury */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Distinguished Jury Members
            </h2>
            <p className="text-lg text-gray-600">
              Over the years, celebrated personalities have graced our festival
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {juryMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-3">{member.image}</div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-xs text-primary-600 font-semibold">Festival {member.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Festivals */}
      <section ref={pastRef} className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPastInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Past Festivals
            </h2>
            <p className="text-lg text-gray-600">
              Two decades of impactful storytelling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastFestivals.map((festival, index) => (
              <motion.div
                key={festival.year}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isPastInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary-400 mb-4">{festival.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span className="text-gray-300">Entries Received</span>
                    <span className="font-bold text-xl">{festival.entries}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span className="text-gray-300">Films Screened</span>
                    <span className="font-bold text-xl">{festival.screened}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Countries</span>
                    <span className="font-bold text-xl">{festival.countries}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPastInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/festival/previous"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group"
            >
              View All Past Festivals
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section id="submit-film" ref={submissionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSubmissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              Submit Your Film
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              How to Participate
            </h2>
            <p className="text-lg text-gray-600">
              Ready to showcase your documentary? Here's how to submit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSubmissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 mb-8"
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Review Guidelines</h3>
                  <p className="text-gray-600">
                    Ensure your documentary fits our theme of livelihood challenges. We accept films on street vendors, farmers, micro-entrepreneurs, and other livelihood issues across Asia.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prepare Your Film</h3>
                  <p className="text-gray-600 mb-2">
                    Films can be of any length (short or feature). Both professional filmmakers and students are welcome. Ensure high-quality video and audio.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Format: DVD, Digital File (MP4, MOV, AVI)</li>
                    <li>• Subtitles: English (if not in English)</li>
                    <li>• Quality: HD preferred, SD acceptable</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fill Submission Form</h3>
                  <p className="text-gray-600">
                    Complete our online submission form with film details, synopsis, director information, and production credits.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pay Entry Fee</h3>
                  <p className="text-gray-600 mb-2">
                    Professional Filmmakers: ₹1,500 | Student Filmmakers: ₹500
                  </p>
                  <p className="text-sm text-gray-500">
                    Fee can be paid online via payment gateway or through bank transfer/cheque
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Film</h3>
                  <p className="text-gray-600">
                    Send your film via online file transfer or physical media to our office. You'll receive a confirmation email with reference ID.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Important Dates
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Submission Deadline</p>
                  <p className="text-gray-600">Check website for current year dates</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Festival Dates</p>
                  <p className="text-gray-600">Typically in August/September</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSubmissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/festival/guidelines"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                View Detailed Guidelines
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/festival/submission-form"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Submission
              </Link>
            </div>

            <p className="text-gray-600 mt-6">
              Questions? Email us at{' '}
              <a href="mailto:jeevika@ccs.in" className="text-primary-600 font-semibold hover:underline">
                jeevika@ccs.in
              </a>{' '}
              or call{' '}
              <a href="tel:+911126537456" className="text-primary-600 font-semibold hover:underline">
                +91-11-26537456
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Story to Tell?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join us in documenting the livelihood struggles and triumphs of Asia's working poor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('submit-film').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Submit Your Film
            </button>
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

export default Festival;