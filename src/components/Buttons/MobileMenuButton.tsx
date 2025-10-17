import { useState } from "react";
import "./buttons.scss";

const MobileMenuButton = ({
  onClick,
  styles,
  isLightPage,
}: {
  onClick?: () => void;
  styles?: string;
  isLightPage?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  return (
    <button
      className={`menu-button ${styles} ${
        isLightPage ? "menu-button--policy" : ""
      }`}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <div className="menu-button__lines">
        <span className="menu-button__bar"></span>
        <span className="menu-button__bar"></span>
        <span className="menu-button__bar"></span>
        <span className="menu-button__bar"></span>
      </div>
    </button>
  );
};

export default MobileMenuButton;
