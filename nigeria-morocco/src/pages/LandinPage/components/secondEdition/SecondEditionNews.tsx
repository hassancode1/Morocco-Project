"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const SecondEditionNews: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Helper for translations
  const getTranslation = (
      key: string,
      enDefault: string,
      frDefault?: string
  ) => {
    const defaultValue =
        i18n.language === "fr" && frDefault ? frDefault : enDefault;
    return t(key, { defaultValue });
  };

  // Data moved inside component to access state/translation logic
  const newsItems = [
    {
      //
      image: "lagos.jpg",
      alt: "Lagos",
      title: getTranslation("newsHeader2", "Lagos: The Commercial Nerve Center", "Lagos : Le Centre Névralgique Commercial"),
      body: getTranslation(
          "newsBody2",
          "Experience the vibrant energy of Nigeria's economic capital. Engage with top-tier financial institutions and tech giants driving West Africa's growth.",
          "Découvrez l'énergie vibrante de la capitale économique du Nigeria. Échangez avec des institutions financières de premier plan et des géants de la technologie."
      ),
    },
    {
      //
      image: "kano.webp",
      alt: "Kano",
      title: getTranslation("newsHeader3", "Kano: The Industrial & Agricultural Hub", "Kano : Le Pôle Industriel & Agricole"),
      body: getTranslation(
          "newsBody3",
          "Unlock opportunities in the heart of Northern Nigeria. Focus on agro-processing, textile industries, and cross-border trade routes.",
          "Débloquez des opportunités au cœur du nord du Nigeria. Concentrez-vous sur l'agro-industrie, le textile et les routes commerciales transfrontalières."
      ),
    },
    {
      //
      image: "abuja.jpg",
      alt: "Abuja",
      title: getTranslation("newsHeader4", "Abuja: The Seat of Power & Policy", "Abuja : Le Siège du Pouvoir & de la Politique"),
      body: getTranslation(
          "newsBody4",
          "Conclude the tour where decisions are made. Participate in high-level government roundtables and diplomatic networking sessions.",
          "Concluez la tournée là où les décisions sont prises. Participez à des tables rondes gouvernementales de haut niveau et à des sessions de réseautage diplomatique."
      ),
    },
  ];

  return (
      <section id="news" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">

          {/* Decorative Line - Light Sage */}
          <div className="w-full h-px bg-[#E5EBE5] mb-20" />

          <div className="space-y-24">
            {newsItems.map(({ image, alt, title, body }, index) => {
              const isEven = index % 2 === 0;

              return (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  >
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative group">
                        {/* Back card accent */}
                        <div className={`absolute inset-0 bg-[#F0F5F1] rounded-[2rem] -z-10 transition-transform duration-500 group-hover:scale-105 ${isEven ? '-rotate-3' : 'rotate-3'}`} />

                        <div className="relative rounded-[2rem] overflow-hidden border border-[#E5EBE5] shadow-lg shadow-black/5 aspect-[4/3]">
                          <img
                              src={image}
                              alt={alt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Badge */}
                          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-[#1A1A1A] font-bold text-sm">
                            <MapPin className="w-4 h-4 text-[#4F7A55]" />
                            <span className="uppercase">{alt}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                      {/* Big Number - Very light green */}
                      <span className="text-[#E8F0E8] font-syne font-bold text-7xl block mb-2">
                                0{index + 1}
                            </span>

                      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-syne mb-6">
                        {title}
                      </h2>
                      <p className="text-[#5A5A5A] font-inter leading-relaxed text-lg mb-8 text-justify">
                        {body}
                      </p>

                      <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://spectretranstradeglobal.com"
                          className="inline-flex items-center gap-2 text-[#4F7A55] font-bold font-syne uppercase tracking-widest border-b-2 border-[#4F7A55]/20 pb-1 hover:border-[#4F7A55] transition-all group"
                      >
                        {getTranslation("learnMore", "Learn More", "En Savoir Plus")}
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
              );
            })}
          </div>

        </div>
      </section>
  );
};

export default SecondEditionNews;