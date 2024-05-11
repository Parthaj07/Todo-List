import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  isChecked?: boolean;
  onClick?: () => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  onClick,
  label,
}) => {
  const CheckboxContainer = styled.label`
    display: flex;
    cursor: pointer;
    margin-right: 10px;
    input[type="checkbox"] {
      hidden; 
    }

    .checkbox {
      
      width: 18px;
      height: 18px;
      border-radius:50%; 
      border: 1px solid #ccc;
      background-color: ${isChecked ? "#4caf50" : "transparent"};
      transition: background-color 0.2s ease-in-out; 
    }
  `;

  return (
    <CheckboxContainer onClick={onClick}>
      <input type="checkbox" checked={isChecked} onChange={onClick} hidden />
      <span className="checkbox"></span>
      {label && <span>{label}</span>}
    </CheckboxContainer>
  );
};

export default Checkbox;
