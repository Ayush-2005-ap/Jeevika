import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { key: "home", path: "/" },
    {
      key: "campaign",
      path: "/campaign",
      dropdown: [
        { name: "Livelihood Freedom", path: "/campaign/livelihood" },
        { name: "Rajasthan", path: "/campaign/rajasthan" },
        { name: "Bihar", path: "/campaign/bihar" },
        { name: "Advocacy", path: "/campaign/advocacy" },
      ],
    },
    { key: "research", path: "/research" },
    {
      key: "festival",
      path: "/festival",
      dropdown: [
        { name: "Festival 2024", path: "/festival/2024" },
        { name: "Jeevika Awards", path: "/festival/awards" },
        { name: "Submission Guidelines", path: "/festival/guidelines" },
        { name: "Previous Festivals", path: "/festival/previous" },
      ],
    },
    { key: "involved", path: "/get-involved" },
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
  ];

  const openJeevikaApp = () => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod|macintosh/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIOS) {
      window.open("https://apps.apple.com/in/app/idXXXXXXXX", "_blank");
    } else if (isAndroid) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.jeevika&pcampaignid=web_share",
        "_blank"
      );
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=com.jeevika&pcampaignid=web_share",
        "_blank"
      );
    }
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
              <NavItem
                key={link.key}
                link={link}
                label={t[lang][link.key]}
                active={location.pathname === link.path}
              />
            ))}

            {/* App CTA */}
            <motion.button
              onClick={openJeevikaApp}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold cursor-pointer"
            >
              📱 {t[lang].app}
            </motion.button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
              className="px-3 py-1.5 rounded-full border text-xs font-semibold cursor-pointer"
            >
              {lang}
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-700 transition ${isOpen && "rotate-45 translate-y-1.5"}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition ${isOpen && "opacity-0"}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition ${isOpen && "-rotate-45 -translate-y-1.5"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-4 rounded-xl bg-white shadow-md overflow-hidden"
            >
              <div className="p-4 space-y-3">

                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 font-medium cursor-pointer"
                  >
                    {t[lang][link.key]}
                  </Link>
                ))}

                <hr />

                {/* Mobile App CTA */}
                <button
                  onClick={openJeevikaApp}
                  className="w-full text-center py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold cursor-pointer"
                >
                  📱 {t[lang].app}
                </button>

                {/* Mobile Language Toggle */}
                <button
                  onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
                  className="w-full py-2 border rounded-full text-sm font-semibold cursor-pointer"
                >
                  {lang === "EN" ? "हिंदी" : "English"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ link, label, active }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <Link
        to={link.path}
        className={`cursor-pointer px-3 py-2 text-sm font-medium transition
        ${active ? "text-primary-600" : "text-gray-700 hover:text-primary-600"}`}
      >
        {label}
      </Link>

      {link.dropdown && open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border py-2"
        >
          {link.dropdown.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
