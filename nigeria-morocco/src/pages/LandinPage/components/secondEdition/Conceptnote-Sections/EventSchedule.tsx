"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Factory, Award, ArrowRight } from "lucide-react";

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export default function EventSchedule() { // Changed to default export
    return (
        <section className="py-24 md:py-32 bg-[#F9FBF9] relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-[#2C3E30]"></span>
                        <span className="text-[#2C3E30] font-bold tracking-[0.2em] text-sm uppercase font-inter">
                            The Itinerary
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] font-syne leading-tight mb-6">
                        Three Cities. <br />
                        <span className="text-[#2C3E30]">Three Days.</span>
                    </h2>
                    <p className="text-lg text-[#4A4A4A] font-inter leading-relaxed max-w-xl">
                        A strategic tour across Nigeria's economic powerhouses. From commerce in Lagos to agriculture in Kano, concluding with diplomacy in Abuja.
                    </p>
                </div>

                {/* --- CONNECTING LINE (Visual only) --- */}
                <div className="hidden lg:block absolute top-[40%] left-0 w-full h-px border-t-2 border-dashed border-[#DDE5D7] z-0 pointer-events-none" />

                {/* --- TIMELINE CARDS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

                    {/* LAGOS - Forest Green */}
                    <ProgrammeCard
                        day="Day 01"
                        city="Lagos"
                        date="Feb 09, 2026"
                        venue="Federal Palace Hotel"
                        theme="Commerce & Networking"
                        activities={[
                            "High-level Conference",
                            "B2B Meetings",
                            "Exhibition Hall",
                        ]}
                        icon={<Building2 className="w-6 h-6" />}
                        variant="forest"
                        delay={0.1}
                    />

                    {/* KANO - Sage Green */}
                    <ProgrammeCard
                        day="Day 02"
                        city="Kano"
                        date="Feb 10, 2026"
                        venue="Bristol Palace Hotel"
                        theme="Agriculture & Agro-Industry"
                        activities={[
                            "B2B Meetings",
                            "Farm & Dam Visits",
                            "Agro-processing Tour",
                        ]}
                        icon={<Factory className="w-6 h-6" />}
                        variant="sage"
                        delay={0.2}
                    />

                    {/* ABUJA - Charcoal */}
                    <ProgrammeCard
                        day="Day 03"
                        city="Abuja"
                        date="Feb 11, 2026"
                        venue="Abuja Continental Hotel"
                        theme="Policy & Diplomacy"
                        activities={[
                            "Award Ceremony",
                            "Government Roundtable",
                            "Closing Ceremoni"
                        ]}
                        icon={<Award className="w-6 h-6" />}
                        variant="charcoal"
                        delay={0.3}
                    />

                </div>

                {/* --- CTA --- */}
                <div className="mt-20 flex justify-center">
                    <button className="group relative px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl font-syne">
                        <span className="relative z-10 flex items-center gap-2">
                            Download Full Agenda <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Hover fill effect */}
                        <div className="absolute inset-0 bg-[#2C3E30] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>
                </div>

            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------

interface ProgrammeCardProps {
    day: string;
    city: string;
    date: string;
    venue: string;
    theme: string;
    activities: string[];
    icon: React.ReactNode;
    variant: "forest" | "sage" | "charcoal";
    delay: number;
}

const ProgrammeCard = ({ day, city, date, venue, activities, icon, variant, delay }: ProgrammeCardProps) => {

    // Style configurations based on variant
    const styles = {
        forest: {
            bg: "bg-[#2C3E30]",
            text: "text-white",
            subText: "text-[#DDE5D7]",
            badge: "bg-white/10 text-white border-white/20",
            iconBg: "bg-[#1A261D]",
            bullet: "bg-[#4F7A55]"
        },
        sage: {
            bg: "bg-[#E8F0E6]", // Very light sage
            text: "text-[#1A1A1A]",
            subText: "text-[#4A4A4A]",
            badge: "bg-[#2C3E30] text-white border-[#2C3E30]",
            iconBg: "bg-[#DDE5D7]",
            bullet: "bg-[#2C3E30]"
        },
        charcoal: {
            bg: "bg-[#1A1A1A]",
            text: "text-white",
            subText: "text-[#8A8A8A]",
            badge: "bg-white text-[#1A1A1A] border-white",
            iconBg: "bg-[#2C3E30]",
            bullet: "bg-[#DDE5D7]"
        }
    };

    const style = styles[variant];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`
                ${style.bg} ${style.text}
                p-8 md:p-10 rounded-[2rem] 
                relative overflow-hidden group
                shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
            `}
        >
            {/* Top Badge (Day) */}
            <div className="flex justify-between items-start mb-8">
                <span className={`px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase font-inter ${style.badge}`}>
                    {day}
                </span>
                <div className={`p-3 rounded-2xl ${style.iconBg}`}>
                    {icon}
                </div>
            </div>

            {/* City & Date */}
            <div className="mb-8">
                <h3 className="text-4xl font-bold font-syne mb-2 tracking-tight">{city}</h3>
                <div className={`flex items-center gap-2 text-sm font-medium font-inter ${style.subText} opacity-80`}>
                    <Calendar className="w-4 h-4" />
                    {date}
                </div>
            </div>

            {/* Venue & Theme */}
            <div className={`mb-8 pb-8 border-b border-current opacity-20`}></div>

            <div className="space-y-6">
                <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 opacity-60 font-inter`}>Venue</p>
                    <div className="flex items-center gap-2 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>{venue}</span>
                    </div>
                </div>

                <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 opacity-60 font-inter`}>Activities</p>
                    <ul className="space-y-3">
                        {activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm font-inter leading-relaxed">
                                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${style.bullet}`}></span>
                                <span className="opacity-90">{activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};