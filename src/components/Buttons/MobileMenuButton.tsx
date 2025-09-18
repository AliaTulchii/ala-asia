import { useState } from "react";
import "./buttons.scss";

const MobileMenuButton = ({
  onClick,
  styles,
  isPolicyPage,
}: {
  onClick?: () => void;
  styles?: string;
  isPolicyPage?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  return (
    <button
      className={`menu-button ${styles} ${
        isPolicyPage ? "menu-button--policy" : ""
      }`}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <div className="menu-button__box  menu-button__box-left" />
      <div className="menu-button__lines">
        <span className="menu-button__bar"></span>
        <span className="menu-button__bar"></span>
        <span className="menu-button__bar"></span>
        <span className="menu-button__bar"></span>
      </div>
      <div className="menu-button__box  menu-button__box-right" />
    </button>
  );
};

export default MobileMenuButton;
