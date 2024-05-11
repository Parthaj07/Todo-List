import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: "big" | "small";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "big",
  children,
  onClick,
}) => {
  const ButtonContainer = styled.button`
    padding: ${variant === "big" ? "12px 28px" : "5px 12px"};
    font-size: ${variant === "big" ? "16px" : "12px"};
    border: none;
    border-radius: 9px;
    cursor: pointer;
    background-color: #4eb570;
    color: white;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #3e8e41;
    }
  `;

  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
