import React from "react";
import styled from "styled-components";
import { Head } from "./head";
import { Form } from "./form";
import { Footer } from "./footer";

const Singin = () => {
  return (
    <Wrapper>
      <Head />
      <Form />
      <Footer />
    </Wrapper>
  );
};

export default Singin;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  margin: -120px;
`;
