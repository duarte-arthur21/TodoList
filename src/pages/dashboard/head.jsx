import React from "react";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
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
