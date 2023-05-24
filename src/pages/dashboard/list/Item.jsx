import React, { useState } from "react";
import styled from "styled-components";

const Item = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Label>
      <span />
      <ChecboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {props.children}
    </Label>
  );
};

export { Item };

const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  gap: 15px;
  text-align: center;
  cursor: pointer;

  input ~ .checkmark {
    background-color: green;
  }

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #000;
    margin: 1%;
  }
`;
const ChecboxInput = styled.input`
  background-color: #fff;
  display: none;

  .checkmark {
    background-color: green;
  }
`;
