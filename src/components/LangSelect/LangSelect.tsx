import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { useLanguagesSelect, type LanguageCode } from "./LangSelect.Constants";
import "./lang-select.scss";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSelectProps {
  styles?: string;
  themeColor?: "light" | "dark" | "policy";
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  themeColor,
}) => {
  const { i18n } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);
  const langs = useLanguagesSelect();
  const supportedLangs: LanguageCode[] = ["ru", "en", "kz"];
  const currentLang: LanguageCode = supportedLangs.includes(
    i18n.language as LanguageCode
  )
    ? (i18n.language as LanguageCode)
    : "en";

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const changeLanguage = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as LanguageCode | null;
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className={`lang-select ${isOpen ? "lang-select--open" : ""}`}>
      <button
        onClick={toggleDropdown}
        className={`lang-select__btn ${
          themeColor === "light"
            ? "lang-select__btn--light"
            : themeColor === "policy"
            ? "lang-select__btn--policy"
            : "lang-select__btn--dark"
        } ${isOpen ? "lang-select__btn--open" : ""}`}
      >
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown className="lang-select__icon" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="lang-select__dropdown"
          >
            {langs
              .filter((lang) => lang.code !== currentLang)
              .map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`lang-select__dropdown-text ${
                    themeColor === "light"
                      ? "lang-select__dropdown-text--light"
                      : themeColor === "policy"
                      ? "lang-select__dropdown-text--policy"
                      : "lang-select__dropdown-text--dark"
                  }`}
                >
                  <p className="lang-select__btn">{lang.label}</p>

                  <img src={lang.img} alt="language flag" />
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelect;
