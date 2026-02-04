import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Campaign",
      path: "/campaign",
      dropdown: [
        { name: "Livelihood Freedom", path: "/campaign/livelihood" },
        { name: "Rajasthan", path: "/campaign/rajasthan" },
        { name: "Bihar", path: "/campaign/bihar" },
        { name: "Advocacy", path: "/campaign/advocacy" },
      ],
    },
    { name: "Research", path: "/research" },
    {
      name: "Festival",
      path: "/festival",
      dropdown: [
        { name: "Festival 2024", path: "/festival/2024" },
        { name: "Jeevika Awards", path: "/festival/awards" },
        { name: "Submission Guidelines", path: "/festival/guidelines" },
        { name: "Previous Festivals", path: "/festival/previous" },
      ],
    },
    { name: "Get Involved", path: "/get-involved" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
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

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                active={location.pathname === link.path}
              />
            ))}

            <a
              href="https://play.google.com/store/apps/details?id=com.jeevika&pcampaignid=web_share"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer bg-[#9A4222] text-amber-300 hover:bg-amber-700 hover:text-black px-3 py-1.5 rounded-full transition text-sm font-medium"
            >
              Jeevika App
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <span className="sr-only">Toggle</span>
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
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <MobileNavItem
                    key={link.name}
                    link={link}
                    close={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ link, active }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative">
      <Link
        to={link.path}
        className={`cursor-pointer px-3 py-2 text-sm font-medium transition
        ${active ? "text-amber-600" : "text-gray-700 hover:text-amber-600"}`}
      >
        {link.name}
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
              className="cursor-pointer block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-amber-600"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const MobileNavItem = ({ link, close }) => {
  const [open, setOpen] = useState(false);

  if (link.dropdown) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between px-3 py-2 text-gray-700 font-medium cursor-pointer"
        >
          {link.name}
          <span>{open ? "−" : "+"}</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pl-4 space-y-1"
            >
              {link.dropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={close}
                  className="cursor-pointer block px-3 py-1 text-sm text-gray-600 hover:text-amber-600"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={link.path}
      onClick={close}
      className="cursor-pointer block px-3 py-2 text-gray-700 hover:text-amber-600"
    >
      {link.name}
    </Link>
  );
};

export default Navbar;
