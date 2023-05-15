import React from "react";
import AddTodo from "../addTodo";

const Dashboard = (props) => {
    const {tasks} = props;
    function handleTaskCompletion(index) {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
      }

      return (
        <section>
            <ul>
                {tasks.map((task, index) => (
                <AddTodo
                    key={index}
                    name={task.name}
                    completed={task.completed}
                    onCompletion={() => handleTaskCompletion(index)}
                />
                ))}
            </ul>
        </section>
      );
}

export default Dashboard;