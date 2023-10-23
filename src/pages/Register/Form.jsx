import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useUserStore } from "../../stores/user";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const { updateUser } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      // confirmPassword: e.target.confirmPassword.value,
    };

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data), //Objeto que recebe email e senha
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        updateUser({
          ...data.users,
          acessToken: data.acessToken,
        });

        navigate("/dashboard");
      }
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          name="email"
          required
        />
        <Input
          placeholder="Crie uma Senha"
          name="password"
          type="password"
          required
        />
        <Input
          placeholder="Confirme sua senha"
          name="confirmPassword"
          type="password"
          required
        />

        <Button type="submit" title="Registrar"></Button>
      </InputGroup>
    </StyledForm>
  );
};

export { Form };

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
`;
