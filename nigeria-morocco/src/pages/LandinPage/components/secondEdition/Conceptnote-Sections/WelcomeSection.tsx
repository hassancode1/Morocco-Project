"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WelcomeSection() {
    const { t, i18n } = useTranslation();

    // Helper for translations (Pattern maintained from previous sections)
    const getTranslation = (
        key: string,
        enDefault: string,
        frDefault?: string
    ) => {
        const defaultValue =
            i18n.language === "fr" && frDefault ? frDefault : enDefault;
        return t(key, { defaultValue });
    };

    return (
        <section className="relative pt-24 pb-12 px-6 overflow-hidden bg-[#0D1210] border-b border-[#2C3E30]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2C3E30] opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Title & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Tag */}
                        <span className="text-[#DDE5D7] font-bold tracking-[0.2em] text-sm uppercase mb-6 block font-inter">
              {getTranslation("welcomeTag", "Second Edition", "2ème Édition")}
            </span>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-7xl font-extrabold font-syne leading-[1.0] mb-8 text-white">
                            {getTranslation("welcomeHeading", "Welcome to", "Bienvenue au")}{" "}
                            <br />
                            <span className="text-[#4F7A55]">
                {getTranslation("welcomeHeadingSpan", "The Summit.", "Sommet.")}
              </span>
                        </h1>

                        {/* Date & Location Grid */}
                        <div className="flex flex-col sm:flex-row gap-8 mb-10 border-l-4 border-[#2C3E30] pl-8">
                            {/* Date */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="text-[#4F7A55] w-5 h-5" />
                                    <p className="text-xs text-[#8A8A8A] font-bold uppercase tracking-wider">
                                        {getTranslation("dateLabel", "Date", "Date")}
                                    </p>
                                </div>
                                <p className="text-xl font-syne font-bold text-white">
                                    {getTranslation(
                                        "welcomeDateVal",
                                        "9-12 Feb 2026",
                                        "9-12 Fév 2026"
                                    )}
                                </p>
                            </div>
                            {/* Location */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="text-[#4F7A55] w-5 h-5" />
                                    <p className="text-xs text-[#8A8A8A] font-bold uppercase tracking-wider">
                                        {getTranslation("locationLabel", "Location", "Lieu")}
                                    </p>
                                </div>
                                <p className="text-xl font-syne font-bold text-white">
                                    {/* City names usually stay the same, but wrapped just in case */}
                                    {getTranslation(
                                        "welcomeLocVal",
                                        "Lagos • Kano • Abuja",
                                        "Lagos • Kano • Abuja"
                                    )}
                                </p>
                            </div>
                        </div>

                        <p className="text-[#8A8A8A] text-lg leading-relaxed max-w-xl font-inter">
                            {getTranslation(
                                "welcomeDescription",
                                "The summit was designed to deepen the long existing cordial relations between the two nations. It serves as a platform for dialogue, knowledge exchange, and strategic partnerships, aligning with the broader vision of enhancing trade and investment flows.",
                                "Le sommet a été conçu pour approfondir les relations cordiales existant de longue date entre les deux nations. Il sert de plateforme de dialogue, d'échange de connaissances et de partenariats stratégiques, s'alignant sur la vision plus large de l'amélioration des flux commerciaux et d'investissement."
                            )}
                        </p>
                    </motion.div>

                    {/* Right: Theme Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-[#151C18] border border-[#2C3E30] p-10 md:p-12 rounded-[2rem] relative mt-8 lg:mt-0"
                    >
                        {/* Subtle Grain Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-soft-light"></div>

                        <div className="relative z-10">
                            <p className="text-[#4F7A55] font-bold tracking-widest text-xs uppercase mb-6 font-inter">
                                {getTranslation(
                                    "themeLabel",
                                    "This Year's Theme",
                                    "Le Thème de Cette Année"
                                )}
                            </p>
                            <h3 className="text-2xl md:text-3xl font-syne font-bold leading-tight text-white mb-8">
                                "
                                {getTranslation(
                                    "themeTitle",
                                    "Advancing Nigeria – Morocco Trade & Investments through Economic Integration & Implementation",
                                    "Promouvoir le commerce et les investissements Nigeria-Maroc par l'intégration économique et la mise en œuvre"
                                )}
                                "
                            </h3>

                            <div className="h-1 w-24 bg-[#2C3E30] rounded-full overflow-hidden">
                                <div className="h-full w-12 bg-[#4F7A55] rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}