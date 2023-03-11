interface props{
    todo: string;
    setTodo: any;
    handleAddTodo: any;
}
const InputField:React.FC<props> = ({todo, setTodo, handleAddTodo}:props) => {
    return(    <div>
        <span>
            <input type="text" value={todo} placeholder="Enter a task" onChange={(e)=>{setTodo(e.target.value)}}/>
            <button type="submit" onClick={handleAddTodo}>GO</button>
        </span>
    </div>)

}
export default InputField;