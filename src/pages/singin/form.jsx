import React from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import styled from "styled-components";

const Form = () => {
  const { updateUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    updateUser(data);
    navigate("/addTodo");
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <Input
        placeholder="Enter you Email addreass"
        type="email"
        name="email"
        required
      />

      <Input
        placeholder="Confirm Password"
        type="password"
        name="password"
        required
      />

      <Button type="submit" title="Sing in" variant="primary" />
    </MyForm>
  );
};

export { Form };

const MyForm = styled.form`
  display: contents;
  flex-direction: column;
`;
