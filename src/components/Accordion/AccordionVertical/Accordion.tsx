import { useState } from "react";
import { useAccordionItems } from "./Accordion.Constants";
import { NavLink } from "react-router-dom";
import './accordion.scss';

const Accordion: React.FC = () => {
  const items = useAccordionItems();
  const [activeId, setActiveId] = useState<number>(1);
  
  
  return (
    <div className="accordion">
      {items.map((item) => (
        <div
          key={item.key}
          className={`accordion__item ${activeId === item.key ? "active" : ""}`}
          onClick={() => setActiveId(item.key)}
        >
          <div className="accordion__header">
            <p className="accordion__key">{item.number}</p>
            <h2 className="accordion__title">{item.title}</h2>
          </div>

          <div
            className={`accordion__content ${
              activeId === item.key ? "open" : ""
            }`}
          >
            <h2 className="accordion__content-title">{item.title}</h2>
            <p className="accordion__text">{item.text1}</p>
            <h3 className="accordion__subtitle">{item.subtitle}</h3>
            <p className="accordion__text">{item.text2}</p>
            <p className="accordion__text accordion__text-last">{item.text3}</p>
            <NavLink
              to={item.path}
              className="accordion__btn"
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.btn}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
