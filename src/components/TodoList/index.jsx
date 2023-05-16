import React from "react";

const TodoList = (props) => {
  return (
    <section>
      <div className="">{props.children}</div>
    </section>
  );
};

export { TodoList };
