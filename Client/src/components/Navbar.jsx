import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: "HI", label: "हिंदी", flag: "🇮🇳" },
    { code: "EN", label: "English", flag: "🇮🇳" },
    { code: "BN", label: "বাংলা", flag: "🇮🇳" },
    { code: "TA", label: "தமிழ்", flag: "🇮🇳" },
    { code: "TE", label: "తెలుగు", flag: "🇮🇳" },
  ];

  const activeLang = languages.find((l) => l.code === lang) || languages[1];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const map = { HI: "hi", EN: "en", BN: "bn", TA: "ta", TE: "te" };
    i18n.changeLanguage(map[lang] || "hi");
  }, [lang, i18n]);

  const navLinks = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "festival", path: "/festival" },
    { key: "campaign", path: "/campaign" },
    { key: "research", path: "/research" },
    { key: "involved", path: "/get-involved" },
    { key: "contact", path: "/contact" },
  ];

  const handleLangChange = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur shadow-sm py-2" : "bg-white/60 py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <img src="/Logo.png" alt="Jeevika Logo" className="h-10" />
              <span className="text-xs text-gray-500 mt-0.5">
                Law, Liberty & Livelihood
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition
                  ${location.pathname === link.path
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                  }`}
              >
                {t(`nav_${link.key}`)}
              </Link>
            ))}

            <button
              type="button"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold hover:scale-105 transition-transform"
            >
              📱 {t("nav_app")}
            </button>

            {/* Enhanced Language Switcher - Desktop */}
            <div className="relative">
              <motion.button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 rounded-full border-2 border-gray-200 bg-white shadow-sm hover:border-primary-400 hover:shadow-md transition-all duration-300 flex items-center gap-2 group overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <span className="relative text-xl">{activeLang.flag}</span>
                <span className="relative text-sm font-semibold text-gray-700 group-hover:text-primary-700 transition-colors">
                  {activeLang.code}
                </span>
                
                {/* Chevron icon with rotation animation */}
                <motion.svg
                  className="relative w-4 h-4 text-gray-500 group-hover:text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              {/* Dropdown Menu with Framer Motion */}
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {languages.map((l, index) => (
                        <motion.button
                          key={l.code}
                          type="button"
                          onClick={() => handleLangChange(l.code)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4 }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                            ${lang === l.code
                              ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md"
                              : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                          <span className="text-xl">{l.flag}</span>
                          <span className="flex-1 text-left">{l.label}</span>
                          {lang === l.code && (
                            <motion.svg
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </motion.svg>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Click outside to close */}
              {langOpen && (
                <div
                  className="fixed inset-0 z-[-1]"
                  onClick={() => setLangOpen(false)}
                />
              )}
            </div>
          </div>

          {/* Hamburger for Mobile */}
          <button
            type="button"
            className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <div className="flex flex-col px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition
                    ${location.pathname === link.path
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                    }`}
                >
                  {t(`nav_${link.key}`)}
                </Link>
              ))}

              <button
                type="button"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold"
              >
                📱 {t("nav_app")}
              </button>

              {/* Enhanced Language Switcher Mobile */}
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">
                  Choose Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((l) => (
                    <motion.button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setIsOpen(false);
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all
                        ${lang === l.code
                          ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600 shadow-md"
                          : "bg-white text-gray-700 border-gray-200 hover:border-primary-400 hover:bg-primary-50"
                        }`}
                    >
                      <span className="text-lg">{l.flag}</span>
                      <span className="text-xs">{l.label}</span>
                      {lang === l.code && (
                        <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;