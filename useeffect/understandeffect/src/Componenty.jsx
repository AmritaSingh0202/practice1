import React,{useState,useEffect} from "react";

const MyComponent=()=>{
    const[count,setCount]=useState(1);
    const[count1,setCount1]=useState(1);

    useEffect(()=>{
        console.log("Mounting of Component"); ///here Api calling is done


        return function(){                 //here cleaning up data is done:
            console.log("Unmounting...");
        };
    },[]);  //Only run ones at initial time:mounting


    useEffect(()=>{
        console.log("Count got updated ",count);

        return function(){
            console.log("returning count",count);
        }
    },[count]); ///everytime when any update done then in=b/n;

    return(
        <div>
            <p> Count is {count}</p>
            <p> Count 2 is {count1}</p>
            <button onClick={()=> setCount(count +1)}>Update 0</button>
            <button onClick={()=> setCount1(count1 +1)}>Update 1</button>
        </div>

    )
}
export default MyComponent;