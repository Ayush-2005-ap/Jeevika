import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, Briefcase, Globe } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation(); // 👈 define before using

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t("about_title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t("about_desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-primary-600 mb-4 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
