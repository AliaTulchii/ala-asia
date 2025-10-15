import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import LanguageSelect from "../LangSelect/LangSelect";
import PhoneButton from "../Buttons/PhoneButton";
import MobileMenuButton from "../Buttons/MobileMenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect, useState } from "react";
// import PixelBackground from "../PixelBackground/mobile-menu/PixelBackground";
import { useNavItems } from "./Header.Constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PopUp from "../PopUp/PopUp";

type HeaderProps = {
  themeColor?: "light" | "dark";
};


const Header: React.FC<HeaderProps> = ({ themeColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navItems = useNavItems();
  const location = useLocation();
  const isLightPage = ["/about", "/contact"].includes(location.pathname);
  // const logoSrc = isLightPage
  //   ? "/assets/images/logo/logo.svg"
  //   : themeColor === "light"
  //   ? "/assets/images/logo/logo-white.svg"
  //     : "/assets/images/logo/logo.svg";

  const logoSrc = isLightPage
    ? "/assets/images/logo/logo-white.svg"
    : "/assets/images/logo/logo.svg"; 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // коли прокрутили більше ніж 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={themeColor}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`header ${
        themeColor === "light" ? "header--light" : "header--dark"
      } ${isScrolled ? "scrolled" : ""}`}
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
                          isLightPage
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
                    <NavLink
                      onMouseEnter={() => setServicesOpen((prev) => !prev)}
                      to="/services"
                      className="header__nav-link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="header__nav-box">
                        <p
                          className={`header__text ${
                            isLightPage
                              ? "header__text--light"
                              : "header__text--dark"
                          }`}
                        >
                          {item.text}{" "}
                          <ChevronDown className="lang-select__icon" />
                        </p>
                      </div>
                    </NavLink>

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
              <LanguageSelect
                themeColor={isLightPage ? "policy" : themeColor}
              />
              <PhoneButton themeColor={isLightPage ? "policy" : themeColor} />
            </div>
          </nav>
        </div>

        <div className="header__mobile-btns">
          <LanguageSelect themeColor={isLightPage ? "policy" : themeColor} />
          <MobileMenuButton
            onClick={() => {
              setMenuOpen(true);
            }}
          />
          {/* <PixelBackground isOpen={menuOpen} /> */}
          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
