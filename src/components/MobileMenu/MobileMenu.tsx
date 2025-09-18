import { motion, AnimatePresence } from "framer-motion";
import "./mobile-menu.scss";
import logoWhite from "/assets/images/logo/logo.svg";
import { useState } from "react";
import LanguageSelect from "../LangSelect/LangSelect";
import MobileMenuButton from "../Buttons/MobileMenuButton";
import { NavLink } from "react-router-dom";
import { MOBILE_MENU_LINKS } from "./MobileMenu.Constants";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 0.7 } },
  exit: { opacity: 0 },
};

const MobileMenu = ({
  isOpen,
  onClose,
  themeColor,
}: {
  isOpen: boolean;
  onClose: () => void;
  themeColor?: "light" | "dark";
}) => {
  const [activeSection, setActiveSection] = useState("");

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="mobile-menu"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="exit"
          variants={menuVariants}
        >
          <div className="mobile-menu__header">
            <a href="/hero" className="mobile-link">
              <img src={logoWhite} alt="logo" className="mobile-logo" />
            </a>
            <div className="mobile-menu__btns">
              <LanguageSelect
                styles="mobile-menu__lang"
                themeColor={themeColor}
              />
              <MobileMenuButton onClick={onClose} styles="menu-button--open" />
            </div>
          </div>

          <ul className="mobile-menu__list container">
            {MOBILE_MENU_LINKS.map((item, index) => (
              <li key={index} className="mobile-menu__item">
                <NavLink
                  to={item.to}
                  onClick={() => {
                    handleLinkClick(item.to);
                    onClose();
                  }}
                  className={`mobile-menu__link ${
                    activeSection === item.to ? "active" : ""
                  }`}
                >
                  <div className="mobile-menu__text-box">
                    <p className="mobile-menu__number">N{item.id}°</p>
                    <p className="mobile-menu__text">{item.text}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-menu__contacts-wrapper">
            <div className="mobile-menu__phone-box">
              <h2 className="mobile-menu__phone-title">Phone number</h2>
              <p className="mobile-menu__phone-text">+998 (91) 7 842 843</p>
              <p className="mobile-menu__phone-text">+998 (90) 0 190 140</p>
            </div>
            <div className="mobile-menu__email-box">
              <h2 className="mobile-menu__phone-title">Email address</h2>
              <p className="mobile-menu__phone-text">info@gl-hamkori.uz</p>
            </div>
          </div>

        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
