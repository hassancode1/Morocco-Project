"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Sprout, // Used for Leaf/Agriculture
    Handshake, // Used for Target/Deepen Relations
    Anchor, // Used for Ship
    Scale,
    Users, // Used for Investment Council
    Factory,
    Globe // Used for Joint Ventures
} from "lucide-react";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export default function StrategicObjectives() {
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

    return (
        <section className="py-32 bg-[#0D1210] text-white relative overflow-hidden">

            {/* Background Decor: A subtle, organic gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2C3E30] opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mb-24 border-l-4 border-[#2C3E30] pl-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-[#DDE5D7] font-bold tracking-[0.2em] text-sm uppercase mb-4 block font-inter">
                            {getTranslation("stratObjTag", "Strategic Objectives", "Objectifs Stratégiques")}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 font-syne text-white">
                            {getTranslation("stratObjTitle", "Building on the", "S'appuyer sur")} <br />
                            {getTranslation("stratObjTitle2", "Momentum of", "l'élan de")} <span className="text-[#4F7A55]">Casablanca.</span>
                        </h2>
                        <p className="text-[#8A8A8A] text-lg md:text-xl leading-relaxed font-inter max-w-2xl">
                            {getTranslation(
                                "stratObjDesc",
                                "We are providing a dynamic, action-oriented platform to foster joint investments and unlock trade across key sectors.",
                                "Nous offrons une plateforme dynamique et orientée vers l'action pour favoriser les investissements conjoints et débloquer le commerce dans des secteurs clés."
                            )}
                        </p>
                    </motion.div>
                </div>

                {/* --- PART 1: THE BIG NUMBERS (Financial Impact) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <StatCard
                        value={getTranslation("tradeVolVal", "$10 Billion", "10 Milliards $")}
                        label={getTranslation("tradeVolLabel", "Annual Trade Potential", "Potentiel Commercial Annuel")}
                        description={getTranslation(
                            "tradeVolDesc",
                            "Bilateral trade between Nigeria and Morocco holds the potential to exceed this milestone annually.",
                            "Le commerce bilatéral entre le Nigeria et le Maroc a le potentiel de dépasser ce cap annuellement."
                        )}
                        icon={<TrendingUp className="w-8 h-8 text-[#DDE5D7]" />}
                        delay={0.1}
                    />
                    <StatCard
                        value={getTranslation("agriVal", "$7 Billion", "7 Milliards $")}
                        label={getTranslation("agriLabel", "Agriculture Trade Value", "Valeur du Commerce Agricole")}
                        description={getTranslation(
                            "agriDesc",
                            "Agriculture and agri-products alone are projected to contribute approximately $7 billion to the economy.",
                            "L'agriculture et les produits agroalimentaires devraient contribuer à eux seuls à environ 7 milliards de dollars à l'économie."
                        )}
                        icon={<Sprout className="w-8 h-8 text-[#DDE5D7]" />}
                        delay={0.2}
                    />
                </div>

                {/* --- PART 2: THE ACTION GRID (Policy & Implementation) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {objectives.map((obj, index) => (
                        <ObjectiveCard
                            key={index}
                            title={getTranslation(`objTitle_${index}`, obj.title, obj.titleFr)}
                            desc={getTranslation(`objDesc_${index}`, obj.desc, obj.descFr)}
                            icon={obj.icon}
                            delay={0.3 + (index * 0.1)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// DATA & SUB-COMPONENTS
// ----------------------------------------------------------------------

const objectives = [
    {
        title: "Deepen Relations",
        titleFr: "Approfondir les Relations",
        desc: "Strengthen bilateral trade and economic relations through actionable partnerships.",
        descFr: "Renforcer le commerce bilatéral et les relations économiques grâce à des partenariats concrets.",
        icon: <Handshake className="w-6 h-6" />,
    },
    {
        title: "Raw Material Access",
        titleFr: "Accès aux Matières Premières",
        desc: "Facilitate access to Nigerian raw materials and consumer markets for Moroccan industries.",
        descFr: "Faciliter l'accès aux matières premières nigérianes et aux marchés de consommation pour les industries marocaines.",
        icon: <Factory className="w-6 h-6" />,
    },
    {
        title: "Joint Ventures",
        titleFr: "Coentreprises",
        desc: "Promote localization of Moroccan businesses in Nigeria, specifically in agri-processing and solar.",
        descFr: "Promouvoir la localisation d'entreprises marocaines au Nigeria, spécifiquement dans l'agro-transformation et le solaire.",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        title: "Policy Alignment",
        titleFr: "Alignement des Politiques",
        desc: "Address tariffs, certification, and logistics through the AfCFTA framework.",
        descFr: "Aborder les tarifs, la certification et la logistique via le cadre de la ZLECAf.",
        icon: <Scale className="w-6 h-6" />,
    },
    {
        title: "Maritime Corridor",
        titleFr: "Corridor Maritime",
        desc: "Establish a direct sea lane between Lagos and Moroccan ports to reduce transit time and cost.",
        descFr: "Établir une voie maritime directe entre Lagos et les ports marocains pour réduire le temps et le coût de transit.",
        icon: <Anchor className="w-6 h-6" />,
    },
    {
        title: "Investment Council",
        titleFr: "Conseil d'Investissement",
        desc: "Launch a new joint Trade and Investment Council for continuous networking.",
        descFr: "Lancer un nouveau Conseil conjoint du Commerce et de l'Investissement pour un réseautage continu.",
        icon: <Users className="w-6 h-6" />,
    },
];

const StatCard = ({ value, label, description, icon, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#151C18] border border-[#2C3E30] p-10 md:p-14 rounded-[2rem] relative overflow-hidden group hover:border-[#4F7A55] transition-colors duration-500"
    >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-soft-light"></div>
        <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-3 font-syne group-hover:text-[#DDE5D7] transition-colors">
                    {value}
                </h3>
                <div className="inline-block px-3 py-1 bg-[#2C3E30]/30 rounded-full border border-[#2C3E30]">
                    <p className="text-[#DDE5D7] font-bold uppercase tracking-widest text-xs font-inter">
                        {label}
                    </p>
                </div>
            </div>
            <div className="p-4 bg-[#1A241D] rounded-full border border-[#2C3E30] group-hover:bg-[#2C3E30] transition-colors duration-300">
                {icon}
            </div>
        </div>
        <p className="text-[#8A8A8A] max-w-sm leading-relaxed font-inter relative z-10">
            {description}
        </p>
    </motion.div>
);

const ObjectiveCard = ({ title, desc, icon, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ x: 5 }}
        className="group cursor-default border-t border-[#2C3E30] pt-8 hover:border-[#DDE5D7] transition-colors duration-300"
    >
        <div className="mb-6 text-[#4F7A55] group-hover:text-[#DDE5D7] transition-colors duration-300">
            {icon}
        </div>
        <h4 className="text-2xl font-bold text-white mb-3 font-syne group-hover:text-[#DDE5D7] transition-colors">
            {title}
        </h4>
        <p className="text-[#8A8A8A] text-sm leading-relaxed font-inter group-hover:text-neutral-400">
            {desc}
        </p>
    </motion.div>
);