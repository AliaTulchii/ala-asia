import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import LanguageSelect from "../LangSelect/LangSelect";
import PhoneButton from "../Buttons/PhoneButton";
import MobileMenuButton from "../Buttons/MobileMenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import PixelBackground from "../PixelBackground/mobile-menu/PixelBackground";
import { useNavItems } from "./Header.Constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PopUp from "../PopUp/PopUp";




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navItems = useNavItems();
  const location = useLocation();

  const isPolicyPage = location.pathname === "/policy";
  const logoSrc = isPolicyPage
    ? "/assets/images/logo/logo-white.png"
    : "/assets/images/logo/logo.svg";

  return (
    <motion.header
      initial={false}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`header `}
    >
      <div className="header__container container">
        <div className="header__wrapper ">
          <NavLink to="/" className="">
            <motion.img
              key={logoSrc}
              src={logoSrc}
              alt="Logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="logo"
            />
          </NavLink>
          <nav className="header__nav">
            <ul className="header__list">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <NavLink
                    key={item.key}
                    to={item.path}
                    className={({ isActive }) =>
                      `header__nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="header__nav-box">
                      <p
                        className={`header__text ${
                          isPolicyPage
                            ? "header__text--light"
                            : "header__text--dark"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </NavLink>
                ) : (
                  <div key={item.key} className="header__nav-link">
                    <button
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className="header__nav-link"
                    >
                      <div className="header__nav-box">
                        <p
                          className={`header__text ${
                            isPolicyPage
                              ? "header__text--light"
                              : "header__text--dark"
                          }`}
                        >
                          {item.text}{" "}
                          <ChevronDown className="lang-select__icon" />
                        </p>
                      </div>
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <PopUp onMouseLeave={() => setServicesOpen(false)} />
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </ul>
            <div className="header__btns">
              <LanguageSelect />
              <PhoneButton />
            </div>
          </nav>
        </div>

        <div className="header__mobile-btns">
          <LanguageSelect />
          <MobileMenuButton
            onClick={() => {
              setMenuOpen(true);
            }}
            isPolicyPage={isPolicyPage}
          />
          <PixelBackground isOpen={menuOpen} />
          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
