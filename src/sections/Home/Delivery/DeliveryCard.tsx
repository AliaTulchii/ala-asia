import { useState } from "react";
import { NavLink } from "react-router-dom";

interface DeliveryCardProps{
    title: string;
    text: string;
    btn: string;
    img: string;
    imgStyle: string;
  cardStyle: string;
  link: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  title,
  text,
  btn,
  img,
    link,
    cardStyle,
  imgStyle
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={`delivery-card__item ${cardStyle}`}>
      <NavLink
        className="delivery-card__link"
        to={link}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={img}
          alt={`image of ${title}`}
          className={`delivery-card__img ${imgStyle}`}
        />
      </NavLink>
      <div className="delivery-card__box">
        <h3 className="delivery-card__title">{title}</h3>
        <NavLink
          to={link}
          className="delivery-card__link-mobile"
          onClick={() => window.scrollTo(0, 0)}
        >
          {btn}
        </NavLink>
      </div>

      <p className="delivery-card__text">{text}</p>
      {isHovered && (
        <div
          className="delivery-card__cursor-text"
          style={{
            top: cursorPos.y + 10,
            left: cursorPos.x + 10,
          }}
        >
          {btn}
        </div>
      )}
    </div>
  );
};

export default DeliveryCard
