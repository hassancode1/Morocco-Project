"use client";

import { motion } from "framer-motion";
import {
    Sprout,
    Zap,
    Laptop,
    Landmark,
    Gem,
    Plane
} from "lucide-react";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export default function SectoralFocus() {
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
        <section id="sectors" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20 max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-[#2C3E30]"></span>
                        <span className="text-[#2C3E30] font-bold tracking-[0.2em] text-sm uppercase font-inter">
                            {getTranslation("sectorTag", "Investment Landscape", "Paysage d'Investissement")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] mb-6 font-syne leading-tight">
                        {getTranslation("sectorTitle1", "Six Pillars of", "Six Piliers de")} <br />
                        <span className="text-[#2C3E30]">
                            {getTranslation("sectorTitle2", "Strategic Growth.", "Croissance Stratégique.")}
                        </span>
                    </h2>
                    <p className="text-[#4A4A4A] text-lg font-inter leading-relaxed max-w-xl">
                        {getTranslation(
                            "sectorDesc",
                            "Explore the key sectors driving the $10 Billion trade potential between Nigeria and Morocco.",
                            "Explorez les secteurs clés favorisant le potentiel commercial de 10 milliards de dollars entre le Nigeria et le Maroc."
                        )}
                    </p>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, index) => (
                        <SectorCard
                            key={index}
                            // Resolve text based on current language
                            title={i18n.language === 'fr' ? sector.titleFr : sector.title}
                            description={i18n.language === 'fr' ? sector.descriptionFr : sector.description}
                            image={sector.image}
                            icon={sector.icon}
                            exploreText={getTranslation("exploreBtn", "Explore Opportunity", "Explorer l'Opportunité")}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------
const sectors = [
    {
        title: "Agriculture & Agri-industry",
        titleFr: "Agriculture & Agro-industrie",
        description: "Joint ventures in fertilizer production (OCP), dairy processing, and localized farming technologies.",
        descriptionFr: "Coentreprises dans la production d'engrais (OCP), la transformation laitière et les technologies agricoles localisées.",
        image: "https://images.unsplash.com/photo-1625246333195-f8196812c850?q=80&w=800&auto=format&fit=crop",
        icon: <Sprout className="w-6 h-6" />,
    },
    {
        title: "Renewable Energy",
        titleFr: "Énergie Renouvelable",
        description: "Solar and wind energy projects leveraging Morocco's Noor expertise and Nigeria's vast potential.",
        descriptionFr: "Projets d'énergie solaire et éolienne tirant parti de l'expertise Noor du Maroc et du vaste potentiel du Nigeria.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: "Digital Economy",
        titleFr: "Économie Numérique",
        description: "Fintech partnerships, startup ecosystems, and cross-border digital payment infrastructures.",
        descriptionFr: "Partenariats Fintech, écosystèmes de startups et infrastructures de paiement numérique transfrontalières.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
        icon: <Laptop className="w-6 h-6" />,
    },
    {
        title: "Banking & Finance",
        titleFr: "Banque & Finance",
        description: "Cross-border banking expansion, trade finance facilitation, and investment protection frameworks.",
        descriptionFr: "Expansion bancaire transfrontalière, facilitation du financement du commerce et cadres de protection des investissements.",
        image: "https://images.unsplash.com/photo-1604594849806-d63dfbac4891?q=80&w=800&auto=format&fit=crop",
        icon: <Landmark className="w-6 h-6" />,
    },
    {
        title: "Tourism & Culture",
        titleFr: "Tourisme & Culture",
        description: "Cultural exchange programs, eco-tourism investments, and artisanal export corridors.",
        descriptionFr: "Programmes d'échange culturel, investissements écotouristiques et corridors d'exportation artisanaux.",
        image: "https://images.unsplash.com/photo-1534234828563-02511c75904d?q=80&w=800&auto=format&fit=crop",
        icon: <Plane className="w-6 h-6" />,
    },
    {
        title: "Mines & Solid Minerals",
        titleFr: "Mines & Minéraux Solides",
        description: "Strategic partnerships in Lithium, Iron Ore, and Phosphate extraction and processing.",
        descriptionFr: "Partenariats stratégiques dans l'extraction et le traitement du Lithium, du Minerai de Fer et du Phosphate.",
        image: "https://images.unsplash.com/photo-1518182170546-0766aa6f6a56?q=80&w=800&auto=format&fit=crop",
        icon: <Gem className="w-6 h-6" />,
    },
];

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------
const SectorCard = ({ title, description, image, icon, exploreText, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative h-[450px] w-full overflow-hidden rounded-[2rem] bg-[#1A1A1A] cursor-pointer"
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-80"
                />

                {/* BRANDING MAGIC: Forest Green mix overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2C3E30]/40 to-[#0D1210] opacity-90 transition-opacity duration-300" />
            </div>

            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#2C3E30] group-hover:border-[#2C3E30]">
                {icon}
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">

                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-syne leading-tight mb-3 group-hover:-translate-y-2 transition-transform duration-300">
                    {title}
                </h3>

                {/* Description (Hides partially, reveals on hover) */}
                <div className="relative overflow-hidden grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="min-h-0">
                        <p className="text-[#DDE5D7] text-sm leading-relaxed font-inter mb-4 border-t border-white/20 pt-4">
                            {description}
                        </p>
                    </div>
                </div>

                {/* "Learn More" Arrow that appears */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A3E635] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
                    {exploreText} <ArrowRightUp className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
};

// Helper Icon for the hover state
const ArrowRightUp = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
    </svg>
);