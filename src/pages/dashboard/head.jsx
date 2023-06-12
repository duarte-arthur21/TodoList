import React from "react";
import { Image } from "../../components/Image";
import { useUserStore } from "../../stores/user";
import styled from "styled-components";

const Head = () => {
  const {
    user: { email },
  } = useUserStore();

  return (
    <>
      <Icon src="user-icon.svg" />
      <Text>Welcome {email}!</Text>
      <Image src="image3.svg" alt="" />
      <Text style={{ marginLeft: "-20rem" }}>Todo Tasks.</Text>
    </>
  );
};

export { Head };

const Icon = styled.img`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;
