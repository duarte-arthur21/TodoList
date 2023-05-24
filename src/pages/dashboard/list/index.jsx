import React, { useState } from "react";
import { Text } from "../../../components/Text";
import { Item } from "./Item";
import { PlusButton } from "../../../components/Button";
import { useTasksStore } from "../../../stores/tasks";
import styled from "styled-components";

const List = () => {
  const { tasks } = useTasksStore();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCompleted = (taskIndex) => {
    setIsChecked((prevTasks) => {
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
      <Heard>
        <Label>Dairy Tasks.</Label>
        <PlusButton to="/addTodo" title="+" />
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
  width: 100px;
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: row;
  font-weight: 500;
  font-family: "popins", sans-serif;
  color: #000;
  height: 34px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: calc(80%);
  overflow-y: auto;
  padding-bottom: 20px;
`;
