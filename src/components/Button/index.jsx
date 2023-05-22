import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = (props) => {
  return <MyButton {...props}>{props.title}</MyButton>;
};

export { Button };

const MyButton = styled.button`
  font-size: 17px;
  line-height: 35px;
  width: 220px;
  justify-content: center;
  text-align: center;
  border-radius: 0%;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: rgba(87, 135, 125, 0.97);
          color: #fff;
        `;
      case "info":
        return `
          background-color: transparent;
          color: rgba(85, 132, 122, 0.97);
          width: 102px;

        `;
      default:
        return `
          background-color: rgba(87, 135, 125, 0.97);
          color: #fff;
        `;
    }
  }}
`;
