import React, { useEffect } from "react";
import { Item } from "./Item";
import { PlusButton } from "../../../components/Button";
import { useTasksStore } from "../../../stores/tasks";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const List = (props) => {
  const tasks = useTasksStore((state) => state.tasks);

  if (!Array.isArray(tasks)) {
    return <div>Erro: tasks não é um array.</div>;
  }

  useEffect(() => {
    console.log("props.task", props.tasks);
  }, [props]);

  return (
    <Wrapper>
      <Heard>
        <Label>Dairy Tasks.</Label>
        <PlusButton to="/addTodo" title="+" />
      </Heard>

      <Items>
        {tasks.map((task, index) => (
          <Item key={index} task={task} />
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
  height: 280px;
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
  gap: 25px;
  height: calc(80%);
  overflow-y: auto;
  padding-bottom: 20px;
`;
