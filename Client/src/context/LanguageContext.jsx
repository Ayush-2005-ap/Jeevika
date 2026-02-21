import { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

const LANG_CODES = { HI: "hi", EN: "en", BN: "bn", TA: "ta", TE: "te" };
const langToI18n = (val) => LANG_CODES[String(val || "").toUpperCase()] || "en";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem("lang");
    if (stored) return stored.toUpperCase();
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === "hi" || browserLang === "bn" || browserLang === "ta" || browserLang === "te")
      return browserLang === "hi" ? "HI" : browserLang === "bn" ? "BN" : browserLang === "ta" ? "TA" : "TE";
    return "EN";
  });

  useEffect(() => {
    const normalized = lang?.toUpperCase?.() || lang;
    if (LANG_CODES[normalized]) {
      localStorage.setItem("lang", normalized);
    }
    const code = langToI18n(lang);
    document.documentElement.setAttribute("lang", code);
    i18n.changeLanguage(code);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
