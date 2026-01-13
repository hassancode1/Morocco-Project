"use client";

import React from "react";
import { motion } from "framer-motion"; // Standardized import
import { FileText, Building, Globe, TrendingUp, Ship, Wheat } from "lucide-react";

export default function ExpectedOutcomes() { // Changed to default export
    const outcomes = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Strategic MoUs & Agreements",
            desc: "Signing of joint ventures and investment agreements"
        },
        {
            icon: <Building className="w-6 h-6" />,
            title: "Manufacturing Facilities",
            desc: "Establishment of Moroccan agri-processing facilities in Nigeria"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Market Access",
            desc: "Greater access for Nigerian commodities to Moroccan and European markets"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Trade Barrier Resolution",
            desc: "Tangible steps toward resolving non-tariff barriers and certification challenges"
        },
        {
            icon: <Ship className="w-6 h-6" />,
            title: "Maritime Corridor",
            desc: "Launch of direct sea lane between Lagos and Moroccan ports"
        },
        {
            icon: <Wheat className="w-6 h-6" />,
            title: "AfCFTA Cooperation",
            desc: "Stronger regional cooperation aligned with AfCFTA goals"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 text-neutral-300 text-sm font-medium mb-6">
                        Expected Outcomes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 font-syne">
                        What We'll Achieve Together
                    </h2>
                    <p className="text-lg text-neutral-400 leading-relaxed font-inter">
                        Concrete deliverables and actionable partnerships that will reshape bilateral trade for years to come.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outcomes.map((outcome, idx) => (
                        <OutcomeCard key={idx} {...outcome} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------

const OutcomeCard = ({ icon, title, desc, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-amber-600/50 hover:bg-neutral-800/80 transition-all group"
    >
        <div className="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-colors">
            <div className="text-amber-500">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 font-syne">{title}</h3>
        <p className="text-neutral-400 leading-relaxed font-inter">{desc}</p>
    </motion.div>
);