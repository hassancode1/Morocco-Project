"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Info, MapPin } from "lucide-react";

const SecondEditionAbout: React.FC = () => {
  const { t } = useTranslation();

  return (
      <section id="about" className="py-24 px-6 bg-[#F0F5F1] relative overflow-hidden">

        {/* Background Decor (Subtle & Light) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E1EBE3] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image with organic shape */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
            >
              {/* The backdrop blob */}
              <div className="absolute top-4 left-4 inset-0 bg-[#4F7A55]/10 rounded-[2.5rem] -rotate-2"></div>

              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-[#4F7A55]/10">
                <img
                    src="bweek.jpg"
                    alt="Nigeria-Morocco Business Week"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DDE5D7] text-[#4F7A55] text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                <Info className="w-4 h-4" />
                <span>About The Summit</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] font-syne mb-8 leading-tight">
                {t("newsHeader1")}
              </h1>

              <div className="space-y-6 text-[#5A5A5A] font-inter text-lg leading-relaxed">
                <p>{t("newsBody1")}</p>

                {/* Special Venue Highlight - Light Version */}
                <div className="flex items-start gap-3 p-5 bg-white border border-[#E0E7E0] rounded-xl shadow-sm">
                  <div className="p-2 bg-[#F0F5F1] rounded-lg">
                    <MapPin className="text-[#4F7A55] w-6 h-6 flex-shrink-0" />
                  </div>
                  <div>
                    <span className="text-[#1A1A1A] font-bold block mb-1">{t("venue")}:</span>
                    <span className="text-[#5A5A5A]">Lagos, Kano and Abuja (Nigeria).</span>
                  </div>
                </div>

                <p>{t("news1Body2")}</p>
                <p>{t("news1Body3")}</p>
              </div>

              {/* Button - Solid Green for contrast */}
              <button className="mt-10 group relative px-8 py-4 bg-[#4F7A55] text-white font-bold rounded-full overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-[#4F7A55]/20 transition-all duration-300 font-syne">
                <span className="relative z-10 flex items-center gap-2">
                    {t("learn")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>

          </div>
        </div>
      </section>
  );
};

export default SecondEditionAbout;