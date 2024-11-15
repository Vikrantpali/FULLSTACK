import React from "react";
import { useEffect, useState } from "react";

function Effect(){
    const[count, setCount] = useState(0);
    const[display, setDisplay] = useState(true);
    useEffect(() =>{
        document.title = `you clicked ${count} times`

        return () => {
            console.log('clean up')
        }
    }, [count]); 
    return(
        <div className="" >
            {display === true ? <h1>Hi Every one</h1> : <h1>Welcome</h1>}
            <button onClick={() => setDisplay(!display)}>Click</button>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click count</button>
            </div>
        </div>
    );
}

export default Effect;