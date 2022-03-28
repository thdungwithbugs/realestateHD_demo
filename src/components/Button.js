import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s linear 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.7) 0px 0px 10px;
  }
`;

export default Button;
