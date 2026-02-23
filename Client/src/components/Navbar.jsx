import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Film, Megaphone, BookOpen } from "lucide-react";

/* ── Repository dropdown items ── */
const repositoryItems = [
  {
    key: "festival",
    path: "/festival",
    icon: Film,
    label: "Festival",
    desc: "Asia Livelihood Documentary Festival",
  },
  {
    key: "campaign",
    path: "/campaign",
    icon: Megaphone,
    label: "Campaign",
    desc: "Street vendor rights advocacy",
  },
  {
    key: "research",
    path: "/research",
    icon: BookOpen,
    label: "Research",
    desc: "Reports, data & policy papers",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [repoOpen, setRepoOpen] = useState(false);
  const [mobileRepoOpen, setMobileRepoOpen] = useState(false);

  const repoRef = useRef(null);
  const hoverTimeout = useRef(null);

  const location = useLocation();
  const { lang, setLang } = useLang();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "HI", label: "हिंदी" },
    { code: "EN", label: "English" },
    { code: "BN", label: "বাংলা" },
    { code: "TA", label: "தமிழ்" },
    { code: "TE", label: "తెలుగు" },
  ];

  const activeLang = languages.find((l) => l.code === lang) || languages[1];

  /* scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* sync i18n */
  useEffect(() => {
    const map = { HI: "hi", EN: "en", BN: "bn", TA: "ta", TE: "te" };
    const code = map[lang] || map[String(lang || "").toUpperCase()] || "en";
    i18n.changeLanguage(code);
  }, [lang, i18n]);

  /* close repo dropdown on route change */
  useEffect(() => {
    setRepoOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  const handleLangChange = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  /* smooth hover open/close with small delay so cursor can travel to dropdown */
  const openRepo = () => {
    clearTimeout(hoverTimeout.current);
    setRepoOpen(true);
  };
  const closeRepo = () => {
    hoverTimeout.current = setTimeout(() => setRepoOpen(false), 120);
  };

  /* flat nav links — festival/campaign/research moved to Repository dropdown */
  const navLinks = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "involved", path: "/get-involved" },
    { key: "contact", path: "/contact" },
  ];

  const isRepoActive = repositoryItems.some(
    (item) => location.pathname === item.path
  );

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
              <span className="text-xs text-gray-500 mt-0.5 font-black">
                Law, Liberty &amp; Livelihood
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Flat links */}
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition rounded-lg
                  ${location.pathname === link.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-bold"
                  }`}
              >
                {t(`nav_${link.key}`)}
              </Link>
            ))}

            {/* ── Repository dropdown ── */}
            <div
              ref={repoRef}
              className="relative"
              onMouseEnter={openRepo}
              onMouseLeave={closeRepo}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg transition
                  ${isRepoActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  }`}
              >
                Repository
                <motion.span
                  animate={{ rotate: repoOpen ? 180 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex items-center"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {repoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={openRepo}
                    onMouseLeave={closeRepo}
                    className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{ top: "100%" }}
                  >
                    {/* Header strip */}
                    <div className="px-4 pt-3 pb-2">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                        Repository
                      </p>
                    </div>

                    <div className="px-2 pb-2">
                      {repositoryItems.map((item, i) => {
                        const Icon = item.icon;
                        const active = location.pathname === item.path;
                        return (
                          <motion.div
                            key={item.key}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              to={item.path}
                              className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-all group
                                ${active
                                  ? "bg-primary-50 text-primary-700"
                                  : "hover:bg-gray-50 text-gray-700"
                                }`}
                            >
                              <div
                                className="mt-0.5 p-1.5 rounded-lg flex-shrink-0 transition-colors"
                                style={{
                                  background: active ? "rgba(232,118,10,0.12)" : undefined,
                                  color: active ? "#E8760A" : undefined,
                                }}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <p className={`text-sm font-semibold leading-tight
                                  ${active ? "text-primary-700" : "text-gray-800"}`}>
                                  {item.label}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                              {active && (
                                <div className="ml-auto mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                              )}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* App button */}
            <button
              type="button"
              className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold hover:scale-105 transition-transform"
            >
              📱 {t("nav_app")}
            </button>

            {/* ── Language Switcher ── */}
            <div className="relative">
              <motion.button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 rounded-full border-2 border-gray-200 bg-white shadow-sm hover:border-primary-400 hover:shadow-md transition-all duration-300 flex items-center gap-2 group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <Globe className="relative w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                <span className="relative text-sm font-semibold text-gray-700 group-hover:text-primary-700 transition-colors">
                  {activeLang.code}
                </span>
                <motion.svg
                  className="relative w-4 h-4 text-gray-500 group-hover:text-primary-600"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

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
                          <Globe className="w-5 h-5 flex-shrink-0" />
                          <span className="flex-1 text-left">{l.label}</span>
                          {lang === l.code && (
                            <motion.svg
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </motion.svg>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {langOpen && (
                <div className="fixed inset-0 z-[-1]" onClick={() => setLangOpen(false)} />
              )}
            </div>
          </div>

          {/* Hamburger */}
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

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t shadow-md overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 space-y-1">

                {/* Flat links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg transition
                      ${location.pathname === link.path
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                      }`}
                  >
                    {t(`nav_${link.key}`)}
                  </Link>
                ))}

                {/* Repository accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileRepoOpen(!mobileRepoOpen)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold rounded-lg transition
                      ${isRepoActive ? "text-primary-600 bg-primary-50" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    <span>Repository</span>
                    <motion.span
                      animate={{ rotate: mobileRepoOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileRepoOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden ml-3 mt-1 border-l-2 pl-3"
                        style={{ borderColor: "rgba(232,118,10,0.4)" }}
                      >
                        {repositoryItems.map((item) => {
                          const Icon = item.icon;
                          const active = location.pathname === item.path;
                          return (
                            <Link
                              key={item.key}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition mb-1"
                              style={{ color: active ? "#E8760A" : undefined, background: active ? "rgba(232,118,10,0.06)" : undefined, fontWeight: active ? 600 : undefined }}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" style={{ color: active ? "#E8760A" : undefined }} />
                              <div>
                                <p className="font-medium leading-tight">{item.label}</p>
                                <p className="text-xs text-gray-400">{item.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* App button */}
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold"
                >
                  📱 {t("nav_app")}
                </button>

                {/* Language switcher mobile */}
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">
                    Choose Language
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((l) => (
                      <motion.button
                        key={l.code}
                        type="button"
                        onClick={() => { setLang(l.code); setIsOpen(false); }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all
                          ${lang === l.code
                            ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600 shadow-md"
                            : "bg-white text-gray-700 border-gray-200 hover:border-primary-400 hover:bg-primary-50"
                          }`}
                      >
                        <Globe className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs">{l.label}</span>
                        {lang === l.code && (
                          <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;