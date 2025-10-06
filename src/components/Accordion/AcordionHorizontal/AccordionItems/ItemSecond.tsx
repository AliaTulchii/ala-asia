import { useTranslation } from "react-i18next";
import PlusIcon from "../../../../icons/PlusIcon";
import "../accordion-horizontal.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useAccordionHorizontalItems } from "./AccordionHorizontal.Constant";

const ItemSecond = () => {
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
                {t("qa.item2.id")}
              </p>
              <h3 className="accordion-horizontal__header-title">
                {t("qa.item2.title")}
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
                    {t("qa.item2.text")}
                  </p>
                  <ul className="accordion-horizontal__content-list ">
                    <li className="accordion-horizontal__content-item">
                      <h3 className="accordion-horizontal__content-item-title">
                        {t("qa.item2.title1")}
                      </h3>
                      <ul className="accordion-horizontal__content-item-sublist">
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text1")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text2")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text3")}
                          </p>
                        </li>
                      </ul>
                    </li>

                    <li className="accordion-horizontal__content-item">
                      <h3 className="accordion-horizontal__content-item-title">
                        {t("qa.item2.title2")}
                      </h3>
                      <ul className="accordion-horizontal__content-item-sublist">
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text4")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text5")}
                          </p>
                        </li>
                      </ul>
                    </li>

                    <li className="accordion-horizontal__content-item">
                      <h3 className="accordion-horizontal__content-item-title">
                        {t("qa.item2.title3")}
                      </h3>
                      <ul className="accordion-horizontal__content-item-sublist">
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text6")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text7")}
                          </p>
                        </li>
                      </ul>
                    </li>

                    <li className="accordion-horizontal__content-item">
                      <h3 className="accordion-horizontal__content-item-title">
                        {t("qa.item2.title4")}
                      </h3>
                      <ul className="accordion-horizontal__content-item-sublist">
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text8")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text9")}
                          </p>
                        </li>
                      </ul>
                    </li>

                    <li className="accordion-horizontal__content-item">
                      <h3 className="accordion-horizontal__content-item-title">
                        {t("qa.item2.title5")}
                      </h3>
                      <ul className="accordion-horizontal__content-item-sublist">
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text10")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text11")}
                          </p>
                        </li>
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text12")}
                          </p>
                        </li>
                      </ul>
                    </li>

                    <li className="accordion-horizontal__content-item">
                      <h3 className="accordion-horizontal__content-item-title">
                        {t("qa.item2.title6")}
                      </h3>
                      <ul className="accordion-horizontal__content-item-sublist">
                        <li>
                          <p className="accordion-horizontal__content-item-subitem-text">
                            {t("qa.item2.text13")}
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <p className="accordion-horizontal__content-text">
                    {t("qa.item2.text4")}
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

export default ItemSecond;
