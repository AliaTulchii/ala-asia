import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./mobile-menu-select.scss";

interface Option {
  path: string;
  text: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  onSelect: (path: string) => void;
  classText: string;
  classSelect: string;
}

const MobileMenuSelect = ({
  label,
  options,
  onSelect,
  classText,
  classSelect
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const location = useLocation(); // отримуємо поточний шлях

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (path: string, text: string) => {
    setSelected(text);
    onSelect(path);
    setIsOpen(false);
  };

  return (
    <div className={`mobile-select ${isOpen ? "open" : ""} ${classSelect}`}>
      <div className="mobile-select__label" onClick={toggleOpen}>
        <p className={classText}>{selected}</p>
        <svg
          className={`mobile-select__chevron ${isOpen ? "rotated" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="mobile-select__options">
          {options.map((option) => (
            <NavLink
              key={option.path}
              to={option.path}
              className={`mobile-select__option ${
                location.pathname === option.path ? "active" : ""
              }`}
              onClick={() => {
                handleSelect(option.path, option.text);
                window.scrollTo(0, 0);
              }}
            >
              {option.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenuSelect;
