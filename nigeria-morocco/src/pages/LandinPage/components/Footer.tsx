"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const { t, i18n } = useTranslation();

  // Helper function (Preserved)
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
      <footer className="bg-[#0D1210] border-t border-[#2C3E30] pt-20 pb-10 font-inter">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Section: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

            {/* Brand Column (Spans 5 on Desktop) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img
                    src="https://flagcdn.com/w40/ng.png"
                    alt="Nigeria flag"
                    className="w-6 rounded-sm shadow-sm"
                />
                <h1 className="font-bold font-syne text-2xl text-white tracking-tight">
                  Nigeria - Morocco
                </h1>
                <img
                    src="https://flagcdn.com/w40/ma.png"
                    alt="Morocco flag"
                    className="w-6 rounded-sm shadow-sm"
                />
              </div>

              <p className="text-[#8A8A8A] leading-relaxed max-w-sm">
                {getTranslation(
                    "FooterDescription",
                    "Advancing Nigeria - Morocco Trade & Investments through Economic Integration & Implementation.",
                    "Faire progresser le commerce et les investissements Nigeria - Maroc grâce à l'intégration économique et à la mise en œuvre."
                )}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <SocialButton icon={<Twitter size={18} />} href="#" label="Twitter" />
                <SocialButton icon={<Instagram size={18} />} href="#" label="Instagram" />
                <SocialButton icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
              </div>
            </div>

            {/* Links Column (Spans 7 on Desktop) */}
            <div className="md:col-span-7 grid grid-cols-2 gap-8 md:pl-12">

              {/* Quick Links */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold font-syne text-white text-lg mb-2">
                  {getTranslation("QuickLinks", "Quick Links", "Liens rapides")}
                </h2>
                <FooterLink href="#" text={getTranslation("About", "About", "À propos")} />
                <FooterLink href="#" text={getTranslation("Sectors", "Sectors", "Secteurs")} />
                <FooterLink href="#" text={getTranslation("Sponsors & Partner", "Sponsors & Partner", "Sponsors et Partenaires")} />
                <FooterLink href="#" text={getTranslation("Updates", "Updates", "Mises à jour")} />
                <FooterLink href="#" text={getTranslation("Contact", "Contact", "Contact")} />
              </div>

              {/* Resources */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold font-syne text-white text-lg mb-2">
                  {getTranslation("Resources", "Resources", "Ressources")}
                </h2>
                <FooterLink href="#" text={getTranslation("TravelGuide", "Travel Guide", "Guide de voyage")} />
                <FooterLink href="#" text={getTranslation("Contact", "Contact", "Contact")} />
                <FooterLink href="#" text={getTranslation("Page", "Page", "Page")} />
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-[#2C3E30] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#4A4A4A]">
              {getTranslation(
                  "Copyright",
                  "© 2025 Nigeria-Morocco Business Week. All rights reserved.",
                  "© 2025 Semaine des affaires Nigeria-Maroc. Tous droits réservés."
              )}
            </p>

            {/* Optional bottom links */}
            <div className="flex gap-6 text-xs text-[#4A4A4A]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
  );
}

// --- SUB-COMPONENTS ---

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
    <a
        href={href}
        aria-label={label}
        className="w-10 h-10 rounded-xl bg-[#151C18] border border-[#2C3E30] flex items-center justify-center text-white hover:bg-[#4F7A55] hover:border-[#4F7A55] transition-all duration-300"
    >
      {icon}
    </a>
);

const FooterLink = ({ href, text }: { href: string, text: string }) => (
    <a
        href={href}
        className="text-sm text-[#8A8A8A] hover:text-[#DDE5D7] transition-colors flex items-center gap-2 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#2C3E30] group-hover:bg-[#4F7A55] transition-colors duration-300"></span>
      {text}
    </a>
);