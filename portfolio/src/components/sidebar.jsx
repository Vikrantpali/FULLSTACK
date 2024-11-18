import React from "react";
import Github from "../Assets/github.png";
import Linkedin from "../Assets/linkedin.png";
import Resume from "../Assets/Resume-icon.png";
import Arrow from "../Assets/right-icon.svg";
import { useEffect, useRef, useState } from "react";

function Sidebar() {
  const [visibility, setVisibility] = useState(false);
  const div = useRef(null);
  const view = () => {
    setVisibility(!visibility);
  };

  useEffect(() =>{
    if(visibility === true){
      // for(let i=0; i<=100; i++)
      div.current.style.left = "0px"
    }else{
      div.current.style.left = "-100px"
    }
  }, [visibility])
  return (
    <aside className="fixed bottom-[200px]">
      <ul className="flex flex-col items-center gap-[12px]">
        <li
          onClick={view}
          className=" w-[50px] h-[50px] bg-[#f0f0f0] flex items-center justify-center rounded-[7px]"
        >
            <img className="h-[30px] w-[30px]" src={Arrow} alt="" />
        </li>
        <div ref={div} className="flex relative flex-col bg-white p-[8px] rounded-[13px] gap-[16px]">
          <li>
            <a href="">
              <img
                className="h-[40px] w-[40px] rounded-[50%]"
                src={Github}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vikrant-pali-1b935a328/">
              <img
                className="h-[40px] w-[40px] rounded-[50%]"
                src={Linkedin}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="h-[35px] w-[35px] rounded-[50%]"
                src={Resume}
                alt=""
              />
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
