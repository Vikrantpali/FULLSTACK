import React from "react";
import Github from "../Assets/github.png";
import Linkedin from "../Assets/linkedin.png";
import Resume from "../Assets/Resume-icon.png";
import Arrow from "../Assets/right-icon.svg";
import { useState } from "react";

function Sidebar() {
  const [visibility, setVisibility] = useState(false);
  const view = () => {
    setVisibility(!visibility);
  };
  return (
    <aside className="fixed bottom-[150px]">
      <ul className="flex flex-col items-center gap-[12px]">
        <li
          onClick={view}
          className=" w-[50px] h-[50px] bg-[#f0f0f0] flex items-center justify-center rounded-[7px]"
        >
            <img className={`${visibility ? 'rotate-[180deg]' : 'rotate-[0deg]'}`} width={30} height={30} src={Arrow} alt="" />
        </li>
        <div className=
        {`flex relative ${visibility ? 'translate-0' : '-translate-x-[60px]'} transition-transform duration-300 ease-in-out flex-col bg-white p-[8px] rounded-[13px] gap-[16px]`}
        >
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
