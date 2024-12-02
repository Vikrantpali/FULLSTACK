import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero(){
    const {theme} = useContext(ThemeContext);
    return(
        <main className={`${
            theme === "light"
              ? "text-black"
              : "text-white bg-black"
          } px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[600px] max-[1100px]:h-auto max-[1100px]:pb-[50px] relative pt-[180px] max-md:pt-[120px] `}>
            <h1 className="text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[55px] font-semibold w-[970px] max-[1100px]:w-full capitalize leading-[120%]">Hi, <br />I'm Vikrant, <br />Full Stack Developer</h1>
        </main>
    )
}

export default Hero;