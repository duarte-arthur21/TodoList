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
      <Text>Welcome {email}!</Text>
      <Image src="image3.svg" alt="" />
      <Text style={{ textAling: "left", marginLeft: "-30%" }}>Todo Tasks.</Text>
    </>
  );
};

export { Head };
