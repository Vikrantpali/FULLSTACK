import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.svg"

function Navbar() {
    return(
        <header className="flex z-[999] relative justify-center ">
            <div className="flex w-[1020px] rounded-[50px] bg-[#ffffffBF] shadow-[0px_0px_20px_#00000033] backdrop-blur fixed top-[20px] w-full justify-between items-center px-[40px] pt-[10px] pb-[10px]">
            <Link to={"/"} >
            <img  src={Logo} alt="" />
            </Link>
            <nav>
                <ul className="flex gap-[24px] ">
                <li>
                    <Link to={"/about"} >About</Link>
                </li>
                <li>
                    <Link to={"/project"}>Projects</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                </ul>
            </nav>
            </div>
            
        </header>
    )
}

export default Navbar;