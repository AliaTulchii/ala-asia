import React from 'react'
import { NavLink } from 'react-router-dom';

interface SuppliesCardProps {
  text1: string;
  title: string;
  text2: string;
  btn: string;
  img: string;
  imgMob: string;
  alt?: string;
}

const SuppliesCard: React.FC<SuppliesCardProps> = ({text1, title, text2, btn, img, imgMob, alt}) => {
  return (
    <div className="supplies__card">
      <div className="supplies__card-content">
        <p className="supplies__card-text">
          {text1}
        </p>
        <h2 className="supplies__card-title">
          {title}
        </h2>
        <p className="supplies__card-subtext">
          {text2}
        </p>
        <NavLink to="/contact" className="supplies__card-link">
          {btn}
        </NavLink>
      </div>
      <picture>
        <source
          media="(max-width: 968px)"
          srcSet={`${imgMob} 1x, ${imgMob} 2x`}
          type="image/jpg"
        />
        <source srcSet={`${img} 1x, ${img} 2x`} type="image/jpg" />
        <img
          src={img}
          alt={alt}
          className="supplies__card-img"
        />
      </picture>
    </div>
  );
};

export default SuppliesCard
