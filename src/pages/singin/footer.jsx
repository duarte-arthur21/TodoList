import React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text style={{ fontWeight: "normal" }}>
        Dont have an account?
        <Button
          style={{ fontWeight: "bold", marginLeft: "-40px" }}
          variant="info"
          title="Sing Up"
        />
      </Text>
    </Container>
  );
};

export { Footer };

const Container = styled.div`
  display: flex;
`;
export const Text = styled.p`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;
