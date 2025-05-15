import React, { useState, useId } from "react";
import "./checkbox.scss";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const id = useId();

  const handleChange = () => {
    if (disabled) return;

    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox__input-wrapper">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="checkbox__input"
        />
        <span
          className={`checkbox__icon-wrapper ${isChecked && "checkbox__icon-wrapper_checked"} ${disabled && "checkbox__icon-wrapper_disabled"}`}
          onClick={handleChange}
        >
          {isChecked && (
            <svg
              className="checkbox__checked-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </div>
      <label
        htmlFor={id}
        className={`checkbox__label ${disabled && "checkbox__label_disabled"}`}
      >
        {label}
      </label>
    </div>
  );
};
