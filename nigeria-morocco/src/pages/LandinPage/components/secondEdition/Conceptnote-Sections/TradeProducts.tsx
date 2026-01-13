"use client";
import { motion } from "framer-motion"; // Adjusted to match your other files
import { ArrowRight, Package } from "lucide-react";

export default function TradeProducts() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium mb-6">
                        Trade Opportunities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6 font-syne">
                        Products for Export
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed font-inter">
                        Explore the wide range of agricultural and industrial products driving bilateral trade between our nations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Morocco to Nigeria */}
                    <ExportCard
                        flag="🇲🇦"
                        from="Morocco"
                        to="Nigeria"
                        categories={[
                            {
                                title: "Agro-Food Products",
                                items: ["Olives & Olive Oil", "Dairy Milk", "Wheat & Cereals", "Argan Oil", "Dates", "Couscous", "Sardines", "Sugar"]
                            },
                            {
                                title: "Industrial Goods",
                                items: ["Fertilizers (OCP)", "Solar Panels", "Automotive Parts", "Textiles", "Pharmaceuticals", "Electrical Cables"]
                            }
                        ]}
                        delay={0.1}
                    />

                    {/* Nigeria to Morocco */}
                    <ExportCard
                        flag="🇳🇬"
                        from="Nigeria"
                        to="Morocco"
                        categories={[
                            {
                                title: "Agro-Food Products",
                                items: ["Tropical Fruits", "Ginger", "Red Chili Pepper", "Garlic", "Livestock", "Sesame Seeds", "Cashew Nuts", "Shea Butter"]
                            },
                            {
                                title: "Industrial & Minerals",
                                items: ["Iron Ore", "Lithium", "Crude Oil & LNG", "Cotton & Textiles", "Building Materials", "Aluminium", "Wood Products", "Coal"]
                            }
                        ]}
                        delay={0.2}
                    />

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
        className="bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200"
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