import { NavLink } from "react-router-dom";

interface DeliveryCardProps{
    title: string;
    text: string;
    btn: string;
    img: string;
    imgStyle: string;
    cardStyle: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  title,
  text,
  btn,
    img,
    cardStyle,
  imgStyle
}) => {
  return (
    <div className={`delivery-card__item ${cardStyle}`}>
          <img src={img} alt={`image of ${title}`} className={`delivery-card__img ${imgStyle}`} />
          <div className="delivery-card__box">
              <h3 className="delivery-card__title">{title}</h3>
          <NavLink to="/services" className="delivery-card__link">{btn}</NavLink>
          </div>
          
          <p className="delivery-card__text">{text}</p>
    </div>
  );
};

export default DeliveryCard
