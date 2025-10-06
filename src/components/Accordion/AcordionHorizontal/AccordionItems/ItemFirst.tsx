import { useTranslation } from "react-i18next";
import PlusIcon from "../../../../icons/PlusIcon";
import "../accordion-horizontal.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useAccordionHorizontalItems } from "./AccordionHorizontal.Constant";

const ItemFirst = () => {
  const { t } = useTranslation("qa");
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  //  const qaItem = useAccordionHorizontalItems()

  return (
    <div className="accordion-horizontal">
      <div className="accordion-horizontal__wrapper">
        <div className={`accordion-horizontal__item ${isOpen ? "active" : ""}`}>
          <div className="accordion-horizontal__header container">
            <div className="accordion-horizontal__header-content">
              <p className="accordion-horizontal__header-text">
                {t("qa.item1.id")}
              </p>
              <h3 className="accordion-horizontal__header-title">
                {t("qa.item1.title")}
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
                <div className="accordion-horizontal__content-wrapper">
                  <p className="accordion-horizontal__content-text">
                    {t("qa.item1.text")}
                  </p>
                  <p className="accordion-horizontal__content-text">
                    <span className="accordion-horizontal__content-text--bold">
                      {t("qa.item1.title1")}
                    </span>
                    {t("qa.item1.text1")}
                  </p>
                  <p className="accordion-horizontal__content-text">
                    <span className="accordion-horizontal__content-text--bold">
                      {t("qa.item1.title2")}
                    </span>
                    {t("qa.item1.text2")}
                  </p>
                  <p className="accordion-horizontal__content-text">
                    <span className="accordion-horizontal__content-text--bold">
                      {t("qa.item1.title3")}
                    </span>
                    {t("qa.item1.text3")}
                  </p>
                  <p className="accordion-horizontal__content-text accordion-horizontal__content-text--last">
                    {t("qa.item1.text4")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default ItemFirst;
