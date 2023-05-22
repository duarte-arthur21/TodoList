import React from "react";
import { Text } from "../../components/Text";
import { Subtitle } from "../../components/Subtitle";
import { Image } from "../../components/Image";

const Head = () => {
  return (
    <>
      <Text>Welcome onBoard!</Text>
      <Image src="image2.svg" alt="" />
      <Subtitle>Add Waht your want to do later on.</Subtitle>
    </>
  );
};

export { Head };
