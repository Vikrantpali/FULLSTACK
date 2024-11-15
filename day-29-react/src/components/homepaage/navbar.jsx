import React from "react";
import Logo from '../../assets/logo.svg' 

function Navbar() {
  return (
    <header className="px-[80px] shadow-[0px_0px_10px_black] backdrop-blur-lg fixed w-full flex justify-between item-center py-[20px]">
      <img src={Logo} height={50} width={50} alt="" />
      <nav>
        <ul className="flex gap-[24px]">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
