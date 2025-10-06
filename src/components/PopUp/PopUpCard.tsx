import "./pop-up.scss";
import { NavLink } from "react-router-dom";
import type { PopUpItem } from "./PopUp.Constants";

interface PopUpCardProps {
  item: PopUpItem;
  onMouseLeave: () => void;
}


  
const PopUpCard: React.FC<PopUpCardProps> = ({ item,  onMouseLeave }) => {
  return (
    <li key={item.key} className="pop-up__item">
      <img src={item.img} alt="services image" className="pop-up__img" />

      <div className="pop-up__content">
        <div className="pop-up__wrapper">
          <h2 className="pop-up__title">{item.key}</h2>
          <h2 className="pop-up__title">{item.title}</h2>
        </div>

        <NavLink
          to={item.path1}
          className={({ isActive }) =>
            `pop-up__nav-link ${isActive ? "active" : ""}`
          }
          onClick={() => {
            onMouseLeave();
            window.scrollTo(0, 0);
          }}
        >
          <p className="pop-up__text">{item.text1}</p>
        </NavLink>
        <NavLink
          to={item.path2}
          className={({ isActive }) =>
            `pop-up__nav-link ${isActive ? "active" : ""}`
          }
          onClick={() => {
            onMouseLeave();
            window.scrollTo(0, 0);
          }}
        >
          <p className="pop-up__text">{item.text2}</p>
        </NavLink>
        <NavLink
          to={item.path3}
          className={({ isActive }) =>
            `pop-up__nav-link ${isActive ? "active" : ""}`
          }
          onClick={() => {
            onMouseLeave();
            window.scrollTo(0, 0);
          }}
        >
          <p className="pop-up__text">{item.text3}</p>
        </NavLink>
        <NavLink
          to={item.path4}
          className={({ isActive }) =>
            `pop-up__nav-link ${isActive ? "active" : ""}`
          }
          onClick={() => {
            onMouseLeave();
            window.scrollTo(0, 0);
          }}
        >
          <p className="pop-up__text">{item.text4}</p>
        </NavLink>
      </div>
    </li>
  );
};

export default PopUpCard;
