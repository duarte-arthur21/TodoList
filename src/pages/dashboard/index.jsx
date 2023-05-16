import React from "react";
import { TodoList } from "../../components/TodoList";
import { Image } from "../../components/Image";

const Dashboard = (props) => {
  const { mudaSecao } = props;

  return (
    <section>
      <Image src="image3.svg" alt="" />

      <TodoList />
    </section>
  );
};

export default Dashboard;
