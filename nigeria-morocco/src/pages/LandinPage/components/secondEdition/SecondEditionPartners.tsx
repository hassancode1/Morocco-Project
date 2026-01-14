"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// -------------------------------------------------------
// Data: Partners
// -------------------------------------------------------
const PARTNER_DATA = {
  auspices: {
    title: "The Nigeria Embassy, Rabat.",
    titleFr: "L'Ambassade du Nigeria, Rabat.",
    sub: "UNDER THE AUSPICES OF",
    subFr: "SOUS L'ÉGIDE DE",
  },
  // Row 1
  rowOne: [
    {
      role: "Agro Industry",
      roleFr: "Agro-industrie",
      name: "FENAGRI",
      description: "National Agri-Food Federation",
      descriptionFr: "Fédération Nationale de l'Agroalimentaire",
      logo: "/logo/3.png"
    },
    {
      role: "Agriculture",
      roleFr: "Agriculture",
      name: "NIRSAL",
      description: "Incentive-Based Risk Sharing System",
      descriptionFr: "Système de partage des risques basé sur les incitations",
      logo: "/logo/2.png"
    },
  ],
  // Row 2
  rowTwo: {
    role: "Air Transport",
    roleFr: "Transport Aérien",
    name: "Royal Air Maroc",
    description: "Official Carrier of the Business Week",
    descriptionFr: "Transporteur Officiel de la Semaine des Affaires",
    logo: "/logo/1.png"
  },
  institutional: [
    { en: "Ministry of Steel Development", fr: "Ministère du Développement de l'Acier" },
    { en: "National Automotive Design Council", fr: "Conseil National du Design Automobile" },
    { en: "CCISCS", fr: "CCISCS" },
    { en: "Federal Ministry of Industry", fr: "Ministère Fédéral de l'Industrie" },
  ],
  strategic: [
    { en: "Highland Integrated Electricity", fr: "Highland Integrated Electricity" },
    { en: "Jos Electricity Distribution", fr: "Jos Electricity Distribution" },
    { en: "Farm Creed", fr: "Farm Creed" },
    { en: "Spectre Trans-Trade Global", fr: "Spectre Trans-Trade Global" },
  ],
};

// -------------------------------------------------------
// Component
// -------------------------------------------------------

const SecondEditionPartners = forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();

  const getTranslation = (key: string, enDefault: string, frDefault?: string) => {
    const defaultValue = i18n.language === "fr" && frDefault ? frDefault : enDefault;
    return t(key, { defaultValue });
  };

  return (
      <section
          ref={ref}
          id="partners"
          className="py-24 md:py-32 bg-[#F9FBF9]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* --- TIER 1: THE HEADLINER --- */}
          <div className="mb-24 md:mb-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-bold text-[#2C3E30] tracking-[0.2em] uppercase mb-6 font-inter">
                {getTranslation("auspicesSub", PARTNER_DATA.auspices.sub, PARTNER_DATA.auspices.subFr)}
              </p>
              <h2 className="text-4xl md:text-7xl font-extrabold text-[#1A1A1A] leading-[0.9] font-syne mx-auto max-w-4xl">
                {getTranslation("auspicesTitle", "The Nigeria Embassy,", "L'Ambassade du Nigeria,")} <br />
                <span className="text-[#2C3E30]">Rabat.</span>
              </h2>
              <div className="w-32 h-1.5 bg-[#DDE5D7] mx-auto mt-10 rounded-full" />
            </motion.div>
          </div>

          {/* --- TIER 2: OFFICIAL SPONSORS --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 border-b border-[#DDE5D7] pb-4">
              <span className="w-2 h-2 rounded-full bg-[#2C3E30]"></span>
              <h3 className="text-xs font-bold text-[#2C3E30] uppercase tracking-widest font-inter">
                {getTranslation("officialPartnersTitle", "Official Partners & Sponsors", "Partenaires Officiels & Sponsors")}
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              {/* ROW 1: FENAGRI & NIRSAL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PARTNER_DATA.rowOne.map((partner, index) => (
                    <TypographicCard
                        key={partner.name}
                        role={getTranslation(`role_${partner.name}`, partner.role, partner.roleFr)}
                        name={partner.name}
                        description={getTranslation(`desc_${partner.name}`, partner.description, partner.descriptionFr)}
                        logo={partner.logo}
                        delay={0.1 * (index + 1)}
                    />
                ))}
              </div>

              {/* ROW 2: ROYAL AIR MAROC (Single Neat Row) */}
              <div className="w-full">
                <TypographicCard
                    isRowTwo
                    role={getTranslation(`role_RAM`, PARTNER_DATA.rowTwo.role, PARTNER_DATA.rowTwo.roleFr)}
                    name={PARTNER_DATA.rowTwo.name}
                    description={getTranslation(`desc_RAM`, PARTNER_DATA.rowTwo.description, PARTNER_DATA.rowTwo.descriptionFr)}
                    logo={PARTNER_DATA.rowTwo.logo}
                    delay={0.3}
                />
              </div>
            </div>
          </div>

          {/* --- TIER 3: THE LISTS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <ListHeader title={getTranslation("institutionalTitle", "Institutional Partners", "Partenaires Institutionnels")} />
              <ul className="space-y-6">
                {PARTNER_DATA.institutional.map((p, idx) => (
                    <ListItem key={idx} text={i18n.language === 'fr' ? p.fr : p.en} delay={idx * 0.1} />
                ))}
              </ul>
            </div>
            <div>
              <ListHeader title={getTranslation("strategicTitle", "Strategic Partners", "Partenaires Stratégiques")} />
              <ul className="space-y-6">
                {PARTNER_DATA.strategic.map((p, idx) => (
                    <ListItem key={idx} text={i18n.language === 'fr' ? p.fr : p.en} delay={idx * 0.1} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
});

// -------------------------------------------------------
// Sub Components
// -------------------------------------------------------

const TypographicCard = ({ role, name, description, logo, delay, isRowTwo }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`group flex flex-col ${isRowTwo ? 'md:flex-row md:items-center md:gap-12' : ''} bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-[#2C3E30]/10`}
    >
      <div className={`${isRowTwo ? 'md:w-1/4 mb-6 md:mb-0' : 'mb-8'} h-20 flex items-center justify-start`}>
        <img
            src={logo}
            alt={name}
            className="h-full w-auto object-contain mix-blend-multiply"
            onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      <div className="flex-grow">
        <div className="mb-4">
        <span className="text-[10px] font-bold text-[#2C3E30] font-inter uppercase tracking-widest bg-[#E8F0E6] px-3 py-1.5 rounded-full">
          {role}
        </span>
        </div>
        <h4 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-syne mb-2 group-hover:text-[#2C3E30] transition-colors">
          {name}
        </h4>
        <p className="text-sm text-[#4A4A4A] font-inter leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </motion.div>
);

const ListHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 mb-8 border-b border-[#DDE5D7] pb-4">
      <span className="w-2 h-2 rounded-full bg-[#DDE5D7]"></span>
      <h3 className="text-xs font-bold text-[#8A8A8A] uppercase tracking-widest font-inter">{title}</h3>
    </div>
);

const ListItem = ({ text, delay }: { text: string; delay: number }) => (
    <motion.li
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center group cursor-default"
    >
      <span className="w-1.5 h-1.5 bg-[#DDE5D7] rounded-full mr-4 group-hover:bg-[#2C3E30] group-hover:scale-150 transition-all duration-300" />
      <span className="text-lg md:text-xl font-medium text-[#1A1A1A] font-syne group-hover:translate-x-2 transition-transform duration-300">
      {text}
    </span>
    </motion.li>
);

SecondEditionPartners.displayName = "SecondEditionPartners";
export default SecondEditionPartners;