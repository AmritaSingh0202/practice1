import React,{useState} from "react";

const Counter=()=>{
    const[count,setCount]=useState(20);
    
    console.log("Hello",count);
    return(
     <div>
        <p>Count Component-{count}</p>
        <h4>Number is {count%2==0?"Even":"Odd" }</h4>
        <button onClick={()=> setCount(count+1)}> Increment</button>
     </div>
    );
};
export default Counter;