import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Sync i18next safely
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

  // ✅ Base translations (fallback-safe)
  const t = {
    EN: {
      home: "Home",
      campaign: "Campaign",
      research: "Research",
      festival: "Festival",
      involved: "Get Involved",
      about: "About Us",
      contact: "Contact",
      app: "Jeevika App",
    },
    HI: {
      home: "होम",
      campaign: "अभियान",
      research: "अनुसंधान",
      festival: "उत्सव",
      involved: "जुड़ें",
      about: "हमारे बारे में",
      contact: "संपर्क",
      app: "जीविका ऐप",
    },
  };

  // ✅ SAFE getter (THIS FIXES EVERYTHING)
  const getLabel = (key) => {
    return t[lang]?.[key] || t.HI[key];
  };

  const navLinks = [
    { key: "home", path: "/" },
    { key: "campaign", path: "/campaign" },
    { key: "research", path: "/research" },
    { key: "festival", path: "/festival" },
    { key: "involved", path: "/get-involved" },
    { key: "about", path: "/about" },
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
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="flex flex-col leading-none">
              <img src="/Logo.png" alt="Jeevika Logo" className="h-10" />
              <span className="text-xs text-gray-500 mt-0.5">
                Law, Liberty & Livelihood
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition
                ${location.pathname === link.path
                  ? "text-primary-600"
                  : "text-gray-700 hover:text-primary-600"}`}
              >
                {getLabel(link.key)}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold"
            >
              📱 {getLabel("app")}
            </motion.button>

            {/* Language Selector */}
            <div className="relative group">
              <button className="px-4 py-1.5 rounded-full border text-sm font-semibold">
                🌐 {lang}
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {["HI", "EN", "BN", "TA", "TE"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            ☰
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
