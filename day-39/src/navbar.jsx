import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";  

function Box() {
  const boxRef = useRef(null);
  const [menu, setMenu] = useState(false);

  // const handleClick = () => {
  //   gsap.to(boxRef.current, { duration: 1, y: 0 });
  // };
  // const handleClickColse = () => {
  //   gsap.to(boxRef.current, { duration: 1, y: "-100%" });
  // };

  useEffect(() =>{
    if(menu === true) {
      gsap.to(boxRef.current, { duration: 1, opacity: 1 });
      gsap.to(boxRef.current, { duration: 0, display: 'block' });
    }else{
      gsap.to(boxRef.current, { duration: 1, opacity: 0 });
      gsap.to(boxRef.current, { duration: 0, display: 'none', delay: 1 });
    }
    console.log(menu)
  }, [menu]);
  return (  
    <>
      <div
        ref={boxRef}
        className="w-[100%] absolute z-[999] px-[80px] opacity-0 py-[121px] h-[100vh] bg-black"
      >
        <Link onClick={() => setMenu(false)} to={"/"}>
        <h1 className="text-white text-[52px]">Home</h1>
        </Link>
        <Link onClick={() => setMenu(false)} to={"/timeline"}>
        <h1 className="text-white text-[52px]">Timeline</h1>
        </Link>
        <Link onClick={() => setMenu(false)} to={"/stagger"}>
        <h1 className="text-white text-[52px]">Stagger</h1>
        </Link>
        <Link onClick={() => setMenu(false)} to={"/scroll-trigger"}>
        <h1 className="text-white text-[52px]">Scroll Trigger</h1>
        </Link>
        <button
          onClick={() => setMenu(false)}
          className="absolute top-[30px] right-[30px] text-white z-20"
        >
          Close
        </button>
      </div>
      <button
        onClick={() => setMenu(true)}
        className="absolute top-[30px] right-[30px]"
      >
        Open
      </button>
    </>
  );
}

export default Box;
