import React from "react";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const Footer = () => {
  return (
    <Text>
      Dont have an account?
      <Button style={{ fontWeight: "bold" }} variant="info" title="Sing Up" />
    </Text>
  );
};

export { Footer };
