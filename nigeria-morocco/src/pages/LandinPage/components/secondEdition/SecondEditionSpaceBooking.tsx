"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Store } from "lucide-react";

interface Props {
  onBook: () => void;
}

const SecondEditionSpaceBooking: React.FC<Props> = ({ onBook }) => {
  const { t, i18n } = useTranslation();

  return (
      <section id="space" className="py-20 px-6 bg-white flex justify-center">

        {/* Compact Container - max-w-5xl makes it smaller/neater */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl bg-[#2C3E30] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#2C3E30]/20 relative overflow-hidden"
        >
          {/* Subtle Texture Overlay (Optional, keeps it premium but minimal) */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-soft-light"></div>

          {/* Left Side: Content */}
          <div className="text-center md:text-left relative z-10 max-w-xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#DDE5D7] mb-4 opacity-80">
              <Store className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest font-inter">Exhibition</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white font-syne mb-3">
              {t("exhibitionHead")}{" "}
              <span className="text-[#A3E635]">{t("exhibitionSpace")}?</span>
            </h2>

            <p className="text-[#DDE5D7]/80 text-sm md:text-base font-inter leading-relaxed">
              {t("exhibitionBody")}
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="relative z-10 flex-shrink-0">
            <button
                onClick={onBook}
                className="group bg-white text-[#2C3E30] px-8 py-4 rounded-full font-bold font-syne text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
                <span>
                    {i18n.language === "fr"
                        ? "Obtenez Votre Stand"
                        : t("bookButtton", { defaultValue: "Book A Space" })
                    }
                </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </motion.div>
      </section>
  );
};

export default SecondEditionSpaceBooking;