"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const SecondEditionFAQ: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Content defined inside component to access dynamic translation helper
  const faqItems = [
    {
      question: getTranslation(
          "faq1",
          "How can I register for the event?",
          "Comment puis-je m'inscrire à l'événement ?"
      ),
      answer: getTranslation(
          "faq1ans",
          "Registration is available online through our official portal. Click the 'Register Now' button at the top of the page to secure your spot.",
          "L'inscription est disponible en ligne via notre portail officiel. Cliquez sur le bouton 'S'inscrire' en haut de la page pour réserver votre place."
      ),
    },
    {
      question: getTranslation(
          "faq2",
          "What are the visa requirements for travel?",
          "Quelles sont les exigences de visa pour le voyage ?"
      ),
      answer: getTranslation(
          "faq2ans",
          "We provide official invitation letters to registered delegates to assist with visa processing. Please contact our support team after registration for specific guidance.",
          "Nous fournissons des lettres d'invitation officielles aux délégués inscrits pour faciliter les démarches de visa. Veuillez contacter notre équipe de support après l'inscription."
      ),
    },
    {
      question: getTranslation(
          "faq3",
          "Are there sponsorship opportunities available?",
          "Y a-t-il des opportunités de parrainage disponibles ?"
      ),
      answer: getTranslation(
          "faq3ans",
          "Yes, we offer various sponsorship packages that provide high visibility and exclusive networking access. Download our sponsorship deck or contact us for details.",
          "Oui, nous proposons divers forfaits de parrainage offrant une grande visibilité et un accès exclusif au réseautage. Téléchargez notre dossier de parrainage ou contactez-nous."
      ),
    },
    {
      question: getTranslation(
          "faq4",
          "Who should attend this business week?",
          "Qui devrait assister à cette semaine des affaires ?"
      ),
      answer: getTranslation(
          "faq4ans",
          "The event is designed for C-level executives, investors, government officials, and entrepreneurs looking to expand trade between Nigeria and Morocco.",
          "L'événement est conçu pour les cadres dirigeants, les investisseurs, les représentants gouvernementaux et les entrepreneurs cherchant à développer le commerce entre le Nigeria et le Maroc."
      ),
    },
  ];

  return (
      <section id="faq" className="py-24 px-6 bg-[#F9FBF9] relative">
        <div className="max-w-4xl mx-auto">

          {/* --- Header --- */}
          <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0E6] text-[#2C3E30] text-sm font-bold uppercase tracking-widest mb-6 font-inter">
            <HelpCircle className="w-4 h-4" />
            {getTranslation("supportTag", "Support", "Support")}
          </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] font-syne">
              {getTranslation("faqTitle", "Frequently Asked Questions", "Questions Fréquemment Posées")}
            </h2>
          </div>

          {/* --- Accordion List --- */}
          <div className="space-y-4">
            {faqItems.map(({ question, answer }, index) => (
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
                  {question}
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
                              {answer}
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