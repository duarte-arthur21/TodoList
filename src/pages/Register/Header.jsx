import React from "react";
import styled from "styled-components";
import { Image } from "../../components/Image";
import { Typography } from "../../components/Typography";

const Header = () => {
  return (
    <Wrapper>
      <Typography type="title">Crie uma conta</Typography>
      <Image src="image3.svg" alt="" />
    </Wrapper>
  );
};

export { Header };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`;
