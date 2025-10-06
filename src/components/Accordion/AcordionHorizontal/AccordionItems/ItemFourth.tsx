import { useTranslation } from "react-i18next";
import PlusIcon from "../../../../icons/PlusIcon";
import "../accordion-horizontal.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useAccordionHorizontalItems } from "./AccordionHorizontal.Constant";

const ItemFourth = () => {
  const { t } = useTranslation("qa");
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-horizontal">
      <div className="accordion-horizontal__wrapper">
        <div className={`accordion-horizontal__item ${isOpen ? "active" : ""}`}>
          <div className="accordion-horizontal__header container">
            <div className="accordion-horizontal__header-content">
              <p className="accordion-horizontal__header-text">
                {t("qa.item4.id")}
              </p>
              <h3 className="accordion-horizontal__header-title">
                {t("qa.item4.title")}
              </h3>
            </div>
            <button
              type="button"
              className={`accordion-horizontal__header-btn ${
                isOpen ? "open" : ""
              }`}
              onClick={toggleAccordion}
              aria-expanded={isOpen}
            >
              <PlusIcon />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                className="accordion-horizontal__content container"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ul className="accordion-horizontal__content-list accordion-horizontal__content-list--third">
                  <li className="accordion-horizontal__content-item">
                    <h3 className="accordion-horizontal__content-item-title">
                      {t("qa.item4.title1")}
                    </h3>
                    <p className="accordion-horizontal__content-item-subitem-text">
                      {t("qa.item4.text")}
                    </p>
                    <ul className="accordion-horizontal__content-item-sublist accordion-horizontal__content-item-sublist--fourth">
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item4.text1")}
                        </p>
                      </li>
                    </ul>
                  </li>

                  <li className="accordion-horizontal__content-item">
                    <h3 className="accordion-horizontal__content-item-title">
                      {t("qa.item4.title2")}
                    </h3>
                    <ul className="accordion-horizontal__content-item-sublist">
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item4.text2")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item4.text3")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item4.text4")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item4.text5")}
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>

                <p className="accordion-horizontal__content-text">
                  {t("qa.item4.text6")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ItemFourth;
