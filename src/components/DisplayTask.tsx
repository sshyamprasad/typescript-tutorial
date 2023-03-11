import React, {useState, useRef, useEffect} from 'react'
import { Todo } from './model/Todo'
type props = {
    element: Todo;
    handleEdit: any;
    handleDelete: any;
    handleIsDone: any;
}
const DisplayTask: React.FC<props> = ({ element, handleEdit, handleDelete, handleIsDone }: props) => {
    let [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<any>(element.todo);
    const inputRef = useRef<any>(null)
    const handleEditText = (event:any)=> {
        setEditText(event.target.value);
    }
    useEffect(()=>{inputRef.current?.focus()},[edit])
    return (
        <div>
            <li>{edit?<input ref={inputRef} type="text" value={editText} onChange={handleEditText}/>:element.isDone?<s>{element.todo}</s>:element.todo} 
                <button onClick={() => {setEdit(edit=!edit); handleEdit({...element,todo:editText})}}>{edit?"save":"edit"}</button>
                <button onClick={() => handleDelete(element?.id)}>delete</button>
                <button onClick={() => handleIsDone(element?.id)}>{element?.isDone ? "Not Done" : "Done"}</button>
            </li>
        </div>
    )
}

export default DisplayTask