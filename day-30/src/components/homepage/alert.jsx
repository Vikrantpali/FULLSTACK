import React from "react";

function Alert(props){
    function handleClick(){
        alert(props.message)
    }
    return(
        <>
        <button onClick={handleClick}>Click Here</button>
        </>
    )
}

export default Alert;