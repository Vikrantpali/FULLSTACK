import React, { useContext } from "react";
import Logo from '../../assets/logo.svg' 
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

function Navbar() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <header style={{color: theme === "light" ? "black" : "white",}} className="px-[80px] shadow-[0px_0px_10px_black] backdrop-blur-lg fixed z-[999] w-full flex justify-between items-center py-[20px]">
        <NavLink to={'/'}>
      <img style={{filter: theme === "light" ? "invert(0)" : "invert(1)",}} src={Logo} height={50} width={50} alt="" />
        </NavLink>
      <nav className="flex flex-row-reverse gap-[128px]">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
        <ul className="flex gap-[24px]"> 
          <li>
            <NavLink to='/about' activeClassName='underline'>About</NavLink>
          </li>
          <li>
            <NavLink to={'/services'}>Services</NavLink>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <NavLink to={'contact'}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
