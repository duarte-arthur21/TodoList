import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useTasksStore } from "../../stores/tasks";

const Form = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const { tasks, addTasks } = useTasksStore;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      event.target.task1.value,
      event.target.task2.value,
      event.target.task3.value,
    };

    const filteredTasks = data.filter((task) => task !== "")
    addTasks(filteredTasks);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="task1" />
      <Input type="text" name="task2" />
      <Input type="text" name="task3" />

      <Button type="submit" title="Add to list" />
    </form>
  );
};

export { Form };
