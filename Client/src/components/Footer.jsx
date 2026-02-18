import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const footerLinks = {
    campaign: [
      { key: "livelihood", path: "/campaign/livelihood" },
      { key: "rajasthan", path: "/campaign/rajasthan" },
      { key: "bihar", path: "/campaign/bihar" },
      { key: "advocacy", path: "/campaign/advocacy" },
    ],
    festival: [
      { key: "current", path: "/festival/2024" },
      { key: "awards", path: "/festival/awards" },
      { key: "guidelines", path: "/festival/guidelines" },
      { key: "previous", path: "/festival/previous" },
    ],
    resources: [
      { key: "research_reports", path: "/research" },
      { key: "vendors_act", path: "/research/street-vendors" },
      { key: "policy_docs", path: "/research/policy" },
      { key: "case_studies", path: "/research/case-studies" },
    ],
    organization: [
      { key: "about", path: "/about" },
      { key: "involved", path: "/get-involved" },
      { key: "fellowship", path: "/fellowship" },
      { key: "contact", path: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/ccsindia", icon: <FaFacebookF /> },
    { name: "Twitter", url: "https://twitter.com/ccsindia", icon: <FaTwitter /> },
    { name: "YouTube", url: "https://www.youtube.com/c/ccsindiatv", icon: <FaYoutube /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ccsindia/", icon: <FaLinkedinIn /> },
    { name: "Instagram", url: "https://www.instagram.com/ccsindia/", icon: <FaInstagram /> },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-400">
      {/* glow */}
      <div className="absolute inset-x-0 -top-24 h-32 bg-primary-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold">
                J
              </div>
              <div>
                <h3 className="text-white font-bold">JEEVIKA</h3>
                <p className="text-xs text-gray-500">
                  {t("footer_tagline")}
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              {t("footer_desc")}
            </p>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 text-lg"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {t(`footer_${title}`)}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.key}>
                    <Link
                      to={link.path}
                      className="hover:text-primary-500 transition"
                    >
                      {t(`footer_link_${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} {t("footer_copyright")}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary-500">
              {t("footer_privacy")}
            </Link>
            <Link to="/terms" className="hover:text-primary-500">
              {t("footer_terms")}
            </Link>
            <Link to="/sitemap" className="hover:text-primary-500">
              {t("footer_sitemap")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
