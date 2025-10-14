import { useState } from "react";
import { useAccordionItems } from "./Accordion.Constants";
import { NavLink } from "react-router-dom";
import "./accordion-mobile.scss";

const AccordionMobile: React.FC = () => {
  const items = useAccordionItems();

  // 🔹 Перший елемент активний одразу
  const [activeId, setActiveId] = useState<number | null>(items[0].key);


  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="accordion-mobile">
      {items.map((item) => (
        <div
          key={item.key}
          className={`accordion-mobile__item ${
            activeId === item.key ? "active" : ""
          }`}
        >
          <div
            className="accordion-mobile__header"
            onClick={() => toggleAccordion(item.key)}
          >
            <p className="accordion-mobile__number">{item.number}</p>
            <h3 className="accordion-mobile__title">{item.title}</h3>
          </div>

          <div
            className="accordion-mobile__content"
            style={{
              maxHeight: activeId === item.key ? "700px" : "0",
            }}
          >
            <h2 className="accordion-mobile__content-title">{item.title}</h2>
            <p className="accordion-mobile__text">{item.text1}</p>
            <h3 className="accordion-mobile__subtitle">{item.subtitle}</h3>
            <p className="accordion-mobile__text">{item.text2}</p>
            <p className="accordion-mobile__text accordion-mobile__text-last">{item.text3}</p>
            <NavLink to={item.path} className="accordion-mobile__btn">
              {item.btn}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMobile;
