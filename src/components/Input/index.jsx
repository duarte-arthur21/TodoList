import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <MyInput {...props} />;
};

export { Input };

const MyInput = styled.input`
  position: relative;
  display: flex;
  width: 385px;
  height: 50px;
  border: 1px solid #cacccf;
  border-radius: 10px;
  padding-left: 60px;
  margin-bottom: 20px;
`;
