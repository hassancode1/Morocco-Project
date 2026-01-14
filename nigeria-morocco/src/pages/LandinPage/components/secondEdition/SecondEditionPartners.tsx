"use client";
import  { forwardRef } from "react";
import { motion } from "framer-motion";

// -------------------------------------------------------
// Data Preservation (Mapped from Old Code)
// -------------------------------------------------------
// We keep the image paths handy in case you want to add them back later,
// but for now, we are using the Text/Typographic style of the new design.
const PARTNER_DATA = {
  auspices: {
    title: "The Nigeria Embassy, Rabat.",
    sub: "  UNDER THE AUSPICES OF",
    // src: "Embassy.png"
  },
  official: [
    {
      role: "Agro Industry",
      name: "FENAGRI",
      description: "Fédération Nationale de l'Agroalimentaire",
      // src: "fenagri.png"
    },
    {
      role: "Agriculture",
      name: "NIRSAL",
      description: "Incentive-Based Risk Sharing System",
      // src: "nirsal.jpeg"
    },
    {
      role: "Air Transport",
      name: "Royal Air Maroc",
      description: "Official Carrier of the Business Week",
      // src: "ram.png"
    },
  ],
  institutional: [
    "Ministry of Steel Development", // Matches MSD.jpg
    "National Automotive Design Council", // Matches NADDC.png
    "CCISCS", // Matches casa.png (Chamber of Commerce)
    "Federal Ministry of Industry", // Matches fmiti.png
  ],
  strategic: [
    "Highland Integrated Electricity", // Matches HIESL.png
    "Jos Electricity Distribution", // Matches jed.jpg
    "Farm Creed", // Matches farmcreed.jpg
    "Spectre Trans-Trade Global", // Added from new design
  ],
};

// -------------------------------------------------------
// Component
// -------------------------------------------------------

const SecondEditionPartners = forwardRef<HTMLDivElement>((_, ref) => {
  return (
      <section
          ref={ref}
          id="partners" // Kept "partners" ID so Hero scroll works
          className="py-24 md:py-32 bg-[#F9FBF9]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* --- TIER 1: THE HEADLINER (Embassy) --- */}
          <div className="mb-24 md:mb-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-bold text-[#2C3E30] tracking-[0.2em] uppercase mb-6 font-inter">
                {PARTNER_DATA.auspices.sub}
              </p>
              <h2 className="text-4xl md:text-7xl font-extrabold text-[#1A1A1A] leading-[0.9] font-syne mx-auto max-w-4xl">
                The Nigeria Embassy, <br />
                <span className="text-[#2C3E30]">Rabat.</span>
              </h2>
              {/* A decorative Sage divider */}
              <div className="w-32 h-1.5 bg-[#DDE5D7] mx-auto mt-10 rounded-full" />
            </motion.div>
          </div>

          {/* --- TIER 2: OFFICIAL SPONSORS (Big, Bold Grid) --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 border-b border-[#DDE5D7] pb-4">
              <span className="w-2 h-2 rounded-full bg-[#2C3E30]"></span>
              <h3 className="text-xs font-bold text-[#2C3E30] uppercase tracking-widest font-inter">
                Official Partners & Sponsors
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
              {PARTNER_DATA.official.map((partner, index) => (
                  <TypographicCard
                      key={partner.name}
                      role={partner.role}
                      name={partner.name}
                      description={partner.description}
                      delay={0.1 * (index + 1)}
                  />
              ))}
            </div>
          </div>

          {/* --- TIER 3: THE LISTS (Clean, Modern Lists) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Institutional Partners */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-[#DDE5D7] pb-4">
                <span className="w-2 h-2 rounded-full bg-[#DDE5D7]"></span>
                <h3 className="text-xs font-bold text-[#8A8A8A] uppercase tracking-widest font-inter">
                  Institutional Partners
                </h3>
              </div>
              <ul className="space-y-6">
                {PARTNER_DATA.institutional.map((partner, idx) => (
                    <ListItem key={idx} text={partner} delay={idx * 0.1} />
                ))}
              </ul>
            </div>

            {/* Strategic Partners */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-[#DDE5D7] pb-4">
                <span className="w-2 h-2 rounded-full bg-[#DDE5D7]"></span>
                <h3 className="text-xs font-bold text-[#8A8A8A] uppercase tracking-widest font-inter">
                  Strategic Partners
                </h3>
              </div>
              <ul className="space-y-6">
                {PARTNER_DATA.strategic.map((partner, idx) => (
                    <ListItem key={idx} text={partner} delay={idx * 0.1} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
});

SecondEditionPartners.displayName = "SecondEditionPartners";
export default SecondEditionPartners;

// -------------------------------------------------------
// Sub Components
// -------------------------------------------------------

const TypographicCard = ({
                           role,
                           name,
                           description,
                           delay,
                         }: {
  role: string;
  name: string;
  description: string;
  delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay }}
        whileHover={{ x: 10 }} // Subtle shift right on hover
        className="group cursor-pointer flex flex-col justify-between h-full border-l-2 border-[#DDE5D7] pl-8 hover:border-[#2C3E30] transition-colors duration-300"
    >
      <div>
        <p className="text-xs font-bold text-[#2C3E30] mb-3 font-inter uppercase tracking-wide bg-[#E8F0E6] inline-block px-2 py-1 rounded-sm">
          {role}
        </p>
        <h4 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tighter font-syne group-hover:text-[#2C3E30] transition-colors">
          {name}
        </h4>
      </div>
      <p className="text-sm text-[#4A4A4A] font-inter leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
);

const ListItem = ({ text, delay }: { text: string; delay: number }) => (
    <motion.li
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        className="flex items-center group cursor-default"
    >
      {/* Animated Bullet Point */}
      <span className="w-1.5 h-1.5 bg-[#DDE5D7] rounded-full mr-4 group-hover:bg-[#2C3E30] group-hover:scale-150 transition-all duration-300" />

      <span className="text-xl md:text-2xl font-medium text-[#1A1A1A] font-syne group-hover:translate-x-2 transition-transform duration-300">
      {text}
    </span>
    </motion.li>
);