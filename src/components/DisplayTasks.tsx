import React from 'react'
import { Todo } from './model/Todo';
import DisplayTask from './DisplayTask';
type props = {
  names: Todo[];
  setNames: any;
}
const DisplayTasks: React.FC<props> = ({ names, setNames }: props) => {
  const handleDelete = (id: number) => {
    setNames(names.filter((todo) => todo.id !== id));
  }
  const handleIsDone = (id: number) => {
    let updateNames: Todo[] = names.map((item): Todo => {
      if (item.id === id) {
        item.isDone = item.isDone ? false : true;
      }
      return item
    });
    setNames(updateNames)
  }
  const handleEdit = (task: Todo) => {
    let updateNames: Todo[] = names.map((item): Todo => {
      if (item.id === task.id) {
        item.todo = task.todo;
      }
      return item
    });
    setNames(updateNames)
  }
  return (
    <div>      {names.map((element, index) => {
      return (
        <ul key={index}>
          <DisplayTask element={element} handleEdit={handleEdit} handleIsDone={handleIsDone} handleDelete={handleDelete}/>
        </ul>
      );
    })}</div>
  )
}

export default DisplayTasks