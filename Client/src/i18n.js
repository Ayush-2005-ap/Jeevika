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
          about_title: "About Jeevika",
          about_desc:
            "Jeevika is dedicated to improving livelihoods by empowering communities, supporting entrepreneurs, and driving sustainable development.",

          feature_1_title: "Community Empowerment",
          feature_1_desc:
            "We work with grassroots communities to build sustainable livelihoods.",

          feature_2_title: "Skill Development",
          feature_2_desc:
            "Providing training and tools for long-term economic independence.",

          feature_3_title: "Inclusive Growth",
          feature_3_desc:
            "Ensuring access to opportunities for all sections of society.",

          impact_title: "Our Impact",
          impact_families: "Families Helped",
          impact_communities: "Communities Reached",
          impact_partners: "Partners",

          festival_title: "Justice by Jeevika",
          festival_desc:
            "Real stories. Real struggles. Real justice — short documentary clips highlighting the voices of street vendors across India.",
          festival_button: "View More on YouTube",


          cta_title: "Join the Movement for Justice & Livelihood",
          cta_desc:
            "Be a part of Jeevika’s mission to protect street vendors, empower livelihoods, and create sustainable change across India.",

          cta_lawyer_title: "Join as a Lawyer",
          cta_lawyer_desc:
            "Help street vendors access justice, legal protection, and fair representation.",
          cta_lawyer_btn: "Become a Lawyer",

          cta_vendor_title: "Join as Street Vendor",
          cta_vendor_desc:
            "Register yourself to receive support, resources, and advocacy for your livelihood.",
          cta_vendor_btn: "Register Now",

          cta_partner_title: "Partner with Us",
          cta_partner_desc:
            "Collaborate with Jeevika as an organization, institution, or supporter.",
          cta_partner_btn: "Become a Partner",


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
          about_title: "जीविका के बारे में",
          about_desc:
            "जीविका समुदायों को सशक्त बनाकर, उद्यमियों का समर्थन कर और सतत विकास को बढ़ावा देकर आजीविका में सुधार के लिए समर्पित है।",

          feature_1_title: "सामुदायिक सशक्तिकरण",
          feature_1_desc:
            "हम स्थायी आजीविका बनाने के लिए जमीनी स्तर के समुदायों के साथ काम करते हैं।",

          feature_2_title: "कौशल विकास",
          feature_2_desc:
            "दीर्घकालिक आर्थिक स्वतंत्रता के लिए प्रशिक्षण और उपकरण प्रदान करना।",

          feature_3_title: "समावेशी विकास",
          feature_3_desc:
            "समाज के सभी वर्गों के लिए अवसरों तक पहुंच सुनिश्चित करना।",

          impact_title: "हमारा प्रभाव",
          impact_families: "सहायता प्राप्त परिवार",
          impact_communities: "पहुंचे समुदाय",
          impact_partners: "साझेदार",

          festival_title: "जीविका द्वारा न्याय",
          festival_desc:
            "सच्ची कहानियाँ, सच्चे संघर्ष, सच्चा न्याय — भारत भर के स्ट्रीट वेंडरों की आवाज़ों को दर्शाती लघु डॉक्यूमेंट्री क्लिप्स।",
          festival_button: "यूट्यूब पर और देखें",


          cta_title: "न्याय और आजीविका के लिए आंदोलन से जुड़ें",
          cta_desc:
            "स्ट्रीट वेंडर्स की सुरक्षा, आजीविका सशक्तिकरण और पूरे भारत में स्थायी बदलाव लाने के लिए जीविका के मिशन का हिस्सा बनें।",

          cta_lawyer_title: "वकील के रूप में जुड़ें",
          cta_lawyer_desc:
            "स्ट्रीट वेंडर्स को न्याय, कानूनी सुरक्षा और उचित प्रतिनिधित्व दिलाने में मदद करें।",
          cta_lawyer_btn: "वकील बनें",

          cta_vendor_title: "स्ट्रीट वेंडर के रूप में जुड़ें",
          cta_vendor_desc:
            "अपने आजीविका के लिए सहायता, संसाधन और वकालत पाने के लिए पंजीकरण करें।",
          cta_vendor_btn: "अभी रजिस्टर करें",

          cta_partner_title: "हमारे साथ साझेदारी करें",
          cta_partner_desc:
            "संगठन, संस्थान या समर्थक के रूप में जीविका के साथ सहयोग करें।",
          cta_partner_btn: "पार्टनर बनें",


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
          about_title: "জীবিকা সম্পর্কে",
          about_desc:
            "জীবিকা সম্প্রদায়কে ক্ষমতায়ন করে, উদ্যোক্তাদের সমর্থন করে এবং টেকসই উন্নয়ন চালিয়ে দিয়ে জীবিকা উন্নত করতে নিবেদিত।",
          feature_1_title: "সম্প্রদায় ক্ষমতায়ন",
          feature_1_desc: "আমরা টেকসই জীবিকা তৈরি করতে গ্রাসরুট সম্প্রদায়ের সাথে কাজ করি।",
          feature_2_title: "দক্ষতা উন্নয়ন",
          feature_2_desc: "দীর্ঘমেয়াদী অর্থনৈতিক স্বাধীনতার জন্য প্রশিক্ষণ এবং সরঞ্জাম প্রদান।",
          feature_3_title: "সমন্বিত বৃদ্ধি",
          feature_3_desc: "সমাজের সব অংশের জন্য সুযোগের অ্যাক্সেস নিশ্চিত করা।",

          impact_title: "আমাদের প্রভাব",
          impact_families: "সহায়তা পাওয়া পরিবার",
          impact_communities: "পৌঁছানো কমিউনিটি",
          impact_partners: "অংশীদার",
          festival_title: "জীবিকার মাধ্যমে ন্যায়",
          festival_desc:
            "বাস্তব গল্প, বাস্তব সংগ্রাম, বাস্তব ন্যায় — সারা ভারতের স্ট্রিট ভেন্ডরদের কণ্ঠ তুলে ধরা ছোট ডকুমেন্টারি ক্লিপ।",
          festival_button: "ইউটিউবে আরও দেখুন",

          cta_title: "ন্যায় ও জীবিকার জন্য আন্দোলনে যোগ দিন",
          cta_desc:
            "স্ট্রিট ভেন্ডরদের সুরক্ষা, জীবিকা শক্তিশালীকরণ এবং সারা ভারতে টেকসই পরিবর্তন আনতে জীবিকার মিশনের অংশ হন।",

          cta_lawyer_title: "আইনজীবী হিসেবে যোগ দিন",
          cta_lawyer_desc:
            "স্ট্রিট ভেন্ডরদের ন্যায়বিচার, আইনি সুরক্ষা এবং সঠিক প্রতিনিধিত্ব পেতে সাহায্য করুন।",
          cta_lawyer_btn: "আইনজীবী হন",

          cta_vendor_title: "স্ট্রিট ভেন্ডর হিসেবে যোগ দিন",
          cta_vendor_desc:
            "আপনার জীবিকার জন্য সহায়তা, সম্পদ এবং সমর্থন পেতে নিবন্ধন করুন।",
          cta_vendor_btn: "এখনই নিবন্ধন করুন",

          cta_partner_title: "আমাদের সাথে অংশীদার হোন",
          cta_partner_desc:
            "সংস্থা, প্রতিষ্ঠান বা সমর্থক হিসেবে জীবিকার সাথে সহযোগিতা করুন।",
          cta_partner_btn: "পার্টনার হন",

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
          about_title: "ஜீவிகா பற்றி",
          about_desc:
            "ஜீவிகா சமூகங்களை மேம்படுத்துவதன் மூலம், தொழில்முனைவோரை ஆதரிப்பதன் மூலம் மற்றும் நிலையான வளர்ச்சியை இயக்குவதன் மூலம் வாழ்வாதாரத்தை மேம்படுத்துவதற்கு அர்ப்பணிக்கப்பட்டுள்ளது.",
          feature_1_title: "சமூக மேம்பாடு",
          feature_1_desc:
            "நாம் நிலையான வாழ்வாதாரத்தை உருவாக்குவதற்கு தரைமட்ட சமூகங்களுடன் பணியாற்றுகிறோம்.",
          feature_2_title: "திறன் மேம்பாடு",
          feature_2_desc:
            "நீண்ட கால பொருளாதார சுதந்திரத்திற்கான பயிற்சி மற்றும் கருவிகளை வழங்குதல்.",
          feature_3_title: "ஒற்றுமையான வளர்ச்சி",
          feature_3_desc:
            "சமூகத்தின் அனைத்து பகுதிகளுக்கும் வாய்ப்புகளுக்கு அணுகலை உறுதி செய்தல்.",
          impact_title: "எங்கள் தாக்கம்",
          impact_families: "உதவிய குடும்பங்கள்",
          impact_communities: "அடைந்த சமூகங்கள்",
          impact_partners: "கூட்டாளர்கள்",

          festival_title: "ஜீவிகா மூலம் நீதி",
          festival_desc:
            "உண்மையான கதைகள், உண்மையான போராட்டங்கள், உண்மையான நீதி — இந்தியா முழுவதும் தெரு விற்பனையாளர்களின் குரல்களை வெளிப்படுத்தும் குறும்படங்கள்.",
          festival_button: "யூடியூப்பில் மேலும் பார்க்க",


          cta_title: "நீதி மற்றும் வாழ்வாதாரத்திற்கான இயக்கத்தில் இணையுங்கள்",
          cta_desc:
            "தெரு விற்பனையாளர்களை பாதுகாக்க, வாழ்வாதாரத்தை மேம்படுத்த மற்றும் இந்தியா முழுவதும் நிலையான மாற்றத்தை உருவாக்க ஜீவிகாவின் பணியின் ஒரு பகுதியாக இருங்கள்.",

          cta_lawyer_title: "வழக்கறிஞராக இணையுங்கள்",
          cta_lawyer_desc:
            "தெரு விற்பனையாளர்களுக்கு நீதி, சட்ட பாதுகாப்பு மற்றும் நியாயமான பிரதிநிதித்துவம் கிடைக்க உதவுங்கள்.",
          cta_lawyer_btn: "வழக்கறிஞராகுங்கள்",

          cta_vendor_title: "தெரு விற்பனையாளராக இணையுங்கள்",
          cta_vendor_desc:
            "உங்கள் வாழ்வாதாரத்திற்கு ஆதரவு, வளங்கள் மற்றும் வலியுறுத்தலை பெற பதிவு செய்யுங்கள்.",
          cta_vendor_btn: "இப்போது பதிவு செய்யவும்",

          cta_partner_title: "எங்களுடன் கூட்டாளியாகுங்கள்",
          cta_partner_desc:
            "நிறுவனம், நிறுவனம் அல்லது ஆதரவாளராக ஜீவிகாவுடன் இணைந்து செயல்படுங்கள்.",
          cta_partner_btn: "கூட்டாளராகுங்கள்",

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
          about_title: "జీవికా గురించి",
          about_desc:
            "జీవికా సమాజాలను శక్తివంతం చేయడం, పారిశ్రామికవేత్తలను మద్దతు ఇవ్వడం మరియు స్థిరమైన అభివృద్ధిని నడిపించడం ద్వారా జీవనాధారాలను మెరుగుపరచడానికి అంకితమైనది.",
          feature_1_title: "సమాజ శక్తివంతం",
          feature_1_desc:
            "మేము స్థిరమైన జీవనాధారాన్ని నిర్మించడానికి గ్రాస్‌రూట్ సమాజాలతో పని చేస్తాము.",
          feature_2_title: "నైపుణ్య అభివృద్ధి",
          feature_2_desc:
            "దీర్ఘకాలిక ఆర్థిక స్వాతంత్ర్యానికి శిక్షణ మరియు సాధనాలను అందించడం.",
          feature_3_title: "సమగ్ర వృద్ధి",
          feature_3_desc:
            "సమాజంలోని అన్ని విభాగాలకు అవకాశాల యాక్సెస్‌ను నిర్ధారించడం.",
          impact_title: "మా ప్రభావం",
          impact_families: "సహాయం పొందిన కుటుంబాలు",
          impact_communities: "చేరుకున్న సముదాయాలు",
          impact_partners: "భాగస్వాములు",

          festival_title: "జీవికా ద్వారా న్యాయం",
          festival_desc:
            "నిజమైన కథలు, నిజమైన పోరాటాలు, నిజమైన న్యాయం — భారతదేశం అంతటా వీధి వ్యాపారుల గొంతులను చూపించే చిన్న డాక్యుమెంటరీ క్లిప్స్.",
          festival_button: "యూట్యూబ్‌లో మరిన్ని చూడండి",


          cta_title: "న్యాయం & జీవనాధారాల కోసం ఉద్యమంలో చేరండి",
          cta_desc:
            "వీధి వ్యాపారులను రక్షించడానికి, జీవనాధారాలను శక్తివంతం చేయడానికి మరియు భారతదేశం అంతటా స్థిరమైన మార్పును సృష్టించడానికి జీవికా మిషన్‌లో భాగం అవ్వండి.",

          cta_lawyer_title: "న్యాయవాదిగా చేరండి",
          cta_lawyer_desc:
            "వీధి వ్యాపారులకు న్యాయం, చట్టపరమైన రక్షణ మరియు సరైన ప్రాతినిధ్యం అందించడంలో సహాయం చేయండి.",
          cta_lawyer_btn: "న్యాయవాదిగా మారండి",

          cta_vendor_title: "వీధి వ్యాపారిగా చేరండి",
          cta_vendor_desc:
            "మీ జీవనాధారానికి మద్దతు, వనరులు మరియు పరిరక్షణ పొందడానికి నమోదు చేసుకోండి.",
          cta_vendor_btn: "ఇప్పుడే నమోదు చేయండి",

          cta_partner_title: "మాతో భాగస్వామ్యం చేయండి",
          cta_partner_desc:
            "సంస్థ, సంస్థ లేదా మద్దతుదారుగా జీవికాతో సహకరించండి.",
          cta_partner_btn: "భాగస్వామి అవ్వండి",

        }
      }
    }
  });

export default i18n;