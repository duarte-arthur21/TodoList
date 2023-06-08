import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useTasksStore } from "../../stores/tasks";

const Form = () => {
  const { addTasks } = useTasksStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const task1 = {
      name: event.target.task1.value,
      completed: false,
    };

    const task2 = {
      name: event.target.task2.value,
      completed: false,
    };

    const task3 = {
      name: event.target.task3.value,
      completed: false,
    };

    addTasks([task1, task2, task3]);

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
