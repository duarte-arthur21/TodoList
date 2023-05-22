import React from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useTasksStore } from "../../stores/tasks";

const Form = () => {
  const { addTasks } = useTasksStore;

  return (
    <form>
      <Input type="text" name="task1" />
      <Input type="text" name="task2" />
      <Input type="text" name="task3" />

      <Button type="submit" title="Add to list" />
    </form>
  );
};

export { Form };
