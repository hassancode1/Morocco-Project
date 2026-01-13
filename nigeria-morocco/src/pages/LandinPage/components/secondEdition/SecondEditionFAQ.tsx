"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqKeys = [
  { question: "faq1", answer: "faq1ans" },
  { question: "faq2", answer: "faq2ans" },
  { question: "faq3", answer: "faq3ans" },
  { question: "faq4", answer: "faq4ans" },
];

const SecondEditionFAQ: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <section id="faq" className="py-24 px-6 bg-[#F9FBF9] relative">
        <div className="max-w-4xl mx-auto">

          {/* --- Header --- */}
          <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0E6] text-[#2C3E30] text-sm font-bold uppercase tracking-widest mb-6 font-inter">
            <HelpCircle className="w-4 h-4" />
            Support
          </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] font-syne">
              {t("FAQ", "Frequently Asked Questions")}
            </h2>
          </div>

          {/* --- Accordion List --- */}
          <div className="space-y-4">
            {faqKeys.map(({ question, answer }, index) => (
                <div
                    key={index}
                    className={`
                rounded-2xl border transition-all duration-300
                ${activeIndex === index
                        ? "bg-white border-[#2C3E30]/20 shadow-xl shadow-green-900/5"
                        : "bg-white border-transparent hover:border-[#2C3E30]/10 hover:shadow-lg"
                    }
              `}
                >
                  <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                <span className={`text-lg md:text-xl font-bold font-syne transition-colors ${activeIndex === index ? "text-[#2C3E30]" : "text-[#1A1A1A]"}`}>
                  {t(question)}
                </span>
                    <span className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "bg-[#2C3E30] text-white rotate-180" : "bg-[#F0F2F0] text-[#1A1A1A]"}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0">
                            <p className="text-[#4A4A4A] font-inter leading-relaxed text-base md:text-lg border-t border-gray-100 pt-6">
                              {t(answer)}
                            </p>
                          </div>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            ))}
          </div>

        </div>
      </section>
  );
};

export default SecondEditionFAQ;