import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      id="hero"
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
      className="h-[100vh] pl-[80px] max-lg:px-[40px] max-md:px[20px] pt-[150px] max-sm:pt-[150px]"
    >
      <h1 className="w-[700px] max-md:w-full text-[78px] max-md:text-[56px] max-sm:text-[44px] leading-[100%]">
        Welcome to my website
      </h1>
      <Link to={"/about"}>
        <button
          style={{
            border: theme === "light" ? "1px solid black" : "1px solid white",
          }}
          className="px-[36px] max-sm:w-[90%] max-sm:absolute max-sm:bottom-[40px] max-sm:right-[15px] py-[8px] mt-[24px] border-[1px] border-black rounded-[35px] hover:bg-black hover:text-white max-sm:text-white max-sm:bg-black duration-500 transition-all"
        >
          About
        </button>
      </Link>
    </main>
  );
}

export default Hero;
