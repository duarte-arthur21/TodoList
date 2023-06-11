import React, { useEffect } from "react";
import styled from "styled-components";
import { useTasksStore } from "../../../stores/tasks";
import WebFont from "webfontloader";

const Item = (props) => {
  const { updateTask } = useTasksStore();

  useEffect(() => {
    console.log("props:", props);
  }, [props]);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:500"], // Substitua com as fontes desejadas
      },
    });
  }, []);

  const handleCheckboxChange = (event) => {
    updateTask(event);
  };

  return (
    <Label>
      <ChecboxInput
        type="checkbox"
        checked={props.task.completed}
        onChange={() => {
          handleCheckboxChange(props.task.name);
        }}
      />
      <span
        style={{
          background: props.task.completed ? "#55847af7" : "transparent",
        }}
      />

      {props.task.name}
    </Label>
  );
};

export { Item };

const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  gap: 15px;
  text-align: center;
  cursor: pointer;

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
