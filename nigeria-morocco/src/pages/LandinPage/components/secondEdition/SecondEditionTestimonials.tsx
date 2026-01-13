"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// --- DATA (Preserved from original) ---
const testimonials = [
  { id: 1, name: "Amina S., Lagos", key: "testimonial1" },
  { id: 2, name: "Youssef M., Casablanca", key: "testimonial2" },
  { id: 3, name: "Chinedu O., Abuja", key: "testimonial3" },
];

const SecondEditionTestimonials: React.FC = () => {
  const { t } = useTranslation();

  return (
      <section id="testimonials" className="py-24 px-6 bg-[#0D1210] relative overflow-hidden">

        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2C3E30] to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2C3E30] opacity-10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* --- HEADER --- */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#4F7A55]"></span>
                <span className="text-[#DDE5D7] font-bold tracking-[0.2em] text-xs uppercase font-inter">
                        Community
                    </span>
                <span className="h-px w-8 bg-[#4F7A55]"></span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white font-syne mb-6">
                {t("Testimonial", "What They Say")}
              </h2>
            </motion.div>
          </div>

          {/* --- GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ id, name, key }, index) => (
                <TestimonialCard
                    key={id}
                    id={id}
                    name={name}
                    translationKey={key}
                    t={t}
                    delay={index * 0.1}
                />
            ))}
          </div>

        </div>
      </section>
  );
};

// --- SUB-COMPONENT ---

const TestimonialCard = ({ id, name, translationKey, t, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="bg-[#151C18] border border-[#2C3E30] p-8 rounded-[2rem] relative group hover:border-[#4F7A55] transition-all duration-300 flex flex-col"
    >
      {/* Big Quote Icon Background */}
      <Quote className="absolute top-8 right-8 text-[#2C3E30] w-12 h-12 group-hover:text-[#4F7A55]/20 transition-colors duration-300" />

      {/* Header: Image & Name */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2C3E30] group-hover:border-[#4F7A55] transition-colors">
          <img
              src="/default.png"
              alt={`Testimonial ${id}`}
              className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-bold font-syne text-lg tracking-wide">{name}</h4>
          <div className="flex gap-1 mt-1">
            {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-3 h-3 text-[#4F7A55] fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <p className="text-[#8A8A8A] font-inter leading-relaxed italic relative z-10">
        "{t(translationKey)}"
      </p>
    </motion.div>
);

export default SecondEditionTestimonials;