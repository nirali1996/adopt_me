import { useState } from "react";

const Count = () => {
    const[count,setCount]=useState(0);
    const inc=()=>{
      setCount(count+1);
    }
    const dec=()=>{
      setCount(count-1);
    }
    return (
      <div>
        <button onClick={inc} >+</button>
        <button onClick={dec}>-</button>
        <p>{count}</p>
        <label>
        <button onClick={(e)  =>{e.preventDefault(); setCount(!count)}} >Submit</button>
        </label>
      </div>
    )
  }
 export default Count 