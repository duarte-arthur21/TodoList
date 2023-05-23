import React, { useState } from "react";
import styled from "styled-components";

const Item = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Label>
      <ChecboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {props.children}
      <span></span>
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
  cursor: pointer;

  input ~ .checkmark {
    background-color: green;
  }

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #000;
  }
`;
const ChecboxInput = styled.input`
  background-color: #ff0000; /* cor desejada */

  .checkmark {
    background-color: green;
  }
`;
