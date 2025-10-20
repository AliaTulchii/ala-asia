import { motion, AnimatePresence } from "framer-motion";
import "./mobile-menu.scss";
import logoWhite from "../../../public/assets/images/logo/logo-white.svg";
import { useEffect, useState} from "react";
import LanguageSelect from "../LangSelect/LangSelect";
import MobileMenuButton from "../Buttons/MobileMenuButton";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMobileMenuItems } from "./MobileMenu.Constants";
import MobileMenuSelect from "../MobileMenuSelect/MobileMenuSelect";

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
  const navItems = useMobileMenuItems();
  const { t } = useTranslation("contact")
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onClose();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
            <a href="/" className="mobile-link">
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
            {navItems.map((item, index) => (
              <li key={index} className="mobile-menu__item">
                {item.type === "select" ? (
                  <MobileMenuSelect
                    classSelect={`${
                      currentPath.startsWith("/services") ? "active" : ""
                    }`}
                    classText="mobile-menu__text"
                    label={item.text}
                    options={item.options || []}
                    onSelect={(path) => {
                      handleLinkClick(path);
                      onClose();
                    }}
                  />
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => {
                      handleLinkClick(item.path);
                      onClose();
                      window.scrollTo(0, 0);
                    }}
                    className={`mobile-menu__link ${
                      activeSection === item.path ? "active" : ""
                    }`}
                  >
                    <p className="mobile-menu__text">{item.text}</p>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-menu__contacts-wrapper">
            <h2 className="mobile-menu__phone-title">
              {t("contact.address.item1.email")}
            </h2>
            <div className="mobile-menu__phone-box">
              <p className="mobile-menu__phone-text">
                {t("contact.address.item1.phone1")}
              </p>
              <p className="mobile-menu__phone-text">
                {t("contact.address.item1.phone2")}
              </p>
            </div>
          </div>

          <h2 className="mobile-menu__title">ALA Asia</h2>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
