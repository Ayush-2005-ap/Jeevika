import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "HI", label: "हिंदी" },
    { code: "EN", label: "English" },
    { code: "BN", label: "বাংলা" },
    { code: "TA", label: "தமிழ்" },
    { code: "TE", label: "తెలుగు" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const map = {
      HI: "hi",
      EN: "en",
      BN: "bn",
      TA: "ta",
      TE: "te",
    };
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
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold"
            >
              📱 {t("nav_app")}
            </button>

            {/* Language */}
            <div className="relative group">
              <button
                type="button"
                className="px-4 py-1.5 rounded-full border text-sm font-semibold"
              >
                🌐 {lang}
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                {languages.map((l) => (
                  <button
                    type="button"
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    {l.label}
                  </button>
                ))}
              </div>

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

              {/* Language Switcher Mobile */}
              <div className="flex gap-2 pt-2">
                {["HI", "EN", "BN", "TA", "TE"].map((l) => (
                  <button
                    type="button"
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full border text-sm ${lang === l ? "bg-primary-600 text-white" : "hover:bg-gray-100"
                      }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;