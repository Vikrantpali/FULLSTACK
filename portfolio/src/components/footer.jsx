import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`${
        theme === "light" ? "bg-white" : "bg-black text-white"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-[500px]:gap-[40px] flex max-[500px]:flex-col justify-between pb-[80px] pt-[50px] `}
    >
      <div className="flex max-sm:gap-[32px] max-[500px]:justify-between gap-[52px]">
        <ul className="flex flex-col gap-[4px] ">
          <li>
            <div>Linkedin</div>
          </li>
          <li>
            <div>Github</div>
          </li>
          <li>
            <div>Instagram</div>
          </li>
        </ul>
        <ul className="flex flex-col max-sm:w-[120px] gap-[4px] ">
          <li>
            <a href="mailto:vikrant04@gmail.com">Mail</a>
          </li>
          <li>
            <a href="tel: +91 9130898829">Phone Number</a>
          </li>
        </ul>
      </div>
      <div className="flex max-sm:gap-[32px] max-[500px]:justify-between gap-[52px]">
        <ul className="flex flex-col gap-[4px] ">
          <li>
            <Link to={"/project/tailwind-project"}>Tailwind Project</Link>
          </li>
          <li>
            <Link to={"/project/altitude-project"}>Altitude Charter</Link>
          </li>
          <li>
            <Link to={"/project/portfolio-project"}>Portfolio Project</Link>
          </li>
        </ul>
        <ul className="flex max-sm:w-[120px] flex-col gap-[4px] ">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/project"}>Project</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
