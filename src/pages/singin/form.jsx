import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import styled from "styled-components";
import axios from "axios";
import AddTodo from "../addTodo";

const Form = () => {
  const { updateUser } = useUserStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const email = document.getElementById("username").value;
  // const password = document.getElementById("password").value;

  // const axios = require("axios");

  // async function login() {
  //   try {
  //     const data = {
  //       email: email,
  //       password: password,
  //     };

  //     const response = await axios.post("http://localhost:3000/login", data);
  //     const token = response.data.token;

  //     // Salve o token de autenticação em algum lugar (por exemplo, em localStorage) para uso posterior

  //     // Chame a função para adicionar tarefas após a autenticação
  //     AddTodo(token);
  //   } catch (error) {
  //     console.error("Ocorreu um erro:", error);
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    updateUser(data);
    // login();
    navigate("/addTodo");
  };

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
