import React from "react";
import styled from "styled-components";

const Typography = (props) => {
  const { type } = props;

  const getFormatedText = () => {
    switch (type) {
      case "title":
        return <Title>{props.children}</Title>;

      case "secondary":
        return <Secondary>{props.children}</Secondary>;

      default:
        return <p>{props.children}</p>;
    }
  };

  return getFormatedText();
};

export { Typography };

const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;

const Secondary = styled.p`
  font-weight: 500;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  color: #55847af7;
  height: 74px;
  margin-top: 18px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
