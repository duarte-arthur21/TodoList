import React, {useState} from "react"
import { Text } from "../../components/Text";
import { Subtitle } from "../../components/Subtitle";
import { Image } from "../../components/Image";
import { Input } from "../../components/Input";
import { Button, Info } from "../../components/Button";
import Dashboard from "../dashboard";

const AddTodo = (props) => {
  const {mudaSecao} = props;
  const [tasks, setTasks] = useState([
    { name: "Comprar leite", completed: false },
    { name: "Pagar a conta de luz", completed: false },
    { name: "Ler um livro", completed: true },
  ]);

  function handleNewTaskSubmit(event) {
    event.preventDefault();
    const newTasks = { name: event.target.taskName.value, completed: false };
    setTasks([...tasks, newTasks]);

    console.log("Task Add:"+newTasks.name);

    <Dashboard tasks={tasks} />
  }

  return (
    <section>
      <Text>Welcome onBoard!</Text>
      <Image src="image2.svg" alt="" />
      <Subtitle>Add Waht your want to do later on.</Subtitle>

      <form onSubmit={handleNewTaskSubmit}>
            <Input type="text" name="taskName"/>
          
            <Button type="submit" title="Add to list" />
          </form>
      
      <Text>View you list? <Info  onClick= {() => mudaSecao('dashboard')} 
            title="List Tasks" /> </Text>

    </section>
  )
}

export default AddTodo

