import React, { useState } from "react";
import { Text } from "../../components/Text";
import styled from "styled-components";

const Form = () => {
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
    <div>
      <Text style={{ textAling: "left" }}>Todo Tasks.</Text>
      <TodoList>
        <Label>Dairy Tasks</Label>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => handleToggleCompleted(index)}
          >
            {task.name}
          </li>
        ))}
      </TodoList>
    </div>
  );
};

export { Form };

const TodoList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  width: 500px;
  height: 240px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const Label = styled.p`
  position: relative;
  width: 82px;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.47);
`;
