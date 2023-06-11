import React from "react";
import { Image } from "../../components/Image";
import styled from "styled-components";
import WebFont from "webfontloader";

const Head = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:500"], // Substitua com as fontes desejadas
      },
    });
  }, []);

  return (
    <>
      <Text>Welcome onBoard!</Text>
      <Image src="image2.svg" alt="" />
      <Subtitle>Add Waht your want to do later on.</Subtitle>
    </>
  );
};

export { Head };

const Text = styled.p`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;
const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  left: 65px;
  top: 380px;
  font-style: normal;
  font-size: 17px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: rgba(85, 132, 122, 0.97);
`;
