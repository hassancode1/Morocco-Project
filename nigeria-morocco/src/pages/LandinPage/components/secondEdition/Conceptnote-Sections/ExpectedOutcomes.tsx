"use client";
import { motion } from "framer-motion";
import { FileText, Building, Globe, TrendingUp, Ship, Wheat, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExpectedOutcomes() {
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

    // Define outcomes inside the component to react to language changes
    const outcomes = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: getTranslation("outMoUs", "Strategic MoUs", "Protocoles d'Accord Stratégiques"),
            desc: getTranslation("outMoUsDesc", "Signing of joint ventures and investment agreements between key stakeholders.", "Signature de coentreprises et d'accords d'investissement entre les acteurs clés.")
        },
        {
            icon: <Building className="w-6 h-6" />,
            title: getTranslation("outHubs", "Manufacturing Hubs", "Pôles Manufacturiers"),
            desc: getTranslation("outHubsDesc", "Establishment of Moroccan agri-processing and industrial facilities in Nigeria.", "Établissement d'installations agroalimentaires et industrielles marocaines au Nigeria.")
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: getTranslation("outAccess", "Market Access", "Accès au Marché"),
            desc: getTranslation("outAccessDesc", "Greater access for Nigerian commodities to Moroccan and European markets.", "Un meilleur accès pour les produits nigérians aux marchés marocains et européens.")
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: getTranslation("outTrade", "Trade Solutions", "Solutions Commerciales"),
            desc: getTranslation("outTradeDesc", "Tangible steps toward resolving non-tariff barriers and certification challenges.", "Mesures concrètes pour résoudre les barrières non tarifaires et les défis de certification.")
        },
        {
            icon: <Ship className="w-6 h-6" />,
            title: getTranslation("outSea", "Maritime Corridor", "Corridor Maritime"),
            desc: getTranslation("outSeaDesc", "Launch of direct sea lane between Lagos and Moroccan ports to cut logistics costs.", "Lancement d'une voie maritime directe entre Lagos et les ports marocains pour réduire les coûts.")
        },
        {
            icon: <Wheat className="w-6 h-6" />,
            title: getTranslation("outAfCFTA", "AfCFTA Success", "Succès de la ZLECAf"),
            desc: getTranslation("outAfCFTADesc", "Stronger regional cooperation aligned with AfCFTA goals and economic integration.", "Une coopération régionale renforcée alignée sur les objectifs de la ZLECAf.")
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#0D1210] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2C3E30] opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C3E30]/30 border border-[#2C3E30] text-[#DDE5D7] text-xs font-bold uppercase tracking-widest mb-6 font-inter">
                            <CheckCircle className="w-4 h-4 text-[#4F7A55]" />
                            <span>{getTranslation("outTag", "Expected Outcomes", "Résultats Attendus")}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 font-syne leading-tight">
                            {getTranslation("outTitle1", "What We'll", "Ce que nous accomplirons")} <br/>
                            <span className="text-[#4F7A55]">
                                {getTranslation("outTitle2", "Achieve Together.", "Ensemble.")}
                            </span>
                        </h2>
                        <p className="text-lg text-[#8A8A8A] leading-relaxed font-inter max-w-xl">
                            {getTranslation(
                                "outDesc",
                                "Concrete deliverables and actionable partnerships that will reshape bilateral trade for years to come.",
                                "Des livrables concrets et des partenariats exploitables qui remodèleront le commerce bilatéral pour les années à venir."
                            )}
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outcomes.map((outcome, idx) => (
                        <div key={idx} className="relative">
                            {/* [Visual Tag: For 'Maritime Corridor', a map overlay of the sea route is highly effective here] */}
                            <OutcomeCard {...outcome} delay={idx * 0.1} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// SUB-COMPONENT
// ----------------------------------------------------------------------

const OutcomeCard = ({ icon, title, desc, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-[#151C18] border border-[#2C3E30] rounded-[2rem] p-8 md:p-10 hover:border-[#4F7A55] transition-all duration-300 group relative overflow-hidden h-full"
    >
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4F7A55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="w-14 h-14 bg-[#1A241D] border border-[#2C3E30] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4F7A55] group-hover:border-[#4F7A55] transition-colors duration-300 relative z-10">
            <div className="text-[#DDE5D7] group-hover:text-white transition-colors">
                {icon}
            </div>
        </div>

        {/* Text */}
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-3 font-syne group-hover:text-[#DDE5D7] transition-colors">
                {title}
            </h3>
            <p className="text-[#8A8A8A] leading-relaxed font-inter text-sm">
                {desc}
            </p>
        </div>
    </motion.div>
);