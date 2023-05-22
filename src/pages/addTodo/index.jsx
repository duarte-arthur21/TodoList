import React from "react";
import { Head } from "./head";
import { Form } from "./Form";
import styled from "styled-components";

const AddTodo = () => {
  return (
    <Wrapper>
      <Head />
      <Form />
    </Wrapper>
  );
};

export default AddTodo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  margin: -120px;
`;
