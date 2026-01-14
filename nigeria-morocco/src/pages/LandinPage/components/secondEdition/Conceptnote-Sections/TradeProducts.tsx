"use client";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TradeProducts() {
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

    // Define data arrays inside component to react to language changes
    const moroccoProducts = [
        {
            title: getTranslation("catAgro", "Agro-Food Products", "Produits Agroalimentaires"),
            items: [
                getTranslation("item_olives", "Olives & Olive Oil", "Olives et Huile d'Olive"),
                getTranslation("item_dairy", "Dairy Milk", "Lait et Produits Laitiers"),
                getTranslation("item_wheat", "Wheat & Cereals", "Blé et Céréales"),
                getTranslation("item_argan", "Argan Oil", "Huile d'Argan"),
                getTranslation("item_dates", "Dates", "Dattes"),
                getTranslation("item_couscous", "Couscous", "Couscous"),
                getTranslation("item_sardines", "Sardines", "Sardines"),
                getTranslation("item_sugar", "Sugar", "Sucre")
            ]
        },
        {
            title: getTranslation("catInd", "Industrial Goods", "Biens Industriels"),
            items: [
                getTranslation("item_fert", "Fertilizers (OCP)", "Engrais (OCP)"),
                getTranslation("item_solar", "Solar Panels", "Panneaux Solaires"),
                getTranslation("item_auto", "Automotive Parts", "Pièces Automobiles"),
                getTranslation("item_textile", "Textiles", "Textiles"),
                getTranslation("item_pharma", "Pharmaceuticals", "Produits Pharmaceutiques"),
                getTranslation("item_cables", "Electrical Cables", "Câbles Électriques")
            ]
        }
    ];

    const nigeriaProducts = [
        {
            title: getTranslation("catAgro", "Agro-Food Products", "Produits Agroalimentaires"),
            items: [
                getTranslation("item_fruits", "Tropical Fruits", "Fruits Tropicaux"),
                getTranslation("item_ginger", "Ginger", "Gingembre"),
                getTranslation("item_chili", "Red Chili Pepper", "Piment Rouge"),
                getTranslation("item_garlic", "Garlic", "Ail"),
                getTranslation("item_livestock", "Livestock", "Bétail"),
                getTranslation("item_sesame", "Sesame Seeds", "Graines de Sésame"),
                getTranslation("item_cashew", "Cashew Nuts", "Noix de Cajou"),
                getTranslation("item_shea", "Shea Butter", "Beurre de Karité")
            ]
        },
        {
            title: getTranslation("catMin", "Industrial & Minerals", "Industriels & Minéraux"),
            items: [
                getTranslation("item_iron", "Iron Ore", "Minerai de Fer"),
                getTranslation("item_lithium", "Lithium", "Lithium"),
                getTranslation("item_oil", "Crude Oil & LNG", "Pétrole Brut & GNL"),
                getTranslation("item_cotton", "Cotton & Textiles", "Coton & Textiles"),
                getTranslation("item_build", "Building Materials", "Matériaux de Construction"),
                getTranslation("item_alum", "Aluminium", "Aluminium"),
                getTranslation("item_wood", "Wood Products", "Produits du Bois"),
                getTranslation("item_coal", "Coal", "Charbon")
            ]
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium mb-6">
                        {getTranslation("tradeOppTag", "Trade Opportunities", "Opportunités Commerciales")}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6 font-syne">
                        {getTranslation("tradeOppTitle", "Products for Export", "Produits pour l'Exportation")}
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed font-inter">
                        {getTranslation(
                            "tradeOppDesc",
                            "Explore the wide range of agricultural and industrial products driving bilateral trade between our nations.",
                            "Explorez la vaste gamme de produits agricoles et industriels favorisant le commerce bilatéral entre nos nations."
                        )}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Morocco to Nigeria */}
                    <div className="relative">
                        {/*

[Image of phosphate fertilizer production process]
 - Relevant here as OCP fertilizers are a major export */}
                        <ExportCard
                            flag="🇲🇦"
                            from={getTranslation("countryMorocco", "Morocco", "Maroc")}
                            to="Nigeria"
                            categories={moroccoProducts}
                            delay={0.1}
                        />
                    </div>

                    {/* Nigeria to Morocco */}
                    <div className="relative">
                        {/*

[Image of LNG supply chain diagram]
 - Relevant here as Energy is a key pillar of the partnership */}
                        <ExportCard
                            flag="🇳🇬"
                            from="Nigeria"
                            to={getTranslation("countryMorocco", "Morocco", "Maroc")}
                            categories={nigeriaProducts}
                            delay={0.2}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------

const ExportCard = ({ flag, from, to, categories, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200 h-full"
    >
        <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{flag}</span>
            <div>
                <h3 className="text-2xl font-bold text-neutral-900 font-syne">{from}</h3>
                <p className="text-sm text-neutral-600 flex items-center gap-2 font-inter">
                    <ArrowRight className="w-4 h-4" /> {to}
                </p>
            </div>
        </div>

        <div className="space-y-8">
            {categories.map((category: any, idx: number) => (
                <div key={idx}>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4 font-inter">{category.title}</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {category.items.map((item: string, i: number) => (
                            <div key={i} className="flex items-start gap-2">
                                <Package className="w-4 h-4 text-[#C2410C] mt-0.5 flex-shrink-0" /> {/* Slight tweak to orange/amber */}
                                <span className="text-sm text-neutral-700 font-inter">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);