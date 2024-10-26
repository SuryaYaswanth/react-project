import { useState } from "react";
import "/src/style.css";
function generateId(){
    return Math.floor(Math.random()*10);
}
const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [input, setInput] = useState(null);

    const handleClick = () =>{
        setTodo((todo) => todo.concat({
            text:input,
            id:generateId(),
        })
    );
    setInput("");
    };

    const removeTodo = (id) => {
        setTodo((todo) => todo.filter((t) => t.id !== id));
    }

  return (
    <div className="container">
        <input 
           type="text" 
           value={input} 
           onChange={(e) => setInput(e.target.value)}
           placeholder="new Todo"
            />
        <button onClick={() => handleClick()}>Add</button>
        <ul className="todos-list">
            {
                todo.map(({text,id})=>(
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>X</button>
                    
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
};

export default Todo
