import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    campaign: [
      { name: "Livelihood Freedom", path: "/campaign/livelihood" },
      { name: "Campaign in Rajasthan", path: "/campaign/rajasthan" },
      { name: "Campaign in Bihar", path: "/campaign/bihar" },
      { name: "Advocacy", path: "/campaign/advocacy" },
    ],
    festival: [
      { name: "Current Festival", path: "/festival/2024" },
      { name: "Jeevika Awards", path: "/festival/awards" },
      { name: "Submission Guidelines", path: "/festival/guidelines" },
      { name: "Previous Festivals", path: "/festival/previous" },
    ],
    resources: [
      { name: "Research & Reports", path: "/research" },
      { name: "Street Vendors Act", path: "/research/street-vendors" },
      { name: "Policy Documents", path: "/research/policy" },
      { name: "Case Studies", path: "/research/case-studies" },
    ],
    organization: [
      { name: "About Us", path: "/about" },
      { name: "Get Involved", path: "/get-involved" },
      { name: "Jeevika Fellowship", path: "/fellowship" },
      { name: "Contact Us", path: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "LinkedIn", url: "#" },
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
                <p className="text-xs text-gray-500">Law, Liberty & Livelihood</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering street vendors and informal workers through advocacy,
              research, and policy change.
            </p>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary-500 hover:text-primary-500"
                >
                  {s.name[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-primary-500 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Jeevika Campaign. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary-500">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-500">
              Terms of Use
            </Link>
            <Link to="/sitemap" className="hover:text-primary-500">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
