import React from "react";
import styled from "styled-components";
import { Image } from "../../components/Image";
import WebFont from "webfontloader";

const Head = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:500"],
      },
    });
  }, []);

  return (
    <div>
      <Text>Welcome Back!</Text>

      <Image src="image1.svg" alt="" />
    </div>
  );
};

export { Head };

export const Text = styled.p`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;
