import { useState } from "react";
import { useField } from "formik";
import './form.scss'
import  ArrowUp from "../../icons/ArrowUp";
import ArrowDown from "../../icons/ArrowDown";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  options: Option[];
  placeholder?: string;
  className?: string;
  category?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  options,
  placeholder ,
  className = "",
  category
}) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    helpers.setValue(value);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${className}`}>
      <div  className="form__label">
        <p className="form__number">04</p>
        <p className="form__text">{category}</p>
      </div>
      <div
        className={`custom-select__control ${
          meta.touched && meta.error ? "error-border" : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {field.value
          ? options.find((opt) => opt.value === field.value)?.label
          : placeholder}
        <span className="custom-select__arrow">{isOpen ? <ArrowUp/> : <ArrowDown/>}</span>
      </div>

      {isOpen && (
        <ul className="custom-select__menu">
          {options.map((option) => (
            <li
              key={option.value}
              className={`custom-select__option ${
                field.value === option.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {meta.touched && meta.error && (
        <div className="error">
          <span className="error__icon">&#9432;</span> {meta.error}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
