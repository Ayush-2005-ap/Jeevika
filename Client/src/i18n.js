import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n to react-i18next
  .init({
    debug: true,
    lng: "hi",
    fallbackLng: "hi",
    resources: {
      en: {
        translation: {
          greeting: "Empowering Livelihoods Across India",
          sub: "Building sustainable futures for street vendors.",
          subtitle: "Learn More",
          nav_home: "Home",
          nav_campaign: "Campaign",
          nav_research: "Research",
          nav_festival: "Festival",
          nav_involved: "Get Involved",
          nav_about: "About Us",
          nav_contact: "Contact",
          nav_app: "Jeevika App",
        }
      },
      hi: {
        translation: {
          greeting: "भारत भर में आजीविका को सशक्त बनाना",
          sub: "स्ट्रीट वेंडरों के लिए टिकाऊ भविष्य बनाना।",
          subtitle: "और जानें",
          nav_home: "होम",
          nav_campaign: "अभियान",
          nav_research: "अनुसंधान",
          nav_festival: "उत्सव",
          nav_involved: "जुड़ें",
          nav_about: "हमारे बारे में",
          nav_contact: "संपर्क",
          nav_app: "जीविका ऐप",
        }
      },
      bn: {
        translation: {
          greeting: "ভারত জুড়ে জীবিকা শক্তিশালী করা",
          sub: "স্ট্রিট ভেন্ডরদের জন্য টেকসই ভবিষ্যত তৈরি করা।",
          subtitle: "আরও জানুন",
          nav_home: "হোম",
          nav_campaign: "অভিযান",
          nav_research: "গবেষণা",
          nav_festival: "উৎসব",
          nav_involved: "যোগ দিন",
          nav_about: "আমাদের সম্পর্কে",
          nav_contact: "যোগাযোগ",
          nav_app: "জীবিকা অ্যাপ",
        }
      },
      ta: {
        translation: {
          greeting: "இந்தியாவை முழுவதும் வாழ்வாதாரத்தை மேம்படுத்துதல்",
          sub: "வழிப்போக்குவரத்துக்கான நிலையான எதிர்காலங்களை உருவாக்குதல்.",
          subtitle: "மேலும் அறிய",
          nav_home: "முகப்பு",
          nav_campaign: "பிரச்சாரம்",
          nav_research: "ஆராய்ச்சி",
          nav_festival: "திருவிழா",
          nav_involved: "இணைந்துகொள்ளுங்கள்",
          nav_about: "எங்களை பற்றி",
          nav_contact: "தொடர்பு",
          nav_app: "ஜீவிகா செயலி",
        }
      },
      te: {
        translation: {
          greeting: "భారతదేశం అంతటా జీవనాధారాలను శక్తివంతం చేయడం",
          sub: "స్ట్రీట్ వెండర్ల కోసం స్థిరమైన భవిష్యత్తులను నిర్మించడం.",
          subtitle: "మరింత తెలుసుకోండి",
          nav_home: "హోమ్",
          nav_campaign: "ప్రచారం",
          nav_research: "శోధన",
          nav_festival: "పండుగ",
          nav_involved: "చేరండి",
          nav_about: "మా గురించి",
          nav_contact: "సంప్రదించండి",
          nav_app: "జీవికా యాప్",
        }
      }
    }
  });

export default i18n;