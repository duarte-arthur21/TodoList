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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(237, 237, 237, 1);
  justify-content: center;
  align-items: center;
`;
