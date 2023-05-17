import React from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { Button, Info } from "../../components/Button";
import Template from "../../templates";

const Login = (props) => {
  const { mudaSecao } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Template>
      <section>
        <Text>Welcome Back</Text>

        <Image src="image1.svg" alt="" />

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter you Email addreass"
            name="email"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="password"
          />

          <Button type="submit" title="Sing in" />
        </form>

        <Text>
          Dont have an account?{" "}
          <Info onClick={() => mudaSecao("addTodo")} title="Sing Up" />{" "}
        </Text>
      </section>
    </Template>
  );
};

export default Login;
