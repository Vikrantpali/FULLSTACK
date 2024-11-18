import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-[80px] bg-white flex justify-between pb-[80px] pt-[50px] ">
        <div className="flex gap-[52px]">
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
      <ul className="flex flex-col gap-[4px] ">
        <li>
          <a href="mailto:vikrant04@gmail.com">Mail</a>
        </li>
        <li>
          <a href="tel: +91 9130898829">Phone Number</a>
        </li>
      </ul>
        </div>
      
      <ul className="flex flex-col gap-[4px] ">
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
    </footer>
  );
}

export default Footer;
