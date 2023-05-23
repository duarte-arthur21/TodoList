import React from "react";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { useUserStore } from "../../stores/user";

const Head = () => {
  const {
    user: { email },
  } = useUserStore();

  return (
    <>
      <Text>Welcome email do usuário {email} </Text>
      <Image src="image3.svg" alt="" />
    </>
  );
};

export { Head };
