"use client";
import React, { useEffect, useState, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import { useTranslation } from "react-i18next";

// -------------------------------------------------------
// Interfaces (Preserved from Old Code)
// -------------------------------------------------------
interface Props {
    onRegister: () => void;
    onScrollToPartners: () => void;
}

interface Countdown {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    label: string;
}

// -------------------------------------------------------
// Data: Curated High-Res Imagery for Nigeria-Morocco
// -------------------------------------------------------
const conferenceItems = [
    {
        title: "Noor Solar Plant",
        thumbnail:
            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Agriculture in Kano",
        thumbnail:
            "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Lagos Commercial Hub",
        thumbnail:
            "https://images.unsplash.com/photo-1707008797390-38f13ea40163?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        title: "Abuja Diplomacy",
        thumbnail:
            "https://images.unsplash.com/photo-1721642472312-cd30e9bd7cac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWJ1amF8ZW58MHx8MHx8fDA%3D",
        link: "#",
    },
    {
        title: "Solid Minerals",
        thumbnail:
            "https://images.unsplash.com/photo-1625479610681-f789345a8157?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbmVyYWxzfGVufDB8fDB8fHww",
        link: "#",
    },
    {
        title: "Maritime Corridor",
        thumbnail:
            "https://images.unsplash.com/photo-1577044633072-27e87e4de579?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1hcml0aW1lJTIwQ29ycmlkb3J8ZW58MHx8MHx8fDA%3D",
        link: "#",
    },
    {
        title: "Fertilizers & Phosphates",
        thumbnail:
            "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmVydGlsaXplcnMlMjAlMjYlMjBQaG9zcGhhdGVzfGVufDB8fDB8fHww",
        link: "#",
    },
    {
        title: "Digital Economy",
        thumbnail:
            "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Textiles & Cotton",
        thumbnail:
            "https://images.unsplash.com/photo-1766320635268-a7bd54ffb3d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRleHRpbGVzJTIwYW5kJTIwY290dG9ufGVufDB8fDB8fHww",
        link: "#",
    },
    {
        title: "Tourism & Culture",
        thumbnail:
            "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "B2B Engagements",
        thumbnail:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Banking & Finance",
        thumbnail:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "The $10B Target",
        thumbnail:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Agro-Processing",
        thumbnail:
            "https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Closing Awards",
        thumbnail:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        link: "#",
    },
];

const EVENT_DATE = new Date("2026-02-09T09:00:00");

// -------------------------------------------------------
// Main Component
// -------------------------------------------------------
const SecondEditionHero: React.FC<Props> = ({
                                                onRegister,
                                                onScrollToPartners,
                                            }) => {
    const { t, i18n } = useTranslation();

    // Helper for translations (Preserved from Old Code)
    const getTranslation = (
        key: string,
        enDefault: string,
        frDefault?: string
    ) => {
        const defaultValue =
            i18n.language === "fr" && frDefault ? frDefault : enDefault;
        return t(key, { defaultValue });
    };

    // Countdown Logic (Preserved from Old Code)
    const [countdown, setCountdown] = useState<Countdown>({
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
        label: "",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = EVENT_DATE.getTime() - now.getTime();
            if (diff <= 0) {
                setCountdown({
                    days: "0",
                    hours: "0",
                    minutes: "0",
                    seconds: "0",
                    label: "Event Started!",
                });
                clearInterval(interval);
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setCountdown({
                days: String(days),
                hours: String(hours),
                minutes: String(minutes),
                seconds: String(seconds),
                label: "",
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Pass data and logic down to the visual layout
    return (
        <HeroParallax
            items={conferenceItems}
            countdown={countdown}
            getTranslation={getTranslation}
            onRegister={onRegister}
            onScrollToPartners={onScrollToPartners}
        />
    );
};

export default SecondEditionHero;

// -------------------------------------------------------
// Visual Components (New Design Implementation)
// -------------------------------------------------------

const HeroParallax = ({
                          items,
                          countdown,
                          getTranslation,
                          onRegister,
                          onScrollToPartners,
                      }: {
    items: {
        title: string;
        description?: string;
        thumbnail: string;
        link?: string;
    }[];
    countdown: Countdown;
    getTranslation: (key: string, en: string, fr?: string) => string;
    onRegister: () => void;
    onScrollToPartners: () => void;
}) => {
    const firstRow = items.slice(0, 5);
    const secondRow = items.slice(5, 10);
    const thirdRow = items.slice(10, 15);
    const ref = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const gradientOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 800]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -800]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.6, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[300vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#F9FBF9]"
        >
            <motion.div
                style={{ opacity: gradientOpacity }}
                className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#F9FBF9] via-[#F9FBF9] to-transparent w-full md:w-[70%]"
            />

            {/* Header receives the Logic/Event Handlers */}
            <Header
                countdown={countdown}
                getTranslation={getTranslation}
                onRegister={onRegister}
                onScrollToPartners={onScrollToPartners}
            />

            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-12">
                    {firstRow.map((item) => (
                        <GalleryCard
                            item={item}
                            translate={translateX}
                            scrollYProgress={scrollYProgress}
                            key={item.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-12 space-x-12">
                    {secondRow.map((item) => (
                        <GalleryCard
                            item={item}
                            translate={translateXReverse}
                            scrollYProgress={scrollYProgress}
                            key={item.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-12">
                    {thirdRow.map((item) => (
                        <GalleryCard
                            item={item}
                            translate={translateX}
                            scrollYProgress={scrollYProgress}
                            key={item.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

const Header = ({
                    countdown,
                    getTranslation,
                    onRegister,
                    onScrollToPartners,
                }: {
    countdown: Countdown;
    getTranslation: (key: string, en: string, fr?: string) => string;
    onRegister: () => void;
    onScrollToPartners: () => void;
}) => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#DDE5D7] bg-[#E8F0E6] text-[#2C3E30] text-sm font-bold tracking-wide font-inter">
                    🇳🇬 NIGERIA-MOROCCO 🇲🇦
                </div>
                <h1 className="text-4xl md:text-8xl font-extrabold text-[#1A1A1A] tracking-tight leading-[0.9] font-syne">
                    {/* We use translation here if you have keys for it, or keep the new english text */}
                    Unlocking <br />
                    <span className="text-[#2C3E30]">
            {getTranslation("businessweek", "Business Week", "Semaine des affaires")}
          </span>
                </h1>
                <p className="max-w-xl text-base md:text-xl mt-8 text-[#4A4A4A] font-inter leading-relaxed">
          <span className="text-black font-bold">
            {getTranslation("edition", "2nd Edition", "2ème édition")}
          </span>
                    {" "}- {getTranslation(
                    "slide2Body",
                    "Building stronger economic ties between Nigeria and Morocco through strategic partnerships.",
                    "Construire des liens économiques plus forts entre le Nigeria et le Maroc."
                )}
                </p>

                <div className="mt-10 flex flex-wrap gap-6 items-center">
                    <button
                        onClick={onRegister}
                        className="px-8 py-4 bg-[#2C3E30] text-[#F9FBF9] rounded-xl font-bold hover:bg-[#1a261d] transition-all transform hover:scale-105 shadow-xl shadow-green-900/20"
                    >
                        {getTranslation("Participate", "Register Now", "Obtenez Votre Badge")}
                    </button>

                    <button
                        onClick={onScrollToPartners}
                        className="px-6 py-4 bg-transparent border border-[#2C3E30] text-[#2C3E30] rounded-xl font-bold hover:bg-[#2C3E30] hover:text-[#F9FBF9] transition-all"
                    >
                        {getTranslation("learn", "Learn More", "En savoir plus")}
                    </button>

                    <div className="flex flex-col border-l-2 border-[#DDE5D7] pl-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-bold">
              {countdown.days}d {countdown.hours}h {countdown.minutes}m Left
            </span>
                        <span className="text-sm font-bold text-[#1A1A1A]">
              {getTranslation(
                  "heroEventDate",
                  "Feb 9 - 11, 2026",
                  "9-11 février 2026"
              )}
            </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const GalleryCard = ({
                         item,
                         translate,
                         scrollYProgress,
                     }: {
    item: {
        title: string;
        description?: string;
        thumbnail: string;
        link?: string;
    };
    translate: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
}) => {
    const textOpacity = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.05, 0.18], [30, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0.05, 0.18], [0, 0.7]);

    return (
        <motion.div
            style={{ x: translate }}
            whileHover={{ y: -15 }}
            key={item.title}
            className="group/product h-[500px] w-[340px] relative shrink-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white border border-white/50"
        >
            <img
                src={item.thumbnail}
                className="object-cover absolute h-full w-full inset-0 transition-transform duration-700 group-hover/product:scale-110"
                alt={item.title}
            />

            <motion.div
                style={{ opacity: overlayOpacity }}
                className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#2C3E30] via-[#2C3E30]/40 to-transparent transition-opacity duration-300"
            />

            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="absolute bottom-0 left-0 p-8 text-white w-full"
            >
                <h2 className="text-xl font-bold mb-1 font-syne leading-tight">
                    {item.title}
                </h2>
                {item.description && (
                    <p className="text-xs text-[#E8F0E6] font-inter uppercase tracking-widest font-medium">
                        {item.description}
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
};