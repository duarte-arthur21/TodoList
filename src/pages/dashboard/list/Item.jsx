import React, { useEffect } from "react";
import styled from "styled-components";
import { useTasksStore } from "../../../stores/tasks";

const Item = (props) => {
  const { updateTask } = useTasksStore();

  useEffect(() => {
    console.log("props:", props);
  }, [props]);

  return (
    <Label>
      <ChecboxInput
        type="checkbox"
        checked={true}
        onChange={(e) => {
          updateTask(props.task.name);
        }}
      />
      <span />

      {props.task.name}
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

  input [type="checkbox"]:checked + span {
    background-color: #55847af7;
  }

  span {
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 2px solid #000;
  }
`;
const ChecboxInput = styled.input`
  display: none;
`;
