import InputField from "./components/InputField"
import { Todo } from "./components/model/Todo"
import { useState, useEffect } from 'react';
import DisplayTasks from "./components/DisplayTasks";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [names, setNames] = useState<Todo[]>([]);
  
  const handleAddTodo = () => {
    let todoItem: Todo = {
      id: Date.now(),
      todo,
      isDone: false
    }
    setNames((prevNames) => [...prevNames, todoItem])
    setTodo("")
  }

  return (
    <div>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <DisplayTasks names={names} setNames={setNames} />

    </div>
  );
};

export default App;