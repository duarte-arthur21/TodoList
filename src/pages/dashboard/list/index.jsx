import React, { useState } from "react";
import { Text } from "../../../components/Text";
import { Item } from "./Item";
import styled from "styled-components";

const List = () => {
  const [tasks, setTasks] = useState([
    { name: "Tarefa 1", completed: false },
    { name: "Tarefa 2", completed: false },
    { name: "Tarefa 3", completed: false },
  ]);

  const handleToggleCompleted = (taskIndex) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        completed: !updatedTasks[taskIndex].completed,
      };
      return updatedTasks;
    });
  };

  return (
    <Wrapper>
      <Text style={{ textAling: "left" }}>Todo Tasks.</Text>

      <Heard>
        <Label>Dairy Tasks</Label>
      </Heard>

      <Items>
        {tasks.map((task, index) => (
          <Item
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
            onClick={() => handleToggleCompleted(index)}
          >
            {task.name}
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
};

export { List };

const Label = styled.p`
  position: relative;
  width: 82px;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.47);
`;
const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 339px;
  height: 240px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-inline: 31px;
  padding-block: 18px;
`;
const Heard = styled.div`
  font-weight: 500;
  font-size: 13px;
  font-family: "popins", sans-serif;
  color: #000;
  height: 34px;
`;

const Items = styled.div``;
