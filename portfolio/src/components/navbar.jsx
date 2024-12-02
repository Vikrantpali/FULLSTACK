import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.svg";
import ThemeContext from "../context/themeContext";
import Hamburger from "../Assets/hamburger.svg";
import Close from "../Assets/close.svg";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menu, setmenu] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <header className="flex z-[999] relative justify-center ">
      {/* sm-640px
      md-768px
      lg-1024px
      xl-1280px
      2xl-1440px */}
      <div
        className={`w-[75%] max-xl:w-[90%] flex rounded-[50px] bg-[#ffffff33] shadow-[0px_0px_20px_#00000033] backdrop-blur fixed top-[20px] w-full justify-between items-center px-[40px] pt-[10px] pb-[10px]`}
      >
        <Link onClick={handleClick} to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <img
          src={Hamburger}
          onClick={() => setmenu(menu === true ? false : true)}
          className="hidden max-sm:block"
          alt=""
        />
        <nav
          className={`absolute ${menu ? "translate-0" : "translate-x-full"} ${
            theme === "light" ? "bg-white text-black" : "bg-black text-white"
          } transition-transform hidden max-sm:flex duration-300 ease-in-out max-[500px]:w-full flex w-[50%] h-[100vh] shadow-[0px_0px_20px_#00000033] px-[20px] py-[40px] flex-col gap-[56px] top-[-20px] right-[-40px] `}
        >
          <img
            src={Close}
            onClick={() => setmenu(menu === true ? false : true)}
            className="w-[40px]"
            alt=""
          />
          <ul className="flex flex-col gap-[12px] ">
            <li>
              <Link onClick={handleClick} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/project"}>
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-[60px] cursor-pointer p-[4px] ${
              theme === "light"
                ? "border-[whitesmoke] bg-[#00000033]"
                : "border-[black] bg-[#ffffff66]"
            } border-[1px]  rounded-[35px] `}
          >
            <div
              className={`w-[20px] ${
                theme === "light"
                  ? "translate-0 bg-[whitesmoke]"
                  : "translate-x-[30px] bg-black"
              } h-[20px] transition-all duration-300  rounded-[50%] `}
            ></div>
          </div>
        </nav>
        <nav className="flex max-sm:hidden items-center gap-[52px]">
          <ul className="flex gap-[24px] ">
            <li>
              <Link onClick={handleClick} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/project"}>
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-[60px] cursor-pointer p-[4px] ${
              theme === "light"
                ? "border-[whitesmoke] bg-[#00000033]"
                : "border-[black]"
            } border-[1px]  rounded-[35px] `}
          >
            <div
              className={`w-[20px] ${
                theme === "light"
                  ? "translate-0 bg-[whitesmoke]"
                  : "translate-x-[30px] bg-black"
              } h-[20px] transition-all duration-300  rounded-[50%] `}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
