"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const newsItems = [
  {
    image: "lagos.jpg",
    alt: "lagos",
    titleKey: "newsHeader2",
    bodyKey: "newsBody2",
  },
  {
    image: "kano.webp",
    alt: "kano",
    titleKey: "newsHeader3",
    bodyKey: "newsBody3",
  },
  {
    image: "abuja.jpg",
    alt: "abuja",
    titleKey: "newsHeader4",
    bodyKey: "newsBody4",
  },
];

const SecondEditionNews: React.FC = () => {
  const { t } = useTranslation();

  return (
      <section id="news" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">

          {/* Decorative Line - Light Sage */}
          <div className="w-full h-px bg-[#E5EBE5] mb-20" />

          <div className="space-y-24">
            {newsItems.map(({ image, alt, titleKey, bodyKey }, index) => {
              const isEven = index % 2 === 0;

              return (
                  <motion.div
                      key={titleKey}
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
                        {t(titleKey)}
                      </h2>
                      <p className="text-[#5A5A5A] font-inter leading-relaxed text-lg mb-8 text-justify">
                        {t(bodyKey)}
                      </p>

                      <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://spectretranstradeglobal.com"
                          className="inline-flex items-center gap-2 text-[#4F7A55] font-bold font-syne uppercase tracking-widest border-b-2 border-[#4F7A55]/20 pb-1 hover:border-[#4F7A55] transition-all group"
                      >
                        {t("learn")}
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