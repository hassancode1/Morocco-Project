import { useState } from "react";
import { Button, Dropdown, Drawer, Space } from "antd";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GlobeIcon from "../../../../components/GlobeIcon";
import MenuIcon from "../MenuIcon";

interface Props {
  onRegister: () => void;
  onBook: () => void;
}

const SecondEditionNavBar: React.FC<Props> = ({ onRegister, onBook }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const getTranslation = (
    key: string,
    enDefault: string,
    frDefault?: string
  ) => {
    const defaultValue =
      i18n.language === "fr" && frDefault ? frDefault : enDefault;
    return t(key, { defaultValue });
  };

  const items: MenuProps["items"] = [
    {
      key: "en",
      label: (
        <span
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English 🇬🇧
        </span>
      ),
    },
    {
      key: "fr",
      label: (
        <span
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          French 🇫🇷
        </span>
      ),
    },
  ];

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="nav sticky top-0 z-30 px-5 md:px-20 lg:px-40 min-h-20 p-0 bg-silver/90 backdrop-blur-md shadow-md flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-bold text-primary drop-shadow">
        🇳🇬 NIGERIA-MOROCCO 🇲🇦
      </h1>
      <div className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 flex-wrap md:flex-nowrap">
        <a
          className="text-[13px] lg:text-[14px] font-medium hover:text-primary transition whitespace-nowrap"
          href="#top"
        >
          {getTranslation("Home", "Home", "Accueil")}
        </a>
        <motion.a
          animate={{
            scale: [1, 1.12, 1],
            color: ["rgb(55, 65, 81)", "rgb(37, 99, 235)", "rgb(55, 65, 81)"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          whileHover={{
            scale: 1.25,
            fontWeight: 700,
            color: "rgb(37, 99, 235)",
          }}
          whileTap={{ scale: 0.9 }}
          style={{
            textShadow: "0px 0px 10px rgba(37, 99, 235, 0.5)",
          }}
          className="text-[13px] lg:text-[14px] font-medium whitespace-nowrap cursor-pointer"
          href="#partners"
        >
          {getTranslation("Sponsors", "Sponsors", "Sponsors")}
        </motion.a>
        <motion.a
          animate={{
            scale: [1, 1.12, 1],
            color: ["rgb(55, 65, 81)", "rgb(37, 99, 235)", "rgb(55, 65, 81)"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          whileHover={{
            scale: 1.25,
            fontWeight: 700,
            color: "rgb(37, 99, 235)",
          }}
          whileTap={{ scale: 0.9 }}
          style={{
            textShadow: "0px 0px 10px rgba(37, 99, 235, 0.5)",
          }}
          className="text-[13px] lg:text-[14px] font-medium whitespace-nowrap cursor-pointer"
          href="/first-edition"
        >
          {getTranslation("firstEditionLink", "1st Edition", "1ère édition")}
        </motion.a>
        <Button
          type="primary"
          ghost
          onClick={(e) => {
            e.preventDefault();
            onBook();
          }}
          className="h-[40px] text-[12px] lg:text-sm hover:scale-105 transition whitespace-nowrap"
        >
          {getTranslation(
            "bookButtton",
            "Book A Space",
            "Obtenez Votre Stand/Espace"
          )}
        </Button>
        <Button
          onClick={onRegister}
          className="bg-primary min-w-[115px] h-[40px] text-[12px] lg:text-sm text-white hover:scale-105 transition whitespace-nowrap"
        >
          {getTranslation("Participate", "Participate", "Obtenez Votre Badge")}
        </Button>
        <Dropdown menu={{ items }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <Space>
              <p className="text-[10px]">
                {i18n.language === "en"
                  ? "English Language"
                  : "French Language"}
              </p>
              <GlobeIcon />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="flex items-center gap-4 md:hidden">
        <Dropdown menu={{ items }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <GlobeIcon />
          </a>
        </Dropdown>
        <div onClick={showDrawer}>
          <MenuIcon />
        </div>
      </div>

      <Drawer
        title={getTranslation("Menu", "Menu", "Menu")}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col items-center gap-[20px]">
          <a
            onClick={onClose}
            className="text-[14px]  w-full text-center"
            href="#top"
          >
            {getTranslation("Home", "Home", "Accueil")}
          </a>
          <motion.a
            onClick={onClose}
            animate={{
              scale: [1, 1.12, 1],
              color: ["rgb(55, 65, 81)", "rgb(37, 99, 235)", "rgb(55, 65, 81)"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            whileHover={{
              scale: 1.2,
              fontWeight: 700,
              color: "rgb(37, 99, 235)",
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              textShadow: "0px 0px 10px rgba(37, 99, 235, 0.5)",
            }}
            className="text-[14px] w-full text-center cursor-pointer"
            href="#partners"
          >
            {getTranslation("Sponsors", "Sponsors", "Sponsors")}
          </motion.a>
          <motion.a
            onClick={onClose}
            animate={{
              scale: [1, 1.12, 1],
              color: ["rgb(55, 65, 81)", "rgb(37, 99, 235)", "rgb(55, 65, 81)"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            whileHover={{
              scale: 1.2,
              fontWeight: 700,
              color: "rgb(37, 99, 235)",
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              textShadow: "0px 0px 10px rgba(37, 99, 235, 0.5)",
            }}
            className="text-[14px] w-full text-center cursor-pointer"
            href="/first-edition"
          >
            {getTranslation("firstEditionLink", "1st Edition", "1ère édition")}
          </motion.a>
          <Button
            type="primary"
            ghost
            onClick={(e) => {
              e.preventDefault();
              onBook();
              onClose();
            }}
            className="w-full h-[40px]"
          >
            {getTranslation(
              "bookButtton",
              "Book A Space",
              "Obtenez Votre Stand/Espace"
            )}
          </Button>
          <Button
            onClick={() => {
              onRegister();
              onClose();
            }}
            className="bg-primary w-full h-[40px] text-white"
          >
            {getTranslation(
              "Participate",
              "Participate",
              "Obtenez Votre Badge"
            )}
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default SecondEditionNavBar;
