import React, { useState } from "react";
import styled from "styled-components";
import Singin from "../pages/singin";
import AddTodo from "../pages/addTodo";
import Dashboard from "../pages/dashboard";

function Template() {
  const [secaoAtual, setSecaoAtual] = useState("login");

  const render = () => {
    if (secaoAtual === "ingin") return <Singin mudaSecao={setSecaoAtual} />;

    if (secaoAtual === "addTodo") return <AddTodo mudaSecao={setSecaoAtual} />;

    if (secaoAtual === "dashboard")
      return <Dashboard mudaSecao={setSecaoAtual} />;
  };

  return <Wrapper>{render()}</Wrapper>;
}

export default Template;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  background-color: #d3d3d3;
  position: relative;
  justify-content: center;
`;
