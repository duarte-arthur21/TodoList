import React, { useEffect } from "react";
import { Item } from "./Item";
import { PlusButton } from "../../../components/Button";
import { useTasksStore } from "../../../stores/tasks";
import styled from "styled-components";

const List = (props) => {
  const tasks = useTasksStore((state) => state.tasks);

  if (!Array.isArray(tasks)) {
    return <div>Erro: tasks não é um array.</div>;
  }

  useEffect(() => {
    console.log("props.task", props.tasks);
  }, [props]);

  return (
    <Container>
      <Heard>
        <Label>Dairy Tasks.</Label>
        <PlusButton to="/addTodo" title="+" />
      </Heard>

      <Items>
        {tasks.map((task, index) => (
          <Item key={index} task={task} />
        ))}
      </Items>
    </Container>
  );
};

export { List };

const Label = styled.p`
  font-family: "Poppins", sans-serif;
  position: relative;
  width: 100px;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.47);
`;
const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 339px;
  height: 280px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-inline: 31px;
  padding-block: 20px;
  margin-bottom: 10%;
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
  gap: 20px;
  height: calc(70%);
  overflow-y: auto;
  padding-bottom: 20px;

  /* Estilização da barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(215, 215, 215, 1);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
