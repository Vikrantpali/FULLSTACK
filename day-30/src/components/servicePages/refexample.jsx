import React, { useEffect, useRef, useState } from "react";

function Refexample() {
  // const renderCount = useRef(0);
  // const [dummyState,setDummyState] = useState(0);
  const inputRef = useRef(null);

  // useEffect(() => {
  //     renderCount.current += 1;
  // })

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Form Submitted with input: ${inputRef.current.value}`)
  }

  return (
    <div>
      {/* <p>Component  has rendered {renderCount.current} times</p>
            <button onClick={() => setDummyState(dummyState + 1)}>Re-render</button> */}
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          Name:
          <input
            type="text"
            name=""
            id=""
            ref={inputRef}
            className="border-[1px] block mt-12px rounded-[7px] h-[32px] pl-[16.51px] border-black w-[300px] "
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Refexample;
