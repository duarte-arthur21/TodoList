import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const {type, name, placeholder, value, onChange} = props;

 return (
    <div>
      <MyInput
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
      />


    </div>
  );
};

export { Input };

const MyInput = styled.input`
  position: relative;
  width: 385px;
  height: 50px;
  border: 1px solid #cacccf;
  border-radius: 100px;
  padding-left: 60px;
  margin-bottom: 20px;
`;
