import { useState } from "react"
import "/src/style.css";
const Counter = () => {
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount((res) => res+1);
    }
    const decrement = () =>{
        setCount((res) =>res-1);
    }
  return (
    <div className="container">
        <h1>Counter</h1>
        <h1>{count}</h1>
        <div className="btns-container">
           <button className ="increment" onClick={increment}>+</button>
           <button className ="increment"onClick={decrement}>-</button>
        </div>
   </div>
  )
}

export default Counter;
