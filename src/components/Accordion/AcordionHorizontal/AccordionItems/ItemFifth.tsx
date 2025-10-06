import { useTranslation } from "react-i18next";
import PlusIcon from "../../../../icons/PlusIcon";
import "../accordion-horizontal.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useAccordionHorizontalItems } from "./AccordionHorizontal.Constant";

const ItemFifth = () => {
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
                {t("qa.item5.id")}
              </p>
              <h3 className="accordion-horizontal__header-title">
                {t("qa.item5.title")}
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
                <p className="accordion-horizontal__content-item-subitem-text">
                  {t("qa.item5.text")}
                </p>
                <ul className="accordion-horizontal__content-list">
                  <li className="accordion-horizontal__content-item">
                    <h3 className="accordion-horizontal__content-item-title">
                      {t("qa.item5.title1")}
                    </h3>
                    <ol className="accordion-horizontal__content-item-sublist">
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text1")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text2")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text3")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text4")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text5")}
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li className="accordion-horizontal__content-item">
                    <h3 className="accordion-horizontal__content-item-title">
                      {t("qa.item5.title2")}
                    </h3>
                    <ul className="accordion-horizontal__content-item-sublist">
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text6")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text7")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text8")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text9")}
                        </p>
                      </li>{" "}
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text10")}
                        </p>
                      </li>{" "}
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text11")}
                        </p>
                      </li>
                    </ul>
                  </li>

                  <li className="accordion-horizontal__content-item">
                    <h3 className="accordion-horizontal__content-item-title">
                      {t("qa.item5.title3")}
                    </h3>
                    <ul className="accordion-horizontal__content-item-sublist">
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text12")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text13")}
                        </p>
                      </li>
                      <li>
                        <p className="accordion-horizontal__content-item-subitem-text">
                          {t("qa.item5.text14")}
                        </p>
                      </li>
                    </ul>
                  </li>                  
                </ul>

                <p className="accordion-horizontal__content-text">
                  {t("qa.item5.text15")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ItemFifth;
