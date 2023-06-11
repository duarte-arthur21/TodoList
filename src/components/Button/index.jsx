import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = (props) => {
  return <MyButton {...props}>{props.title}</MyButton>;
};

const PlusButton = (props) => {
  return <Plus {...props}>{props.title}</Plus>;
};

export { Button, PlusButton };

const MyButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  line-height: 35px;
  width: 230px;
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
          width: 190px;
          outline: none;
          margin: 20px
        `;
      default:
        return `
          background-color: rgba(87, 135, 125, 0.97);
          color: #fff;
        `;
    }
  }}
`;

const Plus = styled(Link)`
  background-color: #000;
  width: 31px;
  height: 31px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 30px;

  &:hover {
    opacity: 0.7;
  }
`;
