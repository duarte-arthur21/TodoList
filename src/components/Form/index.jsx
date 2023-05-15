import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Input } from '../Input';

const Form = () => {

 return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Enter you Email addreass"/>
      <Input placeholder="Confirm Password"/>
    
      <input type="submit" value="Enviar" />
    </form>
  );
};

export { Form };

const MyInput = styled.input`
  position: relative;
  width: 385px;
  height: 50px;
  border: 1px solid #cacccf;
  border-radius: 100px;
  padding-left: 60px;
  margin-bottom: 20px;
`;
