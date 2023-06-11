import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user";
// import { login } from "./auth";
import styled from "styled-components";

const Form = () => {
  const { updateUser } = useUserStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    updateUser(data);
    navigate("/addTodo");
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const credentials = {
  //       email,
  //       password,
  //     };

  //     const user = await login(credentials);
  //     console.log("Usuário logado:", user);
  //     // Realizar as ações necessárias após o login bem-sucedido
  //   } catch (error) {
  //     console.error("Falha ao fazer login:", error);
  //     // Lidar com a falha no login
  //   }
  // };

  return (
    <MyForm onSubmit={handleSubmit}>
      <Input
        placeholder="Enter you Email addreass"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        placeholder="Confirm Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button variant="info" title="Forgot Password" />

      <Button type="submit" title="Sing in" variant="primary" />
    </MyForm>
  );
};

export { Form };

const MyForm = styled.form`
  display: contents;
  flex-direction: column;
`;
